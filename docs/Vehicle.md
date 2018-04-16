# ws_api_client.Vehicle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**market** | [**Market**](Market.md) |  | 
**body** | **String** | Body name. Used extensively for JDM market (e.g. &#x60;GG2W&#x60;, can be __*&#x60;null&#x60;*__) | 
**trim** | **String** | Trim name. It can be empty for models created for JDM market (e.g. &#x60;2.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**generation** | [**Generation**](Generation.md) |  | 
**studHoles** | **Number** | Number of stud holes (e.g. &#x60;5&#x60;, can be __*&#x60;null&#x60;*__) | 
**pcd** | **Number** | Pitch circle diameter, mm (e.g. &#x60;105&#x60;, can be __*&#x60;null&#x60;*__) | 
**centreBore** | **Number** | Centre bore diameter, mm (e.g. &#x60;48.1&#x60;, can be __*&#x60;null&#x60;*__) | 
**lockType** | **String** |  | [optional] 
**lockText** | **String** | Lock thread size (e.g. &#x60;M12 x 1.25&#x60;, can be __*&#x60;null&#x60;*__) | 
**boltPattern** | **String** | Bolt pattern (e.g. &#x60;5x105&#x60;, can be __*&#x60;N/A&#x60;*__) | 
**power** | [**Power**](Power.md) |  | [optional] 
**fuel** | **String** | Fuel (e.g. &#x60;Petrol&#x60;, can be __*&#x60;null&#x60;*__) | [optional] 
**wheels** | [**[WheelPair]**](WheelPair.md) |  | [optional] 


<a name="LockTypeEnum"></a>
## Enum: LockTypeEnum


* `nut` (value: `"nut"`)

* `bolt` (value: `"bolt"`)




<a name="LockTextEnum"></a>
## Enum: LockTextEnum


* `M10 x 1.25` (value: `"M10 x 1.25"`)

* `M12 x 1.25` (value: `"M12 x 1.25"`)

* `M12 x 1.5` (value: `"M12 x 1.5"`)

* `M12 x 1.75` (value: `"M12 x 1.75"`)

* `M14 x 1.25` (value: `"M14 x 1.25"`)

* `M14 x 1.5` (value: `"M14 x 1.5"`)

* `M14 x 2.0` (value: `"M14 x 2.0"`)

* `M16 x 1.5` (value: `"M16 x 1.5"`)

* `3/8\&quot; - 24 UNF` (value: `"3/8\\\" - 24 UNF"`)

* `7/16\&quot; - 20 UNF` (value: `"7/16\\\" - 20 UNF"`)

* `1/2\&quot; - 20 UNF` (value: `"1/2\\\" - 20 UNF"`)

* `9/16\&quot; - 18 UNF` (value: `"9/16\\\" - 18 UNF"`)




