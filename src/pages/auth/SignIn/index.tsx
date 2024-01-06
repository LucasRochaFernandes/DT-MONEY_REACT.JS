import { SignInContainer, SignInForm } from './styles'

export function SignIn() {
  return (
    <SignInContainer>
      <SignInForm>
        <h1>Entrar</h1>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Login</button>
      </SignInForm>
    </SignInContainer>
  )
}
