# pInt
A basic 'really big integer' library for Javascript - pInt uses pIntegers!

## Usage
To create a new pInteger, just use `var myInt = new pInt("12345678987654321");`.

**NOTE:** pInt objects are immutable. The pInteger that one is initialized with is not accessible as an object property, and cannot be updated after it is set. It can be retrieved via `toString`.

Currently, the available arithmetic operations are `plus` and `times`. Both operations return a new pInteger.

[Here](https://jsfiddle.net/purmou/42e8hx5f/embedded/result/) is a demo.

### `plus`

    var double = myInt.plus(myInt);

Returns the sum of two pIntegers. It also accepts non-pInt numbers, i.e:

    var double = myInt.plus("12345678987654321");

### `times`

    var square = myInt.times(myInt);

Returns the product. Same usage as `plus`.