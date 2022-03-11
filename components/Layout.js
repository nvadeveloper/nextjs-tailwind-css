import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => (
    <div className="flex flex-col min-h-screen"> 
        <Header />
        <main className="grow">
            {children}
        </main>
        <Footer />
    </div>
)
  
export default Layout
