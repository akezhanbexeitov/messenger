import Block from "../../core/Block";
import template from './input.hbs?raw'

interface IProps {
    type: string
    name: string
}

export class Input extends Block<IProps> {
    constructor(props: IProps) { 
        super(props)
    }

    protected render(): string {
        return template
    }
}