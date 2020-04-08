import styled from 'styled-components';

export const Container = styled.div`
  background: #333a5f;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 90px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #aaa;
    }

    a {
      font-weight: bold;
      color: #eee;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #aaa;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      margin-top: 10px;
      color: #ccc;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #eee;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
