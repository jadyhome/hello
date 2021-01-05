import ApiClient from "./ApiClient";

export const __TranslateText = async (languageId) => {
  try {
    const res = await ApiClient.post(`/translate/translatetext/${languageId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetLanguages = async () => {
  try {
    const res = await ApiClient.get("/translate/getlanguages");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetInputs = async () => {
  try {
    const res = await ApiClient.get("/translate/getinput_translations");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetOutputs = async () => {
  try {
    const res = await ApiClient.get("/translate/getoutput_translations");
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

export const __DeleteOutputs = async (outputId) => {
  try {
    const res = await ApiClient.delete(`/translate/deleteoutput/${outputId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
