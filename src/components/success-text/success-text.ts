import Block from "../../core/Block"
import template from "./success-text.hbs?raw"

interface IProps {
    success?: string
}

export class SuccessText extends Block<IProps> {
    constructor(props: IProps) {
        super({
            ...props
        })
    }
    
    protected render(): string {
        return template
    }
}
