
const apitasks=async (claim)=>{
    
      return await fetch("https://react-fallacifier-extension.onrender.com/claim",{
        method:"POST",
        headers:{
           "content-type":"application/json"
        },
        body:JSON.stringify({claim:claim}),
    }).then(async(res)=>{
        const response=await res.json()
        return response
    })
    .then((res)=>{
        return(res)
    }).catch((err)=>{
        console.log("Something went wrong: ",err.message);
        
    })
}


export default apitasks