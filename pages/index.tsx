import Head from 'next/head'
import { Container, Card, Row, Text } from "@nextui-org/react";
import PageLayout from '@/ui/components/PageLayout';

interface MyProps {

}
const Home = ({ }: MyProps) => {
  return (
    <PageLayout>
      <div>
        <Head>
          <title>XKCD COMICS</title>
        </Head>
        
        <Container>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  NextUI gives you the best developer experience with all the features
                  you need for building beautiful and modern websites and
                  applications.
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Container>

      </div>
    </PageLayout>
  )
}

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const cats = await catApiServiceInstance.getCats();
//   return {
//     props: { cats }
//   }
// }