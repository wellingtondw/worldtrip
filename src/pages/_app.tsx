import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { makeServer } from "../services/mirage"
import { QueryClient, QueryClientProvider } from 'react-query'

if(process.env.NODE_ENV === 'development') {
  makeServer()
}

const theme = extendTheme({
  colors: {
    brand: {
      yellow: "#FFBA08",
      darkgray: "#47585B",
      gray: "#DADADA",
      lightgray: "#F5F8FA",
    },
  },  
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
})

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp