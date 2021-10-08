import Head from 'next/head'
import Header from  '../components/header';


export default function Home() {
  return (
    <>
    <Head>
      <title>The Dev Post</title>
      <meta property="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    </>
  )
}
