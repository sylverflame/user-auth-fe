type getDataProps = {
  URL: string;
};

type postDataProps = {
  URL: string;
  method: "POST" | "DELETE" | "UPDATE";
  payload?: any;
};

const useAxiosMethods = () => {
  const getData = ({ URL }: getDataProps) => {};

  const postData = () => {};
  return { getData, postData };
};
