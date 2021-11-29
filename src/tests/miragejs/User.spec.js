import { expect } from "@jest/globals"
import { createMirageServer } from "../../mock/server"


let server

beforeEach(() => {
  server = createMirageServer()
})

afterEach(() => {
  server.shutdown()
})

const fetchData = (data) => fetch("/api/auth/login", {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})

describe("Should return error from server", () => {
  it("Should return invalid user and password", async () => {
    const response = await fetchData({user:"", paswword: ""})
    
    expect(response.status).toBe(401)
    expect(JSON.parse(response._bodyText)).toEqual({
      user: "email and/or password are invalids",
    })
  })

  it("Should return invalid password", async () => {
    const response = await fetchData({user:"user@teamintegration.com", paswword: ""})
 
    expect(response.status).toBe(401)
    expect(JSON.parse(response._bodyText)).toEqual({
      password: "password is incorrect"
    })
  })

  it("Should return invalid user", async () => {
    const response = await fetchData({user:"usser@teamintegration.com", paswword: "teamintegration"})

    expect(response.status).toBe(401)
    expect(JSON.parse(response._bodyText)).toEqual({
      user: "email and/or password are invalids",
    })
  })
})

describe("Should return success from server", () => {
  it("Should return bearer user", async () => {
    const response = await fetchData({user:"user@teamintegration.com", password: "teamintegration"})

    expect(response.status).toBe(200)
    expect(JSON.parse(response._bodyText)).toHaveProperty("bearer_token")
  })
})


describe("get token after successful login", () => {
  it("get token", async () => {
    const userInformation = await fetch("/api/auth/me", {
      method: 'GET',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'Authorization': `Bearer teste`
             }
    })
    expect(userInformation.status).toBe(401)
  })

  it("get token", async () => {
    const response = await fetchData({user:"user@teamintegration.com", password: "teamintegration"})
    const data = await response.json()

    const userInformation = await fetch("/api/auth/me", {
      method: 'GET',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${data.bearer_token}`
             }
    })
    expect(userInformation.status).toBe(200)
    expect(JSON.parse(userInformation._bodyText)).toHaveProperty("users")
  })
})