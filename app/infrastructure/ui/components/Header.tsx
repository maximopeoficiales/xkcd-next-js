import { ComicSearch } from "@/domain/ComicSearch.response";
import { Container } from "@nextui-org/react";
import Link from "next/link";
import { useRef, useState } from "react";

interface MyProps {
}
const Header = ({ }: MyProps) => {
    const [results, setResults] = useState<ComicSearch[]>([])
    const searchRef = useRef<HTMLInputElement>(null);
    const q = searchRef.current?.value;

    const handleChange = async () => {
        const response = await fetch(`/api/search?q=${q}`);
        const results = await response.json();
        setResults(results);
    }
    return (
        <header className="flex items-center justify-between max-w-xl p-4 m-auto">
            <div className="">
                <h1 className="font-bold">Next <span className="font-light">XKCD</span></h1>
            </div>
            <nav>
                <Container
                    className="flex justify-between gap-4"
                    as="ul"
                    responsive
                    style={{ listStyle: "none" }}
                >
                    <li><Link href={"/"}>Home</Link></li>
                    <li>
                        <input type="search" placeholder="Search..."
                            className="px-4 py-1 text-xs border border-gray-400 rounded-3xl"
                            ref={searchRef}
                            onChange={handleChange}
                        />
                        <div className="relative z-10">
                            {Boolean(results.length) && (
                                <div className="z-50 w-full overflow-hidden bg-white border rounded-lg shadow-xl border-gray-50">
                                    <li className="m-0" key={"all-results"}>
                                        <Link href={`/search?q=${q}`}>
                                            <a className="block px-2 py-1 overflow-hidden text-sm italic font-semibold text-gray-400 hover:bg-slate-200 text-ellipsis whitespace-nowrap" >
                                                Ver {results.length} resultados
                                            </a>
                                        </Link>
                                    </li>

                                    {results.map((result) => (
                                        <Link href={`/comic/${result.id}`}>
                                            <a className="block px-2 py-1 overflow-auto text-sm font-semibold hover:bg-slate-200 text-ellipsis" >
                                                {result.title}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                </Container>
            </nav>
        </header>
    )
}

export default Header;