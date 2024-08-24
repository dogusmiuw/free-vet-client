import AddRecordForm from './components/AddRecordForm';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <AddRecordForm />
      </Container>
    </>
  );
}

export default App;
