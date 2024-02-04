import { ErrorText, Field } from "..";
import Block from "../../core/Block"
import { connect } from "../../utils/connect";
import template from "./dialog-find-users.hbs?raw"
import { userName } from "../../utils/validators";
import { UsersList } from "../users-list/users-list";

interface IProps {
  isOpenDialogUsers: boolean
  onClose: () => void
  addUserToChat: () => void
  validate: Record<string, (value: string) => string | boolean>
  onInput: () => void
}

type TRefs = {
  userName: Field,
  errorText: ErrorText
  usersList: UsersList
}

export class DialogFindUsers extends Block<IProps, TRefs> {
  constructor(props: IProps) {
    super({
      ...props,
      validate: {
        findUser: userName
      }
    })
  }

  public getUserName() {
    return this.refs.userName.value();
  }

  public setError(error: unknown) {
    this.refs.errorText.setProps({ error })
  }

  public getSelectedUserId() {
    const element = this.refs.usersList.element as HTMLSelectElement
    return element.value
  }

  protected render(): string {
    return template
  }
}

export const withStoreDialogUsers = connect((state) => ({ isOpenDialogUsers: state.isOpenDialogUsers }))(DialogFindUsers);
