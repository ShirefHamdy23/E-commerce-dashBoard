import React from 'react';
import { Form } from 'react-bootstrap';

import ProductCard from '../ProductCard';
// import Spinner from 'react-bootstrap/Spinner';
// import axios from 'axios';
const Home =() =>{
    // const [movies,setMovies]=useState({
    //     loading: true,
    //     results: [],
    //     err:null,
    //     reload: 0
    // })
    // const[search,setSearch]=useState("");
    // useEffect(()=>{
    //     setMovies({...movies,loading:true})
    //     axios.get("http://localhost:4000/movies",{
    //         params:{
    //             search:search,
    //         },
    //     })
    //     .then(resp=>{
    //         setMovies({...movies, results:resp.data,loading:false,err:null})


    //     })
    //     .catch(err=>{
    //         setMovies({...movies,loading:false,err:"something went wrong,please try again later",
    //     });

    //     });

    // },[movies.reload]);

    // const searchMovies=(e)=>{
    //     e.preventDefault();
    //     setMovies({...movies,reload:movies.reload+1})


    // }
    return(
        <div className="home-container px-5">
           
                    
            {/* <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
          </Spinner> */}
        
            
                
<>
                    <Form >

                    <Form.Group className="mb-3 d-flex">
                        <Form.Control type="text" required  placeholder="Search About Products" className="rounded-0"
                         />
                        <button className="btn btn-dark rounded-0">Search</button>
    
                    </Form.Group>
                </Form>
            <div className="row">
                <div className="col-3 card-movie-container">
                <ProductCard/>
                </div>
                
                
                </div>
</>
                
            
           
            

         
        </div>
    
    );
};
export default Home;
