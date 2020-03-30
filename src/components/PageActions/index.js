import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CpageActions } from './styles';
import Container from '../Container';

export default function PageActions({ hide, page, PageAction, lastPage }) {
  return (
    <>
      {!hide && (
        <Container>
          <CpageActions>
            <button
              title="Anterior"
              type="button"
              onClick={() => PageAction('back')}
              disabled={page < 2}
            >
              <FaArrowLeft size="14" />
            </button>
            <span>Página {page}</span>

            <button
              title="Próximo"
              type="button"
              onClick={() => PageAction('next')}
              disabled={!lastPage}
            >
              <FaArrowRight size="14" />
            </button>
          </CpageActions>
        </Container>
      )}
    </>
  );
}
