export const environment = {
  production: false,
  apiUrl: import.meta.env['NG_APP_API_URL'] || 'http://localhost:8080',
  frontendUrl:
    import.meta.env['NG_APP_FRONTEND_URL'] || 'http://localhost:4200',
  googleClientId: import.meta.env['NG_APP_GOOGLE_CLIENT_ID'],
};
