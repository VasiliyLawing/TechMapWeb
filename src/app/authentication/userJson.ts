export interface UserJson {
  username: string,
  token: string,
  role: string,
}


enum Role {
  admin,
  user,
  guest
}
export interface AuthRequestData {
  username: string;
  password: string;
}

function parseRole(str: string): Role {
  if(str == "ADMIN")
    return Role.admin;

  if(str == "USER")
    return Role.user;

  return Role.guest;
}

export class User {
  constructor(public readonly username: string, public readonly role: Role, public readonly token: string) {}

  static parseFromJson(json: UserJson): User {
    return new User(json.username, parseRole(json.role), json.token);
  }

  atLeast(role: Role): boolean {
    return this.role >= role;
  }
}
