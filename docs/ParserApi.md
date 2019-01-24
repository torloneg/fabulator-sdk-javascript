# FabulatorApi.ParserApi

All URIs are relative to *http://localhost:8003*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postParserV1RuleIdrule**](ParserApi.md#postParserV1RuleIdrule) | **POST** /parser/v1/rule/{idrule} | 


<a name="postParserV1RuleIdrule"></a>
# **postParserV1RuleIdrule**
> &#39;String&#39; postParserV1RuleIdrule()



### Example
```javascript
var FabulatorApi = require('fabulator_api');

var apiInstance = new FabulatorApi.ParserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postParserV1RuleIdrule(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

