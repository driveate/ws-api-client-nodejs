# ws_api_client.Wheel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tirePressure** | [**Pressure**](Pressure.md) |  | [optional] 
**rim** | **String** | Formatter rim size (e.g. &#x60;7Jx18 ET38&#x60;, can be __*&#x60;\&quot;\&quot;&#x60;*__) | 
**rimDiameter** | **Number** | Rim diameter, in (e.g. &#x60;18.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**rimWidth** | **Number** | Rim width, in (e.g. &#x60;7.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**rimOffset** | **Number** | Rim offset, mm (e.g. &#x60;38.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**tire** | **String** | Formatted tire size (e.g. &#x60;225/55R18&#x60;, can be __*&#x60;\&quot;\&quot;&#x60;*__) | 
**tireSizingSystem** | **String** | Tire sizing system (e.g. &#x60;metric&#x60;, can be __*&#x60;null&#x60;*__) | 
**tireConstruction** | **String** | Tire constriction code (e.g. &#x60;R&#x60;, can be __*&#x60;null&#x60;*__) | 
**tireWidth** | **Number** | Tire width, mm (e.g. &#x60;225.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**tireAspectRatio** | **Number** | Aspect ratio, % (e.g. &#x60;55.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**tireDiameter** | **Number** | High flotation tire diameter, in (e.g. &#x60;31.0&#x60;, can be __*&#x60;null&#x60;*__) | 
**tireSectionWidth** | **Number** | High flotation section width, in (e.g. &#x60;10.5&#x60;, can be __*&#x60;null&#x60;*__) | 
**tireIs82series** | **Boolean** | Is an old tire with assumed aspect ratio 82% | 
**loadIndex** | **Number** | Load index (e.g. &#x60;98&#x60;, can be __*&#x60;null&#x60;*__) | [optional] 
**speedIndex** | **String** | Speed rating (e.g. &#x60;H&#x60;, can be __*&#x60;null&#x60;*__) | [optional] 


<a name="TireSizingSystemEnum"></a>
## Enum: TireSizingSystemEnum


* `metric` (value: `"metric"`)

* `flotation` (value: `"flotation"`)

* `lt-metric` (value: `"lt-metric"`)

* `lt-numeric` (value: `"lt-numeric"`)




<a name="TireConstructionEnum"></a>
## Enum: TireConstructionEnum


* `R` (value: `"R"`)

* `B` (value: `"B"`)

* `D` (value: `"D"`)




