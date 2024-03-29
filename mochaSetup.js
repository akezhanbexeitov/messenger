/* eslint-disable import/no-extraneous-dependencies */
import { JSDOM } from 'jsdom';
import { describe, it } from 'mocha';
// import Handlebars from 'handlebars';
// import * as Icons from './src/components/icons';
// import * as Components from './src/components'

// jsdom
const jsdom = new JSDOM(
  `<body>
    <div id="app"></div>
  </body>`,
  { url: "https://localhost:3000"}
);

global.window = jsdom.window;
global.document = jsdom.window.document;
global.Node = jsdom.window.Node;
global.MouseEvent = jsdom.window.MouseEvent;

// mocha
global.describe = describe;
global.it = it;

// // Register helpers
// Handlebars.registerHelper('not', function(value) {
//     return !value;
// });

// Handlebars.registerHelper('isAdmin', () => {
//   const userId = window.store.getState().user?.id
//   const userRole = window.store.getState().activeChat?.users?.find(user => user.id === userId)?.role
//   return userRole === 'admin'
// });

// // Register icons
// Object.entries(Icons).forEach(([ name, icon ]) => {
//   Handlebars.registerPartial(name, icon);
// });

// // Register components
// Object.entries(Components).forEach(([componentName, component]) => {
//   registerComponent(componentName, component)
// })
