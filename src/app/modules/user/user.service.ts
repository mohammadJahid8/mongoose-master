import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);

  const result = await user.save();
  return result;
};

export const getUsersFromDb = async () => {
  const users = await User.find();
  return users;
};
