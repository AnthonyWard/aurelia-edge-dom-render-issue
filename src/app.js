export class App {
    constructor() {
        this.things = [
            { id: 1, name: 'This has an optional property', optional: "Hi, I'm optional"  },
            { id: 2, name: "This doesn't have an optional property" },
            { id: 3, name: 'This has a null optional property', optional: null  },
            { id: 4, name: 'This has an undefined optional property', optional: undefined  },
            { id: 5, name: 'This has an empty string optional property', optional: ""  },
            { id: 6, name: 'This has a whitespace string optional property', optional: " "  }
        ];

        this.selectedThings = null;
    }
}