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
    env?: 'auth' | 'profile'
}

type TRef = {
    input: Input
}

export class Field extends Block<IProps, TRef> {
    constructor(props: IProps) {
        super({
            ...props
        })
    }

    public value() {
        // @ts-ignore
        return this.refs.input.element.value
    }

    protected render(): string {
        if (this.props.env === 'profile') {
            return templateProfile
        }
        
        return templateAuth
    }
}