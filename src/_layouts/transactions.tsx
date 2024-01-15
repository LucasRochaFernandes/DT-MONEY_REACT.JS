import { Outlet } from 'react-router-dom'

import { TransactionsProvider } from '../contexts/TransactionsContext'

export function TransactionsLayout() {
  return (
    <TransactionsProvider>
      <Outlet />
    </TransactionsProvider>
  )
}
