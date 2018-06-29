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
    define(['ApiClient', 'model/Market'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Market'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.TrimWithMarketAndYears = factory(root.ws_api_client.ApiClient, root.ws_api_client.Market);
  }
}(this, function(ApiClient, Market) {
  'use strict';




  /**
   * The TrimWithMarketAndYears model module.
   * @module model/TrimWithMarketAndYears
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TrimWithMarketAndYears</code>.
   * @alias module:model/TrimWithMarketAndYears
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TrimWithMarketAndYears</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrimWithMarketAndYears} obj Optional instance to populate.
   * @return {module:model/TrimWithMarketAndYears} The populated <code>TrimWithMarketAndYears</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('trim')) {
        obj['trim'] = ApiClient.convertToType(data['trim'], 'String');
      }
      if (data.hasOwnProperty('market')) {
        obj['market'] = Market.constructFromObject(data['market']);
      }
      if (data.hasOwnProperty('years')) {
        obj['years'] = ApiClient.convertToType(data['years'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * Trim name (e.g. `2.0`, can be __*`null`*__)
   * @member {String} trim
   */
  exports.prototype['trim'] = undefined;
  /**
   * @member {module:model/Market} market
   */
  exports.prototype['market'] = undefined;
  /**
   * Production years for these trim and market
   * @member {Array.<Number>} years
   */
  exports.prototype['years'] = undefined;



  return exports;
}));


