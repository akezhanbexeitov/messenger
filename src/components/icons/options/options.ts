import { Events } from './../../../core/Block';
import Block from "../../../core/Block";
import template from './options.hbs?raw'

interface IProps { 
  onClick: () => void
  events?: Events
}

export class OptionsIcon extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        click: props.onClick
      }
    })
  }

  protected render(): string { 
    return template
  }
}