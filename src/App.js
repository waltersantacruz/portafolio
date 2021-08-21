import { Navbar, Banner, Contact, About, Work } from './components/index'
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="secciones">
        <Banner />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
