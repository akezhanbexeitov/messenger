import Block, { Events } from "../../core/Block";
import templateAuth from './input-auth.hbs?raw'
import templateProfile from './input-profile.hbs?raw'
import templateChat from './input-chat.hbs?raw'
import templateSearch from './input-search.hbs?raw'

interface IProps {
    type: 'email' | 'password' | 'text' | 'file'
    name: string
    env: 'auth' | 'profile' | 'chat' | 'search'
    hidden?: boolean
    placeholder?: string
    value?: string
    onBlur?: (e: Event) => void
    onChange?: (e: Event) => void
    onInput?: (e: Event) => void
    events: Events
}

export class Input extends Block<IProps> {
    constructor(props: IProps) { 
        super({
            ...props,
        })
    }

    protected init() {
        if (this.props.onBlur) {
            this.props.events = {
                blur: this.props.onBlur
            }
        }

        if (this.props.onChange) {
            this.props.events = {
                change: this.props.onChange
            }
        }

        if (this.props.onInput) {
            this.props.events = {
                input: this.props.onInput
            }
        }
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
