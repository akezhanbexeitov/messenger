import { expect } from "chai"
// eslint-disable-next-line import/extensions
import Block, { Events } from "./Block.ts"
import sinon from "sinon"

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

    expect(elementValue).to.be.equal(text)
  })

  it("should have reactive behavior", () => {
    const text = "Hello world"
    const component = new ComponentClass({ text })

    const newText = "New hello world"
    component.setProps({ text: newText })
    const element = component.element as HTMLDivElement
    const elementValue = element.querySelector("#test-text")?.innerHTML

    expect(elementValue).to.be.equal(newText)
  })

  it("should handle events properly", () => {
    const stub = sinon.stub()
    const component = new ComponentClass({
      events: {
        click: stub
      }
    })

    const clickEvent = new MouseEvent("click")
    const element = component.element as HTMLDivElement
    element.dispatchEvent(clickEvent)

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(stub.calledOnce).to.be.true
  })

  it("should call dispatchComponentDidMount method", () => { 
    const clock = sinon.useFakeTimers()
    const component = new ComponentClass()

    const spy = sinon.spy(component, 'componentDidMount')

    const element = component.getContent()
    document.body.appendChild(element!)
    clock.next()

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(spy.calledOnce).to.be.true
  })
})
