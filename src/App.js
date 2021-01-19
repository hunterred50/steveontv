import './App.css';
import Body from './components/Body'
import Footer from './components/Footer';
import Header from './components/Header'
import ScrollingBanner from './components/ScrollingBanner';
import { Breakpoint } from 'react-socks';

function App() {
  return (
    <div className="App">
      <Breakpoint customQuery="(min-width: 2400px)">
        <div style={{margin: "0% 10%", backgroundColor: "#f7f7f7"}}>
          <Header />
          <ScrollingBanner bClass={"banner"} />
          <Body networks={true} vidWidth={"20%"} vidMargin={"0px"} newsWidth={"10%"} />
          <Footer />
        </div>
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 1400px) and (max-width: 2400px)">
        <div style={{margin: "0% 10%", backgroundColor: "#f7f7f7"}}>
          <Header />
          <ScrollingBanner bClass={"banner"} />
          <Body networks={true} vidWidth={"30%"} vidMargin={"0px"} newsWidth={"12%"}/>
          <Footer />
        </div>
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 700px) and (max-width: 1400px)">
        <div style={{margin: "0% 10%", backgroundColor: "#f7f7f7"}}>
          <Header />
          <ScrollingBanner bClass={"banner"} />
          <Body networks={true} vidWidth={"50%"} vidMargin={"0px"} newsWidth={"20%"}/>
          <Footer />
        </div>
      </Breakpoint>
      <Breakpoint customQuery="(max-width: 700px)">
        <div style={{margin: "0% 0", backgroundColor: "#f7f7f7"}}>
          <Header />
          <ScrollingBanner bClass={"mobileBanner"} />
          <Body networks={false} vidWidth={"80%"} vidMargin={"10px"} />
          <Footer />
        </div>
      </Breakpoint>
    </div>
  );
}

export default App;
