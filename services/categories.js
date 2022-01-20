const axois=require('axios')


exports.fetch= async()=>{
    const response=await axois.get('https://api.trendyol.com/sapigw/product-categories');
    return response.data
}

exports.singleFetchCategory= async(categoryId)=>{
    try{
        const response=await axois.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`);
        return {
            status:true,
            data:response.data
        }
    }
    catch{ 
            return {
                status:false,
                message:"Böyle bir kategori yok"
            }
    }
    
    
}
