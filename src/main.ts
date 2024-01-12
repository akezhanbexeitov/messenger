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

document.addEventListener('DOMContentLoaded', () => navigate('login'));
