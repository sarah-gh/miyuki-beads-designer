import { httpGoogle } from './index';

const END_POINT = 'oauth2/v3/userinfo';

const getGoogleUser = () => httpGoogle.get(END_POINT);

export { getGoogleUser };
