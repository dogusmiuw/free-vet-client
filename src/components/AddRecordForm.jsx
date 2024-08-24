import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { add } from '../services/RecordService';

function AddRecordForm() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      city: e.target.city.value,
      district: e.target.district.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      workingHours: e.target.workingHours.value,
      operationType: e.target.operationType.value,
      price: e.target.price.value
    };

    add(data);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <Form.Group className="mb-3">
        <Form.Label>Klinik adı</Form.Label>
        <Form.Control id='name' type="text" placeholder="ör: X veteriner kliniği" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>İl</Form.Label>
        <Form.Control id='city' type="text" placeholder="ör: Ankara" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>İlçe</Form.Label>
        <Form.Control id='district' type="text" placeholder="ör: Çankaya" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Adres</Form.Label>
        <Form.Control id='address' type="text" placeholder="ör: X mahallesi, y. sokak, z numara" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefon numarası</Form.Label>
        <Form.Control id='phone' type="text" placeholder="ör: 0555 555 55 55" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Çalışma saatleri</Form.Label>
        <Form.Control id='workingHours' type="text" placeholder="ör: 8-16, 7/24" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Operasyon Türü</Form.Label>
        <Form.Control id='operationType' type="text" placeholder="ör: Basit yaralanma, pansuman, hepsi" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ücret</Form.Label>
        <Form.Control id='price' type="text" placeholder="ör: 300₺, ücretsiz" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Kaydet
      </Button>
    </Form>
  );
}

export default AddRecordForm;