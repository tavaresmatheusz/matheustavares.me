const Infos = (): JSX.Element => {
    return (
    <div className="container mx-auto py-[30px]">
        <div className="flex flex-row md:flex-col md:justify-center">
            <div className="flex flex-col w-1/2">
                <h2 className="py-8 text-black font-['Poppins'] text-xl font-bold">Sobre mim:</h2>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="flex flex-col w-1/2">
                <h2 className="py-8 text-black font-['Poppins'] text-xl font-bold">Experiência:</h2>
                <p className="text-black font-['Poppins'] text-s max-w-[650px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    </div>
    );
}

export default Infos