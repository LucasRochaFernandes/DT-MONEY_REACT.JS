import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { AuthContext } from '../../../contexts/AuthProvider'
import { apiAuth } from '../../../lib/axios'
import { SignInContainer, SignInForm } from './styles'

const signInFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type SignInFormInputs = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { setAuth } = useContext(AuthContext)

  const [errorMessageAuthorization, setErrorMessageAuthorization] =
    useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn({ email, password }: SignInFormInputs) {
    try {
      const response = await apiAuth.post(
        'sessions',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      setAuth(response.data)
      if (errorMessageAuthorization) {
        setErrorMessageAuthorization(false)
      }
    } catch (err) {
      setErrorMessageAuthorization(true)
    }
  }

  return (
    <SignInContainer>
      <SignInForm onSubmit={handleSubmit(handleSignIn)}>
        <h1>Entrar</h1>
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          required
          {...register('email')}
        />

        <input
          type="password"
          placeholder="Senha"
          id="password"
          required
          {...register('password')}
        />

        {errorMessageAuthorization && <span>Email ou senha inválidos</span>}

        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </SignInForm>
    </SignInContainer>
  )
}
