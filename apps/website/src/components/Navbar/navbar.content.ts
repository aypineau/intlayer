import type { NavSection } from '@intlayer/design-system';
import { type DeclarationContent, t } from 'intlayer';
import { PagesRoutes } from '@/Routes';

type SectionsContent = {
  sections: Omit<NavSection, 'onClick'>[];
  // bottomSections: Omit<NavSection, 'onClick'>[];
  logo: {
    label: string;
    url: string;
  };
};

export const navbarContent: DeclarationContent<SectionsContent> = {
  id: 'navbar',
  logo: {
    label: t({
      en: 'Company logo - Go to home page',
      fr: "Logo de l'entreprise - Aller à la page d’accueil",
      es: 'Logotipo de la empresa - Ir a la página de inicio',
    }),
    url: PagesRoutes.Home,
  },
  sections: [
    {
      id: 'home',
      title: t({
        en: 'Home',
        fr: 'Accueil',
        es: 'Inicio',
      }),
      url: PagesRoutes.Home,
      label: t({
        en: 'Go to home page',
        fr: 'Aller à la page d’accueil',
        es: 'Ir a la página de inicio',
      }),
    },
    {
      id: 'demo',
      title: t({
        en: 'Demo',
        fr: 'Démo',
        es: 'Demo',
      }),
      url: PagesRoutes.Demo,
      label: t({
        en: 'Go to the demo page',
        fr: 'Aller à la page de démo',
        es: 'Ir a la página de demostración',
      }),
    },
    {
      id: 'doc',
      title: 'Doc',
      url: PagesRoutes.Doc,
      label: t({
        en: 'Go to the documentation page',
        fr: 'Aller à la page de documentation',
        es: 'Ir a la página de documentation',
      }),
    },
  ],
  // bottomSections: {
  //   logout: {
  //     id: 'logout',
  //     url: '/auth/signout',
  //     title: t({
  //       en: 'Logout',
  //       fr: 'Déconnexion',
  //       es: 'Cerrar sesión',
  //     }),
  //     label: t({
  //       en: 'Logout',
  //       fr: 'Se déconnecter',
  //       es: 'Cerrar sesión',
  //     }),
  //   },
  //   login: {
  //     id: 'login',
  //     url: '/auth/signin',
  //     title: t({
  //       en: 'Login',
  //       fr: 'Connexion',
  //       es: 'Iniciar sesión',
  //     }),
  //     label: t({
  //       en: 'Go to login page',
  //       fr: 'Aller à la page de connexion',
  //       es: 'Ir a la página de inicio de sesión',
  //     }),
  //   },
  // },
  // profile: {
  //   label: t({
  //     en: 'Manage profile',
  //     fr: 'Gérer le profil',
  //     es: 'Administrar perfil',
  //   }),
  // },
  // login: {
  //   text: t({
  //     en: 'Login',
  //     fr: 'Connexion',
  //     es: 'Iniciar sesión',
  //   }),
  //   label: t({
  //     en: 'Login to app',
  //     fr: "Connexion à l'application",
  //     es: 'Iniciar sesión en la aplicación',
  //   }),
  // },
};
