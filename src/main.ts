import * as Icons from './components/icons';
import * as Components from './components'
import { registerComponent } from './core/registerComponent';
import { PAGES, navigate } from './core/navigate';
import Handlebars from 'handlebars';

Object.entries(Icons).forEach(([ name, icon ]) => {
  Handlebars.registerPartial(name, icon);
});

registerComponent('Field', Components.Field)
registerComponent('Button', Components.Button)
registerComponent('Title', Components.Title)
registerComponent('ChatsCard', Components.ChatsCard)
registerComponent('Avatar', Components.Avatar)
registerComponent('ChatsList', Components.ChatsList)
registerComponent('Search', Components.Search)
registerComponent('Link', Components.Link)
registerComponent('BackAside', Components.BackAside)
registerComponent('Input', Components.Input)
registerComponent('ErrorText', Components.ErrorText)

document.addEventListener('DOMContentLoaded', () => navigate(PAGES.CHAT));
