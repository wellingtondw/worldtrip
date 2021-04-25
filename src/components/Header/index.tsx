import { Flex, Image } from "@chakra-ui/react";
import Link from 'next/link'

export function Header() {
  return(
    <Flex 
      as="header"
      mx="auto"
      justifyContent="center"
      py="6"
    >
      <Link href="/">
        <a>
          <Image height={["8", "10", "14"]} src="/images/logo.svg" />
        </a>
      </Link>
    </Flex>
  )
}