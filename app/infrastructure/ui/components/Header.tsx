import { Container, Text } from "@nextui-org/react";
import Link from "next/link";

interface MyProps {
}
const Header = ({ }: MyProps) => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="">
                <h1 className="font-bold">Next <span className="font-light">XKCD</span></h1>
            </div>
            <nav>
                <Container
                    className="text-white"
                    as="ul"
                    display="flex"
                    direction="row"
                    gap={4}
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