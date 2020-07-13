import React from 'react';
import PropTypes from 'prop-types';

import Head from '@atoms/Head';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles.module.scss';
import '@styles/global/index.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div className={styles.container}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
