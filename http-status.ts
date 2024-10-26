/*
   Reference 1:
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

   Reference 1.1:
   https://httpwg.org/specs/rfc9110.html#overview.of.status.codes

   Acknowledgment to MDN Documentation Team ---------------------------------

   A huge shout-out to everyone at MDN for their dedication to creating clear, 
   accurate, and accessible documentation. Your work makes it so much easier 
   for developers to learn and understand complex topics, and it’s been a huge 
   help in building this library.

   Your commitment to sharing knowledge openly inspires us to keep learning 
   and improving as developers. Thanks for all the time and effort you put 
   into making such high-quality resources—it's truly appreciated!
*/

/**
 * Represents an HTTP status code and its associated status text.
 *
 * This type is designed to provide a standardized structure for handling HTTP
 * status responses, ensuring immutability with `readonly` properties.
 *
 * @property status - The HTTP status code as a number (e.g., 200, 404, 500).
 * @property statusText - A brief text description of the HTTP status (e.g., "OK", "Not Found", "Internal Server Error").
 */
export type HTTPStatus = {
    readonly status: number;
    readonly statusText: string;
};

/**
 * Helper function to create an immutable HTTP status object with type inference.
 *
 * This function provides both `as const` values and `readonly` properties to ensure that
 * the generated HTTP status objects are type-safe, immutable, and display their exact
 * values in IDEs and TypeScript signatures.
 *
 * @typeParam Code - The numeric HTTP status code (e.g., 200, 404, 500).
 * @typeParam Text - The string description associated with the status code (e.g., "OK", "Not Found").
 * 
 * @param status - The HTTP status code as a literal number type.
 * @param statusText - The status text as a literal string type.
 * 
 * @returns An object with `readonly` `status` and `statusText` properties, where both 
 * properties maintain literal types and immutability for enhanced type inference.
 * 
 * @example
 * ```
 * const OK = NewHTTPStatus(200, "OK");
 * // const OK: {
 * //     readonly status: 200;
 * //     readonly statusText: "OK";
 * // }
 * ```
 */
const NewHTTPStatus = <Code extends number, Text extends string>(
    status: Code,
    statusText: Text,
): {
    readonly status: Code;
    readonly statusText: Text;
} => ({ status, statusText });

/**
 * [`100 Continue`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
 *
 * This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#100_continue)
 */
export const CONTINUE = NewHTTPStatus(100, "Continue");

/**
 * [`101 Switching Protocols`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)
 *
 * This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client and indicates the protocol the server is switching to.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#101_Switching_Protocols)
 */
export const SWITCHING_PROTOCOLS = NewHTTPStatus(
    101,
    "Switching Protocols",
);

/**
 * [`102 Processing`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102) _Deprecated_
 *
 * This code was used in [WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV) contexts to indicate that a request has been received by the server, but no status was available at the time of the response.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#102_processing)
 */
export const PROCESSING = NewHTTPStatus(102, "Processing");

/**
 * [`103 Early Hints`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)
 *
 * This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload) resources while the server prepares a response or [preconnect](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect) to an origin from which the page will need resources.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#103_early_hints)
 */
export const EARLY_HINTS = NewHTTPStatus(103, "Early Hints");

/**
 * [`200 OK`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 *
 * The request succeeded. The result and meaning of "success" depends on the HTTP method:
 *
 * - [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET): The resource has been fetched and transmitted in the message body.
 * - [`HEAD`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD): Representation headers are included in the response without any message body.
 * - [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) or [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST): The resource describing the result of the action is transmitted in the message body.
 * - [`TRACE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE): The message body contains the request as received by the server.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#200_ok)
 */
export const OK = NewHTTPStatus(200, "OK");

/**
 * [`201 Created`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)
 *
 * The request succeeded, and a new resource was created as a result. This is typically the response sent after [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) requests, or some [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) requests.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#201_created)
 */
export const CREATED = NewHTTPStatus(201, "Created");

/**
 * [`202 Accepted`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202)
 *
 * The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#202_accepted)
 */
export const ACCEPTED = NewHTTPStatus(202, "Accepted");

/**
 * [`203 Non-Authoritative Information`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203)
 *
 * This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the [`200 OK`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) response is preferred to this status.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#203_non-authoritative_information)
 */
export const NON_AUTHORITATIVE_INFORMATION = NewHTTPStatus(
    203,
    "Non-Authoritative Information",
);

/**
 * [`204 No Content`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
 *
 * There is no content to send for this request, but the headers are useful. The user agent may update its cached headers for this resource with the new ones.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#204_no_content)
 */
