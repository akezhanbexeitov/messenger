import { expect } from "chai"
import { router } from "./Router.ts"

describe("Router", () => {
  before(() => {
    router.start()
  })

  it("should do something", () => {
    expect(true).to.equal(true)
  })
})
