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
    instance = new ws_api_client.ModelsApi();
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

  describe('ModelsApi', function() {
    describe('modelsList', function() {
      it('should call modelsList successfully', function(done) {
        //uncomment below and update the code to test modelsList
        instance.modelsList('mitsubishi', {}, function(error, result) {
          if (error) throw error;
          expect(result).not.to.be.empty();
  
          instance.modelsList('mitsubishi', {year: 2015}, function(error, result2) {
            if (error) throw error;
            expect(result2).not.to.be.empty();
            expect(result2.length).to.be.lessThan(result.length);
            done();
          });
        });
      });
    });
    describe('modelsRead', function() {
      it('should call modelsRead successfully', function(done) {
        //uncomment below and update the code to test modelsRead
        instance.modelsRead('mitsubishi', 'outlander', {}, function(error, result) {
          if (error) throw error;
          expect(result).not.to.be.empty();
          done();
        });
      });
    });
    describe('modelsReadYear', function() {
      it('should call modelsReadYear successfully', function(done) {
        //uncomment below and update the code to test modelsReadYear
        instance.modelsReadYear('mitsubishi', 'outlander', 2015, {}, function(error, result) {
          if (error) throw error;
          expect(result).not.to.be.empty();
          done();
        });
      });
    });
  });

}));
