import Router from './routes/Router'
import GlobalState from './global/GlobalState'

function App() {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  )
}

export default App
