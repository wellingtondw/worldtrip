import { Box, Flex, Image,  Text } from "@chakra-ui/react";

type IconProps = {
  text: string
  icon: 'cocktail' | 'building' | 'earth' | 'museum' | 'surf'
}

export function Icon({ text, icon }: IconProps) {
  return(
    <Flex direction={{base: "row", sm: "column"}} justifyContent="center" alignItems="center" alignContent="center">
      <Image display={{base: 'none', sm: 'block'}} src={`images/${icon}-icon.svg`} />
      <Box borderRadius="full" display={{base: 'block', sm: 'none'}} h="2" w="2" mr="4" bg="brand.yellow" />
      <Text mt={{base: '0', md: '6'}} fontSize="xl" fontWeight="bold" color="brand.darkgray">
        {text}
      </Text>
    </Flex>
  )
}