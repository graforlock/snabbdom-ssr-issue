var snabbdom = require('snabbdom-pragma')
var patch = require('snabbdom').init([ // Init patch function with chosen modules
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default // attaches event listeners
])

var newNode =
  <div>
    <h1>Hello world</h1>
    <button>Increment</button>
  </div>

patch(document.querySelector('div'), newNode)
