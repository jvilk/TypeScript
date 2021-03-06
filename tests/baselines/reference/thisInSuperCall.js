//// [thisInSuperCall.ts]
class Base { 
    constructor(x: any) {}
}

class Foo extends Base {
    constructor() {
        super(this); // error: "super" has to be called before "this" accessing
    }
}

class Foo2 extends Base {
    public p = 0;
    constructor() {
        super(this); // error
    }
}

class Foo3 extends Base {
    constructor(public p) {
        super(this); // error
    }
}

//// [thisInSuperCall.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base(x) {
    }
    return Base;
}());
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo() {
        return _super.call(this, _this) || this;
    }
    return Foo;
}(Base));
var Foo2 = (function (_super) {
    __extends(Foo2, _super);
    function Foo2() {
        var _this = _super.call(this, _this) || this;
        _this.p = 0;
        return _this;
    }
    return Foo2;
}(Base));
var Foo3 = (function (_super) {
    __extends(Foo3, _super);
    function Foo3(p) {
        var _this = _super.call(this, _this) || this;
        _this.p = p;
        return _this;
    }
    return Foo3;
}(Base));
