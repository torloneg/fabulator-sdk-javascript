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
    instance = new FabulatorApi.ExecuteApi();
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

  describe('ExecuteApi', function() {
    describe('postExecuteV1LocalDomainKey', function() {
      it('should call postExecuteV1LocalDomainKey successfully', function(done) {
        //uncomment below and update the code to test postExecuteV1LocalDomainKey
        //instance.postExecuteV1LocalDomainKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postExecuteV1RuleIdrule', function() {
      it('should call postExecuteV1RuleIdrule successfully', function(done) {
        //uncomment below and update the code to test postExecuteV1RuleIdrule
        //instance.postExecuteV1RuleIdrule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postExecuteV1RuleIdruleExampleIdexample', function() {
      it('should call postExecuteV1RuleIdruleExampleIdexample successfully', function(done) {
        //uncomment below and update the code to test postExecuteV1RuleIdruleExampleIdexample
        //instance.postExecuteV1RuleIdruleExampleIdexample(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));