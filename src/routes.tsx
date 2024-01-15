import { createBrowserRouter } from 'react-router-dom'

import { TransactionsLayout } from './_layouts/transactions'
import { Root } from './components/Root'
import { SignIn } from './pages/auth/SignIn'
import { Transactions } from './pages/Transactions'

export const router = createBrowserRouter([
  {
    element: <TransactionsLayout />,
    children: [{ path: '/home', element: <Transactions /> }],
  },

  {
    path: '/sign-in',
    element: <SignIn />,
  },

  {
    path: '/',
    element: <Root />,
  },
])
