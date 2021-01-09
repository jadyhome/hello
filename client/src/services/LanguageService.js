import ApiClient from "./ApiClient";

export const __GetKo = async () => {
  try {
    const res = await ApiClient.get("/language/getko");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetJa = async () => {
  try {
    const res = await ApiClient.get("/language/getja");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetZh = async () => {
  try {
    const res = await ApiClient.get("/language/getzh");
    return res.data;
  } catch (error) {
    throw error;
  }
};
