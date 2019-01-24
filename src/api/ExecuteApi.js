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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Model5'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Model5'));
  } else {
    // Browser globals (root is window)
    if (!root.FabulatorApi) {
      root.FabulatorApi = {};
    }
    root.FabulatorApi.ExecuteApi = factory(root.FabulatorApi.ApiClient, root.FabulatorApi.Model5);
  }
}(this, function(ApiClient, Model5) {
  'use strict';

  /**
   * Execute service.
   * @module api/ExecuteApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ExecuteApi. 
   * @alias module:api/ExecuteApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the postExecuteV1LocalDomainKey operation.
     * @callback module:api/ExecuteApi~postExecuteV1LocalDomainKeyCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/String} domain 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model5} opts.body 
     * @param {module:api/ExecuteApi~postExecuteV1LocalDomainKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postExecuteV1LocalDomainKey = function(domain, key, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling postExecuteV1LocalDomainKey");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling postExecuteV1LocalDomainKey");
      }


      var pathParams = {
        'domain': domain,
        'key': key
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/execute/v1/local/{domain}/{key}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postExecuteV1RuleIdrule operation.
     * @callback module:api/ExecuteApi~postExecuteV1RuleIdruleCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} idrule 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model5} opts.body 
     * @param {module:api/ExecuteApi~postExecuteV1RuleIdruleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postExecuteV1RuleIdrule = function(idrule, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'idrule' is set
      if (idrule === undefined || idrule === null) {
        throw new Error("Missing the required parameter 'idrule' when calling postExecuteV1RuleIdrule");
      }


      var pathParams = {
        'idrule': idrule
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/execute/v1/rule/{idrule}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postExecuteV1RuleIdruleExampleIdexample operation.
     * @callback module:api/ExecuteApi~postExecuteV1RuleIdruleExampleIdexampleCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} idrule 
     * @param {String} idexample 
     * @param {Object} opts Optional parameters
     * @param {String} opts.idsentence 
     * @param {module:api/ExecuteApi~postExecuteV1RuleIdruleExampleIdexampleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postExecuteV1RuleIdruleExampleIdexample = function(idrule, idexample, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idrule' is set
      if (idrule === undefined || idrule === null) {
        throw new Error("Missing the required parameter 'idrule' when calling postExecuteV1RuleIdruleExampleIdexample");
      }

      // verify the required parameter 'idexample' is set
      if (idexample === undefined || idexample === null) {
        throw new Error("Missing the required parameter 'idexample' when calling postExecuteV1RuleIdruleExampleIdexample");
      }


      var pathParams = {
        'idrule': idrule,
        'idexample': idexample
      };
      var queryParams = {
        'idsentence': opts['idsentence'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/execute/v1/rule/{idrule}/example/{idexample}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));