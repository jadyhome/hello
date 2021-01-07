import ApiClient from "./ApiClient";

export const __GetInputs = async () => {
  try {
    const res = await ApiClient.get("/input/getinput_translations");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteInputs = async (inputId) => {
  try {
    const res = await ApiClient.delete(`/input/deleteinput/${inputId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
