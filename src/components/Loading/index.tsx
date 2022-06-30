import { CircleNotch } from 'phosphor-react'
import { Container } from './styles'

export function Loading() {
  return(
      <Container>
          <CircleNotch size={24} className='loading' />
      </Container>
  )
}