# Sinon issue #1177

This is a small demo of the sinon issue #1177

```shell
npm install
npm test
```

The error is caused becuase we use a property accessor to get the `original` value before stubbing it. See https://github.com/sinonjs/sinon/blob/v1.17/lib/sinon/collection.js#L89