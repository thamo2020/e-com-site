import React from 'react'
import './picGrid.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import images from '../../constant/images';

const PicGrid = () => {
  return (
    <div>
         <div>
        <div class="row">
            <div class="column">
                           
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={images.pic1}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Girl's Top
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            $13 <br/>
                            In stock
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                           
                        </div>
            <div class="column">
                
            <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={images.pic2}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Kid's Toy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        $20 <br/>
                        In stock
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
               
            </div>
            <div class="column">
            <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={images.pic3}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Girl's Top
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        $34 <br/>
                        In stock
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
            </div>
            <div class="column">
            <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={images.pic8}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mixture
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            $34 <br/>
                            In stock
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
            </div>
            
            <div class="column">
                           
                           <Card sx={{ maxWidth: 345 }}>
                               <CardActionArea>
                                   <CardMedia
                                   component="img"
                                   height="140"
                                   image={images.pic4}
                                   alt="green iguana"
                                   />
                                   <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                       Girl's Top
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                   $150 <br/>
                                       In stock
                                   </Typography>
                                   </CardContent>
                               </CardActionArea>
                               </Card>
                                      
                                   </div>
                       <div class="column">
                           
                       <Card sx={{ maxWidth: 345 }}>
                               <CardActionArea>
                                   <CardMedia
                                   component="img"
                                   height="140"
                                   image={images.pic5}
                                   alt="green iguana"
                                   />
                                   <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                       Hand Bag
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                   $100 <br/>
                                       In stock
                                   </Typography>
                                   </CardContent>
                               </CardActionArea>
                               </Card>
                          
                       </div>
                       <div class="column">
                       <Card sx={{ maxWidth: 345 }}>
                               <CardActionArea>
                                   <CardMedia
                                   component="img"
                                   height="140"
                                   image={images.pic6}
                                   alt="green iguana"
                                   />
                                   <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                       Girl's Hat
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                   $100 <br/>
                                       In stock
                                   </Typography>
                                   </CardContent>
                               </CardActionArea>
                               </Card>
                       </div>
                       <div class="column">
                       <Card sx={{ maxWidth: 345 }}>
                               <CardActionArea>
                                   <CardMedia
                                   component="img"
                                   height="140"
                                   image={images.pic7}
                                   alt="green iguana"
                                   />
                                   <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                       Teddy Bear
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                   $113 <br/>
                                       In stock
                                   </Typography>
                                   </CardContent>
                               </CardActionArea>
                               </Card>
                       </div>
                       
        </div>
    </div>
    </div>
  )
}

export default PicGrid