import Error404 from './containers/errors/error404';
import Home from './containers/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Cases from './containers/pages/Cases';
import Services from './containers/pages/Services';
import About from './containers/pages/About';
import Careers from './containers/pages/Careers';
import Contact from './containers/pages/Contact';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='*' element={<Error404 />} />
          <Route exact path='/cases/' element={<Cases />} />
          <Route exact path='/services/' element={<Services />} />
          <Route exact path='/about/' element={<About />} />
          <Route exact path='/careers/' element={<Careers />} />
          <Route exact path='/contact/' element={<Contact />} />
          {/* <Route exact path='*' element={<Error404/>}/>  */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
