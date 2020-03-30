import styled from 'styled-components';

export const CpageActions = styled.div`
  display: flex;
  margin: 30px 0;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    margin: 15px;
  }

  button {
    display: flex;
    border: none;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: #252525;

    svg {
      fill: #727272;
      size: 14;
    }
    &:hover svg {
      fill: rgba(255, 255, 255, 0.8);
    }
  }
  span {
    padding: 0 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    color: #727272;
    height: 40px;
  }
`;
