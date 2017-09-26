/**
 * Hydra OAuth2 & OpenID Connect Server (1.0.0-aplha1)
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### ATTENTION - IMPORTANT NOTE   The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AcceptConsentRequestPayload', 'model/ConsentRequest', 'model/InlineResponse401', 'model/RejectConsentRequestPayload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AcceptConsentRequestPayload'), require('../model/ConsentRequest'), require('../model/InlineResponse401'), require('../model/RejectConsentRequestPayload'));
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer100Aplha1) {
      root.HydraOAuth2OpenIdConnectServer100Aplha1 = {};
    }
    root.HydraOAuth2OpenIdConnectServer100Aplha1.ConsentApi = factory(root.HydraOAuth2OpenIdConnectServer100Aplha1.ApiClient, root.HydraOAuth2OpenIdConnectServer100Aplha1.AcceptConsentRequestPayload, root.HydraOAuth2OpenIdConnectServer100Aplha1.ConsentRequest, root.HydraOAuth2OpenIdConnectServer100Aplha1.InlineResponse401, root.HydraOAuth2OpenIdConnectServer100Aplha1.RejectConsentRequestPayload);
  }
}(this, function(ApiClient, AcceptConsentRequestPayload, ConsentRequest, InlineResponse401, RejectConsentRequestPayload) {
  'use strict';

  /**
   * Consent service.
   * @module api/ConsentApi
   * @version Latest
   */

  /**
   * Constructs a new ConsentApi. 
   * @alias module:api/ConsentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the acceptConsentRequest operation.
     * @callback module:api/ConsentApi~acceptConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accept a consent request
     * Call this endpoint to accept a consent request. This usually happens when a user agrees to give access rights to an application.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;accept\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:model/AcceptConsentRequestPayload} body 
     * @param {String} id The id of the OAuth 2.0 Consent Request.
     * @param {module:api/ConsentApi~acceptConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.acceptConsentRequest = function(body, id, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling acceptConsentRequest");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling acceptConsentRequest");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/consent/requests/{id}/accept', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentRequest operation.
     * @callback module:api/ConsentApi~getConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsentRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive consent request information
     * Call this endpoint to receive information on consent requests.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id The id of the OAuth 2.0 Consent Request.
     * @param {module:api/ConsentApi~getConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsentRequest}
     */
    this.getConsentRequest = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getConsentRequest");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConsentRequest;

      return this.apiClient.callApi(
        '/oauth2/consent/requests/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rejectConsentRequest operation.
     * @callback module:api/ConsentApi~rejectConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reject a consent request
     * Call this endpoint to reject a consent request. This usually happens when a user denies access rights to an application.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;reject\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:model/RejectConsentRequestPayload} body 
     * @param {String} id The id of the OAuth 2.0 Consent Request.
     * @param {module:api/ConsentApi~rejectConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rejectConsentRequest = function(body, id, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rejectConsentRequest");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rejectConsentRequest");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/consent/requests/{id}/reject', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
