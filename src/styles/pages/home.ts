import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
  }
`
export const Content = styled.article`
  padding: 50px 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  h1 {
    margin: 50px 0 30px 0;
    font-weight: 500;
    color: ${props => props.theme.colors.textPrimary};
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 720px) {
    padding: 50px 30px;
  }
`
export const PresentationBox = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const Presentation = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px 0 0 8px;
  padding: 24px;
  display: flex;
  align-items: center;
  width: 60%;
  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
`
export const Company = styled.div`
  background-color: ${props => props.theme.colors.textQuartenary};
  border-radius: 0 8px 8px 0;
  padding: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 40%;

  @media (max-width: 720px) {
    width: 100%;
    border-radius: 0 0 8px 8px;
    .logo-atom {
      margin-left: 10px;
    }
  }
`
