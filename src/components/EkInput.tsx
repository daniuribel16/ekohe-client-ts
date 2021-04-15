import React from 'react';

interface Props {
  label: string,
  placeholder?: string,
  type: string,
  value: string,
  style?: object,
  onChange: (e: any) => void,
  name: string,
}

const styles = {
  container: { marginTop: '1.6rem' },
  label: { fontWeight: 'bold' as 'bold', color: '#979797' },
  input: { padding: '0.8rem', border: 0, borderBottom: '1px solid #cccccc'},
};

const EkInput = (props: Props) => {
  return (
    <div style={styles.container} className="d-flex flex-column">
      <span style={styles.label}>{props.label}</span>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        className="ek-input"
        style={{ ...styles.input, ...props.style }}
        onChange={props.onChange}
      />
    </div>
  );
}

export default EkInput;
