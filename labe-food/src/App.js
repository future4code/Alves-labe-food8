import Router from "./routes/Router"
import GlobalState from './global/GlobalState'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <ChakraProvider>
        <GlobalState>
          <Router />
        </GlobalState>
      </ChakraProvider>
    </div>
  )
}

export default App
