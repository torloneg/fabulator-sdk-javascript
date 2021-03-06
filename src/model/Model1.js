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
    root.FabulatorApi.Model1 = factory(root.FabulatorApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Model1 model module.
   * @module model/Model1
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Model1</code>.
   * @alias module:model/Model1
   * @class
   * @param name {String} 
   * @param description {String} 
   * @param color {String} 
   * @param language {module:model/Model1.LanguageEnum} 
   * @param status {Number} 
   */
  var exports = function(name, description, color, language, status) {
    var _this = this;

    _this['name'] = name;
    _this['description'] = description;
    _this['color'] = color;
    _this['language'] = language;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>Model1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model1} obj Optional instance to populate.
   * @return {module:model/Model1} The populated <code>Model1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
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
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * @member {module:model/Model1.LanguageEnum} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>language</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LanguageEnum = {
    /**
     * value: "it-IT"
     * @const
     */
    "it-IT": "it-IT",
    /**
     * value: "en-EN"
     * @const
     */
    "en-EN": "en-EN"  };


  return exports;
}));


