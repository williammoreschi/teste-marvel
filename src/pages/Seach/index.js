import React, { useState, useEffect } from 'react';
import Loadingif from '../../components/Loadingif';
import PageActions from '../../components/PageActions';
import HeroesList from '../../components/HeroesList';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';

const Search =  function() {
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [page, setPage] = useState(1);

  const [heroes, setHeroes] = useState([]);

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [orderByList, setOrderByList] = useState('name');
  const [listCount, setListCount] = useState();

  const hero = sessionStorage.getItem('search');
  
  const [newHero, setNewHero] = useState(hero);

  useEffect(() => {
    async function loadHeroes() {
      setLoadingList(true);
      const response = await api.get('', {
        params: {
          limit,
          nameStartsWith: newHero,
          offset: offset * limit,
          orderBy: orderByList,
        },
      });
      console.log(response.data.data);
      setHeroes(response.data.data.results);
      setListCount(response.data.data.count === 10);
      setLoadingList(false);
      setLoadingPage(true);
    }
    loadHeroes();
  }, [limit, newHero, offset, orderByList]);

  function handlePageAction(e) {
    window.scrollTo(0, document.querySelector('ul').offsetTop);
    setOffset(e === 'back' ? offset - 1 : offset + 1);
    setPage(e === 'back' ? page - 1 : page + 1);
  }

  return !loadingPage ? (
    <Loadingif />
  ) : (
    <>
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

export default withRouter(Search);