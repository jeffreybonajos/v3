import Layout from '../components/Layout';
import { authInitialProps } from '../lib/Auth';
import Link from 'next/link'

export default function Index({props}) {
  // const { user = {} } = auth || {};
  return (
    <Layout title="Index" {...props}>
      {/* <h1> {user.full_name}</h1> */}
      <Link href="/home"><a>Personal</a>
            </Link>
    </Layout>
  )
}

Index.getInitialProps = authInitialProps(true);