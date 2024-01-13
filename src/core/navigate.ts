import * as Pages from '../pages';
import { BlockConstructable } from './registerComponent';

export enum PAGES {
  LOGIN = 'login',
  REGISTER = 'register',
  CHATS = 'chats',
  CHAT = 'chat',
  PROFILE = 'profile',
  CHANGE_PROFILE = 'change-profile',
  CHANGE_PASSWORD = 'change-password',
  NOT_FOUND = '404',
  INTERNAL_SERVER_ERROR = '500',
}

type Pages = {
  [key in PAGES]: BlockConstructable<object, object>
};

const pages: Pages = {
  [PAGES.LOGIN]: Pages.LoginPage,
  [PAGES.REGISTER]: Pages.RegisterPage,
  [PAGES.CHATS]: Pages.ChatsPage,
  [PAGES.CHAT]: Pages.ChatPage,
  [PAGES.PROFILE]: Pages.ProfilePage,
  [PAGES.CHANGE_PROFILE]: Pages.ChangeProfilePage,
  [PAGES.CHANGE_PASSWORD]: Pages.ChangePasswordPage,
  [PAGES.NOT_FOUND]: Pages.NotFoundPage,
  [PAGES.INTERNAL_SERVER_ERROR]: Pages.InternalServerErrorPage,
};

export function navigate(page: string): void {
  const app = document.getElementById('app');
  
  //@ts-ignore
  const Component = pages[page]
  const component = new Component();
  app?.replaceChildren(component.getContent()!);
}
  