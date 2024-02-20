import sinon from "sinon"
import HTTPTransport, { METHODS } from "./http"
import { expect } from "chai"
import constants from "../constants"

describe("HTTPTransport", () => {
  let http: HTTPTransport
  let requestStub: sinon.SinonStub

  before(() => {
    http = new HTTPTransport("/api")
    requestStub = sinon.stub(http, "request").resolves({ response: "OK" } as XMLHttpRequest);
  })

  describe("queryStringify", () => {
    it("should return correct query string", () => { 
      const data = { a: '1', b: '22' }
      const expected = "?a=1&b=22"
      expect(http.queryStringify(data)).to.be.equal(expected)
    })
  })

  it("should call request with correct url and GET method", async () => { 
    await http.get("/test")

    const expectedURL = `${constants.HOST}/api/test`
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(requestStub.calledWithMatch(expectedURL, { method: METHODS.GET })).to.be.true
  })

  it("should call request with correct url and POST method", async () => { 
    await http.post("/test")

    const expectedURL = `${constants.HOST}/api/test`
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(requestStub.calledWithMatch(expectedURL, { method: METHODS.POST })).to.be.true
  })

  it("should call request with correct url and PUT method", async () => { 
    await http.put("/test")

    const expectedURL = `${constants.HOST}/api/test`
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(requestStub.calledWithMatch(expectedURL, { method: METHODS.PUT })).to.be.true
  })

  it("should call request with correct url and DELETE method", async () => { 
    await http.delete("/test")

    const expectedURL = `${constants.HOST}/api/test`
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(requestStub.calledWithMatch(expectedURL, { method: METHODS.DELETE })).to.be.true
  })
})
