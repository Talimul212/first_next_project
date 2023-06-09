import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
if(getLayout){
  return getLayout(
    <>
      <Component {...pageProps}/>
    </>
  )
}
  return getLayout(
    <>
    <Navbar></Navbar>
  <Component {...pageProps}/>
 <Footer></Footer>
    </>
  )
    
   
}
