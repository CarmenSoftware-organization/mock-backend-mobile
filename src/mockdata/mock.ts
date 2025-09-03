import { tbUser } from ".";
import { getUuidByName } from "./mapping.uuid";

const user01 = tbUser.users.find((user) => user.id === getUuidByName("USER_01"));
const user02 = tbUser.users.find((user) => user.id === getUuidByName("USER_02"));
const user03 = tbUser.users.find((user) => user.id === getUuidByName("USER_03"));
const user04 = tbUser.users.find((user) => user.id === getUuidByName("USER_04"));
const user05 = tbUser.users.find((user) => user.id === getUuidByName("USER_05"));
const user06 = tbUser.users.find((user) => user.id === getUuidByName("USER_06"));
const user07 = tbUser.users.find((user) => user.id === getUuidByName("USER_07"));
const user08 = tbUser.users.find((user) => user.id === getUuidByName("USER_08"));
const user09 = tbUser.users.find((user) => user.id === getUuidByName("USER_09"));
const user10 = tbUser.users.find((user) => user.id === getUuidByName("USER_10"));

// export all mock
export const mock = {
  users: {
    user01,
    user02,
    user03,
    user04,
    user05,
    user06,
    user07,
    user08,
    user09,
    user10,
  },
};
