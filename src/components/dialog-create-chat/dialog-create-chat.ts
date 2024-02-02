import { ErrorText, Field } from "..";
import Block from "../../core/Block";
import { connect } from "../../utils/connect";

interface Props {
  isOpenDialogChat: boolean,
  onSave: () => void,
  onClose: () => void,
  error: string
}

type Refs = {
  chatTitle: Field,
  errorText: ErrorText
}

export class DialogCreateChat extends Block<Props, Refs> {
  constructor(props: Props) {
    super({
      ...props,
    })
  }

  public getChatTitle() {
    return this.refs.chatTitle.value();
  }

  public setError(error: string) {
    this.refs.errorText.setProps({error})
  }

  protected render(): string {
      return `
          
      `
  }
}

export const withStoreDialogCreateChat = connect((state) => ({ isOpenDialogChat: state.isOpenDialogChat }))(DialogCreateChat);
