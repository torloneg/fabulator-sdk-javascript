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
    instance = new FabulatorApi.DomainApi();
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

  describe('DomainApi', function() {
    describe('deleteDomainV1Id', function() {
      it('should call deleteDomainV1Id successfully', function(done) {
        //uncomment below and update the code to test deleteDomainV1Id
        //instance.deleteDomainV1Id(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDomainV1InfoId', function() {
      it('should call getDomainV1InfoId successfully', function(done) {
        //uncomment below and update the code to test getDomainV1InfoId
        //instance.getDomainV1InfoId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchDomainV1UpdateIdFieldValue', function() {
      it('should call patchDomainV1UpdateIdFieldValue successfully', function(done) {
        //uncomment below and update the code to test patchDomainV1UpdateIdFieldValue
        //instance.patchDomainV1UpdateIdFieldValue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDomainV1Add', function() {
      it('should call postDomainV1Add successfully', function(done) {
        //uncomment below and update the code to test postDomainV1Add
        //instance.postDomainV1Add(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDomainV1QuerySkipLimit', function() {
      it('should call postDomainV1QuerySkipLimit successfully', function(done) {
        //uncomment below and update the code to test postDomainV1QuerySkipLimit
        //instance.postDomainV1QuerySkipLimit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putDomainV1UpdateId', function() {
      it('should call putDomainV1UpdateId successfully', function(done) {
        //uncomment below and update the code to test putDomainV1UpdateId
        //instance.putDomainV1UpdateId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
