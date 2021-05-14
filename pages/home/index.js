import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { channels } from './constants';


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
