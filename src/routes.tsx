import { createBrowserRouter } from 'react-router-dom'

import { TransactionsProvider } from './contexts/TransactionsContext'
import { SignIn } from './pages/auth/SignIn'
import { Transactions } from './pages/Transactions'

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    ),
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
])
