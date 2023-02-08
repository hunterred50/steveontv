import React, { Component } from 'react'
import './body.css';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAtl: false,
            displayAug: false,
            displayBei: false,
            displayBir: false,
            displayBos: false,
            displayCal: false,
            displayCha: false,
            displayChr: false,
            displayChi: false,
            displayCin: false,
            displayCle: false,
            displayCol: false,
            displayCls: false,
            displayCor: false,
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
            displayHrr: false,
            displayHou: false,
            displayHun: false,
            displayHus: false,
            displayInd: false,
            displayJac: false,
            displayKan: false,
            displayKno: false,
            displayLan: false,
            displayLas: false,
            displayLon: false,
            displayLos: false,
            displayLou: false,
            displayMan: false,
            displayMem: false,
            displayMil: false,
            displayMin: false,
            displayNas: false,
            displayNOr: false,
            displayNYo: false,
            displayNew: false,
            displayOkl: false,
            displayOrl: false,
            displayPal: false,
            displayPaS: false,
            displayPeo: false,
            displayPhi: false,
            displayPho: false,
            displayPit: false,
            displayPor: false,
            displayRal: false,
            displayRic: false,
            displaySac: false,
            displaySal: false,
            displaySnA: false,
            displaySan: false,
            displaySnF: false,
            displaySea: false,
            displaySpr: false,
            displayStL: false,
            displayStP: false,
            displaySyd: false,
            displayTam: false,
            displayTol: false,
            displayTor: false,
            displayTra: false,
            displayTul: false,
            displayVan: false,
            displayWar: false,
            displayWas: false,
            displayWes: false,
            displayWic: false,
            displayWin: false,

            vid: "https://www.youtube.com/embed/b3MfJrvYftY",
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
        if(city === "augusta") {
            this.setState(state => ({
                displayAug: !state.displayAug
            }));
        }
        if(city === "beijing") {
            this.setState(state => ({
                displayBei: !state.displayBei
            }));
        }
        if(city === "birmingham") {
            this.setState(state => ({
                displayBir: !state.displayBir
            }));
        }
        if(city === "boston") {
            this.setState(state => ({
                displayBos: !state.displayBos
            }));
        }
        if(city === "calgary") {
            this.setState(state => ({
                displayCal: !state.displayCal
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
        if(city === "corpus christi") {
            this.setState(state => ({
                displayCor: !state.displayCor
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
        if(city === "harrisburg") {
            this.setState(state => ({
                displayHrr: !state.displayHrr
            }));
        }
        if(city === "hartford") {
            this.setState(state => ({
                displayHar: !state.displayHar
            }));
        }
        if(city === "houston") {
            this.setState(state => ({
                displayHou: !state.displayHou
            }));
        }
        if(city === "huntington") {
            this.setState(state => ({
                displayHun: !state.displayHun
            }));
        }
        if(city === "huntsville") {
            this.setState(state => ({
                displayHus: !state.displayHus
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
        if(city === "knoxville") {
            this.setState(state => ({
                displayKno: !state.displayKno
            }));
        }
        if(city === "lansing") {
            this.setState(state => ({
                displayLan: !state.displayLan
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
        if(city === "mankato") {
            this.setState(state => ({
                displayMan: !state.displayMan
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
        if(city === "oklahoma city") {
            this.setState(state => ({
                displayOkl: !state.displayOkl
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
        if(city === "richmond") {
            this.setState(state => ({
                displayRic: !state.displayRic
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
        if(city === "san antonio") {
            this.setState(state => ({
                displaySnA: !state.displaySnA
            }));
        }
        if(city === "san diego") {
            this.setState(state => ({
                displaySan: !state.displaySan
            }));
        }
        if(city === "san francisco") {
            this.setState(state => ({
                displaySnF: !state.displaySnF
            }));
        }
        if(city === "seattle") {
            this.setState(state => ({
                displaySea: !state.displaySea
            }));
        }
        if(city === "springfield") {
            this.setState(state => ({
                displaySpr: !state.displaySpr
            }));
        }
        if(city === "st. louis") {
            this.setState(state => ({
                displayStL: !state.displayStL
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
        if(city === "toledo") {
            this.setState(state => ({
                displayTol: !state.displayTol
            }));
        }
        if(city === "toronto") {
            this.setState(state => ({
                displayTor: !state.displayTor
            }));
        }
        if(city === "traverse city") {
            this.setState(state => ({
                displayTra: !state.displayTra
            }));
        }
        if(city === "tulsa") {
            this.setState(state => ({
                displayTul: !state.displayTul
            }));
        }
        if(city === "vancouver") {
            this.setState(state => ({
                displayVan: !state.displayVan
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
        if(city === "wichita") {
            this.setState(state => ({
                displayWic: !state.displayWic
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
            <div style={{display: "flex", justifyContent: "space-around", height: "25em", border: "0px solid #fff", borderRadius: "0px", padding: "20px", paddingTop: "3em", backgroundColor: "#01305f", fontSize: "14px"}}>
                <div id="locationPanel" style={{width: "20%", height: "90%", overflowY: "scroll", backgroundColor: "#2985c8", border: "0px solid #fff"}}>
                    <button onClick={this.toggle.bind(this, "atl")}>
                        Atlanta
                    </button>
                    {this.state.displayAtl && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/98Kc6aZLeKQ", "Do you think that you can't lose weight?", "Better Mornings • WGCL CBS • Atlanta")}>Better Mornings</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ut1jemJaWOg", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/OatptFw4ekk", "Fighting Childhood Obesity.", "CBS Atlanta • CBS Fit Family • Atlanta")}>CBS Atlanta</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/wfXD4fLJ0Wo", "Hospital refuses to hire obese employees!", "CNN Headline News • CNN HLN • Atlanta")}>CNN Headline News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/naOMeyEHS3k", "Do you think like a fat person?", "Good Day Atlanta • Fox WAGA • Atlanta")}>Good Day Atlanta</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/cOBri7rdDK4", "Is McDonald's to blame for your FAT?", "Good Day Atlanta - McDonalds • FOX WAGA • Atlanta")}>Good Day Atlanta McDonalds</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/rG247VT65r8", "Impact on Future Olympic Athletes", "HLN Morning Express • CNN Snappytv.com • Atlanta")}>HLN Morning Express</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/omwdDHpY2Z8", "Weight loss goals", "Public Affairs On Peach • CBS 46 News • Atlanta")}>Public Affairs on Peach</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/HwXx_zxMRfw", "Discussing Obesity Epidemic", "Public Affairs on Peachtree TV • CBS 46 News • ATLANTA")}>Public Affairs on Peachtree TV</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/R6x5zZltrBU", "Swimmers' Scandal", "WGCL • CBS 46 • Atlanta")}>WGCL</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "augusta")}>
                        Augusta
                    </button>
                    {this.state.displayAug && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ACmGKz2iO5w", "Breaking down some of the most common money myths and misconceptions", "The Jennie Show • News 6 WJBF • Augusta")}>The Jennie Show HMW</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "beijing")}>
                        Beijing
                    </button>
                    {this.state.displayBei && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Tl07LKRqhTs", "Sex and Politics", "CCTV • America • Beijing")}>CCTV</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "birmingham")}>
                        Birmingham
                    </button>
                    {this.state.displayBir && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/BNaZKdQEUjM", "How to Spring Clean your Finances", "Talk of Alabama • ABC 33/40 • Birmingham")}>Talk of Alabama</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "boston")}>
                        Boston
                    </button>
                    {this.state.displayBos && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/sYP4RDXIgSU", "Are you where you want to be in your career?", "NECN Business • NECN • Boston")}>NECN Business</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "calgary")}>
                        Calgary
                    </button>
                    {this.state.displayCal && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/LUkKW1ld6Aw", "Help your kids better understand money during the holiday season", "CTV News Calgary • CTV Canada • Calgary")}>CTV News Calgary</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "champaign")}>
                        Champaign
                    </button>
                    {this.state.displayCha && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/E4l_EC7rXaQ", "Secrets Self-Made Millionaires Teach Their Kids", "The Morning Show - The Secrets Book • CBS WCIA 3 • Champaign")}>The Morning Show - The Secrets Book</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "charlotte")}>
                        Charlotte
                    </button>
                    {this.state.displayChr && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/qytXXZwjbpc", "How to shop smart this holiday season", "Good Day Charlotte HMW • Fox 46 WJZY • Charlotte")}>Charlotte Today - How Rich People Think</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/qpSHuHkrSaI", "How do we begin to change our thinking?", "Charlotte Today How Rich People Think • NBC WCNC • Charlotte")}>Charlotte Today - How Rich People Think</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/90ZDhrgWS1A", "Sex, Politics, Religion", "Charlotte Today - Sex Politics Religion • WCNC News Chanel 36 • Charlotte")}>Charlotte Today - Sex, Politics, Religion</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/58QmJO5gucY", "What is the key to financial Success?", "Fox News Rising • FOX WCCB • Charlotte")}>Fox News Rising</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "chicago")}>
                        Chicago
                    </button>
                    {this.state.displayChi && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/h1R2uoQPxIo", "5 Money Lies to Stop Telling Your Children", "FOX 32 Chicago • WFLD FOX 32 • Chicago")}>FOX 32 Chicago</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/jbK5hkuKGaQ", "What are the top differences in the way people think?", "First Business • Nationally Syndicated • Chicago")}>First Business</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Irc4QCjKyZ4", "Steve Siebold Breaks Down Common Diet Myths", "WGN • Morning News TV • Chicago")}>WGN</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/3p83bFnu1ls", "Secrets Self-Made Millionaires Teach Their Kids", "WGN - TheSecretsBook.com • Morning Show • Chicago")}>WGN - TheSecretsBook.com</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/DOemca-KSKc", "Mind-Over-Matter approach to Weight Loss", "You & Me • The U WCIU • Chicago")}>You & ME</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "cincinnati")}>
                        Cincinnati
                    </button>
                    {this.state.displayCin && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/uiHnOWUI20w", "'How Money Works' Author Steve Siebold featured on Fox 19 News in Cincinnati discussing how to prepare for a recession.", "Fox 19 • Now XTRA • Cincinnati")}>Fox 19</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/3sO9X93f7dY", "Saving Green in March", "Fox 19 • Now • Cincinnati")}>HMW Fox 19</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/iRX3PoY-sF0", "Couples in Business", "Fox 19 • Now • Cincinnati")}>HMW Fox 19</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/mdXQP_dLG14", "New Year's Money Resolution", "Fox 19 • Now • Cincinnati")}>HMW Fox 19</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/80lb4sXuf5M", "How Money Works", "Fox 19 • Now • Cincinnati")}>HMW Fox 19</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/15FYugNMUYE", "Raising Successful Kids", "Fox 19 • Now • Cincinnati")}>Fox 19</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/dFvr8Ixqswk", "Changing Thinking About Wealth", "Good Morning Cincinnati • WKRC Local 12 • Cincinnati")}>Good Morning Cincinnati</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "cleveland")}>
                        Cleveland
                    </button>
                    {this.state.displayCle && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/xrwAJiviFH0", "Are you afraid to take chances?", "Good Company • NBC WKYC • Cleveland")}>Good Company</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/QBqL_MlFTNg", "Steve Siebold joined Wayne to talk about his book and his way of life", "Morning Show • Fox 8 • Cleveland")}>Morning Show</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "columbia")}>
                        Columbia
                    </button>
                    {this.state.displayCol && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/aX-50TDx2ss", "Steve Siebold on Good Day Columbia discussing his new book \"Secrets Self-Made Millionaires Teach Their Kids\"", "Good Day Columbia • FOX FOX57 • Columbia")}>Good Day Columbia</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/tOO8Vv6jXsg", "Have you ever wondered what separates rich people from the middle class?", "The Morning Show • CBS WLTX • Columbia")}>The Morning Show</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "columbus")}>
                        Columbus
                    </button>
                    {this.state.displayCls && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/a_R2kW8aa5Y", "If you could get inside the mind of a millionaire, could you be one yourself?", "Good Day Columbus • FOX WTTE • Columbus")}>Good Day Columbus</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "corpus christi")}>
                        Corpus Christi
                    </button>
                    {this.state.displayCor && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/zv-S7Kow11Q", "Do's and Don't's When Getting Stimulus Check", "ABC 3 HMW  • ABC 3 KIII • Corpus Christi")}>ABC 3 HMW</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "dallas")}>
                        Dallas
                    </button>
                    {this.state.displayDal && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/dZdMkNEM9zk", "Can thinking like a rich person help you become one?", "Good Morning Texas • ABC WFAA 8 • Dallas")}>Good Morning Texas HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/2z0JDg_zBK0", "\"Fat Loser\" author Steve Siebold", "Good Morning Texas • ABC WFAA 8 • Dallas")}>Good Morning Texas</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "denver")}>
                        Denver
                    </button>
                    {this.state.displayDen && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ATiMugNdBI8", "Steve Siebold on Fox 31 News Denver", "Morning News HMW • Fox 31 KDVR • Denver")}>Morning News Summer Money</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/bMwvcAyQZTg", "Steve Siebold on Fox 31 News Denver", "Morning News HMW • Fox 31 KDVR • Denver")}>Morning News Summer Money</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/rok0yf7mQqM", "Maintaining Financial Security During the Pandemic", "Morning News HMW • Fox 31 KDVR • Denver")}>Morning News HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/zTXhT8_jGaY", "Can this book help you lose weight and get fit?", "Daybreak • CW KWGN • Denver")}>Daybreak</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/olpazDhkbsA", "Tips to get fit and lose weight!", "Good Morning Colorado • FOX KDVR • Denver")}>Good Morning Colorado</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "detroit")}>
                        Detroit
                    </button>
                    {this.state.displayDet && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/AQ2Zm_dHW5E", "Will being rich bring out the best or worst in you?", "Money Works • FOX 2 WJBK • Detroit")}>Money Works</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "edison")}>
                        Edison
                    </button>
                    {this.state.displayEdi && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/bsBvQQH8i2o", "What keeps us from thinking rich?", "It's Your Money • NJ 12 • Edison")}>It's Your Money</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "edmonton")}>
                        Edmonton
                    </button>
                    {this.state.displayEdm && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/GVztoxCf3bM", "Weight Loss with Steve Siebold", "CTV - Fat Loser Book • CTV Morning Show • Edmonton")}>CTV - Fat Loser Book</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Px022GZAHBQ", "Secrets Self-Made Millionaires Teach Their Kids", "CTV - Millionaire Kids • CTV Morning Show • Edmonton")}>CTV - Millionaire Kids</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ZM1FS4tTqs0", "Teach Your Kids About Money This Summer", "CTV - Summer Money • CTV Morning Show • Edmonton")}>CTV - Summer Money</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "fairway")}>
                        Fairway
                    </button>
                    {this.state.displayFai && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/QeOY-5UqGQI", "Hang out with rich people and get rich?", "KCTV5 • CBS NEWS • Fairway")}>KCTV5</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "ft. lauderdale")}>
                        Ft. Lauderdale
                    </button>
                    {this.state.displayFtL && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/WNx8JWtQ1S0", "Are FAT people liars?", "South Florida Live • CW WSFL • Ft. Lauderdale")}>South Florida Live</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "grand rapids")}>
                        Grand Rapids 
                    </button>
                    {this.state.displayGra && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/TVV3wi6rrwk", "How couples can see eye-to-eye on money as Valentine's Day approaches", "Fox 17 Morning News • Fox 17 WXMI • Grand Rapids")}>Fox 17 Morning News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/EWAKZ3aHEeA", "Do you know what you want in your ultimate scenario?", "Fox 17 Morning News • Fox 17 WXMI • Grand Rapids")}>Fox 17 Morning News</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "greensboro")}>
                        Greensboro
                    </button>
                    {this.state.displayGre && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/", "Steve Siebold talks about \"Die Fat or Get Tough\"", "Meet The Author • My Fox 8 - WGHP • Greensboro")}>Meet The Author</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "harrisburg")}>
                        Harrisburg
                    </button>
                    {this.state.displayHrr && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/61tsySC9tUA", "Money and spending during the holiday season", "ABC 27 How Money Works • ABC 27 WHTM • Harrisburg")}>ABC 27 How Money Works</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "hartford")}>
                        Hartford
                    </button>
                    {this.state.displayHar && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/xgY-p-Zbx4Q", "What really separates world class from middle class?", "Connecticut Style • ABC WTNH • Hartford")}>Connecticut Style</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "houston")}>
                        Houston
                    </button>
                    {this.state.displayHou && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/MHYDg5dAJfM", "Financial Literacy Month and how people can be smarter with their money", "Sullivan's Smart Sense • FOX 26 • Houston")}>Sullivan's Smart Sense</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "huntington")}>
                        Huntington
                    </button>
                    {this.state.displayHun && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/NinD2TLpZSg", "Five Ways to Save Money in March", "Studio 3 HMW • NBC 3 WSAZ • Huntington")}>Studio 3 HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/woEF-0J-TtE", "Breaking some of the biggest myths about money", "Studio 3 HMW • NBC 3 WSAZ • Huntington")}>Studio 3 HMW</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "huntsville")}>
                        Huntsville
                    </button>
                    {this.state.displayHus && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/kVDm89soe_E", "Tips for new grads to get ahead financially.", "Tennessee Valley Living • WAFF 48 • Huntsville")}>Tennessee Valley Living</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "indianapolis")}>
                        Indianapolis
                    </button>
                    {this.state.displayInd && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/GiLOPZV55Zg", "How couples can better see eye-to-eye on money as Valentine's Day approaches", "Fox News • Fox 59 • Indianapolis")}>Fox News HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/RBhYfen1P64", "Author Steve Siebold encourages critical thinking", "Fox News • Fox 59 • Indianapolis")}>Fox News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/IsCETuQ693o", "Unless you have a  medical condition, if you are fat it is your fault!", "Indy Style • CBS WISH • Indianapolis")}>Indy Style</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/admPIcXZ160", "What separates rich people from the middle class?", "Indy Style - HRPT • Wish TV • Indianapolis")}>Indy Style - HRPT</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/GIa-BiOjjFU", "Author spills \"Secrets Self-Made Millionaires Teach Their Kids\"", "IndyStyle - TheSecretsBook.com • 8 WishTV • Indianapolis")}>IndyStyle - TheSecretsBook</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "jacksonville")}>
                        Jacksonville
                    </button>
                    {this.state.displayJac && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/UyjHGF8OS-E", "New Year, New Way of Approaching Money", "First Coast Living HMW • NBC 12 WTLV • Jacksonville")}>First Coast Living HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/8J_UGxYPLYA", "Controversial New Book: Fat Loser!", "Morning Show • Jax News 4 • Jacksonville")}>Morning Show</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "kansas city")}>
                        Kansas City
                    </button>
                    {this.state.displayKan && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/2NaI0wGYDUw", "'How Money Works' Author Steve Siebold on FOX 4 for Financial Literacy Month", "FOX 4 Morning News • FOX 4 • Kansas City")}>FOX 4 Morning News</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/FNPpDcvW1HA", "'How Money Works' Author Steve Siebold featured on Great Day KC discussing tips to keep your holiday spending under control.", "Great Day KC • FOX 4 WDAF-TV • Kansas City")}>FOX 4 HMW Holidays</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/KjJfZCmC_eY", "'How Money Works' Author Steve Siebold on FOX 4 Sports Sunday", "FOX 4 Sports Sunday • FOX 4 • Kansas City")}>FOX 4 Sports Sunday</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/WUxQ7x6dbuI", "'How Money Works' Author Steve Siebold on CBS 5 Kansas City", "CBS 5 Kansas City • CBS 5 • Kansas City")}>CBS 5 Kansas City</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/YFmjN7ogvCI", "How not to overspend this holiday shopping season", "Fox 4 How Money Works • Fox 4 WDAF • Kansas City")}>Fox 4 How Money Works</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/awiePAN00lU", "Author Steve Siebold details his journey into the mind of the mega-wealthy.", "KCL • NBC KSHB-41 • Kansas City")}>KCL</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "knoxville")}>
                        Knoxville
                    </button>
                    {this.state.displayKno && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/yt9YUm7RUpQ", "Creating Your Own Financial Story", "Living East Tennessee HMW • ABC 6 WATE • Knoxville")}>Living East Tennessee HMW</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "lansing")}>
                        Lansing
                    </button>
                    {this.state.displayLan && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/WtvDalD_epk", "'How Money Works' Author Steve Siebold on Studio 10", "Studio 10 • NBC Lansing • Lansing")}>Studio 10</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "las vegas")}>
                        Las Vegas
                    </button>
                    {this.state.displayLas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/hiQaBKY_tXk", "Mental Toughness: the secret to keeping resolutions", "Action News • ABC 13 • Las Vegas")}>Action News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/4859JbpzQk4", "Tough Love for losing weight", "Fox 5 • - TB KVVU • Las Vegas")}>Fox 5</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/3OheNjxtP0g", "Breaking Down Weight Loss Myths", "News This Morning • FOX 5 KVVU - TV • Las Vegas")}>News This Morning</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/FF1CS1T3Ekc", "How Do People Become Millionaires?", "The Morning Blend • ABC KTNV • Las Vegas")}>The Morning Blend</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "london")}>
                        London
                    </button>
                    {this.state.displayLon && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/CltiEce9jbU", "Does the government have the right to ban toy giveaways if the meal is unhealthy?", "Connect The World • CNN International • London")}>Connect The World</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/xW5cHCBlceM", "If you are fat, it's your fault!", "The Wright Stuff Extra • Channel 5 • London")}>The Wright Stuff Extra</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "los angeles")}>
                        Los Angeles
                    </button>
                    {this.state.displayLos && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/9qlKQLYp5A0", "Financial New Year's Resolutions", "KTLA Morning News HMW • CW 5 KTLA • Los Angeles")}>KTLA Morning News HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/jQ1P3BK5rDg", "How to spring clean your finances", "KTLA Morning News HMW • CW 5 KTLA • Los Angeles")}>KTLA Morning News HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/zUIcqoZC-z4", "In a world full of chaos comes massive opportunities to make money", "KTLA Morning News HMW • CW 5 KTLA • Los Angeles")}>KTLA Morning News HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/QL7hbzSjT4k", "Are we our own worst enemies?", "KTLA 5 • News at 1 • Los Angeles")}>KTLA 5</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/vENMAxUhpGg", "How do we change our mindset when we can't even pay our bills?", "KTLA Morning News • CBS KTLA • Los Angeles")}>KTLA Morning News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ORyUWnP7POw", "Mental Toughness Training For Dieters", "Studio 11 LA • LA FOX • Los Angeles")}>Studio 11 LA</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "louisville")}>
                        Louisville
                    </button>
                    {this.state.displayLou && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/8uGUl_cNb18", "Couples in Business", "WAVE Country with Dawne Gee • NBC WAVE 3 • Louisville")}>WAVE Country with Dawne Gee</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/AaivWFkxqN0", "How couples with different financial philosophies can get on the same financial page", "WAVE 3 Listens Live! • NBC WAVE 3 • Louisville")}>WAVE 3 Listens Live!</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/q3RoMX96OMs", "Put down the fork and go to the gym!", "WHAS11.com • Broadcast Interactive Media • Louisville")}>WHAS11.com</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "mankato")}>
                        Mankato
                    </button>
                    {this.state.displayMan && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/wPew_7ZWN3Q", "Money Management with Steve Siebold", "CBS 12 HMW • CBS 12 KEYC • Mankato")}>CBS 12 HMW</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "memphis")}>
                        Memphis
                    </button>
                    {this.state.displayMem && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/mlISPTQtPKQ", "America's obesity epidemic is getting worse", "Live At 9 • WREG News 3 • Memphis")}>Live At 9</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "milwaukee")}>
                        Milwaukee
                    </button>
                    {this.state.displayMil && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/1K9kMogDuh8", "'How Money Works' Author Steve Siebold on The Morning Blend", "The Morning Blend • TMJ4 Today • Milwaukee")}>The Morning Blend HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/hXVUjNbqWxE", "'How Money Works' Author Steve Siebold on The Morning Blend", "The Morning Blend • TMJ4 Today • Milwaukee")}>The Morning Blend HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/lz9ooXEgtMs", "How couples can see eye-to-eye on money as Valentine's Day approaches", "The Morning Blend • TMJ4 Today • Milwaukee")}>The Morning Blend HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ZrOGEGyJ4yQ", "The Mental Toughness Habits of Champions", "The Morning Blend • TMJ4 Today • Milwaukee")}>The Morning Blend 177</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/gtaFZi-GR-o", "The best ways to teach your kids about money", "The Morning Blend • TMJ4 Today • Milwaukee")}>The Morning Blend HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/W1jNO_fB5XQ", "How Rich People Think", "The Morning Blend • TMJ4 Today • Milwaukee")}>The Morning Blend</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/_ZvNIPJ6B0I", "Five steps to getting rich", "Wake Up News • Fox 6 WITI • Milwaukee")}>Wake Up News</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "minneapolis")}>
                        Minneapolis
                    </button>
                    {this.state.displayMin && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/_uGTliIqiiM", "Do you know how to think skinny?", "Fox 9 Morning • FOX KMSP • Minneapolis")}>Fox 9 Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "nashville")}>
                        Nashville
                    </button>
                    {this.state.displayNas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/odgZPx-Xq0k", "Is coddling fat people the right thing to do?", "More at Midday • NBC 4 WSMV • Nashville")}>More at Midday</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/CtDt83YsoWY", "What separates rich people from the middle class?", "Tennessee Mornings • FOX WZTV • Nashville")}>Tennessee Mornings</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/yGI31M-0Dkg", "The Truth About Personal Finance", "Today in Nashville • NBC 4 WSMV • Nashville")}>Today in Nashville</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "new orleans")}>
                        New Orleans
                    </button>
                    {this.state.displayNOr && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/_oWyGmO7tpE", "99% leads to 80% leads to... starting again on Monday, leads to failure!", "Good Morning New Orleans • ABC WGNO • New Orleans")}>Good Morning New Orleans</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "new york")}>
                        New York
                    </button>
                    {this.state.displayNYo && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/TXhj-lyvIWg", "Setting Financial Goals in 2022", "Morning News • PIX • New York")}>PIX Morning News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/NaPAQZuPgTI", "Is Mental Toughness the solution to finally taking control of your weight?", "Better Show • Health to Health • New York")}>Better Show</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/qNN7izdC5nA", "Can changing your mind change your bank account?", "Fox Business Live • FOX Business • New York")}>Fox Business Live</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Qb5Z1Ly92j0", "Does eliminating fear pave the way to riches?", "Good Day NY • FOX WNYW • New York")}>Good Day NY</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Pagz4i2EC0M", "Is Mental Toughness the answer to getting fit and healthy?", "Good Morning America • ABC WABC • New York")}>Good Morning America</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/4iXbdNFPRIw", "Do less guns equal more crime?", "Hardball With Chris Matthews • MS NBC • NEW YORK")}>Hardball With Chris Matthews</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/uo-bTf3QSdI", "If you're fat, is it your fault?", "NBC's TODAY • NBC • New York")}>NBC's TODAY</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/8Hj7m2uBjHw", "Getting Tough on Obesity", "NY Nightly News • NBC • NEW YORK")}>NY Nightly News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/G7A6PYNwWmc", "Tough Talk Weight Loss", "The Couch • CBS • New York")}>The Couch</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/b3MfJrvYftY", "Become wealthy by thinking like the wealthy", "Today Show - HRPT • NBC • NEW YORK")}>Today Show - HRPT</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/t3WJEQIy6mo", "Is It Time To Buy Art?", "Varney & Co - Art • Business Fox • New York")}>Varney & Co - Art</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/uqwtrtPUQrs", "Fewer Americans Identifying as \"Middle Class\"", "Varney & Co - Middle Class • BUSINESS FOX • New York")}>Varney & Co - Middle Class</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/wQ2-rYeSDHE", "Are the rich leaving the middle class behind?", "Varney & Co - Millionaire Households • FOX • New York")}>Varney & Co - Millionaire Households</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/vCuGNdWf1dI", "Up to the Wealthy to Save the Economy?", "Varney & Co - Affluenza • Business FOX • New York")}>Varney & Co - Affluenza</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/PP3yzETzNHg", "The Middle Class Catch Up?", "Varney & Co - Catch UP • Business FOX • New York")}>Varney & Co - Catch UP</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ZPB0uTY4Zk8", "FOX Business Network's Stuart Varney interviews Steve Siebold", "Varney & Co - HRPT Book • Fox Business • New York")}>Varney & Co - HRPT Book</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/fvLtJnOhQH8", "Is the Income Gap wider?", "Varney & Co - Income Gap • Buiness Fox • New York")}>Varney & Co - Income Gap</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/SXwt_04jINY", "How do wealthy Americans feel about the incoming tax increase?", "Varney & Co - Obama • Business FOX • New York")}>Varney & Co - Obama</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/FmpspG9ZTKY", "Americas richest will only grow richer this year.", "Varney & Co - Richest • Business FOX • New York")}>Varney & Co - Richest</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/yLJV-iIf2J0", "Stressing Over Money", "Varney & Co - Stress/Money • Fox • New York")}>Varney & Co - Stress/Money</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/jCkbUkC4NZ4", "Steve Siebold on the Golden State's fiscal problems", "Varney & Co - Taxing the Rich • Fox Business • New York")}>Varney & Co - Taxing the Rich</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/svOGw5jpkpU", "Should Chicago Teachers Be Fired for Striking?", "Varney & Co - Teachers Strike • Fox Business • New York")}>Varney & Co - Teachers Strike</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/WArm2gEBA3M", "Only 28% of Millionaires Feel Rich", "Varney & Co - Weathy • Business FOX • New York")}>Varney & Co - Wealthy</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Gw0rwRhWwH0", "Wealthy People Like Working", "Varney & Co - Weathy Like Working • Business FOX • New York")}>Varney & Co - Wealthy Like Working</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/1I1RseeQKU8", "Why Are the Rich America's Scapegoat?", "Varney & Co Scapegoat • Business FOX • NEW YORK")}>Varney & Co Scapegoat</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/8m0JTDWgN6s", "Tips On Holiday Spending", "Wall Street Journal • WSJ • New York")}>Wall Street Journal</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "newark")}>
                        Newark
                    </button>
                    {this.state.displayNew && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/5Ydgtfqelfg", "What keeps us from thinking rich?", "It's Your Money • NJ 12 • Newark")}>It's Your Money</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "oklahoma city")}>
                        Oklahoma City
                    </button>
                    {this.state.displayOkl && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ZU5kth3Gv58", "How couples can overcome their financial differences", "Can You Relate? • KWTV News 9 • Oklahoma City")}>Can You Relate?</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "orlando")}>
                        Orlando
                    </button>
                    {this.state.displayOrl && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/0IhsMhkcTlk", "Tiger Toughness", "Golf Channel • The Golf Channel • Orlando")}>Golf Channel</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/m5oVWlGHvRU", "Do the rich just keep getting richer while the rest of the world is stuck?", "Good Day Orlando • FOX 35 WOFL • Orlando")}>Good Day Orlando</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "palm beach")}>
                        Palm Beach
                    </button>
                    {this.state.displayPal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/G_Ug-3xbKM8", "Can you be fat and fit?", "Fox • News • Palm Beach")}>Fox</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "palm springs")}>
                        Palm Springs
                    </button>
                    {this.state.displayPaS && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/405oYjGr2g8", "What would you buy with a BILLION dollars?", "News This Morning • CBS KPSP • Palm Springs")}>News This Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "peoria")}>
                        Peoria
                    </button>
                    {this.state.displayPeo && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/QZFL6OWSzgo", "Expect to be rich!", "This Morning • CBS WMBD • Peoria")}>This Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "philadelphia")}>
                        Philadelphia
                    </button>
                    {this.state.displayPhi && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/0VmjhUllfQY", "How to teach kids important money lessons at the holidays", "Morning News • PHL17 • Philadelphia")}>PHL Morning News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/WQ9Dfl1RBRM", "You can loose weight by thinking like a thin person", "CBS 3 Philly • CBS CBS 03 • Philadelphia")}>CBS 3 Philly</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/kMP5dbBhdII", "Will shocking people out of self-delusion work towards getting fit?", "The 10! Show - 1 • NBC WCAU • Philadelphia")}>The 10! Show - 1</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/WtYZ97RTKmc", "Can changing your thinking lead to financial success?", "The 10! Show - 2 • NBC WCAU • Philadelphia")}>The 10! Show - 2</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "phoenix")}>
                        Phoenix
                    </button>
                    {this.state.displayPho && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/W7L4AwTaruU", "Preparing for a Recession", "Good Morning Arizona • CBS 5 GMAZ • Phoenix")}>Good Morning Arizona Recession</div>
                        {/* <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/", "5 Money Goals for 2022", "Good Morning Arizona HMW • CBS 5 GMAZ • Phoenix")}>Good Morning Arizona HMW</div> */}
                        {/* <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/", "Struggling with weight loss could all be in your head", "Arizona Midday • NBC 12 KPNX • Phoenix")}>Arizona Midday</div> */}
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/jmFqcAiBx3Y", "'How Money Works' Author Steve Siebold on Good Morning Arizona", "Good Morning Arizona • CBS 5 GMAZ • Phoenix")}>Good Morning Arizona Financial Footing</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/klAGczig0ys", "5 tips for setting yourself up for financial success in the new year", "Good Morning Arizona • CBS 5 GMAZ • Phoenix")}>Good Morning Arizona</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/nW2-oZMMqSw", "Common money myths and how to regain your financial footing from the pandemic", "Good Morning Arizona HMW • CBS 5 GMAZ • Phoenix")}>Good Morning Arizona HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ZQ6skg-iD1g", "Ways to keep New Year's resolutions", "Arizona Midday - New Year Resolutions • NBC KPNX • Phoenix")}>Arizona Midday - New York</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/oPAFjIm5APE", "If you want to be rich, you need to start thinking rich.", "Good Morning Arizona • KTVK • Phoenix")}>Good Morning Arizona</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/GHZrJc2hXNE", "You could be rich just by changing the way you think!", "Morning Scramble • AZTV 7 • Phoenix")}>Morning Scramble</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/jjbFRLdTGgA", "#1 New Year's Resolution", "MyFoxPhoenix • FOX KSAZ • Phoenix")}>MyFoxPhoenix</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/yyWcbmaJ20I", "Would you love to know the secrets to becoming a millionaire?", "Smart Family • ABC KNXV • Phoenix")}>Smart Family</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/jZdBQrFMcsk", "Can you stick to a diet and lose weight?", "Sonoran Living Live • ABC KNXV • Phoenix")}>Sonoran Living Live</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "pittsburgh")}>
                        Pittsburgh
                    </button>
                    {this.state.displayPit && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/6PSoKSs3cTk", "Do you get out of bed because you have to or because you want to?", "Night Talk • PCNC • Pittsburgh")}>Night Talk</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "portland")}>
                        Portland
                    </button>
                    {this.state.displayPor && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/yVY8YQpoThA", "Spending vs. Saving during the COVID crisis", "On Your Side HMW • ABC 2 KATU • Portland")}>On Your Side HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/9G2PAKjf3V4", "Learn to think like a fit person and get fit", "AM Northwest • KATU • Portland")}>AM Northwest</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "raleigh")}>
                        Raleigh
                    </button>
                    {this.state.displayRal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/aOvizJqLmtg", "If you change the way you think about money, could you get more?", "My Carolina Today • NBC WNCN • Raleigh")}>My Carolina Today</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "richmond")}>
                        Richmond
                    </button>
                    {this.state.displayRic && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/vNLnNr0RieY", "Steve Siebold on Virginia This Morning", "Virginia This Morning • WTVR CBS 6 • Richmond")}>Virginia This Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "sacramento")}>
                        Sacramento
                    </button>
                    {this.state.displaySac && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/L-rZYSGAzkY", "Do you have a healthy mindset?", "Fox 40 Live • Fox XTXL • Sacramento")}>Fox 40 Live</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/dBSHOQjNL0k", "It's time to get tough on obesity!", "Sacramento & Co • ABC News 10 • Sacramento")}>Sacramento & Co</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "salt lake city")}>
                        Salt Lake City
                    </button>
                    {this.state.displaySal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/OMr3fW_9u3g", "The fatloser foundation is making the decision!", "2 News This Morning • CBS KUTV Channel 2 • Salt Lake City")}>2 News This Morning</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Gs_v2c__6Tk", "Author Talks New Health Book", "Good Day Utah • 13 News Fox • Salt Lake City")}>Good Day Utah</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "san antonio")}>
                        San Antonio
                    </button>
                    {this.state.displaySnA && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/d2hVXBsLa7o", "How to do a financial spring cleaning", "Daytime with Kimberly & Esteban • Fox 29 KABB • San Antonio")}>Daytime with Kimberly & Esteban</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/PDgqMtdf7fc", "Some of the most common money myths and misconceptions", "Great Day San Antonio • CBS 5 KENS • San Antonio")}>Great Day San Antonio</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/tgl1kuP9LzU", "Avoiding debt while holiday shopping", "KENS 5 How Money Works • CBS 5 KENS • San Antonio")}>KENS 5 How Money Works</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Z3CjksbBHxQ", "Easy ways to start making money right now ahead of the holiday season", "Daytime with Kimberly & Esteban HMW • Fox 29 KABB • San Antonio")}>Daytime with Kimberly & Esteban HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/OP9jN7qsvBQ", "If you want to make money, you have to know how it works", "San Antonio Live HMW • KSAT 12 • San Antonio")}>San Antonio Live HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/BULRATBa3bM", "Financial pivots to make during the COVID crisis", "San Antonio Living HMW • News 4 WOAI • San Antonio")}>San Antonio Living HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/o1OfBgyCRLQ", "Financial Literacy in America", "Great Day San Antonio HMW • CBS 5 KENS • San Antonio")}>Great Day San Antonio HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/J_FtJ5Eb0Mw", "Saving Money Tips For Kids", "Great Day SA HMW • CBS 5 KENS • San Antonio")}>Great Day SA - Money Saving Tips</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "san diego")}>
                        San Diego
                    </button>
                    {this.state.displaySan && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/cFWGM9csVcE", "How to regain your financial footing during the pandemic", "News 8 HMW • CBS 8 KFMB • San Diego")}>News 8 HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/l_lBkvLncfU", "Are you on a quest to be a millionaire?", "Fox 5 Morning News (1) • FOX KSWB • San Diego")}>Fox 5 Morning News (1)</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/z9VilotJaFs", "Holiday Spending Diet", "Fox 5 Morning News (2) • FOX KSWB • San Diego")}>Fox 5 Morning News (2)</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/SaPGpZbwm_o", "Does getting rich sound like a good idea?", "San Diego 6 In The Morning • CW XETV • San Diego")}>San Diego 6 In The Morning</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/giO1Do4u6yU", "Tough Love For Dieters", "San Diego Living • 6 CW • San Diego")}>San Diego Living</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "san francisco")}>
                        San Francisco
                    </button>
                    {this.state.displaySnF && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/2tYoRDk9VG4", "Tips for managing your finances during the holidays and the pandemic", "KTVU How Money Works • Fox 2 KTVU • San Francisco")}>KTVU How Money Works</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "seattle")}>
                        Seattle
                    </button>
                    {this.state.displaySea && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Ew9n90MqPBw", "'How Money Works' Author Steve Siebold on Q13 Fox News in Seattle", "Q13 • Fox News • Seattle")}>Q13 Fox News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/1QIMZ0xdrUU", "Is your focus on financial survival or getting rich?", "KOMO 4 • Money Works News • Seattle")}>KOMO 4</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/b4sY83ORr_M", "Steve Siebold dissects the human psyche", "New Day Northwest • NBC King5 • Seattle")}>KOMO 4</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "springfield")}>
                        Springfield
                    </button>
                    {this.state.displaySpr && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/-iEhMao5Rmw", "How to regain your financial foothold after COVID", "Mass Appeal HMW • CW 22 WWLP • Springfield")}>Mass Appeal HMW</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "st. louis")}>
                        St. Louis
                    </button>
                    {this.state.displayStL && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/XMXq-nu2Dzo", "What do you teach your kids about money?", "Fox 2 Morning • FOX KTVI • St. Louis")}>Fox 2 Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "st. paul")}>
                        St. Paul
                    </button>
                    {this.state.displayStP && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/_uGTliIqiiM", "Do you know how to think skinny?", "Fox 9 Morning • FOX KMSP • St. Paul")}>Fox 9 Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "sydney")}>
                        Sydney
                    </button>
                    {this.state.displaySyd && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/WCkSuVRVTTM", "Is mental toughness innate or is it something that we can learn?", "Today • Nine Network • Sydney")}>Today</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "tampa")}>
                        Tampa
                    </button>
                    {this.state.displayTam && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/NMLVqbyq4dQ", "'How Money Works' Author Steve Siebold featured on Great Day Live (CBS Tampa) discussing National Financial Literacy Month and how to make your money work for you.", "Great Day LIVE! • CBS 10 WTSP • Tampa")}>Great Day LIVE!</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/gmlRhltdLFA", "'How Money Works' Author Steve Siebold on Daytime", "Daytime HMW • NBC 8 WFLA • Tampa")}>Daytime HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/BNMV78q6r-0", "How couples can better see eye-to-eye on money as Valentine's Day approaches", "Daytime HMW • NBC 8 WFLA • Tampa")}>Daytime HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/1O3XobW9CbI", "How do we change our attitudes about money?", "Daytime HMW • NBC 8 WFLA • Tampa")}>Daytime HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/Kpsus-v65EY", "Gaining Financial Health in 2020", "Great Day Tampa Bay HMW • CBS 10 WTSP • Tampa")}>Great Day Tampa Bay HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/y5LAE4OwtZg", "Could mental toughness give you that extra push to get fit?", "Bay News 9 • Cable • Tampa")}>Bay News 9</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/aihGVwb2gZ8", "Could taking responsibility for getting fat turn things around?", "Daytime (1) • WFLA • Tampa")}>Daytime (1)</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ib8xSe6exLo", "Is your thinking getting in the way?", "Daytime (2) • WFLA • Tampa")}>Daytime (2)</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/0AfW-Nlp2II", "How Do Rich People Think?", "Good Day Tampa Bay • FOX WTVT • Tampa")}>Good Day Tampa Bay</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/wDr0Vn0hHdY", "Thinking is the catalyst for behavior, and behavior is what makes you rich.", "The Daily Buzz • CW 44 • Tampa")}>The Daily Buzz</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "toledo")}>
                        Toledo
                    </button>
                    {this.state.displayTol && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/r8s6b8b4Ce8", "5 Ways To Save Money In March", "WTOL 11 HMW • CBS 11 WTOL • Toledo")}>WTOL 11 HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/09MX1MGtFYY", "The right ways to teach your kids about money", "WTOL 11 HMW • CBS 11 WTOL • Toledo")}>WTOL 11 HMW</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "toronto")}>
                        Toronto
                    </button>
                    {this.state.displayTor && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ll8MRkUcxaw", "5 Lies You Need to Stop Telling Your Kids About Money", "Breakfast Television • City TV • Toronto")}>Breakfast Television - Money Lies</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/xzksotU7RtY", "Tips To Teach Your Kids About Money", "Breakfast Television • City TV • Toronto")}>Breakfast Television</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/8FuJO6j3EAM", "101 Differences Between Fit/Fat People", "Breakfast Television • City TV • Toronto")}>Breakfast Television</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/f1A5NAnKXPY", "Is McDonald's to blame for heart disease or the obesity epidemic?", "Connect With Mark Kelley • CBC • Toronto")}>Connect With Mark Kelley</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/AlX3-wo-cek", "Author Steve Siebold delivers his message about obesity.", "The Marilyn Denis Show • CTV Two • Toronto")}>The Marilyn Denis Show</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "traverse city")}>
                        Traverse City
                    </button>
                    {this.state.displayTra && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/vJWwCHF5okg", "How to do a financial spring cleaning", "9&10 News the four HMW • 9&10 News WWTV • Traverse City")}>9&10 News the four HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/_9NVkMSPfUI", "How couples can see eye-to-eye when it comes to money", "9&10 News the four • 9&10 News WWTV • Traverse City")}>9&10 News the four</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "tulsa")}>
                        Tulsa
                    </button>
                    {this.state.displayTul && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/ypa18RO7vmM", "Tips for new grads to get ahead financially.", "Good Day Tulsa • KTUL ABC 8 • Tulsa")}>Good Day Tulsa</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "vancouver")}>
                        Vancouver
                    </button>
                    {this.state.displayVan && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/d1E8_dAy0gs", "HMW Author Steve Siebold on Global News Canada", "Global News Canada • Global News Morning • Vancouver")}>Global News Canada HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/jlQhcMv8ZEQ", "What couples can do when they don't see eye-to-eye on money", "Global News Canada • Global News Morning • Vancouver")}>Global News Canada</div>
                    </div>}                    
                    <button onClick={this.toggle.bind(this, "warsaw")}>
                        Warsaw
                    </button>
                    {this.state.displayWar && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/YsrAaMCSOGs", "Steve Siebold on Dzień Dobry TVN", "Good Morning Poland • Dzień Dobry TVN • Warsaw")}>Good Morning Poland</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "washington")}>
                        Washington
                    </button>
                    {this.state.displayWas && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/XtN-EGGJeeI", "'How Money Works' Author Steve Siebold featured on Good Day D.C. discussing how to prepare for a recession.", "Good Day D.C. • FOX 5 DC • Washington")}>Good Day DC</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/gAZ9ylLifOg", "'How Money Works' Author Steve Siebold on Good Morning Washington", "Good Morning Washington • ABC 7 WJLA • Washington")}>Good Morning Washington HMW</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/yPE2nQU4J7s", "How couples can work through their differences when it comes to money", "Good Morning Washington • ABC 7 WJLA • Washington")}>Good Morning Washington</div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/oAfQ6ywYm5U", "How far will stimulus checks go during the COVID-19 crisis?", "Fox 5 • FOX 5 WTTG • Washington")}>Fox 5 HMW</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/cEMijjdRLVE", "If you are fat, it's your fault!", "Fox 5 Morning News • FOX 5 WTTG • Washington")}>Fox 5 Morning News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/DrwFmLGtlGE", "Is the obesity epidemic in the US out of control?", "Let's Talk Live • News Channel 8 • Washington")}>Let's Talk Live</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "west palm beach")}>
                        West Palm Beach
                    </button>
                    {this.state.displayWes && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/rEbQ1S9mCks", "Can you get mentally fit?", "Good Morning South Florida • CBS WPEC • West Palm Beach")}>Good Morning South Florida</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "wichita")}>
                        Wichita
                    </button>
                    {this.state.displayWic && <div>
                        <div style={{color: "#00FF00"}} className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/nM5XBtG_REk", "Money and the holiday shopping season", "KWCH How Money Works • CBS 12 KWCH • Wichita")}>KWCH How Money Works</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "winston-salem")}>
                        Winston-Salem
                    </button>
                    {this.state.displayWin && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://www.youtube.com/embed/7343ICEl230", "How do the rich keep getting richer?", "Fox 8 News In The Morning • FOX WGHP • Winston-Salem")}>Fox 8 News In The Morning</div>
                    </div>}
                </div>
                <div id="video" style={{width: this.props.vidWidth, height: "300px", display: "flex", flexDirection: "column", color: "white", fontFamily: "arial", fontSize: "16px", fontWeight: "bold", marginLeft: this.props.vidMargin, paddingBottom: "40px"}}>
                    {/* <div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}><div className="wistia_responsive_wrapper" style={{height: "100%", left: "0", position: "absolute", top: "0", width: "100%"}}>
                    <iframe src={this.state.vid} title="20130109-tdy_klg_hrpt_ NY Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen width="100%" height="100%"></iframe></div></div>
                    <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script><br/> */}
                    <iframe width="100%" height="100%" src={this.state.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div style={{paddingTop: "20px"}}>{this.state.title}
                        <div style={{fontSize: "11px", fontWeight: "normal"}}>{this.state.subtitle}</div>
                    </div>
                </div>
                {this.props.networks && <div id="newsPanel" style={{width: this.props.newsWidth, height: "90%", backgroundColor: "#01305f"}}>
                    <img style={{width: "100%"}} alt="major networks" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/YXNWnSSRoOPA33kgKcGf_major_networks0.png" />
                </div>}
            </div>
        )
    }
}
