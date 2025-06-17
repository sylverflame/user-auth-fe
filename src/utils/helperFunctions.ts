import { Status_4XX } from "../constants";

export const handleError = (error: any) => {
  console.log(error);
  if (Status_4XX.includes(error.response?.status)) {
    alert(error.response.data.error);
    return;
  }
  alert(error.message);
  console.error("Caught Exception: ", error.message);
};
