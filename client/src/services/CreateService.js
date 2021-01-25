import ApiClient from "./ApiClient";

export const __CreateTranslations = async (formData) => {
  try {
    const res = await ApiClient.post("/create/newtranslation", formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetTranslations = async () => {
  try {
    const res = await ApiClient.get(`/create/gettranslations`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
