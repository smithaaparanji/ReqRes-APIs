import { apiData } from "../fixtures";
import { APIServices } from "../services";

const apiServices = new APIServices();

//Test suite of various API tests

describe('API tests', () => {
  it('List Users Success', () => {
    apiServices.verifyListUsersAPI(apiData.listUsers);
  })

  it('User not found',() => {
    apiServices.verifyUserNotFoundAPI(apiData.usersNotFound);

  })

  it('Create Users',() => {
    apiServices.verifyUserCreation(apiData.createUser);

  })

  it('Update Users',() => {
    apiServices.verifyUserUpdate(apiData.updateUser);

  })

  it('Login successful User', () => {
    apiServices.verifyLoginUser(apiData.loginSuccessUser);

  })

  it('Login failed User', () => {
    apiServices.verifyLoginUser(apiData.loginFailedUser);

  })

  it('Login user Error', () => {
    apiServices.verifyLoginUser(apiData.loginUserError);

  })
})