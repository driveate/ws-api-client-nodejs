/**
 * Wheel Fitment API
 * The Wheel Fitment API allows for programmatic access to the database of www.wheel-size.com and its services. Use this API to retrieve information about vehicle fitment database for rims and tires, including OE and option fitments, and plus/minus sizing fitment information. A variety of country and language specific options are available. The coverage of fitment data for vehicles manufactured since 2000 is nearly 100%.  The information about fitment data is updated on a daily basis.
 *
 * OpenAPI spec version: v1
 * Contact: info@wheel-size.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Wheel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Wheel'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.WheelPair = factory(root.ws_api_client.ApiClient, root.ws_api_client.Wheel);
  }
}(this, function(ApiClient, Wheel) {
  'use strict';




  /**
   * The WheelPair model module.
   * @module model/WheelPair
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WheelPair</code>.
   * @alias module:model/WheelPair
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>WheelPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WheelPair} obj Optional instance to populate.
   * @return {module:model/WheelPair} The populated <code>WheelPair</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('showing_fp_only')) {
        obj['showing_fp_only'] = ApiClient.convertToType(data['showing_fp_only'], 'Boolean');
      }
      if (data.hasOwnProperty('is_stock')) {
        obj['is_stock'] = ApiClient.convertToType(data['is_stock'], 'Boolean');
      }
      if (data.hasOwnProperty('front')) {
        obj['front'] = Wheel.constructFromObject(data['front']);
      }
      if (data.hasOwnProperty('rear')) {
        obj['rear'] = Wheel.constructFromObject(data['rear']);
      }
    }
    return obj;
  }

  /**
   * Show front pair only
   * @member {Boolean} showing_fp_only
   */
  exports.prototype['showing_fp_only'] = undefined;
  /**
   * Original Equipment (OE)
   * @member {Boolean} is_stock
   */
  exports.prototype['is_stock'] = undefined;
  /**
   * @member {module:model/Wheel} front
   */
  exports.prototype['front'] = undefined;
  /**
   * @member {module:model/Wheel} rear
   */
  exports.prototype['rear'] = undefined;



  return exports;
}));


