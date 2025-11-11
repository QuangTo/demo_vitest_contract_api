import { expect, test } from "vitest";
import { PactV3, MatchersV3 } from "@pact-foundation/pact";
import { UserService } from "../../src/services/user-service";
import { HttpUserRepository } from "../../src/repositories/http-user-repo";

const { like } = MatchersV3;

const userProvider = new PactV3({
  consumer: "userWebApp",
  provider: "userAPI",
});
const userTestData = { id: 1, name: "James QA", age: 30 };
const expectedBody = like(userTestData);

test("should validate user contract success", async () => {
  userProvider
    .given("user exist with id =1")
    .uponReceiving("a request for id 1")
    .withRequest({
      method: "GET",
      path: "/users/1",
    })
    .willRespondWith({
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: expectedBody,
    });
  //
  return userProvider.executeTest(async (mockServer) => {
    const repo = new HttpUserRepository(mockServer.url);
    const service = new UserService(repo);
    const resData = await service.getUserById(1);
    //assertion
    expect(resData).toEqual(userTestData);
    expect(resData?.id).toEqual(1);
  });
});
