export class APIServices{

// List users API - sending request and verifying the success response
verifyListUsersAPI(listUsersData){
    return cy.request(listUsersData.requestDetails.method,listUsersData.requestDetails.url).then((res)=>{
        expect(res.status).to.eq(listUsersData.responseData.statusCode);
        expect(res.body.page).to.eq(listUsersData.responseData.page);
        expect(res.body.total_pages).to.eq(listUsersData.responseData.total_pages);
        listUsersData.responseData.data.forEach((data,index)=>{
            expect(res.body.data[index]).to.contains( listUsersData.responseData.data[index]);
        });
    })
}

// User not found API - sending request and verifying the error response
verifyUserNotFoundAPI(usersNotFoundData){
    return cy.request({
        method: usersNotFoundData.requestDetails.method,
        url : usersNotFoundData.requestDetails.url,
        failOnStatusCode: false})
        .then((res)=>{
        expect(res.status).to.eq(usersNotFoundData.responseData.statusCode);
   })
}

// Creation of users API- sending request and verifying the success response
verifyUserCreation(createUserData){
    return cy.request({
        method : createUserData.requestDetails.method,
        url : createUserData.requestDetails.url,
        body : createUserData.requestDetails.body
    }).then((res)=>{
        expect(res.status).to.eq(createUserData.responseData.statusCode);
        expect(res.body.id).to.be.not.null;
        expect(res.body.createdAt).to.be.not.null;
        });
}

// Update users API - sending request and verifying the success response
verifyUserUpdate(updateUserData){
    return cy.request(updateUserData.requestDetails.method,updateUserData.requestDetails.url).then((res)=>{
        expect(res.status).to.eq(updateUserData.responseData.statusCode);
        expect(res.body.updatedAt).to.be.not.null;
        });
}

// Login users API - sending request and verifying the success response
// Login users API - sending request and verifying the failed/error response
verifyLoginUser(loginUser){
    return cy.request({
        method : loginUser.requestDetails.method,
        url : loginUser.requestDetails.url,
        body : loginUser.requestDetails.body,
        failOnStatusCode: false

    }).then((res)=>{
        expect(res.status).to.eq(loginUser.responseData.statusCode);
        expect(res.body.token).to.be.not.null;
        if(res.body.error){
            expect(res.body.error).to.eq(loginUser.responseData.passwordError || loginUser.responseData.userError);
        }
        });
}
}
