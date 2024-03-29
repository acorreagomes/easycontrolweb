import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    text {
      color: #fff;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      text-align: center;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #006c5b;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#006c5b')};
      }
    }

    a {
      color: #fff;
      margin-top: 10px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
