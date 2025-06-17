import Link from "next/link";
import Navigation from "./navigation";

export default function Header(){
    return (
        <header className="flex justify-between md:items-center mt-4 border-b dark:border-white pb-2">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link href="/" className="text-xl">User</Link>
                </div>
                <Navigation/>
            </div>
            <div className="border dark:border-white cursor-pointer p-1">Dark Toggle</div>
        </header>
    )
}