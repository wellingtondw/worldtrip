import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

type CityCardProps = {
  city: string
  country: string
  image: string
}

export function CityCard({ city, country, image }: CityCardProps ) {
  return(
    <Flex
        direction="column"         
         boxShadow="lg"
         rounded="md"
         bg="white"
         w="255px" 
         border="1px"        
         borderColor="brand.yellow"
         _hover={{
           boxShadow: "xs",
           cursor: 'pointer'         
         }}
      >
        <Image  
          w="100%"
          h="175"
          objectFit="cover"
          src={image}
          alt={city}
        />       
        <Flex
          p="6"
          justifyContent="space-between"
          alignContent="center"
        >
          <Flex direction="column">
            <Text fontWeight="bold" color="brand.darkgray">
              {city}
            </Text>
            <Text color="brand.darkgray">
              {country}
            </Text>            
          </Flex>
          <Avatar name={city} />
        </Flex> 
      </Flex>
  )
}