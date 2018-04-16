# ws_api_client.YearsApi

All URIs are relative to *https://api.wheel-size.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**yearsList**](YearsApi.md#yearsList) | **GET** /years/ | Returns list of years for the given manufacturer/model


<a name="yearsList"></a>
# **yearsList**
> [Year] yearsList(make, opts)

Returns list of years for the given manufacturer/model

Get a list of years that match the given manufacturer and model (if present)

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.YearsApi();

var make = "\"mitsubishi\""; // String | Manufacturer slug name, use _**`GET /makes/`**_ to get possible values (e.g. `mitsubishi`)

var opts = { 
  'model': "model_example" // String | Model slug name, use _**`GET /models/`**_ to get possible values (e.g. `outlander`)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.yearsList(make, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **make** | **String**| Manufacturer slug name, use _**&#x60;GET /makes/&#x60;**_ to get possible values (e.g. &#x60;mitsubishi&#x60;) | 
 **model** | **String**| Model slug name, use _**&#x60;GET /models/&#x60;**_ to get possible values (e.g. &#x60;outlander&#x60;) | [optional] 

### Return type

[**[Year]**](Year.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

