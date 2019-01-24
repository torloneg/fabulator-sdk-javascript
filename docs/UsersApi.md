# FabulatorApi.UsersApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsersV1Id**](UsersApi.md#deleteUsersV1Id) | **DELETE** /users/v1/{id} | 
[**getUsersV1InfoId**](UsersApi.md#getUsersV1InfoId) | **GET** /users/v1/info/{id} | 
[**patchUsersV1UpdateIdFieldValue**](UsersApi.md#patchUsersV1UpdateIdFieldValue) | **PATCH** /users/v1/update/{id}/{field}/{value} | 
[**postUsersV1Add**](UsersApi.md#postUsersV1Add) | **POST** /users/v1/add | 
[**postUsersV1Login**](UsersApi.md#postUsersV1Login) | **POST** /users/v1/login | 
[**postUsersV1QuerySkipLimit**](UsersApi.md#postUsersV1QuerySkipLimit) | **POST** /users/v1/query/{skip}/{limit} | 
[**postUsersV1ResetPasswordToken**](UsersApi.md#postUsersV1ResetPasswordToken) | **POST** /users/v1/reset_password/{token} | 
[**postUsersV1SendPasswordReminderEmail**](UsersApi.md#postUsersV1SendPasswordReminderEmail) | **POST** /users/v1/send_password_reminder/{email} | 
[**putUsersV1UpdateId**](UsersApi.md#putUsersV1UpdateId) | **PUT** /users/v1/update/{id} | 


<a name="deleteUsersV1Id"></a>
# **deleteUsersV1Id**
> &#39;String&#39; deleteUsersV1Id(id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUsersV1Id(id, callback);
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

<a name="getUsersV1InfoId"></a>
# **getUsersV1InfoId**
> &#39;String&#39; getUsersV1InfoId(id)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersV1InfoId(id, callback);
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

<a name="patchUsersV1UpdateIdFieldValue"></a>
# **patchUsersV1UpdateIdFieldValue**
> &#39;String&#39; patchUsersV1UpdateIdFieldValue(id, field, value)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

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
apiInstance.patchUsersV1UpdateIdFieldValue(id, field, value, callback);
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

<a name="postUsersV1Add"></a>
# **postUsersV1Add**
> &#39;String&#39; postUsersV1Add(opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var opts = { 
  'body': new FabulatorApi.Model2() // Model2 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postUsersV1Add(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Model2**](Model2.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postUsersV1Login"></a>
# **postUsersV1Login**
> &#39;String&#39; postUsersV1Login(opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var opts = { 
  'body': new FabulatorApi.Model3() // Model3 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postUsersV1Login(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Model3**](Model3.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postUsersV1QuerySkipLimit"></a>
# **postUsersV1QuerySkipLimit**
> &#39;String&#39; postUsersV1QuerySkipLimit(skip, limit, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var skip = 8.14; // Number | 

var limit = 8.14; // Number | 

var opts = { 
  'body': new FabulatorApi.Model12() // Model12 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postUsersV1QuerySkipLimit(skip, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**|  | 
 **limit** | **Number**|  | 
 **body** | [**Model12**](Model12.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postUsersV1ResetPasswordToken"></a>
# **postUsersV1ResetPasswordToken**
> &#39;String&#39; postUsersV1ResetPasswordToken(token, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var token = "token_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model8() // Model8 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postUsersV1ResetPasswordToken(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **body** | [**Model8**](Model8.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="postUsersV1SendPasswordReminderEmail"></a>
# **postUsersV1SendPasswordReminderEmail**
> &#39;String&#39; postUsersV1SendPasswordReminderEmail(email)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var email = "email_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postUsersV1SendPasswordReminderEmail(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putUsersV1UpdateId"></a>
# **putUsersV1UpdateId**
> &#39;String&#39; putUsersV1UpdateId(id, opts)



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.UsersApi();

var id = "id_example"; // String | 

var opts = { 
  'body': new FabulatorApi.Model13() // Model13 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putUsersV1UpdateId(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Model13**](Model13.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

