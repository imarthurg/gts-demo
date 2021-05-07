import { Form, Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function App() {
  const router = useRouter();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      setShowInstallButton(true);
    });

    window.addEventListener('appinstalled', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(null);
      setShowInstallButton(false);
    });
  }, []);

  const installApp = async (e) => {
    e.preventDefault();
    deferredPrompt.prompt();
    const { outcome } = deferredPrompt.userChoice;
    console.log(outcome);
    setDeferredPrompt(null);
  };

  return (
    <div className={styles.container}>
      {showInstallButton && (
        <Button className="mb-4" onClick={installApp}>
          Instalar
        </Button>
      )}

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
