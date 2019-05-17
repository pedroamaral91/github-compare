import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #ffff;
  margin-top: 50px;
  justify-content: center;
  flex-direction: row;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong: {
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #665;
  }

  img {
    width: 64px;
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(odd) {
        background: #f5f5f5;
      }
    }
  }
`;
