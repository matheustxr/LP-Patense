
import BannerProduct from "../components/BannerProduct"
import FarinhaCamarao from "../components/FarinhaCamarao"
import FarinhaAtum from "../components/FarinhaAtum"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    return(
        <>
            <main>
                <BannerProduct />
                <FarinhaCamarao />
                <FarinhaAtum />
                <Contact />
                <About />
                <Footer />
            </main>
        </>
    )
}