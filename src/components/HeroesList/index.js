import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Container from '../Container';

import { List } from './styles';

export default function HeroesList({ heroes, loadingList }) {
  const [imageHero, setImageHero] = useState();
  useEffect(() => {
    let image = 'portrait_xlarge';
    if (window.innerWidth < 450) {
      image = 'standard_medium';
    } else if (window.innerWidth < 768) {
      image = 'standard_xlarge';
    }
    setImageHero(image);
  }, []);
  return (
    <>
      <Container>
        <List className={loadingList && 'loading'}>
          {heroes.map(hero => (
            <li key={String(hero.id)}>
              <Link to={`/hero/${encodeURIComponent(hero.name)}`}>
                <figure>
                  <img
                    src={`${hero.thumbnail.path}/${imageHero}.${hero.thumbnail.extension}`}
                    alt={hero.name}
                  />
                </figure>
                <section>
                  <h1>{hero.name}</h1>
                  <p>
                    {hero.description
                      ? `${hero.description.substring(0, 150)}...`
                      : 'Personagem sem descricão.'}
                  </p>
                  <span>
                    Veja Mais <FaAngleRight size="14" />
                  </span>
                </section>
              </Link>
            </li>
          ))}
        </List>
      </Container>
    </>
  );
}
