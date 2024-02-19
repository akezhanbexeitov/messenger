import Block from "../../core/Block";
import { ActiveChat, ChatUser, User } from "../../types";
import { connect } from "../../utils/connect";
import template from './users-list.hbs?raw'

interface IProps { 
  usersSearched: User[]
  name: string
  activeChat: ActiveChat
  isOpenDialogUsers: boolean
  isOpenDialogDeleteUsers: boolean
  users: () => ChatUser[]
}

type TRefs = {
  select: HTMLSelectElement
}

export class UsersList extends Block<IProps, TRefs> {
  constructor(props: IProps) {
    super({
      ...props,
      users: () => {
        return props.activeChat?.users?.filter(user => user.id !== window.store.getState().user?.id) as ChatUser[]
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
