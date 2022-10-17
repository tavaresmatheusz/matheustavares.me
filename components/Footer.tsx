import Link from "next/link";
import Image from "next/image";

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-[#1A1A1A] w-[100%] h-[153px] flex justify-center items-center">
                <Link href={"https://github.com/tavaresmatheusz"}>
                    <Image src={"/matheus.png"} width={139} height={54} alt={"Matheus"}/>
                </Link>
        </footer>
    );
}

export default Footer