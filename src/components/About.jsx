import logo from "../assets/images/ilustrapatense.webp"

export default function About(){
    return(
        <section className="w-full flex flex-col px-4 py-10 lg:mt-20 lg:items-center lg:flex-row lg:px-40 lg:justify-around">
            <img src={logo} alt="logo patense" className="w-[500px] mb-10"/>
            <div className="lg:w-1/2">
                <h2 className="text-center mb-5 font-semibold text-[36px]">Sobre Nós</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima debitis magni iusto quis enim, quas officia suscipit, corporis, quibusdam qui ipsum temporibus dolores facere nostrum nulla expedita provident nesciunt cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio animi laborum dolorem culpa sequi amet quas cumque. Quod odit consequatur nostrum laboriosam porro praesentium pariatur sed fugit enim ullam?</p>
            </div>
        </section>
    )
}