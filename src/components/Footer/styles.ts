import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  @media (max-width: 720px) {
    margin-top: 0;
  }
`
export const Contacts = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 12px;
  span {
    margin: 0 14px;
    color: ${props => props.theme.colors.textTertiary};
  }
  a {
    text-decoration: none;

    color: ${props => props.theme.colors.textTertiary};
  }
  @media (max-width: 380px) {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      display: none;
    }
  }
`
export const Text = styled.p`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 12px;
`
