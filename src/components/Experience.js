import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'yellow', }}>
                <Grid container>
                    <Grid style={{ backgroundColor: '#fff', height: '100vh', width: 50, }} xs={12} sm={6}>

                    </Grid>
                    <Grid style={{ backgroundColor: '#ffbf00', height: '100vh', width: 50, }} xs={12} sm={6}>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Experience
