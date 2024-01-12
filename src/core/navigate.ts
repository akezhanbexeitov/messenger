import * as Pages from '../pages';

const pages = {
  'login': Pages.LoginPage,
  // 'register': Pages.RegisterPage,
  // 'chats': Pages.ChatsPage,
  // 'chat': Pages.ChatPage,
  // 'profile': Pages.ProfilePage,
  // 'change-profile': Pages.ChangeProfilePage,
  // 'change-password': Pages.ChangePasswordPage,
  // '404': Pages.NotFoundPage,
  // '500': Pages.InternalServerErrorPage,
};

export function navigate(page: string): void {
  const app = document.getElementById('app');
  
  //@ts-ignore
  const Component = pages[page]
  const component = new Component();
  app?.append(component.getContent()!);
}
  