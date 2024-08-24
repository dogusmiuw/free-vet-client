import AddRecordForm from './components/AddRecordForm';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import Records from './components/Records';

function App() {

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <AddRecordForm />
        <Records />
      </Container>
    </>
  );
}

export default App;
