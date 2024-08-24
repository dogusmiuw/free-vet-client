import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { getAll } from "../services/RecordService";
import Phone from "../icons/Phone";

function Records() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll(setData);
  }, []);

  if (data.length === 0)
    return <div className="text-center">
      Hiç kayıt bulunamadı.
    </div>;
  return (
    <Table className="mb-5" striped bordered hover>
      <thead>
        <tr>
          <th>Klinik adı</th>
          <th>İl</th>
          <th>İlçe</th>
          <th>Adres</th>
          <th>Telefon numarası</th>
          <th>Çalışma saatleri</th>
          <th>Operasyon türü</th>
          <th>Ücret</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, i) => (
          <Record key={i} data={record} />
        ))}
      </tbody>
    </Table>
  );
}

export default Records;

function Record({ data }) {
  const {
    name,
    city,
    district,
    address,
    phone,
    workingHours,
    operationType,
    price
  } = data;

  const fixedPhoneNumber = () => {
    let result = "";

    if (!phone.startsWith("0"))
      result.concat("0");

    result.concat(phone.replace(/\s/g, ''));
    return result;
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{city}</td>
      <td>{district}</td>
      <td>{address}</td>
      <td className='d-flex align-items-center gap-2'><a href={`tel:${fixedPhoneNumber}`}>{phone}</a><Phone /></td>
      <td>{workingHours}</td>
      <td>{operationType}</td>
      <td>{price}</td>
    </tr>
  );
};