import React from 'react';
import { Container } from './styles';
import loadingif from '../../assets/images/loading.gif';

export default function Header() {
  return (
    <Container className="container">
      <img src={loadingif} alt="Loading" />
    </Container>
  );
}
