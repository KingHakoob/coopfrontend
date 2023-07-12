import { Row, Col, Form } from 'react-bootstrap';
import './loginpage.css';

export default function LoginPage() {
    const login = () => {
        console.log('Login');
    }
    return (
        <div className='loginSpacing'>
            <Row>
                <Col>
                    <div className='titleDiv'>
                        <h1 className='titleTxt'>COOP</h1>
                    </div>
                    <Form className='loginForm'>
                        <h3 className='titleSubTxt'>A Warm Welcome Here</h3>
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
                        <div className='btnDiv'>
                            <button className='loginBtn'>Login</button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}