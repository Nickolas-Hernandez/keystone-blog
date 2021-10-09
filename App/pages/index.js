import Head from 'next/head'
import Header from  '../components/header';


export default function Home({ categories }) {
  console.log(categories);
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

export async function getServerSideProps(context){
  const res = await fetch("http://localhost:3000/admin/api", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
        query {
          allPosts {
            content
          }
        }
      `
    })
  });
  const data = await res.json();
  console.log(data);

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
