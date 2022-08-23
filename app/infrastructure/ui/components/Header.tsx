import { Container} from "@nextui-org/react";
import Link from "next/link";

interface MyProps {
}
const Header = ({ }: MyProps) => {
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
                    <li><Link href={"/"}>About</Link></li>
                    <li><Link href={"/"}>Search</Link></li>
                </Container>
            </nav>
        </header>
    )
}

export default Header;