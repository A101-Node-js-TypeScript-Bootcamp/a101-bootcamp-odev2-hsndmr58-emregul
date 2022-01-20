const axois=require('axios')



exports.fetch= async()=>{
    const response=await axois.get('https://api.trendyol.com/sapigw/brands');
    
    return response.data
}
exports.singleFetchBrand= async(brandId)=>{


    const response=await axois.get('https://api.trendyol.com/sapigw/brands');

    let wantedData = response.data.brands.filter(function(i) {
        
        return i.id == brandId;
      });
    
    return wantedData

}