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
    define(['ApiClient', 'model/Aggregation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Aggregation'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.RimAgregation = factory(root.ws_api_client.ApiClient, root.ws_api_client.Aggregation);
  }
}(this, function(ApiClient, Aggregation) {
  'use strict';




  /**
   * The RimAgregation model module.
   * @module model/RimAgregation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RimAgregation</code>.
   * Rim diameter, offset, and width values aggregated by bolt pattern
   * @alias module:model/RimAgregation
   * @class
   * @param diameter {module:model/Aggregation} 
   * @param offset {module:model/Aggregation} 
   * @param width {module:model/Aggregation} 
   */
  var exports = function(diameter, offset, width) {
    var _this = this;

    _this['diameter'] = diameter;
    _this['offset'] = offset;
    _this['width'] = width;
  };

  /**
   * Constructs a <code>RimAgregation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RimAgregation} obj Optional instance to populate.
   * @return {module:model/RimAgregation} The populated <code>RimAgregation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('diameter')) {
        obj['diameter'] = Aggregation.constructFromObject(data['diameter']);
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = Aggregation.constructFromObject(data['offset']);
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = Aggregation.constructFromObject(data['width']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Aggregation} diameter
   */
  exports.prototype['diameter'] = undefined;
  /**
   * @member {module:model/Aggregation} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * @member {module:model/Aggregation} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));

