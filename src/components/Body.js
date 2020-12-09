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
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/5efrj8tjhu?videoFoam=true", "What are the top differences in the way people think?", "First Business • Nationally Syndicated • Chicago")}>First Business</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/w45nkualsb?videoFoam=true", "Steve Siebold Breaks Down Common Diet Myths", "WGN • Morning News TV • Chicago")}>WGN</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/wb36lya77k?videoFoam=true", "Secrets Self-Made Millionaires Teach Their Kids", "WGN - TheSecretsBook.com • Morning Show • Chicago")}>WGN - TheSecretsBook.com</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/e0a1t98uvg?videoFoam=true", "Mind-Over-Matter approach to Weight Loss", "You & Me • The U WCIU • Chicago")}>You & ME</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "cincinnati")}>
                        Cincinnati
                    </button>
                    {this.state.displayCin && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/4qt3qip02h?videoFoam=true", "Raising Successful Kids", "Fox 19 • Now • Cincinnati")}>Fox 19</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/o52goyh816?videoFoam=true", "Changing Thinking About Wealth", "Good Morning Cincinnati • WKRC Local 12 • Cincinnati")}>Good Morning Cincinnati</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "cleveland")}>
                        Cleveland
                    </button>
                    {this.state.displayCle && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/l19t4xil0v?videoFoam=true", "Are you afraid to take chances?", "Good Company • NBC WKYC • Cleveland")}>Good Company</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/gtyqb2rprx?videoFoam=true", "Steve Siebold joined Wayne to talk about his book and his way of life", "Morning Show • Fox 8 • Cleveland")}>Morning Show</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "columbia")}>
                        Columbia
                    </button>
                    {this.state.displayCol && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/71bs5db11o?videoFoam=true", "Steve Siebold on Good Day Columbia discussing his new book \"Secrets Self-Made Millionaires Teach Their Kids\"", "Good Day Columbia • FOX FOX57 • Columbia")}>Good Day Columbia</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/syrl07zs3f?videoFoam=true", "Have you ever wondered what separates rich people from the middle class?", "The Morning Show • CBS WLTX • Columbia")}>The Morning Show</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "columbus")}>
                        Columbus
                    </button>
                    {this.state.displayCls && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/bu3lk4cw5l?videoFoam=true", "If you could get inside the mind of a millionaire, could you be one yourself?", "Good Day Columbus • FOX WTTE • Columbus")}>Good Day Columbus</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "dallas")}>
                        Dallas
                    </button>
                    {this.state.displayDal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/rul3n51uvz?videoFoam=true", "\"Fat Loser\" author Steve Siebold", "Good Morning Texas • ABC WFAA 8 • Dallas")}>Good Morning Texas</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "denver")}>
                        Denver
                    </button>
                    {this.state.displayDen && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/2vt0m69kb8?videoFoam=true", "Can this book help you lose weight and get fit?", "Daybreak • CW KWGN • Denver")}>Daybreak</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/86es2vws2h?videoFoam=true", "Tips to get fit and lose weight!", "Good Morning Colorado • FOX KDVR • Denver")}>Good Morning Colorado</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "detroit")}>
                        Detroit
                    </button>
                    {this.state.displayDet && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/jei4oddhn2?videoFoam=true", "Will being rich bring out the best or worst in you?", "Money Works • FOX 2 WJBK • Detroit")}>Money Works</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "edison")}>
                        Edison
                    </button>
                    {this.state.displayEdi && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/wxjv86o2lh?videoFoam=true", "What keeps us from thinking rich?", "It's Your Money • NJ 12 • Edison")}>It's Your Money</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "edmonton")}>
                        Edmonton
                    </button>
                    {this.state.displayEdm && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/vi8bymvse3?videoFoam=true", "Weight Loss with Steve Siebold", "CTV - Fat Loser Book • CTV Morning Show • Edmonton")}>CTV - Fat Loser Book</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/57oy8yaec1?videoFoam=true", "Secrets Self-Made Millionaires Teach Their Kids", "CTV - Millionaire Kids • CTV Morning Show • Edmonton")}>CTV - Millionaire Kids</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "fairway")}>
                        Fairway
                    </button>
                    {this.state.displayFai && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/usbpx098cw?videoFoam=true", "Hang out with rich people and get rich?", "KCTV5 • CBS NEWS • Fairway")}>KCTV5</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "ft. lauderdale")}>
                        Ft. Lauderdale
                    </button>
                    {this.state.displayFtL && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/yk0c4qt9cq?videoFoam=true", "Are FAT people liars?", "South Florida Live • CW WSFL • Ft. Lauderdale")}>South Florida Live</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "grand rapids")}>
                        Grand Rapids
                    </button>
                    {this.state.displayGra && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/76uug7ywcd?videoFoam=true", "Do you know what you want in your ultimate scenario?", "Fox 17 Morning News • Fox 17 WXMI • Grand Rapids")}>Fox 17 Morning News</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "greensboro")}>
                        Greensboro
                    </button>
                    {this.state.displayGre && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/bdrdeoymj9?videoFoam=true", "Steve Siebold talks about \"Die Fat or Get Tough\"", "Meet The Author • My Fox 8 - WGHP • Greensboro")}>Meet The Author</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "hartford")}>
                        Hartford
                    </button>
                    {this.state.displayHar && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/cuqtjfeso9?videoFoam=true", "What really separates world class from middle class?", "Connecticut Style • ABC WTNH • Hartford")}>Connecticut Style</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "indianapolis")}>
                        Indianapolis
                    </button>
                    {this.state.displayInd && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/k6jt5ughti?videoFoam=true", "Author Steve Siebold encourages critical thinking", "Fox News • Fox 59 • Indianapolis")}>Fox News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/e9xo9146q6?videoFoam=true", "Unless you have a  medical condition, if you are fat it is your fault!", "Indy Style • CBS WISH • Indianapolis")}>Indy Style</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/g3jptt04lt?videoFoam=true", "What separates rich people from the middle class?", "Indy Style - HRPT • Wish TV • Indianapolis")}>Indy Style - HRPT</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/r817nwues5?videoFoam=true", "Author spills \"Secrets Self-Made Millionaires Teach Their Kids\"", "IndyStyle - TheSecretsBook.com • 8 WishTV • Indianapolis")}>IndyStyle - TheSecretsBook</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "jacksonville")}>
                        Jacksonville
                    </button>
                    {this.state.displayJac && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/xhzl1tedbu?videoFoam=true", "Controversial New Book: Fat Loser!", "Morning Show • Jax News 4 • Jacksonvile")}>Morning Show</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "kansas city")}>
                        Kansas City
                    </button>
                    {this.state.displayKan && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/o6vd2re58a?videoFoam=true", "Author Steve Siebold details his journey into the mind of the mega-wealthy.", "KCL • NBC KSHB-41 • Kansas City")}>KCL</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "las vegas")}>
                        Las Vegas
                    </button>
                    {this.state.displayLas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/gs2ayuq77h?videoFoam=true", "Mental Toughness: the secret to keeping resolutions", "Action News • ABC 13 • Las Vegas")}>Action News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/o5fgm1qgfs?videoFoam=true", "Tough Love for losing weight", "Fox 5 • - TB KVVU • Las Vegas")}>Fox 5</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/yr1sopzad5?videoFoam=true", "Breaking Down Weight Loss Myths", "News This Morning • FOX 5 KVVU - TV • Las Vegas")}>News This Morning</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/6hdpz49u03?videoFoam=true", "How Do People Become Millionaires?", "The Morning Blend • ABC KTNV • Las Vegas")}>The Morning Blend</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "london")}>
                        London
                    </button>
                    {this.state.displayLon && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/vb1lv3jz2b?videoFoam=true", "Does the government have the right to ban toy giveaways if the meal is unhealthy?", "Connect The World • CNN International • London")}>Connect The World</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/ourfmse7yg?videoFoam=true", "If you are fat, it's your fault!", "The Wright Stuff Extra • Channel 5 • London")}>The Wright Stuff Extra</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "los angeles")}>
                        Los Angeles
                    </button>
                    {this.state.displayLos && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/ijhnse5rwe?videoFoam=true", "Are we our own worst enemies?", "KTLA 5 • News at 1 • Los Angeles")}>KTLA 5</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/76570d6yfn?videoFoam=true", "How do we change our mindset when we can't even pay our bills?", "KTLA Morning News • CBS KTLA • Los Angeles")}>KTLA Morning News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/yuvs8cvmvl?videoFoam=true", "Mental Toughness Training For Dieters", "Studio 11 LA • LA FOX • Los Angeles")}>Studio 11 LA</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "louisville")}>
                        Louisville
                    </button>
                    {this.state.displayLou && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/l3x77gvdj4?videoFoam=true", "Put down the fork and go to the gym!", "WHAS11.com • Broadcast Interactive Media • Louisville")}>WHAS11.com</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "memphis")}>
                        Memphis
                    </button>
                    {this.state.displayMem && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/77jd00qblo?videoFoam=true", "America's obesity epidemic is getting worse", "Live At 9 • WREG News 3 • Memphis")}>Live At 9</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "milwaukee")}>
                        Milwaukee
                    </button>
                    {this.state.displayMil && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/ffhr9rioxd?videoFoam=true", "How Rich People Think", "The Morning Blend • TMJ4 Today • Milwaukee")}>The Morning Blend</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/b0thugfy0h?videoFoam=true", "Five steps to getting rich", "Wake Up News • Fox 6 WITI • Milwaukee")}>Wake Up News</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "minneapolis")}>
                        Minneapolis
                    </button>
                    {this.state.displayMin && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/r3keyl754t?videoFoam=true", "Do you know how to think skinny?", "Fox 9 Morning • FOX KMSP • Minneapolis")}>Fox 9 Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "nashville")}>
                        Nashville
                    </button>
                    {this.state.displayNas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/h6e2st4wz6?videoFoam=true", "Is coddling fat people the right thing to do?", "More at Midday • NBC 4 WSMV • Nashville")}>More at Midday</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/aqqbq34r35?videoFoam=true", "What separates rich people from the middle class?", "Tennessee Mornings • FOX WZTV • Nashville")}>Tennessee Mornings</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "new orleans")}>
                        New Orleans
                    </button>
                    {this.state.displayNOr && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/l6sxw4b9vx?videoFoam=true", "99% leads to 80% leads to... starting again on Monday, leads to failure!", "Good Morning New Orleans • ABC WGNO • New Orleans")}>Good Morning New Orleans</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "new york")}>
                        New York
                    </button>
                    {this.state.displayNYo && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/fw0zo6zzb9?videoFoam=true", "Is Mental Toughness the solution to finally taking control of your weight?", "Better • Health to Health • New York")}>Better</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/qjjo3e3wj0?videoFoam=true", "Can changing your mind change your bank account?", "Fox Business Live • FOX Business • New York")}>Fox Business Live</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/r7y6vtakr8?videoFoam=true", "Does eliminating fear pave the way to riches?", "Good Day NY • FOX WNYW • New York")}>Good Day NY</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/6qnsb70pex?videoFoam=true", "Is Mental Toughness the answer to getting fit and healthy?", "Good Morning America • ABC WABC • New York")}>Good Morning America</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/hcbqyfyee4?videoFoam=true", "Do less guns equal more crime?", "Hardball With Chris Matthews • MS NBC • NEW YORK")}>Hardball With Chris Matthews</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/r9uz03jwpw?videoFoam=true", "If you're fat, is it your fault?", "NBC's TODAY • NBC • New York")}>NBC's TODAY</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/mzdhx0yfe5?videoFoam=true", "Getting Tough on Obesity", "NY Nightly News • NBC • NEW YORK")}>NY Nightly News</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/50c4pbndxk?videoFoam=true", "Tough Talk Weight Loss", "The Couch • CBS • New York")}>The Couch</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/w2f1j6q077?videoFoam=true", "Become wealthy by thinking like the wealthy", "Today Show - HRPT • NBC • NEW YORK")}>Today Show - HRPT</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/vo1ak4jb8i?videoFoam=true", "Is It Time To Buy Art?", "Varney & Co - Art • Business Fox • New York")}>Varney & Co - Art</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/aeou1m2is7?videoFoam=true", "Fewer Americans Identifying as \"Middle Class\"", "Varney & Co - Middle Class • BUSINESS FOX • New York")}>Varney & Co - Middle Class</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/a3u08pm45t?videoFoam=true", "Are the rich leaving the middle class behind?", "Varney & Co - Millionaire Households • FOX • New York")}>Varney & Co - Millionaire Households</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/pbddzqcuil?videoFoam=true", "Up to the Wealthy to Save the Economy?", "Varney & Co - Affluenza • Business FOX • New York")}>Varney & Co - Affluenza</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/vfmt4217kl?videoFoam=true", "The Middle Class Catch Up?", "Varney & Co - Catch UP • Business FOX • New York")}>Varney & Co - Catch UP</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/tqcvnoyog3?videoFoam=true", "FOX Business Network's Stuart Varney interviews Steve Siebold", "Varney & Co - HRPT Book • Fox Business • New York")}>Varney & Co - HRPT Book</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/zwqh1y4rdj?videoFoam=true", "Is the Income Gap wider?", "Varney & Co - Income Gap • Buiness Fox • New York")}>Varney & Co - Income Gap</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/85utld73da?videoFoam=true", "How do wealthy Americans feel about the incoming tax increase?", "Varney & Co - Obama • Business FOX • New York")}>Varney & Co - Obama</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/1um3raz0la?videoFoam=true", "Americas richest will only grow richer this year.", "Varney & Co - Richest • Business FOX • New York")}>Varney & Co - Richest</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/epzbyjy8bs?videoFoam=true", "Stressing Over Money", "Varney & Co - Stress/Money • Fox • New York")}>Varney & Co - Stress/Money</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/victs11dlf?videoFoam=true", "Steve Siebold on the Golden State's fiscal problems", "Varney & Co - Taxing the Rich • Fox Business • New York")}>Varney & Co - Taxing the Rich</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/is7ut6ow0h?videoFoam=true", "Should Chicago Teachers Be Fired for Striking?", "Varney & Co - Teachers Strike • Fox Business • New York")}>Varney & Co - Teachers Strike</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/i0tjvo5ad2?videoFoam=true", "Only 28% of Millionaires Feel Rich", "Varney & Co - Weathy • Business FOX • New York")}>Varney & Co - Wealthy</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/k92oum4ft8?videoFoam=true", "Wealthy People Like Working", "Varney & Co - Weathy Like Working • Business FOX • New York")}>Varney & Co - Wealthy Like Working</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/eluuwxmnri?videoFoam=true", "Why Are the Rich America's Scapegoat?", "Varney & Co Scapegoat • Business FOX • NEW YORK")}>Varney & Co Scapegoat</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/g6bb0arfsg?videoFoam=true", "Tips On Holiday Spending", "Wall Street Journal • WSJ • New York")}>Wall Street Journal</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "newark")}>
                        Newark
                    </button>
                    {this.state.displayNew && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/nfg6x21zhv?videoFoam=true", "What keeps us from thinking rich?", "It's Your Money • NJ 12 • Newark")}>It's Your Money</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "orlando")}>
                        Orlando
                    </button>
                    {this.state.displayOrl && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/u5fbnf4qvb?videoFoam=true", "Tiger Toughness", "Golf Channel • The Golf Channel • Orlando")}>Golf Channel</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/0k2kwso9im?videoFoam=true", "Do the rich just keep getting richer while the rest of the world is stuck?", "Good Day Orlando • FOX 35 WOFL • Orlando")}>Good Day Orlando</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "palm beach")}>
                        Palm Beach
                    </button>
                    {this.state.displayPal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/xhr8bf4onz?videoFoam=true", "Can you be fat and fit?", "Fox • News • Palm Beach")}>Fox</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "palm springs")}>
                        Palm Springs
                    </button>
                    {this.state.displayPaS && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/dyz8hy0f1r?videoFoam=true", "What would you buy with a BILLION dollars?", "News This Morning • CBS KPSP • Palm Springs")}>News This Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "peoria")}>
                        Peoria
                    </button>
                    {this.state.displayPeo && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/5cml7bv7bo?videoFoam=true", "Expect to be rich!", "This Morning • CBS WMBD • Peoria")}>This Morning</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "philadelphia")}>
                        Philadelphia
                    </button>
                    {this.state.displayPhi && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/8zpgzwumjo?videoFoam=true", "You can loose weight by thinking like a thin person", "CBS 3 Philly • CBS CBS 03 • Philadelphia")}>CBS 3 Philly</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/ujtsr8qthn?videoFoam=true", "Will shocking people out of self-delusion work towards getting fit?", "The 10! Show - 1 • NBC WCAU • Philadelphia")}>The 10! Show - 1</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/yfy17n3bav?videoFoam=true", "Can changing your thinking lead to financial success?", "The 10! Show - 2 • NBC WCAU • Philadelphia")}>The 10! Show - 2</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "phoenix")}>
                        Phoenix
                    </button>
                    {this.state.displayPho && <div>
                        {/* <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/jejwtlu0fs?videoFoam=true", "Struggling with weight loss could all be in your head", "Arizona Midday • NBC 12 KPNX • Phoenix")}>Arizona Midday</div> */}
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/ny49igiwmm?videoFoam=true", "Ways to keep New Year's resolutions", "Arizona Midday - New Year Resolutions • NBC KPNX • Phoenix")}>Arizona Midday - New York</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/jejwtlu0fs?videoFoam=true", "If you want to be rich, you need to start thinking rich.", "Good Morning Arizona • KTVK • Phoenix")}>Good Morning Arizona</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/hh4juif3hx?videoFoam=true", "You could be rich just by changing the way you think!", "Morning Scramble • AZTV 7 • Phoenix")}>Morning Scramble</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/j6vvdjzfhk?videoFoam=true", "#1 New Year's Resolution", "MyFoxPhoenix • FOX KSAZ • Phoenix")}>MyFoxPhoenix</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/iy6rhg29uy?videoFoam=true", "Would you love to know the secrets to becoming a millionaire?", "Smart Family • ABC KNXV • Phoenix")}>Smart Family</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/907ukvpx8k?videoFoam=true", "Can you stick to a diet and lose weight?", "Sonoran Living Live • ABC KNXV • Phoenix")}>Sonoran Living Live</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "pittsburgh")}>
                        Pittsburgh
                    </button>
                    {this.state.displayPit && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/215qog30jh?videoFoam=true", "Do you get out of bed because you have to or because you want to?", "Night Talk part 1 • PCNC • Pittsburgh")}>Night Talk part 1</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/7ngxawnb8e?videoFoam=true", "Do you get out of bed because you have to or because you want to?", "Night Talk part 2 • PCNC • Pittsburgh")}>Night Talk part 2</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "portland")}>
                        Portland
                    </button>
                    {this.state.displayPor && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/4lqagtcstw?videoFoam=true", "Learn to think like a fit person and get fit", "AM Northwest • KATU • Portland")}>AM Northwest</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "raleigh")}>
                        Raleigh
                    </button>
                    {this.state.displayRal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/hkdjy69ews?videoFoam=true", "If you change the way you think about money, could you get more?", "My Carolina Today • NBC WNCN • Raleigh")}>My Carolina Today</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "sacramento")}>
                        Sacramento
                    </button>
                    {this.state.displaySac && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/9rmvh8zx9g?videoFoam=true", "Do you have a healthy mindset?", "Fox 40 Live • Fox XTXL • Sacramento")}>Fox 40 Live</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/0tb6c8yket?videoFoam=true", "It's time to get tough on obesity!", "Sacramento & Co • ABC News 10 • Sacramento")}>Sacramento & Co</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "salt lake city")}>
                        Salt Lake City
                    </button>
                    {this.state.displaySal && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/r8ipvhiq7t?videoFoam=true", "The fatloser foundation is making the decision!", "2 News This Morning • CBS KUTV Channel 2 • Salt Lake City")}>2 News This Morning</div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/jnwl4mjuok?videoFoam=true", "Author Talks New Health Book", "Good Day Utah • 13 News Fox • Salt Lake City")}>Good Day Utah</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "san diego")}>
                        San Diego
                    </button>
                    {this.state.displaySan && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "seattle")}>
                        Seattle
                    </button>
                    {this.state.displaySea && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "st. paul")}>
                        St. Paul
                    </button>
                    {this.state.displayStP && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "sydney")}>
                        Sydney
                    </button>
                    {this.state.displaySyd && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "tampa")}>
                        Tampa
                    </button>
                    {this.state.displayTam && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "toronto")}>
                        Toronto
                    </button>
                    {this.state.displayTor && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "warsaw")}>
                        Warsaw
                    </button>
                    {this.state.displayWar && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "washington")}>
                        Washington
                    </button>
                    {this.state.displayWas && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "west palm beach")}>
                        West Palm Beach
                    </button>
                    {this.state.displayWes && <div>
                        <div className="show" onClick={this.setVid.bind(this, "https://fast.wistia.net/embed/iframe/c7srqs7977?videoFoam=true", "TOUGH LOVE APPROACH TO WEIGHT LOSS", "Better Mornings - Fat Loser • ATL CBS • Atlanta")}>Better Mornings - Fat Loser</div>
                    </div>}
                    <button onClick={this.toggle.bind(this, "winston-salem")}>
                        Winston-Salem
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
