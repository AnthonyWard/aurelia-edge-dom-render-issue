# edge-dom-render-issue
To show an issue with the EDGE browser

install the aurelia cli `npm install aurelia-cli -g`

run `npm install` then `au run`

Open EDGE and go to `http://localhost:9000/`

**Select 1**, which represents object `{ id: 1, name: 'This has an optional property', optional: "Hi, I'm optional" }`

Then **select 2** which represents object `{ id: 2, name: "This doesn't have an optional property",  }`

In EDGE you will notice that the **optional field remains**, but in Chrome it does not (the desired behaviour). If you **resize the EDGE window** the optional property dissappears and the result becomes the same as in Chrome. Microsoft Edge 38.14393.0.0. Microsoft EdgeHTML 14.14393.**

For other tests go back to 1, and then select 2, 3, or 4 etc.

```
this.things = [
    { id: 1, name: 'This has an optional property', optional: "Hi, I'm optional"  },
    { id: 2, name: "This doesn't have an optional property" },
    { id: 3, name: 'This has a null optional property', optional: null  },
    { id: 4, name: 'This has an undefined optional property', optional: undefined  },
    { id: 5, name: 'This has an empty string optional property', optional: ""  },
    { id: 6, name: 'This has a whitespace string optional property', optional: " "  }
];
```

They all exhibit the same behaviour.
