import ApiClient from "./ApiClient";

export const __TranslateText = async (languageId) => {
  try {
    const res = await ApiClient.post(`/translate/translatetext/${languageId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __RecordTranslations = async (inputId, outputId) => {
  try {
    const res = await ApiClient.post(
      `/translate/record/${inputId}/${outputId}`
    );
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
