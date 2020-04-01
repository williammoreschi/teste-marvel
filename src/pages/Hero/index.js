import React, { useState, useEffect } from 'react';
import { Page } from './styles';
import Container from '../../components/Container';
import Loadingif from '../../components/Loadingif';
import api from '../../services/api';

export default function Hero({ match }) {
  const [loadingPage, setLoadingPage] = useState(false);
  const [hero, setHero] = useState('');
  const [heroId, setHeroId] = useState(match.params.hero);
  const [imageHero, setImageHero] = useState();

  useEffect(() => {
    let image = 'portrait_uncanny';
    if (window.innerWidth < 450) {
      image = 'standard_medium';
    } else if (window.innerWidth < 768) {
      image = 'standard_xlarge';
    }
    setImageHero(image);
  }, []);

  useEffect(() => {
    async function loadHeroes() {
      const response = await api.get(`${heroId}`, {
        params: {},
      });
      console.log(response.data.data.results[0]);
      setHero(response.data.data.results[0]);
      setLoadingPage(true);
    }
    loadHeroes();
  }, [heroId]);

  return !loadingPage ? (
    <Loadingif />
  ) : (
    <>
      <Container>
        <Page>
          <figure>
            <img
              src={`${hero.thumbnail.path}/${imageHero}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
          </figure>
          <article>
            <h1>{hero.name}</h1>
            <p>
              {hero.description
                ? `${hero.description}`
                : 'Personagem sem descricão.'}
            </p>

            <h2>Comics</h2>
            <ul>
              {hero.comics.items.map(item => (
                <li>{item.name}</li>
              ))}
            </ul>

            <h2>Series</h2>
            <ul>
              {hero.series.items.map(item => (
                <li>{item.name}</li>
              ))}
            </ul>
          </article>
        </Page>
      </Container>
    </>
  );
}
