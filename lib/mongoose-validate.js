/*!
 * Mongoose Validate
 */

/**
 * Module Dependencies
 */

var check = require('validator').check,
    validate = {};

/**
* Library version.
*/

validate.version = '0.0.1';

/**
 * .email
 *
 * @param {String} value
 *
 * @api public
 */
validate.email = function (value) {
  try {
    check(value).isEmail();
  } catch(err) {
    return false;
  }
  return true;
};

/**
 * .address
 *
 * @todo: Add address validation
 *        firstName
 *        lastName
 *        organisation
 *        address1..4
 *        suburb
 *        city
 *        postal code
 *        country
 */

// Check out validator.checks validation

/**
 * .alpha
 *
 * @param {String} value
 *
 * @api public
 */
validate.alpha = function (value) {
  try {
    check(value).isAlpha();
  } catch(err) {
    return false;
  }
  return true;
};

/**
 * .alphanumeric
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.alphanumeric = function (value) {
  try {
    check(value).isAlphanumeric();
  } catch(err) {
    return false;
  }
  return true;
};

/**
 * .numeric
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.numeric = function (value) {
  try {
    check(value).isNumeric();
  } catch(err) {
    return false;
  }
  return true;
};

/**
 * .postalcode
 *
 * Postal Codes should be between 3 and 10 alphanumeric characters according
 * to http://en.wikipedia.org/wiki/Postal_code
 *
 * @param {String|Number} value
 *
 * @api public
 */
validate.postalcode = function (value) {
  try {
    check(value).len(3, 10).regex(/^[a-zA-Z0-9]+[ -]{0,1}[a-zA-Z0-9]+$/);
  } catch(err) {
    return false;
  }
  return true;
};

/**
 * Module Exports
 */

module.exports = exports = validate;
