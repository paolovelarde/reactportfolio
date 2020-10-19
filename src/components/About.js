import React, { Component } from 'react';
import bgLaptop from '../assets/bgLaptop.png';
import yellow from '../assets/yellow.png';
import { Typography, Grid } from '@material-ui/core';
import resume from '../assets/resume.pdf';
import up from '../assets/chevronDownWht.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// eslint-disable-next-line no-restricted-globals
var screenHeight = screen.height;

class About extends Component {
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
        console.log(screen.height)
        var stuff;
        // eslint-disable-next-line no-restricted-globals
        if(window.screen.height < 1000){
            stuff = 
            <div style={{ backgroundColor: '#1f1f1f', height: '100vh', backgroundImage: `url(${bgLaptop})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', backgroundPosition: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ width: '90%', height: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '2.5%', justifyContent: 'center'}}>
                    <Typography style={{ color: '#fff', fontSize: '3em', fontFamily: 'TwBold', lineHeight: 2}}>
                        About
                    </Typography>   
                    <div style={{ height: '80%', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
                        <Typography style={{ color: '#ffbf00', fontSize: '1.1em', fontFamily: 'TwItalic', marginBottom: 5 }}>
                        Intro
                        </Typography>
                        <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg', marginBottom: 10 }}>
                        I'm a junior at University of Toronto majoring in Statistics, with a focus in Machine Learning and Data Science. My expertise is mainly in web/mobile development, as well as UI/UX. Seeking internship opportunities for 2021!<a href={resume} target="_blank" style={{ fontFamily:'TwItalic', fontSize:'0.85em', color:'#8c7223', marginLeft: 10}}>(resume)</a>
                        </Typography>
                        <Typography style={{ color: '#ffbf00', fontSize: '1.1em', fontFamily: 'TwItalic', marginTop: 20, marginBottom: 5 }}>
                        Exp
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '0.85em', fontFamily: 'TwBold', marginBottom: 2.5 }}>
                            Software Engineering Intern at KPMG 
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg', marginBottom: 2.5 }}>
                            Jan - Apr 2020
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '0.85em', fontFamily: 'TwBold', marginBottom: 2.5 }}>
                            Software Engineering Intern at Interac
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg', marginBottom: 2.5 }}>
                            Jan - Apr 2019
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                            Graphic Design Intern at U of T
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg',  }}>
                            May - Aug 2018
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                            Executive at CS Enrichment Club
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg',  }}>
                            Sept 2018 -
                            </Typography>
                        </div>
                        <Typography style={{ color: '#ffbf00', fontSize: '1.1em', fontFamily: 'TwItalic', marginTop: 25, marginBottom: 5 }}>
                        Tech
                        </Typography>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <Typography style={{ color: '#cfcfcf', fontSize: '0.85em', fontFamily: 'TwBold', }}>
                                    Languages
                                    </Typography>
                                <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg',  marginBottom: 5}}>
                                    JavaScript<br />Python<br />Java<br />HTML<br />CSS
                                </Typography>
                            </div>
                            <div>
                                <Typography style={{ color: '#cfcfcf', fontSize: '0.85em', fontFamily: 'TwBold', }}>
                                    Frameworks
                                    </Typography>
                                <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg',  marginBottom: 5}}>
                                React (Native)<br />Vue.js<br />Node.js<br />pandas<br />Material UI
                                </Typography>
                            </div>
                            <div>
                                <Typography style={{ color: '#cfcfcf', fontSize: '0.85em', fontFamily: 'TwBold', }}>
                                    Tools
                                    </Typography>
                                <Typography style={{ color: '#9e9e9e', fontSize: '0.85em', fontFamily: 'TwReg',  marginBottom: 5}}>
                                Microsoft Azure<br />Google Cloud<br />Git<br />Heroku<br />Adobe CC
                                </Typography>
                            </div>
                            </div>
                        <br />
                    </div>
                </div>
                {/* <div style={{ width: '100%', height: '6vh', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight: '10%', paddingBottom: 15 }}>
                <KeyboardArrowDownIcon onClick={this.scrollWin} style={{ cursor: 'pointer', height: '40px', width: '40px', color: '#fff' }} />
                </div> */}
            </div>
        }
        else{
            stuff = 
            <div style={{ backgroundColor: '#1f1f1f', height: '70vh', backgroundImage: `url(${bgLaptop})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '7.5%', paddingRight: '7.5%' }}>
                <div style={{ width: '90%', height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '7.5%' }}>
                    <Typography style={{ color: '#fff', fontSize: '3em', fontFamily: 'TwBold', }}>
                        About
                    </Typography>
                    <div style={{ width: '90%', height: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ height: '80%', width: '25%' }}>
                            <Typography style={{ color: '#ffbf00', fontSize: '1.5em', fontFamily: 'TwItalic', lineHeight: 3 }}>
                                INTRO
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg' }}>
                                I'm a rising junior at University of Toronto majoring in Statistics.<br /><br />My expertise is mainly in web/mobile development, as well as UI/UX. I have recently been doing work in full stack dev using cloud computing services.<br /><br />Feel free to contact!
                            </Typography>
                        </div>
                        <div style={{ height: '80%', width: '33%' }}>
                            <Typography style={{ color: '#ffbf00', fontSize: '1.5em', fontFamily: 'TwItalic', lineHeight: 3 }}>
                                EXP
                            </Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '1em', fontFamily: 'TwBold', marginBottom: 2.5 }}>
                            Software Engineering Intern at KPMG 
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg', marginBottom: 2.5 }}>
                            Jan - Apr 2020
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '1em', fontFamily: 'TwBold', marginBottom: 2.5 }}>
                            Software Engineering Intern at Interac
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg', marginBottom: 2.5 }}>
                            Jan - Apr 2019
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '1em', fontFamily: 'TwBold',  }}>
                            Graphic Design Intern at U of T
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg',  }}>
                            May - Aug 2018
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Typography style={{ color: '#cfcfcf', fontSize: '1em', fontFamily: 'TwBold',  }}>
                            Executive at CS Enrichment Club
                            </Typography>
                            <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg',  }}>
                            Sept 2018 -
                            </Typography>
                        </div>
                            <br />
                            
                            <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg' }}>
                            Currently seeking opportunities for Fall 2020/Winter 2021. <a href={resume} target="_blank" style={{ fontFamily:'TwItalic', fontSize:'1rem', color:'#8c7223', }}> (resume)</a>
                            </Typography>
                            
                        </div>
                        <div style={{ height: '80%', width: '25%' }}>
                            <Typography style={{ color: '#ffbf00', fontSize: '1.5em', fontFamily: 'TwItalic', lineHeight: 3 }}>
                                TECH
                            </Typography>
                                <Typography style={{ color: '#cfcfcf', fontSize: '1em', fontFamily: 'TwBold' }}>
                                    Languages
                                </Typography>
                                <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg' }}>
                                    JavaScript, Python, Java, HTML, CSS
                                </Typography>
                                <br />
                                <Typography style={{ color: '#cfcfcf', fontSize: '1em', fontFamily: 'TwBold' }}>
                                    Frameworks
                                </Typography>
                                <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg' }}>
                                React (Native), pandas, Node.js, Material UI
                                </Typography>
                                <br />
                                <Typography style={{ color: '#cfcfcf', fontSize: '1em', fontFamily: 'TwBold' }}>
                                    Tools
                                </Typography>
                                <Typography style={{ color: '#9e9e9e', fontSize: '1em', fontFamily: 'TwReg' }}>
                                    Microsoft Azure, Google Cloud Platform, Git, Adobe Creative Cloud
                                </Typography>
                                <br />
                        </div>
                    </div>
                </div>
                {/* <div style={{ height: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <KeyboardArrowDownIcon onClick={this.scrollWin} style={{ cursor: 'pointer', height: '40px', width: '40px', color: '#fff' }} />
            </div> */}
            </div>
        }
        return (
            stuff
        )
    }
}

export default About
