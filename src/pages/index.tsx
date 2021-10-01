import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Animal from '../assets/animal.svg'
import * as S from '../styles/pages/home'

const Home: React.FC = () => {
  const [teste] = useState('Setup do Projeto')
  return (
    <S.Container>
      <h1>Meu projecto</h1>
    </S.Container>
  )
}

export default Home
