import '../styles/globals.css'
import Layout from '../components/Layout.js'

const MyApp = ({ Component, pageProps }) => (
    <Layout> 
      <Component {...pageProps} />
    </Layout>   
)

export default MyApp
