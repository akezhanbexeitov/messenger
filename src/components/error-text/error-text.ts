import Block from "../../core/Block"
import errorInput from "./error-input.hbs?raw"
import errorForm from "./error-form.hbs?raw"

interface IProps {
    error?: string
    type: 'input' | 'form'
}

export class ErrorText extends Block<IProps> {
    constructor(props: IProps) {
        super({
            ...props
        })
    }
    
    protected render(): string {
        return this.props.type === 'input' ? errorInput : errorForm
    }
}
