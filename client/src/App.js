import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/saveMeLord"
function App() {

return (
  <div className="App">
    <Router>
      <Routes>
         <Route path="/" exact component={Home} />
      </Routes>
    </Router>
  </div>
)

}
export default App;
