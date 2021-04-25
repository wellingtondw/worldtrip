import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { api } from '../../services/api';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export function ContinentSlider() {
  const [continents, setContinents] = useState([])

  useEffect(() => {
    api.get('continent-list').then(r => setContinents(r.data))
  }, [])
  
  if(continents.length === 0)
  {
    return(
      <Box textAlign="center">
        <Spinner        
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />       
      </Box>
    )
  }

  return(
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {continents.map(location => 
        <SwiperSlide>
            <Flex
              as="a"
              href={`continent/${location.slug}`}
              py="36"
              direction="column"
              key={location.id} 
              justifyContent="center" 
              alignItems="center" 
              pos="relative"
              bg="rgba(0,0,0,0.75)"
              _before={{
                content: '""',
                bgImage:
                  `url(${location.image})`,
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
              <Heading position="relative" zIndex="2" as="h2" size="xl" color="white">{location.name}</Heading>
              <Text position="relative" zIndex="2" color="white">{location.cta}</Text>
            </Flex>
        </SwiperSlide>
      )}
    </Swiper>
  )
}