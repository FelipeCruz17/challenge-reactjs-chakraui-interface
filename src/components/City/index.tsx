import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

interface CityProps {
  countryImage: string
  cityName: string
  countryName: string
  flag: string
}

export function City({ flag, countryImage, countryName, cityName }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/countries/${countryImage}.png`} h="170px" w="100%" alt="" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {cityName}
          </Heading>
          <Text fontSize="xl" fontWeight="500" mt="3" color="gray.500">
            {countryName}
          </Text>
        </Flex>
        <Image
          alt=""
          src={`/country-flags/${flag}.png`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}
