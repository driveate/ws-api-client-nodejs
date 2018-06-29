# ws_api_client.TiresApi

All URIs are relative to *https://api.wheel-size.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tiresList**](TiresApi.md#tiresList) | **GET** /tires/ | Returns a list of tires
[**tiresRead**](TiresApi.md#tiresRead) | **GET** /tires/{tire}/ | Model modifications matching given tire


<a name="tiresList"></a>
# **tiresList**
> [Tire] tiresList(opts)

Returns a list of tires

Get a list of tires with a number of matching model modifications

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.TiresApi();

var opts = { 
  'width': 8.14, // Number | Tire width, mm (e.g. `195`)
  'widthMin': 8.14, // Number | Lower bound for tire width, mm (e.g. `165`)
  'widthMax': 8.14, // Number | Upper bound for tire width, mm (e.g. `200`)
  'aspectRatio': 8.14, // Number | Aspect ratio, % (e.g. `50`)
  'aspectRatioMin': 8.14, // Number | Lower bound for aspect ratio, % (e.g. `30`)
  'aspectRatioMax': 8.14, // Number | Upper bound for aspect ratio, % (e.g. `70`)
  'rimDiameter': 8.14, // Number | Rim diameter, in (e.g. `16`)
  'rimDiameterMin': 8.14, // Number | Lower bound for rim diameter, in (e.g. `13`)
  'rimDiameterMax': 8.14, // Number | Upper bound for rim diameter, in (e.g. `20`)
  'brands': "brands_example", // String | Show information only for specified manufacturers. Use _**`GET /makes/`**_ method to get the full list. (e.g. `mitsubishi,nissan,toyota`)
  'brandsExclude': "brandsExclude_example", // String | Don't show information for specified manufacturers. Use _**`GET /makes/`**_ method to get the full list. (e.g. `geely,great-wall`)
  'countries': "countries_example", // String | Show information for local manufacturers from specified countries only. Use _**`GET /countries/`**_ method to get the full list of countries. (e.g. `us,gb,jp`)
  'countriesExclude': "countriesExclude_example" // String | Don't show information for local manufacturers from specified countries. Use _**`GET /countries/`**_ method to get the full list of countries. (e.g. `ru,ua`)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tiresList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **width** | **Number**| Tire width, mm (e.g. &#x60;195&#x60;) | [optional] 
 **widthMin** | **Number**| Lower bound for tire width, mm (e.g. &#x60;165&#x60;) | [optional] 
 **widthMax** | **Number**| Upper bound for tire width, mm (e.g. &#x60;200&#x60;) | [optional] 
 **aspectRatio** | **Number**| Aspect ratio, % (e.g. &#x60;50&#x60;) | [optional] 
 **aspectRatioMin** | **Number**| Lower bound for aspect ratio, % (e.g. &#x60;30&#x60;) | [optional] 
 **aspectRatioMax** | **Number**| Upper bound for aspect ratio, % (e.g. &#x60;70&#x60;) | [optional] 
 **rimDiameter** | **Number**| Rim diameter, in (e.g. &#x60;16&#x60;) | [optional] 
 **rimDiameterMin** | **Number**| Lower bound for rim diameter, in (e.g. &#x60;13&#x60;) | [optional] 
 **rimDiameterMax** | **Number**| Upper bound for rim diameter, in (e.g. &#x60;20&#x60;) | [optional] 
 **brands** | **String**| Show information only for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;mitsubishi,nissan,toyota&#x60;) | [optional] 
 **brandsExclude** | **String**| Don&#39;t show information for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;geely,great-wall&#x60;) | [optional] 
 **countries** | **String**| Show information for local manufacturers from specified countries only. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;us,gb,jp&#x60;) | [optional] 
 **countriesExclude** | **String**| Don&#39;t show information for local manufacturers from specified countries. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;ru,ua&#x60;) | [optional] 

### Return type

[**[Tire]**](Tire.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tiresRead"></a>
# **tiresRead**
> [MakeWithModels] tiresRead(tire, opts)

Model modifications matching given tire

Get a list of model modifications by tire

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.TiresApi();

var tire = "\"195/50R15\""; // String | Formatted tire size. Use _**`GET /tires/`**_ to get possible values (e.g. `195/50R15`)

var opts = { 
  'width': 8.14, // Number | Tire width, mm (e.g. `195`)
  'widthMin': 8.14, // Number | Lower bound for tire width, mm (e.g. `165`)
  'widthMax': 8.14, // Number | Upper bound for tire width, mm (e.g. `200`)
  'aspectRatio': 8.14, // Number | Aspect ratio, % (e.g. `50`)
  'aspectRatioMin': 8.14, // Number | Lower bound for aspect ratio, % (e.g. `30`)
  'aspectRatioMax': 8.14, // Number | Upper bound for aspect ratio, % (e.g. `70`)
  'rimDiameter': 8.14, // Number | Rim diameter, in (e.g. `16`)
  'rimDiameterMin': 8.14, // Number | Lower bound for rim diameter, in (e.g. `13`)
  'rimDiameterMax': 8.14, // Number | Upper bound for rim diameter, in (e.g. `20`)
  'lang': "lang_example", // String | Use this parameter anywhere in the API to get *`name`* field translation of the following objects: **`Make`**, **`Model`**, **`Market`**. Across the *`name`* this objects will have *`name_en`* field with original english name. By default `en` language is used.  Available languages: `en,de,ru,es,pt,fr,ja,zh-cn,zh-tw`. Currently translation works for chinese `zh-cn` language only
  'brands': "brands_example", // String | Show information only for specified manufacturers. Use _**`GET /makes/`**_ method to get the full list. (e.g. `mitsubishi,nissan,toyota`)
  'brandsExclude': "brandsExclude_example", // String | Don't show information for specified manufacturers. Use _**`GET /makes/`**_ method to get the full list. (e.g. `geely,great-wall`)
  'countries': "countries_example", // String | Show information for local manufacturers from specified countries only. Use _**`GET /countries/`**_ method to get the full list of countries. (e.g. `us,gb,jp`)
  'countriesExclude': "countriesExclude_example" // String | Don't show information for local manufacturers from specified countries. Use _**`GET /countries/`**_ method to get the full list of countries. (e.g. `ru,ua`)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tiresRead(tire, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tire** | **String**| Formatted tire size. Use _**&#x60;GET /tires/&#x60;**_ to get possible values (e.g. &#x60;195/50R15&#x60;) | 
 **width** | **Number**| Tire width, mm (e.g. &#x60;195&#x60;) | [optional] 
 **widthMin** | **Number**| Lower bound for tire width, mm (e.g. &#x60;165&#x60;) | [optional] 
 **widthMax** | **Number**| Upper bound for tire width, mm (e.g. &#x60;200&#x60;) | [optional] 
 **aspectRatio** | **Number**| Aspect ratio, % (e.g. &#x60;50&#x60;) | [optional] 
 **aspectRatioMin** | **Number**| Lower bound for aspect ratio, % (e.g. &#x60;30&#x60;) | [optional] 
 **aspectRatioMax** | **Number**| Upper bound for aspect ratio, % (e.g. &#x60;70&#x60;) | [optional] 
 **rimDiameter** | **Number**| Rim diameter, in (e.g. &#x60;16&#x60;) | [optional] 
 **rimDiameterMin** | **Number**| Lower bound for rim diameter, in (e.g. &#x60;13&#x60;) | [optional] 
 **rimDiameterMax** | **Number**| Upper bound for rim diameter, in (e.g. &#x60;20&#x60;) | [optional] 
 **lang** | **String**| Use this parameter anywhere in the API to get *&#x60;name&#x60;* field translation of the following objects: **&#x60;Make&#x60;**, **&#x60;Model&#x60;**, **&#x60;Market&#x60;**. Across the *&#x60;name&#x60;* this objects will have *&#x60;name_en&#x60;* field with original english name. By default &#x60;en&#x60; language is used.  Available languages: &#x60;en,de,ru,es,pt,fr,ja,zh-cn,zh-tw&#x60;. Currently translation works for chinese &#x60;zh-cn&#x60; language only | [optional] 
 **brands** | **String**| Show information only for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;mitsubishi,nissan,toyota&#x60;) | [optional] 
 **brandsExclude** | **String**| Don&#39;t show information for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;geely,great-wall&#x60;) | [optional] 
 **countries** | **String**| Show information for local manufacturers from specified countries only. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;us,gb,jp&#x60;) | [optional] 
 **countriesExclude** | **String**| Don&#39;t show information for local manufacturers from specified countries. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;ru,ua&#x60;) | [optional] 

### Return type

[**[MakeWithModels]**](MakeWithModels.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

