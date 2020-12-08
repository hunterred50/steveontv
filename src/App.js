import './App.css';
import Body from './components/Body'
import Footer from './components/Footer';
import Header from './components/Header'
import ScrollingBanner from './components/ScrollingBanner';

function App() {
  return (
    <div className="App">
      <div style={{height: "100%", width: "10%", backgroundColor: "#f7f7f7"}}></div>
      <div style={{margin: "0% 10%", backgroundColor: "#f7f7f7"}}>
        <Header />
        <ScrollingBanner />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
