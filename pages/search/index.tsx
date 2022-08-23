import PageLayout from "@/ui/components/PageLayout";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface MyProps {
    query: string
}
const SearchIndex = ({ query }: MyProps) => {
    return (
        <>
            <Head>
                <title>xkcd - Results for {query}</title>
                <meta name="description" content={`Search results for ${query}`} />
            </Head>

            <PageLayout>
                <h1>Search: {query}</h1>
            </PageLayout>
        </>

    )
}

export default SearchIndex;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { q = "" } = query;

    return {
        props: {
            query: q
        }
    }
}