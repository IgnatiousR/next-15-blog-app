import Image from "next/image";
import dog1 from "./../../public/images/dog1.png";
import dog2 from "./../../public/images/dog2.png";
import dog3 from "./../../public/images/dog3.png";
import dog4 from "./../../public/images/dog4.png";

export const metadata = {
    title: "Photos",
};

export default function PhotosPage(){
    return(<div>
        <h1 className="text-2xl mb-8 font-semibold">My Photos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-60 overflow-hidden relative">
                <Image fill className="object-cover w-full h-full"
                src={dog1} alt="image" sizes="(max-width:768px) 100vw, 50vw" quality={50} placeholder="blur"/>
            </div>
            <div className="h-60 overflow-hidden relative">
                <Image fill className="object-cover w-full h-full" quality={50} sizes="(max-width:768px) 100vw, 50vw"
                src={dog2} alt="" placeholder="blur" />
            </div>
            <div className="h-60 overflow-hidden relative">
                <Image fill className="object-cover w-full h-full" quality={50} sizes="(max-width:768px) 100vw, 50vw"
                src={dog3} alt="" placeholder="blur"/>
            </div>
            <div className="h-60 overflow-hidden relative">
                <Image fill className="object-cover w-full h-full" quality={50} sizes="(max-width:768px) 100vw, 50vw"
                src={dog4} alt="" placeholder="blur"/>
            </div>
        </div>
    </div>)
}