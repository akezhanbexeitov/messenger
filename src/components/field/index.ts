// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars'
export { default as Field } from './field.hbs?raw'

Handlebars.registerHelper('isAuthField', (value) => {
  return value === 'auth'
});

Handlebars.registerHelper('isProfileField', (value) => {
  return value === 'profile'
});
