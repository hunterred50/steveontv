import React, { Component } from 'react'
import './body.css';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAtl: false,
            displayBei: false,
            displayBos: false,
            displayCha: false,
            displayChr: false,
            displayChi: false,
            displayCin: false,
            displayCle: false,
            displayCol: false,
            displayCls: false,
            displayDal: false,
            displayDen: false,
            displayDet: false,
            displayEdi: false,
            displayEdm: false,
            displayFai: false,
            displayFtL: false,
            displayGra: false,
            displayGre: false,
            displayHar: false,
            displayInd: false,
            displayJac: false,
            displayKan: false,
            displayLas: false,
            displayLon: false,
            displayLos: false,
            displayLou: false,
            displayMem: false,
            displayMil: false,
            displayMin: false,
            displayNas: false,
            displayNOr: false,
            displayNYo: false,
            displayNew: false,
            displayOrl: false,
            displayPal: false,
            displayPaS: false,
            displayPeo: false,
            displayPhi: false,
            displayPho: false,
            displayPit: false,
            displayPor: false,
            displayRal: false,
            displaySac: false,
            displaySal: false,
            displaySan: false,
            displaySea: false,
            displayStP: false,
            displaySyd: false,
            displayTam: false,
            displayTor: false,
            displayWar: false,
            displayWas: false,
            displayWes: false,
            displayWin: false,

            vid: "https://fast.wistia.net/embed/iframe/w2f1j6q077?videoFoam=true",
            title: "Become wealthy by thinking like the wealthy",
            subtitle: "Today Show - HRPT • NBC • NEW YORK"
        }
        this.toggle = this.toggle.bind(this);
        this.setVid = this.setVid.bind(this);
    }

    toggle(city) {
        if(city === "atl") {
            this.setState(state => ({
                displayAtl: !state.displayAtl
            }));
        }
        if(city === "beijing") {
            this.setState(state => ({
                displayBei: !state.displayBei
            }));
        }
        if(city === "boston") {
            this.setState(state => ({
                displayBos: !state.displayBos
            }));
        }
        if(city === "champaign") {
            this.setState(state => ({
                displayCha: !state.displayCha
            }));
        }
        if(city === "charlotte") {
            this.setState(state => ({
                displayChr: !state.displayChr
            }));
        }
        if(city === "chicago") {
            this.setState(state => ({
                displayChi: !state.displayChi
            }));
        }
        if(city === "cincinnati") {
            this.setState(state => ({
                displayCin: !state.displayCin
            }));
        }
        if(city === "cleveland") {
            this.setState(state => ({
                displayCle: !state.displayCle
            }));
        }
        if(city === "columbia") {
            this.setState(state => ({
                displayCol: !state.displayCol
            }));
        }
        if(city === "columbus") {
            this.setState(state => ({
                displayCls: !state.displayCls
            }));
        }
        if(city === "dallas") {
            this.setState(state => ({
                displayDal: !state.displayDal
            }));
        }
        if(city === "denver") {
            this.setState(state => ({
                displayDen: !state.displayDen
            }));
        }
        if(city === "detroit") {
            this.setState(state => ({
                displayDet: !state.displayDet
            }));
        }
        if(city === "edison") {
            this.setState(state => ({
                displayEdi: !state.displayEdi
            }));
        }
        if(city === "edmonton") {
            this.setState(state => ({
                displayEdm: !state.displayEdm
            }));
        }
        if(city === "fairway") {
            this.setState(state => ({
                displayFai: !state.displayFai
            }));
        }
        if(city === "ft. lauderdale") {
            this.setState(state => ({
                displayFtL: !state.displayFtL
            }));
        }
        if(city === "grand rapids") {
            this.setState(state => ({
                displayGra: !state.displayGra
            }));
        }
        if(city === "greensboro") {
            this.setState(state => ({
                displayGre: !state.displayGre
            }));
        }
        if(city === "hartford") {
            this.setState(state => ({
                displayHar: !state.displayHar
            }));
        }
        if(city === "indianapolis") {
            this.setState(state => ({
                displayInd: !state.displayInd
            }));
        }
        if(city === "jacksonville") {
            this.setState(state => ({
                displayJac: !state.displayJac
            }));
        }
        if(city === "kansas city") {
            this.setState(state => ({
                displayKan: !state.displayKan
            }));
        }
        if(city === "las vegas") {
            this.setState(state => ({
                displayLas: !state.displayLas
            }));
        }
        if(city === "london") {
            this.setState(state => ({
                displayLon: !state.displayLon
            }));
        }
        if(city === "los angeles") {
            this.setState(state => ({
                displayLos: !state.displayLos
            }));
        }
        if(city === "louisville") {
            this.setState(state => ({
                displayLou: !state.displayLou
            }));
        }
        if(city === "memphis") {
            this.setState(state => ({
                displayMem: !state.displayMem
            }));
        }
        if(city === "milwaukee") {
            this.setState(state => ({
                displayMil: !state.displayMil
            }));
        }
        if(city === "minneapolis") {
            this.setState(state => ({
                displayMin: !state.displayMin
            }));
        }
        if(city === "nashville") {
            this.setState(state => ({
                displayNas: !state.displayNas
            }));
        }
        if(city === "new orleans") {
            this.setState(state => ({
                displayNOr: !state.displayNOr
            }));
        }
        if(city === "new york") {
            this.setState(state => ({
                displayNYo: !state.displayNYo
            }));
        }
        if(city === "newark") {
            this.setState(state => ({
                displayNew: !state.displayNew
            }));
        }
        if(city === "orlando") {
            this.setState(state => ({
                displayOrl: !state.displayOrl
            }));
        }
        if(city === "palm beach") {
            this.setState(state => ({
                displayPal: !state.displayPal
            }));
        }
        if(city === "palm springs") {
            this.setState(state => ({
                displayPaS: !state.displayPaS
            }));
        }
        if(city === "peoria") {
            this.setState(state => ({
                displayPeo: !state.displayPeo
            }));
        }
        if(city === "philadelphia") {
            this.setState(state => ({
                displayPhi: !state.displayPhi
            }));
        }
        if(city === "phoenix") {
            this.setState(state => ({
                displayPho: !state.displayPho
            }));
        }
        if(city === "pittsburgh") {
            this.setState(state => ({
                displayPit: !state.displayPit
            }));
        }
        if(city === "portland") {
            this.setState(state => ({
                displayPor: !state.displayPor
            }));
        }
        if(city === "raleigh") {
            this.setState(state => ({
                displayRal: !state.displayRal
            }));
        }
        if(city === "sacramento") {
            this.setState(state => ({
                displaySac: !state.displaySac
            }));
        }
        if(city === "salt lake city") {
            this.setState(state => ({
                displaySal: !state.displaySal
            }));
        }
        if(city === "san diego") {
            this.setState(state => ({
                displaySan: !state.displaySan
            }));
        }
        if(city === "seattle") {
            this.setState(state => ({
                displaySea: !state.displaySea
            }));
        }
        if(city === "st. paul") {
            this.setState(state => ({
                displayStP: !state.displayStP
            }));
        }
        if(city === "sydney") {
            this.setState(state => ({
                displaySyd: !state.displaySyd
            }));
        }
        if(city === "tampa") {
            this.setState(state => ({
                displayTam: !state.displayTam
            }));
        }
        if(city === "toronto") {
            this.setState(state => ({
                displayTor: !state.displayTor
            }));
        }
        if(city === "warsaw") {
            this.setState(state => ({
                displayWar: !state.displayWar
            }));
        }
        if(city === "washington") {
            this.setState(state => ({
                displayWas: !state.displayWas
            }));
        }
        if(city === "west palm beach") {
            this.setState(state => ({
                displayWes: !state.displayWes
            }));
        }
        if(city === "winston-salem") {
            this.setState(state => ({
                displayWin: !state.displayWin
            }));
        }
    }

    setVid(link, title, subtitle) {
        this.setState(state => ({
            vid: link,
            title: title,
            subtitle: subtitle
        }));
    }

    render() {
        return (
            <div style={{display: "flex", justifyContent: "space-around", height: "25em", border: "0px solid #999", borderRadius: "0px", padding: "20px", paddingTop: "4em", backgroundColor: "#01305f", fontSize: "14px"}}>
                <div id="locationPanel" style={{width: "20%", height: "90%", overflowY: "scroll", backgroundColor: "#c2dff5"}}>
                    <button onClick={this.toggle.bind(this, "atl")}>
                        Atlanta
                    </button>
                    {this.state.displayAtl && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/kbne1p4jv5?videoFoam=true", "Do you think that you can't lose weight?", "Better Mornings • WGCL CBS • Atlanta")}>Better Mornings</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/rag3ibsojz?videoFoam=true", "Fighting Childhood Obesity.", "CBS Atlanta • CBS Fit Family • Atlanta")}>CBS Atlanta</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/7nej94telg?videoFoam=true", "Hospital refuses to hire obese employees!", "CNN Headline News • CNN HLN • Atlanta")}>CNN Headline News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/x1st80jlns?videoFoam=true", "Do you think like a fat person?", "Good Day Atlanta • Fox WAGA • Atlanta")}>Good Day Atlanta</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/l17jlvsws3?videoFoam=true", "Is McDonald's to blame for your FAT?", "Good Day Atlanta - McDonalds • FOX WAGA • Atlanta")}>Good Day Atlanta McDonalds</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/b4a8ls7sid?videoFoam=true", "Impact on Future Olympic Athletes", "HLN Morning Express • CNN Snappytv.com • Atlanta")}>HLN Morning Express</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/914a5zgfft?videoFoam=true", "Weight loss goals", "Public Affairs On Peach • CBS 46 News • Atlanta")}>Public Affairs on Peach</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/xig8wjwxv5?videoFoam=true", "Discussing Obesity Epidemic", "Public Affairs on Peachtree TV • CBS 46 News • ATLANTA")}>Public Affairs on Peachtree TV</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/k9zcvf4d51?videoFoam=true", "Swimmers' Scandal", "WGCL • CBS 46 • Atlanta")}>WGCL</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "beijing")}>
                        Beijing
                    </button>
                    {this.state.displayBei && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/18kolhfab4?videoFoam=true", "Sex and Politics", "CCTV • America • Beijing")}>CCTV</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "boston")}>
                        Boston
                    </button>
                    {this.state.displayBos && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/bhhe49zfhv?videoFoam=true", "Are you where you want to be in your career?", "NECN Business • NECN • Boston")}>NECN Business</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "champaign")}>
                        Champaign
                    </button>
                    {this.state.displayCha && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/jfhmqee7vz?videoFoam=true", "Secrets Self-Made Millionaires Teach Their Kids", "The Morning Show - The Secrets Book • CBS WCIA 3 • Champaign")}>The Morning Show - The Secrets Book</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "charlotte")}>
                        Charlotte
                    </button>
                    {this.state.displayChr && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/mv2p6b8wex?videoFoam=true", "How do we begin to change our thinking?", "Charlotte Today How Rich People Think • NBC WCNC • Charlotte")}>Charlotte Today - How Rich People Think</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/7j62qf4yzl?videoFoam=true", "Sex, Politics, Religion", "Charlotte Today - Sex Politics Religion • WCNC News Chanel 36 • Charlotte")}>Charlotte Today - Sex, Politics, Religion</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/afyxaqt7tb?videoFoam=true", "What is the key to financial Success?", "Fox News Rising • FOX WCCB • Charlotte")}>Fox News Rising</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "chicago")}>
                        Chicago
                    </button>
                    {this.state.displayChi && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "cincinnati")}>
                        Cincinnati
                    </button>
                    {this.state.displayCin && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "cleveland")}>
                        Cleveland
                    </button>
                    {this.state.displayCle && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "columbia")}>
                        Columbia
                    </button>
                    {this.state.displayCol && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "columbus")}>
                        Columbus
                    </button>
                    {this.state.displayCls && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "dallas")}>
                        Dallas
                    </button>
                    {this.state.displayDal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "denver")}>
                        Denver
                    </button>
                    {this.state.displayDen && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "detroit")}>
                        Detroit
                    </button>
                    {this.state.displayDet && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "edison")}>
                        Edison
                    </button>
                    {this.state.displayEdi && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "edmonton")}>
                        Edmonton
                    </button>
                    {this.state.displayEdm && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "fairway")}>
                        Fairway
                    </button>
                    {this.state.displayFai && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "ft. lauderdale")}>
                        Ft. Lauderdale
                    </button>
                    {this.state.displayFtL && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "grand rapids")}>
                        Grand Rapids
                    </button>
                    {this.state.displayGra && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "greensboro")}>
                        Greensboro
                    </button>
                    {this.state.displayGre && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "hartford")}>
                        Hartford
                    </button>
                    {this.state.displayHar && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "indianapolis")}>
                        Indianapolis
                    </button>
                    {this.state.displayInd && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "jacksonville")}>
                        Jacksonville
                    </button>
                    {this.state.displayJac && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "kansas city")}>
                        Kansas City
                    </button>
                    {this.state.displayKan && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "las vegas")}>
                        Las Vegas
                    </button>
                    {this.state.displayLas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "london")}>
                        London
                    </button>
                    {this.state.displayLon && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "los angeles")}>
                        Los Angeles
                    </button>
                    {this.state.displayLos && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "louisville")}>
                        Louisville
                    </button>
                    {this.state.displayLou && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "memphis")}>
                        Boston
                    </button>
                    {this.state.displayMem && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayMil && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayMin && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayNas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayNew && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayOrl && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPaS && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPeo && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPhi && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPho && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPit && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPho && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPit && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayPor && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayRal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displaySac && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displaySal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displaySan && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displaySea && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayStP && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displaySyd && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayTam && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayTor && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayWar && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayWas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayWes && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "Boston")}>
                        Boston
                    </button>
                    {this.state.displayWin && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                </div>
                <div id="video" style={{width: "50%", height: "90%", display: "flex", flexDirection: "column", color: "white", fontFamily: "arial", fontSize: "16px", fontWeight: "bold"}}>
                    <div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}><div className="wistia_responsive_wrapper" style={{height: "100%", left: "0", position: "absolute", top: "0", width: "100%"}}>
                    <iframe src={this.state.vid} title="20130109-tdy_klg_hrpt_ NY Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen width="100%" height="100%"></iframe></div></div>
                    <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script><br/>
                    <div>{this.state.title}
                        <div style={{fontSize: "11px", fontWeight: "normal"}}>{this.state.subtitle}</div>
                    </div>
                </div>
                <div id="newsPanel" style={{width: "20%", height: "90%", backgroundColor: "#01305f"}}>
                    <img style={{width: "100%"}} alt="major networks" src="https://www.steveontv.com/images/affiliates.jpg" />
                </div>
            </div>
        )
    }
}
