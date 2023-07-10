import { Row, Col, Form } from 'react-bootstrap';
import './loginpage.css';

export default function LoginPage() {
    return (
        <div>
            <Row>
                <Col xs={8}>
                    <div className='titleDiv'>
                        <h1 className='titleTxt'>COOP</h1>
                        <h3 className='titleSubTxt'>A Warm Welcome Here</h3>
                    </div>
                </Col>
                <Col xs={4} className='formCol'>
                    <Form>
                        <Form.Group className="m-3" controlId="email">
                            <Form.Label className='formLabel'>
                                Email Address
                            </Form.Label>
                            <Form.Control className='formInput' type='email' placeholder="email@example.com" />
                        </Form.Group>
                        <Form.Group className="m-3" controlId="password">
                            <Form.Label className='formLabel'>
                                Password
                            </Form.Label>
                            <Form.Control className='formInput' type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}