import type { IAuthEndpoint } from "@spotube-app/plugin";

export default class AuthEndpoint implements IAuthEndpoint {
  authenticate(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  isAuthenticated(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}