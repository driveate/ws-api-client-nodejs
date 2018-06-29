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
    define(['ApiClient', 'model/BoltPattern', 'model/MakeWithModels'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BoltPattern'), require('../model/MakeWithModels'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.BoltPatternsApi = factory(root.ws_api_client.ApiClient, root.ws_api_client.BoltPattern, root.ws_api_client.MakeWithModels);
  }
}(this, function(ApiClient, BoltPattern, MakeWithModels) {
  'use strict';

  /**
   * BoltPatterns service.
   * @module api/BoltPatternsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new BoltPatternsApi. 
   * @alias module:api/BoltPatternsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the boltPatternsList operation.
     * @callback module:api/BoltPatternsApi~boltPatternsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BoltPattern>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of bolt patterns
     * A list of possible bolt patterns with the number of matching model modifications
     * @param {Object} opts Optional parameters
     * @param {Number} opts.stud Number of stud holes (e.g. &#x60;5&#x60;)
     * @param {Number} opts.studMin Lower bound for number of stud holes (e.g. &#x60;4&#x60;)
     * @param {Number} opts.studMax Upper bound for number of stud holes (e.g. &#x60;7&#x60;)
     * @param {Number} opts.pcd Pitch circle diameter, mm (e.g. &#x60;115&#x60;)
     * @param {Number} opts.pcdMin Lower bound for pitch circle diameter, mm (e.g. &#x60;105&#x60;)
     * @param {Number} opts.pcdMax Upper bound for pitch circle diameter, mm (e.g. &#x60;135&#x60;)
     * @param {String} opts.brands Show information only for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;mitsubishi,nissan,toyota&#x60;)
     * @param {String} opts.brandsExclude Don&#39;t show information for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;geely,great-wall&#x60;)
     * @param {String} opts.countries Show information for local manufacturers from specified countries only. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;us,gb,jp&#x60;)
     * @param {String} opts.countriesExclude Don&#39;t show information for local manufacturers from specified countries. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;ru,ua&#x60;)
     * @param {module:api/BoltPatternsApi~boltPatternsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BoltPattern>}
     */
    this.boltPatternsList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'stud': opts['stud'],
        'stud_min': opts['studMin'],
        'stud_max': opts['studMax'],
        'pcd': opts['pcd'],
        'pcd_min': opts['pcdMin'],
        'pcd_max': opts['pcdMax'],
        'brands': opts['brands'],
        'brands_exclude': opts['brandsExclude'],
        'countries': opts['countries'],
        'countries_exclude': opts['countriesExclude'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['user_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [BoltPattern];

      return this.apiClient.callApi(
        '/bolt-patterns/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the boltPatternsRead operation.
     * @callback module:api/BoltPatternsApi~boltPatternsReadCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MakeWithModels>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Model modifications by bolt pattern
     * Get a list of model modifications matching to the given bolt pattern
     * @param {String} boltPattern Bolt pattern combines number of stud holes and pitch circle diameter. Use _**&#x60;GET /bolt-patterns/&#x60;**_ to get possible values (e.g. &#x60;5x105&#x60;)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.rimDiameter Rim diameter, in (e.g. &#x60;16&#x60;)
     * @param {Number} opts.rimWidth Rim width, in (e.g. &#x60;7&#x60;)
     * @param {Number} opts.offset Rim offset, mm (e.g. &#x60;40&#x60;)
     * @param {Number} opts.offsetMin Lower bound for rim offset, mm (e.g. &#x60;35&#x60;)
     * @param {Number} opts.offsetMax Upper bound for rim offset, mm (e.g. &#x60;45&#x60;)
     * @param {Number} opts.cb Centre bore value, mm (e.g. &#x60;60&#x60;)
     * @param {Number} opts.cbMin Lower bound for centre bore value, mm (e.g. &#x60;55&#x60;)
     * @param {Number} opts.cbMax Upper bound for centre bore value, mm (e.g. &#x60;65&#x60;)
     * @param {String} opts.lang Use this parameter anywhere in the API to get *&#x60;name&#x60;* field translation of the following objects: **&#x60;Make&#x60;**, **&#x60;Model&#x60;**, **&#x60;Market&#x60;**. Across the *&#x60;name&#x60;* this objects will have *&#x60;name_en&#x60;* field with original english name. By default &#x60;en&#x60; language is used.  Available languages: &#x60;en,de,ru,es,pt,fr,ja,zh-cn,zh-tw&#x60;. Currently translation works for chinese &#x60;zh-cn&#x60; language only
     * @param {String} opts.brands Show information only for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;mitsubishi,nissan,toyota&#x60;)
     * @param {String} opts.brandsExclude Don&#39;t show information for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;geely,great-wall&#x60;)
     * @param {String} opts.countries Show information for local manufacturers from specified countries only. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;us,gb,jp&#x60;)
     * @param {String} opts.countriesExclude Don&#39;t show information for local manufacturers from specified countries. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;ru,ua&#x60;)
     * @param {module:api/BoltPatternsApi~boltPatternsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MakeWithModels>}
     */
    this.boltPatternsRead = function(boltPattern, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'boltPattern' is set
      if (boltPattern === undefined || boltPattern === null) {
        throw new Error("Missing the required parameter 'boltPattern' when calling boltPatternsRead");
      }


      var pathParams = {
        'bolt_pattern': boltPattern
      };
      var queryParams = {
        'rim_diameter': opts['rimDiameter'],
        'rim_width': opts['rimWidth'],
        'offset': opts['offset'],
        'offset_min': opts['offsetMin'],
        'offset_max': opts['offsetMax'],
        'cb': opts['cb'],
        'cb_min': opts['cbMin'],
        'cb_max': opts['cbMax'],
        'lang': opts['lang'],
        'brands': opts['brands'],
        'brands_exclude': opts['brandsExclude'],
        'countries': opts['countries'],
        'countries_exclude': opts['countriesExclude'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['user_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [MakeWithModels];

      return this.apiClient.callApi(
        '/bolt-patterns/{bolt_pattern}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
