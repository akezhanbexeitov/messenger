import * as Icons from './components/icons';
import * as Components from './components'
import { registerComponent } from './core/registerComponent';
import { PAGES, navigate } from './core/navigate';
import Block from './core/Block';
import Handlebars from 'handlebars';

Object.entries(Icons).forEach(([ name, icon ]) => {
  Handlebars.registerPartial(name, icon);
});

registerComponent('Field', Components.Field as typeof Block)
registerComponent('Button', Components.Button as typeof Block)
registerComponent('Title', Components.Title as typeof Block)
registerComponent('ChatsCard', Components.ChatsCard as typeof Block)
registerComponent('Avatar', Components.Avatar as typeof Block)
registerComponent('ChatsList', Components.ChatsList as typeof Block)
registerComponent('Search', Components.Search as typeof Block)
registerComponent('Link', Components.Link as typeof Block)
registerComponent('BackAside', Components.BackAside as typeof Block)

document.addEventListener('DOMContentLoaded', () => navigate(PAGES.LOGIN));
