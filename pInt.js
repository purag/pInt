function pInt (num) {
    this.num = num.toString();
    
    this.toString = function () {
        return this.num;
    };
    
    this.plus = function (y) {
        var x = this.num;
		if (y instanceof pInt) y = y.toString();

        var sum = new Array(x.length + y.length);
        var i = x.length - 1,
            j = y.length - 1;
        var k = sum.length - 1;

        var partial = 0;
        while (k >= 0) {
            var carry = 0;
            if (i >= 0) {
                partial += parseInt(x[i--], 10);
            }
            if (j >= 0) {
                partial += parseInt(y[j--], 10);
                if (partial >= 10) carry = 1;
            }
            partial = "" + partial;
            sum[k--] = partial[partial.length - 1];
            partial = carry;
        }

        return new pInt(sum.join("").replace(/^0+/, ""));
    };

    this.times = function (y) {
        var x = this.num;
		if (y instanceof pInt) y = y.toString();
        
        var product = new Array(x.length + y.length);

        var outerSum = new pInt("0");
        for (var i = x.length - 1; i >= 0; i--) {
            var xSize = x.length - i;
            var innerSum = new pInt("0");

            for (var j = y.length - 1; j >= 0; j--) {
                var ySize = y.length - j;
                partialsum = new Array(xSize + ySize);

                var zeroes = xSize + ySize - 2;
                for (var z = partialsum.length - 1; z >= partialsum.length - zeroes; z--) {
                    partialsum[z] = "0";
                }

                var prod = "" + (parseInt(x[i], 10) * parseInt(y[j], 10));
                partialsum[z--] = prod[prod.length - 1];
                if (prod.length > 1) partialsum[z] = prod[0];

                innerSum = innerSum.plus(partialsum.join(""));
            }

            outerSum = outerSum.plus(innerSum);
        }

        return new pInt(outerSum.toString().replace(/^0+/, ""));
    };
}