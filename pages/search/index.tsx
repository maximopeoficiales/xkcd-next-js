import { ComicSearch } from "@/domain/ComicSearch.response";
import { comicSearchServiceInstance } from "@/services/comicSearch.service";
import PageLayout from "@/ui/components/PageLayout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
                <div className="">
                    <h1>Search: {query}</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {results.map(e => (
                            <Link href={`comic/${e.id}`} key={e.id}>
                                <a className="block overflow-hidden border border-black rounded-2xl">
                                    <div className="p-4 bg-gray-900">
                                        <div className="flex items-center">
                                            <h5 className="text-sm text-white">{e.title}</h5>
                                          
                                        </div>

                                        <p className="mt-1 text-xs text-gray-300">{e.alt}</p>
                                    </div>
                                    <div className="w-full h-56">
                                        <img className="object-contain w-full h-full" src={e.img} alt={e.alt} />
                                    </div>

                                </a>

                            </Link>

                        ))
                        }
                    </div>
                </div>


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