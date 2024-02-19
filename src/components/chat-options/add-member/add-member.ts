import Block, { Events } from "../../../core/Block"
import template from "./add-member.hbs?raw"

interface IProps {
  handleAddMember: () => void
  events?: Events
}

export class AddMember extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        click: props.handleAddMember
      }
    })
  }

  protected render(): string {
    return template
  }
}
