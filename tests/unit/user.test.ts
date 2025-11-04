import { expect, test, vi } from "vitest";
import { UserService } from "../../src/services/user-service";
import { User, UserRepository } from "../../src/repositories/user-repo";

test("should GET /users/ data successfull", async () => {
  //mock data
  const mockUser: User = { id: 1, name: "James QA", age: 30 };
  const mockRepo: UserRepository = {
    getUserById: vi.fn().mockResolvedValue(mockUser),
  };
  const mockUserService = new UserService(mockRepo);
  // test
  expect(await mockUserService.getUserById(1)).toEqual(mockUser);
});
