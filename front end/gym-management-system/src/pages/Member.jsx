import React from 'react'
import axios  from 'axios';
import { useEffect, useState } from 'react';


const Member = () => {

    
  const [MemberName, setMemberName] = useState();

     const url = "http://localhost:4000/test";

     useEffect(()=>{
    
      const fetchData = async()=>{
  
        try{
          const  result = await axios.get(url);
  
          console.log (result);
          console.log ('working');
  
  
        const needData = result.data[2];
  
        setMemberName(needData.firstName);
       
        }catch(error){
          console.log(error);
  
        }
  
        
      };
  
      fetchData();
  
    },[]);
    
 
  return(

    <div>  {MemberName}
    

    </div>



  ) ;


  
}

export default Member