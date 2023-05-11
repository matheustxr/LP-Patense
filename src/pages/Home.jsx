import Header from "../components/Header"
import BannerProduct from "../components/BannerProduct"
import FarinhaCamarao from "../components/FarinhaCamarao"
import FarinhaAtum from "../components/FarinhaAtum"

export default function Home() {
    return(
        <>
            <Header />
            <main>
                <BannerProduct />
                <FarinhaCamarao />
                <FarinhaAtum />
            </main>
        </>
    )
}