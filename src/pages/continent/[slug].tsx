import { Box, Flex, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/PageHeader";
import { CityCard } from "../../components/CityCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useQuery } from "react-query";

const getContinent = async (slug:string | string[]) => {
  const response = await api.get(`continents/${slug}`)
  return response.data
}

export default function Continent({ params }) {
  const { isLoading, isError, data } = useQuery('continent', () => getContinent(params.slug))
  
  if(isLoading) {
    return <>Carregando</>
  }

  if(isError) {
    return <>Erro ao carregar</>
  }

  return(
  <Box pb="12">
    <Header />
    <PageHeader title={data.continent.name} bgImage="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
    <Box maxW="1200" mt="16" mx="auto" px="3">
      <Stack direction={["column", "column", "row"]} spacing="24px">
        <Text w={["100%", "100%", "50%"]}>
          {data.continent.description}
        </Text>
        <Flex w={["100%", "100%", "50%"]} justifyContent="space-around">
          <Stack alignItems="center">
              <Text fontWeight="bold" color="brand.yellow" fontSize="4xl">{data.continent.countries_count}</Text>
              <Text fontWeight="bold">Paises</Text>
          </Stack>
          <Stack alignItems="center">
              <Text fontWeight="bold" color="brand.yellow" fontSize="4xl">{data.continent.languages_count}</Text>
              <Text fontWeight="bold">línguas</Text>
          </Stack>
          <Stack alignItems="center">
              <Text fontWeight="bold" color="brand.yellow" fontSize="4xl">{data.continent.cities_count}</Text>
              <Text fontWeight="bold">
                cidades +100 {' '}
                <Tooltip label="Com base em pesquisas" aria-label="A tooltip" >
                  <InfoOutlineIcon />
                </Tooltip>
              </Text>
          </Stack>
        </Flex>
      </Stack>

      <Text color="brand.darkgray" fontWeight="medium" mx="auto"
      textAlign="left" fontSize="2xl" my="8" lineHeight="tall">
        Cidades 100+
      </Text>

      <SimpleGrid minChildWidth="250px" spacing={10}>
        {data.continent.cities.map(city => 
          <Box mx="auto">
          <CityCard key={city.id} city={city.city} country={city.state} image={city.image}/>
          </Box>
        )}
      </SimpleGrid>
    </Box>
  </Box>
  )
}

export function getServerSideProps(context) {
  return {
    props: {params: context.params}
  };
}


