import React from 'react';

interface Props {
  text: string,
  main?: boolean,
  onClick: (e: any) => void,
  style?: object,
}

const buttonStyles = {
  width: '150px',
  padding: '0.5rem',
  borderRadius: '30px',
  color: 'white',
  display: 'inline-block',
  cursor: 'pointer',
  fontWeight: 'bold' as 'bold',
};
const styles = {
  main: {
    ...buttonStyles,
    background: 'linear-gradient(90deg, rgba(98,65,154,1) 0%, rgba(62,118,235,1) 100%)',
  },
  secondary: { ...buttonStyles, background: '#1A1B35' }
};

const EkButton = (props: Props) => {
  const st = props.main ? styles.main : styles.secondary;
  return (
    <div
      style={{ ...props.style, ...st }}
      className="text-center"
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </div>
  );
}

export default EkButton;
