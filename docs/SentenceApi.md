# FabulatorApi.SentenceApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSentenceV1IdruleId**](SentenceApi.md#deleteSentenceV1IdruleId) | **DELETE** /sentence/v1/{idrule}/{id} | 
[**getSentenceV1InfoIdruleId**](SentenceApi.md#getSentenceV1InfoIdruleId) | **GET** /sentence/v1/info/{idrule}/{id} | 
[**postSentenceV1AddIdrule**](SentenceApi.md#postSentenceV1AddIdrule) | **POST** /sentence/v1/add/{idrule} | 
[**putSentenceV1UpdateIdruleId**](SentenceApi.md#putSentenceV1UpdateIdruleId) | **PUT** /sentence/v1/update/{idrule}/{id} | 


<a name="deleteSentenceV1IdruleId"></a>
# **deleteSentenceV1IdruleId**
> &#39;String&#39; deleteSentenceV1IdruleId(idrule, id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.SentenceApi();

var idrule = "idrule_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSentenceV1IdruleId(idrule, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idrule** | **String**|  | 
 **id** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSentenceV1InfoIdruleId"></a>
# **getSentenceV1InfoIdruleId**
> &#39;String&#39; getSentenceV1InfoIdruleId(idrule, id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.SentenceApi();

var idrule = "idrule_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSentenceV1InfoIdruleId(idrule, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idrule** | **String**|  | 
 **id** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postSentenceV1AddIdrule"></a>
# **postSentenceV1AddIdrule**
> &#39;String&#39; postSentenceV1AddIdrule(idrule, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.SentenceApi();

var idrule = "idrule_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model7() // Model7 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postSentenceV1AddIdrule(idrule, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idrule** | **String**|  | 
 **body** | [**Model7**](Model7.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSentenceV1UpdateIdruleId"></a>
# **putSentenceV1UpdateIdruleId**
> &#39;String&#39; putSentenceV1UpdateIdruleId(idrule, id, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.SentenceApi();

var idrule = "idrule_example"; // String | 

var id = "id_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model15() // Model15 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putSentenceV1UpdateIdruleId(idrule, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idrule** | **String**|  | 
 **id** | **String**|  | 
 **body** | [**Model15**](Model15.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

