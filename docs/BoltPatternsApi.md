# ws_api_client.BoltPatternsApi

All URIs are relative to *https://api.wheel-size.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**boltPatternsList**](BoltPatternsApi.md#boltPatternsList) | **GET** /bolt-patterns/ | Get list of bolt patterns
[**boltPatternsRead**](BoltPatternsApi.md#boltPatternsRead) | **GET** /bolt-patterns/{bolt_pattern}/ | Model modifications by bolt pattern


<a name="boltPatternsList"></a>
# **boltPatternsList**
> [BoltPattern] boltPatternsList(opts)

Get list of bolt patterns

A list of possible bolt patterns with the number of matching model modifications

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.BoltPatternsApi();

var opts = { 
  'stud': 8.14, // Number | Number of stud holes (e.g. `5`)
  'studMin': 8.14, // Number | Lower bound for number of stud holes (e.g. `4`)
  'studMax': 8.14, // Number | Upper bound for number of stud holes (e.g. `7`)
  'pcd': 8.14, // Number | Pitch circle diameter, mm (e.g. `115`)
  'pcdMin': 8.14, // Number | Lower bound for pitch circle diameter, mm (e.g. `105`)
  'pcdMax': 8.14, // Number | Upper bound for pitch circle diameter, mm (e.g. `135`)
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
apiInstance.boltPatternsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stud** | **Number**| Number of stud holes (e.g. &#x60;5&#x60;) | [optional] 
 **studMin** | **Number**| Lower bound for number of stud holes (e.g. &#x60;4&#x60;) | [optional] 
 **studMax** | **Number**| Upper bound for number of stud holes (e.g. &#x60;7&#x60;) | [optional] 
 **pcd** | **Number**| Pitch circle diameter, mm (e.g. &#x60;115&#x60;) | [optional] 
 **pcdMin** | **Number**| Lower bound for pitch circle diameter, mm (e.g. &#x60;105&#x60;) | [optional] 
 **pcdMax** | **Number**| Upper bound for pitch circle diameter, mm (e.g. &#x60;135&#x60;) | [optional] 
 **brands** | **String**| Show information only for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;mitsubishi,nissan,toyota&#x60;) | [optional] 
 **brandsExclude** | **String**| Don&#39;t show information for specified manufacturers. Use _**&#x60;GET /makes/&#x60;**_ method to get the full list. (e.g. &#x60;geely,great-wall&#x60;) | [optional] 
 **countries** | **String**| Show information for local manufacturers from specified countries only. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;us,gb,jp&#x60;) | [optional] 
 **countriesExclude** | **String**| Don&#39;t show information for local manufacturers from specified countries. Use _**&#x60;GET /countries/&#x60;**_ method to get the full list of countries. (e.g. &#x60;ru,ua&#x60;) | [optional] 

### Return type

[**[BoltPattern]**](BoltPattern.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="boltPatternsRead"></a>
# **boltPatternsRead**
> [MakeWithModels] boltPatternsRead(boltPattern, opts)

Model modifications by bolt pattern

Get a list of model modifications matching to the given bolt pattern

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.BoltPatternsApi();

var boltPattern = "\"5x105\""; // String | Bolt pattern combines number of stud holes and pitch circle diameter. Use _**`GET /bolt-patterns/`**_ to get possible values (e.g. `5x105`)

var opts = { 
  'rimDiameter': 8.14, // Number | Rim diameter, in (e.g. `16`)
  'rimWidth': 8.14, // Number | Rim width, in (e.g. `7`)
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
apiInstance.boltPatternsRead(boltPattern, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boltPattern** | **String**| Bolt pattern combines number of stud holes and pitch circle diameter. Use _**&#x60;GET /bolt-patterns/&#x60;**_ to get possible values (e.g. &#x60;5x105&#x60;) | 
 **rimDiameter** | **Number**| Rim diameter, in (e.g. &#x60;16&#x60;) | [optional] 
 **rimWidth** | **Number**| Rim width, in (e.g. &#x60;7&#x60;) | [optional] 
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

