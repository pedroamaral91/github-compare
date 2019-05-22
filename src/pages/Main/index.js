import React, { useState } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';
import { url } from '../../helpers/ApiHelper';

function Main() {
  const [repositoryInput, setRepositoryInput] = useState('');
  const [repositoryError, setRepositoryError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (repositoryInput !== '') {
      setLoading(true);
      try {
        const fetchApi = await fetch(`${url}/${repositoryInput}`);
        const response = await fetchApi.json();
        if (response.repositories) {
          response.lastCommit = moment(response.pushed_at).fromNow();
          setRepositories([...repositories, response]);
          setRepositoryInput('');
          return;
        }

        setRepositoryError(true);
      } catch (err) {
        setRepositoryError(true);
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <Container>
      <img src={logo} alt="Github Compare" />
      <Form onSubmit={handleSubmit} withError={repositoryError}>
        <input
          type="text"
          placeholder="user/repository"
          value={repositoryInput}
          onChange={e => setRepositoryInput(e.target.value)}
        />
        <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}</button>
      </Form>
      <CompareList repositories={repositories} />
    </Container>
  );
}

export default Main;
