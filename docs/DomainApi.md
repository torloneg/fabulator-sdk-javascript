# FabulatorApi.DomainApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDomainV1Id**](DomainApi.md#deleteDomainV1Id) | **DELETE** /domain/v1/{id} | 
[**getDomainV1InfoId**](DomainApi.md#getDomainV1InfoId) | **GET** /domain/v1/info/{id} | 
[**patchDomainV1UpdateIdFieldValue**](DomainApi.md#patchDomainV1UpdateIdFieldValue) | **PATCH** /domain/v1/update/{id}/{field}/{value} | 
[**postDomainV1Add**](DomainApi.md#postDomainV1Add) | **POST** /domain/v1/add | 
[**postDomainV1QuerySkipLimit**](DomainApi.md#postDomainV1QuerySkipLimit) | **POST** /domain/v1/query/{skip}/{limit} | 
[**putDomainV1UpdateId**](DomainApi.md#putDomainV1UpdateId) | **PUT** /domain/v1/update/{id} | 


<a name="deleteDomainV1Id"></a>
# **deleteDomainV1Id**
> &#39;String&#39; deleteDomainV1Id(id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.DomainApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDomainV1Id(id, callback);
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

<a name="getDomainV1InfoId"></a>
# **getDomainV1InfoId**
> &#39;String&#39; getDomainV1InfoId(id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.DomainApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDomainV1InfoId(id, callback);
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

<a name="patchDomainV1UpdateIdFieldValue"></a>
# **patchDomainV1UpdateIdFieldValue**
> &#39;String&#39; patchDomainV1UpdateIdFieldValue(id, field, value)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.DomainApi();

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
apiInstance.patchDomainV1UpdateIdFieldValue(id, field, value, callback);
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

<a name="postDomainV1Add"></a>
# **postDomainV1Add**
> &#39;String&#39; postDomainV1Add(opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.DomainApi();

var opts = { 
  'body': new FabulatorApi.Model1() // Model1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postDomainV1Add(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Model1**](Model1.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postDomainV1QuerySkipLimit"></a>
# **postDomainV1QuerySkipLimit**
> &#39;String&#39; postDomainV1QuerySkipLimit(skip, limit, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.DomainApi();

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
apiInstance.postDomainV1QuerySkipLimit(skip, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="putDomainV1UpdateId"></a>
# **putDomainV1UpdateId**
> &#39;String&#39; putDomainV1UpdateId(id, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.DomainApi();

var id = "id_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model1() // Model1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putDomainV1UpdateId(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Model1**](Model1.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

