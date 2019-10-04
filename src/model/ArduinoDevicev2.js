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

import ApiClient from '../ApiClient';
import ArduinoDevicev2Webhook from './ArduinoDevicev2Webhook';

/**
 * The ArduinoDevicev2 model module.
 * @module model/ArduinoDevicev2
 * @version 1.0.0-beta2
 */
class ArduinoDevicev2 {
    /**
     * Constructs a new <code>ArduinoDevicev2</code>.
     * ArduinoDevicev2 media type (default view)
     * @alias module:model/ArduinoDevicev2
     * @param href {String} The api reference of this device
     * @param id {String} The arn of the device
     * @param name {String} The friendly name of the device
     * @param serial {String} The serial uuid of the device
     * @param type {String} The type of the device
     * @param userId {String} The id of the user
     */
    constructor(href, id, name, serial, type, userId) { 
        
        ArduinoDevicev2.initialize(this, href, id, name, serial, type, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href, id, name, serial, type, userId) { 
        obj['href'] = href;
        obj['id'] = id;
        obj['name'] = name;
        obj['serial'] = serial;
        obj['type'] = type;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>ArduinoDevicev2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2} The populated <code>ArduinoDevicev2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [ArduinoDevicev2Webhook]);
            }
        }
        return obj;
    }


}

/**
 * Creation date of the device
 * @member {Date} created_at
 */
ArduinoDevicev2.prototype['created_at'] = undefined;

/**
 * The api reference of this device
 * @member {String} href
 */
ArduinoDevicev2.prototype['href'] = undefined;

/**
 * The arn of the device
 * @member {String} id
 */
ArduinoDevicev2.prototype['id'] = undefined;

/**
 * The metadata of the device
 * @member {Object.<String, Object>} metadata
 */
ArduinoDevicev2.prototype['metadata'] = undefined;

/**
 * The friendly name of the device
 * @member {String} name
 */
ArduinoDevicev2.prototype['name'] = undefined;

/**
 * The serial uuid of the device
 * @member {String} serial
 */
ArduinoDevicev2.prototype['serial'] = undefined;

/**
 * The type of the device
 * @member {String} type
 */
ArduinoDevicev2.prototype['type'] = undefined;

/**
 * The id of the user
 * @member {String} user_id
 */
ArduinoDevicev2.prototype['user_id'] = undefined;

/**
 * ArduinoDevicev2WebhookCollection is the media type for an array of ArduinoDevicev2Webhook (default view)
 * @member {Array.<module:model/ArduinoDevicev2Webhook>} webhooks
 */
ArduinoDevicev2.prototype['webhooks'] = undefined;






export default ArduinoDevicev2;

