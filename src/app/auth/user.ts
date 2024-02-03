// © 2024 Vasiliy Lawing
export enum Role {
  guest = 0,
  user = 1,
  admin = 2
}

function parseRole(str: string): Role {
  if(str == "ADMIN")
    return Role.admin;

  if(str == "USER")
    return Role.user;

  return Role.guest;
}

export interface UserJson {
  username: string;
  role: string;
  token: string;
}

export class User {
  constructor(public readonly username: string, public readonly role: Role, public readonly token: string) {}

  static parseFromJson(json: UserJson): User {
    return new User(json.username, parseRole(json.role), json.token);
  }
}
