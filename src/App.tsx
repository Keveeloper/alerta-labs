import { BrowserRouter } from 'react-router'
import './App.css'
import RootRouter from './navigation/RootRouter'

function App() {

  return (
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
  )

}

export default App
