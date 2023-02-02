//to code for the creators
const errorHandler = ( err, req, res, next) =>{
    const statusCode = res.statuscode ? res.statusCode : 500
    
    res.status(statusCode)

    res.json({
        message : body.json(),
        stack: process.env.NODE_ENV === 'production' ? null :err.stack
    })
}




module.exports = {
    errorHandler,

}
