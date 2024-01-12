import Block from "../../core/Block";
import template from "./button.hbs?raw"

interface IProps {
    primary?: boolean
    text: string
    type: 'button' | 'submit' | 'reset'
    disabled?: boolean
    page: string
}

export class Button extends Block<IProps> { 
    constructor(props: IProps) {
        super(props)
    }

    protected render(): string {
        return template
    }
}