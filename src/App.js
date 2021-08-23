import './App.css';
import 'react-bootstrap';
import Navbar from './components/navbar'
import Emails from './components/emails'
import Footer from './components/footer'
import Tree from './components/tree'
import AboutMe from './components/aboutme'
import Skills from './components/skills';

const App = () => {

  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Tree />
      <Emails />
      <Footer />
    </>
  )
}

export default App;