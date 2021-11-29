import { createServer, Model, Response } from "miragejs"
import { get } from "lodash"
import User from "./User"

export const createMirageServer = () => createServer({
    models: {
      users: Model,
    },

    seeds(server) {
      server.create("user", {id: 1, name: "Team Integration", age: 12},)
    },

    routes() {
      this.namespace = "api"
  
      this.post("/auth/login", (schema, {requestBody}) => {
          let attrs = JSON.parse(requestBody)
          const user = get(attrs, "user", "")
          const password = get(attrs, "password", "")
          
          return new User(user, password).validate()
      })

      this.get("/auth/me", (schema, request) => {
        if(request.requestHeaders.Authorization.replace("Bearer ", "") !== "$2a$12$gyN4eaSqX3xEr9YLw9qeR.YxPLVzF6zulhHikOZwaDD8C.JAWPLou") {
          return new Response(401, {})
        }
       return schema.users.find(1)
      })
    },
  })