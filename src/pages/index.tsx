import { Box, Divider, Text,  Wrap, WrapItem  } from '@chakra-ui/react'
import { ContinentSlider } from '../components/ContinentSlider'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Icon } from '../components/Icon'

export default function Home() {
  return (
    <Box pb="12">
      <Header />
      <Hero />
      <Box maxW="1200" mt="16" mx="auto" px="3">
        <Wrap  spacing={6} justify={{base: "center", md: 'space-around'}}>
          <WrapItem>
            <Icon text="vida noturna" icon="cocktail" />
          </WrapItem>
          <WrapItem>
            <Icon text="praia" icon="surf" />
          </WrapItem>
          <WrapItem>
            <Icon text="moderno" icon="building" />
          </WrapItem>
          <WrapItem>
            <Icon text="clássico" icon="museum" />
          </WrapItem>
          <WrapItem>
            <Icon text="e mais..." icon="earth" />
          </WrapItem>
        </Wrap >

        <Box maxW="150" mx="auto" my="8">
          <Divider colorScheme="blackAlpha"/>
        </Box>

        <Text color="brand.darkgray" fontWeight="medium" mx="auto"
        textAlign="center" fontSize="2xl" my="8" lineHeight="tall">
          Vamos nessa? <br/> Então escolha seu continente
        </Text>
        <ContinentSlider />
      </Box>      
    </Box>
  )
}