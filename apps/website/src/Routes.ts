export enum PagesRoutes {
  Home = '/',
  Demo = '/demo',

  LogIn = '/auth/sign-in',
  SignUp = '/auth/sign-up',
  ForgotPassword = '/auth/password/reset',
  ChangePassword = '/auth/password/change',

  PrivacyPolicy = '/privacy-notice',
  TermsOfService = '/terms-of-services',

  ChatWithUs = '/chat-with-us',
  Pricing = '/pricing',
  AboutUs = '/about-us',

  // Post
  CreatePost = '/create-post',
}

export enum APIRoutes {
  // Auth
  SignUp = '/api/auth/proxy/sign-up',
  SignIn = '/api/auth/proxy/sign-in',
  DeleteUser = '/api/auth/proxy/delete-user',
  UpdatePassword = '/api/auth/proxy/password/update',
  SendPasswordResetEmail = '/api/auth/proxy/password/reset',
  ConfirmPassword = '/api/auth/proxy/password/reset/confirm',
  VerifyEmail = '/api/auth/proxy/email-verification',
}

export enum ExternalLinks {
  Github = 'https://github.com/aypineau/intlayer',
  InterestOfIntlayer = 'https://github.com/aypineau/intlayer/blob/main/docs/interest_of_intlayer.md',
  IntlayerWithNextjs = 'https://github.com/aypineau/intlayer/blob/main/docs/intlayer_with_nextjs.md',
  IntlayerWithReact = 'https://github.com/aypineau/intlayer/blob/main/docs/intlayer_with_create_react_app.md',
  IntlayerWithVite = 'https://github.com/aypineau/intlayer/blob/main/docs/intlayer_with_vite%2Breact.md',
}