import Block from "../../core/Block";
import template from "./search.hbs?raw"

interface IProps {}

export class Search extends Block<IProps> {
    protected render(): string {
        return template
    }
}
