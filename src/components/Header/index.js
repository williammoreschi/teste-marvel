import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaBroom,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from 'react-icons/fa';
import Container from '../Container';
import logo from '../../assets/images/logo.svg';
import '../../util/scroll';
import {
  HeaderGlobal,
  Form,
  SubmitButton,
  ResetButton,
  SortButton,
} from './styles';

import { createBrowserHistory } from "history";
export const history = createBrowserHistory({forceRefresh:true})

export default function Header() {
  
  const [inputSearch, setInputSearch] = useState('');
  const [resetSearch, setResetSearch] = useState(false);
  const [orderByList, setOrderByList] = useState('name');

  useEffect(() => {
    const searchStorage = sessionStorage.getItem('search');
    if (searchStorage) {
      setResetSearch(true);
      setInputSearch(searchStorage);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setResetSearch(true);
    sessionStorage.setItem('search', inputSearch);
    history.push(`/search`);
  }

  function handleResetSearch() {
    setResetSearch(false);
    setInputSearch('');
    sessionStorage.removeItem('search');
    history.push(`/`);
  }

  function handleOrderByList() {
    setOrderByList(orderByList === 'name' ? '-name' : 'name');
  }
  return (
    <HeaderGlobal id="HeaderGlobal">
      <Container className="container">
        <Link to="/">
          <img src={logo} alt="Marvel" />
        </Link>
        <Form onSubmit={handleSubmit}>
          <div className="group">
            <input
              type="text"
              placeholder="Busca Marvel"
              value={inputSearch}
              onChange={e => setInputSearch(e.target.value)}
            />
            <SubmitButton title="Pesquisar">
              <FaSearch size="14" />
            </SubmitButton>
            {resetSearch && (
              <ResetButton title="Limpar Pesquisa" onClick={handleResetSearch}>
                <FaBroom size="14" />
              </ResetButton>
            )}
          </div>
        </Form>
        <SortButton onClick={() => handleOrderByList}>
          {orderByList === 'name' ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
        </SortButton>
      </Container>
    </HeaderGlobal>
  );
}
