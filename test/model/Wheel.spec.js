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
    instance = new ws_api_client.Wheel();
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

  describe('Wheel', function() {
    it('should create an instance of Wheel', function() {
      // uncomment below and update the code to test Wheel
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be.a(ws_api_client.Wheel);
    });

    it('should have the property tirePressure (base name: "tire_pressure")', function() {
      // uncomment below and update the code to test the property tirePressure
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property rim (base name: "rim")', function() {
      // uncomment below and update the code to test the property rim
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property rimDiameter (base name: "rim_diameter")', function() {
      // uncomment below and update the code to test the property rimDiameter
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property rimWidth (base name: "rim_width")', function() {
      // uncomment below and update the code to test the property rimWidth
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property rimOffset (base name: "rim_offset")', function() {
      // uncomment below and update the code to test the property rimOffset
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tire (base name: "tire")', function() {
      // uncomment below and update the code to test the property tire
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tireSizingSystem (base name: "tire_sizing_system")', function() {
      // uncomment below and update the code to test the property tireSizingSystem
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tireConstruction (base name: "tire_construction")', function() {
      // uncomment below and update the code to test the property tireConstruction
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tireWidth (base name: "tire_width")', function() {
      // uncomment below and update the code to test the property tireWidth
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tireAspectRatio (base name: "tire_aspect_ratio")', function() {
      // uncomment below and update the code to test the property tireAspectRatio
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tireDiameter (base name: "tire_diameter")', function() {
      // uncomment below and update the code to test the property tireDiameter
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tireSectionWidth (base name: "tire_section_width")', function() {
      // uncomment below and update the code to test the property tireSectionWidth
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property tireIs82series (base name: "tire_is_82series")', function() {
      // uncomment below and update the code to test the property tireIs82series
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property loadIndex (base name: "load_index")', function() {
      // uncomment below and update the code to test the property loadIndex
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

    it('should have the property speedIndex (base name: "speed_index")', function() {
      // uncomment below and update the code to test the property speedIndex
      //var instance = new ws_api_client.Wheel();
      //expect(instance).to.be();
    });

  });

}));