export const NO_CONTENT = NewHTTPStatus(204, "No Content");

/**
 * [`205 Reset Content`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205)
 *
 * Tells the user agent to reset the document which sent this request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#205_reset_content)
 */
export const RESET_CONTENT = NewHTTPStatus(205, "Reset Content");

/**
 * [`206 Partial Content`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
 *
 * This response code is used in response to a [range request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) when the client has requested a part or parts of a resource.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#206_partial_content)
 */
export const PARTIAL_CONTENT = NewHTTPStatus(206, "Partial Content");

/**
 * [`207 Multi-Status`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
 *
 * Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#207_multi-status)
 */
export const MULTI_STATUS = NewHTTPStatus(207, "Multi-Status");

/**
 * [`208 Already Reported`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
 *
 * Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#208_already_reported)
 */
export const ALREADY_REPORTED = NewHTTPStatus(208, "Already Reported");

/**
 * [`226 IM Used`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226) ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
 *
 * The server has fulfilled a [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#226_im_used)
 */
export const IM_USED = NewHTTPStatus(226, "IM Used");

/**
 * [`300 Multiple Choices`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300)
 *
 * In [agent-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation), the request has more than one possible response and the user agent or user should choose one of them. There is no standardized way for clients to automatically choose one of the responses, so this is rarely used.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#300_multiple_choices)
 */
export const MULTIPLE_CHOICES = NewHTTPStatus(300, "Multiple Choices");

/**
 * [`301 Moved Permanently`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)
 *
 * The URL of the requested resource has been changed permanently. The new URL is given in the response.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#301_moved_permanently)
 */
export const MOVED_PERMANENTLY = NewHTTPStatus(301, "Moved Permanently");

/**
 * [`302 Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
 *
 * This response code means that the URI of requested resource has been changed _temporarily_. Further changes in the URI might be made in the future, so the same URI should be used by the client in future requests.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#302_found)
 */
export const FOUND = NewHTTPStatus(302, "Found");

/**
 * [`303 See Other`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)
 *
 * The server sent this response to direct the client to get the requested resource at another URI with a [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#303_see_other)
 */
export const SEE_OTHER = NewHTTPStatus(303, "See Other");

/**
 * [`304 Not Modified`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)
 *
 * This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same [cached](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) version of the response.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#304_not_modified)
 */
export const NOT_MODIFIED = NewHTTPStatus(304, "Not Modified");

/**
 * [`305 Use Proxy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#305_use_proxy) Deprecated
 *
 * Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#305_use_proxy)
 */
export const USE_PROXY = NewHTTPStatus(305, "Use Proxy");

/**
 * [`306 unused`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#306_unused)
 *
 * This response code is no longer used; but is reserved. It was used in a previous version of the HTTP/1.1 specification.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#306_unused)
 */
export const UNUSED = NewHTTPStatus(306, "Unused");

/**
 * [`307 Temporary Redirect`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307)
 *
 * The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request. This has the same semantics as the `302 Found` response code, with the exception that the user agent _must not_ change the HTTP method used: if a [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) was used in the first request, a `POST` must be used in the redirected request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#307_temporary_redirect)
 */
export const TEMPORARY_REDIRECT = NewHTTPStatus(307, "Temporary Redirect");

/**
 * [`308 Permanent Redirect`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)
 *
 * This means that the resource is now permanently located at another URI, specified by the [`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location) response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent _must not_ change the HTTP method used: if a [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) was used in the first request, a `POST` must be used in the second request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#308_permanent_redirect)
 */
export const PERMANENT_REDIRECT = NewHTTPStatus(308, "Permanent Redirect");

/**
 * [`400 Bad Request`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
 *
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#400_bad_request)
 */
export const BAD_REQUEST = NewHTTPStatus(400, "Bad Request");

/**
 * [`401 Unauthorized`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#401_unauthorized)
 */
export const UNAUTHORIZED = NewHTTPStatus(401, "Unauthorized");

/**
 * [`402 Payment Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)
 *
 * The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#402_payment_required)
 */
export const PAYMENT_REQUIRED = NewHTTPStatus(402, "Payment Required");

/**
 * [`403 Forbidden`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
 *
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#403_forbidden)
 */
export const FORBIDDEN = NewHTTPStatus(403, "Forbidden");

/**
 * [`404 Not Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
 *
 * The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#404_not_found)
 */
export const NOT_FOUND = NewHTTPStatus(404, "Not Found");

