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
    define(['ApiClient', 'model/Body', 'model/Make', 'model/Model'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Body'), require('./Make'), require('./Model'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.GenerationWithMakeAndModel = factory(root.ws_api_client.ApiClient, root.ws_api_client.Body, root.ws_api_client.Make, root.ws_api_client.Model);
  }
}(this, function(ApiClient, Body, Make, Model) {
  'use strict';




  /**
   * The GenerationWithMakeAndModel model module.
   * @module model/GenerationWithMakeAndModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GenerationWithMakeAndModel</code>.
   * @alias module:model/GenerationWithMakeAndModel
   * @class
   * @param make {module:model/Make} 
   * @param model {module:model/Model} 
   * @param name {String} Generation name (e.g. `III Restyling`)
   * @param bodies {Array.<module:model/Body>} 
   */
  var exports = function(make, model, name, bodies) {
    var _this = this;

    _this['make'] = make;
    _this['model'] = model;
    _this['name'] = name;
    _this['bodies'] = bodies;



  };

  /**
   * Constructs a <code>GenerationWithMakeAndModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenerationWithMakeAndModel} obj Optional instance to populate.
   * @return {module:model/GenerationWithMakeAndModel} The populated <code>GenerationWithMakeAndModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('make')) {
        obj['make'] = Make.constructFromObject(data['make']);
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = Model.constructFromObject(data['model']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('bodies')) {
        obj['bodies'] = ApiClient.convertToType(data['bodies'], [Body]);
      }
      if (data.hasOwnProperty('start_year')) {
        obj['start_year'] = ApiClient.convertToType(data['start_year'], 'Number');
      }
      if (data.hasOwnProperty('end_year')) {
        obj['end_year'] = ApiClient.convertToType(data['end_year'], 'Number');
      }
      if (data.hasOwnProperty('years')) {
        obj['years'] = ApiClient.convertToType(data['years'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Make} make
   */
  exports.prototype['make'] = undefined;
  /**
   * @member {module:model/Model} model
   */
  exports.prototype['model'] = undefined;
  /**
   * Generation name (e.g. `III Restyling`)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/Body>} bodies
   */
  exports.prototype['bodies'] = undefined;
  /**
   * Generation start year
   * @member {Number} start_year
   */
  exports.prototype['start_year'] = undefined;
  /**
   * Generation end year. It equals to the __*`current year + 1`*__ if it is still in production.
   * @member {Number} end_year
   */
  exports.prototype['end_year'] = undefined;
  /**
   * Generation production years
   * @member {Array.<Number>} years
   */
  exports.prototype['years'] = undefined;



  return exports;
}));


