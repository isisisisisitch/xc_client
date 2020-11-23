/**
 * Created by Administrator on 2020/6/9.
 */
//导入model01.js
var {add} = require("./model01")
var Vue = require("./vue.min")
var VM = new Vue({
    el:'#app',//vm接管了app区域的管理
    data:{//model数据
        name:'bytetube',
        num1:0,
        num2:0,
        result:0,
        url:'http://www.bytetube.ca',

    },
    methods:{
        change:function () {
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2))
            // this.result = Number.parseInt(this.num1)+Number.parseInt(this.num2)

        }
    }
});