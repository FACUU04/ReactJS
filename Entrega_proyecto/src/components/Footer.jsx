import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MiTienda ReactJS. Todos los derechos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 'auto',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#222',
    color: '#fff',
    position: 'relative',
    bottom: 0,
    width: '100%',
  }
};

export default Footer;
