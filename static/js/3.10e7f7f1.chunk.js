(this["webpackJsonpsocial_1.0_ts"]=this["webpackJsonpsocial_1.0_ts"]||[]).push([[3],{100:function(e,s,a){e.exports={new_message_wrapper:"NewMessage_new_message_wrapper__1CmWe",new_message:"NewMessage_new_message__1eWPh",new_message_btn:"NewMessage_new_message_btn__2osm5"}},105:function(e,s,a){"use strict";a.r(s);var n=a(8),t=a(22),i=a(53),r=a(94),c=a(2),_=(a(0),a(96)),l=a.n(_),d=a(1),m=function(e){return console.log(e.message),Object(d.jsxs)("div",{className:l.a.users_wrapper,children:[Object(d.jsx)("div",{className:l.a.dialogs_users_message,children:e.message}),Object(d.jsxs)("div",{className:l.a.dialogs_users,children:[Object(d.jsx)("div",{className:"dialogs__users-avatar",children:Object(d.jsx)("img",{src:"https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj",alt:"avatar"})}),Object(d.jsx)("div",{className:"dialogs__users-name",children:"Me"})]})]})},o=a(97),g=a.n(o),j=a(13),u=function(e){var s="/messages/".concat(e.id);return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:g.a.item,children:[Object(d.jsx)("div",{className:g.a.item_mark}),Object(d.jsx)("div",{className:g.a.item_name,children:Object(d.jsx)(j.c,{to:s,children:e.name})})]})})},b=a(98),f=a.n(b),O=function(e){return Object(d.jsxs)("div",{className:f.a.wrapper_friend,children:[Object(d.jsxs)("div",{className:f.a.friend,children:[Object(d.jsx)("div",{className:"dialogs__users-avatar-friend",children:Object(d.jsx)("img",{className:f.a.friend_img,src:"https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj",alt:"avatar"})}),Object(d.jsx)("div",{className:"dialogs__users-name-friend",children:"Dima"})]}),Object(d.jsx)("div",{className:f.a.message_friend,children:e.message})]})},p=a(99),x=a.n(p),h=a(100),v=a.n(h),w=function(e){var s=e.onSendMessageClick,a=e.onNewMessageChange,n=e.dialogsPage.newMessageBody;return Object(d.jsxs)("div",{className:v.a.new_message_wrapper,children:[Object(d.jsx)("div",{className:v.a.new_message,children:Object(d.jsx)("textarea",{className:"".concat(v.a.new_message," textarea"),value:n,onChange:function(e){var s=e.currentTarget.value;a(s)},placeholder:"Enter your next"})}),Object(d.jsx)("div",{className:v.a.new_message_btn,children:Object(d.jsx)("button",{onClick:function(){s(n)},className:"".concat(v.a.new_message_btn," button"),children:"Send"})})]})};s.default=Object(t.c)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessageClick:function(s){s&&e(Object(i.b)(s)),e(Object(i.c)(""))},onNewMessageChange:function(s){e(Object(i.c)(s))}}})),r.a)((function(e){var s=Object.assign({},e),a=s.dialogsPage,n=a.dialogs.map((function(e){return Object(d.jsx)(u,{name:e.name,id:e.id},e.id)})),t=a.messages.map((function(e){return Object(d.jsx)(m,{message:e.message,id:e.id},e.id)})),i=a.friendMessages.map((function(e){return Object(d.jsx)(O,{message:e.message,id:e.id},e.id)}));return Object(d.jsxs)("div",{className:x.a.dialogs_wrapper,children:[Object(d.jsxs)("div",{className:x.a.items,children:[Object(d.jsx)("div",{className:x.a.label,children:"Dialogs"}),n]}),Object(d.jsxs)("div",{children:[i,t,Object(d.jsx)(w,Object(c.a)({},s))]})]})}))},94:function(e,s,a){"use strict";a.d(s,"a",(function(){return l}));var n=a(2);function t(e,s){if(null==e)return{};var a,n,t=function(e,s){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a(0);var i=a(8),r=a(4),c=a(1),_=function(e){return{isAuth:e.auth.isAuth}};function l(e){return Object(i.b)(_)((function(s){var a=s.isAuth,i=t(s,["isAuth"]);return a?Object(c.jsx)(e,Object(n.a)({},i)):Object(c.jsx)(r.a,{to:"/login"})}))}},96:function(e,s,a){e.exports={users_wrapper:"Message_users_wrapper__Nvix9",dialogs_users:"Message_dialogs_users__kukkg",dialogs_users_message:"Message_dialogs_users_message__2zvZD"}},97:function(e,s,a){e.exports={item:"DialogItem_item__n7hXj",item_mark:"DialogItem_item_mark__2g0FK",item_name:"DialogItem_item_name__3Umts","item-name":"DialogItem_item-name__2MUBs",active:"DialogItem_active__2Ny-Q"}},98:function(e,s,a){e.exports={wrapper_friend:"FriendMessage_wrapper_friend__1O19g",friend:"FriendMessage_friend__3gZAn",friend_img:"FriendMessage_friend_img__3ASaE",message_friend:"FriendMessage_message_friend__1oaFm"}},99:function(e,s,a){e.exports={dialogs_wrapper:"Dialogs_dialogs_wrapper__1FMMd",items:"Dialogs_items__FbC7O",label:"Dialogs_label__QPpqT"}}}]);
//# sourceMappingURL=3.10e7f7f1.chunk.js.map