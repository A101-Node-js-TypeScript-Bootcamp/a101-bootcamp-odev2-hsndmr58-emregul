const categoriesService =require('../services/categories')

exports.fetchCategories= async (req,res)=>{
    const response= await categoriesService.fetch()//api ile aldığımız veriyi response sabitine atıyoruz.
    res.send({
        status:true,
        data:response//categoriesService.fetch functionu ile çektiğimiz veriyi responsa send ediyoruz
    })
}

exports.singleFetchCategory =async(req,res)=>{
    const response= await categoriesService.singleFetchCategory(req.params.id)
    res.send(response)
}