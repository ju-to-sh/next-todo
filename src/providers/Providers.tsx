"use client"
import { ChakraBaseProvider } from "@chakra-ui/react"

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ChakraBaseProvider>
      {children}
    </ChakraBaseProvider>
  )
}

export default Providers
