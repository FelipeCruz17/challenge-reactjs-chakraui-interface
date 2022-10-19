import { Grid, Heading } from '@chakra-ui/react'
import { City } from '../City'

export function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={['2xl', '4xl']} mb="10">
        Cidades + 100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0px']}
      >
        <City
          countryImage="london"
          cityName="London"
          countryName="England"
          flag="england-flag"
        />
        <City
          countryImage="paris"
          cityName="Paris"
          countryName="France"
          flag="france-flag"
        />
        <City
          countryImage="rome"
          cityName="Rome"
          countryName="Italy"
          flag="italy-flag"
        />
        <City
          countryImage="prague"
          cityName="Prague"
          countryName="Czech Republic"
          flag="czech-republic-flag"
        />
        <City
          countryImage="amsterdam"
          cityName="Amsterdam"
          countryName="Netherlands"
          flag="netherlands-flag"
        />
      </Grid>
    </>
  )
}
