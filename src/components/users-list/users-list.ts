import Block from "../../core/Block";
import { ActiveChat, User } from "../../types";
import { connect } from "../../utils/connect";
import template from './users-list.hbs?raw'

interface IProps { 
  usersSearched: User[]
  name: string
  activeChat: ActiveChat
  isOpenDialogUsers: boolean
  isOpenDialogDeleteUsers: boolean
  users: () => User[]
}

type TRefs = {
  select: HTMLSelectElement
}

export class UsersList extends Block<IProps, TRefs> {
  constructor(props: IProps) {
    super({
      ...props,
      users: () => {
        return props.activeChat?.users?.filter(user => user.id !== window.store.getState().user?.id) as User[]
      }
    })
  }

  protected render(): string { 
    return template
  }
}

export default connect(({
  usersSearched,
  activeChat,
  isOpenDialogUsers,
  isOpenDialogDeleteUsers
}) => ({
  usersSearched,
  activeChat,
  isOpenDialogUsers,
  isOpenDialogDeleteUsers
}))(UsersList)
