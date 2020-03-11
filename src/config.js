const CLIENT_ID = process.env.CLIENT_ID || '0oa389kc0gf1eepin4x6';
const ISSUER = process.env.ISSUER || 'https://dev-230436.okta.com/oauth2/default'

export default {
  clientId: CLIENT_ID,
  issuer: ISSUER,
  redirectUri: 'http://localhost:8081/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: false,
};