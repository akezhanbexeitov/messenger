import Block from "../../core/Block";
import template from './chat-options.hbs?raw'

interface IProps {}

export class ChatOptions extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props
    })
  }

  protected render(): string {
    return template
  }
}
