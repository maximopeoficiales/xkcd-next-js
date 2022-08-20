import { Comic } from "@/domain/Comic";
import PageLayout from "@/ui/components/PageLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs/promises";

interface MyProps {
    comic: Comic;
}

const ComicId = ({ comic: { title, alt, img, height, width } }: MyProps) => {
    return (
        <PageLayout>
            <Head>
                <title>XKCD COMICS FOR DEVELOPERS</title>
            </Head>
            <section className="max-w-lg m-auto">
                <h1 className="font-bold">{title}</h1>
                <Image
                    src={img}
                    alt={alt}
                    height={height}
                    width={width}
                />
                <p>{alt}</p>
            </section>
        </PageLayout>
    )
}

export default ComicId;

// le indica que debe puede renderizar y el usuario pone otro id lo manda a un fallback
export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [{
            params: { id: '2587' }
        }],
        fallback: false
    }
}

// obtiene el id de la url y lo envia como prop a componente
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params!;
    const content = await fs.readFile(`./comics/${id}.json`, 'utf8');
    const comic = JSON.parse(content);

    // console.log(latestComics);

    return {
        props: {
            comic
        }
    }
}
