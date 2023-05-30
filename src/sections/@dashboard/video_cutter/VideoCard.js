import PropTypes from 'prop-types';
import { Box, Link,Button, Card, Grid, Avatar, Typography, CardContent, CardHeader } from '@mui/material';

VideoCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
  handleClick: PropTypes.func
};

export default function VideoCard({ post, index, handleClick }) {
  const { image, title,description, createdAt } = post;

  return (
    <Grid item >
        <div style={{ display: 'flex',minWidth:1000, flexDirection:'row',justifyContent : 'space-between', backgroundColor:'rgba(236, 236, 236)', padding:10, borderRadius:10, marginTop:0}}>    
            <div  >
                <img alt="nextui logo" src={`../assets/images/img/${image}`} width={500} style={{ borderRadius:10,}}  />
            </div>
            <div style={{width:'100%',display: 'flex', flexDirection:'column',justifyContent : 'space-between',padding:10,borderRadius:10, margin:10}}>
                <div >
                    <p style={{margin:0, fontWeight:'bold', fontSize:18}}> {title}</p>
                    <p style={{margin:0, fontWeight:'bold', fontSize:14}}>{description}</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row', justifyContent : 'flex-end'}}>
                    <Button variant="contained" style={{width:100}}  onClick={()=>handleClick(post,'watch')}>
                        Watch
                    </Button>
                    <Button variant="contained" style={{width:100, marginLeft:10}}  onClick={()=>handleClick(post,'edit')}>
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    </Grid>
  );
}
