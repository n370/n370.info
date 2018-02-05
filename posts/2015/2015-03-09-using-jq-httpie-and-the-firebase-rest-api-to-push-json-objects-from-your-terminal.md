---
layout: "post"
title: " Using jq, HTTPie and the Firebase REST API to push JSON objects from your terminal"
date: "2015-03-09"
---

Imagine a scenario where you've been developing locally with dummy data and at some point decided to move this data to a Firebase instance.

Assuming your JSON file contents looks like the following.

```json
[
  {
    "name": "Zapallo Anco",
    "price": 10,
    "unit": "Kg"
  },
  {
    "name": "Zuchini",
    "price": 10,
    "unit": "Kg"
  }
]
```

If your design doesn't require the use of unique identifiers for each object, fine, you're good to just go ahead and use this simple bash script.

```bash
cat data.json | http --verbose PUT https://my-firebase.firebaseio.com/test.json;
```

However, if you wish to assing a UID to each object inside your array you might want to do something more like the following. This way you're sure to get Firebase to associate your array objects to unique identifiers as key/value pairs inside a reference.

```bash
jq -r '.[] | tostring' data.json | while read line;
  do \
    echo ${line} | http --verbose POST https://my-firebase.firebaseio.com/test.json; \
    printf '\n\n'; \
  done;
```

If you're app have security policies in place you might need to append a query parameter to the data url your passing to ```http```. You'll need your Firebase app's secret, which you can find under the Secrets panel of your Firebase app's dashboard.

```bash
FIREBASE_SECRET="0f5some3b550a0a137dsecret478012a3"

echo '{"key":"value"}' | http --verbose POST https://my-firebase.firebaseio.com/test.json auth=="${FIREBASE_SECRET}";
```

Go ahead and try it. If you're using Homebrew on a Mac you can ```$ brew install jq httpie``` to have these binaries available on your command line.

Comment bellow and let me know what you think. Have fun!

#### References
- [jq Github repo](https://github.com/stedolan/jq)
- [HTTPie Github repo](https://github.com/jakubroztocil/httpie)
- [Firebase REST API documentation](https://www.firebase.com/docs/rest/api/)