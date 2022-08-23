import Head from "next/head"
import Footer from "./Footer";
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
                {/* <link rel="icon" href="/cat.ico" /> */}
            </Head>
            <Header />
            <main className="flex items-center justify-between max-w-xl p-4 m-auto">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PageLayout