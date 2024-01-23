import Block, { Events } from '../../core/Block';
import button from './button.hbs?raw';
import buttonProfile from './button-profile.hbs?raw';
import buttonChat from './button-chat.hbs?raw';

interface IProps {
  primary?: boolean
  text: string
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  events?: Events
  env: 'chat' | 'profile'
  danger?: boolean
}

export class Button extends Block<IProps> {
  protected init(): void {
    if (this.props.onClick) {
      this.props.events = {
        click: this.props.onClick,
      };
    }
  }

  protected render(): string {
    if (this.props.env === 'profile') {
      return buttonProfile
    }

    if (this.props.env === 'chat') {
      return buttonChat
    }
    
    return button
  }
}
