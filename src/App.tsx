
import UseEffect from './assets/components/UseEffect'
import UseState from './assets/components/UseState'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<UseState/>}/>
      <Route path="/doctor" element={<UseEffect/>}/>

      </Routes>
    </Router>
     
      
    </>
  )
}

export default App
