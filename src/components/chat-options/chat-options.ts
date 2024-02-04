import Block, { Events } from "../../core/Block";
import template from './chat-options.hbs?raw'

interface IProps {
  handleAddMember: () => void
  events?: Events
}

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