/**
 * [`405 Method Not Allowed`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405)
 *
 * The [request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) is known by the server but is not supported by the target resource. For example, an API may not allow `DELETE` on a resource, or the `TRACE` method entirely.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#405_method_not_allowed)
 */
export const METHOD_NOT_ALLOWED = NewHTTPStatus(405, "Method Not Allowed");

/**
 * [`406 Not Acceptable`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406)
 *
 * This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation), doesn't find any content that conforms to the criteria given by the user agent.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#406_not_acceptable)
 */
export const NOT_ACCEPTABLE = NewHTTPStatus(406, "Not Acceptable");

/**
 * [`407 Proxy Authentication Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407)
 *
 * This is similar to `401 Unauthorized` but authentication is needed to be done by a proxy.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#407_proxy_authentication_required)
 */
export const PROXY_AUTHENTICATION_REQUIRED = NewHTTPStatus(
    407,
    "Proxy Authentication Required",
);

/**
 * [`408 Request Timeout`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408)
 *
 * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers use HTTP pre-connection mechanisms to speed up browsing. Some servers may shut down a connection without sending this message.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#408_request_timeout)
 */
export const REQUEST_TIMEOUT = NewHTTPStatus(408, "Request Timeout");

/**
 * [`409 Conflict`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409)
 *
 * This response is sent when a request conflicts with the current state of the server. In [WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV) remote web authoring, `409` responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#409_conflict)
 */
export const CONFLICT = NewHTTPStatus(409, "Conflict");

/**
 * [`410 Gone`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410)
 *
 * This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#410_gone)
 */
export const GONE = NewHTTPStatus(410, "Gone");

/**
 * [`411 Length Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411)
 *
 * Server rejected the request because the [`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) header field is not defined and the server requires it.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#411_length_required)
 */
export const LENGTH_REQUIRED = NewHTTPStatus(411, "Length Required");

/**
 * [`412 Precondition Failed`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412)
 *
 * In [conditional requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests), the client has indicated preconditions in its headers which the server does not meet.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#412_precondition_failed)
 */
export const PRECONDITION_FAILED = NewHTTPStatus(
    412,
    "Precondition Failed",
);

/**
 * [`413 Content Too Large`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413)
 *
 * The request body is larger than limits defined by server. The server might close the connection or return an [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header field.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#413_content_too_large)
 */
export const CONTENT_TOO_LARGE = NewHTTPStatus(413, "Content Too Large");

/**
 * [`414 URI Too Long`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414)
 *
 * The URI requested by the client is longer than the server is willing to interpret.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#414_uri_too_long)
 */
export const URI_TOO_LONG = NewHTTPStatus(414, "URI Too Long");

/**
 * [`415 Unsupported Media Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415)
 *
 * The media format of the requested data is not supported by the server, so the server is rejecting the request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#415_unsupported_media_type)
 */
export const UNSUPPORTED_MEDIA_TYPE = NewHTTPStatus(
    415,
    "Unsupported Media Type",
);

/**
 * [`416 Range Not Satisfiable`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416)
 *
 * The [ranges](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) specified by the `Range` header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target resource's data.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#416_range_not_satisfiable)
 */
export const RANGE_NOT_SATISFIABLE = NewHTTPStatus(
    416,
    "Range Not Satisfiable",
);

/**
 * [`417 Expectation Failed`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417)
 *
 * This response code means the expectation indicated by the [`Expect`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect) request header field cannot be met by the server.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#417_expectation_failed)
 */
export const EXPECTATION_FAILED = NewHTTPStatus(417, "Expectation Failed");

/**
 * [`418 I'm a teapot`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418)
 *
 * The server refuses the attempt to brew coffee with a teapot.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#418_im_a_teapot)
 */
export const IM_A_TEAPOT = NewHTTPStatus(418, "I'm a teapot");

/**
 * [`421 Misdirected Request`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421)
 *
 * The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#421_misdirected_request)
 */
export const MISDIRECTED_REQUEST = NewHTTPStatus(
    421,
    "Misdirected Request",
);

/**
 * [`422 Unprocessable Content`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#422_unprocessable_content)
 */
export const UNPROCESSABLE_CONTENT = NewHTTPStatus(
    422,
    "Unprocessable Content",
);

/**
 * [`423 Locked`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
 *
 * The resource that is being accessed is locked.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#423_locked)
 */
export const LOCKED = NewHTTPStatus(423, "Locked");

/**
 * [`424 Failed Dependency`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
 *
 * The request failed due to failure of a previous request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#424_failed_dependency)
 */
export const FAILED_DEPENDENCY = NewHTTPStatus(424, "Failed Dependency");

