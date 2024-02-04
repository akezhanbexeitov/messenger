import Block, { Events } from "../../../core/Block"
import template from "./delete-member.hbs?raw"

interface IProps {
  handleDeleteMember: () => void
  events?: Events
}

export class DeleteMember extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        click: props.handleDeleteMember
      }
    })
  }

  protected render(): string {
    return template
  }
}
