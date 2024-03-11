// © 2024 Vasiliy Lawing
export enum Role {
  guest = 0,
  USER = 1,
  ADMIN = 2
}

export function parseRole(str: string): Role {
  if(str == "ADMIN")
    return Role.ADMIN;

  if(str == "USER")
    return Role.USER;

  return Role.guest;
}

export interface UserJson {
  username: string;
  role: string;
  token: string;
}

export class User {


  constructor(public readonly username: string, public readonly role: Role, public readonly token: string) {}
  public changingPassword = false

  public toggleChangingPassword() {
    this.changingPassword = !this.changingPassword
  }
  static parseFromJson(json: UserJson): User {
    return new User(json.username, parseRole(json.role), json.token);
  }
}
