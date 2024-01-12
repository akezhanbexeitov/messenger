import Block, { Events } from "../../core/Block";
import template from "./button.hbs?raw"

interface IProps {
    primary?: boolean
    text: string
    type: 'button' | 'submit' | 'reset'
    disabled?: boolean
    page: string
    onClick?: () => void
    events?: Events
}

export class Button extends Block<IProps> { 
    constructor(props: IProps) {
        super(props)
    }

    protected init(): void {
        if (this.props.onClick) {
            this.props.events = {
                click: this.props.onClick
            }
        }
    }

    protected render(): string { 
        return template
    }
}
