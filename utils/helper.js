export const filterData = (searchText,restaurants)=>{
    const filteredData = restaurants.filter((rest)=>
    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  };