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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.BoltPattern = factory(root.ws_api_client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BoltPattern model module.
   * @module model/BoltPattern
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BoltPattern</code>.
   * @alias module:model/BoltPattern
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>BoltPattern</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoltPattern} obj Optional instance to populate.
   * @return {module:model/BoltPattern} The populated <code>BoltPattern</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pattern')) {
        obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
      }
      if (data.hasOwnProperty('stud')) {
        obj['stud'] = ApiClient.convertToType(data['stud'], 'Number');
      }
      if (data.hasOwnProperty('pcd')) {
        obj['pcd'] = ApiClient.convertToType(data['pcd'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Formatted bolt pattern (e.g. `5x105`)
   * @member {String} pattern
   */
  exports.prototype['pattern'] = undefined;
  /**
   * Stud holes number (e.g. `5`)
   * @member {Number} stud
   */
  exports.prototype['stud'] = undefined;
  /**
   * Pitch circle diameter, mm (e.g. `105`)
   * @member {Number} pcd
   */
  exports.prototype['pcd'] = undefined;
  /**
   * Number of vehicles matching bolt pattern
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;



  return exports;
}));


