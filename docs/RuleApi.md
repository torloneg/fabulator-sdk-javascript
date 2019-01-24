# FabulatorApi.RuleApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRuleV1Id**](RuleApi.md#deleteRuleV1Id) | **DELETE** /rule/v1/{id} | 
[**getRuleV1InfoId**](RuleApi.md#getRuleV1InfoId) | **GET** /rule/v1/info/{id} | 
[**patchRuleV1UpdateIdFieldValue**](RuleApi.md#patchRuleV1UpdateIdFieldValue) | **PATCH** /rule/v1/update/{id}/{field}/{value} | 
[**postRuleV1AddIddomain**](RuleApi.md#postRuleV1AddIddomain) | **POST** /rule/v1/add/{iddomain} | 
[**postRuleV1QueryIddomainSkipLimit**](RuleApi.md#postRuleV1QueryIddomainSkipLimit) | **POST** /rule/v1/query/{iddomain}/{skip}/{limit} | 
[**putRuleV1UpdateIddomainId**](RuleApi.md#putRuleV1UpdateIddomainId) | **PUT** /rule/v1/update/{iddomain}/{id} | 


<a name="deleteRuleV1Id"></a>
# **deleteRuleV1Id**
> &#39;String&#39; deleteRuleV1Id(id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.RuleApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRuleV1Id(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getRuleV1InfoId"></a>
# **getRuleV1InfoId**
> &#39;String&#39; getRuleV1InfoId(id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.RuleApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleV1InfoId(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="patchRuleV1UpdateIdFieldValue"></a>
# **patchRuleV1UpdateIdFieldValue**
> &#39;String&#39; patchRuleV1UpdateIdFieldValue(id, field, value)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.RuleApi();

var id = "id_example"; // String | 

var field = "field_example"; // String | 

var value = "value_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchRuleV1UpdateIdFieldValue(id, field, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **field** | **String**|  | 
 **value** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postRuleV1AddIddomain"></a>
# **postRuleV1AddIddomain**
> &#39;String&#39; postRuleV1AddIddomain(iddomain, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.RuleApi();

var iddomain = "iddomain_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model6() // Model6 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postRuleV1AddIddomain(iddomain, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
 **body** | [**Model6**](Model6.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postRuleV1QueryIddomainSkipLimit"></a>
# **postRuleV1QueryIddomainSkipLimit**
> &#39;String&#39; postRuleV1QueryIddomainSkipLimit(iddomain, skip, limit, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.RuleApi();

var iddomain = "iddomain_example"; // String | 

var skip = 8.14; // Number | 

var limit = 8.14; // Number | 

var opts = { 
  'body': new FabulatorApi.Model9() // Model9 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postRuleV1QueryIddomainSkipLimit(iddomain, skip, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
 **skip** | **Number**|  | 
 **limit** | **Number**|  | 
 **body** | [**Model9**](Model9.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putRuleV1UpdateIddomainId"></a>
# **putRuleV1UpdateIddomainId**
> &#39;String&#39; putRuleV1UpdateIddomainId(id, iddomain, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.RuleApi();

var id = "id_example"; // String | 

var iddomain = "iddomain_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model6() // Model6 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putRuleV1UpdateIddomainId(id, iddomain, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **iddomain** | **String**|  | 
 **body** | [**Model6**](Model6.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

