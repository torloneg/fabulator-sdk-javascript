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
    define(['ApiClient', 'model/Model12', 'model/Model13', 'model/Model2', 'model/Model3', 'model/Model8'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Model12'), require('../model/Model13'), require('../model/Model2'), require('../model/Model3'), require('../model/Model8'));
  } else {
    // Browser globals (root is window)
    if (!root.FabulatorApi) {
      root.FabulatorApi = {};
    }
    root.FabulatorApi.UsersApi = factory(root.FabulatorApi.ApiClient, root.FabulatorApi.Model12, root.FabulatorApi.Model13, root.FabulatorApi.Model2, root.FabulatorApi.Model3, root.FabulatorApi.Model8);
  }
}(this, function(ApiClient, Model12, Model13, Model2, Model3, Model8) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteUsersV1Id operation.
     * @callback module:api/UsersApi~deleteUsersV1IdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/UsersApi~deleteUsersV1IdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteUsersV1Id = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUsersV1Id");
      }


      var pathParams = {
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
        '/users/v1/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersV1InfoId operation.
     * @callback module:api/UsersApi~getUsersV1InfoIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/UsersApi~getUsersV1InfoIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getUsersV1InfoId = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUsersV1InfoId");
      }


      var pathParams = {
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
        '/users/v1/info/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchUsersV1UpdateIdFieldValue operation.
     * @callback module:api/UsersApi~patchUsersV1UpdateIdFieldValueCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} field 
     * @param {String} value 
     * @param {module:api/UsersApi~patchUsersV1UpdateIdFieldValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.patchUsersV1UpdateIdFieldValue = function(id, field, value, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchUsersV1UpdateIdFieldValue");
      }

      // verify the required parameter 'field' is set
      if (field === undefined || field === null) {
        throw new Error("Missing the required parameter 'field' when calling patchUsersV1UpdateIdFieldValue");
      }

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling patchUsersV1UpdateIdFieldValue");
      }


      var pathParams = {
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
        '/users/v1/update/{id}/{field}/{value}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUsersV1Add operation.
     * @callback module:api/UsersApi~postUsersV1AddCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Model2} opts.body 
     * @param {module:api/UsersApi~postUsersV1AddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postUsersV1Add = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
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
        '/users/v1/add', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUsersV1Login operation.
     * @callback module:api/UsersApi~postUsersV1LoginCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Model3} opts.body 
     * @param {module:api/UsersApi~postUsersV1LoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postUsersV1Login = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
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
        '/users/v1/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUsersV1QuerySkipLimit operation.
     * @callback module:api/UsersApi~postUsersV1QuerySkipLimitCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} skip 
     * @param {Number} limit 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model12} opts.body 
     * @param {module:api/UsersApi~postUsersV1QuerySkipLimitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postUsersV1QuerySkipLimit = function(skip, limit, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'skip' is set
      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling postUsersV1QuerySkipLimit");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling postUsersV1QuerySkipLimit");
      }


      var pathParams = {
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
        '/users/v1/query/{skip}/{limit}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUsersV1ResetPasswordToken operation.
     * @callback module:api/UsersApi~postUsersV1ResetPasswordTokenCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} token 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model8} opts.body 
     * @param {module:api/UsersApi~postUsersV1ResetPasswordTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postUsersV1ResetPasswordToken = function(token, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling postUsersV1ResetPasswordToken");
      }


      var pathParams = {
        'token': token
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
        '/users/v1/reset_password/{token}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUsersV1SendPasswordReminderEmail operation.
     * @callback module:api/UsersApi~postUsersV1SendPasswordReminderEmailCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} email 
     * @param {module:api/UsersApi~postUsersV1SendPasswordReminderEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.postUsersV1SendPasswordReminderEmail = function(email, callback) {
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling postUsersV1SendPasswordReminderEmail");
      }


      var pathParams = {
        'email': email
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
        '/users/v1/send_password_reminder/{email}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putUsersV1UpdateId operation.
     * @callback module:api/UsersApi~putUsersV1UpdateIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Model13} opts.body 
     * @param {module:api/UsersApi~putUsersV1UpdateIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.putUsersV1UpdateId = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putUsersV1UpdateId");
      }


      var pathParams = {
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
        '/users/v1/update/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
