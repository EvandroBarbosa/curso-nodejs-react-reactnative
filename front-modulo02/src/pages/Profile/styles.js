import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      margin: 10px 0 20px;
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.5);
    }

    button {
      background: #ff6f11;
      margin: 5px 0 0;
      height: 44px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 20px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ff6f11')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    span {
      color: #ff6051;
      text-align: start;
      font-weight: bold;
      margin: 0 0 10px;
    }
  }

  > button {
    width: 100%;
    background: #ff1100;
    margin: 10px 0 0;
    height: 44px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 20px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#ff1100')};
    }
  }
`;
