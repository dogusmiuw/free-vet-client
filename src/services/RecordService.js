import { RECORDS_API } from "../../ENV";

export const getAll = async (setData) => {
  const res = await fetch(RECORDS_API);
  const data = await res.json();
  setData(data);
};