# ws_api_client.ModelWithTrims

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | Model name (e.g. &#x60;Outlander&#x60;) | [optional] 
**name** | **String** | Model slug name (e.g. &#x60;outlander&#x60;) | [optional] 
**startYear** | **String** | Model production start year. It should be &#39;integer&#39; but it is used as &#39;string&#39; by historical reasons. | [optional] 
**endYear** | **String** | Model production end year. It should be &#39;integer&#39; but it is used as &#39;string&#39; by  historical reasons.  It equals to the __*&#x60;current year + 1&#x60;*__ if it is still in production. | [optional] 
**vehicles** | [**[TrimWithMarketAndYears]**](TrimWithMarketAndYears.md) |  | [optional] 


