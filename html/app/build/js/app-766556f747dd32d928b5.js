webpackJsonp([0],[function(e,t,a){e.exports=a(1)},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=o(n),r=a(6),i=o(r),u=a(7),c=o(u),s=a(16),d=o(s),p=a(40),f=o(p),v=a(51),m=o(v);a(53),t["default"]=l["default"].module("app",["mgcrea.ngStrap",i["default"],d["default"],f["default"],m["default"]]).config(c["default"]),e.exports=t["default"]},,,,,,function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(8),l=o(n),r=a(9),i=o(r),u=a(10),c=o(u),s=a(11),d=o(s),p=a(12),f=o(p),v=a(13),m=o(v),g=a(14),h=o(g),b=a(15),_=o(b);t["default"]=["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,a){"ngInject";a.html5Mode({enabled:!0,requireBase:!1}),t.otherwise("/"),e.state("app",{url:"","abstract":!0,templateUrl:l["default"],controller:"ApplicationController"}).state("app.home",{url:"/",templateUrl:c["default"],controller:"HomeController"}).state("app.team",{url:"/team/:id",templateUrl:_["default"],controller:"TeamController"}).state("app.page1",{url:"/page1",templateUrl:m["default"],controller:"Page1Controller"}).state("app.page2",{url:"/page2",templateUrl:h["default"],controller:"Page2Controller"}).state("app.login",{url:"/login",templateUrl:d["default"],controller:"LoginController"}).state("app.my",{url:"/my",templateUrl:i["default"],controller:"AuthenticationController"}).state("app.my.profile",{url:"/profile",templateUrl:f["default"],controller:"MyProfileController"})}],e.exports=t["default"]},function(e,t){var a="controllers/application/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=application><div class=container><ui-view></ui-view></div></div>")}]),e.exports=a},function(e,t){var a="controllers/authentication/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=authentication><ui-view></ui-view></div>")}]),e.exports=a},function(e,t){var a="controllers/home/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=home><div class=jumbotron><h1>The Hom Page</h1>{{ greeting }}</div><script>var loc = window.location.pathname;\n        var dir = loc.substring(0, loc.lastIndexOf('/'));\n        console.log(loc,dir);</script></div>")}]),e.exports=a},function(e,t){var a="controllers/login/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<h1>CompFit</h1><div id=login><h2>Log in</h2><form><div class="form-group row"><input type=email class=form-control ng-model=user.email placeholder=Email required></div><div class="form-group row"><input type=password class=form-control ng-model=user.password placeholder=Password required></div><div class="form-group row"><button class="btn btn-primary" ng-click=login()>Log in</button></div></form></div><p>Don\'t have an account? <a href=#>Register here.</a></p>')}]),e.exports=a},function(e,t){var a="controllers/myProfile/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div id=my-profile><div class=jumbotron><h1>This! Is! My profile!!1</h1><div><button class="btn btn-default" ng-click=logout()>logout</button></div><div><img ng-src={{ngImg}} alt=""></div></div></div>')}]),e.exports=a},function(e,t){var a="controllers/page1/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=home><div class=jumbotron><h1>Page 1</h1></div></div>")}]),e.exports=a},function(e,t){var a="controllers/page2/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=home><div class=jumbotron><h1>Page 2</h1></div></div>")}]),e.exports=a},function(e,t){var a="controllers/team/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=team><div class=jumbotron><h1>Team {{page_id}}</h1></div></div>")}]),e.exports=a},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=o(n),r=a(17),i=o(r),u=a(22),c=o(u),s=a(23),d=o(s),p=a(26),f=o(p),v=a(27),m=o(v),g=a(31),h=o(g),b=a(34),_=o(b),w=a(37),x=o(w);t["default"]=l["default"].module("app.controllers",[]).controller("ApplicationController",i["default"]).controller("AuthenticationController",c["default"]).controller("HomeController",d["default"]).controller("LoginController",f["default"]).controller("MyProfileController",m["default"]).controller("Page1Controller",h["default"]).controller("Page2Controller",_["default"]).controller("TeamController",x["default"]).name,e.exports=t["default"]},[83,18],[84,19,19,19],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"",""])},,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$state","Authentication",function(e,t){"ngInject";t.loggedIn||e.go("app.login")}],e.exports=t["default"]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(24),t["default"]=["$scope","$http",function(e,t){"ngInject";e.greeting="oh haita",t({method:"GET",url:"/api/index.php/users"}).then(function(e){console.log(e)},function(e){console.log("Error",e)});var a=window.location.pathname,o=a.substring(0,a.lastIndexOf("/"));console.log(a,o)}],e.hot.accept(),e.exports=t["default"]},[84,25,25,25],19,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$scope","$state","Authentication",function(e,t,a){"ngInject";e.login=function(){a.logIn(),t.go("app.my.profile")},e.isLoggedIn=function(){return a.loggedIn}}],e.exports=t["default"]},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(28);var n=a(30),l=o(n);t["default"]=["$scope","$state","Authentication",function(e,t,a){"ngInject";e.ngImg=l["default"],e.logout=function(){a.logOut(),t.go("app.home")}}],e.exports=t["default"]},[84,29,29,29],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#my-profile .btn{margin-bottom:10px}",""])},function(e,t,a){e.exports=a.p+"assets/a47e8e32b39fd933eef45b7f5503bfc9angular.png"},[83,32],[84,33,33,33],19,[83,35],[84,36,36,36],19,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(38),t["default"]=["$scope","$stateParams",function(e,t){"ngInject";e.page_id=t.id}],e.exports=t["default"]},[84,39,39,39],19,function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=o(n),r=a(41),i=o(r),u=a(45),c=o(u),s=a(47),d=o(s);t["default"]=l["default"].module("app.directives",[]).directive("seedSidebar",i["default"]).directive("seedNavbar",c["default"]).directive("seedLogbutton",d["default"]).name,e.exports=t["default"]},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(42);var n=a(44),l=o(n);t["default"]=function(){return{restrict:"E",replace:!0,templateUrl:l["default"]}},e.exports=t["default"]},[84,43,43,43],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"@media (min-width:768px){.sidebar-nav .navbar .navbar-collapse{padding:0;max-height:none}.sidebar-nav h3{padding-left:10px;padding-right:10px}}",""])},function(e,t){var a="directives/sidebar/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div class=sidebar-nav><div class="navbar navbar-default" role=navigation><div><h3>Your Teams <a ui-sref-active=active ui-sref=app.page1><i class="fa fa-plus-circle fa-lg fa-pull-right"></i></a></h3><div class="nav list-group"><a class=list-group-item ui-sref-active=active ui-sref=app.team({id:1})>Team 1</a> <a class=list-group-item ui-sref-active=active ui-sref=app.team({id:2})>Team 2</a> <a class=list-group-item ui-sref-active=active ui-sref=app.team({id:3})>Team 3</a> <a class=list-group-item ui-sref-active=active ui-sref=app.team({id:4})>Team 4</a></div></div></div></div>')}]),e.exports=a},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(46),l=o(n);t["default"]=function(){return{restrict:"E",templateUrl:l["default"]}},e.exports=t["default"]},function(e,t){var a="directives/navbar/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<nav class="navbar navbar-default" role=navigation bs-navbar><div class=container><div class=navbar-header><a class=navbar-brand ui-sref=app.home>Brand</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ui-sref-active=active><a ui-sref=app.home>Home</a></li><li ui-sref-active=active><a ui-sref=app.page1>Page One</a></li><li ui-sref-active=active><a ui-sref=app.page2>Page Two</a></li></ul><ul class="nav navbar-nav navbar-right"><li ui-sref-active=active><a ui-sref=app.my.profile>My Profile</a></li></ul></div></div></nav>')}]),e.exports=a},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(48);var n=a(50),l=o(n);t["default"]=function(){return{restrict:"E",replace:!0,templateUrl:l["default"]}},e.exports=t["default"]},[84,49,49,49],19,function(e,t){var a="directives/logbutton/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<button type=button class="btn btn-success btn-block" ui-sref-active=active ui-sref=app.page2><h3>Log Workout</h3></button>')}]),e.exports=a},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=o(n),r=a(52),i=o(r);t["default"]=l["default"].module("app.services",[]).service("Authentication",i["default"]).name,e.exports=t["default"]},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),n=function(){function e(){a(this,e),this.loggedIn=!1}return o(e,[{key:"logIn",value:function(){this.loggedIn=!0}},{key:"logOut",value:function(){this.loggedIn=!1}}]),e}();t["default"]=n,e.exports=t["default"]},function(e,t,a){var o=a(54);"string"==typeof o&&(o=[[e.id,o,""]]);var n=a(21)(o,{});o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(54,function(){var t=a(54);"string"==typeof t&&(t=[[e.id,t,""]]),n(t)}),e.hot.dispose(function(){n()})},function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"html{position:relative;min-height:100%}",""])},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(o),t["default"]=function(){"ngInject"},e.exports=t["default"]},function(e,t,a,o,n,l){var r=a(o);"string"==typeof r&&(r=[[e.id,r,""]]);var i=a(21)(r,{});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(n,function(){var t=a(l);"string"==typeof t&&(t=[[e.id,t,""]]),i(t)}),e.hot.dispose(function(){i()})}]);