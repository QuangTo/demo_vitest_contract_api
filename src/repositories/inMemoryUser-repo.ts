import { User, UserRepository } from "./user-repo";

// will use https://www.prisma.io/postgres
// DB
const mockDB: User[] = [{ id: 1, name: "James QA", age: 30 }];

export class InMemoryUserRepository implements UserRepository {
  async getUserById(id: number): Promise<User | null> {
    return mockDB.find((u) => u.id === id) || null;
  }
}
