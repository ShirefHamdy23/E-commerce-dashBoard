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
                    <img className="movie-image" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/mens-shoes-v2-tcc_tcm221-909628.png "alt=""/>

                </div>
                <div className='col-9'>
                    <h3>Adidas Shoes ,Sneakers &Slides |Adidas US </h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



                </p>
                <Button  className= "btn btn-dark w-100" variant="primary" type="submit">
                <Link className= "btn btn-dark w-100" to={'/payment'}> Buy Now</Link>

</Button>
                </div>

                <hr/>

                <div className="col-3">
                    <img className="movie-image" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fnike-go-flyease-black-white.jpg?w=960&cbr=1&q=90&fit=max"alt=""/>

                </div>
                <div className='col-9'>
                    <h3>Nike Go FlyEase Shoe Black </h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                </p>
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