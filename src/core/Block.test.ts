import { expect } from "chai"
// eslint-disable-next-line import/extensions
import Block, { Events } from "./Block.ts"

interface Props {
  text?: string
  events?: Events
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Refs = {}

describe("Block", () => {
  let ComponentClass: typeof Block<Props, Refs>

  before(() => {
    class Component extends Block<Props, Refs> {
      constructor(props: Props) {
        super({
          ...props
        })
      }

      protected render(): string {
        return (
          `<div>
            <p id="test-text">{{ text }}</p>
            <button>{{ text-button }}</button>
          </div>`
        )
      }
    }

    ComponentClass = Component
  })

  it("should render component with constructor props", () => {
    const text = "Hello world"
    const component = new ComponentClass({ text })

    const element = component.element as HTMLDivElement
    const elementValue = element.querySelector("#test-text")?.innerHTML

    expect(elementValue).to.include("Hello world")
  })
})