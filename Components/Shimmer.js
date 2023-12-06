const Shimmer = () =>{
    const staticShimmerNumber = ["","","","","","","","","","","","",""];
    return <>
    <div className="card-container">
    {staticShimmerNumber.map((shim,i)=>{
                 return(<div className="Shimmercard" key={i}>
             </div>)
        })}
    </div>
        
    </>;
}

export default Shimmer;