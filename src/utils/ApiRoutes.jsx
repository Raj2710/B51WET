const ApiRoutes = {
    LOGIN:{
        path:'/user/login',
        authenticate:false
    },
    SIGNUP:{
        path:'/user/signup',
        authenticate:false
    },
    USERS:{
        path:'/user',
        authenticate:true
    }
}

export default ApiRoutes