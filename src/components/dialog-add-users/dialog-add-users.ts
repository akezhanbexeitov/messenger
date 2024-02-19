import { ErrorText, Field } from "..";
import Block from "../../core/Block"
import { connect } from "../../utils/connect";
import template from "./dialog-add-users.hbs?raw"
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

export class DialogAddUsers extends Block<IProps, TRefs> {
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

  public getSelectedUsersIDs() {
    const result: number[] = []
    const select = this.refs.usersList.element as HTMLSelectElement
    const selectedOptions = select.selectedOptions as HTMLCollectionOf<HTMLOptionElement>
    Array.from(selectedOptions).forEach(element => result.push(Number(element.value)))
    return result
  }

  protected render(): string {
    return template
  }
}

export const withStoreDialogUsers = connect((state) => ({ isOpenDialogUsers: state.isOpenDialogUsers }))(DialogAddUsers);
