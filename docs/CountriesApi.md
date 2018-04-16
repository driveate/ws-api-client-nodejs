# ws_api_client.CountriesApi

All URIs are relative to *https://api.wheel-size.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesList**](CountriesApi.md#countriesList) | **GET** /countries/ | Returns a list of countries


<a name="countriesList"></a>
# **countriesList**
> [Country] countriesList()

Returns a list of countries

List of possible countries to be used in any other API method. Indended to be used in case you want to restrict results for several countries.

### Example
```javascript
var ws_api_client = require('ws-api-client-nodejs');
var defaultClient = ws_api_client.ApiClient.instance;

// Configure API key authorization: user_key
var user_key = defaultClient.authentications['user_key'];
user_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//user_key.apiKeyPrefix = 'Token';

var apiInstance = new ws_api_client.CountriesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Country]**](Country.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

