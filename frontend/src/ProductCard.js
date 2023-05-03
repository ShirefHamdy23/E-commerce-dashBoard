// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import "../src/component/style/ProductCard.css";
import { Link } from 'react-router-dom';
const ProductCard =()=>{
    return(
        <div className="images-1">
         
         <Card>
      <Card.Img className ="firstbrand " variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4bei_OFs1V6QaJjWk_u8OrGBmPshnv9byQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Mobiles</Card.Title>
        <Card.Text>
        Best Mobile Phones 
        </Card.Text>
        <Link className= "btn btn-dark" to={'/mobiles'}> Visit Us</Link>
      </Card.Body>
    </Card>
    
   < Card>
      <Card.Img className ="firstbrand " variant="top" src="https://footwearnews.com/wp-content/uploads/2018/04/nike-adidas.jpg?w=1024" />
      <Card.Body>
        <Card.Title>Brands
        </Card.Title>
        <Card.Text>

           Brands Like nike , addidas
        </Card.Text>
        <Link className= "btn btn-dark" to={'brands'}> Visit Us</Link>
      </Card.Body>
    </Card>

    < Card>
      <Card.Img className ="firstbrand "  variant="top" src="https://media.istockphoto.com/id/687958304/photo/sony-play-station-4-and-dualshock-video-game-console.jpg?s=612x612&w=0&k=20&c=TjYQMjUchhSuoWd9P3z4XE-E_QddhruFMKVq644RmIE=" />
      <Card.Body>
        <Card.Title>Gaming</Card.Title>
        <Card.Text>
        Gaming Center
        </Card.Text>
        <Link className= "btn btn-dark" to={'/gaming'}> Visit Us</Link>
      </Card.Body>
    </Card>


    

        </div>
        
        
    )
}
export default ProductCard;