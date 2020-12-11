import './App.css';
import Body from './components/Body'
import Footer from './components/Footer';
import Header from './components/Header'
import ScrollingBanner from './components/ScrollingBanner';
import { Breakpoint } from 'react-socks';

function App() {
  return (
    <div className="App">
      {/* <div style={{height: "100%", width: "10%", backgroundColor: "#f7f7f7"}}></div> */}
      <Breakpoint medium up>
        <div style={{margin: "0% 10%", backgroundColor: "#f7f7f7"}}>
          <Header />
          <ScrollingBanner />
          <Body />
          <Footer />
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div style={{margin: "0% 0", backgroundColor: "#f7f7f7"}}>
          <Header />
          <ScrollingBanner />
          <Body />
          <Footer />
        </div>
      </Breakpoint>
    </div>
  );
}

export default App;
