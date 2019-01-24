# FabulatorApi.ExampleApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteExampleV1IddomainId**](ExampleApi.md#deleteExampleV1IddomainId) | **DELETE** /example/v1/{iddomain}/{id} | 
[**getExampleV1InfoIddomainId**](ExampleApi.md#getExampleV1InfoIddomainId) | **GET** /example/v1/info/{iddomain}/{id} | 
[**patchExampleV1UpdateIddomainIdFieldValue**](ExampleApi.md#patchExampleV1UpdateIddomainIdFieldValue) | **PATCH** /example/v1/update/{iddomain}/{id}/{field}/{value} | 
[**postExampleV1AddIddomain**](ExampleApi.md#postExampleV1AddIddomain) | **POST** /example/v1/add/{iddomain} | 
[**postExampleV1QueryIddomainSkipLimit**](ExampleApi.md#postExampleV1QueryIddomainSkipLimit) | **POST** /example/v1/query/{iddomain}/{skip}/{limit} | 
[**putExampleV1UpdateIddomainId**](ExampleApi.md#putExampleV1UpdateIddomainId) | **PUT** /example/v1/update/{iddomain}/{id} | 
[**putExampleV1UpdateJsonIddomainId**](ExampleApi.md#putExampleV1UpdateJsonIddomainId) | **PUT** /example/v1/update_json/{iddomain}/{id} | 


<a name="deleteExampleV1IddomainId"></a>
# **deleteExampleV1IddomainId**
> &#39;String&#39; deleteExampleV1IddomainId(iddomain, id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExampleApi();

var iddomain = "iddomain_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteExampleV1IddomainId(iddomain, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
 **id** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getExampleV1InfoIddomainId"></a>
# **getExampleV1InfoIddomainId**
> &#39;String&#39; getExampleV1InfoIddomainId(iddomain, id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExampleApi();

var iddomain = "iddomain_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExampleV1InfoIddomainId(iddomain, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
 **id** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="patchExampleV1UpdateIddomainIdFieldValue"></a>
# **patchExampleV1UpdateIddomainIdFieldValue**
> &#39;String&#39; patchExampleV1UpdateIddomainIdFieldValue(iddomain, id, field, value)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExampleApi();

var iddomain = "iddomain_example"; // String | 

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
apiInstance.patchExampleV1UpdateIddomainIdFieldValue(iddomain, id, field, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
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

<a name="postExampleV1AddIddomain"></a>
# **postExampleV1AddIddomain**
> &#39;String&#39; postExampleV1AddIddomain(iddomain, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExampleApi();

var iddomain = "iddomain_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model4() // Model4 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postExampleV1AddIddomain(iddomain, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
 **body** | [**Model4**](Model4.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postExampleV1QueryIddomainSkipLimit"></a>
# **postExampleV1QueryIddomainSkipLimit**
> &#39;String&#39; postExampleV1QueryIddomainSkipLimit(iddomain, skip, limit, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExampleApi();

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
apiInstance.postExampleV1QueryIddomainSkipLimit(iddomain, skip, limit, opts, callback);
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

<a name="putExampleV1UpdateIddomainId"></a>
# **putExampleV1UpdateIddomainId**
> &#39;String&#39; putExampleV1UpdateIddomainId(iddomain, id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExampleApi();

var iddomain = "iddomain_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putExampleV1UpdateIddomainId(iddomain, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
 **id** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putExampleV1UpdateJsonIddomainId"></a>
# **putExampleV1UpdateJsonIddomainId**
> &#39;String&#39; putExampleV1UpdateJsonIddomainId(iddomain, id, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ExampleApi();

var iddomain = "iddomain_example"; // String | 

var id = "id_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model14() // Model14 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putExampleV1UpdateJsonIddomainId(iddomain, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iddomain** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**Model14**](Model14.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

