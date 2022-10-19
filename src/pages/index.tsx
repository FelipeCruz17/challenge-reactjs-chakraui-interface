import { Flex, Heading } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { TripStyleList } from '../components/TripStyleList'

export default function Home() {
  return (
    <>
      <Flex direction="column">
        <Header />
        <Banner />
        <TripStyleList />
        <Divider />

        <Heading
          color="gray.700"
          textAlign="center"
          fontWeight="500"
          mb={['5', '14']}
          fontSize={['lg', '3xl', '4xl']}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
        <Slider />
      </Flex>
    </>
  )
}
