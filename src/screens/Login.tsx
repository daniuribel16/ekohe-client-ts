import React from 'react';
import { Col, Row } from 'react-bootstrap';
import spacebackground from '../assets/img/spacebackground.png'
import LoginForm from './components/LoginForm';
import fbIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import soundcloudIcon from '../assets/icons/soundcloud.svg';
import spotifyIcon from '../assets/icons/spotify.svg';
import useWindowDimensions from '../hooks/useWindowDimensions';

const footerStyles = { position: 'absolute' as 'absolute', bottom: 0 };
const headerStyles = { padding: '1rem 2rem 0.5rem' }
const styles = {
  bar: { width: '100%', background: '#1A1B35', padding: '1rem 1.5rem' },
  footerFbIcon: { width: '13px', margin: '0 1rem', cursor: 'pointer' },
  footerIcon: { width: '28px', margin: '0 1rem', cursor: 'pointer' },
  footerLink: { color: '#cccccc', margin: '0 1rem' }
};
const Login = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Row style={{ ...styles.bar, ...headerStyles} } className="d-lg-none d-xl-none">
        <Col className="text-left text-light">
          <h3>LOGO</h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-lg-block d-xl-block">
          <img className="w-100" alt="background" style={{ height: height - 60 }} src={spacebackground} />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
      <Row style={{ ...styles.bar, ...footerStyles }}>
        <Col>
          <div className="d-flex flex-row justify-content-start">
            <a href="#" style={styles.footerLink}>Terms of Services</a>
            <a href="#" style={styles.footerLink}>Contact Us</a>
          </div>
        </Col>
        <Col>
          <div style={{ marginTop: width < 516 ? '1rem' : '0' }} className={`d-flex flex-row ${width > 515 ? 'justify-content-end' : 'justify-content-between'}`}>
            <img style={styles.footerFbIcon} src={fbIcon} alt="facebook" />
            <img style={styles.footerIcon} src={twitterIcon} alt="twitter" />
            <img style={styles.footerIcon} src={instagramIcon} alt="instagram" />
            <img style={styles.footerIcon} src={soundcloudIcon} alt="soundcloud" />
            <img style={styles.footerIcon} src={spotifyIcon} alt="spotify" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
