import Block from "../../core/Block";
import template from "./dialog.hbs?raw";

interface Props {
  open: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Refs = {}

export class Dialog extends Block<Props, Refs> {
  protected render(): string {
    return template
  }
}
