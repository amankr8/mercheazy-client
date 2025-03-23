export const environment = {
  production: false,
  baseUrl: import.meta.env['NG_APP_BASE_URL'] || 'http://localhost:8080',
  frontendBaseUrl:
    import.meta.env['NG_APP_FRONTEND_BASE_URL'] || 'http://localhost:4200',
  googleClientId: import.meta.env['NG_APP_GOOGLE_CLIENT_ID'],
};
