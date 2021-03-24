import { Card, CardContent, Typography, CardActions, Button, Grid } from "@material-ui/core";
import React from "react";
const MyCard = ({ match }) => {
    const getMatchCart = () => {
        return (
            <Card>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item> 
                           <Typography>{match}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{width:85}}src={'https://lh3.googleusercontent.com/45_WI0WMpKbvG0o_x0q0-fJcaKASEv7SstV97IB66y3EqFQ7ETDZBhdbbzb7kpmAlAs=s200'} alt="" />
                            {/* <img className="col-1" src={require("../img/vs.jpg") } alt="" /> */}
                        </Grid>
                        <Grid item>
                        <Typography>team</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                    <Button variant="contained">Show Detail</Button>
                    <Button variant="contained">{new Date().toString()}
                    </Button>
                    </Grid>
                </CardActions>
                 
            </Card>
        );
    };
    return getMatchCart();
};
    
export default MyCard;