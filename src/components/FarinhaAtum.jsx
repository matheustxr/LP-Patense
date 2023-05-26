import farinha from "../assets/images/FarinhaAtum.webp"

export default function FarinhaAtum(){
    return(
        <>
            <section id="farinhaAtum" className="min-h-[700px] lg:min-h-0 px-4 bg-[#ec5f1a] skew-y-[7deg] lg:px-40 lg:flex-row">
                <div className="flex  flex-col mt-10 skew-y-[-7deg] lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <img src={farinha} alt="" />
                    </div>

                    <div className="w-full lg:w-1/2  flex flex-col items-center justify-center lg:mt-10">
                        <h2 className="mb-5 text-[52px] font-bold text-white">Farinha de Atum</h2>
                        <p className="text-[20px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi accusamus modi ducimus cumque sit, omnis quisquam praesentium alias deleniti libero perferendis dolorem unde, impedit minima eum fugit reprehenderit tempore?</p>
                        <div className="w-full flex justify-end">
                            {/*<div className="p-[3px] w-max mt-8 flex justify-end bg-gradient-to-tl from-green-600 to-yellow-500 rounded-2xl">
                                <a type="button" className="bg-white py-5 px-8 rounded-2xl hover:bg-gradient-to-tl from-green-600 to-yellow-500 hover:text-white font-bold transition-all duration-500" >
                                    Adquira já!!
                                </a>
                            </div>*/}
                        </div>
                        
                    </div>
                </div>
                    
            </section>
        </>
    )
}