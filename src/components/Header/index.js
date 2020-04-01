import React from 'react';
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

export default function Header({
  order,
  reset,
  value,
  handleSubmit,
  handleInputSearch,
  handleResetSearch,
  handleOrderByList,
}) {
  return (
    <HeaderGlobal id="HeaderGlobal">
      <Container className="container">
        <Link to="/">
          <img src={logo} alt="Marvel" />
        </Link>
        <Form onSubmit={e => handleSubmit(e)}>
          <div className="group">
            <input
              type="text"
              placeholder="Busca Marvel"
              value={value}
              onChange={e => handleInputSearch(e.target.value)}
            />
            <SubmitButton title="Pesquisar">
              <FaSearch size="14" />
            </SubmitButton>
            {reset && (
              <ResetButton
                title="Limpar Pesquisa"
                onClick={() => handleResetSearch()}
              >
                <FaBroom size="14" />
              </ResetButton>
            )}
          </div>
        </Form>
        <SortButton
          title="Ordernar a Lista"
          onClick={() => handleOrderByList()}
        >
          {order === 'name' ? (
            <FaSortAlphaDown size="18" />
          ) : (
            <FaSortAlphaUp size="18" />
          )}
        </SortButton>
      </Container>
    </HeaderGlobal>
  );
}
