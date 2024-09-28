import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Contents (){
    const {id} = useParams();
    const [content , setContent] = useState([]);
    const getData = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/box?id=${id}`);
            const data = await response.json();
            setContent(data[0]);
        } catch (error) {
            console.error('Error fetching data:', error); 
        }
    };
    useEffect(()=>{
        console.log(id)
        getData(id)
    }, [])
    

    return(
        <>
        <h1>글입니다.</h1>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        </>
        
    )
}
export default Contents;