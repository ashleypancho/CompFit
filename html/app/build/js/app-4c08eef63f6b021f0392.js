webpackJsonp([0],[function(e,t,a){e.exports=a(1)},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i=r(n),o=a(4),l=r(o),s=a(5),u=r(s),c=a(16),d=r(c),p=a(46),f=r(p),m=a(71),v=r(m);a(77),t["default"]=i["default"].module("app",["mgcrea.ngStrap",l["default"],d["default"],f["default"],v["default"]]).config(u["default"]),e.exports=t["default"]},,,,function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),i=r(n),o=a(7),l=r(o),s=a(8),u=r(s),c=a(9),d=r(c),p=a(10),f=r(p),m=a(11),v=r(m),h=a(12),g=r(h),b=a(13),y=r(b),x=a(14),_=r(x),w=a(15),C=r(w);t["default"]=["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,a){"ngInject";a.html5Mode({enabled:!0,requireBase:!1}),t.otherwise("/"),e.state("app",{url:"","abstract":!0,templateUrl:i["default"],controller:"ApplicationController"}).state("app.about",{url:"/about/",templateUrl:_["default"],controller:"AboutController"}).state("app.register",{url:"/register/",templateUrl:C["default"],controller:"RegisterController"}).state("app.home",{url:"/",templateUrl:u["default"],controller:"HomeController"}).state("app.team",{url:"/team/:id",templateUrl:v["default"],controller:"TeamController"}).state("app.challenge",{url:"/challenge/:id",templateUrl:g["default"],controller:"ChallengeController"}).state("app.exercise",{url:"/exercise/:id",templateUrl:y["default"],controller:"ExerciseController"}).state("app.login",{url:"/login",templateUrl:d["default"],controller:"LoginController"}).state("app.my",{url:"/my",templateUrl:l["default"],controller:"AuthenticationController"}).state("app.my.profile",{url:"/profile",templateUrl:f["default"],controller:"MyProfileController"})}],e.exports=t["default"]},function(e,t){var a="controllers/application/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=application><ui-view></ui-view></div>")}]),e.exports=a},function(e,t){var a="controllers/authentication/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=authentication><ui-view></ui-view></div>")}]),e.exports=a},function(e,t){var a="controllers/home/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,"<div id=home><div class=container><br><div class=jumbotron><h1>Competitive workout with friends</h1><hr><p>This is some description of the website. We gotta make this lot good.</p></div></div></div>")}]),e.exports=a},function(e,t){var a="controllers/login/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<h1>CompFit</h1><div id=login><div class=container><h2>Log in</h2><form><div class="form-group row"><input type=email class=form-control ng-model=user.email placeholder=Email required></div><div class="form-group row"><input type=password class=form-control ng-model=user.password placeholder=Password required></div><div class="form-group row"><button class="btn btn-primary" ng-click=login()>Log in</button></div></form></div></div><p>Don\'t have an account? <a href=#>Register here.</a></p>')}]),e.exports=a},function(e,t){var a="controllers/myProfile/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div id=my-profile><div class=jumbotron><h1>This! Is! My profile!!1</h1><div><button class="btn btn-default" ng-click=logout()>logout</button></div><div><img ng-src={{ngImg}} alt=""></div></div></div>')}]),e.exports=a},function(e,t){var a="controllers/team/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div id=team><div class=container><div class=row><div class=col-sm-3><seed-sidebar></seed-sidebar></div><div class=col-sm-9><div class="topSection row" ng-show=team_selected><div class=col-sm-2><img src={{avatar}} alt=/img/team_avatars/default-avatar.png class=img-thumbnail></div><div class=col-sm-10><h1>Team {{team_id}}</h1><button class="btn btn-info players_dropdown_btn" ng-click="players_dropdown = !players_dropdown">Players <span class=caret></span></button><div class="list-group players_dropdown" ng-show=players_dropdown><div ng-repeat="player in players"><a class=list-group-item>{{player.username}}</a></div></div></div></div><div class=topSection ng-show=!team_selected><h2>Select a Team</h2></div><create-team-modal id=createteammodal title="New Team"></div></div></div></div>')}]),e.exports=a},function(e,t){var a="controllers/challenge/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div id=challenge><div class=container><div class=row><div class=col-sm-3><challenges-sidebar></challenges-sidebar></div><div class=col-sm-9><div class="topSection row" ng-show=challenge_selected></div><div class=topSection ng-show=!challenge_selected><h2>Select a Challenge</h2></div></div></div></div></div>')}]),e.exports=a},function(e,t){var a="controllers/exercise/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div id=exercise><div class=container><div class=row><div class=col-sm-3><exercises-sidebar></exercises-sidebar></div><div class=col-sm-9><div class="topSection row" ng-show=exercise_selected></div><div class=topSection ng-show=!exercise_selected><h2>Select an Exercise</h2></div></div></div></div></div>')}]),e.exports=a},function(e,t){var a="controllers/about/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div id=about><div class=aboutCompFit><h2>About CompFit</h2><div>Compfit is an interactive app that allows people to join fitness teams and compete against others. Users can collaborate with their teammates to complete goals and gain the motivation they need to workout and get fit. Competition will drive users to work harder and hold their teammates accountable to meet their goals.</div></div><hr><div class=aboutdEVolution><h2>About dEVolution</h2><div class=row><h3>GUI Team</h3><div class=col-md-4><span>Ashley Pancho</span><br><img src="/img/devolution/ashley.jpg"></div><div class=col-md-4><span>Travis Siems</span><br><img src="/img/devolution/travis.jpeg"></div><div class=col-md-4><span>Emely Villeda-Principe</span><br><img src="/img/devolution/emely.jpg"></div></div><div class=row><h3>Database Team</h3><div class=col-md-4><span>Nigel Saurino</span><br><img src="/img/devolution/nigel.png"></div><div class=col-md-4><span>Elena Sharp</span><br><img src="/img/devolution/elena.jpeg"></div><div class=col-md-4><span>Emily Stephanian</span><br></div></div></div></div>')}]),e.exports=a},function(e,t){var a="controllers/register/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div id=register><div class="col-md-4 col-md-offset-4"><h1>CompFit</h1><h2>Register</h2><br><button type=button class="btn btn-primary">Log in with Facebook</button><hr><div class=form-group-row ng-app=registerForm ng-controller=registerController><form class=register><input ng-model=newUser.firstName class=form-control placeholder="First Name" required><input ng-model=newUser.lastName class=form-control placeholder="Last Name" required><input ng-model=newUser.username class=form-control placeholder=Username required><input type=email ng-model=newUser.email class=form-control placeholder=leela.turanga@planetexpress.com required><input type=password ng-model=newUser.password class=form-control placeholder=password required><button type=submit ng-click=submit(newUser) class="btn btn-primary">Submit</button></form>Already have an account? <a ui-sref=app.login>Log in.</a></div></div></div>')}]),e.exports=a},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i=r(n),o=a(17),l=r(o),s=a(22),u=r(s),c=a(23),d=r(c),p=a(26),f=r(p),m=a(27),v=r(m),h=a(31),g=r(h),b=a(34),y=r(b),x=a(37),_=r(x),w=a(40),C=r(w),k=a(43),P=r(k);t["default"]=i["default"].module("app.controllers",[]).controller("ApplicationController",l["default"]).controller("AuthenticationController",u["default"]).controller("HomeController",d["default"]).controller("LoginController",f["default"]).controller("MyProfileController",v["default"]).controller("TeamController",g["default"]).controller("ChallengeController",y["default"]).controller("ExerciseController",_["default"]).controller("AboutController",C["default"]).controller("RegisterController",P["default"]).name,e.exports=t["default"]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(18),t["default"]=function(){"ngInject"},e.exports=t["default"]},[80,19,19,19],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<t.length;n++){var o=t[n];"number"==typeof o[0]&&r[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},function(e,t,a){function r(e,t){for(var a=0;a<e.length;a++){var r=e[a],n=d[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(l(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(l(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:o}}}}function n(e){for(var t=[],a={},r=0;r<e.length;r++){var n=e[r],i=n[0],o=n[1],l=n[2],s=n[3],u={css:o,media:l,sourceMap:s};a[i]?a[i].parts.push(u):t.push(a[i]={id:i,parts:[u]})}return t}function i(){var e=document.createElement("style"),t=m();return e.type="text/css",t.appendChild(e),e}function o(){var e=document.createElement("link"),t=m();return e.rel="stylesheet",t.appendChild(e),e}function l(e,t){var a,r,n;if(t.singleton){var l=h++;a=v||(v=i()),r=s.bind(null,a,l,!1),n=s.bind(null,a,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=o(),r=c.bind(null,a),n=function(){a.parentNode.removeChild(a),a.href&&URL.revokeObjectURL(a.href)}):(a=i(),r=u.bind(null,a),n=function(){a.parentNode.removeChild(a)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}function s(e,t,a,r){var n=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var i=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function u(e,t){var a=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function c(e,t){var a=t.css,r=(t.media,t.sourceMap);r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([a],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(n),i&&URL.revokeObjectURL(i)}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f());var a=n(e);return r(a,t),function(e){for(var i=[],o=0;o<a.length;o++){var l=a[o],s=d[l.id];s.refs--,i.push(s)}if(e){var u=n(e);r(u,t)}for(var o=0;o<i.length;o++){var s=i[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var g=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$state","Authentication",function(e,t){"ngInject";t.loggedIn||e.go("app.login")}],e.exports=t["default"]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(24),t["default"]=["$scope","$http","Teams",function(e,t,a){"ngInject"}],e.exports=t["default"]},[80,25,25,25],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#home{background-image:URL('/img/banner.jpg');background-size:cover;min-height:626px;max-height:826px;color:#fff;text-align:center}#home .jumbotron{background-color:rgba(0,0,0,.4);height:425px}#home hr{width:50%}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$scope","$state","Authentication",function(e,t,a){"ngInject";e.login=function(){a.logIn(),t.go("app.my.profile")},e.isLoggedIn=function(){return a.loggedIn}}],e.exports=t["default"]},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(28);var n=a(30),i=r(n);t["default"]=["$scope","$state","Authentication",function(e,t,a){"ngInject";e.ngImg=i["default"],e.logout=function(){a.logOut(),t.go("app.home")}}],e.exports=t["default"]},[80,29,29,29],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#my-profile .btn{margin-bottom:10px}",""])},function(e,t,a){e.exports=a.p+"assets/a47e8e32b39fd933eef45b7f5503bfc9angular.png"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(32),t["default"]=["$scope","$stateParams","Teams",function(e,t,a){"ngInject";e.toggleModal=function(){console.log(e.new_team),$("#createteammodal").modal("show")},e.team_id=-1,e.avatar="/img/team_avatars/default-avatar.png",e.players=[],e.players_dropdown=!1,e.team_selected=!1,e.new_team={},""!=t.id&&(e.team_id=t.id,e.team_selected=!0,a.getTeamById(e.team_id).then(function(t){e.thisTeam=t.data,console.log(t.data),e.avatar=t.data.avatar,e.players=t.data.players}))}],e.exports=t["default"]},[80,33,33,33],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#team .topSection{height:200px}#team .topSection img{width:130px;height:130px;float:left;margin-top:20px}#team .topSection .players_dropdown_btn{display:block}#team .topSection .players_dropdown{width:75pt}#team .topSection .players_dropdown .list-group-item{display:block;padding:3px 5px;margin:-1px}",""])},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(35),t["default"]=["$scope","$stateParams","Challenges",function(e,t,a){"ngInject";e.challenge_selected=!1}],e.exports=t["default"]},[80,36,36,36],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#challenge .topSection{height:200px}#challenge .topSection img{width:130px;height:130px;float:left;margin-top:20px}",""])},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(38),t["default"]=["$scope","$stateParams","Challenges",function(e,t,a){"ngInject";e.exercise_selected=!1}],e.exports=t["default"]},[80,39,39,39],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#exercise .topSection{height:200px}#exercise .topSection img{width:130px;height:130px;float:left;margin-top:20px}",""])},[81,41],[80,42,42,42],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#about .topSection{height:200px;background-color:#d3d3d3}#about img{width:40%;height:auto}#about .topSection h1{display:inline-block}",""])},[81,44],[80,45,45,45],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#register .topSection{height:200px;background-color:#d3d3d3}#register .topSection img{display:inline-block;width:140px;height:140px;margin-left:20px;margin-top:20px;margin-right:20px}#register .topSection h1{display:inline-block}",""])},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i=r(n),o=a(47),l=r(o),s=a(51),u=r(s),c=a(55),d=r(c),p=a(59),f=r(p),m=a(63),v=r(m),h=a(67),g=r(h);t["default"]=i["default"].module("app.directives",[]).directive("seedSidebar",["Teams",l["default"]]).directive("createTeamModal",["Teams","Users","$timeout",u["default"]]).directive("challengesSidebar",["Challenges",d["default"]]).directive("exercisesSidebar",["Exercises",f["default"]]).directive("seedNavbar",v["default"]).directive("seedLogbutton",g["default"]).name,e.exports=t["default"]},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(48);var n=a(50),i=r(n);t["default"]=function(e){return{restrict:"E",replace:!0,link:function(t,a,r){t.teams=e.getTeams(),console.log(t.teams),t.teams||e.getTeamsForUser(1).then(function(e){console.log(e.data),t.teams=e.data})},templateUrl:i["default"]}},e.exports=t["default"]},[80,49,49,49],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"@media (min-width:768px){.col-sm-3{width:20%!important}.teams-sidebar{position:fixed;left:0;height:100%;min-width:250px}.teams-sidebar .navbar .navbar-collapse{padding:0;max-height:none}.teams-sidebar h3{padding-left:10px;padding-right:10px}.navbar{height:100%;border-radius:0}}",""])},function(e,t){var a="directives/teams_sidebar/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div class=teams-sidebar><div class="navbar navbar-default" role=navigation><div><h3>Your Teams <a ng-click=toggleModal()><i class="fa fa-plus-circle fa-lg fa-pull-right"></i></a></h3><div class="nav list-group"><div ng-repeat="team in teams"><a class=list-group-item ui-sref-active=active ui-sref=app.team({id:{{team.team_id}}})>{{team.team_name}}</a></div></div></div></div></div>')}]),e.exports=a},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(52);var n=a(54),i=r(n);t["default"]=function(e,t,a){return{restrict:"E",replace:!0,scope:!0,link:function(e,r,n){e.title=n.title,e.new_team.name="",e.new_team.players=[],e.test_player_name="",e.addPlayerFormError="",e.addPlayerForNewTeam=function(){e.addPlayerFormError="";var r=e.test_player_name;e.test_player_name="";for(var n=-1,i=0;i<e.new_team.players.length;i++)if(e.new_team.players[i].username==r){n=i;break}-1==n?t.getUserByUsername(r).then(function(t){console.log(t.data),t.data<0?console.log("ERROR! in getting userbyusername in create_team_modal"):e.new_team.players.push(t.data)}):(e.addPlayerFormError="That player is already added.",a(function(){e.addPlayerFormError=""},1500))},e.removeProspectivePlayer=function(t){var a=e.new_team.players.indexOf(t);e.new_team.players.splice(a,1)},e.submitTeam=function(){}},templateUrl:i["default"]}},e.exports=t["default"]},[80,53,53,53],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"#create_team_modal .badge-danger{background-color:#d9534f;float:right}#create_team_modal .addPlayerFormErrorMsg{color:red}",""])},function(e,t){var a="directives/create_team_modal/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div class="modal fade"><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title>{{ title }}</h4></div><div class=modal-body><div id=create_team_modal><form role=form><div class=form-group><label for=team_name>Team Name</label><input class=form-control placeholder="Team Name" ng-model=new_team.name required></div></form><form role=form ng-submit=addPlayerForNewTeam() name=addPlayerForm><div class=form-group><label for=players>Add Players</label><div class=input-group><span class=input-group-addon><i class="fa fa-search"></i></span> <input class=form-control placeholder="Search username..." ng-model=test_player_name required> <span class=input-group-btn><button class="btn btn-primary" type=submit>Add</button></span></div></div><div ng-show=addPlayerFormError class=addPlayerFormErrorMsg>{{addPlayerFormError}}</div></form><div class=list-group><div ng-repeat="player in new_team.players"><p class=list-group-item>{{player.username}} <button class="btn badge badge-danger" ng-click=removeProspectivePlayer(player)><i class="fa fa-times"></i></button></p></div></div><button type=submit class="btn btn-success">Create</button></div></div></div></div></div>')}]),e.exports=a},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(56);var n=a(58),i=r(n);t["default"]=function(e){return{restrict:"E",replace:!0,link:function(e,t,a){},templateUrl:i["default"]}},e.exports=t["default"]},[80,57,57,57],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"@media (min-width:768px){.col-sm-3{width:20%!important}.challenges-sidebar{position:fixed;left:0;height:100%;min-width:250px}.challenges-sidebar .navbar .navbar-collapse{padding:0;max-height:none}.challenges-sidebar h3{padding-left:10px;padding-right:10px}.navbar{height:100%;border-radius:0}}",""])},function(e,t){var a="directives/challenges_sidebar/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div class=challenges-sidebar><div class="navbar navbar-default" role=navigation><div><h3>Your Challenges <a ui-sref-active=active ui-sref=app.challenge><i class="fa fa-plus-circle fa-lg fa-pull-right"></i></a></h3><div class="nav list-group"><div ng-repeat="challenge in challenges"><a class=list-group-item ui-sref-active=active ui-sref=app.challenge({id:{{challenge.challenge_id}}})>{{challenge.challenge_name}}</a></div></div></div></div></div>')}]),e.exports=a},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(60);var n=a(62),i=r(n);t["default"]=function(e){return{restrict:"E",replace:!0,link:function(e,t,a){},templateUrl:i["default"]}},e.exports=t["default"]},[80,61,61,61],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"@media (min-width:768px){.col-sm-3{width:20%!important}.exercises-sidebar{position:fixed;left:0;height:100%;min-width:250px}.exercises-sidebar .navbar .navbar-collapse{padding:0;max-height:none}.exercises-sidebar h3{padding-left:10px;padding-right:10px}.navbar{height:100%;border-radius:0}}",""])},function(e,t){var a="directives/exercises_sidebar/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<div class=exercises-sidebar><div class="navbar navbar-default" role=navigation><div><h3>Exercise Log</h3><div class="nav list-group"><div ng-repeat="exercise in log"><a class=list-group-item ui-sref-active=active ui-sref=app.exercise({id:{{exercise.exercise_id}}})>{{exercise.exercise_name}}</a></div></div></div></div></div>')}]),e.exports=a},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(64);var n=a(66),i=r(n);t["default"]=function(){return{restrict:"E",templateUrl:i["default"]}},e.exports=t["default"]},[80,65,65,65],function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"@media (min-width:768px){.navbar{margin-bottom:0!important;border-radius:0!important}.navbar-brand{padding:0 15px}.navbar-brand>img{height:100%}}",""])},function(e,t){var a="directives/navbar/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<nav class="navbar navbar-default" role=navigation bs-navbar><div class=container><div class=navbar-header><a class=navbar-brand ui-sref=app.home><img src="/img/application/logo-name.png"></a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ui-sref-active=active><a ui-sref=app.home>Home</a></li><li ui-sref-active=active><a ui-sref=app.team>Teams</a></li><li ui-sref-active=active><a ui-sref=app.challenge>Challenges</a></li><li ui-sref-active=active><a ui-sref=app.exercise>Exercises</a></li></ul><ul class="nav navbar-nav navbar-right"><li ui-sref-active=active><a ui-sref=app.register>Register</a></li><li ui-sref-active=active><a ui-sref=app.my.profile>My Profile</a></li><li ui-sref-active=active><a ui-sref=app.about>About</a></li></ul></div></div></nav>')}]),e.exports=a},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(68);var n=a(70),i=r(n);t["default"]=function(){return{restrict:"E",replace:!0,templateUrl:i["default"]}},e.exports=t["default"]},[80,69,69,69],19,function(e,t){var a="directives/logbutton/template.html";window.angular.module("ng").run(["$templateCache",function(e){e.put(a,'<button type=button class="btn btn-success btn-block"><h3>Log Workout</h3></button>')}]),e.exports=a},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i=r(n),o=a(72),l=r(o),s=a(73),u=r(s),c=a(74),d=r(c),p=a(75),f=r(p),m=a(76),v=r(m);t["default"]=i["default"].module("app.services",[]).service("Authentication",l["default"]).service("Teams",["$http",u["default"]]).service("Challenges",["$http",d["default"]]).service("Exercises",["$http",f["default"]]).service("Users",["$http",v["default"]]).name,e.exports=t["default"]},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=function(){function e(){a(this,e),this.loggedIn=!1}return r(e,[{key:"logIn",value:function(){this.loggedIn=!0}},{key:"logOut",value:function(){this.loggedIn=!1}}]),e}();t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=function(){function e(t){a(this,e),this.$http=t;var r=this;r.teams=[]}return r(e,[{key:"getTeamById",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/team/"+e}).then(function(e){return e},function(e){return e})}},{key:"getTeamsForUser",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/teams/"+e}).then(function(e){return self.teams=e.data,e},function(e){return e})}},{key:"getTeams",value:function(){return self.teams}}]),e}();t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=function(){function e(t){a(this,e),this.$http=t;var r=this;r.challenges=[]}return r(e,[{key:"getChallengeById",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/team/"+team_id}).then(function(e){return e},function(e){return e})}},{key:"getChallengesForUser",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/teams/"+e}).then(function(e){return self.challenges=e.data,e},function(e){return e})}},{key:"getChallenges",value:function(){return self.challenges}}]),e}();t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=function(){function e(t){a(this,e),this.$http=t;var r=this;r.exercises=[]}return r(e,[{key:"getExerciseById",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/team/"+team_id}).then(function(e){return e},function(e){return e})}},{key:"getExercisesForUser",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/teams/"+e}).then(function(e){return self.exercises=e.data,e},function(e){return e})}},{key:"getExercises",value:function(){return self.exercise}}]),e}();t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=function(){function e(t){a(this,e),this.$http=t}return r(e,[{key:"getUserById",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/user/"+e}).then(function(e){return e},function(e){return e})}},{key:"getUserByUsername",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/username/"+e}).then(function(e){return e},function(e){return e})}},{key:"getUsersForTeam",value:function(e){return this.$http({method:"GET",url:"http://private-c84bfb-compfit.apiary-mock.com/users/"+e}).then(function(e){return self.teams=e.data,e},function(e){return e})}}]),e}();t["default"]=n,e.exports=t["default"]},function(e,t,a){var r=a(78);"string"==typeof r&&(r=[[e.id,r,""]]);var n=a(21)(r,{});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(78,function(){var t=a(78);"string"==typeof t&&(t=[[e.id,t,""]]),n(t)}),e.hot.dispose(function(){n()})},function(e,t,a){t=e.exports=a(20)(),t.push([e.id,"html{position:relative;min-height:100%}.topSection{height:200px;background-color:#d3d3d3}.topSection img{width:140px;height:140px;margin-left:20px;margin-top:20px;margin-right:20px}.topSection h1,.topSection img{display:inline-block}",""])},,function(e,t,a,r,n,i){var o=a(r);"string"==typeof o&&(o=[[e.id,o,""]]);var l=a(21)(o,{});o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(n,function(){var t=a(i);"string"==typeof t&&(t=[[e.id,t,""]]),l(t)}),e.hot.dispose(function(){l()})},function(e,t,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(r),t["default"]=["$scope","$stateParams","Teams",function(e,t,a){"ngInject";e.team_id=t.id,e.avatar="/img/team_avatars/default-avatar.png",a.getTeamById(e.team_id).then(function(t){e.thisTeam=t.data,console.log(t.data),e.avatar=t.data.avatar})}],e.exports=t["default"]}]);