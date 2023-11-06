class headerController{
    async header(req,res){
        res.status(200).json({header_titles:["Home","About us","Contact"]})
    }
}

export default new headerController()