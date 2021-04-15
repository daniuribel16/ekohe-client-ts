import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import EkButton from '../components/EkButton';
import storage, { LOGGED_IN } from '../helpers/storage';
import http from '../services/http';
import ShowItem from './components/ShowItem';

const showsAPIUrl = 'http://api.tvmaze.com/search/shows?q=batman';
const styles = {
  logoutBtn: { margin: '1rem' },
};

const MainPage = () => {
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const results = await http.get(showsAPIUrl);
    setShows(results);
  };

  const handleLogout = () => {
    storage.remove(LOGGED_IN);
    window.location.reload();
  };

  const formatText = (t:string) => t.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<b>/g, '').replace(/<\/b>/g, '')

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <Container className="text-center">
      <EkButton
        main
        onClick={handleLogout}
        text="LOGOUT"
        style={styles.logoutBtn}
      />
      {shows.map((x: any) => (
        <ShowItem
          key={x.show?.name}
          image={x.show?.image?.medium}
          name={x.show?.name}
          summary={formatText(x.show?.summary)}
        />
      ))}
      <EkButton
        main
        onClick={handleLogout}
        text="LOGOUT"
        style={styles.logoutBtn}
      />
    </Container>
  );
}

export default MainPage;
