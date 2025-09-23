import { tbUser } from ".";
import { getUuidByName } from "./mapping.uuid";
import type { User } from "./tb_user";

type UserKeys = "user01" | "user02" | "user03" | "user04" | "user05" | "user06" | "user07" | "user08" | "user09" | "user10";

function createUserLookup(): Record<UserKeys, User | undefined> {
  const userNames: string[] = ["USER_01", "USER_02", "USER_03", "USER_04", "USER_05", "USER_06", "USER_07", "USER_08", "USER_09", "USER_10"];
  const userKeys: UserKeys[] = ["user01", "user02", "user03", "user04", "user05", "user06", "user07", "user08", "user09", "user10"];

  const userMap = new Map<string, User>();
  tbUser.users.forEach(user => userMap.set(user.id, user));

  return userKeys.reduce((acc, key, index) => {
    const userNameKey = userNames[index];
    if (!userNameKey) return acc;

    const uuid = getUuidByName(userNameKey);
    if (uuid) {
      acc[key] = userMap.get(uuid);
    }
    return acc;
  }, {} as Record<UserKeys, User | undefined>);
}

const users = createUserLookup();

export const mock = {
  users,
};
