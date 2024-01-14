import { ErrorText } from './../error-text/error-text';
import Block from "../../core/Block";
import templateAuth from "./field-auth.hbs?raw"
import templateProfile from "./field-profile.hbs?raw"
import { Input } from '../input/input.ts'

interface IProps {
    name: string
    label: string
    type: 'email' | 'password' | 'text'
    placeholder?: string
    disabled?: boolean
    env: 'auth' | 'profile'
    onBlur: () => void
    validate: (value: string) => boolean | string
}

type TRef = {
    input: Input
    errorText: ErrorText
}

export class Field extends Block<IProps, TRef> {
    constructor(props: IProps) {
        super({
            ...props,
            onBlur: () => this.validate()
        })
    }

    public value() {
        if (!this.validate()) {
            return null;
        }
        const element = this.refs.input.element as HTMLInputElement
        return element.value
    }

    private validate() {
        const element = this.refs.input.element as HTMLInputElement
        const value = element.value
        const error = this.props.validate(value)
        if (error) {
            this.refs.errorText.setProps({ error })
            return false
        }
        this.refs.errorText.setProps({ error: undefined })
        return true
    }

    protected render(): string {
        if (this.props.env === 'profile') {
            return templateProfile
        }
        
        return templateAuth
    }
}