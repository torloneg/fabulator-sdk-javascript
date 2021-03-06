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
    root.FabulatorApi.Model7 = factory(root.FabulatorApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Model7 model module.
   * @module model/Model7
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Model7</code>.
   * @alias module:model/Model7
   * @class
   * @param name {String} 
   * @param text {String} 
   * @param position {Number} 
   * @param status {Number} 
   */
  var exports = function(name, text, position, status) {
    var _this = this;

    _this['name'] = name;
    _this['text'] = text;
    _this['position'] = position;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>Model7</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model7} obj Optional instance to populate.
   * @return {module:model/Model7} The populated <code>Model7</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


