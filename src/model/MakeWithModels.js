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
    define(['ApiClient', 'model/Make', 'model/ModelWithTrims'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Make'), require('./ModelWithTrims'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.MakeWithModels = factory(root.ws_api_client.ApiClient, root.ws_api_client.Make, root.ws_api_client.ModelWithTrims);
  }
}(this, function(ApiClient, Make, ModelWithTrims) {
  'use strict';




  /**
   * The MakeWithModels model module.
   * @module model/MakeWithModels
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MakeWithModels</code>.
   * @alias module:model/MakeWithModels
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>MakeWithModels</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MakeWithModels} obj Optional instance to populate.
   * @return {module:model/MakeWithModels} The populated <code>MakeWithModels</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('make')) {
        obj['make'] = Make.constructFromObject(data['make']);
      }
      if (data.hasOwnProperty('models')) {
        obj['models'] = ApiClient.convertToType(data['models'], [ModelWithTrims]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Make} make
   */
  exports.prototype['make'] = undefined;
  /**
   * @member {Array.<module:model/ModelWithTrims>} models
   */
  exports.prototype['models'] = undefined;



  return exports;
}));


