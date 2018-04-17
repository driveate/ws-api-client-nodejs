# ws-api-client-nodejs

The Wheel Fitment API allows for programmatic access to the database of www.wheel-size.com and its services. Use this API to retrieve information about vehicle fitment database for rims and tires, including OE and option fitments, and plus/minus sizing fitment information. A variety of country and language specific options are available. The coverage of fitment data for vehicles manufactured since 2000 is nearly 100%.  The information about fitment data is updated on a daily basis.

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ws-api-client-nodejs --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your ws-api-client-nodejs from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('ws-api-client-nodejs')` in javascript files from the directory you ran the last 
command above from.

#### git

```shell
    npm install driveate/ws-api-client-nodejs --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ws_api_client = require('ws-api-client-nodejs');

var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = "YOUR API KEY"

var api = new ws_api_client.MakesApi()

var opts = { 
  'countries': "us,gb,jp", // {String} Show information for local manufacturers from specified countries only. Use `GET /countries/` method to get the full list of countries. (e.g. `us,gb,jp`)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
};
api.makesList(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.wheel-size.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ws_api_client.BoltPatternsApi* | [**boltPatternsList**](docs/BoltPatternsApi.md#boltPatternsList) | **GET** /bolt-patterns/ | Get list of bolt patterns
*ws_api_client.BoltPatternsApi* | [**boltPatternsRead**](docs/BoltPatternsApi.md#boltPatternsRead) | **GET** /bolt-patterns/{bolt_pattern}/ | Model modifications by bolt pattern
*ws_api_client.CountriesApi* | [**countriesList**](docs/CountriesApi.md#countriesList) | **GET** /countries/ | Returns a list of countries
*ws_api_client.GenerationsApi* | [**generationsList**](docs/GenerationsApi.md#generationsList) | **GET** /generations/ | Generations for the given model
*ws_api_client.MakesApi* | [**makesList**](docs/MakesApi.md#makesList) | **GET** /makes/ | Returns a list of manufacturers
*ws_api_client.MarketsApi* | [**marketsList**](docs/MarketsApi.md#marketsList) | **GET** /markets/ | Returns a list of markets/regions
*ws_api_client.ModelsApi* | [**modelsList**](docs/ModelsApi.md#modelsList) | **GET** /models/ | Returns a list of models by manufacturer
*ws_api_client.ModelsApi* | [**modelsRead**](docs/ModelsApi.md#modelsRead) | **GET** /models/{make}/{slug}/ | Get more info about model
*ws_api_client.ModelsApi* | [**modelsReadYear**](docs/ModelsApi.md#modelsReadYear) | **GET** /models/{make}/{slug}/{year}/ | Get more info about model/year
*ws_api_client.SearchApi* | [**searchByHfTireList**](docs/SearchApi.md#searchByHfTireList) | **GET** /search/by_hf_tire/ | Find models matching given high flotation tire
*ws_api_client.SearchApi* | [**searchByModelList**](docs/SearchApi.md#searchByModelList) | **GET** /search/by_model/ | Find OE and option fitments by model/year/trim
*ws_api_client.SearchApi* | [**searchByRimList**](docs/SearchApi.md#searchByRimList) | **GET** /search/by_rim/ | Find models matching given rim parameters
*ws_api_client.SearchApi* | [**searchByTireList**](docs/SearchApi.md#searchByTireList) | **GET** /search/by_tire/ | Find models matching given tire parameters
*ws_api_client.TiresApi* | [**tiresList**](docs/TiresApi.md#tiresList) | **GET** /tires/ | Returns a list of tires
*ws_api_client.TiresApi* | [**tiresRead**](docs/TiresApi.md#tiresRead) | **GET** /tires/{tire}/ | Model modifications matching given tire
*ws_api_client.TrimsApi* | [**trimsList**](docs/TrimsApi.md#trimsList) | **GET** /trims/ | Model modifications
*ws_api_client.VehiclesApi* | [**vehiclesList**](docs/VehiclesApi.md#vehiclesList) | **GET** /vehicles/ | Find OE and option fitments by model/year/trim
*ws_api_client.YearsApi* | [**yearsList**](docs/YearsApi.md#yearsList) | **GET** /years/ | Returns list of years for the given manufacturer/model


## Documentation for Models

 - [ws_api_client.Aggregation](docs/Aggregation.md)
 - [ws_api_client.Body](docs/Body.md)
 - [ws_api_client.BoltPattern](docs/BoltPattern.md)
 - [ws_api_client.Country](docs/Country.md)
 - [ws_api_client.Generation](docs/Generation.md)
 - [ws_api_client.Make](docs/Make.md)
 - [ws_api_client.MakeWithModels](docs/MakeWithModels.md)
 - [ws_api_client.Market](docs/Market.md)
 - [ws_api_client.Model](docs/Model.md)
 - [ws_api_client.ModelWithTires](docs/ModelWithTires.md)
 - [ws_api_client.ModelWithTrims](docs/ModelWithTrims.md)
 - [ws_api_client.Power](docs/Power.md)
 - [ws_api_client.Pressure](docs/Pressure.md)
 - [ws_api_client.RimAgregation](docs/RimAgregation.md)
 - [ws_api_client.SizeAggregation](docs/SizeAggregation.md)
 - [ws_api_client.Tire](docs/Tire.md)
 - [ws_api_client.TiresAggregation](docs/TiresAggregation.md)
 - [ws_api_client.Trim](docs/Trim.md)
 - [ws_api_client.TrimWithMarketAndYears](docs/TrimWithMarketAndYears.md)
 - [ws_api_client.Vehicle](docs/Vehicle.md)
 - [ws_api_client.Wheel](docs/Wheel.md)
 - [ws_api_client.WheelPair](docs/WheelPair.md)
 - [ws_api_client.Year](docs/Year.md)


## Documentation for Authorization


### user_key

- **Type**: API key
- **API key parameter name**: user_key
- **Location**: URL query string

