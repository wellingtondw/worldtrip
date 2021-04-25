import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return(
    <Flex 
      bgImage="url('images/bg-hero.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex maxW="1200" mx="auto" alignItems="center" justifyContent="space-between" px="8" py="16">
        <Box maxW={{ lg:"50%" }}>
          <Text color="brand.lightgray" fontSize="4xl" mb="6" fontWeight="medium">
            5 Continentes, <br/>
            infinitas possibilidades.
          </Text>
          <Text color="brand.gray" fontSize="xl">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Box>
        <Box display={['none', 'none', 'block']}>
          <Image 
          mb={{ 
            md: "0", 
            xl: "-24", 
          }} height="auto" src="images/airplane.svg" />
        </Box>
      </Flex>
    </Flex>
  )
}