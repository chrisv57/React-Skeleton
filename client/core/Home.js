import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import spidermanImg from './../assets/images/spiderman.jpg'
import {Link, withRouter} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: `md`,
        margin: 'auto',
        margintop: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 500
    }
}))
export default function Home() {
    const classes = useStyles()
    return (
        
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Home Page
                <Link to="/signin">Users</Link>
            </Typography>
            <CardMedia className={classes.media}
                image={spidermanImg} title="Spideyyy" />
            <CardContent>
                <Typography variant="body2" component="p">
                    Welcome to the Home page.
                </Typography>
            </CardContent>
        </Card>
    )
}