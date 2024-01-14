import Block, { Events } from "../../core/Block";
import templateAuth from './input-auth.hbs?raw'
import templateProfile from './input-profile.hbs?raw'

interface IProps {
    type: 'email' | 'password' | 'text'
    name: string
    env: 'auth' | 'profile'
    placeholder?: string
    onBlur: () => void
    events: Events
}

export class Input extends Block<IProps> {
    constructor(props: IProps) { 
        super({
            ...props,
            events: {
                blur: props.onBlur
            }
        })
    }

    protected render(): string {
        if (this.props.env === 'profile') {
            return templateProfile
        }
        
        return templateAuth
    }
}