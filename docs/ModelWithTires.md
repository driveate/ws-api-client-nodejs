# ws_api_client.ModelWithTires

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**make** | [**Make**](Make.md) |  | 
**model** | [**Model**](Model.md) |  | 
**year** | **Number** | Selected year (e.g. &#x60;2015&#x60;, can be __*&#x60;null&#x60;*__) | 
**years** | **[Number]** | Model production years | [optional] 
**generations** | [**[Generation]**](Generation.md) |  | 
**tires** | [**TiresAggregation**](TiresAggregation.md) |  | [optional] 
**rims** | [**{String: RimAgregation}**](RimAgregation.md) | Each key is bolt pattern, e.g. *&#x60;5x105&#x60;* | [optional] 


