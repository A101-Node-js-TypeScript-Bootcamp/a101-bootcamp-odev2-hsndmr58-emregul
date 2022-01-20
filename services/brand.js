const axois=require('axios')


exports.fetch= async()=>{
    const response=await axois.get('https://api.trendyol.com/sapigw/brands');
    
    return response.data
}