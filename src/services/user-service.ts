import type { User, UserRepository } from "../repositories/user-repo";

export class UserService {
  private repo: UserRepository;

  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.repo.getUserById(id);
  }
}
