# ws_api_client.SearchApi

All URIs are relative to *https://api.wheel-size.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchByHfTireList**](SearchApi.md#searchByHfTireList) | **GET** /search/by_hf_tire/ | Find models matching given high flotation tire
[**searchByModelList**](SearchApi.md#searchByModelList) | **GET** /search/by_model/ | Find OE and option fitments by model/year/trim
[**searchByRimList**](SearchApi.md#searchByRimList) | **GET** /search/by_rim/ | Find models matching given rim parameters
[**searchByTireList**](SearchApi.md#searchByTireList) | **GET** /search/by_tire/ | Find models matching given tire parameters


<a name="searchByHfTireList"></a>
# **searchByHfTireList**
> [MakeWithModels] searchByHfTireList(tireDiameter, tireSectionWidth, rimDiameterHf, opts)

Find models matching given high flotation tire

Get a list of model modifications that match the given tire size in high flotation sizing system

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.SearchApi();

var tireDiameter = 31; // Number | Tire diameter, in (e.g. `31`)

var tireSectionWidth = 10.5; // Number | Tire section width, in (e.g. `10.5`)

var rimDiameterHf = 15; // Number | Rim diameter, in (e.g. `15`)

var opts = { 
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
apiInstance.searchByHfTireList(tireDiameter, tireSectionWidth, rimDiameterHf, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tireDiameter** | **Number**| Tire diameter, in (e.g. &#x60;31&#x60;) | 
 **tireSectionWidth** | **Number**| Tire section width, in (e.g. &#x60;10.5&#x60;) | 
 **rimDiameterHf** | **Number**| Rim diameter, in (e.g. &#x60;15&#x60;) | 
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

<a name="searchByModelList"></a>
# **searchByModelList**
> [Vehicle] searchByModelList(make, model, year, opts)

Find OE and option fitments by model/year/trim

Find OE and option fitments that match the given manufacturer, model, year and trim.  **It&#39;s an alias** for _**&#x60;GET /vehicles/&#x60;**_ method

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.SearchApi();

var make = "\"mitsubishi\""; // String | Manufacturer slug name, use _**`GET /makes/`**_ to get possible values (e.g. `mitsubishi`)

var model = "\"outlander\""; // String | Model slug name, use _**`GET /models/`**_ to get possible values (e.g. `outlander`)

var year = 2015; // Number | You can use _**`GET /years/`**_ to get possible years (e.g. `2015`)

var opts = { 
  'trim': "trim_example", // String | Use *`slug`* from _**`GET /trims/`**_ methods here. (e.g. `20-dla-gg2w-iii-restyling`)
  'onlyOem': true, // Boolean | Show only original equipment wheels
  'lang': "lang_example" // String | Use this parameter anywhere in the API to get *`name`* field translation of the following objects: **`Make`**, **`Model`**, **`Market`**. Across the *`name`* this objects will have *`name_en`* field with original english name. By default `en` language is used.  Available languages: `en,de,ru,es,pt,fr,ja,zh-cn,zh-tw`. Currently translation works for chinese `zh-cn` language only
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchByModelList(make, model, year, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **make** | **String**| Manufacturer slug name, use _**&#x60;GET /makes/&#x60;**_ to get possible values (e.g. &#x60;mitsubishi&#x60;) | 
 **model** | **String**| Model slug name, use _**&#x60;GET /models/&#x60;**_ to get possible values (e.g. &#x60;outlander&#x60;) | 
 **year** | **Number**| You can use _**&#x60;GET /years/&#x60;**_ to get possible years (e.g. &#x60;2015&#x60;) | 
 **trim** | **String**| Use *&#x60;slug&#x60;* from _**&#x60;GET /trims/&#x60;**_ methods here. (e.g. &#x60;20-dla-gg2w-iii-restyling&#x60;) | [optional] 
 **onlyOem** | **Boolean**| Show only original equipment wheels | [optional] 
 **lang** | **String**| Use this parameter anywhere in the API to get *&#x60;name&#x60;* field translation of the following objects: **&#x60;Make&#x60;**, **&#x60;Model&#x60;**, **&#x60;Market&#x60;**. Across the *&#x60;name&#x60;* this objects will have *&#x60;name_en&#x60;* field with original english name. By default &#x60;en&#x60; language is used.  Available languages: &#x60;en,de,ru,es,pt,fr,ja,zh-cn,zh-tw&#x60;. Currently translation works for chinese &#x60;zh-cn&#x60; language only | [optional] 

### Return type

[**[Vehicle]**](Vehicle.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchByRimList"></a>
# **searchByRimList**
> [MakeWithModels] searchByRimList(boltPattern, rimDiameter, rimWidth, opts)

Find models matching given rim parameters

Get a list of model modifications that match the given rim parameters, grouped by manufacturer.  It&#39;s an alias for _**&#x60;GET /bolt-patterns/{bolt_pattern}/&#x60;**_        method with given path and query parameters.

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.SearchApi();

var boltPattern = "\"5x105\""; // String | Bolt pattern combines number of stud holes and pitch circle diameter. Use _**`GET /bolt-patterns/`**_ to get possible values (e.g. `5x105`)

var rimDiameter = 16; // Number | Rim diameter, in (e.g. `16`)

var rimWidth = 7; // Number | Rim width, in (e.g. `7`)

var opts = { 
  'offset': 8.14, // Number | Rim offset, mm (e.g. `40`)
  'offsetMin': 8.14, // Number | Lower bound for rim offset, mm (e.g. `35`)
  'offsetMax': 8.14, // Number | Upper bound for rim offset, mm (e.g. `45`)
  'cb': 8.14, // Number | Centre bore value, mm (e.g. `60`)
  'cbMin': 8.14, // Number | Lower bound for centre bore value, mm (e.g. `55`)
  'cbMax': 8.14, // Number | Upper bound for centre bore value, mm (e.g. `65`)
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
apiInstance.searchByRimList(boltPattern, rimDiameter, rimWidth, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boltPattern** | **String**| Bolt pattern combines number of stud holes and pitch circle diameter. Use _**&#x60;GET /bolt-patterns/&#x60;**_ to get possible values (e.g. &#x60;5x105&#x60;) | 
 **rimDiameter** | **Number**| Rim diameter, in (e.g. &#x60;16&#x60;) | 
 **rimWidth** | **Number**| Rim width, in (e.g. &#x60;7&#x60;) | 
 **offset** | **Number**| Rim offset, mm (e.g. &#x60;40&#x60;) | [optional] 
 **offsetMin** | **Number**| Lower bound for rim offset, mm (e.g. &#x60;35&#x60;) | [optional] 
 **offsetMax** | **Number**| Upper bound for rim offset, mm (e.g. &#x60;45&#x60;) | [optional] 
 **cb** | **Number**| Centre bore value, mm (e.g. &#x60;60&#x60;) | [optional] 
 **cbMin** | **Number**| Lower bound for centre bore value, mm (e.g. &#x60;55&#x60;) | [optional] 
 **cbMax** | **Number**| Upper bound for centre bore value, mm (e.g. &#x60;65&#x60;) | [optional] 
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

<a name="searchByTireList"></a>
# **searchByTireList**
> [MakeWithModels] searchByTireList(tireWidth, aspectRatio, rimDiameter, opts)

Find models matching given tire parameters

Get a list of model modifications matching given tire, grouped by manufacturer.  It&#39;s an alias for _**&#x60;GET /tire/{tire}/&#x60;**_ method  (tire configuration is combined of required tire width, aspect ratio and rim diameter).

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.SearchApi();

var tireWidth = 195; // Number | Tire width, mm (e.g. `195`)

var aspectRatio = 50; // Number | Aspect ratio, % (e.g. `50`)

var rimDiameter = 16; // Number | Rim diameter, in (e.g. `16`)

var opts = { 
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
apiInstance.searchByTireList(tireWidth, aspectRatio, rimDiameter, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tireWidth** | **Number**| Tire width, mm (e.g. &#x60;195&#x60;) | 
 **aspectRatio** | **Number**| Aspect ratio, % (e.g. &#x60;50&#x60;) | 
 **rimDiameter** | **Number**| Rim diameter, in (e.g. &#x60;16&#x60;) | 
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

