import { styled } from 'styled-components'

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignInForm = styled.form`
  min-width: 32rem;
  border-radius: 6px;
  padding: 3.5rem 4rem;
  border: 0;
  background: ${(props) => props.theme['gray-900']};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-800']};
    font-weight: bold;
    padding: 1.2rem;
    width: 25rem;
    margin: 0 auto;
    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }
  }

  h1 {
    display: block;
    margin: auto 0;

    margin-bottom: 1rem;
  }

  button[type='submit'] {
    height: 58px;
    width: 20rem;
    margin: 0 auto;
    border: 0;
    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: large;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }
`
