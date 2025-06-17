import Link from "next/link";
import styles from "./navigation.module.css"

export default function Navigation(){
    return (
        <nav className="font-semibold">
            <ul className="flex md:space-x-4 flex-col md:flex-row">
                <li><Link href="/" className="md:p-1 hover:bg-gray-200 hover:text-gray-700 text-2xl md:text-base">Home</Link></li>
                <li><Link href="/about" className="md:p-1 hover:bg-gray-200 hover:text-gray-700 text-2xl md:text-base">About</Link></li>
                <li><Link href="/about/projects" className="md:p-1 hover:bg-gray-200 hover:text-gray-700 text-2xl md:text-base">Projects</Link></li>
                <li><Link href="/photos" className="link">Photos</Link></li>
                <li><Link href="/blog" className="link">Blog</Link></li>
            </ul>
        </nav>
    )
}