import Head from "next/head"
import Header from "./Header";

interface MyProps {
    children: React.ReactNode;
    title?: string
}
const PageLayout = ({ children, title = "I love Cats" }: MyProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The best cat app in the world" />
                <link rel="icon" href="/cat.ico" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default PageLayout