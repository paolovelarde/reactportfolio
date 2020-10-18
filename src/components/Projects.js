import React, { Component } from 'react';
import yellow from '../assets/yellow.png';
import fi from '../assets/FI.png';
import csec from '../assets/csec-proj.png';
import an from '../assets/KP.png';
import mockup from '../assets/SPOT.png';
import up from '../assets/chevronUpWht.png';
import { Typography, Grid } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// eslint-disable-next-line no-restricted-globals
var screenHeight = screen.height;

class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            img: '',
            display: 'none'
        }
    }

    scrollWin(){
        window.scrollBy(0, -screenHeight*2);
    }

    overlayOn(name){
        this.setState({ img: name, display: 'block' })
    }

    overlayOff(){
        this.setState({ img: '', display: 'none' })
    }

    render() {
        // eslint-disable-next-line no-restricted-globals
        var stuff;
        // eslint-disable-next-line no-restricted-globals
        if(screen.height < 1000){
            stuff = 
            <div>
            <div onClick={() => this.overlayOff()} style = {{ height: '100vh', width: '100%', display: this.state.display, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.8)', cursor: 'pointer'  }}>
                <div onClick={() => this.overlayOff()}  style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                    <img onClick={() => this.overlayOff()}  src={this.state.img} style={{ height: '375px', width: '375px', cursor: 'pointer'}} />
                </div>
            </div>
            <div style={{ backgroundColor: '#ffbf00', height: '100vh', backgroundImage: `url(${yellow})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ marginTop: -40, width: '90%', height: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '2.5%', justifyContent: 'center'}}>
                    <Typography style={{ color: '#fff', fontSize: '3em', fontFamily: 'TwBold', }}>
                       Projects
                    </Typography>
                    <Typography style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.7em', fontFamily: 'TwBold', }}>
                        (tap preview to expand)
                    </Typography>
                    <div style={{ height: '70%', width: '100%',  display:'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: -30, marginTop: 15 }}>
                        <div style={{ height: '30%', width: '100%',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                            <div>
                                <Typography style={{ color: 'rgba(39,39,39,0.7)', fontSize: '1em', fontFamily: 'TwItalic', marginTop: 20 }}>
                                Mobile Bank App
                                </Typography>
                                <Typography style={{ color: '#fff', fontSize: '0.85em', fontFamily: 'TwReg',  }}>
                                Designed and developed during my internship at Interac
                                </Typography>
                                <div style={{ marginTop: 10, height: 20, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                        <Typography style={{ color: '#e3ad0e', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            React Native
                                        </Typography>
                                    </div>
                                    <div style={{ border: '1px solid rgba(255,255,255,0.8)', borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10  }}>
                                        <Typography style={{ color: '#fff', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            JS
                                        </Typography>
                                    </div>
                                    <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                        <Typography style={{ color: '#e3ad0e', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            TS
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={fi} style={{ height: '175px', width: '175px', }} onClick={() => this.overlayOn(fi)}/>
                            </div>
                        </div>
                        <div style={{ height: '30%', width: '100%',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <Typography style={{ color: 'rgba(39,39,39,0.7)', fontSize: '1em', fontFamily: 'TwItalic', marginTop: 20   }}>
                                Voice App
                                </Typography>
                                <Typography style={{ color: '#fff', fontSize: '0.85em', fontFamily: 'TwReg',  }}>
                                Conceptualized and brought to life at KPMG
                                </Typography>
                                <div style={{ marginTop: 10, height: 20, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                        <Typography style={{ color: '#e3ad0e', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            React
                                        </Typography>
                                    </div>
                                    <div style={{ border: '1px solid rgba(255,255,255,0.8)', borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10  }}>
                                        <Typography style={{ color: '#fff', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            node
                                        </Typography>
                                    </div>
                                    <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                        <Typography style={{ color: '#e3ad0e', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            Azure
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={an} style={{ height: '175px', width: '175px', }} onClick={() => this.overlayOn(an)}/>
                            </div>
                        </div>
                        <div style={{ height: '30%', width: '100%',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  }}>
                            
                        <div>
                                <Typography style={{ color: 'rgba(39,39,39,0.7)', fontSize: '1em', fontFamily: 'TwItalic', marginTop: 20 }}>
                                CS Enrichment Club
                                </Typography>
                                <Typography style={{ color: '#fff', fontSize: '0.85em', fontFamily: 'TwReg',  }}>
                                Some posters I made for marketing
                                </Typography>
                                <div style={{ marginTop: 10, height: 20, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div style={{ border: '1px solid rgba(255,255,255,0.8)', borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10  }}>
                                        <Typography style={{ color: '#fff', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            Photoshop
                                        </Typography>
                                    </div>
                                    <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                        <Typography style={{ color: '#e3ad0e', fontSize: '0.7em', fontFamily: 'TwBold',  }}>
                                            Illustrator
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={mockup} style={{ height: '165px', width: '165px', }} onClick={() => this.overlayOn(mockup)}/>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div style={{ width: '100%', height: '6vh', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight: '10%', paddingBottom: 15 }}>
                <KeyboardArrowUpIcon onClick={this.scrollWin} style={{ cursor: 'pointer', height: '40px', width: '40px', color: '#fff' }} />
                </div>
            </div>
            </div>
        }
        else{
        stuff =
        <div>
            <div onClick={() => this.overlayOff()} style = {{ height: '100vh', width: '100%', display: this.state.display, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.8)', cursor: 'pointer'  }}>
                <div onClick={() => this.overlayOff()}  style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                    <img onClick={() => this.overlayOff()}  src={this.state.img} style={{ height: '800px', width: '800px', cursor: 'pointer'}} />
                </div>
            </div>
            <div style={{ backgroundColor: '#ffbf00', height: '100vh', backgroundImage: `url(${yellow})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '7.5%', paddingRight: '7.5%' }}>
                <div style={{ width: '90%', height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '7.5%', }}>
                    <Typography style={{ color: '#fff', fontSize: '3em', fontFamily: 'TwBold', marginBottom: 25}}>
                        Projects
                    </Typography>
                    <div style={{ width: '90%', height: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ height: '90%', width: '30%', }}>
                            <Typography style={{ color: 'rgba(59,59,59,0.9)', fontSize: '1.5em', fontFamily: 'TwItalic', paddingLeft: '10%',  }}>
                            Mobile Bank App
                            </Typography>
                            <img src={fi} style={{ height: '400px', width: '400px', cursor: 'pointer',marginTop: -25, marginBottom: -25}} onClick={() => this.overlayOn(fi)} />
                            
                            <Typography style={{ color: '#fff', fontSize: '1em', fontFamily: 'TwReg', paddingLeft: '10%', }}>
                            Designed and developed during my internship at Interac
                            </Typography>
                            <div style={{ marginTop: 10, height: 20, width: '100%', marginLeft: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                    <Typography style={{ color: '#e3ad0e', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        React Native
                                    </Typography>
                                </div>
                                <div style={{ border: '1px solid rgba(255,255,255,0.8)', borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10  }}>
                                    <Typography style={{ color: '#fff', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        JavaScript
                                    </Typography>
                                </div>
                                <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                    <Typography style={{ color: '#e3ad0e', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        TypeScript
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '90%', width: '30%',  }}>
                        <Typography style={{ color: 'rgba(59,59,59,0.9)', fontSize: '1.5em', fontFamily: 'TwItalic', paddingLeft: '10%',}}>
                            Voice App
                            </Typography>
                            <img src={an} style={{ height: '400px', width: '400px', cursor: 'pointer',marginTop: -25, marginBottom: -25 }} onClick={() => this.overlayOn(an)}/>
                            
                            <Typography style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1em', fontFamily: 'TwReg', paddingLeft: '10%', }}>
                            Conceptualized and brought to life at KPMG
                            </Typography>
                            <div style={{ marginTop: 10, height: 20, width: '100%', marginLeft: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                    <Typography style={{ color: '#e3ad0e', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        React
                                    </Typography>
                                </div>
                                <div style={{ border: '1px solid rgba(255,255,255,0.8)', borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10  }}>
                                <Typography style={{ color: '#fff', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        Node.js
                                    </Typography>
                                </div>
                                <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                    <Typography style={{ color: '#e3ad0e', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        Microsoft Azure
                                    </Typography>
                                </div>
                                <div style={{ border: '1px solid rgba(255,255,255,0.8)', borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10  }}>
                                <Typography style={{ color: '#fff', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        Google Cloud
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '90%', width: '30%', marginTop: 25 }}>
                        <Typography style={{ color: 'rgba(59,59,59,0.9)', fontSize: '1.25em', fontFamily: 'TwItalic', paddingLeft: '10%', }}>
                            On-going mobile app
                            </Typography>
                            <img src={mockup} style={{ height: '400px', width: '400px', cursor: 'pointer',marginTop: -25, marginBottom: -25 }} onClick={() => this.overlayOn(mockup)}/>
                            
                            <Typography style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1em', fontFamily: 'TwReg', paddingLeft: '10%', }}>
                            Fitness app in progress
                            </Typography>
                            <div style={{ marginTop: 10, height: 20, width: '100%', marginLeft: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div style={{ border: '1px solid rgba(255,255,255,0.8)', borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10  }}>
                                <Typography style={{ color: '#fff', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        React Native
                                    </Typography>
                                </div>
                                <div style={{ borderRadius: 10, paddingLeft: 10, paddingRight: 10, marginRight: 10, backgroundColor: 'rgba(255,255,255,0.8)'  }}>
                                    <Typography style={{ color: '#e3ad0e', fontSize: '0.85em', fontFamily: 'TwBold',  }}>
                                        Node.js
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div style={{ height: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <KeyboardArrowUpIcon onClick={this.scrollWin} style={{ cursor: 'pointer', height: '40px', width: '40px', color: '#fff' }} />
            </div>
            </div>
            </div>
        }
        return stuff;
    }
}

export default Projects
