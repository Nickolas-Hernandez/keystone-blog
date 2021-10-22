import Head from 'next/head'
import HeaderLogo from  '../components/headerLogo';
import Nav from '../components/nav';


export default function Home({ categories }) {
  const { allCategories } = categories.data;
  return (
    <>
    <Head>
      <title>The Dev Post</title>
      <meta property="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HeaderLogo />
    <Nav categories={ allCategories} />
    </>
  )
}

export async function getServerSideProps(context){
  const res = await fetch("http://localhost:3000/admin/api", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
        query {
          allCategories {
            categoryName
          }
        }
      `
    })
  });
  const data = await res.json();

  if(!data) { // Refactor to check returned object for error property
    return {
      notFound: true
    }
  }

  return {
    props: {
      categories: data
    }
  }
}
