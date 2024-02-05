import Block from "../../core/Block";
import template from "./anchor.hbs?raw"

interface IProps { }

export class Anchor extends Block<IProps> {
  constructor(props: IProps) { 
    super({
      ...props
    })
  }

  protected render(): string {
      return template
  }
}
