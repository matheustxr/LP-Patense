import farinha from "../assets/images/FarinhaCamarao.png"

export default function FarinhaCamarao(){
    return(
        <>
            <section className=" px-4 py-14 flex flex-col-reverse  lg:py-24 lg:px-40 lg:flex-row">
                <div className="w-full lg:w-1/2 ">
                    <h2 className="text-[52px] font-bold mb-5 ">Farinha de Camarão</h2>
                    <p className="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi accusamus modi ducimus cumque sit, omnis quisquam praesentium alias deleniti libero perferendis dolorem unde, impedit minima eum fugit reprehenderit tempore?</p>
                    <div className="p-[3px] w-max mt-8 bg-gradient-to-tl from-green-600 to-yellow-500 rounded-2xl">
                        <button type="button" className="bg-white py-5 px-8 rounded-2xl hover:bg-gradient-to-tl from-green-600 to-yellow-500 hover:text-white font-bold transition-all duration-500" >
                            Adquira já!!
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <img src={farinha} alt="" />
                </div>
            </section>
        </>
    )
}