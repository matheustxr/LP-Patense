import logo from "../assets/images/logo.png"
export default function Header() {
    return(
        <>
            <header className="w-full flex justify-center py-9">
                <img src={logo} alt="Logo Patense" className="w-64"/>
            </header>
            
        </>
    )
}