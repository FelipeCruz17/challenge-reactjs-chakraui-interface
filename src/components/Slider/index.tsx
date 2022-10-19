import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
      h={['250px', '450px']}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
            bgImage="url(/europe.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href={`/continent/europe`}>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
            bgImage="url(/europe.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href={`/continent/europe`}>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
