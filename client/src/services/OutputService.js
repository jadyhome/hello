import ApiClient from "./ApiClient";

export const __GetOutputs = async () => {
  try {
    const res = await ApiClient.get("/output/getoutput_translations");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteOutputs = async (outputId) => {
  try {
    const res = await ApiClient.delete(`/output/deleteoutput/${outputId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
