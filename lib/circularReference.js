/**
 * Copyright 2016, Joseph Sillitoe
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule circularReference
 */
'use strict';

const circularReference = function(message, pathSet, json){
    this.message = message;
    this.pathSet = pathSet;
    this.json = json;
};

module.exports = circularReference;