/**
 * [`425 Too Early`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425) Experimental
 *
 * Indicates that the server is unwilling to risk processing a request that might be replayed.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#425_too_early)
 */
export const TOO_EARLY = NewHTTPStatus(425, "Too Early");

/**
 * [`426 Upgrade Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426)
 *
 * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#426_upgrade_required)
 */
export const UPGRADE_REQUIRED = NewHTTPStatus(426, "Upgrade Required");

/**
 * [`428 Precondition Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428)
 *
 * The origin server requires the request to be [conditional](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests). This response is intended to prevent the 'lost update' problem, where a client [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)s a resource's state, modifies it and [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)s it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#428_precondition_required)
 */
export const PRECONDITION_REQUIRED = NewHTTPStatus(
    428,
    "Precondition Required",
);

/**
 * [`429 Too Many Requests`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429)
 *
 * The user has sent too many requests in a given amount of time ([rate limiting](https://developer.mozilla.org/en-US/docs/Glossary/Rate_limit)).
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#429_too_many_requests)
 */
export const TOO_MANY_REQUESTS = NewHTTPStatus(429, "Too Many Requests");

/**
 * [`431 Request Header Fields Too Large`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431)
 *
 * The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#431_request_header_fields_too_large)
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = NewHTTPStatus(
    431,
    "Request Header Fields Too Large",
);

/**
 * [`451 Unavailable For Legal Reasons`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451)
 *
 * The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#451_unavailable_for_legal_reasons)
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = NewHTTPStatus(
    451,
    "Unavailable For Legal Reasons",
);

/**
 * [`500 Internal Server Error`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
 *
 * The server has encountered a situation it does not know how to handle. This error is generic, indicating that the server cannot find a more appropriate `5XX` status code to respond with.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#500_internal_server_error)
 */
export const INTERNAL_SERVER_ERROR = NewHTTPStatus(
    500,
    "Internal Server Error",
);

/**
 * [`501 Not Implemented`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501)
 *
 * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) and [`HEAD`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD).
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#501_not_implemented)
 */
export const NOT_IMPLEMENTED = NewHTTPStatus(501, "Not Implemented");

/**
 * [`502 Bad Gateway`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502)
 *
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#502_bad_gateway)
 */
export const BAD_GATEWAY = NewHTTPStatus(502, "Bad Gateway");

/**
 * [`503 Service Unavailable`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)
 *
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#503_service_unavailable)
 */
export const SERVICE_UNAVAILABLE = NewHTTPStatus(
    503,
    "Service Unavailable",
);

/**
 * [`504 Gateway Timeout`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504)
 *
 * This error response is given when the server is acting as a gateway and cannot get a response in time.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#504_gateway_timeout)
 */
export const GATEWAY_TIMEOUT = NewHTTPStatus(504, "Gateway Timeout");

/**
 * [`505 HTTP Version Not Supported`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505)
 *
 * The HTTP version used in the request is not supported by the server.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#505_http_version_not_supported)
 */
export const HTTP_VERSION_NOT_SUPPORTED = NewHTTPStatus(
    505,
    "HTTP Version Not Supported",
);

/**
 * [`506 Variant Also Negotiates`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506)
 *
 * The server has an internal configuration error: during content negotiation, the chosen variant is configured to engage in content negotiation itself, which results in circular references when creating responses.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#506_variant_also_negotiates)
 */
export const VARIANT_ALSO_NEGOTIATES = NewHTTPStatus(
    506,
    "Variant Also Negotiates",
);

/**
 * [`507 Insufficient Storage`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
 *
 * The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#507_insufficient_storage)
 */
export const INSUFFICIENT_STORAGE = NewHTTPStatus(
    507,
    "Insufficient Storage",
);

/**
 * [`508 Loop Detected`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))
 *
 * The server detected an infinite loop while processing the request.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#508_loop_detected)
 */
export const LOOP_DETECTED = NewHTTPStatus(508, "Loop Detected");

/**
 * [`510 Not Extended`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510)
 *
 * The client request declares an HTTP Extension ([RFC 2774](https://datatracker.ietf.org/doc/html/rfc2774)) that should be used to process the request, but the extension is not supported.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#510_not_extended)
 */
export const NOT_EXTENDED = NewHTTPStatus(510, "Not Extended");

/**
 * [`511 Network Authentication Required`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511)
 *
 * Indicates that the client needs to authenticate to gain network access.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#511_network_authentication_required)
 */
export const NETWORK_AUTHENTICATION_REQUIRED = NewHTTPStatus(
    511,
    "Network Authentication Required",
);
