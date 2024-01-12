import * as Templates from './components/templates';
import * as Components from './components'
import { registerComponent } from './core/registerComponent';
import { navigate } from './core/navigate';
import Block from './core/Block';
import Handlebars from 'handlebars';

Object.entries(Templates).forEach(([ name, template ]) => {
  Handlebars.registerPartial(name, template);
});

registerComponent('Field', Components.Field as typeof Block)
registerComponent('Button', Components.Button as typeof Block)
registerComponent('Title', Components.Title as typeof Block)
registerComponent('ChatsCard', Components.ChatsCard as typeof Block)
registerComponent('Avatar', Components.Avatar as typeof Block)
registerComponent('ChatsList', Components.ChatsList as typeof Block)
registerComponent('Search', Components.Search as typeof Block)

document.addEventListener('DOMContentLoaded', () => navigate('login'));
