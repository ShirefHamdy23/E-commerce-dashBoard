import React from 'react';
import "../src/component/style/Mobiles.css"
// // import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


 const Mobiles=()=>{
//     let{ id}=useParams();
    
//     const[movie,setMovie]=useState({
//         loading: true,
//         results:null,
//         err:null,
//     });
//     useEffect(()=>{
//         setMovie({...movie,loading:true})
//         axios.get("http://localhost:4000/movies/"+id )
//         .then(resp=>{
//             setMovie({...movie, result:resp.data,loading:false,err:null})


//         })
//         .catch(err=>{
//             setMovie({...movie,loading:false,err:"something went wrong,please try again later",
//         });

//         });

//     },[]);

    return(
        <div className='movie-details.container p-5'>
           
            <div className='row'>
                <div className="col-3">
                    <img className="movie-image" src="https://mob4me.com/Assets/front/images/mobile/iphone-11-pro-large.jpg"alt=""/>

                </div>
                <div className='col-9'>
                    <h3>IPhone 11 Pro </h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



                </p>
                <div class="price">
								<h4>PRICE : $100</h4>
				</div>
                <Button  className= "btn btn-dark w-100" variant="primary" type="submit">
                <Link className= "btn btn-dark w-100" to={'/payment'}> Buy Now</Link>

</Button>
                </div>

                <hr/>

                <div className="col-3">
                    <img className="movie-image" src="https://m.media-amazon.com/images/I/718a8zLqyAL.jpg"alt=""/>

                </div>
                <div className='col-9'>
                    <h3>Samsung A52s </h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                </p>
                <div class="price">
								<h4>PRICE : $50</h4>
				</div>
                <Button  className= "btn btn-dark w-100" variant="primary" type="submit">
                <Link className= "btn btn-dark w-100" to={'/payment'}> Buy Now</Link>

</Button>


                </div>
                
            </div>
            <hr/>
            
            <h5 className="text-center bg-dark text-white p-2">Review Products</h5>
            


        
        </div>
    );
};
export default Mobiles;