import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  background-color: rgb(54,69,79);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;