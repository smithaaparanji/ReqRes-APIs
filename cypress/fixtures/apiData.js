export const apiData = {
    listUsers : {
        requestDetails:{
            method: 'GET',
            url : 'https://reqres.in/api/users?page=2',
        },
       
        responseData:{
            statusCode : 200,
            page : 2,
            total_pages : 2,
            data: [
                {
                    id: 7,
                    email: "michael.lawson@reqres.in",
                    first_name: "Michael",
                    last_name: "Lawson",
                    avatar: "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                    id: 8,
                    email: "lindsay.ferguson@reqres.in",
                    first_name: "Lindsay",
                    last_name: "Ferguson",
                    avatar: "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                    id: 9,
                    email: "tobias.funke@reqres.in",
                    first_name: "Tobias",
                    last_name: "Funke",
                    avatar: "https://reqres.in/img/faces/9-image.jpg"
                },
            ]
        }
    } ,
    
    usersNotFound:{
        requestDetails:{
            method: 'GET',
            url : 'https://reqres.in/api/users/23',
        },
       
        responseData:{
            statusCode : 404,
    }
    },

    createUser:{
        requestDetails:{
            method: 'POST',
            url : 'https://reqres.in/api/users',
            body:
            {
                name: "John",
                job: "Automation Tester"
            }
        },
       
        responseData:{
            statusCode : 201,
           
        }
    },

   updateUser:{
        requestDetails:{
            method: 'PUT',
            url : 'https://reqres.in/api/users/2',
            body:
            {
                name: "John Doe",
                job: "Automation User"
            }
        },
       
        responseData:{
            statusCode : 200,
           
        }
    },
   loginSuccessUser:{
        requestDetails:{
            method: 'POST',
            url : 'https://reqres.in/api/login',
            body:
            {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        },
       
        responseData:{
            statusCode : 200,
           
        }
    },

    loginFailedUser:{
        requestDetails:{
            method: 'POST',
            url : 'https://reqres.in/api/login',
            body:
            {
                email: "eve.holt@reqres.in"
            }
        },
       
        responseData:{
            statusCode : 400,
            passwordError: "Missing password",
           
           
        }
    },

    loginUserError:{
        requestDetails:{
            method: 'POST',
            url : 'https://reqres.in/api/login',
            body:
            {
                email: "loginFailed@gmail.com",
                password : "aaaaa"
            }
        },
       
        responseData:{
            statusCode : 400,
            userError : "user not found"
           
        }
    }

}
