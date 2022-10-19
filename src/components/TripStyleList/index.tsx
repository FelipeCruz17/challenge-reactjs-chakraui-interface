import { Grid, GridItem } from '@chakra-ui/react'
import { TripStyleType } from '../TripStyleType'

export function TripStyleList() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      justifyContent="space-between"
      alignItems="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TripStyleType icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TripStyleType icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <TripStyleType icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <TripStyleType icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TripStyleType icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}
