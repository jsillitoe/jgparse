/**
 * Copyright 2016, Joseph Sillitoe
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';


const parse = require('./parse');
const circularReference = require('./circularReference');


module.exports = {
    parse,
    circularReference
}