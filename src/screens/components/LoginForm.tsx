import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import EkButton from '../../components/EkButton';
import EkInput from '../../components/EkInput';
import storage, { LOGGED_IN } from '../../helpers/storage';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const styles = {
  link: {
    color: 'rgb(175 174 174)', textDecoration: 'underline', textAlign: 'right' as 'right', marginLeft: '1.5rem', fontSize: '17px',
  },
  checkbox: { fontWeight: 500 },
};
interface FormState {
  email: string,
  password: string,
  rememberme?: boolean,
}

const LoginForm = () => {
  const [form, setForm] = useState<FormState>({ email: '', password: '' });
  const { width } = useWindowDimensions();

  const handleOnChangeInput = (e: any): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

  const handleCancel = () => {};

  const handleLogin = () => {
    storage.save(LOGGED_IN, true);
    window.location.reload();
  };

  const contStyles = { width: width > 435 ? '80%' : '95%', marginTop: '22%' };
  return (
    <Container style={contStyles}>
      <Row>
        <Col className="d-flex justify-content-center mb-4">
          <h3>Log in</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <EkInput
            type="text"
            value={form.email}
            label="EMAIL ADDRESS"
            name="email"
            onChange={handleOnChangeInput}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EkInput
            type="password"
            value={form.password}
            label="PASSWORD"
            name="password"
            onChange={handleOnChangeInput}
          />
        </Col>
      </Row>
      <Row className="pt-3">
        <Col>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check custom style={styles.checkbox} checked={form.rememberme} type="checkbox" label="REMEMBER ME" />
          </Form.Group>
        </Col>
        <Col className="text-right">
          <a href="#" style={styles.link}>Forgot Password?</a>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <EkButton
            text="CANCEL"
            onClick={handleCancel}
          />
        </Col>
        <Col className="text-right">
          <EkButton
            main
            text="LOGIN"
            onClick={handleLogin}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-right mt-3">
          <span>Don't have an account yet?</span>
          <a href="#" style={styles.link}>Sign Up Here</a>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
