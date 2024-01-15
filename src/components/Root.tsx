import { Navigate, useLocation } from 'react-router-dom'

export function Root() {
  const location = useLocation()
  const from = location.state?.from?.pathname

  if (from) {
    return <Navigate to={from} replace />
  }
  return <Navigate to={'/sign-in'} replace />
}
