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
    define(['ApiClient', 'model/Model', 'model/ModelWithTires'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Model'), require('../model/ModelWithTires'));
  } else {
    // Browser globals (root is window)
    if (!root.ws_api_client) {
      root.ws_api_client = {};
    }
    root.ws_api_client.ModelsApi = factory(root.ws_api_client.ApiClient, root.ws_api_client.Model, root.ws_api_client.ModelWithTires);
  }
}(this, function(ApiClient, Model, ModelWithTires) {
  'use strict';

  /**
   * Models service.
   * @module api/ModelsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ModelsApi. 
   * @alias module:api/ModelsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the modelsList operation.
     * @callback module:api/ModelsApi~modelsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Model>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of models by manufacturer
     * Get a list of models that match given manufacturer and year (if present)
     * @param {String} make Manufacturer slug name, use _**&#x60;GET /makes/&#x60;**_ to get possible values (e.g. &#x60;mitsubishi&#x60;)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year You can use _**&#x60;GET /years/&#x60;**_ to get possible years (e.g. &#x60;2015&#x60;)
     * @param {String} opts.lang Use this parameter anywhere in the API to get *&#x60;name&#x60;* field translation of the following objects: **&#x60;Make&#x60;**, **&#x60;Model&#x60;**, **&#x60;Market&#x60;**. Across the *&#x60;name&#x60;* this objects will have *&#x60;name_en&#x60;* field with original english name. By default &#x60;en&#x60; language is used.  Available languages: &#x60;en,de,ru,es,pt,fr,ja,zh-cn,zh-tw&#x60;. Currently translation works for chinese &#x60;zh-cn&#x60; language only
     * @param {module:api/ModelsApi~modelsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Model>}
     */
    this.modelsList = function(make, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'make' is set
      if (make === undefined || make === null) {
        throw new Error("Missing the required parameter 'make' when calling modelsList");
      }


      var pathParams = {
      };
      var queryParams = {
        'make': make,
        'year': opts['year'],
        'lang': opts['lang'],
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
      var returnType = [Model];

      return this.apiClient.callApi(
        '/models/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modelsRead operation.
     * @callback module:api/ModelsApi~modelsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelWithTires} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get more info about model
     * Get the detailed information about model series
     * @param {String} make Manufacturer slug name, use _**&#x60;GET /makes/&#x60;**_ to get possible values (e.g. &#x60;mitsubishi&#x60;)
     * @param {String} slug Model slug name, use _**&#x60;GET /models/&#x60;**_ to get possible values (e.g. &#x60;outlander&#x60;)
     * @param {Object} opts Optional parameters
     * @param {String} opts.lang Use this parameter anywhere in the API to get *&#x60;name&#x60;* field translation of the following objects: **&#x60;Make&#x60;**, **&#x60;Model&#x60;**, **&#x60;Market&#x60;**. Across the *&#x60;name&#x60;* this objects will have *&#x60;name_en&#x60;* field with original english name. By default &#x60;en&#x60; language is used.  Available languages: &#x60;en,de,ru,es,pt,fr,ja,zh-cn,zh-tw&#x60;. Currently translation works for chinese &#x60;zh-cn&#x60; language only
     * @param {module:api/ModelsApi~modelsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelWithTires}
     */
    this.modelsRead = function(make, slug, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'make' is set
      if (make === undefined || make === null) {
        throw new Error("Missing the required parameter 'make' when calling modelsRead");
      }

      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling modelsRead");
      }


      var pathParams = {
        'make': make,
        'slug': slug
      };
      var queryParams = {
        'lang': opts['lang'],
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
      var returnType = ModelWithTires;

      return this.apiClient.callApi(
        '/models/{make}/{slug}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the modelsReadYear operation.
     * @callback module:api/ModelsApi~modelsReadYearCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelWithTires} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get more info about model/year
     * 
     * @param {String} make Manufacturer slug name, use _**&#x60;GET /makes/&#x60;**_ to get possible values (e.g. &#x60;mitsubishi&#x60;)
     * @param {String} slug Model slug name, use _**&#x60;GET /models/&#x60;**_ to get possible values (e.g. &#x60;outlander&#x60;)
     * @param {Number} year You can use _**&#x60;GET /years/&#x60;**_ to get possible years (e.g. &#x60;2015&#x60;)
     * @param {Object} opts Optional parameters
     * @param {String} opts.lang Use this parameter anywhere in the API to get *&#x60;name&#x60;* field translation of the following objects: **&#x60;Make&#x60;**, **&#x60;Model&#x60;**, **&#x60;Market&#x60;**. Across the *&#x60;name&#x60;* this objects will have *&#x60;name_en&#x60;* field with original english name. By default &#x60;en&#x60; language is used.  Available languages: &#x60;en,de,ru,es,pt,fr,ja,zh-cn,zh-tw&#x60;. Currently translation works for chinese &#x60;zh-cn&#x60; language only
     * @param {module:api/ModelsApi~modelsReadYearCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelWithTires}
     */
    this.modelsReadYear = function(make, slug, year, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'make' is set
      if (make === undefined || make === null) {
        throw new Error("Missing the required parameter 'make' when calling modelsReadYear");
      }

      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling modelsReadYear");
      }

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling modelsReadYear");
      }


      var pathParams = {
        'make': make,
        'slug': slug,
        'year': year
      };
      var queryParams = {
        'lang': opts['lang'],
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
      var returnType = ModelWithTires;

      return this.apiClient.callApi(
        '/models/{make}/{slug}/{year}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
