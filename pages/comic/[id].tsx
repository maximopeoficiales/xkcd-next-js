import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import PageLayout from "@/ui/components/PageLayout";
import { Comic } from "@/domain/Comic";

import fs from "fs/promises";
import { basename } from "path";
import { Paths } from "@/domain/next";

interface MyProps {
    comic: Comic;
    hasPrevious: boolean;
    hasNext: boolean;
    prevId: number;
    nextId: number;
}

const ComicId = ({ comic: { title, alt, img, height, width, safe_title }, hasNext, hasPrevious, prevId, nextId }: MyProps) => {
    return (
        <>
            <Head>
                <title>{safe_title}</title>
            </Head>
            <PageLayout>
                <div className="">
                    <h1 className="mb-4 text-xl font-bold text-center">{title}</h1>
                    <div className="flex flex-col justify-center p-4 border shadow-xl rounded-xl" >
                        <Image
                            src={img}
                            alt={alt}
                            width={width}
                            height={height}
                        />

                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-900">
                                {title}
                            </h5>
                            <p className="mt-2 text-gray-500">
                                {alt}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 font-bold">
                        {
                            hasPrevious && <Link href={`/comic/${prevId}`}>
                                <a className="text-gray-600">
                                    🤛  Previous
                                </a>
                            </Link>
                        }

                        {
                            hasNext && <Link href={`/comic/${nextId}`}>
                                <a className="text-gray-600">
                                    Next 🤜
                                </a>
                            </Link>
                        }
                    </div>
                </div>

            </PageLayout >
        </>
    )
}

export default ComicId;

// le indica que debe puede renderizar y el usuario pone otro id lo manda a un fallback
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const files = await fs.readdir("./comics");
    // leemos todas los comics y lo cargamos a las rutas que se renderizaran en el build

    let paths: Paths = [];
    locales!.forEach(locale => {
        paths = paths.concat(files.map(file => {
            const id = basename(file, ".json");
            return { params: { id }, locale }
        }));
    });

    return {
        paths,
        fallback: false
    }
}

// obtiene el id de la url y lo envia como prop a componente
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params!;
    const content = await fs.readFile(`./comics/${id}.json`, 'utf8');
    const comic = JSON.parse(content);

    const idNumber = +(id as string);
    const prevId = idNumber - 1
    const nextId = idNumber + 1

    const [prevResult, nextResult] = await Promise.allSettled([
        fs.stat(`./comics/${prevId}.json`),
        fs.stat(`./comics/${nextId}.json`)
    ]);
    const hasPrevious = prevResult.status === "fulfilled";
    const hasNext = nextResult.status === "fulfilled";
    return {
        props: {
            comic,
            hasPrevious,
            hasNext,
            prevId,
            nextId,
        }
    }
}
