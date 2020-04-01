import React, { useState, useEffect } from 'react';
import Loadingif from '../../components/Loadingif';
import PageActions from '../../components/PageActions';
import HeroesList from '../../components/HeroesList';
import Header from '../../components/Header';

import api from '../../services/api';

export default function Main() {
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [page, setPage] = useState(1);
  const [heroes, setHeroes] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [orderByList, setOrderByList] = useState('name');
  const [listCount, setListCount] = useState();
  const hero = sessionStorage.getItem('search');
  const [heroSession, setheroSession] = useState(hero);
  const [inputSearch, setInputSearch] = useState();
  const [resetSearch, setResetSearch] = useState(false);

  useEffect(() => {
    const searchStorage = sessionStorage.getItem('search');
    if (searchStorage) {
      setResetSearch(true);
      setInputSearch(searchStorage);
    }
  }, []);

  useEffect(() => {
    async function loadHeroes() {
      setLoadingList(true);
      const response = await api.get('', {
        params: {
          limit,
          nameStartsWith: heroSession,
          offset: offset * limit,
          orderBy: orderByList,
        },
      });
      setHeroes(response.data.data.results);
      setListCount(response.data.data.count === 10);
      setLoadingList(false);
      setLoadingPage(true);
    }
    loadHeroes();
  }, [limit, heroSession, offset, orderByList]);

  function handlePageAction(e) {
    window.scrollTo(0, document.querySelector('ul').offsetTop);
    setOffset(e === 'back' ? offset - 1 : offset + 1);
    setPage(e === 'back' ? page - 1 : page + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sessionStorage.setItem('search', inputSearch);
    setPage(1);
    setOffset(0);
    setheroSession(inputSearch);
    setResetSearch(true);
  }

  function handleInputSearch(value) {
    setInputSearch(value);
  }

  function handleResetSearch() {
    setResetSearch(false);
    setInputSearch('');
    setheroSession();
    sessionStorage.removeItem('search');
  }

  function handleOrderByList() {
    setOrderByList(orderByList === 'name' ? '-name' : 'name');
  }

  return !loadingPage ? (
    <Loadingif />
  ) : (
    <>
      <Header
        order={orderByList}
        reset={resetSearch}
        value={inputSearch}
        handleSubmit={handleSubmit}
        handleInputSearch={handleInputSearch}
        handleResetSearch={handleResetSearch}
        handleOrderByList={handleOrderByList}
      />
      <HeroesList heroes={heroes} loadingList={loadingList} />
      <PageActions
        hide={!heroes.length}
        page={page}
        PageAction={handlePageAction}
        lastPage={listCount}
      />
    </>
  );
}
