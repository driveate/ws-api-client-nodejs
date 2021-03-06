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
    define(['ApiClient', 'model/Trim'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Trim'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.TrimsApi = factory(root.ws_api_client.ApiClient, root.ws_api_client.Trim);
  }
}(this, function(ApiClient, Trim) {
  'use strict';

  /**
   * Trims service.
   * @module api/TrimsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TrimsApi. 
   * @alias module:api/TrimsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the trimsList operation.
     * @callback module:api/TrimsApi~trimsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trim>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Model modifications
     * List of model modifications matching given manufacturer, model and year
     * @param {String} make Manufacturer slug name, use _**&#x60;GET /makes/&#x60;**_ to get possible values (e.g. &#x60;mitsubishi&#x60;)
     * @param {String} model Model slug name, use _**&#x60;GET /models/&#x60;**_ to get possible values (e.g. &#x60;outlander&#x60;)
     * @param {Number} year You can use _**&#x60;GET /years/&#x60;**_ to get possible years (e.g. &#x60;2015&#x60;)
     * @param {module:api/TrimsApi~trimsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trim>}
     */
    this.trimsList = function(make, model, year, callback) {
      var postBody = null;

      // verify the required parameter 'make' is set
      if (make === undefined || make === null) {
        throw new Error("Missing the required parameter 'make' when calling trimsList");
      }

      // verify the required parameter 'model' is set
      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling trimsList");
      }

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling trimsList");
      }


      var pathParams = {
      };
      var queryParams = {
        'make': make,
        'model': model,
        'year': year,
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
      var returnType = [Trim];

      return this.apiClient.callApi(
        '/trims/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
