import type { User, UserRepository } from "./user-repo";

export class HttpUserRepository implements UserRepository {
  constructor(private baseUrl: string) {}

  async getUserById(id: number): Promise<User | null> {
    const res = await fetch(`${this.baseUrl}/users/${id}`);
    return res.json();
  }
}
