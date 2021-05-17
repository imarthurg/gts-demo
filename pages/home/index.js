import { Card, Container, Button, Row, Col } from 'react-bootstrap';

const channels = [
  {
    title: 'Whatsapp',
    action: () => {
      window.open('https://api.whatsapp.com/send?phone=+5511969630818', '_blank');
    },
  },
  {
    title: 'Chat, voz ou vídeo',
    action: () => {
      window.open(
        'https://zrplab.my3cx.com.br:5049/callus/#brasilroaming',
        '_blank'
      );
    },
  },
  {
    title: 'Webmeeting',
    action: () => {
      window.open(
        'https://zrplab-mybr.3cx.net/join/brasilroaming',
        '_blank'
      );
    },
  },
  {
    title: 'Telefone Adalberto',
    action: () => {
      window.open('tel:+5511969630818');
    },
  },
  {
    title: 'Telefone Fernando',
    action: () => {
      window.open('tel:+5511991277350');
    },
  },
  {
    title: '11 3135-5043',
    action: () => {
      window.open('tel:+551131355043');
    },
  },
  {
    title: '0800 580 3021',
    action: () => {
      window.open('tel:08005803021');
    },
  }
];

export default function Home() {
  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Row>
            {channels.map((c) => (
              <Col xs={12} className="mb-4">
                <Button size="md" style={{ width: '100%' }} onClick={c.action}>
                  {c.title}
                </Button>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
