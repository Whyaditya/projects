const Heading = ()=>{
    const da = new Date();
   
    const day = da.getDay();
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const date = da.getDate();
    const year = da.getFullYear();

    const month = ['Jan','Feb','March','Apr','may','June','july','Aug','Sep','Oct','Nov','Dec']
    const m = da.getMonth();

    
    
    return(
        <div>
        <h1 className="head">To Do App</h1>
        <h5 >-{days[day]}, {month[m]} {date} {year} </h5>
        </div>
    );

};

export default Heading;