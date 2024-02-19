import { ErrorText, Field } from "..";
import Block from "../../core/Block"
import { connect } from "../../utils/connect";
import template from "./dialog-delete-users.hbs?raw"
import { UsersList } from "../users-list/users-list";

interface IProps {
  isOpenDialogDeleteUsers: boolean
  onClose: () => void
  deleteUsersFromChat: () => void
  validate: Record<string, (value: string) => string | boolean>
  onInput: () => void
}

type TRefs = {
  userName: Field,
  errorText: ErrorText
  usersList: UsersList
}

export class DialogDeleteUsers extends Block<IProps, TRefs> {
  constructor(props: IProps) {
    super({
      ...props
    })
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

export const withStoreDialogDeleteUsers = connect((state) => ({ isOpenDialogDeleteUsers: state.isOpenDialogDeleteUsers }))(DialogDeleteUsers);
