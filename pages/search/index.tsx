import { ComicSearch } from "@/domain/ComicSearch.response";
import { comicSearchServiceInstance } from "@/services/comicSearch.service";
import PageLayout from "@/ui/components/PageLayout";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface MyProps {
    query: string,
    results: ComicSearch[],
}
const SearchIndex = ({ query, results }: MyProps) => {
    return (
        <>
            <Head>
                <title>xkcd - Results for {query}</title>
                <meta name="description" content={`Search results for ${query}`} />
            </Head>

            <PageLayout>
                <h1>Search: {query}</h1>
                {results.map(e => (
                    <p>{e.title}</p>
                ))

                }
            </PageLayout>
        </>

    )
}

export default SearchIndex;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { q = "" } = query;
    const results = await comicSearchServiceInstance.search(q as string);
    return {
        props: {
            query: q,
            results
        }
    }
}