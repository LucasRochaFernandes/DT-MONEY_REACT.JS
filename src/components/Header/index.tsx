import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/Logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  Root,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="DT Money" />
        <Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
