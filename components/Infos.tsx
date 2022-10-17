const Infos = (): JSX.Element => {
    return (
    <div className="container mx-auto py-[30px]">
        <div className="flex md:flex-row flex-col justify-evenly">
            <div className="flex flex-col text-center md:text-left justify-center">
                <h2 className="py-8 text-black font-['Poppins'] text-xl font-bold">Sobre mim:</h2>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">Me chamo Matheus, tenho 18 anos, tive meu primeiro contato com a programação muito cedo com o Java em 2016, um tempo depois em 2019 comecei a estudar o JavaScript e no final do ano de 2020 comecei a me dedicar ao desenvolvimento web. Por enquanto minhas únicas experiências foram com free-lancer porém estou em busca da primeira expêriencia profissional.</p>
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