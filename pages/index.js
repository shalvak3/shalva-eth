import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'

export default function Home({ allPostsData }) {
  return (
    <>
    <Layout>
      <Head>
        <title>🧀 Khachapuri Central 🧀 (პირადი ბლოგი)</title>
      </Head>
      <Container>
        <div>
          <p>Hello World!</p>
        </div>
      </Container>
    </Layout>
    </>
  )
}
