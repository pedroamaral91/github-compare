import React from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';

function Main() {
  return (
    <Container>
      <img src={logo} alt="Github Compare" />
      <Form>
        <input type="text" placeholder="user/repository" />
        <button type="submit">Ok</button>
      </Form>
      <CompareList />
    </Container>
  );
}

export default Main;
