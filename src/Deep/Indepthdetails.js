import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import testdata from '../data/testdata'
import Frame from './Frame'
import { Authcontent } from '../App';
export default function Indepthdetails({match}) {
const [items,setitems]=useState([])
// const pa=useParams();
// const {name1}=pa;
// console.log(name1)
// const name1=match.params.id;
// console.log(name1)
const pa=useParams()
const itemname=pa.name
function seacrhfunction(data1){
   
  const searchlist=data1.filter((e)=>{
      const {name}=e;
    
       const actualname=name.match(itemname); 
       return actualname; 
  });
     
      return(setitems(searchlist));
  }
  


  useEffect(()=>{
     seacrhfunction(testdata);
  },[]);
  


  return (
    <div style={{marginTop:'40px'}} className='container'><Frame item={items}/></div>
  )
}
