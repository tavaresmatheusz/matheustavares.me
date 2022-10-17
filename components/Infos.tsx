const Infos = (): JSX.Element => {
    return (
    <div className="container mx-auto py-[30px]">
        <div className="flex md:flex-row flex-col justify-evenly">
            <div className="flex flex-col text-center md:text-left justify-center">
                <h2 className="py-8 text-black font-['Poppins'] text-xl font-bold">Sobre mim:</h2>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">Tive meu primeiro contato na programação em 2016 com o Java, depois em 2019 com JavaScript e no final de 2021 comecei a estudar sobre desenvolvimento web desenvolvendo tanto o front-end quanto o back-end. Tenho experiência com Java, MySql, Node.JS, Next.js, Express.js, MongoDB.</p>
            </div>
            <div className="flex flex-col  text-center md:text-left justify-center">
                <h2 className="py-8 text-black font-['Poppins'] text-xl font-bold">Experiência:</h2>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">Java desde 2016</p>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">JavaScript desde 2019</p>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">Node.JS desde 2019</p>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">HTML, CSS desde 2021</p>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">Next.js, Express.js desde 2022</p>
            </div>
        </div>
    </div>
    );
}

export default Infos