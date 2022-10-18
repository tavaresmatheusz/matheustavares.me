import Image from "next/image";

const Portfolio = (): JSX.Element => {
    return (
    <div className="container mx-auto py-[100px]">
        <h2 className="text-center text-black font-['Poppins'] text-xl font-bold">Portfolio</h2>

        <div className="flex flex-row justify-evenly flex-wrap py-[80px] w-[100%] gap-y-[20px] gap-x-[80px]">

            <div className="flex md:flex-row flex-col shadow-[1px_0px_4px_4px_rgba(0,0,0,0.05)] rounded-[30px]">
                <Image src={"/sites/loupsite.png"} width={375} height={260} quality={100} className="rounded-tl-[30px] md:rounded-bl-[30px] rounded-tr-[30px] md:rounded-tr-[0px]"/>
                <div className="box-border h-[260px] w-[353px] p-4 flex flex-col gap-y-[10px]">
                    <h2 className="font-['Poppins'] text-xl text-black">loup.host</h2>
                    <div className="flex flex-row gap-x-[5px] w-[239px]">
                        <h2 className="font-['Poppins'] text-s font-bold text-black">Stacks:</h2>
                        <p className="font-['Poppins'] text-s text-black min-w-[100%]">JavaScript, React, Next.js, MongoDB</p>
                    </div>
                    <div className="flex flex-row gap-x-[5px] w-[239px]">
                        <h2 className="font-['Poppins'] text-s font-bold text-black">Detalhes:</h2>
                        <p className="font-['Poppins'] text-s text-black min-w-[100%]">Site de venda de planos de hospedagem para jogos e sites.</p>
                    </div>

                    <div className="flex flex-row gap-x-[30px] w-[239px] py-[15px]">
                        <a href="https://github.com/tavaresmatheusz/louphost" className="bg-none rounded-[30px] shadow-[1px_0px_4px_4px_rgba(0,0,0,0.15)] py-[8px] px-[15px] font-bold text-s text-black">REPOSITORIO</a>
                        <a href="https://louphost-yuf9.vercel.app/" className="bg-black rounded-[30px] shadow-[1px_0px_4px_4px_rgba(0,0,0,0.15)] py-[8px] px-[15px] font-bold text-s text-white">DEMONSTRAÇÃO</a>
                    </div>
    
                </div>
            </div>

            <div className="flex md:flex-row flex-col shadow-[1px_0px_4px_4px_rgba(0,0,0,0.05)] rounded-[30px]">
                <Image src={"/sites/cardex.png"} width={375} height={260} quality={100} className="rounded-tl-[30px] md:rounded-bl-[30px] rounded-tr-[30px] md:rounded-tr-[0px]"/>
                <div className="box-border h-[260px] w-[353px] p-4 flex flex-col gap-y-[10px]">
                    <h2 className="font-['Poppins'] text-xl text-black">CarDex</h2>
                    <div className="flex flex-row gap-x-[5px] w-[239px]">
                        <h2 className="font-['Poppins'] text-s font-bold text-black">Stacks:</h2>
                        <p className="font-['Poppins'] text-s text-black min-w-[100%]">JavaScript, React, Next.js, Axios</p>
                    </div>
                    <div className="flex flex-row gap-x-[5px] w-[239px]">
                        <h2 className="font-['Poppins'] text-s font-bold text-black">Detalhes:</h2>
                        <p className="font-['Poppins'] text-s text-black min-w-[100%]">Projeto que lista carros e suas especificações.</p>
                    </div>

                    <div className="flex flex-row gap-x-[30px] w-[239px] py-[15px]">
                        <a href="https://github.com/tavaresmatheusz/cardex-frontend" className="bg-none rounded-[30px] shadow-[1px_0px_4px_4px_rgba(0,0,0,0.15)] py-[8px] px-[15px] font-bold text-s text-black">REPOSITORIO</a>
                        <a className="bg-black rounded-[30px] shadow-[1px_0px_4px_4px_rgba(0,0,0,0.15)] py-[8px] px-[15px] font-bold text-s text-white opacity-40 hover:cursor-not-allowed">DEMONSTRAÇÃO</a>
                    </div>

                </div>
            </div>

            <div className="flex md:flex-row flex-col shadow-[1px_0px_4px_4px_rgba(0,0,0,0.05)] rounded-[30px]">
                <Image src={"/sites/sst.png"} width={375} height={260} quality={100} className="rounded-tl-[30px] md:rounded-bl-[30px] rounded-tr-[30px] md:rounded-tr-[0px]"/>
                <div className="box-border h-[260px] w-[353px] p-4 flex flex-col gap-y-[10px]">
                    <h2 className="font-['Poppins'] text-xl text-black">SST Egenharia</h2>
                    <div className="flex flex-row gap-x-[5px] w-[239px]">
                        <h2 className="font-['Poppins'] text-s font-bold text-black">Stacks:</h2>
                        <p className="font-['Poppins'] text-s text-black min-w-[100%]">HTML, CSS, JavaScript, Express.js</p>
                    </div>
                    <div className="flex flex-row gap-x-[5px] w-[239px]">
                        <h2 className="font-['Poppins'] text-s font-bold text-black">Detalhes:</h2>
                        <p className="font-['Poppins'] text-s text-black min-w-[100%]">Site da empresa de engenharia SST.</p>
                    </div>

                    <div className="flex flex-row gap-x-[30px] w-[239px] py-[15px]">
                        <a className="bg-none rounded-[30px] shadow-[1px_0px_4px_4px_rgba(0,0,0,0.15)] py-[8px] px-[15px] font-bold text-s text-black opacity-40 hover:cursor-not-allowed">REPOSITORIO</a>
                        <a href="https://sstengenharia.eng.br" className="bg-black rounded-[30px] shadow-[1px_0px_4px_4px_rgba(0,0,0,0.15)] py-[8px] px-[15px] font-bold text-s text-white">DEMONSTRAÇÃO</a>
                    </div>

                </div>
            </div>




        </div>
    </div>);
}

export default Portfolio