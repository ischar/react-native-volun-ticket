import * as SecureStore from "expo-secure-store";

export const saveToken = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  return await SecureStore.getItemAsync("accessToken");
};
