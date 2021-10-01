import * as S from './styles'

export function Footer(): JSX.Element {
  return (
    <S.Container>
      <S.Contacts>
        <a href="tel:+551144320554">+55 11 4432-0554</a>
        <span>|</span>
        <a href="mailto: atendimento@inglobal.com.br">
          atendimento@inglobal.com.br
        </a>
      </S.Contacts>
      <S.Text>Em desenvolvimento, em breve atualizações</S.Text>
    </S.Container>
  )
}
