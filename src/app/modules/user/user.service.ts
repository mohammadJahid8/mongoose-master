import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);

  const result = await user.save();

  console.log(user.fullName());
  return result;
};

export const getUsersFromDb = async () => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 });
  return user;
};

export const getAdminUserFromDb = async () => {
  const admins = await User.getAdminUsers();
  console.log(admins);

  return admins;
};
