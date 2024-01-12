import Block from "../../core/Block";
import template from "./field.hbs?raw"

interface IProps {
    name: string
    label: string
    type: 'email' | 'password' | 'text'
    placeholder: string
    disabled?: boolean
    env?: 'auth' | 'profile'
}

export class Field extends Block<IProps> {
    constructor(props: IProps) {
        super({
            ...props
        })
    }

    protected render(): string {
        return template
    }
}