# ws_api_client.VehiclesApi

All URIs are relative to *https://api.wheel-size.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vehiclesList**](VehiclesApi.md#vehiclesList) | **GET** /vehicles/ | Find OE and option fitments by model/year/trim


<a name="vehiclesList"></a>
# **vehiclesList**
> [Vehicle] vehiclesList(make, model, year, opts)

Find OE and option fitments by model/year/trim

Find OE and option fitments that match the given manufacturer, model, year and trim.  Please use _**&#x60;GET /search/by_model/&#x60;**_ instead as it is deprecated at the current moment.

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.VehiclesApi();

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
apiInstance.vehiclesList(make, model, year, opts, callback);
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

