# jgparse

A small library for using path sets to extract values from a JSON Graph object.

## Install

```
npm install jgparse --save
```

## Example

```js

import { parse } from 'jgparse'

var graph = {
    "user_preferencesById": {
        "1": {
            "user": {
                "value": ["usersById", "1"],
                "$type": "ref"
            },
            "key": "favorite_color",
            "user_id": 1,
            "value": "Black",
            "id": 1
        }
    },
    "usersById": {
        "1": {
            "id": 1,
            "firstname": "Jane",
            "lastname": "Smith",
            "preferences": [{
                "value": ["user_preferencesById", "1"],
                "$type": "ref"
            }]
        }
    },
    "user": {
        "value": ["usersById", "1"],
        "$type": "ref"
    }
};


var color = parse(graph, ['user', 'preferences', 0, 'value']); // Black

```



