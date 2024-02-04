import { ErrorText } from './../error-text/error-text';
import Block from "../../core/Block";
import templateAuth from "./field-auth.hbs?raw"
import templateProfile from "./field-profile.hbs?raw"
import templateChat from "./field-chat.hbs?raw"
import templateSearch from "./field-search.hbs?raw"
import { Input } from '../input/input'
import { debounce } from '../../utils/helpers';

interface IProps {
    name: string
    label: string
    type: 'email' | 'password' | 'text'
    value?: string
    placeholder?: string
    disabled?: boolean
    env: 'auth' | 'profile' | 'chat' | 'search'
    onBlur?: () => void
    validate: (value: string) => boolean | string
    handleSearch: () => void
}

type TRef = {
    input: Input
    errorText: ErrorText
}

export class Field extends Block<IProps, TRef> {
    constructor(props: IProps) {
        super({
            ...props,
            onBlur: () => this.validate(),
            handleSearch: () => {
                debounce(() => {
                    
                })
            }
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
        
        if (this.props.env === 'auth') {
            return templateAuth
        }

        if (this.props.env === 'search') { 
            return templateSearch
        }
        
        return templateChat
    }
}
