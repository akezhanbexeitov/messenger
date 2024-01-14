import Block, { Events } from "../../core/Block";
import template from './back-aside.hbs?raw'

interface IProps {
    onClick?: () => void
    events?: Events
}

export class BackAside extends Block<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    protected init(): void {
        if (this.props.onClick) {
            this.props.events = {
                click: this.props.onClick,
            };
        }
    }

    protected render(): string {
        return template
    }
}
