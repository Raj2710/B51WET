const ApiRoutes = {
    LOGIN:{
        path:'/user/login',
        authenticate:false
    },
    USERS:{
        path:'/user',
        authenticate:true
    }
}

export default ApiRoutes