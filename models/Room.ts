import { User } from "./User";

export interface Room {
  id: string;
  name: string;
  playersLimit: number;
  users: User[];
}
