import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'login': [ Pages.LoginPage ],
  'register': [Pages.RegisterPage],
  'chats': [Pages.ChatsPage],
  'chat': [Pages.ChatPage],
  'profile': [Pages.ProfilePage],
  'change-profile': [Pages.ChangeProfilePage],
  'change-password': [Pages.ChangePasswordPage],
  '404': [Pages.NotFoundPage],
  '500': [Pages.InternalServerErrorPage],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
