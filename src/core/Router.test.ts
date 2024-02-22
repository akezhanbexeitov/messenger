import { PAGES, Route, Router } from "./Router"
import * as Pages from "../pages"
import { expect } from "chai"
import sinon from "sinon"

describe("Router", () => {
  let router: Router

  beforeEach(() => {
    router = new Router("#app")
    router.start()
  })

  it("should create a new route", () => { 
    router.use(PAGES.LOGIN, Pages.LoginPage)
    
    expect(router.getRoute(PAGES.LOGIN)).to.be.an.instanceOf(Route)
  })

  it("should find the correct route", () => {
    router.use(PAGES.LOGIN, Pages.LoginPage)

    expect(router.getRoute(PAGES.LOGIN).match(PAGES.LOGIN)).to.be.equal(true)
  })

  it("should handle route changes", () => { 
    router.use(PAGES.LOGIN, Pages.LoginPage)

    router.go(PAGES.REGISTER)

    expect(router.getRoute(PAGES.REGISTER)).to.be.an.instanceOf(Route)
    expect(router.getRoute(PAGES.REGISTER).match(PAGES.REGISTER)).to.be.equal(true)
  })

  it("should navigate back", () => {
    const historyBackStub = sinon.stub(window.history, 'back');

    router.back();

    expect(historyBackStub.called).to.be.equal(true);
    expect(window.history.back)
  });

  it("should navigate forward", () => {
    const historyForwardStub = sinon.stub(window.history, 'forward');

    router.forward()

    expect(historyForwardStub.called).to.be.equal(true);
  })
})
