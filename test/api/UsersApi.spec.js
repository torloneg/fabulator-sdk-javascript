/**
 * Fabulator API
 * Endpoint Fabulator project
 *
 * OpenAPI spec version: 1.0.0
 * Contact: torloneg@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FabulatorApi);
  }
}(this, function(expect, FabulatorApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FabulatorApi.UsersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {
    describe('deleteUsersV1Id', function() {
      it('should call deleteUsersV1Id successfully', function(done) {
        //uncomment below and update the code to test deleteUsersV1Id
        //instance.deleteUsersV1Id(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersV1InfoId', function() {
      it('should call getUsersV1InfoId successfully', function(done) {
        //uncomment below and update the code to test getUsersV1InfoId
        //instance.getUsersV1InfoId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchUsersV1UpdateIdFieldValue', function() {
      it('should call patchUsersV1UpdateIdFieldValue successfully', function(done) {
        //uncomment below and update the code to test patchUsersV1UpdateIdFieldValue
        //instance.patchUsersV1UpdateIdFieldValue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUsersV1Add', function() {
      it('should call postUsersV1Add successfully', function(done) {
        //uncomment below and update the code to test postUsersV1Add
        //instance.postUsersV1Add(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUsersV1Login', function() {
      it('should call postUsersV1Login successfully', function(done) {
        //uncomment below and update the code to test postUsersV1Login
        //instance.postUsersV1Login(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUsersV1QuerySkipLimit', function() {
      it('should call postUsersV1QuerySkipLimit successfully', function(done) {
        //uncomment below and update the code to test postUsersV1QuerySkipLimit
        //instance.postUsersV1QuerySkipLimit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUsersV1ResetPasswordToken', function() {
      it('should call postUsersV1ResetPasswordToken successfully', function(done) {
        //uncomment below and update the code to test postUsersV1ResetPasswordToken
        //instance.postUsersV1ResetPasswordToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUsersV1SendPasswordReminderEmail', function() {
      it('should call postUsersV1SendPasswordReminderEmail successfully', function(done) {
        //uncomment below and update the code to test postUsersV1SendPasswordReminderEmail
        //instance.postUsersV1SendPasswordReminderEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putUsersV1UpdateId', function() {
      it('should call putUsersV1UpdateId successfully', function(done) {
        //uncomment below and update the code to test putUsersV1UpdateId
        //instance.putUsersV1UpdateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
