define('app',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function App() {
        _classCallCheck(this, App);

        this.things = [{ id: 1, name: 'This has an optional property', optional: "Hi, I'm optional" }, { id: 2, name: "This doesn't have an optional property" }, { id: 3, name: 'This has a null optional property', optional: null }, { id: 4, name: 'This has an undefined optional property', optional: undefined }, { id: 5, name: 'This has an empty string optional property', optional: "" }, { id: 6, name: 'This has a whitespace string optional property', optional: " " }];

        this.selectedThings = null;
    };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><style>div{height:60px}</style><div><form><label><h2>Select 1 then 2</h2><select value.bind=\"selectedThing\"><option model.bind=\"null\">Choose...</option><option repeat.for=\"thing of things\" model.bind=\"thing\">${thing.id} - ${thing.name}</option></select></label></form></div><div><h2>Id</h2>${selectedThing.id}</div><div><h2>Name</h2>${selectedThing.name}</div><div><h2>Optional</h2>${selectedThing.optional}</div></template>"; });
//# sourceMappingURL=app-bundle.js.map