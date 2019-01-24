# FabulatorApi.SchemaApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSchemaV1InfoId**](SchemaApi.md#getSchemaV1InfoId) | **GET** /schema/v1/info/{id} | 
[**postSchemaV1GroupType**](SchemaApi.md#postSchemaV1GroupType) | **POST** /schema/v1/group/{type} | 
[**postSchemaV1QuerySkipLimit**](SchemaApi.md#postSchemaV1QuerySkipLimit) | **POST** /schema/v1/query/{skip}/{limit} | 


<a name="getSchemaV1InfoId"></a>
# **getSchemaV1InfoId**
> &#39;String&#39; getSchemaV1InfoId(id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.SchemaApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSchemaV1InfoId(id, callback);
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

<a name="postSchemaV1GroupType"></a>
# **postSchemaV1GroupType**
> &#39;String&#39; postSchemaV1GroupType(type)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.SchemaApi();

var type = "type_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postSchemaV1GroupType(type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postSchemaV1QuerySkipLimit"></a>
# **postSchemaV1QuerySkipLimit**
> &#39;String&#39; postSchemaV1QuerySkipLimit(skip, limit, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.SchemaApi();

var skip = 8.14; // Number | 

var limit = 8.14; // Number | 

var opts = { 
  'body': new FabulatorApi.Model11() // Model11 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postSchemaV1QuerySkipLimit(skip, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**|  | 
 **limit** | **Number**|  | 
 **body** | [**Model11**](Model11.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

