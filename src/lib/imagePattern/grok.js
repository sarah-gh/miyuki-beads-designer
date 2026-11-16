const MODEL_KEY = 'mbd.xai.model';
export const DEFAULT_GROK_MODEL = 'grok-4.7';

export function readAiModel() {
  return localStorage.getItem(MODEL_KEY) || DEFAULT_GROK_MODEL;
}

export function saveAiModel(model) {
  localStorage.setItem(MODEL_KEY, model.trim());
}

const KEY = 'mbd.xai.sessionKey';

export function readAiKey() {
  return sessionStorage.getItem(KEY) ?? '';
}

export function saveAiKey(value) {
  if (value.trim()) sessionStorage.setItem(KEY, value.trim());
  else sessionStorage.removeItem(KEY);
}

export function aiProvider(key) {
  return key.trim().startsWith('gsk_') ? 'Groq' : 'Grok';
}

export async function analyzeCrop(canvas, key, model, signal) {
  const provider = aiProvider(key);
  const groq = provider === 'Groq';
  const image = canvas.toDataURL('image/jpeg', 0.85);
  const text =
    'Return {"box":{"left":0.1,"top":0.2,"right":0.9,"bottom":0.8}} using the actual subject coordinates normalized to 0–1. Return {"box":null} if there is no single subject. For an existing bead pattern treat the entire design as the subject.';
  const body = groq
    ? {
        model:
          model && model !== DEFAULT_GROK_MODEL ? model : 'qwen/qwen3.8-27b',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text },
              { type: 'image_url', image_url: { url: image } },
            ],
          },
        ],
        response_format: { type: 'json_object' },
      }
    : {
        model,
        store: false,
        input: [
          {
            role: 'user',
            content: [
              { type: 'input_text', text },
              { type: 'input_image', image_url: image },
            ],
          },
        ],
      };
  const response = await fetch(
    groq
      ? 'https://api.groq.com/openai/v1/chat/completions'
      : 'https://api.x.ai/v1/responses',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + key,
        'Content-Type': 'application/json',
      },
      signal,
      body: JSON.stringify(body),
    },
  );
  if (!response.ok)
    throw new Error(
      provider +
        ' request failed (HTTP ' +
        response.status +
        '). Check the key and model, or generate locally.',
    );
  const payload = await response.json();
  const content = groq
    ? payload.choices?.[0]?.message?.content
    : payload.output
        ?.flatMap((item) => item.content ?? [])
        .find((item) => item.type === 'output_text')?.text;
  try {
    const parsed = JSON.parse(
      content?.trim().replace(/^```(?:json)?\s*|\s*```$/gi, ''),
    );
    if (parsed === null || parsed?.box === null) return null;
    const box = parsed?.box ?? parsed;
    const { left, top, right, bottom } = box;
    if (
      [left, top, right, bottom].every(
        (v) => Number.isFinite(v) && v >= 0 && v <= 1,
      ) &&
      left < right &&
      top < bottom
    )
      return box;
  } catch {
    // Unstructured or incomplete model response.
  }
  return undefined;
}
