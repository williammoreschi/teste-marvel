import styled from 'styled-components';
import img from '../../assets/images/loadingHero.gif';

export const List = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  gap: 30px;

  &.loading {
    li:before {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    li:after {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;

    li {
      border-radius: 5px;
    }
  }

  li:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    background: #00000096;
    z-index: 2;
    opacity: 0;
    transition: opacity 500ms linear;
  }
  li:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    background: #000000 url(${img}) center;
    z-index: 1;
    background-size: cover;
    opacity: 0;
    transition: opacity 500ms linear;
    transition: width 0ms ease-out 500ms;
  }

  li {
    position: relative;
    background: #fff;
    display: flex;
    flex: 1 0 50%;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0px 12px #00000066;

    &:hover {
      box-shadow: 0 0px 24px #000000;
    }

    @media (max-width: 768px) {
      border-radius: 5px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: start;
      color: #060402;
      width: 100%;
      figure {
        display: flex;
      }
      section {
        padding: 20px;

        h1 {
          font-size: 1.8em;
          margin-bottom: 10px;
        }

        span {
          margin-top: 10px;
          display: flex;
          height: 30px;
          align-items: center;
          justify-content: space-between;
          background: #c9341c;
          padding: 0px 10px;
          color: #fff;
          border-radius: 4px;
          font-weight: bold;
          width: 100px;
          &:hover {
            background: #a1291b;
          }
        }

        @media (max-width: 768px) {
          padding: 0 0 0 20px;
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: space-between;

          p {
            display: none;
          }

          span {
            margin-top: 0px;
            height: 100%;
            font-size: 0;
            width: auto;
            padding: 0px 15px;
            background: #363636;
            border-radius: 0px;
          }
        }
      }
    }
  }
`;
