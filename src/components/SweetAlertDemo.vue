<template>
  <div class="mx-auto max-w-4xl p-6">
    <h1 class="mb-8 text-3xl font-bold text-gray-900">SweetAlert2 Demo</h1>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <!-- Success Alert -->
      <button
        class="rounded-lg bg-green-500 px-4 py-3 font-medium text-white transition-colors hover:bg-green-600"
        @click="handleSuccess"
      >
        Success Alert
      </button>

      <!-- Error Alert -->
      <button
        class="rounded-lg bg-red-500 px-4 py-3 font-medium text-white transition-colors hover:bg-red-600"
        @click="handleError"
      >
        Error Alert
      </button>

      <!-- Warning Alert -->
      <button
        class="rounded-lg bg-yellow-500 px-4 py-3 font-medium text-white transition-colors hover:bg-yellow-600"
        @click="handleWarning"
      >
        Warning Alert
      </button>

      <!-- Info Alert -->
      <button
        class="rounded-lg bg-blue-500 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-600"
        @click="handleInfo"
      >
        Info Alert
      </button>

      <!-- Confirmation Dialog -->
      <button
        class="rounded-lg bg-purple-500 px-4 py-3 font-medium text-white transition-colors hover:bg-purple-600"
        @click="handleConfirm"
      >
        Confirmation Dialog
      </button>

      <!-- Input Prompt -->
      <button
        class="rounded-lg bg-indigo-500 px-4 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
        @click="handleInput"
      >
        Input Prompt
      </button>

      <!-- Loading State -->
      <button
        class="rounded-lg bg-gray-500 px-4 py-3 font-medium text-white transition-colors hover:bg-gray-600"
        @click="handleLoading"
      >
        Loading State
      </button>

      <!-- Toast Notification -->
      <button
        class="rounded-lg bg-pink-500 px-4 py-3 font-medium text-white transition-colors hover:bg-pink-600"
        @click="handleToast"
      >
        Toast Notification
      </button>

      <!-- Custom Alert -->
      <button
        class="rounded-lg bg-orange-500 px-4 py-3 font-medium text-white transition-colors hover:bg-orange-600"
        @click="handleCustom"
      >
        Custom Alert
      </button>
    </div>

    <!-- Results Display -->
    <div
      v-if="lastResult"
      class="mt-8 rounded-lg bg-gray-100 p-4"
    >
      <h3 class="mb-2 font-semibold text-gray-800">Last Result:</h3>
      <pre class="text-sm text-gray-600">{{
        JSON.stringify(lastResult, null, 2)
      }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  showSuccess,
  showError,
  showWarning,
  showInfo,
  showConfirm,
  showInput,
  showLoading,
  closeLoading,
  showToast,
  showCustom,
} from '@/lib/utils/sweetalert';

const lastResult = ref(null);

const handleSuccess = async () => {
  const result = await showSuccess(
    'Great job!',
    'Your action was completed successfully.',
  );
  lastResult.value = { type: 'success', result };
};

const handleError = async () => {
  const result = await showError(
    'Oops!',
    'Something went wrong. Please try again.',
  );
  lastResult.value = { type: 'error', result };
};

const handleWarning = async () => {
  const result = await showWarning(
    'Be careful!',
    'This action might have consequences.',
  );
  lastResult.value = { type: 'warning', result };
};

const handleInfo = async () => {
  const result = await showInfo(
    'Did you know?',
    "SweetAlert2 is a beautiful, responsive, customizable replacement for JavaScript's popup boxes.",
  );
  lastResult.value = { type: 'info', result };
};

const handleConfirm = async () => {
  const result = await showConfirm(
    'Delete item?',
    'This action cannot be undone.',
  );
  if (result.isConfirmed) {
    await showSuccess('Deleted!', 'Your item has been deleted.');
  }
  lastResult.value = { type: 'confirm', result };
};

const handleInput = async () => {
  const result = await showInput('Enter your name', 'Name', 'John Doe');
  if (result.isConfirmed) {
    await showSuccess('Hello!', `Nice to meet you, ${result.value}!`);
  }
  lastResult.value = { type: 'input', result };
};

const handleLoading = async () => {
  showLoading('Processing your request...');

  // Simulate async operation
  setTimeout(async () => {
    closeLoading();
    await showSuccess('Done!', 'Your request has been processed.');
  }, 2000);
};

const handleToast = () => {
  showToast('This is a toast notification!', 'success', 'top-end');
  lastResult.value = { type: 'toast', message: 'Toast notification shown' };
};

const handleCustom = async () => {
  const result = await showCustom({
    title: 'Custom Alert',
    html: `
      <div class="text-left">
        <p class="mb-4">This is a custom alert with HTML content.</p>
        <ul class="list-disc list-inside text-sm text-gray-600">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    `,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Awesome!',
    cancelButtonText: 'Not impressed',
  });
  lastResult.value = { type: 'custom', result };
};
</script>

<style scoped>
/* Additional custom styles can be added here */
</style>
