import * as Pages from '../pages';
import Block from './Block';

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
  [key in PAGES]: typeof Block;
};

const pages: Pages = {
  [PAGES.LOGIN]: Pages.LoginPage as typeof Block,
  [PAGES.REGISTER]: Pages.RegisterPage as typeof Block,
  [PAGES.CHATS]: Pages.ChatsPage as typeof Block,
  [PAGES.CHAT]: Pages.ChatPage as typeof Block,
  [PAGES.PROFILE]: Pages.ProfilePage as typeof Block,
  [PAGES.CHANGE_PROFILE]: Pages.ChangeProfilePage as typeof Block,
  [PAGES.CHANGE_PASSWORD]: Pages.ChangePasswordPage as typeof Block,
  [PAGES.NOT_FOUND]: Pages.NotFoundPage as typeof Block,
  [PAGES.INTERNAL_SERVER_ERROR]: Pages.InternalServerErrorPage as typeof Block,
};

export function navigate(page: string): void {
  const app = document.getElementById('app');
  
  //@ts-ignore
  const Component = pages[page]
  const component = new Component();
  app?.append(component.getContent()!);
}
  