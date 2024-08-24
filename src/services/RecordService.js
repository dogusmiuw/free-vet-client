import { RECORDS_API } from "../../ENV";

export const getAll = async (setData) => {
  const res = await fetch(RECORDS_API);
  const data = await res.json();
  setData(data);
};

export const add = async (data) => {
  await fetch(`${RECORDS_API}/add`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};