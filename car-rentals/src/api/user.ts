import axios from "axios";

export const verify_user = async () => {
  try {
    const response = await axios.get(`/auth/verify`);
    return response.data;
  } catch (error) {
    return;
  }
};
