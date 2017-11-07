var eventProxy = require('eventproxy');
var ep = eventProxy.create();

ep.all("redis","change", function(list, change){
  console.log('list = ', list);
  console.log('change = ', change);
});

function ICO() {
  var parent = this;
  this.store = {};
  this.change = {};
  this.today = '20170914';
  this.async = {
      'fun': {
        set: function() {
          parent.store.name = 'ICO';
          ep.emit("redis", parent.store);
        },
        change: function() {
          parent.change.name = 'OCI';
          ep.emit("change", parent.change);
        }
     }
  }
}

var ico = new ICO();
ico.async.fun.set();
ico.async.fun.change();
