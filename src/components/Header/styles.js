import styled from 'styled-components';

/* Header */
export const HeaderGlobal = styled.header`
  display: flex;
  margin-bottom: 40px;
  height: 60px;
  background: #252525;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  &.fixed {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;
  }

  .container {
    align-items: center;
    justify-content: space-between;
  }
  a {
    display: flex;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  .group {
    display: flex;
    input {
      flex: 1;
      height: 40px;
      background: #121212;
      color: #727272;
      border: 1px solid #303030;
      padding: 0px 15px;
      font-size: 1.2rem;
      width: 100%;
      &.error {
        border-color: #ff6e6e;
      }
      &:focus {
        border-color: #727272;
      }
    }
  }
  span.error {
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 2px;
    color: #f44336;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: #363636;
  border: none;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
  svg {
    fill: #727272;
  }
  &:hover svg {
    fill: rgba(255, 255, 255, 0.8);
  }
`;

export const ResetButton = styled.button.attrs({ type: 'button' })`
  background-color: #363636;
  border: none;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
  svg {
    fill: #727272;
  }
  &:hover svg {
    fill: rgba(255, 255, 255, 0.8);
  }
`;

export const SortButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: none;
`;
