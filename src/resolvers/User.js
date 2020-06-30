const moment = require('moment')
const createdAt = async (parent,args,context,info)=>{
    const user= await context.prisma.user({id:parent.id})
    return moment(user.createdAt).fromNow()
}

module.exports={
    createdAt
}