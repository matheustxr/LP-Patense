import Header from "../components/Header"
import BannerProduct from "../components/BannerProduct"
import FarinhaCamarao from "../components/FarinhaCamarao"
import FarinhaAtum from "../components/FarinhaAtum"
import About from "../components/About"
import Footer from "../components/Footer"

export default function Home() {
    return(
        <>
            <Header />
            <main>
                <BannerProduct />
                <FarinhaCamarao />
                <FarinhaAtum />
                <About />
                <Footer />
            </main>
        </>
    )
}