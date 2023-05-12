import farinha from "../assets/images/FarinhaAtum.png"

export default function FarinhaAtum(){
    return(
        <>
            <section className=" px-4 py-14  skew-y-[8deg] bg-yellow-600 lg:h-[600px] mt-18 lg:py-24 lg:px-40 lg:flex-row">
                <div className="flex  flex-col mt-10 skew-y-[-8deg] lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <img src={farinha} alt="" />
                    </div>

                    <div className="w-full lg:w-1/2 ">
                        <h2 className="mb-5 text-[52px] font-bold text-white">Farinha de Atum</h2>
                        <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi accusamus modi ducimus cumque sit, omnis quisquam praesentium alias deleniti libero perferendis dolorem unde, impedit minima eum fugit reprehenderit tempore?</p>
                        <div className="p-[3px] w-max mt-8 bg-gradient-to-tl from-green-600 to-yellow-500 rounded-2xl">
                            <button type="button" className="bg-white py-5 px-8 rounded-2xl hover:bg-gradient-to-tl from-green-600 to-yellow-500 hover:text-white font-bold transition-all duration-500" >
                                Adquira já!!
                            </button>
                        </div>
                    </div>
                </div>
                    
            </section>
        </>
    )
}