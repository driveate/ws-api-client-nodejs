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
    define(['ApiClient', 'model/Generation', 'model/Make', 'model/Model', 'model/RimAgregation', 'model/TiresAggregation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Generation'), require('./Make'), require('./Model'), require('./RimAgregation'), require('./TiresAggregation'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.ModelWithTires = factory(root.ws_api_client.ApiClient, root.ws_api_client.Generation, root.ws_api_client.Make, root.ws_api_client.Model, root.ws_api_client.RimAgregation, root.ws_api_client.TiresAggregation);
  }
}(this, function(ApiClient, Generation, Make, Model, RimAgregation, TiresAggregation) {
  'use strict';




  /**
   * The ModelWithTires model module.
   * @module model/ModelWithTires
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelWithTires</code>.
   * @alias module:model/ModelWithTires
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ModelWithTires</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelWithTires} obj Optional instance to populate.
   * @return {module:model/ModelWithTires} The populated <code>ModelWithTires</code> instance.
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
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
      }
      if (data.hasOwnProperty('years')) {
        obj['years'] = ApiClient.convertToType(data['years'], ['Number']);
      }
      if (data.hasOwnProperty('generations')) {
        obj['generations'] = ApiClient.convertToType(data['generations'], [Generation]);
      }
      if (data.hasOwnProperty('tires')) {
        obj['tires'] = TiresAggregation.constructFromObject(data['tires']);
      }
      if (data.hasOwnProperty('rims')) {
        obj['rims'] = ApiClient.convertToType(data['rims'], {'String': RimAgregation});
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
   * Selected year (e.g. `2015`, can be __*`null`*__)
   * @member {Number} year
   */
  exports.prototype['year'] = undefined;
  /**
   * Model production years
   * @member {Array.<Number>} years
   */
  exports.prototype['years'] = undefined;
  /**
   * @member {Array.<module:model/Generation>} generations
   */
  exports.prototype['generations'] = undefined;
  /**
   * @member {module:model/TiresAggregation} tires
   */
  exports.prototype['tires'] = undefined;
  /**
   * Each key is bolt pattern, e.g. *`5x105`*
   * @member {Object.<String, module:model/RimAgregation>} rims
   */
  exports.prototype['rims'] = undefined;



  return exports;
}));


