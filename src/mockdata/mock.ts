import { tbUser } from ".";

const user1 = tbUser.users.find((user) => user.username === "user1@test.com");
const user2 = tbUser.users.find((user) => user.username === "user2@test.com");
const user3 = tbUser.users.find((user) => user.username === "user3@test.com");
const user4 = tbUser.users.find((user) => user.username === "user4@test.com");
const user5 = tbUser.users.find((user) => user.username === "user5@test.com");
const user6 = tbUser.users.find((user) => user.username === "user6@test.com");

// export all mock
export const mock = {
  users: {
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
  },
};
