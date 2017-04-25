// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface User {
  ID: string;
  FirstName: string;
  LastName: string;
  TelNumber: string;
  Password: string;
  AccountType: string;
  BirthDate: Date;
  Picture: string;
}

export interface CreateUser {
  FirstName: string;
  LastName: string;
  TelNumber: string;
  Password: string;
  AccountType: string;
  BirthDate: string;
  Picture: string;
}