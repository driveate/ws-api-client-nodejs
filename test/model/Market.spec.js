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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ws_api_client);
  }
}(this, function(expect, ws_api_client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ws_api_client.Market();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Market', function() {
    it('should create an instance of Market', function() {
      // uncomment below and update the code to test Market
      //var instance = new ws_api_client.Market();
      //expect(instance).to.be.a(ws_api_client.Market);
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new ws_api_client.Market();
      //expect(instance).to.be();
    });

    it('should have the property abbr (base name: "abbr")', function() {
      // uncomment below and update the code to test the property abbr
      //var instance = new ws_api_client.Market();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ws_api_client.Market();
      //expect(instance).to.be();
    });

    it('should have the property nameEn (base name: "name_en")', function() {
      // uncomment below and update the code to test the property nameEn
      //var instance = new ws_api_client.Market();
      //expect(instance).to.be();
    });

  });

}));
