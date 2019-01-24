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
    define(['ApiClient', 'model/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.FabulatorApi) {
      root.FabulatorApi = {};
    }
    root.FabulatorApi.Model12 = factory(root.FabulatorApi.ApiClient, root.FabulatorApi.Order);
  }
}(this, function(ApiClient, Order) {
  'use strict';




  /**
   * The Model12 model module.
   * @module model/Model12
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Model12</code>.
   * @alias module:model/Model12
   * @class
   * @param select {String} 
   * @param query {String} 
   */
  var exports = function(select, query) {
    var _this = this;

    _this['select'] = select;

    _this['query'] = query;
  };

  /**
   * Constructs a <code>Model12</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model12} obj Optional instance to populate.
   * @return {module:model/Model12} The populated <code>Model12</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('select')) {
        obj['select'] = ApiClient.convertToType(data['select'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = Order.constructFromObject(data['order']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} select
   * @default '{}'
   */
  exports.prototype['select'] = '{}';
  /**
   * @member {module:model/Order} order
   */
  exports.prototype['order'] = undefined;
  /**
   * @member {String} query
   * @default '{"role":"user"}'
   */
  exports.prototype['query'] = '{"role":"user"}';



  return exports;
}));


