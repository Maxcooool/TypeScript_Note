console.log("hello typescript!");
(function () {
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
    })(Color || (Color = {}));
    console.log(Color, "zzz");
    var Student = /** @class */ (function () {
        function Student(name, age) {
            this.name = name;
            this.age = age;
        }
        Student.prototype.sayHi = function () {
            var hiString = "Hello, my name is ".concat(this.name, ".\nI'll be ").concat(this.age + 1, " years old next month.");
            console.log(hiString);
        };
        return Student;
    }());
    var s = new Student("XiaoHu", 12);
    s.sayHi();
})();
