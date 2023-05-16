import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

import ilustracao from "../assets/images/ilustrapatense.webp"
import svgFile from "../assets/images/file.svg"
import logo from "../assets/images/patense.png"

export default function About(){
    return(
        <section className="w-full flex flex-col mt-16 px-[16px] py-10 lg:px-40">
            <h2 className="text-center mb-5 font-semibold text-[36px]">Sobre o Grupo Patense</h2>
            <div className="flex flex-col lg:flex-row">
                <img src={ilustracao} alt="logo patense" className="w-[500px] mb-10 rounded"/>
                <div className="w-full">
                    <div className='hidden lg:flex lg:ml-10'>
                        oi
                    </div>

                    <div className="mobile lg:hidden">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <img src={svgFile} alt="svg file" className="w-[16px] mr-3"/>
                                    Nossa História
                                </Accordion.Header>
                                <Accordion.Body>
                                Fundada no ano de 1970 por Antônio Gonçalves, a empresa iniciou os seus trabalhos em Patos de Minas ainda de maneira arcaica. Um simples açougueiro da cidade percebeu que existia um mercado muito diferente que agregaria muito para o planeta no que tange sustentabilidade e valores. Nosso projeto é coletar subprodutos animais que antes eram destinados de forma incorreta ao meio ambiente e agregar valor a eles, produzindo proteínas, gorduras e novas matérias-primas para diversos setores da economia nacional.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <img src={logo} alt="svg file" className="w-[16px] mr-3"/>
                                    Grupo Patense
                                </Accordion.Header>
                                <Accordion.Body>
                                    Hoje o Grupo conta com as empresas Patense, Farol, Pets Mellon,
                                    Originalis e BioSea, que agregam ao grupo tanto valor quanto agregam à
                                    nossa biodiversidade. O Grupo Patense contempla mais de 52 anos de
                                    história no mercado de rendering, a dedicação e a qualidade entregues
                                    aos seus parceiros ao longo desse tempo conferem credibilidade e
                                    confiança para todo o grupo. Suas empresas estão localizadas por todo o
                                    Brasil, do nordeste à região sul, garantindo, assim, uma grande
                                    capacidade de produção, mantendo sempre a qualidade e excelência para
                                    atender todos os clientes - nacionais e internacionais.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}