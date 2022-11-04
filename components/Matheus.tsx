import Image from "next/image";
import Link from "next/link";
import Linkedin from "./svg/Linkedin";
import Instagram from "./svg/Instagram";
import GitHub from "./svg/GitHub";

const Matheus = (): JSX.Element => {
    return (
    <div className="md:bg-[#1A1A1A] bg-[#D9D9D9] h-[463px] flex justify-center">
        <div className="bg-[#D9D9D9] flex justify-center w-[783px] md:h-[388px] h-[420px] items-center rounded-[30px] mt-[30px]">
            <div className="md:w-[580px] w-[100%] md:h-[253px] h-[100%] flex justify-center md:flex-row flex-col items-center md:gap-x-[50px]">
                <Image src={"/profile.jpg"} alt={"Matheus Tavares"} width={220} height={220} quality={"100%"} className="md:rounded-full"/>
                <div className="flex flex-col gap-y-[5px]">
                    <h2 className="font-['Poppins'] text-xl font-bold text-black">Matheus Tavares</h2>
                    <h2 className="font-['Poppins'] text-xl font-bold text-black">18 anos</h2>
                    <div className="w-[130px] h-[5px] bg-black"/>
                    <h1 className="font-['Poppins'] text-xl font-bold text-black">Desenvolvedor Full-Stack</h1>
                    <div className="flex flex-row gap-x-[18px]">
                        <Link href={"https://www.instagram.com/w9thh/"}>
                            <a >
                                <Instagram className={"fill-black"}/>
                            </a>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/matheus-tavares-5b21b3253/"}>
                            <a>
                                <Linkedin className={"fill-black"}/>
                            </a>
                        </Link>
                        <Link href={"https://github.com/tavaresmatheusz/"}>
                            <a>
                                <GitHub className={"fill-black"}/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}

export default Matheus