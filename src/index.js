/**
 * Iot API
 * Collection of all public API endpoints.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ArduinoDevicev2 from './model/ArduinoDevicev2';
import ArduinoDevicev2Webhook from './model/ArduinoDevicev2Webhook';
import ArduinoDevicev2properties from './model/ArduinoDevicev2properties';
import ArduinoDevicev2propertyvalue from './model/ArduinoDevicev2propertyvalue';
import ArduinoDevicev2propertyvalueValue from './model/ArduinoDevicev2propertyvalueValue';
import ArduinoDevicev2propertyvalueValueStatistics from './model/ArduinoDevicev2propertyvalueValueStatistics';
import ArduinoDevicev2propertyvalues from './model/ArduinoDevicev2propertyvalues';
import ArduinoDevicev2propertyvaluesLastEvaluatedKey from './model/ArduinoDevicev2propertyvaluesLastEvaluatedKey';
import ArduinoProperty from './model/ArduinoProperty';
import ArduinoSeriesBatch from './model/ArduinoSeriesBatch';
import ArduinoSeriesRawBatch from './model/ArduinoSeriesRawBatch';
import ArduinoSeriesRawBatchLastvalue from './model/ArduinoSeriesRawBatchLastvalue';
import ArduinoSeriesRawLastValueResponse from './model/ArduinoSeriesRawLastValueResponse';
import ArduinoSeriesRawResponse from './model/ArduinoSeriesRawResponse';
import ArduinoSeriesResponse from './model/ArduinoSeriesResponse';
import ArduinoThing from './model/ArduinoThing';
import BatchLastValueRequestsMediaV1 from './model/BatchLastValueRequestsMediaV1';
import BatchQueryRawLastValueRequestMediaV1 from './model/BatchQueryRawLastValueRequestMediaV1';
import BatchQueryRawRequestMediaV1 from './model/BatchQueryRawRequestMediaV1';
import BatchQueryRawRequestsMediaV1 from './model/BatchQueryRawRequestsMediaV1';
import BatchQueryRawResponseSeriesMediaV1 from './model/BatchQueryRawResponseSeriesMediaV1';
import BatchQueryRequestMediaV1 from './model/BatchQueryRequestMediaV1';
import BatchQueryRequestsMediaV1 from './model/BatchQueryRequestsMediaV1';
import CreateDevicesV2Payload from './model/CreateDevicesV2Payload';
import CreateThingsV2Payload from './model/CreateThingsV2Payload';
import Devicev2 from './model/Devicev2';
import Error from './model/Error';
import PropertiesValue from './model/PropertiesValue';
import PropertiesValues from './model/PropertiesValues';
import Property from './model/Property';
import PropertyValue from './model/PropertyValue';
import Thing from './model/Thing';
import ThingSketch from './model/ThingSketch';
import DevicesV2Api from './api/DevicesV2Api';
import PropertiesV2Api from './api/PropertiesV2Api';
import SeriesV2Api from './api/SeriesV2Api';
import ThingsV2Api from './api/ThingsV2Api';


/**
* Collection_of_all_public_API_endpoints_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ArduinoIotClient = require('index'); // See note below*.
* var xxxSvc = new ArduinoIotClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ArduinoIotClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ArduinoIotClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ArduinoIotClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0-beta2
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ArduinoDevicev2 model constructor.
     * @property {module:model/ArduinoDevicev2}
     */
    ArduinoDevicev2,

    /**
     * The ArduinoDevicev2Webhook model constructor.
     * @property {module:model/ArduinoDevicev2Webhook}
     */
    ArduinoDevicev2Webhook,

    /**
     * The ArduinoDevicev2properties model constructor.
     * @property {module:model/ArduinoDevicev2properties}
     */
    ArduinoDevicev2properties,

    /**
     * The ArduinoDevicev2propertyvalue model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalue}
     */
    ArduinoDevicev2propertyvalue,

    /**
     * The ArduinoDevicev2propertyvalueValue model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalueValue}
     */
    ArduinoDevicev2propertyvalueValue,

    /**
     * The ArduinoDevicev2propertyvalueValueStatistics model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalueValueStatistics}
     */
    ArduinoDevicev2propertyvalueValueStatistics,

    /**
     * The ArduinoDevicev2propertyvalues model constructor.
     * @property {module:model/ArduinoDevicev2propertyvalues}
     */
    ArduinoDevicev2propertyvalues,

    /**
     * The ArduinoDevicev2propertyvaluesLastEvaluatedKey model constructor.
     * @property {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey}
     */
    ArduinoDevicev2propertyvaluesLastEvaluatedKey,

    /**
     * The ArduinoProperty model constructor.
     * @property {module:model/ArduinoProperty}
     */
    ArduinoProperty,

    /**
     * The ArduinoSeriesBatch model constructor.
     * @property {module:model/ArduinoSeriesBatch}
     */
    ArduinoSeriesBatch,

    /**
     * The ArduinoSeriesRawBatch model constructor.
     * @property {module:model/ArduinoSeriesRawBatch}
     */
    ArduinoSeriesRawBatch,

    /**
     * The ArduinoSeriesRawBatchLastvalue model constructor.
     * @property {module:model/ArduinoSeriesRawBatchLastvalue}
     */
    ArduinoSeriesRawBatchLastvalue,

    /**
     * The ArduinoSeriesRawLastValueResponse model constructor.
     * @property {module:model/ArduinoSeriesRawLastValueResponse}
     */
    ArduinoSeriesRawLastValueResponse,

    /**
     * The ArduinoSeriesRawResponse model constructor.
     * @property {module:model/ArduinoSeriesRawResponse}
     */
    ArduinoSeriesRawResponse,

    /**
     * The ArduinoSeriesResponse model constructor.
     * @property {module:model/ArduinoSeriesResponse}
     */
    ArduinoSeriesResponse,

    /**
     * The ArduinoThing model constructor.
     * @property {module:model/ArduinoThing}
     */
    ArduinoThing,

    /**
     * The BatchLastValueRequestsMediaV1 model constructor.
     * @property {module:model/BatchLastValueRequestsMediaV1}
     */
    BatchLastValueRequestsMediaV1,

    /**
     * The BatchQueryRawLastValueRequestMediaV1 model constructor.
     * @property {module:model/BatchQueryRawLastValueRequestMediaV1}
     */
    BatchQueryRawLastValueRequestMediaV1,

    /**
     * The BatchQueryRawRequestMediaV1 model constructor.
     * @property {module:model/BatchQueryRawRequestMediaV1}
     */
    BatchQueryRawRequestMediaV1,

    /**
     * The BatchQueryRawRequestsMediaV1 model constructor.
     * @property {module:model/BatchQueryRawRequestsMediaV1}
     */
    BatchQueryRawRequestsMediaV1,

    /**
     * The BatchQueryRawResponseSeriesMediaV1 model constructor.
     * @property {module:model/BatchQueryRawResponseSeriesMediaV1}
     */
    BatchQueryRawResponseSeriesMediaV1,

    /**
     * The BatchQueryRequestMediaV1 model constructor.
     * @property {module:model/BatchQueryRequestMediaV1}
     */
    BatchQueryRequestMediaV1,

    /**
     * The BatchQueryRequestsMediaV1 model constructor.
     * @property {module:model/BatchQueryRequestsMediaV1}
     */
    BatchQueryRequestsMediaV1,

    /**
     * The CreateDevicesV2Payload model constructor.
     * @property {module:model/CreateDevicesV2Payload}
     */
    CreateDevicesV2Payload,

    /**
     * The CreateThingsV2Payload model constructor.
     * @property {module:model/CreateThingsV2Payload}
     */
    CreateThingsV2Payload,

    /**
     * The Devicev2 model constructor.
     * @property {module:model/Devicev2}
     */
    Devicev2,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The PropertiesValue model constructor.
     * @property {module:model/PropertiesValue}
     */
    PropertiesValue,

    /**
     * The PropertiesValues model constructor.
     * @property {module:model/PropertiesValues}
     */
    PropertiesValues,

    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property,

    /**
     * The PropertyValue model constructor.
     * @property {module:model/PropertyValue}
     */
    PropertyValue,

    /**
     * The Thing model constructor.
     * @property {module:model/Thing}
     */
    Thing,

    /**
     * The ThingSketch model constructor.
     * @property {module:model/ThingSketch}
     */
    ThingSketch,

    /**
    * The DevicesV2Api service constructor.
    * @property {module:api/DevicesV2Api}
    */
    DevicesV2Api,

    /**
    * The PropertiesV2Api service constructor.
    * @property {module:api/PropertiesV2Api}
    */
    PropertiesV2Api,

    /**
    * The SeriesV2Api service constructor.
    * @property {module:api/SeriesV2Api}
    */
    SeriesV2Api,

    /**
    * The ThingsV2Api service constructor.
    * @property {module:api/ThingsV2Api}
    */
    ThingsV2Api
};
