# FabulatorApi.ExecuteApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postExecuteV1LocalDomainKey**](ExecuteApi.md#postExecuteV1LocalDomainKey) | **POST** /execute/v1/local/{domain}/{key} | 
[**postExecuteV1RuleIdrule**](ExecuteApi.md#postExecuteV1RuleIdrule) | **POST** /execute/v1/rule/{idrule} | 
[**postExecuteV1RuleIdruleExampleIdexample**](ExecuteApi.md#postExecuteV1RuleIdruleExampleIdexample) | **POST** /execute/v1/rule/{idrule}/example/{idexample} | 


<a name="postExecuteV1LocalDomainKey"></a>
# **postExecuteV1LocalDomainKey**
> &#39;String&#39; postExecuteV1LocalDomainKey(domain, key, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExecuteApi();

var domain = "domain_example"; // String | 

var key = "key_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model5() // Model5 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postExecuteV1LocalDomainKey(domain, key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **key** | **String**|  | 
 **body** | [**Model5**](Model5.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postExecuteV1RuleIdrule"></a>
# **postExecuteV1RuleIdrule**
> &#39;String&#39; postExecuteV1RuleIdrule(idrule, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExecuteApi();

var idrule = "idrule_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model5() // Model5 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postExecuteV1RuleIdrule(idrule, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idrule** | **String**|  | 
 **body** | [**Model5**](Model5.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postExecuteV1RuleIdruleExampleIdexample"></a>
# **postExecuteV1RuleIdruleExampleIdexample**
> &#39;String&#39; postExecuteV1RuleIdruleExampleIdexample(idrule, idexample, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExecuteApi();

var idrule = "idrule_example"; // String | 

var idexample = "idexample_example"; // String | 

var opts = { 
  'idsentence': "idsentence_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postExecuteV1RuleIdruleExampleIdexample(idrule, idexample, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idrule** | **String**|  | 
 **idexample** | **String**|  | 
 **idsentence** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

