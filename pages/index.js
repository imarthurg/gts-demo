import { Form, Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function App() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Image src="/logo.png" width="110" height="113" />
      <Card className="mt-4">
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              block
              onClick={(e) => {
                e.preventDefault();
                router.push('/home');
              }}
            >
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
