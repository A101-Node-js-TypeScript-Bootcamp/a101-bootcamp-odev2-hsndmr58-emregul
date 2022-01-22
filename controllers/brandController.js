const brandService =require('../services/brand')

exports.fetchBrand= async (req,res)=>{
    const response= await brandService.fetch()//api ile aldığımız veriyi response sabitine atıyoruz.
    res.send({
        status:true,
        data:response//brandService.fetch functionu ile çektiğimiz veriyi responsa send ediyoruz
    })
}

exports.singleFetchBrand =async(req,res)=>{
    const response= await brandService.singleFetchBrand(req.params.id)
    res.send(response)
}