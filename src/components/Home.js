import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import me from '../assets/me.png';
import resume from '../assets/resume.pdf';
import down from '../assets/chevronDown.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// eslint-disable-next-line no-restricted-globals
var screenHeight = screen.height;

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                    
        }
    }
    
    scrollWin(){
        window.scrollBy(0, screenHeight);
    }

    render() {
        // eslint-disable-next-line no-restricted-globals
        console.log(screen.width)
        var stuff;
        // eslint-disable-next-line no-restricted-globals
        // if(screen.width < 600){
        //     stuff = 
        //     <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
        //         <div style={{ backgroundColor: '#ffbf00', width: '100vw', height: 15, position: 'absolute', top: 0 }}></div>
        //         <Grid container>
        //             <Grid style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingLeft: '7.5%'}} xs={12} sm={6}>
        //                 <div style={{ height: '70%', width: '100%', display: 'flex', flexDirection: 'column', }}>
        //                     <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 45, }}>
        //                         <Typography style={{ lineHeight: 0,color: '#1f1f1f', fontSize: '4em', fontFamily: 'TwReg', letterSpacing: 15 }}>
        //                             PAOLO
        //                         </Typography>
        //                         <Typography style={{ color: '#1f1f1f', fontSize: '4em', fontFamily: 'TwBold', letterSpacing: 0.5 }}>
        //                             VELARDE
        //                         </Typography>
        //                     </div>
        //                     <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        //                         <Typography style={{ color: '#464646', fontFamily: 'TWReg', fontSize: '1em', marginTop: -15 }}>Software Engineering Intern at KPMG<br></br>Junior undergrad at University of Toronto<br></br>Executive and Designer at CSEC
        //                         </Typography>
        //                         <div style={{ display: 'flex', flexDirection: 'row', }}>
        //                             <a href="mailto:paolo.velarde@mail.utoronto.ca" style={{ fontFamily:'TwItalic', fontSize:'0.85em', color:'#727272', textDecoration: 'none', marginRight: 60 }}>email</a>
        //                             <a href={resume} target="_blank" style={{ fontFamily:'TwItalic', fontSize:'0.85em', color:'#727272', textDecoration: 'none', marginRight: 60 }}>resume</a>
        //                             <a href="https://www.linkedin.com/in/paolo-mendez-velarde/" style={{ fontFamily:'TwItalic', fontSize:'0.85em', color:'#727272', textDecoration: 'none', marginRight: 60 }}>linkedin</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </Grid>
        //             <Grid style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems:'center', paddingLeft: '25%'}} xs={12} sm={6}>
        //                 <img src={me} style={{ height: '241.3125px', width: '214.5px' }} />
        //             </Grid>
        //         </Grid>
        //         <div style={{ height: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: '5%' }}>
        //             {/* <img src={down} onClick={this.scrollWin} style={{ height: '30px', width: '30px' }} /> */}
        //             <KeyboardArrowDownIcon onClick={this.scrollWin} style={{ height: '30px', width: '30px' }} />
        //         </div>
        //     </div>
        // }
        // else{
            stuff =
            <div>
            <div style={{ backgroundColor: '#ffbf00', height: 15, position: 'absolute', top: 0 }}></div>
                <div style={window.screen.width < 600 ? { backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column',  } : { backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'row',  }}>
                    {/* <Grid container>
                        <Grid style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }} xs={12} sm={6}>
                            <div style={{ marginLeft: '15%', marginRight: '15%', height: '70%', width: '100vw', display: 'flex', flexDirection: 'column', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 45, }}>
                                    <Typography style={{ lineHeight: 0,color: '#1f1f1f', fontSize: '6.25em', fontFamily: 'TwReg', letterSpacing: 28 }}>
                                        PAOLO
                                    </Typography>
                                    <Typography style={{ color: '#1f1f1f', fontSize: '6.25em', fontFamily: 'TwBold', letterSpacing: 4 }}>
                                        VELARDE
                                    </Typography>
                                </div>
                                <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography style={{ color: '#464646', fontFamily: 'TWReg', fontSize: '1.25em', marginTop: 0 }}>Software Engineering Intern at KPMG Lighthouse<br></br>Junior undergrad at University of Toronto<br></br>Executive and Designer at CS Enrichment Club
                                    </Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                                        <a href="mailto:paolo.velarde@mail.utoronto.ca" style={{ fontFamily:'TwItalic', fontSize:'1rem', color:'#727272', textDecoration: 'none', marginRight: 60 }}>email</a>
                                        <a href={resume} target="_blank" style={{ fontFamily:'TwItalic', fontSize:'1rem', color:'#727272', textDecoration: 'none', marginRight: 60 }}>resume</a>
                                        <a href="https://www.linkedin.com/in/paolo-mendez-velarde/" style={{ fontFamily:'TwItalic', fontSize:'1rem', color:'#727272', textDecoration: 'none', marginRight: 60 }}>linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} sm={6}>
                            <img src={me} style={{ height: '438.75px', width: '390px' }} />
                        </Grid>
                    </Grid> */}
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
                        <div style={window.screen.width < 600 ? { display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-end' } : { display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            <div style={window.screen.width < 600 ? { display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' } : { display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={window.screen.width < 600 ? { display: 'flex', flexDirection: 'column', flex: 0.75, justifyContent: 'space-around'  } : { display: 'flex', flexDirection: 'column', flex: 0.5, justifyContent: 'space-around'  }}>
                                    <div>
                                        <Typography style={window.screen.width < 600 ? { lineHeight: 0, color: '#1f1f1f', fontSize: '4em', fontFamily: 'TwReg', letterSpacing: 11 } : { color: '#1f1f1f', fontSize: '6.25em', fontFamily: 'TwReg', letterSpacing: 28 }}>
                                            PAOLO
                                        </Typography>
                                        <Typography style={window.screen.width < 600 ? { color: '#1f1f1f', fontSize: '4em', fontFamily: 'TwBold', letterSpacing: 0.5 } : { lineHeight: 0, color: '#1f1f1f', fontSize: '6.25em', fontFamily: 'TwBold', letterSpacing: 4 }}>
                                            VELARDE
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography style={window.screen.width < 600 ? { color: '#464646', fontFamily: 'TWReg', fontSize: '1em', } : { color: '#464646', fontFamily: 'TWReg', fontSize: '1.25em', }}>Software Engineering Intern at KPMG<br></br>Junior undergrad at University of Toronto<br></br>Executive and Designer at CSEC
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                                        <a href="mailto:paolo.velarde@mail.utoronto.ca" style={{ fontFamily:'TwItalic', fontSize:'1em', color:'#727272', textDecoration: 'none', marginRight: 60 }}>email</a>
                                        <a href={resume} target="_blank" style={{ fontFamily:'TwItalic', fontSize:'1em', color:'#727272', textDecoration: 'none', marginRight: 60 }}>resume</a>
                                        <a href="https://www.linkedin.com/in/paolo-mendez-velarde/" style={{ fontFamily:'TwItalic', fontSize:'1em', color:'#727272', textDecoration: 'none', marginRight: 60 }}>linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'row', }}>
                        <div style={window.screen.width < 600 ? { flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: 25, paddingTop: 25 } : { flex: 1, display: 'flex', backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={me} style={window.screen.width < 600 ? { height: '241.3125px', width: '214.5px' } : { height: '438.75px', width: '390px' }} />
                        </div>
                    </div>
                </div>
            {/* <div style={{ height: '15vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <KeyboardArrowDownIcon onClick={this.scrollWin} style={{ cursor: 'pointer', height: '40px', width: '40px', color: '#272727' }} />
            </div> */}
            </div>
        // }
        return (
            stuff   
        )
    }
}

export default Home
