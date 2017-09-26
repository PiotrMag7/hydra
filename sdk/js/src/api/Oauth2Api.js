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
    define(['ApiClient', 'model/AcceptConsentRequestPayload', 'model/Body', 'model/ConsentRequest', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse401', 'model/JwkSet', 'model/OauthClient', 'model/RejectConsentRequestPayload', 'model/WellKnown'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AcceptConsentRequestPayload'), require('../model/Body'), require('../model/ConsentRequest'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'), require('../model/InlineResponse401'), require('../model/JwkSet'), require('../model/OauthClient'), require('../model/RejectConsentRequestPayload'), require('../model/WellKnown'));
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer100Aplha1) {
      root.HydraOAuth2OpenIdConnectServer100Aplha1 = {};
    }
    root.HydraOAuth2OpenIdConnectServer100Aplha1.Oauth2Api = factory(root.HydraOAuth2OpenIdConnectServer100Aplha1.ApiClient, root.HydraOAuth2OpenIdConnectServer100Aplha1.AcceptConsentRequestPayload, root.HydraOAuth2OpenIdConnectServer100Aplha1.Body, root.HydraOAuth2OpenIdConnectServer100Aplha1.ConsentRequest, root.HydraOAuth2OpenIdConnectServer100Aplha1.InlineResponse200, root.HydraOAuth2OpenIdConnectServer100Aplha1.InlineResponse2001, root.HydraOAuth2OpenIdConnectServer100Aplha1.InlineResponse401, root.HydraOAuth2OpenIdConnectServer100Aplha1.JwkSet, root.HydraOAuth2OpenIdConnectServer100Aplha1.OauthClient, root.HydraOAuth2OpenIdConnectServer100Aplha1.RejectConsentRequestPayload, root.HydraOAuth2OpenIdConnectServer100Aplha1.WellKnown);
  }
}(this, function(ApiClient, AcceptConsentRequestPayload, Body, ConsentRequest, InlineResponse200, InlineResponse2001, InlineResponse401, JwkSet, OauthClient, RejectConsentRequestPayload, WellKnown) {
  'use strict';

  /**
   * Oauth2 service.
   * @module api/Oauth2Api
   * @version Latest
   */

  /**
   * Constructs a new Oauth2Api. 
   * @alias module:api/Oauth2Api
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the acceptConsentRequest operation.
     * @callback module:api/Oauth2Api~acceptConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accept a consent request
     * Call this endpoint to accept a consent request. This usually happens when a user agrees to give access rights to an application.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;accept\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:model/AcceptConsentRequestPayload} body 
     * @param {String} id The id of the OAuth 2.0 Consent Request.
     * @param {module:api/Oauth2Api~acceptConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the createOAuthClient operation.
     * @callback module:api/Oauth2Api~createOAuthClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OauthClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an OAuth 2.0 Client
     * Be aware that an OAuth 2.0 Client may gain highly priviledged access if configured that way. This endpoint should be well protected and only called by code you trust.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;create\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;create\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {module:model/OauthClient} body 
     * @param {module:api/Oauth2Api~createOAuthClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OauthClient}
     */
    this.createOAuthClient = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOAuthClient");
      }


      var pathParams = {
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
      var returnType = OauthClient;

      return this.apiClient.callApi(
        '/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOAuthClient operation.
     * @callback module:api/Oauth2Api~deleteOAuthClientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an OAuth 2.0 Client
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;delete\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;delete\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {String} id The id of the OAuth 2.0 Client.
     * @param {module:api/Oauth2Api~deleteOAuthClientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOAuthClient = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOAuthClient");
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
        '/clients/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentRequest operation.
     * @callback module:api/Oauth2Api~getConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsentRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive consent request information
     * Call this endpoint to receive information on consent requests.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id The id of the OAuth 2.0 Consent Request.
     * @param {module:api/Oauth2Api~getConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getOAuthClient operation.
     * @callback module:api/Oauth2Api~getOAuthClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OauthClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetches an OAuth 2.0 Client.
     * Never returns the client&#39;s secret.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {String} id The id of the OAuth 2.0 Client.
     * @param {module:api/Oauth2Api~getOAuthClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OauthClient}
     */
    this.getOAuthClient = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOAuthClient");
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
      var returnType = OauthClient;

      return this.apiClient.callApi(
        '/clients/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the introspectOAuthToken operation.
     * @callback module:api/Oauth2Api~introspectOAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Introspect an OAuth2 access token
     * For more information, please refer to https://tools.ietf.org/html/rfc7662
     * @param {module:api/Oauth2Api~introspectOAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.introspectOAuthToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/oauth2/introspect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listOAuthClients operation.
     * @callback module:api/Oauth2Api~listOAuthClientsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists OAuth 2.0 Clients
     * Never returns a client&#39;s secret.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:api/Oauth2Api~listOAuthClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.listOAuthClients = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthAuth operation.
     * @callback module:api/Oauth2Api~oauthAuthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 Auth endpoint
     * For more information, please refer to https://tools.ietf.org/html/rfc6749#section-4
     * @param {module:api/Oauth2Api~oauthAuthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.oauthAuth = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/auth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthToken operation.
     * @callback module:api/Oauth2Api~oauthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 Token endpoint
     * For more information, please refer to https://tools.ietf.org/html/rfc6749#section-4
     * @param {module:api/Oauth2Api~oauthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.oauthToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rejectConsentRequest operation.
     * @callback module:api/Oauth2Api~rejectConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reject a consent request
     * Call this endpoint to reject a consent request. This usually happens when a user denies access rights to an application.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;reject\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:model/RejectConsentRequestPayload} body 
     * @param {String} id The id of the OAuth 2.0 Consent Request.
     * @param {module:api/Oauth2Api~rejectConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the revokeOAuthToken operation.
     * @callback module:api/Oauth2Api~revokeOAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke an OAuth2 access token
     * For more information, please refer to https://tools.ietf.org/html/rfc7009
     * @param {module:model/Body} body 
     * @param {module:api/Oauth2Api~revokeOAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.revokeOAuthToken = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling revokeOAuthToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOAuthClient operation.
     * @callback module:api/Oauth2Api~updateOAuthClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OauthClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an OAuth 2.0 Client
     * Be aware that an OAuth 2.0 Client may gain highly priviledged access if configured that way. This endpoint should be well protected and only called by code you trust.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;update\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;update\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {String} id 
     * @param {module:model/OauthClient} body 
     * @param {module:api/Oauth2Api~updateOAuthClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OauthClient}
     */
    this.updateOAuthClient = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOAuthClient");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOAuthClient");
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
      var returnType = OauthClient;

      return this.apiClient.callApi(
        '/clients/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the wellKnown operation.
     * @callback module:api/Oauth2Api~wellKnownCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JwkSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Public JWKs
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:keys:hydra.openid.id-token:public\&quot;], \&quot;actions\&quot;: [\&quot;GET\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:api/Oauth2Api~wellKnownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JwkSet}
     */
    this.wellKnown = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = JwkSet;

      return this.apiClient.callApi(
        '/.well-known/jwks.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the wellKnownHandler operation.
     * @callback module:api/Oauth2Api~wellKnownHandlerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WellKnown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Server well known configuration
     * For more information, please refer to https://openid.net/specs/openid-connect-discovery-1_0.html
     * @param {module:api/Oauth2Api~wellKnownHandlerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WellKnown}
     */
    this.wellKnownHandler = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = WellKnown;

      return this.apiClient.callApi(
        '/.well-known/openid-configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
