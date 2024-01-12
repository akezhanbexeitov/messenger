import Block from "../../core/Block";
import templateAuth from "./field-auth.hbs?raw"
import templateProfile from "./field-profile.hbs?raw"

interface IProps {
    name: string
    label: string
    type: 'email' | 'password' | 'text'
    placeholder?: string
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
        if (this.props.env === 'profile') {
            return templateProfile
        }
        
        return templateAuth
    }
}