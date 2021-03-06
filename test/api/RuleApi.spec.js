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
    instance = new FabulatorApi.RuleApi();
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

  describe('RuleApi', function() {
    describe('deleteRuleV1Id', function() {
      it('should call deleteRuleV1Id successfully', function(done) {
        //uncomment below and update the code to test deleteRuleV1Id
        //instance.deleteRuleV1Id(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRuleV1InfoId', function() {
      it('should call getRuleV1InfoId successfully', function(done) {
        //uncomment below and update the code to test getRuleV1InfoId
        //instance.getRuleV1InfoId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchRuleV1UpdateIdFieldValue', function() {
      it('should call patchRuleV1UpdateIdFieldValue successfully', function(done) {
        //uncomment below and update the code to test patchRuleV1UpdateIdFieldValue
        //instance.patchRuleV1UpdateIdFieldValue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postRuleV1AddIddomain', function() {
      it('should call postRuleV1AddIddomain successfully', function(done) {
        //uncomment below and update the code to test postRuleV1AddIddomain
        //instance.postRuleV1AddIddomain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postRuleV1QueryIddomainSkipLimit', function() {
      it('should call postRuleV1QueryIddomainSkipLimit successfully', function(done) {
        //uncomment below and update the code to test postRuleV1QueryIddomainSkipLimit
        //instance.postRuleV1QueryIddomainSkipLimit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putRuleV1UpdateIddomainId', function() {
      it('should call putRuleV1UpdateIddomainId successfully', function(done) {
        //uncomment below and update the code to test putRuleV1UpdateIddomainId
        //instance.putRuleV1UpdateIddomainId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
