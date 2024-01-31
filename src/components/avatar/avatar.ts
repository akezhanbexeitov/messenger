import Block from "../../core/Block";
import template from "./avatar.hbs?raw"

interface IProps { 
    events: {
        change: (event: Event) => void
    }
}

type TRefs = {
    avatarRef: HTMLInputElement
}

export class Avatar extends Block<IProps, TRefs> {
    protected init() {
        this.props.events = {
            change: () => {
                console.log("SOmething happened")
            }
        }
    }

    protected render(): string {
        return template
    }
}
