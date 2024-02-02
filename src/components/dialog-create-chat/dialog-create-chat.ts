import { ErrorText, Field } from "..";
import Block from "../../core/Block";
import { connect } from "../../utils/connect";
import template from "./dialog-create-chat.hbs?raw"
import { chatTitle } from "../../utils/validators";

interface Props {
  isOpenDialogChat: boolean,
  onSave: () => void,
  onClose: () => void,
  error: string
  validate: Record<string, (value: string) => string | boolean>
}

type Refs = {
  chatTitle: Field,
  errorText: ErrorText
}

export class DialogCreateChat extends Block<Props, Refs> {
  constructor(props: Props) {
    super({
      ...props,
      validate: {
        chatTitle: chatTitle
      }
    })
  }

  public getChatTitle() {
    return this.refs.chatTitle.value();
  }

  public setError(error: string) {
    this.refs.errorText.setProps({error})
  }

  protected render(): string {
      return template
  }
}

export const withStoreDialogCreateChat = connect((state) => ({ isOpenDialogChat: state.isOpenDialogChat }))(DialogCreateChat);
