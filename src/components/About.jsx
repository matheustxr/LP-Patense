

/*COMPONENTES - ANT DESIGN*/
import { Collapse } from 'antd';
const { Panel } = Collapse;

import { Tabs } from 'antd';


import ilustracao from "../assets/images/ilustrapatense.webp"
import svgFile from "../assets/images/file.svg"
import logo from "../assets/images/patense.png"

export default function About(){
    //COMPONENTE COLLAPSE - MOBILE
    const onChange = (key) => {
        console.log(key);
    };

    //COMPONENTE TABS - DESKTOP
    const { TabPane } = Tabs;

    return(
        <section className="w-full flex flex-col mt-16 px-4 py-10 lg:px-40">
            <h2 className="text-center mb-5 font-semibold text-[36px]">Sobre o Grupo Patense</h2>
            <div className="flex flex-col items-center lg:flex-row">
                <img src={ilustracao} alt="logo patense" className="w-[500px] mb-10 rounded"/>
                <div className="w-full  lg:pb-10 lg:flex lg:justify-center">
                    {/*MOBILE*/}
                    <div className='lg:hidden'>
                         <Collapse defaultActiveKey={['1']} onChange={onChange}>
                            <Panel 
                                header={
                                    <div className='flex'>
                                        <img src={svgFile} alt="svg file" className="w-[16px] mr-3"/>
                                        <p>Nossa História</p>
                                    </div>
                                }
                                key="1"
                                className=''
                            >
                                <p>Fundada no ano de 1970 por Antônio Gonçalves, a empresa iniciou os seus trabalhos em Patos de Minas ainda de maneira arcaica. Um simples açougueiro da cidade percebeu que existia um mercado muito diferente que agregaria muito para o planeta no que tange sustentabilidade e valores. Nosso projeto é coletar subprodutos animais que antes eram destinados de forma incorreta ao meio ambiente e agregar valor a eles, produzindo proteínas, gorduras e novas matérias-primas para diversos setores da economia nacional.</p>
                            </Panel>

                            <Panel 
                                header={
                                    <div className='flex'>
                                        <img src={logo} alt="svg file" className="w-[18px] mr-3"/>
                                        <h3>Grupo Patense</h3>
                                    </div>
                                }
                                key="2"
                                className=''
                            >
                                <p>Hoje o Grupo conta com as empresas Patense, Farol, Pets Mellon,
                                    Originalis e BioSea, que agregam ao grupo tanto valor quanto agregam à
                                    nossa biodiversidade. O Grupo Patense contempla mais de 52 anos de
                                    história no mercado de rendering, a dedicação e a qualidade entregues
                                    aos seus parceiros ao longo desse tempo conferem credibilidade e
                                    confiança para todo o grupo. Suas empresas estão localizadas por todo o
                                    Brasil, do nordeste à região sul, garantindo, assim, uma grande
                                    capacidade de produção, mantendo sempre a qualidade e excelência para
                                    atender todos os clientes - nacionais e internacionais.
                                </p>
                            </Panel>
                        </Collapse>
                    </div>

                    {/*DESKTOP*/}
                    <div className='hidden lg:flex lg:ml-5 '>
                    <Tabs tabPosition="left">
                        <TabPane tab=
                            {
                                <div className='flex flex-col items-center border py-5 px-10'>
                                    <img src={svgFile} alt="svg file" className="w-[35px] mr-3"/>
                                    <h3 className='text-[18px] font-semibold'>Nossa Historia</h3>
                                </div>
                            } 
                            key="1"
                        >
                            <p>Fundada no ano de 1970 por Antônio Gonçalves, a empresa iniciou os seus trabalhos em Patos de Minas ainda de maneira arcaica. Um simples açougueiro da cidade percebeu que existia um mercado muito diferente que agregaria muito para o planeta no que tange sustentabilidade e valores. Nosso projeto é coletar subprodutos animais que antes eram destinados de forma incorreta ao meio ambiente e agregar valor a eles, produzindo proteínas, gorduras e novas matérias-primas para diversos setores da economia nacional.</p>
                        </TabPane>

                        <TabPane tab=
                            {
                                <div className='flex flex-col items-center border py-5 px-10'>
                                    <img src={logo} alt="svg file" className="w-[50px] mr-3"/>
                                    <h3 className='text-[18px] font-semibold'>Grupo Patense</h3>
                                </div>
                            } 
                            key="2"
                        >
                            <p>
                                Hoje o Grupo conta com as empresas Patense, Farol, Pets Mellon,
                                Originalis e BioSea, que agregam ao grupo tanto valor quanto agregam à
                                nossa biodiversidade. O Grupo Patense contempla mais de 52 anos de
                                história no mercado de rendering, a dedicação e a qualidade entregues
                                aos seus parceiros ao longo desse tempo conferem credibilidade e
                                confiança para todo o grupo. Suas empresas estão localizadas por todo o
                                Brasil, do nordeste à região sul, garantindo, assim, uma grande
                                capacidade de produção, mantendo sempre a qualidade e excelência para
                                atender todos os clientes - nacionais e internacionais.
                        </p>
                        </TabPane>
                    </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}