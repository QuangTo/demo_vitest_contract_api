export interface User {
  id: number;
  name: string;
  age: number;
}

export interface UserRepository {
  getUserById(id: number): Promise<User | null>;
}
