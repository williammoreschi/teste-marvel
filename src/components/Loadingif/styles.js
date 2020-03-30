import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #be311a;
  z-index: -1;

  img {
    max-width: 100%;
  }
`;
