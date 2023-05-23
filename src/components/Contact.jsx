import email from "../assets/images/email.png"
import phone from "../assets/images/phone-call.png"

export default function Contact(){
    return(
        <section className="mt-48">
            <div className="w-full p-[50px] flex gap-5 flex-col items-center bg-green-600 text-white">
                <h2 className="w-max font-bold text-5xl"> <strong>Gostaria de comprar nossos produtos? </strong> </h2>
                <h3 className="w-max font-bold text-4xl"> <strong> Contate-nos: </strong></h3>
                <div className="w-full flex justify-evenly">
                    <div className="flex items-center justify-center gap-5 ">
                        <img src={phone} alt=""/>
                        <h2 className="font-bold text-4xl"> <a href="tel:+553438181800"> +55 (34) 3818-1800 </a></h2>
                    </div>

                    <div className="flex items-center justify-end gap-5 ">
                        <img src={email} alt=""/>
                        <h2 className="font-bold text-4xl"> <a href="mailto:vendas@patense.com.br">vendas@patense.com.br</a></h2>
                    </div>
                </div>
            </div>
        </section>
    )
}