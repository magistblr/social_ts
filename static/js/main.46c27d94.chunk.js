(this["webpackJsonpsocial_1.0_ts"]=this["webpackJsonpsocial_1.0_ts"]||[]).push([[0],{15:function(e,t,n){e.exports={pagination_wrapper:"Paginator_pagination_wrapper__1v_7L",pagination:"Paginator_pagination__3PXe4",pagination_item_wrapper:"Paginator_pagination_item_wrapper__1NlPV",pagination_wrapper_selected:"Paginator_pagination_wrapper_selected__H0QdS",ellipsis:"Paginator_ellipsis__8EaMS",arrow_disable:"Paginator_arrow_disable__xjbFE",arrow:"Paginator_arrow__1J2z7"}},16:function(e,t,n){e.exports={form:"LoginForm_form__iRxG3",input:"LoginForm_input__3KeZe",required:"LoginForm_required__1iUN3",checkbox_wrapper:"LoginForm_checkbox_wrapper__2Zj0x",checkbox:"LoginForm_checkbox__GZZ_K",text:"LoginForm_text__1juYv",button:"LoginForm_button__Dceiy",errorMessage:"LoginForm_errorMessage__1o0yS",input_captcha:"LoginForm_input_captcha__1F1Ur"}},23:function(e,t,n){e.exports={wrapper:"Users_wrapper__3nngw",logo:"Users_logo__QHSjf",descr_wrapper_outer:"Users_descr_wrapper_outer__2Whhg",descr_wrapper_inner:"Users_descr_wrapper_inner__2XT0f",descr:"Users_descr__1Rj5K",descr_status:"Users_descr_status__24AxJ",location:"Users_location__1jpYC",location_city:"Users_location_city__2Do-m"}},26:function(e,t,n){e.exports={app_wrapper:"App_app_wrapper__6AOKE",app_outer:"App_app_outer__2tyD3",app_inner:"App_app_inner__37UEa",header:"App_header__Ogb2n",wrapper:"App_wrapper__3rzpo",sidebar:"App_sidebar__2jex6",content:"App_content__1HEv3",item:"App_item__1gNW4"}},29:function(e,t,n){e.exports={list:"Navbar_list__zuUDk",list_items:"Navbar_list_items__F4Xcn",item:"Navbar_item__1clCk",item_active:"Navbar_item_active__hu_S-"}},30:function(e,t,n){e.exports={header:"Header_header__2ylUg",header_img:"Header_header_img__1dAnZ",header_login:"Header_header_login__MUUDF",button:"Header_button__kxxst",btn_button:"Header_btn_button__2SK7n"}},35:function(e,t,n){"use strict";n(0);var r=n(42),a=n.n(r),c=n(1);t.a=function(){return Object(c.jsx)("div",{className:a.a.wrapper,children:Object(c.jsx)("div",{className:a.a.spinner})})}},41:function(e,t,n){e.exports={wrapper:"Login_wrapper__2ubgL",login:"Login_login__20bJU",form:"Login_form__avJwU",input:"Login_input__KYclF",error_input:"Login_error_input__3a6Cu",btn:"Login_btn__aUYA2",error:"Login_error__1E4SK",remember:"Login_remember__sEXi4"}},42:function(e,t,n){e.exports={wrapper:"Spinner_wrapper__3R7Ga",spinner:"Spinner_spinner__3zklg","cp-round-animate":"Spinner_cp-round-animate__3IRoS"}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return h})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return O})),n.d(t,"f",(function(){return m}));var r=n(6),a=n(2),c=n(17),s=n(7),i="ADD_POST",o="ON_POST_CHANGE",u="SET_USER_PROFILE",l="SET_STATUS",d="SET_PHOTO",p={posts:[{id:Object(c.a)(),message:"Hi, how are you?"},{id:Object(c.a)(),message:"It's my first post"}],newPostText:"",profile:{userId:"",lookingForAJob:!0,lookingForAJobDescription:"",fullName:"",aboutMe:"",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""},photos:{small:"",large:""}},status:"----------"},j=function(e){return{type:i,newText:e}},b=function(e){return{type:o,newText:e}},_=function(e){return{type:l,status:e}},g=function(e){return function(t){s.e.getProfile(e).then((function(e){var n;t((n=e.data,{type:u,profile:n}))}))}},h=function(e){return function(t){s.c.getStatus(e).then((function(e){console.log(e.data),t(_(e.data))}))}},f=function(e){return function(t){s.c.updateStatus(e).then((function(n){0===n.data.resultCode&&t(_(e))}))}},O=function(e){return function(t,n){var r=n().auth.userId;s.c.updateProfile(e).then((function(e){0===e.data.resultCode&&t(g(r))}))}},m=function(e){return function(t){s.c.savePhoto(e).then((function(e){var n;0===e.data.data.resultCode&&t((n=e.data.photos,{type:d,photos:n}))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(a.a)(Object(a.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[{id:Object(c.a)(),message:t.newText}])});case o:return Object(a.a)(Object(a.a)({},e),{},{newPostText:t.newText});case u:return Object(a.a)(Object(a.a)({},e),{},{profile:t.profile});case l:return Object(a.a)(Object(a.a)({},e),{},{status:t.status});case d:return Object(a.a)(Object(a.a)({},e),{},{profile:Object(a.a)(Object(a.a)({},e.profile),{},{photos:t.photos})});default:return e}}},52:function(e,t,n){"use strict";t.a=n.p+"static/media/users.dce446e0.png"},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(6),a=n(2),c=n(17),s="NEW_MESSAGE",i="SEND_MESSAGE",o={dialogs:[{id:Object(c.a)(),name:"Dima"},{id:Object(c.a)(),name:"Andrey"},{id:Object(c.a)(),name:"Sveta"},{id:Object(c.a)(),name:"Sasha"},{id:Object(c.a)(),name:"Victor"},{id:Object(c.a)(),name:"Valera"}],messages:[{id:Object(c.a)(),message:"Hi"}],friendMessages:[{id:Object(c.a)(),message:"How are you?"}],newMessageBody:""},u=function(e){return{type:s,newText:e}},l=function(e){return{type:i,newText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{newMessageBody:t.newText});case i:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:Object(c.a)(),message:t.newText}])});default:return Object(a.a)({},e)}}},55:function(e,t,n){e.exports={wrapper:"News_wrapper__1U7S1"}},56:function(e,t,n){e.exports={wrapper:"Music_wrapper__3d6P5"}},57:function(e,t,n){e.exports={wrapper:"Settings_wrapper__v2CEr"}},59:function(e,t,n){e.exports={wrapper:"Sidebar_wrapper__13cMU",friends_label:"Sidebar_friends_label__1yany",friends_items:"Sidebar_friends_items__1aNcY"}},60:function(e,t,n){e.exports={wrapper:"UserSkeletone_wrapper__FwKGT"}},67:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u}));var r,a=n(58),c=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b272fdcf-142a-4a7e-8222-fde46b2c383b"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.Captcha=10]="Captcha"}(r||(r={}));var s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))},getProfile:function(e){return console.warn('Obsolete method. Please use "profileAPI" object.'),i.getProfile(e)}},i={getProfile:function(e){return c.get("profile/".concat(e))},getStatus:function(e){return c.get("profile/status/".concat(e))},updateStatus:function(e){return c.put("profile/status",{status:e})},updateProfile:function(e){return c.put("profile",e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},o={me:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return c.post("auth/login",{email:e,password:t,remember:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return c.delete("auth/login").then((function(e){return e.data}))}},u={captcha:function(){return c.get("security/get-captcha-url")}}},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(33),s=n.n(c),i=(n(67),n(20)),o=n(21),u=n(32),l=n(31),d=n(4),p=n(22),j=n(8),b=n(26),_=n.n(b),g=n.p+"static/media/page_u\u0441.82556429.jpg",h=n(55),f=n.n(h),O=n(1),m=function(){return Object(O.jsx)("div",{className:f.a.wrapper,children:Object(O.jsx)("img",{src:g,alt:"page"})})},x=n(56),w=n.n(x),v=function(){return Object(O.jsx)("div",{className:w.a.wrapper,children:Object(O.jsx)("img",{src:g,alt:"page"})})},y=n(57),S=n.n(y),N=function(){return Object(O.jsx)("div",{className:S.a.wrapper,children:Object(O.jsx)("img",{src:g,alt:"page"})})},P=n(2),C=n(7),A="SET_USER_DATA",U="SET_MESSAGE_ERROR_DATA",E="SET_CAPTCHA",L={email:"",login:"",isAuth:!1,userId:"",message:"",captcha:""},T=function(e,t,n,r){return{type:A,data:{userId:e,email:t,login:n,isAuth:r}}},F=function(e){return{type:U,payload:{message:e}}},I=function(e){return{type:E,payload:{url:e}}},k=function(){return function(e){C.b.me().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,a=n.login,c=n.email;e(T(r,c,a,!0))}}))}},M=function(){return function(e){C.d.captcha().then((function(t){var n=t.data;n&&e(I(n.url))}))}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(P.a)(Object(P.a)({},e),t.data);case U:return Object(P.a)(Object(P.a)({},e),{},{message:t.payload.message});case E:return Object(P.a)(Object(P.a)({},e),{},{captcha:t.payload.url});default:return e}},D=n(59),R=n.n(D),G=n(29),H=n.n(G),K=n(13),q=function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:H.a.list,children:Object(O.jsx)("div",{className:H.a.list_items,children:Object(O.jsx)(K.c,{activeClassName:H.a.item_active,className:H.a.item,to:e.url,children:e.name})})})})},J=function(e){var t=e.navbar.map((function(e){return Object(O.jsx)(q,{url:e.url,name:e.name,id:e.id},e.id)}));return Object(O.jsx)("nav",{className:R.a.wrapper,children:t})},W=Object(d.f)((function(e){var t=e.navbar,n=e.getAuthUserData;return Object(r.useEffect)((function(){n()}),[n]),Object(O.jsx)(J,{navbar:t})})),Y=Object(j.b)((function(e){return{navbar:e.sidebarPage.navbar}}),{setAuthUserData:T,getAuthUserData:k})(W),Z=n(6),B="FOLLOW",X="UNFOLLOW",V="SET_USERS",Q="SET_CURRENT_PAGE",$="SET_TOTAL_USERS_COUNT",ee="TOGGLE_IS_FETCHING",te="TOGGLE_IS_FOLLOWING_PROGRESS",ne={users:[],pageSize:5,totalUsersCount:11,currentPage:1,isFetching:!0,followingInProgress:[]},re=function(e){return{type:Q,currentPage:e}},ae=function(e){return{type:ee,isFetching:e}},ce=function(e,t){return{type:te,isFetching:e,userId:t}},se=n(18),ie=n(15),oe=n.n(ie),ue=a.a.memo((function(e){var t=Math.ceil(e.totalUsersCount/e.pageSize);console.log(e.totalUsersCount);for(var n=[],a=1;a<=t;a++)n.push(a);var c=Math.ceil(t/5),s=Object(r.useState)(1),i=Object(se.a)(s,2),o=i[0],u=i[1],l=5*(o-1)+1,d=5*o,p=n[n.length-1];return Object(O.jsxs)("div",{className:oe.a.pagination_wrapper,children:[o>1?Object(O.jsx)("div",{className:oe.a.arrow,onClick:function(){u(o-1)},children:"<"}):Object(O.jsx)("div",{className:oe.a.arrow_disable}),Object(O.jsxs)("div",{className:oe.a.pagination,children:[n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(O.jsx)("div",{className:oe.a.pagination_item_wrapper,onClick:function(){e.onPageChanged(t)},children:Object(O.jsx)("span",{className:e.currentPage===t?oe.a.pagination_wrapper_selected:"",children:t})},t)})),Object(O.jsx)("div",{className:oe.a.ellipsis,children:"..."}),n.filter((function(e){return e===p})).map((function(t){return Object(O.jsx)("div",{className:oe.a.pagination_item_wrapper,onClick:function(){e.onPageChanged(t)},children:Object(O.jsx)("span",{className:e.currentPage===t?oe.a.pagination_wrapper_selected:"",children:t})},t)}))]}),c>o?Object(O.jsx)("div",{className:oe.a.arrow,onClick:function(){u(o+1)},children:">"}):Object(O.jsx)("div",{className:oe.a.arrow_disable})]})})),le=n(61),de=n(60),pe=n.n(de),je=function(e){return Object(O.jsxs)(le.a,Object(P.a)(Object(P.a)({speed:2,width:800,height:830,viewBox:"0 0 800 830",backgroundColor:"#dedede",foregroundColor:"#5284c5",className:pe.a.wrapper},e),{},{children:[Object(O.jsx)("circle",{cx:"51",cy:"66",r:"48"}),Object(O.jsx)("rect",{x:"17",y:"130",rx:"0",ry:"0",width:"70",height:"29"}),Object(O.jsx)("rect",{x:"119",y:"26",rx:"10",ry:"10",width:"471",height:"65"}),Object(O.jsx)("circle",{cx:"50",cy:"228",r:"48"}),Object(O.jsx)("rect",{x:"16",y:"292",rx:"0",ry:"0",width:"70",height:"29"}),Object(O.jsx)("rect",{x:"118",y:"188",rx:"10",ry:"10",width:"471",height:"65"}),Object(O.jsx)("circle",{cx:"51",cy:"391",r:"48"}),Object(O.jsx)("rect",{x:"17",y:"455",rx:"0",ry:"0",width:"70",height:"29"}),Object(O.jsx)("rect",{x:"119",y:"351",rx:"10",ry:"10",width:"471",height:"65"}),Object(O.jsx)("circle",{cx:"50",cy:"553",r:"48"}),Object(O.jsx)("rect",{x:"16",y:"617",rx:"0",ry:"0",width:"70",height:"29"}),Object(O.jsx)("rect",{x:"118",y:"513",rx:"10",ry:"10",width:"471",height:"65"}),Object(O.jsx)("circle",{cx:"52",cy:"719",r:"48"}),Object(O.jsx)("rect",{x:"18",y:"783",rx:"0",ry:"0",width:"70",height:"29"}),Object(O.jsx)("rect",{x:"120",y:"679",rx:"10",ry:"10",width:"471",height:"65"})]}))},be=n(23),_e=n.n(be),ge=n(52),he=function(e){return console.log(e.users),Object(O.jsxs)("div",{children:[Object(O.jsx)(ue,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,isAuth:e.isAuth}),e.isFetching?Object(O.jsx)(je,{}):e.users.map((function(t){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:_e.a.wrapper,children:[Object(O.jsxs)("div",{className:_e.a.logo,children:[Object(O.jsxs)(K.c,{to:"/profile/"+t.id,children:[" ",Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:ge.a,alt:"avatar"})]}),e.isAuth&&Object(O.jsx)("div",{className:"users__btn",children:t.followed?Object(O.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(O.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(O.jsx)("div",{className:_e.a.descr_wrapper_outer,children:Object(O.jsxs)("div",{className:_e.a.descr_wrapper_inner,children:[Object(O.jsxs)("div",{className:_e.a.descr,children:[Object(O.jsx)("div",{className:"users__descr-name",children:t.name}),Object(O.jsx)("div",{className:_e.a.descr_status,children:t.status})]}),Object(O.jsx)("div",{className:_e.a.location})]})})]})},t.id)}))]})},fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(he,Object(P.a)(Object(P.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})}}]),n}(a.a.Component),Oe=Object(d.f)(fe),me=Object(j.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress,isAuth:e.auth.isAuth}}),{follow:function(e){return function(t){t(ce(!0,e)),C.e.follow(e).then((function(n){console.log(n.data.resultCode),0===n.data.resultCode&&t(function(e){return{type:B,userId:e}}(e)),t(ce(!1,e))}))}},unfollow:function(e){return function(t){t(ce(!0,e)),C.e.unfollow(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:X,userId:e}}(e)),t(ce(!1,e))}))}},setCurrentPages:re,toggleFollowingProgress:ce,getUsers:function(e,t){return function(n){n(ae(!0)),n(re(e)),C.e.getUsers(e,t).then((function(e){var t;n(function(e){return{type:V,users:e}}(e.items)),n((t=e.totalCount,{type:$,count:t})),n(ae(!1))}))}}})(Oe),xe=n(30),we=n.n(xe),ve=n.p+"static/media/soc_logo.5829bfdb.png",ye=function(e){var t=e.isAuth,n=e.onLogout;return Object(O.jsxs)("header",{className:we.a.header,children:[Object(O.jsx)("img",{className:we.a.header_img,src:ve,alt:"logo"}),t?Object(O.jsx)("div",{className:we.a.button,children:Object(O.jsx)("button",{onClick:function(){n()},children:"Logout"})}):Object(O.jsx)("div",{className:we.a.header_login,children:t?"Ok":Object(O.jsx)(K.b,{to:"/login",children:"Login"})})]})},Se=Object(d.f)((function(e){var t=e.isAuth,n=e.logout,a=Object(r.useState)(!1),c=Object(se.a)(a,2),s=c[0],i=c[1];console.log(s),console.log("render isAuth",t);return Object(r.useEffect)((function(){t&&n()}),[s]),Object(O.jsx)(ye,{isAuth:t,onLogout:function(){i(!s)},state:s})})),Ne=Object(p.c)(Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:T,logout:function(){return function(e){C.b.logout().then((function(t){t.resultCode===C.a.Success&&e(T("","","",!1))}))}}}))(Se),Pe=n(41),Ce=n.n(Pe),Ae=n(16),Ue=n.n(Ae),Ee=n(54),Le=function(){var e=Object(Ee.a)(),t=e.register,n=e.handleSubmit,r=e.formState.errors,a=(e.watch,Object(j.c)()),c=Object(j.d)((function(e){return e.auth.message})),s=Object(j.d)((function(e){return e.auth.captcha}));console.log(s);return Object(O.jsxs)("form",{className:Ue.a.form,onSubmit:n((function(e){return a(function(e,t,n,r){return function(a){C.b.login(e,t,n,r).then((function(e){e.resultCode===C.a.Success&&(a(k()),a(F("")),a(I(""))),e.resultCode===C.a.Error&&a(F(e.messages[0])),e.resultCode===C.a.Captcha&&(a(F(e.messages[0])),a(M()))}))}}(e.email,e.password,e.rememberMe,e.captcha))})),children:[Object(O.jsx)("input",Object(P.a)(Object(P.a)({className:Ue.a.input,type:"email"},t("email",{required:!0,maxLength:20})),{},{placeholder:"email"})),r.email&&Object(O.jsx)("div",{className:Ue.a.required,children:"Required"}),Object(O.jsx)("div",{children:"\xa0"}),Object(O.jsx)("input",Object(P.a)(Object(P.a)({className:Ue.a.input,type:"password"},t("password",{required:!0,minLength:3})),{},{placeholder:"password"})),r.password&&Object(O.jsx)("div",{className:Ue.a.required,children:"Required"}),Object(O.jsx)("div",{children:"\xa0"}),Object(O.jsxs)("div",{className:Ue.a.checkbox_wrapper,children:[Object(O.jsx)("input",Object(P.a)(Object(P.a)({className:Ue.a.checkbox},t("rememberMe")),{},{type:"checkbox"})),Object(O.jsx)("span",{className:Ue.a.text,children:"remember me"})]}),Object(O.jsx)("div",{children:"\xa0"}),s&&Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:s,alt:"captchaImage"})}),Object(O.jsx)("input",Object(P.a)(Object(P.a)({className:Ue.a.input_captcha},t("captcha")),{},{type:"text",placeholder:"captcha"})),Object(O.jsx)("div",{children:"\xa0"})]}),Object(O.jsx)("input",{className:Ue.a.button,type:"submit",value:"LOGIN"}),c&&Object(O.jsx)("div",{className:Ue.a.errorMessage,children:c})]})},Te=function(){return Object(j.d)((function(e){return e.auth.isAuth}))?Object(O.jsx)(d.a,{to:"/profile"}):Object(O.jsx)("div",{className:Ce.a.wrapper,children:Object(O.jsx)("div",{className:Ce.a.login,children:Object(O.jsx)(Le,{})})})},Fe="SET_INITIALIZED",Ie={initialized:!1},ke=function(){return{type:Fe}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},ze=n(35),De=function(){var e=Object(j.d)((function(e){return e.usersPage.users}));return console.log(e),Object(O.jsx)(O.Fragment,{})},Re=a.a.lazy((function(){return n.e(3).then(n.bind(null,105))})),Ge=a.a.lazy((function(){return n.e(4).then(n.bind(null,104))})),He=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedSuccess()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsx)("div",{className:_.a.app_wrapper,children:Object(O.jsx)("div",{className:_.a.app_outer,children:Object(O.jsxs)("div",{className:_.a.app_inner,children:[Object(O.jsx)(Ne,{}),Object(O.jsxs)("div",{className:_.a.wrapper,children:[Object(O.jsx)(Y,{}),Object(O.jsxs)("div",{className:_.a.content,children:[Object(O.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(ze.a,{}),children:Object(O.jsx)(Ge,{})})}}),Object(O.jsx)(d.b,{path:"/messages",render:function(){return Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(ze.a,{}),children:Object(O.jsx)(Re,{})})}}),Object(O.jsx)(d.b,{path:"/users",render:function(){return Object(O.jsx)(me,{})}}),Object(O.jsx)(d.b,{path:"/news",render:function(){return Object(O.jsx)(m,{})}}),Object(O.jsx)(d.b,{path:"/music",render:function(){return Object(O.jsx)(v,{})}}),Object(O.jsx)(d.b,{path:"/settings",render:function(){return Object(O.jsx)(N,{})}}),Object(O.jsx)(d.b,{path:"/login",render:function(){return Object(O.jsx)(Te,{})}})]}),Object(O.jsx)(De,{})]})]})})}):Object(O.jsx)(ze.a,{})}}]),n}(a.a.Component),Ke=Object(p.c)(Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializedSuccess:ke}))(He),qe=n(53),Je=n(43),We=n(17),Ye={navbar:[{id:Object(We.a)(),name:"Profile",url:"/profile"},{id:Object(We.a)(),name:"Messages",url:"/messages"},{id:Object(We.a)(),name:"Users",url:"/users"},{id:Object(We.a)(),name:"News",url:"/news"},{id:Object(We.a)(),name:"Music",url:"/music"},{id:Object(We.a)(),name:"Settings",url:"/settings"}]},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return e},Be={friends:[{id:Object(We.a)(),name:"Andrew"},{id:Object(We.a)(),name:"Sasha"},{id:Object(We.a)(),name:"Sveta"}]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return e},Ve=n(62),Qe=Object(p.b)({profilePage:Je.b,dialogsPage:qe.a,sidebarPage:Ze,friendsBar:Xe,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!0}):e}))});case X:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!1}):e}))});case V:return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case Q:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case $:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case ee:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case te:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(Z.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:z,app:Me}),$e=Object(p.d)(Qe,Object(p.a)(Ve.a));window.store=$e,s.a.render(Object(O.jsx)(K.a,{children:Object(O.jsx)(j.a,{store:$e,children:Object(O.jsx)(Ke,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.46c27d94.chunk.js.map