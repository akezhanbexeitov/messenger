import Block from "../../core/Block"
import template from "./loader.hbs?raw"

interface IProps {}

export class Loader extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props
    })
  }

  protected render(): string {
    return template
  }
}
