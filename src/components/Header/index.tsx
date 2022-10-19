import { useRouter } from 'next/router'

import { Image } from '@chakra-ui/image'
import { Flex, Grid, Icon } from '@chakra-ui/react'

import Link from 'next/link'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={['50px', '100px']}
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={['81px', '184px']}
          src="/logo-world-trip.svg"
          alt=""
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}
