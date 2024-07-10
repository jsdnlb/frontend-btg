import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')} style={styles.button}>
    Home
    </button>
  );
}

const styles = {
  button: {
    width: '100px',
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#11408C',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BackButton;
