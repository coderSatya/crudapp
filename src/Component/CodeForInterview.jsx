import { Box, Typography, makeStyles } from '@material-ui/core';
import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';
import './Style.css';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        // <Box className={classes.component}>
        //     <Typography variant="h4" style={{textAlign:'center'}}>WELCOME</Typography>
        //     <Box style={{display: 'flex'}}>
        //        <p>
        //         In this project I have performed crud operation. I have used React, Material Ui for api I have used JSON server.
        //         In this application you can view, add, edit and delete records.Hope you like my project. Thank You.

        //        </p>
               
        //     </Box>
        // </Box>
        <>
        <h1 className='wel'>Welcome</h1>
        <div className='container'>
            <div className='row'>
                <div className='col' >
                    <div className='home'>
                In this project I have performed crud operation. I have used React, Material Ui for api I have used JSON server.
               In this application you can view, add, edit and delete records.Hope you like my project. Thank You.
                    </div>
                </div>
            </div>

        </div>
        </>
    
    )
}

export default CodeForInterview;