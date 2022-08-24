import { GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import PageLayout from '@/ui/components/PageLayout';
import { Comic } from '@/domain/Comic';

import fs from "fs/promises";
import { useI18N } from '@/ui/context/i18n';
interface MyProps {
  latestComics: Comic[]
}
const Home = ({ latestComics }: MyProps) => {
  // console.log(latestComics);
  const { t } = useI18N();

  return (
    <>
      <Head>
        <title>XKCD COMICS</title>
      </Head>
      <PageLayout>
        <main>
          <h2 className="text-3xl font-bold text-center">{t("LATEST_COMICS")}</h2>
          <section className="grid max-w-md grid-cols-1 gap-4 m-auto sm:grid-cols-2">
            {
              latestComics.map(comic => (
                <Link key={comic.id} href={`/comic/${comic.id}`}
                >
                  <a className="pb-4 mb-4">
                    <h3 className="text-sm font-bold text-center">{comic.title}</h3>

                    <Image
                      src={comic.img}
                      alt={comic.alt}
                      height={comic.height}
                      width={comic.width}
                    // height={300}
                    // width={300}
                    // layout="intrinsic"
                    // objectFit='contain'
                    />

                  </a>

                </Link>
              ))

            }
          </section>
        </main>
      </PageLayout>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const files = await fs.readdir("./comics");
  const latestComicsFiles = files.slice(-8, files.length);

  const promisesReadFiles = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, 'utf8');
    return JSON.parse(content);
  });

  const latestComics = await Promise.all(promisesReadFiles);
  // console.log(latestComics);

  return {
    props: {
      latestComics
    }
  }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const cats = await catApiServiceInstance.getCats();
//   return {
//     props: { cats }
//   }
// }