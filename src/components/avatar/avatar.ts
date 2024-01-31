import Block from "../../core/Block";
import template from "./avatar.hbs?raw"
import { Input } from "../input/input"
import { changeAvatar } from "../../services/users";

interface IProps { }

type TRef = {
    input: Input
}

export class Avatar extends Block<IProps, TRef> {
    constructor() {
        super({
            handleAvatarChange: async () => {
                const input = this.refs.input.element as HTMLInputElement
                if (input.files) {
                    if (input.files.length > 0) {
                        const formData = new FormData()
                        const file = input.files[0]
                        formData.append("avatar", file)
                        try {
                            const response = await changeAvatar(formData)
                            window.store.set({ user: response });
                            console.log("STORE: ", window.store.getState())
                        } catch (error) {
                            console.error(error)
                        }
                    }
                }
            }
        })
    }

    protected render(): string {
        return template
    }
}
