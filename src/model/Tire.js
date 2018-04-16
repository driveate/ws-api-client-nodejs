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
    root.ws_api_client.Tire = factory(root.ws_api_client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tire model module.
   * @module model/Tire
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Tire</code>.
   * @alias module:model/Tire
   * @class
   * @param width {Number} Tire section width, mm (e.g. `195`)
   * @param aspectRatio {Number} Tire aspect ratio, % (e.g. `55`)
   * @param rimDiameter {Number} Rim diameter, in (e.g. `16`)
   * @param count {Number} Number of vehicles matching tire size
   */
  var exports = function(width, aspectRatio, rimDiameter, count) {
    var _this = this;


    _this['width'] = width;
    _this['aspect_ratio'] = aspectRatio;
    _this['rim_diameter'] = rimDiameter;
    _this['count'] = count;
  };

  /**
   * Constructs a <code>Tire</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tire} obj Optional instance to populate.
   * @return {module:model/Tire} The populated <code>Tire</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tire')) {
        obj['tire'] = ApiClient.convertToType(data['tire'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('aspect_ratio')) {
        obj['aspect_ratio'] = ApiClient.convertToType(data['aspect_ratio'], 'Number');
      }
      if (data.hasOwnProperty('rim_diameter')) {
        obj['rim_diameter'] = ApiClient.convertToType(data['rim_diameter'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Formatted tire size (e.g. `225/55R18`)
   * @member {String} tire
   */
  exports.prototype['tire'] = undefined;
  /**
   * Tire section width, mm (e.g. `195`)
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * Tire aspect ratio, % (e.g. `55`)
   * @member {Number} aspect_ratio
   */
  exports.prototype['aspect_ratio'] = undefined;
  /**
   * Rim diameter, in (e.g. `16`)
   * @member {Number} rim_diameter
   */
  exports.prototype['rim_diameter'] = undefined;
  /**
   * Number of vehicles matching tire size
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;



  return exports;
}));

