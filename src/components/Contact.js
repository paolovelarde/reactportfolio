import React, { Component } from 'react';
import { Typography, Box } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';

const styles = {
    root:{
        height:'10vh',
        paddingLeft: '10vw',
        paddingRight:'10vw',
        backgroundColor: '#272727'
    },
    main:{
        height:'100%',
    },
    title:{
        fontFamily:'PDBlack',
        fontSize:'9vh',
        color:'#272727',
        marginBottom: 15
    },
    subtitle:{
        fontFamily:'TwReg', 
        fontSize:'3vh', 
        color:'#fff',
    },
    icon:{
        marginLeft: '2.5vw',
        marginRight: '2.5vw'
    }
}

class Contact extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Box style={styles.main} display="flex" justifyContent="center" alignItems="center">
                    <SocialIcon style={styles.icon} bgColor='transparent' fgColor='#fff' url="mailto:paolo.velarde@mail.utoronto.ca" />
                    <SocialIcon style={styles.icon} fgColor='#fff' bgColor='transparent' url="https://www.linkedin.com/in/paolo-mendez-velarde/" />
                    <SocialIcon style={styles.icon} fgColor='#fff' bgColor='transparent' url="https://github.com/paolovelarde" />
                </Box>
            </div>
        )
    }
}

export default Contact;