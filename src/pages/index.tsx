import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import * as S from '../styles/pages/home'

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>InGlobal</title>
        {/* <link rel="base" href="https://www.upinside.com.br" />
        <link rel="canonical" href="https://www.upinside.com.br/" />

        <meta
          itemProp="name"
          content="UpInside Treinamentos - Melhor Escola de Desenvolvimento, Programação e Marketing Digital do Brasil"
        />
        <meta
          itemProp="description"
          content="Eleita a melhor escola de desenvolvimento, programação e marketing digital em mais de 17 países pela Latin Quality American Institute!"
        />
        <meta
          itemProp="image"
          content="https://www.upinside.com.br/themes/upinside_new/_img/upinside.jpg"
        />
        <meta itemProp="url" content="https://www.upinside.com.br/" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="UpInside Treinamentos - Melhor Escola de Desenvolvimento, Programação e Marketing Digital do Brasil"
        />
        <meta
          property="og:description"
          content="Eleita a melhor escola de desenvolvimento, programação e marketing digital em mais de 17 países pela Latin Quality American Institute!"
        />
        <meta
          property="og:image"
          content="https://www.upinside.com.br/themes/upinside_new/_img/upinside.jpg"
        />
        <meta
          property="og:image:alt"
          content="UpInside Treinamentos - Melhor Escola de Desenvolvimento, Programação e Marketing Digital do Brasil"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://www.upinside.com.br/" />
        <meta property="og:site_name" content="UpInside Treinamentos" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:app_id" content="626590460695980" />
        <meta property="fb:pages" content="699559543481037" />
        <meta
          property="article:author"
          content="https://www.facebook.com/robsonvleite"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/upinside"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://www.upinside.com.br" />
        <meta
          property="twitter:title"
          content="UpInside Treinamentos - Melhor Escola de Desenvolvimento, Programação e Marketing Digital do Brasil"
        />
        <meta
          property="twitter:description"
          content="Eleita a melhor escola de desenvolvimento, programação e marketing digital em mais de 17 países pela Latin Quality American Institute!"
        />
        <meta
          property="twitter:image"
          content="https://www.upinside.com.br/themes/upinside_new/_img/upinside.jpg"
        />
        <meta property="twitter:url" content="https://www.upinside.com.br/" /> */}
      </Head>

      <S.Container>
        <Header />

        <S.Content>
          <Image src="/logo/logo.png" width={180} height={180} />
          <h1>
            Juntos no mesmo <br /> propósito
          </h1>
          <S.PresentationBox>
            <S.Presentation>
              <p>
                O grupo inGlobal é um conglomerado de empresas de nichos
                diferentes que se complementam criando assim um ecossistema de
                tecnologia e empreendedorismo saudável, inteligente e
                financeiramente rentável. Veja algumas marcas do grupo.
              </p>
            </S.Presentation>
            <S.Company>
              <div>
                <Image src="/logo/logo-deving.svg" width={100} height={100} />
              </div>
              <div>
                <Image src="/logo/logo-ainnep.svg" width={100} height={100} />
              </div>
              <div className="logo-atom">
                <Image src="/logo/logo-atom.svg" width={100} height={50} />
              </div>
            </S.Company>
          </S.PresentationBox>
        </S.Content>
        <Footer />
      </S.Container>
    </>
  )
}

export default Home
