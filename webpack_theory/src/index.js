import '../css/main.css'
// import $ from 'jquery'

var login_btn = $("<button id='btn_login'>Login</button>")
var register_btn = $("<button id='btn_register'>Register</button>")
var div = $("<div id='div'></div>")
$('body').append(login_btn)
$('body').append(register_btn)
$('body').append(div)

$("#btn_login").click(function(){
    import(/*webpackChunkName:'login'*/'../js/login.js').then(function(module){
        module.login_page()
    })
})

$("#btn_register").click(function(){
    import(/*webpackChunkName:'register'*/'../js/register.js').then(function(module){
        module.default()
    })
})


