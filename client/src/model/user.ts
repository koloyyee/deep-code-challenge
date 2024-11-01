/**
 * Definition of an User 
 */
export interface IUser {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  role?: "regular_user" | "admin"
};


