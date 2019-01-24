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
    define(['ApiClient', 'model/Model14', 'model/Model4', 'model/Model9'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Model14'), require('../model/Model4'), require('../model/Model9'));
  } else {
    // Browser globals (root is window)
    if (!root.FabulatorApi) {
      root.FabulatorApi = {};
    }
    root.FabulatorApi.ExampleApi = factory(root.FabulatorApi.ApiClient, root.FabulatorApi.Model14, root.FabulatorApi.Model4, root.FabulatorApi.Model9);
  }
}(this, function(ApiClient, Model14, Model4, Model9) {
  'use strict';

  /**
   * Example service.
   * @module api/ExampleApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ExampleApi. 
   * @alias module:api/ExampleApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteExampleV1IddomainId operation.
     * @callback module:api/ExampleApi~deleteExampleV1IddomainIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} iddomain 
     * @param {String} id 
     * @param {module:api/ExampleApi~deleteExampleV1IddomainIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteExampleV1IddomainId = function(iddomain, id, callback) {
      var postBody = null;

      // verify the required parameter 'iddomain' is set
      if (iddomain === undefined || iddomain === null) {
        throw new Error("Missing the required parameter 'iddomain' when calling deleteExampleV1IddomainId");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteExampleV1IddomainId");
      }


      var pathParams = {
        'iddomain': iddomain,
        'id': id
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
        '/example/v1/{iddomain}/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExampleV1InfoIddomainId operation.
     * @callback module:api/ExampleApi~getExampleV1InfoIddomainIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} iddomain 
     * @param {String} id 
     * @param {module:api/ExampleApi~getExampleV1InfoIddomainIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getExampleV1InfoIddomainId = function(iddomain, id, callback) {
      var postBody = null;

      // verify the required parameter 'iddomain' is set
      if (iddomain === undefined || iddomain === null) {
        throw new Error("Missing the required parameter 'iddomain' when calling getExampleV1InfoIddomainId");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getExampleV1InfoIddomainId");
      }


      var pathParams = {
        'iddomain': iddomain,
        'id': id
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
        '/example/v1/info/{iddomain}/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchExampleV1UpdateIddomainIdFieldValue operation.
     * @callback module:api/ExampleApi~patchExampleV1UpdateIddomainIdFieldValueCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} iddomain 
     * @param {String} id 
     * @param {String} field 
     * @param {String} value 
     * @param {module:api/ExampleApi~patchExampleV1UpdateIddomainIdFieldValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.patchExampleV1UpdateIddomainIdFieldValue = function(iddomain, id, field, value, callback) {
      var postBody = null;

      // verify the required parameter 'iddomain' is set
      if (iddomain === undefined || iddomain === null) {
        throw new Error("Missing the required parameter 'iddomain' when calling patchExampleV1UpdateIddomainIdFieldValue");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchExampleV1UpdateIddomainIdFieldValue");
      }

      // verify the required parameter 'field' is set
      if (field === undefined || field === null) {
        throw new Error("Missing the required parameter 'field' when calling patchExampleV1UpdateIddomainIdFieldValue");
      }

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling patchExampleV1UpdateIddomainIdFieldValue");
      }


      var pathParams = {
        'iddomain': iddomain,
        'id': id,
        'field': field,
        'value': value
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
        '/example/v1/update/{iddomain}/{id}/{field}/{value}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postExampleV1AddIddomain operation.
     * @callback module:api/ExampleApi~postExampleV1AddIddomainCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} iddomain 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model4} opts.body 
     * @param {module:api/ExampleApi~postExampleV1AddIddomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postExampleV1AddIddomain = function(iddomain, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'iddomain' is set
      if (iddomain === undefined || iddomain === null) {
        throw new Error("Missing the required parameter 'iddomain' when calling postExampleV1AddIddomain");
      }


      var pathParams = {
        'iddomain': iddomain
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
        '/example/v1/add/{iddomain}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postExampleV1QueryIddomainSkipLimit operation.
     * @callback module:api/ExampleApi~postExampleV1QueryIddomainSkipLimitCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} iddomain 
     * @param {Number} skip 
     * @param {Number} limit 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model9} opts.body 
     * @param {module:api/ExampleApi~postExampleV1QueryIddomainSkipLimitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postExampleV1QueryIddomainSkipLimit = function(iddomain, skip, limit, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'iddomain' is set
      if (iddomain === undefined || iddomain === null) {
        throw new Error("Missing the required parameter 'iddomain' when calling postExampleV1QueryIddomainSkipLimit");
      }

      // verify the required parameter 'skip' is set
      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling postExampleV1QueryIddomainSkipLimit");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling postExampleV1QueryIddomainSkipLimit");
      }


      var pathParams = {
        'iddomain': iddomain,
        'skip': skip,
        'limit': limit
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
        '/example/v1/query/{iddomain}/{skip}/{limit}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putExampleV1UpdateIddomainId operation.
     * @callback module:api/ExampleApi~putExampleV1UpdateIddomainIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} iddomain 
     * @param {String} id 
     * @param {module:api/ExampleApi~putExampleV1UpdateIddomainIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.putExampleV1UpdateIddomainId = function(iddomain, id, callback) {
      var postBody = null;

      // verify the required parameter 'iddomain' is set
      if (iddomain === undefined || iddomain === null) {
        throw new Error("Missing the required parameter 'iddomain' when calling putExampleV1UpdateIddomainId");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putExampleV1UpdateIddomainId");
      }


      var pathParams = {
        'iddomain': iddomain,
        'id': id
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
        '/example/v1/update/{iddomain}/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putExampleV1UpdateJsonIddomainId operation.
     * @callback module:api/ExampleApi~putExampleV1UpdateJsonIddomainIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} iddomain 
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model14} opts.body 
     * @param {module:api/ExampleApi~putExampleV1UpdateJsonIddomainIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.putExampleV1UpdateJsonIddomainId = function(iddomain, id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'iddomain' is set
      if (iddomain === undefined || iddomain === null) {
        throw new Error("Missing the required parameter 'iddomain' when calling putExampleV1UpdateJsonIddomainId");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putExampleV1UpdateJsonIddomainId");
      }


      var pathParams = {
        'iddomain': iddomain,
        'id': id
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
        '/example/v1/update_json/{iddomain}/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
