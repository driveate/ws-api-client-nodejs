# ws_api_client.Trim

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | Combines trim and body name. Format: __*&#x60;trim+body&#x60;*__ if both values provided, otherwise non-empty of them. (e.g. &#x60;2.0+GG2W&#x60;) | [optional] 
**name** | **String** | Format: __*&#x60;trim (body)&#x60;*__ if both values provided, otherwise non-empty of them. (e.g. &#x60;2.0 (GG2W)&#x60;) | 
**trim** | **String** | Trim name. It can be empty for models created for JDM market (e.g. &#x60;2.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**body** | **String** | Body name. Used extensively for JDM market (e.g. &#x60;GG2W&#x60;, can be __*&#x60;null&#x60;*__) | 
**generation** | **String** | Generation name (e.g. &#x60;III Restyling&#x60;, can be __*&#x60;null&#x60;*__) | [optional] 


