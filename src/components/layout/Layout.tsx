import Footer from "./Footer"
import Header from "./Header"

function Layout({children}:any) {
  return (
    <div>
        <Header/>

        <div className="h-[800px]">{children}</div>

        <Footer/>

    </div>
  )
}

export default Layout