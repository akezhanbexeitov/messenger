import Block from "../../core/Block";
import { User } from "../../types";
import { connect } from "../../utils/connect";
import template from './users-list.hbs?raw'

interface IProps { 
  usersSearched: User[]
  name: string
}

type TRefs = {
  select: HTMLSelectElement
}

export class UsersList extends Block<IProps, TRefs> {
  constructor(props: IProps) {
    super({
      ...props
    })
  }

  protected render(): string { 
    return template
  }
}

export default connect(({ usersSearched }) => ({ usersSearched }))(UsersList)
