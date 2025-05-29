import { BrowserRouter } from 'react-router'
import './App.css'
import RootRouter from './navigation/RootRouter'
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {

  return (
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
  )

}

export default App
