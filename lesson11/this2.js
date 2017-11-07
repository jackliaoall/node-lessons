var myObject = {value: 100};
myObject.getValue = function () {
  var foo = function () {
    console.log(this.value) // => undefined
    console.log(this);// 输出全局对象 global
  };

  foo();

  return this.value;
};

console.log(myObject.getValue()); // => 100
