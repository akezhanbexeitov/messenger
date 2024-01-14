import Block from "../../core/Block"
import template from "./error-text.hbs?raw"

interface IProps {
    error?: string
}

export class ErrorText extends Block<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    
    protected render(): string {
        return template
    }
}
