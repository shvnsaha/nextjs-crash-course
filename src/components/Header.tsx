import Link from "next/link";

const Header = () => {
    return (
        <div className="absolute z-10 w-full text-white">
            <nav className="container flex items-center justify-between mx-auto h-20">
                <Link href={'/'}>Home</Link>
                <div className="flex gap-2">
                    <Link href={"/performance"}>Performance</Link>
                    <Link href={"/reliability"}>Reliability</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;