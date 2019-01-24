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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FabulatorApi) {
      root.FabulatorApi = {};
    }
    root.FabulatorApi.Model2 = factory(root.FabulatorApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Model2 model module.
   * @module model/Model2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Model2</code>.
   * @alias module:model/Model2
   * @class
   * @param email {String} 
   * @param password {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param role {module:model/Model2.RoleEnum} 
   */
  var exports = function(email, password, firstName, lastName, role) {
    var _this = this;

    _this['email'] = email;
    _this['password'] = password;
    _this['first_name'] = firstName;
    _this['last_name'] = lastName;
    _this['role'] = role;
  };

  /**
   * Constructs a <code>Model2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model2} obj Optional instance to populate.
   * @return {module:model/Model2} The populated <code>Model2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * @member {module:model/Model2.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "admin"
     * @const
     */
    "admin": "admin"  };


  return exports;
}));


