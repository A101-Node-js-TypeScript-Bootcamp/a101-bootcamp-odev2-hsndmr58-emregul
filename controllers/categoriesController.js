const categoriesService =require('../services/categories')

exports.fetchCategories= async (req,res)=>{
    const response= await categoriesService.fetch()
    res.send({
        status:true,
        data:response
    })
}

exports.singleFetchCategory =async(req,res)=>{
    const response= await categoriesService.singleFetchCategory(req.params.id)
    res.send(response)
}