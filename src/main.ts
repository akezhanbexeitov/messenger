import * as Icons from './components/icons';
import * as Components from './components'
import { registerComponent } from './core/registerComponent';
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import Block from './core/Block';
import { Store } from './core/Store';
import { AppState } from './types';
import { initApp } from './services/initApp';
import { router } from './core/Router';

// Register icons
Object.entries(Icons).forEach(([ name, icon ]) => {
  Handlebars.registerPartial(name, icon);
});

// Register components
Object.entries(Components).forEach(([componentName, component]) => {
  registerComponent(componentName, component as typeof Block)
})

declare global {
  interface Window {
    store: Store<AppState>
  }

  type Nullable<T> = T | null
}

const initState: AppState = {
  error: null,
  user: null,
  isOpenDialogChat: false,
  chats: [],
  activeChat: null
}

window.store = new Store<AppState>(initState)

router.start()

document.addEventListener('DOMContentLoaded', () => initApp());
