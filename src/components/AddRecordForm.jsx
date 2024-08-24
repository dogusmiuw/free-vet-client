import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddRecordForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Klinik adı</Form.Label>
        <Form.Control type="text" placeholder="X veteriner kliniği" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>İl</Form.Label>
        <Form.Control type="text" placeholder="ör: Ankara" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>İlçe</Form.Label>
        <Form.Control type="text" placeholder="ör: Çankaya" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Adres</Form.Label>
        <Form.Control type="text" placeholder="X mahallesi, y. sokak, z numara" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefon numarası</Form.Label>
        <Form.Control type="text" placeholder="0555 555 55 55" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Çalışma saatleri</Form.Label>
        <Form.Control type="text" placeholder="ör: 8-16" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Operasyon Türü</Form.Label>
        <Form.Control type="text" placeholder="ör: Basit yaralanma, pansuman" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ücret</Form.Label>
        <Form.Control type="text" placeholder="ör: 300₺, ücretsiz" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Kaydet
      </Button>
    </Form>
  );
}

export default AddRecordForm;