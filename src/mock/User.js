import { size, has } from "lodash";
import { Response } from "miragejs";

class User {
  constructor(user, password) {
    this.user = user;
    this.password = password;
    this.validatedSchema = {};
  }

  validate() {
    if (!this.user.includes("@")) {
      this.validatedSchema.user = "This is not a valid email";
    }else if (this.user !== "user@teamintegration.com") {
      this.validatedSchema.user = "Email and/or password are invalids";
    }

    if (
      !has(this.validatedSchema, "user") &&
      this.password !== "teamintegration"
    ) {
      this.validatedSchema.password = "Password is incorrect";
    }

    if (size(Object.values(this.validatedSchema))) {
      return new Response(401, {}, this.validatedSchema);
    }

    return new Response(
      200,
      {},
      {
        bearer_token:
          "$2a$12$gyN4eaSqX3xEr9YLw9qeR.YxPLVzF6zulhHikOZwaDD8C.JAWPLou",
      }
    );
  }
}

export default User;
