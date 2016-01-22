'use strict';

export default class SignUpController {
  constructor(UserService) {
    this._UserService = UserService;
    this.title = 'Sign up!';
    this.user = {};
    this.maxdate = new Date();
  }

  register() {
    console.log(this.user);
    return this._UserService.createUser(this.user)
      .then(function(res) {
        console.log(res);
      })
    ;
  }
}
