import { LoginPage } from '../../../pages/LoginPage'
import { MainPage } from '../../../pages/MainPage'

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  NOT_FOUND = '404'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, { element: any; path: any; }> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage/>,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['404'],
    element: <div>404</div>,
  },
}
