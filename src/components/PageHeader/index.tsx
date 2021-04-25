import { Box, Flex, Heading } from "@chakra-ui/react";

type PageHeaderProps = {
  title: string
  bgImage: string
}

export function PageHeader({ title, bgImage }: PageHeaderProps) {
  return(
    <Flex 
      w="full" 
      justifyContent="start" 
      alignItems="end"
      position="relative"
      pt="64"
      pb="8"
      pl="8"
      bg="rgba(0,0,0,0.75)"
      _before={{
        content: '""',
        bgImage:
          `url(${bgImage})`,
        bgSize: "cover",
        bgPosition: 'center',
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.2
      }}
    >
      <Box maxW="1200" w="100%" mx="auto">
        <Heading as="h1" position="relative" zIndex="2" fontSize="4xl" fontWeight="semibold" color="white">{title}</Heading>
      </Box>
    </Flex>
  )
}