import Block from "../../core/Block"
import { connect } from "../../utils/connect";
import template from "./dialog-find-users.hbs?raw"

interface IProps {
  isOpenDialogUsers: boolean
  onClose: () => void
  addUserToChat: () => void
}

export class DialogFindUsers extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props
    })
  }

  protected render(): string {
    return template
  }
}

export const withStoreDialogUsers = connect((state) => ({ isOpenDialogUsers: state.isOpenDialogUsers }))(DialogFindUsers);
