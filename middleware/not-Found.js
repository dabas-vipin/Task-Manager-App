const notFound = (req,res)=>{
     res.status(404).send('The requested resource doesnt exist')
}

module.exports = notFound
