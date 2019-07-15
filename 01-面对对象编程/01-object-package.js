// 01 使用变量来保存函数
function method1 () {
    // var CheckName = function(){
    //     console.log("username")
    // }
    // var CheckEmail = function(){
    //     console.log("userEmail")
    // }
    // var CheckPassword = function(){
    //     console.log("password")
    // }
    // 01 调用变量声明的函数
    // CheckEmail()
    // CheckName()
    // CheckPassword()
    // 02 使用对象存储函数
}
// 02 使用对象存储函数
function method2 () {
    // var CheckObject = {
    //     CheckName : function(){
    //         console.log("username")
    //     },
    //     CheckPassword : function(){
    //         console.log("password")
    //     },
    //     CheckEmail : function(){
    //         console.log("userEmail")
    //     }
    // }
    // 02 调用使用对象存储的函数
    // CheckObject.CheckEmail()
    // CheckObject.CheckName()
    // CheckObject.CheckPassword()
}
// 03 先声明对象，在创建方法
function method3 () {
    // var CheckObject = function () {}
    // CheckObject.CheckName = function () {
    //     console.log("username")
    // }
    // CheckObject.CheckEmail = function () {
    //     console.log("username")
    // }
    // CheckObject.CheckPassword = function () {
    //     console.log("username")
    // }
    // 03 方法调用
    // CheckObject.CheckEmail()
    // CheckObject.CheckName()
    // CheckObject.CheckPassword()
}
// 04 通过return 使得我们调用这个函数时，每次返回的值都是一个新的对象
function method4 () {
    // var CheckObject = function (){
    //     return {
    //         CheckName : function(){
    //             console.log("username")
    //         },
    //         CheckPassword : function(){
    //             console.log("password")
    //         },
    //         CheckEmail : function(){
    //             console.log("userEmail")
    //         }
    //     }
    // }
    // 04 方法调用
    // var a = CheckObject()
    // a.CheckEmail()
    // a.CheckName()
    // a.CheckPassword()
}
// 05 通过this 将函数赋值到 object 的类上 这样原来的函数可以看成是一个类
// 05 调用时使用关键字 new 来进行创建
function method5 () {
    var CheckObject = function (){
        this.CheckName = function(){
            console.log("username")
        },
        this.CheckPassword = function(){
            console.log("password")
        },
        this.CheckEmail = function(){
            console.log("userEmail")
        }
    }
    // 05 方法调用
    var a = new CheckObject()
    a.CheckEmail()
    a.CheckName()
    a.CheckPassword()
}
// 06 使用 prototype 使得我们所创建的方法在根据原型进行查找时，都是同一个方法
function method6 () {
    var CheckObject = function (){}
    // CheckObject.prototype.CheckName = function(){
    //     console.log("username")
    // },
    // CheckObject.prototype.CheckPassword = function(){
    //     console.log("password")
    // },
    // CheckObject.prototype.CheckEmail = function(){
    //     console.log("userEmail")
    // }
    CheckObject.prototype = {
        CheckName : function(){
            console.log("username")
            // 返回的 this 指的是当前对象返回，可以在后面使用.继续调用方法
            return this
        },
        CheckPassword : function(){
            console.log("username")
            return this
        },
        CheckEmail : function(){
            console.log("username")
            return this
        }
    }
    // 06 方法调用
    var a = new CheckObject()
    // a.CheckEmail()
    // a.CheckName()
    // a.CheckPassword()
    a.CheckName().CheckPassword().CheckEmail()
}
method6()
