# ws_api_client.TrimsApi

All URIs are relative to *https://api.wheel-size.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trimsList**](TrimsApi.md#trimsList) | **GET** /trims/ | Model modifications


<a name="trimsList"></a>
# **trimsList**
> [Trim] trimsList(make, model, year)

Model modifications

List of model modifications matching given manufacturer, model and year

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.TrimsApi();

var make = "\"mitsubishi\""; // String | Manufacturer slug name, use _**`GET /makes/`**_ to get possible values (e.g. `mitsubishi`)

var model = "\"outlander\""; // String | Model slug name, use _**`GET /models/`**_ to get possible values (e.g. `outlander`)

var year = 2015; // Number | You can use _**`GET /years/`**_ to get possible years (e.g. `2015`)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trimsList(make, model, year, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **make** | **String**| Manufacturer slug name, use _**&#x60;GET /makes/&#x60;**_ to get possible values (e.g. &#x60;mitsubishi&#x60;) | 
 **model** | **String**| Model slug name, use _**&#x60;GET /models/&#x60;**_ to get possible values (e.g. &#x60;outlander&#x60;) | 
 **year** | **Number**| You can use _**&#x60;GET /years/&#x60;**_ to get possible years (e.g. &#x60;2015&#x60;) | 

### Return type

[**[Trim]**](Trim.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

