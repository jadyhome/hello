import ApiClient from "./ApiClient";

export const __GetInputs = async () => {
  try {
    const res = await ApiClient.get("/translate/getinput_translations");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteInputs = async (inputId) => {
  try {
    const res = await ApiClient.delete(`/translate/deleteinput/${inputId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
