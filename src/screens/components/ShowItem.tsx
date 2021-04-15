import React from 'react';

interface Props {
  image: string,
  name: string,
  summary: string,
}

const styles = {
  cont: { background: '#e9ecef', borderRadius: '25px' },
  img: { borderRadius: '10px' },
  summary: { fontWeight: 500, textAlign: 'left' as 'left' }
};

const ShowItem = (props: Props) => {
  return (
    <div className="d-flex flex-row p-4 m-3" style={styles.cont}>
      <img className="mr-4" src={props.image} alt="showimage" style={styles.img} />
      <div className="d-flex flex-column justify-content-start align-items-start">
        <h3 className="mb-3">{props.name}</h3>
        <p style={styles.summary}>{props.summary}</p>
      </div>
    </div>
  );
}

export default ShowItem;