import ApiClient from "./ApiClient";

export const __CreateComment = async (formData) => {
  try {
    const res = await ApiClient.post("/comment/newcomment", formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetComments = async () => {
  try {
    const res = await ApiClient.get("/comment/getcomments");
    return res.data;
  } catch (error) {
    throw error;
  }
};
