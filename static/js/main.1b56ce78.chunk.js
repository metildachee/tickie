(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{233:function(e,t,a){e.exports=a.p+"static/media/kpi.91f3cb17.jpg"},234:function(e,t,a){e.exports=a.p+"static/media/productivity.a9617a44.jpg"},244:function(e,t,a){e.exports=a(438)},249:function(e,t,a){},251:function(e,t,a){},436:function(e,t,a){},437:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(249),a(146)),o=a(43),s=(a(250),a(251),a(64)),u=a(27),m=a(10),p=a(33),d=a.n(p),f=a(45),E=a(170),g=a(48),b=a.n(g),y="authentication",v=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.localStorage.getItem("token"),e.prev=1,e.next=4,b.a.get("".concat("https://tickie-server.herokuapp.com/api","/auth/user"),{headers:{token:a}});case 4:n=e.sent,t({type:"SET_USER",module:y,payload:n.data.user}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e,t){e({type:"CHECKING",module:y}),window.localStorage.setItem("token",t),e({type:"LOGIN",module:y}),v(e),Object(E.navigate)("/tickie")},O=function(e){return"Admin"===e.user.type},k=function(e){return"Client"===e.user.type},j=function(e){return"Agent"===e.user.type};var x="https://tickie-server.herokuapp.com/api",w=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.localStorage.getItem("token"),t({type:"GETTING_TICKETS",module:"tickets"}),e.prev=2,e.next=5,b.a.get("".concat(x,"/ticket"),{headers:{token:a}});case 5:n=e.sent,t({type:"ALL_TICKETS",module:"tickets",payload:n.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),t({type:"TICKETS_FAILED",module:"tickets"});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_SORT",module:"tickets"});try{t({type:"ALL_TICKETS",module:"tickets",payload:a})}catch(n){console.error(n)}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("token"),e.prev=1,e.next=4,b.a.post("".concat(x,"/ticket/create"),a,{headers:{token:n}});case 4:window.location.href="/tickie",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(d.a.mark((function e(t,a,n,r,c){var l,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=window.localStorage.getItem("token"),e.prev=1,e.next=4,b.a.put("".concat(x,"/ticket/update/open"),{_id:a._id,priority:r,assigned_to:n,status:c},{headers:{token:l}});case 4:i=e.sent,t({type:"UPDATE_TICKETS",module:"tickets",payload:i.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),A=function(e){return e.tickets};var T=a(107),N="https://tickie-server.herokuapp.com/api",_=window.localStorage.getItem("token"),F=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(N,"/auth/user/agents"),{headers:{token:_}});case 3:a=e.sent,t({type:"ALL_AGENTS",module:"users",payload:a.data.users}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(N,"/auth/users"),{headers:{token:_}});case 3:a=e.sent,t({type:"ALL_USERS",module:"users",payload:a.data.users}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(N,"/auth/register"),a);case 3:"Agent"===a.type&&F(t),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}();var R=window.localStorage.getItem("token"),L=function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.name=a.name.charAt(0).toUpperCase()+a.name.substring(1),e.prev=1,e.next=4,b.a.post("".concat("https://tickie-server.herokuapp.com/api","/category"),a,{headers:{token:R}});case 4:n=e.sent,t({type:"ADD_CATEGORY",module:"category",payload:n.data.category}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat("https://tickie-server.herokuapp.com/api","/category"));case 3:a=e.sent,t({type:"GET_CATEGORIES",module:"category",payload:a.data.categories}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var U=window.localStorage.getItem("token"),z=function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.prev=1,e.next=4,b.a.post("".concat("https://tickie-server.herokuapp.com/api","/org"),{name:q(a.name),description:a.description},{headers:{token:U}});case 4:n=e.sent,t({type:"ADD_ORGANISATIONS",module:"organisation",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),K=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat("https://tickie-server.herokuapp.com/api","/org"));case 3:a=e.sent,t({type:"GET_ORGANISATIONS",module:"organisation",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e){return e.split(" ").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")};var H=Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},{isCheckingLoginStatus:!1,isAuth:!1,user:{}}),{isGettingTickets:!1,tickets:[],agent:"",priority:"",status:""}),{agents:[],users:[]}),{categories:[]}),{organisations:[]}),V=Object(n.createContext)(H),B=V.Provider,M=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){var a;if("function"===typeof t&&"function"===typeof i)return t(i),e;var n=(a={},Object(s.a)(a,y,function(e,t){switch(t.type){case"CHECKING":return Object(m.a)(Object(m.a)({},e),{},{isChecking:!0});case"LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{isChecking:!1,isAuth:!1});case"LOGIN":return Object(m.a)(Object(m.a)({},e),{},{isChecking:!1,isAuth:!0});case"SET_USER":return Object(m.a)(Object(m.a)({},e),{},{user:t.payload});default:return e}}(e,t)),Object(s.a)(a,"tickets",function(e,t){switch(t.type){case"GETTING_TICKETS":return Object(m.a)(Object(m.a)({},e),{},{isGettingTickets:!0});case"ALL_TICKETS":return Object(m.a)(Object(m.a)({},e),{},{isGettingTickets:!1,tickets:t.payload});case"TICKETS_FAILED":return Object(m.a)(Object(m.a)({},e),{},{isGettingTickets:!1});case"ASSIGN_AGENT":return Object(m.a)(Object(m.a)({},e),{},{agent:t.payload});case"ASSIGN_PRIORITY":return Object(m.a)(Object(m.a)({},e),{},{priority:t.payload});case"ASSIGN_STATUS":return Object(m.a)(Object(m.a)({},e),{},{status:t.payload});case"UPDATE_TICKETS":var a=e.tickets.map((function(e){return e._id===t.payload._id?t.payload:e}));return console.log(a),Object(m.a)(Object(m.a)({},e),{},{tickets:a});default:return e}}(e,t)),Object(s.a)(a,"users",function(e,t){switch(t.type){case"ALL_AGENTS":return Object(m.a)(Object(m.a)({},e),{},{agents:t.payload});case"ALL_USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.payload});case"ADD_AGENT_ACCOUNT":return Object(m.a)(Object(m.a)({},e),{},{agents:[].concat(Object(T.a)(e.agents),[t.payload])});default:return e}}(e,t)),Object(s.a)(a,"category",function(e,t){switch(t.type){case"ADD_CATEGORY":return Object(m.a)(Object(m.a)({},e),{},{categories:[].concat(Object(T.a)(e.categories),[t.payload])});case"GET_CATEGORIES":return Object(m.a)(Object(m.a)({},e),{},{categories:t.payload});default:return e}}(e,t)),Object(s.a)(a,"organisation",function(e,t){switch(t.type){case"ADD_ORGANISATIONS":return Object(m.a)(Object(m.a)({},e),{},{organisations:[].concat(Object(T.a)(e.organisations),[t.payload])});case"GET_ORGANISATIONS":return Object(m.a)(Object(m.a)({},e),{},{organisations:t.payload});default:return e}}(e,t)),a)[t.module];return void 0===n?e:n}),H),c=Object(u.a)(a,2),l=c[0],i=c[1];return r.a.createElement(B,{value:{state:l,dispatch:i}},t)},W=a(240),Y=a(452),J=a(443),$=a(157),Q=a(454),X=a(455),Z=a(456),ee=a(457),te=a(458),ae=a(211),ne=a.n(ae),re=Object($.c)((function(){return r.a.createElement(Q.a,{style:{cursor:"pointer",color:"#999"}})})),ce=[{title:"Sort",dataIndex:"sort",width:30,className:"drag-visible",render:function(){return r.a.createElement(re,null)}},{title:"ID",dataIndex:"key",className:"drag-visible"},{title:"Title",dataIndex:"name",className:"drag-visible"},{title:"Description",dataIndex:"desc"},{title:"Status",dataIndex:"status",render:function(e){switch(e){case"Open":return r.a.createElement(Y.a,{value:e,icon:r.a.createElement(X.a,null),color:"warning"},e);case"Assigned":return r.a.createElement(Y.a,{icon:r.a.createElement(Z.a,null),color:"default"},e);case"In-progress":return r.a.createElement(Y.a,{value:e,icon:r.a.createElement(ee.a,{spin:!0}),color:"processing"},e);case"Resolved":return r.a.createElement(Y.a,{value:e,icon:r.a.createElement(te.a,null),color:"success"},e);case"Archived":return r.a.createElement(Y.a,{value:e,color:"default"},e);default:return r.a.createElement(Y.a,{value:"Unassigned",color:"volcano"},"Unassigned")}}},{title:"Assigned",dataIndex:"assigned_to"},{title:"Remarks",dataIndex:"remarks"}];function le(){var e=Object(n.useContext)(V),t=e.dispatch,a=e.state;Object(n.useEffect)((function(){w(t)}),[]);var c=A(a),l=Object($.b)((function(e){return r.a.createElement("tr",e)})),i=Object($.a)((function(e){return r.a.createElement("tbody",e)})),o=function(e){var a=e.oldIndex,n=e.newIndex;if(a!==n){var r=ne()([].concat(c),a,n).filter((function(e){return!!e}));C(t,r)}};return r.a.createElement(J.a,{pagination:{position:["bottomCenter"],pageSize:5},dataSource:c,columns:ce,rowKey:"index",components:{body:{wrapper:function(e){return r.a.createElement(i,Object.assign({useDragHandle:!0,helperClass:"row-dragging",onSortEnd:o},e))},row:function(e){e.className,e.style;var t=Object(W.a)(e,["className","style"]),a=c.findIndex((function(e){return e.index===t["data-row-key"]}));return r.a.createElement(l,Object.assign({index:a},t))}}}})}var ie=a(51);function oe(){return r.a.createElement(ie.a,{type:"primary"},r.a.createElement(i.b,{to:"/tickie/create"},"Add ticket"))}var se=a(444),ue=a(446),me=a(449),pe=a(451);function de(e){var t=e.visible,a=e.alertMsg;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(pe.a,{style:{marginBottom:"5px"},message:a,type:"warning",showIcon:!0,closable:!0}))}function fe(e){var t=e.visible,a=e.onCreate,c=e.onCancel,l=Object(n.useContext)(V).state,i=Object(n.useState)(!1),o=Object(u.a)(i,2),s=o[0],m=o[1],p=se.a.useForm(),d=Object(u.a)(p,1)[0];return r.a.createElement(ue.a,{visible:t,title:"Add a new category",okText:"Add",cancelText:"Cancel",onCancel:c,onOk:function(){d.validateFields().then((function(e){!function(e,t){return t.categories.find((function(t){return t.name===e.toUpperCase()}))}(e.name,l)?(d.resetFields(),a(e)):m(!0)})).catch((function(e){console.log("Validate Failed:",e)}))}},r.a.createElement(se.a,{form:d,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"}},r.a.createElement(de,{visible:s,alertMsg:"Category exists!"}),r.a.createElement(se.a.Item,{name:"name",label:"Title",rules:[{required:!0,message:"Please input the title of category!"}]},r.a.createElement(me.a,null)),r.a.createElement(se.a.Item,{name:"description",label:"Description"},r.a.createElement(me.a,{type:"textarea"}))))}var Ee=a(241),ge=function(e,t,a){Ee.a[e]({message:t,description:a})};function be(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(V).dispatch;Object(n.useEffect)((function(){D(l)}),[]);return r.a.createElement("div",{style:{marginRight:"20px "}},r.a.createElement(ie.a,{type:"primary",onClick:function(){c(!0)}},"Add Category"),r.a.createElement(fe,{visible:a,onCreate:function(e){c(!1),L(l,e),ge("success","".concat(e.name," added successfully!"),"A new category has been added.")},onCancel:function(){c(!1)}}))}function ye(e){var t=e.visible,a=e.onCreate,c=e.onCancel,l=Object(n.useContext)(V).state,i=Object(n.useState)(!1),o=Object(u.a)(i,2),s=o[0],m=o[1],p=se.a.useForm(),d=Object(u.a)(p,1)[0];return r.a.createElement(ue.a,{visible:t,title:"Add a new organisation",okText:"Add",cancelText:"Cancel",onCancel:c,onOk:function(){d.validateFields().then((function(e){!function(e,t){return t.organisations.find((function(t){return t.name===q(e)}))}(e.name,l)?(d.resetFields(),a(e)):m(!0)})).catch((function(e){console.log("Validate Failed:",e)}))}},r.a.createElement(se.a,{form:d,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"}},r.a.createElement(de,{visible:s,alertMsg:"Organisation exists!"}),r.a.createElement(se.a.Item,{name:"name",label:"Title",rules:[{required:!0,message:"Please input the name of organisation!"}]},r.a.createElement(me.a,null)),r.a.createElement(se.a.Item,{name:"description",label:"Description"},r.a.createElement(me.a,{type:"textarea"}))))}function ve(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(V).dispatch;Object(n.useEffect)((function(){K(l)}),[]);return r.a.createElement("div",{style:{marginRight:"20px "}},r.a.createElement(ie.a,{type:"primary",onClick:function(){c(!0)}},"Add Organisation"),r.a.createElement(ye,{visible:a,onCreate:function(e){c(!1),z(l,e),ge("success","".concat(e.name," added successfully!"),"A new organisation has been added.")},onCancel:function(){c(!1)}}))}var he=a(122),Oe=a(152),ke=he.a.Option;function je(e){var t=e.visible,a=e.onCreate,c=e.onCancel,l=Object(n.useContext)(V).state,i=Object(n.useState)(!1),o=Object(u.a)(i,2),s=o[0],m=o[1],p=Object(n.useState)("Email exists!"),d=Object(u.a)(p,2),f=d[0],E=d[1],g=se.a.useForm(),b=Object(u.a)(g,1)[0],y=function(e){return e.organisations}(l);return r.a.createElement(ue.a,{visible:t,title:"Add a new user",okText:"Add",cancelText:"Cancel",onCancel:c,onOk:function(){b.validateFields().then((function(e){var t,n;console.log(e),!function(e,t){return t.users.find((function(t){return t.email===e}))}(e.email,l)?(t=e.password,n=e.password2,t!==n?(E("Password different!"),m(!0)):(b.resetFields(),a(e))):m(!0)})).catch((function(e){console.log("Validate Failed:",e)}))}},r.a.createElement(se.a,{form:b,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"}},r.a.createElement(de,{visible:s,alertMsg:f}),r.a.createElement(se.a.Item,{name:"fname",label:"First name",rules:[{required:!0,message:"Please input first name!"}]},r.a.createElement(me.a,null)),r.a.createElement(se.a.Item,{name:"lname",label:"Last name",rules:[{required:!0,message:"Please input last name!"}]},r.a.createElement(me.a,null)),r.a.createElement(se.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input email!"}]},r.a.createElement(me.a,null)),r.a.createElement(se.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(me.a.Password,null)),r.a.createElement(se.a.Item,{label:"Confirm password",name:"password2",rules:[{required:!0,message:"Please input your confirm password!"}]},r.a.createElement(me.a.Password,null)),r.a.createElement(se.a.Item,{name:"description",label:"Description"},r.a.createElement(me.a,{type:"textarea"})),r.a.createElement(se.a.Item,{name:"role",label:"Role",rules:[{required:!0,message:"Please input role"}]},r.a.createElement(me.a,null)),r.a.createElement(se.a.Item,{name:"organisation",label:"Organisation",rules:[{required:!0}]},r.a.createElement(he.a,{placeholder:"Please choose an organisation",allowClear:!0},y.map((function(e){return r.a.createElement(ke,{key:e._id,value:e._id},e.name)})))),r.a.createElement(se.a.Item,{name:"type",className:"collection-create-form_last-form-item"},r.a.createElement(Oe.a.Group,null,r.a.createElement(Oe.a,{value:"Client"},"Client"),r.a.createElement(Oe.a,{value:"Agent"},"Agent"),r.a.createElement(Oe.a,{value:"Admin"},"Admin")))))}function xe(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(V).dispatch;Object(n.useEffect)((function(){G(l)}),[]);return r.a.createElement("div",null,r.a.createElement(ie.a,{type:"primary",onClick:function(){c(!0)}},"Add Account"),r.a.createElement(je,{visible:a,onCreate:function(e){c(!1),P(l,e),ge("success","New ".concat(e.type," added successfully!"),"".concat(e.fname," ").concat(e.lname," has been added."))},onCancel:function(){c(!1)}}))}var we=a(439),Ce=a(151),Ie=a.n(Ce),Se=a(459);function Ae(){var e=Object(n.useContext)(V).dispatch;return r.a.createElement(se.a.Item,{label:"Priority"},r.a.createElement(he.a,{onChange:function(t){return function(e,t){e({type:"ASSIGN_PRIORITY",module:"tickets",payload:t})}(e,t)}},r.a.createElement(he.a.Option,{key:1,value:"Low"},"Low"),r.a.createElement(he.a.Option,{key:2,value:"Moderate"},"Moderate"),r.a.createElement(he.a.Option,{key:3,value:"High"},"High")))}function Te(e){var t=e.status,a=Object(n.useContext)(V),c=a.dispatch,l=a.state,i=O(l),o=j(l);return r.a.createElement(se.a.Item,{label:"Status"},r.a.createElement(he.a,{onChange:function(e){return function(e,t){e({type:"ASSIGN_STATUS",module:"tickets",payload:t})}(c,e)}},i&&r.a.createElement(r.a.Fragment,null,"Open"===t&&r.a.createElement(he.a.Option,{key:1,value:"Assigned"},"Assigned"),("Open"===t||"Resolved"===t)&&r.a.createElement(he.a.Option,{key:2,value:"Archived"},"Archived"),"Open"!==t&&"Resolved"!==t&&r.a.createElement(he.a.Option,{key:3,value:t},t)),o&&r.a.createElement(r.a.Fragment,null,"Resolved"!==t&&r.a.createElement(he.a.Option,{key:3,value:"In-progress"},"In-progress"),r.a.createElement(he.a.Option,{key:4,value:"Resolved"},"Resolved"))))}function Ne(){var e=Object(n.useContext)(V),t=e.state,a=e.dispatch,c=function(e){return e.agents}(t);return r.a.createElement(se.a.Item,{label:"Assign to"},r.a.createElement(he.a,{onChange:function(e){return function(e,t){e({type:"ASSIGN_AGENT",module:"tickets",payload:t})}(a,e)}},c.map((function(e){return r.a.createElement(he.a.Option,{key:e._id,value:e._id},e.fname," ",e.lname)}))))}function _e(e){var t=e.ticket,a=Object(n.useState)("Update ticket"),c=Object(u.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),m=s[0],p=s[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),E=f[0],g=f[1],b=Object(n.useContext)(V),y=b.dispatch,v=b.state;Object(n.useEffect)((function(){F(y)}),[]);return r.a.createElement(r.a.Fragment,null,"Archived"===t.status?r.a.createElement(ie.a,{type:"dashed"},"Ticket closed"):r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{type:"primary",onClick:function(){return p(!0)}},"Open"===t.status?"Assign":"Update Status"),r.a.createElement(ue.a,{title:l,visible:m,onOk:function(){return i("Updating information"),g(!0),S(y,t,function(e){return e.agent}(v),function(e){return e.priority}(v),function(e){return e.status}(v)),void setTimeout((function(){p(!1),g(!1)}),2e3)},confirmLoading:E,onCancel:function(){p(!1)}},"Open"===t.status&&r.a.createElement(Ne,null),r.a.createElement(Te,{status:t.status}),r.a.createElement(Ae,null))))}function Fe(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),o=i[0],s=i[1],p=Object(n.useContext)(V),d=p.dispatch,f=p.state;Object(n.useEffect)((function(){w(d)}),[]);var E,g=A(f),b=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,n=t.selectedKeys,c=t.confirm,l=t.clearFilters;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(me.a,{ref:function(e){E=e},placeholder:"Search ".concat(e),value:n[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return y(n,c,e)},style:{width:188,marginBottom:8,display:"block"}}),r.a.createElement(we.a,null,r.a.createElement(ie.a,{type:"primary",onClick:function(){return y(n,c,e)},icon:r.a.createElement(Se.a,null),size:"small",style:{width:90}},"Search"),r.a.createElement(ie.a,{onClick:function(){return v(l)},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return r.a.createElement(Se.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e]?a[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){console.log(E),e&&setTimeout((function(){return E.select()}),100)},render:function(t){return o===e?r.a.createElement(Ie.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[a],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},y=function(e,t,a){t(),c(e[0]),s(a)},v=function(e){e(),c("")},h=[Object(m.a)({title:"ID",dataIndex:"key",key:"key"},b("key")),Object(m.a)({title:"Name",dataIndex:"name",key:"name"},b("name")),Object(m.a)({title:"Description",dataIndex:"desc",key:"desc"},b("desc")),Object(m.a)({title:"Category",dataIndex:"category",key:"category"},b("category")),Object(m.a)({title:"Remarks",dataIndex:"remarks",key:"remarks"},b("remarks")),Object(m.a)(Object(m.a)({title:"Status",dataIndex:"status",key:"status"},b("status")),{},{render:function(e){switch(e){case"Open":return r.a.createElement(Y.a,{value:e,icon:r.a.createElement(X.a,null),color:"warning"},e);case"Assigned":return r.a.createElement(Y.a,{icon:r.a.createElement(Z.a,null),color:"default"},e);case"In-progress":return r.a.createElement(Y.a,{value:e,icon:r.a.createElement(ee.a,{spin:!0}),color:"processing"},e);case"Resolved":return r.a.createElement(Y.a,{value:e,icon:r.a.createElement(te.a,null),color:"success"},e);case"Archived":return r.a.createElement(Y.a,{value:e,color:"default"},e);default:return r.a.createElement(Y.a,{value:"Unassigned",color:"volcano"},"Unassigned")}}}),Object(m.a)(Object(m.a)({title:"Priority",dataIndex:"priority",key:"priority"},b("priority")),{},{render:function(e){switch(e){case"Low":return r.a.createElement(Y.a,{value:e,color:"blue"},e);case"Moderate":return r.a.createElement(Y.a,{value:e,color:"magenta"},e);case"High":return r.a.createElement(Y.a,{value:e,color:"red"},e);default:return r.a.createElement(Y.a,{value:"Unassigned",color:"volcano"},"Unassigned")}}}),Object(m.a)({title:"Created by",dataIndex:"created_by",key:"created_by"},b("created_by")),{title:"Actions",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,{ticket:e,type:"primary"}))}}];return O(f)&&h.splice(h.length-1,0,Object(m.a)({title:"Assigned",dataIndex:"assigned_to",key:"assigned_to"},b("assigned_to"))),r.a.createElement(J.a,{pagination:{position:["bottomCenter"],pageSize:2},style:{margin:"0 auto",width:"90vw"},columns:h,dataSource:g})}var Ge=a(440),Pe=a(441);var Re=function(){var e=Object(n.useContext)(V).state,t=k(e),a=O(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge.a,{justify:"space-around",style:{padding:"10px"}},r.a.createElement(Pe.a,{style:{display:"flex"}},t&&r.a.createElement(oe,null),a&&r.a.createElement(be,null)," ",a&&r.a.createElement(ve,null),a&&r.a.createElement(xe,null))),r.a.createElement(Ge.a,{justify:"space-around"},r.a.createElement(Pe.a,null,t&&r.a.createElement(le,null),!t&&r.a.createElement(Fe,null))))},Le=a(453);function De(){var e=Object(n.useContext)(V),t=e.dispatch,a=e.state;Object(n.useEffect)((function(){D(t)}),[]);var c=Object(n.useState)("default"),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),p=m[0],d=m[1],f=Object(n.useState)(!1),E=Object(u.a)(f,2),g=E[0],b=E[1],y=function(e){return e.categories}(a);return r.a.createElement(Ge.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}},r.a.createElement(Pe.a,{style:{margin:"0 auto"}},r.a.createElement(se.a,{layout:"horizontal",initialValues:{size:i},onValuesChange:function(e){var t=e.size;o(t)},size:i,onFinish:function(e){I(t,e.ticket)},name:"nest-messages",validateMessages:{required:"${label} is required!"},style:{width:"50vh"}},r.a.createElement(se.a.Item,{name:"size"},r.a.createElement(Oe.a.Group,null,r.a.createElement(Oe.a.Button,{value:"small"},"Small"),r.a.createElement(Oe.a.Button,{value:"default"},"Default"),r.a.createElement(Oe.a.Button,{value:"large"},"Large"))),r.a.createElement(Le.a,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"This should describe the problem in a single line")," ",r.a.createElement("a",{onClick:function(){return d(!1)}},"Close")),title:"Note",trigger:"click",visible:p,onVisibleChange:function(){return d(!p)}},r.a.createElement(se.a.Item,{name:["ticket","name"],label:"Title",rules:[{required:!0}]},r.a.createElement(me.a,null))),r.a.createElement(Le.a,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Please be as specify as possible. This will assist the engineers to speed up troubleshooting and get the problem solved quickly.")," ",r.a.createElement("a",{onClick:function(){return b(!1)}},"Close")),title:"Note",trigger:"click",visible:g,onVisibleChange:function(){return b(!g)}},r.a.createElement(se.a.Item,{name:["ticket","desc"],label:"Description",rules:[{required:!0}]},r.a.createElement(me.a.TextArea,null))),r.a.createElement(se.a.Item,{name:["ticket","category"],label:"Category",rules:[{required:!0}]},r.a.createElement(he.a,null,y.map((function(e){return r.a.createElement(he.a.Option,{key:e._id,value:e._id},e.name)})))),r.a.createElement(se.a.Item,{name:["ticket","remarks"],label:"Remarks"},r.a.createElement(me.a.TextArea,null)),r.a.createElement("p",null,"Please note that once your ticket has been submitted, it will no longer be editable."),r.a.createElement("p",null,"Please make sure you have included all the details."),r.a.createElement(se.a.Item,null,r.a.createElement(ie.a,{type:"primary",htmlType:"submit"},"Submit")))))}var Ue=a(450),ze=a(448),Ke=a(442),qe=a(447),He=a(460);function Ve(){var e=Object(n.useContext)(V).state,t=function(e){return e.tickets.filter((function(e){return"Resolved"===e.status||"Archived"===e.status}))}(e).length,a=function(e){return e.tickets.filter((function(e){return"Open"===e.status}))}(e).length,c=function(e){return e.tickets.filter((function(e){return"Assigned"===e.status}))}(e).length,l=function(e){return e.tickets.filter((function(e){return"In-progress"===e.status}))}(e).length,i=j(e);return r.a.createElement("div",null,r.a.createElement(Ge.a,null,!i&&r.a.createElement(Pe.a,{span:6},r.a.createElement(qe.a,{title:"Open Tickets",value:a})),r.a.createElement(Pe.a,{span:6},r.a.createElement(qe.a,{title:"Assigned",value:c})),r.a.createElement(Pe.a,{span:6},r.a.createElement(qe.a,{title:"In-Progress",value:l})),r.a.createElement(Pe.a,{span:6},r.a.createElement(qe.a,{title:"Closed Tickets",value:t,prefix:r.a.createElement(He.a,null),suffix:"/ 100"}))))}function Be(e){var t,a=e.type,c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(""),p=Object(u.a)(s,2),d=p[0],f=p[1],E=Object(n.useState)([]),g=Object(u.a)(E,2),b=g[0],y=g[1],v=Object(n.useContext)(V).state;Object(n.useEffect)((function(){y(function(e,t){return e[t]}(v,a))}),[v.organisations,v.categories]);var h,O=function(e,t,a){t(),o(e[0]),f(a)},k=function(e){e(),o("")},j=[Object(m.a)({title:a.charAt(0).toUpperCase()+a.substring(1),dataIndex:"name",key:"name"},(h="name",{filterDropdown:function(e){var a=e.setSelectedKeys,n=e.selectedKeys,c=e.confirm,l=e.clearFilters;return r.a.createElement("div",{style:{padding:3}},r.a.createElement(me.a,{ref:function(e){t=e},placeholder:"Search ".concat(h),value:n[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return O(n,c,h)},style:{width:188,marginBottom:8,display:"block"}}),r.a.createElement(we.a,null,r.a.createElement(ie.a,{type:"primary",onClick:function(){return O(n,c,h)},icon:r.a.createElement(Se.a,null),size:"small",style:{width:90}},"Search"),r.a.createElement(ie.a,{onClick:function(){return k(l)},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return r.a.createElement(Se.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,t){return t[h]?t[h].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return t.select()}),100)},render:function(e){return d===h?r.a.createElement(Ie.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[i],autoEscape:!0,textToHighlight:e?e.toString():""}):r.a.createElement("span",{style:{margin:"-10px"}},e)}}))];return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{style:{margin:"0 auto"},columns:j,dataSource:b,pagination:{size:"small",position:["bottomCenter"],pageSize:3}}))}var Me=function(e){var t=e.title,a=e.content;return r.a.createElement("div",{className:"site-description-item-profile-wrapper"},r.a.createElement("p",{className:"site-description-item-profile-p-label"},t,": ",r.a.createElement("span",{style:{color:"grey"}},a)))};function We(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(V),i=l.state,o=l.dispatch,s=function(e){return"".concat(e.user.fname," ").concat(e.user.lname)}(i),m=function(e){return e.user.email}(i),p=function(e){return e.user._id}(i),d=function(e){return e.user.type}(i),f=O(i),g=function(e){return e.user.role||"Unavailable"}(i),b=function(e){return e.user.description||"Unavailable"}(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{color:"white",paddingRight:"15px"},onClick:function(e){return function(e){e.preventDefault(),c(!0)}(e)}},s),r.a.createElement(ze.a,{width:640,placement:"right",closable:!1,onClose:function(e){return function(e){e.preventDefault(),c(!1)}(e)},visible:a},r.a.createElement("p",{className:"site-description-item-profile-p",style:{marginBottom:24}},"Performance"),r.a.createElement(Ge.a,null,r.a.createElement(Pe.a,{span:24},r.a.createElement(Ve,null))),f&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ke.a,null),r.a.createElement("p",{className:"site-description-item-profile-p"},"Information"),r.a.createElement(Ge.a,null,r.a.createElement(Pe.a,{span:12},r.a.createElement(Be,{type:"organisations"})),r.a.createElement(Pe.a,{span:12},r.a.createElement(Be,{type:"categories"})))),r.a.createElement(Ke.a,null),r.a.createElement("p",{className:"site-description-item-profile-p"},"User Profile"),r.a.createElement(Ge.a,null,r.a.createElement(Pe.a,{span:12},r.a.createElement(Me,{title:"User ID",content:p})),r.a.createElement(Pe.a,{span:12},r.a.createElement(Me,{title:"Full Name",content:s})),r.a.createElement(Pe.a,{span:12},r.a.createElement(Me,{title:"Account Type",content:d})),r.a.createElement(Pe.a,{span:12},r.a.createElement(Me,{title:"Email",content:m}))),r.a.createElement(Ke.a,null),r.a.createElement("p",{className:"site-description-item-profile-p"},"Company"),r.a.createElement(Ge.a,null,r.a.createElement(Pe.a,{span:12},r.a.createElement(Me,{title:"Position",content:g})),r.a.createElement(Pe.a,{span:12},r.a.createElement(Me,{title:"Responsibilities",content:b}))),r.a.createElement(Ke.a,null),r.a.createElement("p",{className:"site-description-item-profile-p"},"Actions"),r.a.createElement(Ge.a,null,r.a.createElement(Pe.a,null,r.a.createElement(ie.a,{type:"dashed",onClick:function(){return function(e){window.localStorage.removeItem("token"),e({type:"LOGOUT",module:y}),Object(E.navigate)("/tickie")}(o)}},"Logout")))))}function Ye(){return r.a.createElement(Ue.a,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#101e2b",color:"white",height:"8vh",fontSize:"15px"}},r.a.createElement(Ue.a.Item,{href:"/"},r.a.createElement("span",{style:{color:"white",paddingLeft:"10px",fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",fontWeight:"700"}},"Tickie")),r.a.createElement(Ue.a.Item,{href:"/"},r.a.createElement(We,null)))}function Je(){return r.a.createElement("div",null,"No entry")}var $e=a(445),Qe=a(124),Xe=$e.a.Text;function Ze(){var e=Object(n.useContext)(V).dispatch,t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),s=o[0],m=o[1];Object(n.useEffect)((function(){!function(e){e({type:"CHECKING",module:y});var t=window.localStorage.getItem("token");t&&t.length>0&&(e({type:"LOGIN",module:y}),v(e))}(e)}),[]);var p=function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post("".concat("https://tickie-server.herokuapp.com/api","/auth/login"),a);case 3:n=t.sent,h(e,n.data.token),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),l(!0),m(t.t0.response.data.msg),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement(Xe,{style:{fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',fontWeight:"700",color:"#11202e",fontSize:"40px",marginBottom:"-10px",paddingBottom:"0px"}},"Welcome back!"),r.a.createElement(se.a,{style:{width:"50vw"},name:"basic",initialValues:{remember:!0},onFinish:p,onFinishFailed:function(e){console.log("Failed:",e)}},c&&r.a.createElement(pe.a,{style:{marginBottom:"5px"},message:s,type:"warning",showIcon:!0,closable:!0,afterClose:function(){return l(!1)}}),r.a.createElement(se.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}]},r.a.createElement(me.a,null)),r.a.createElement(se.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(me.a.Password,null)),r.a.createElement(se.a.Item,{name:"remember",valuePropName:"checked"},r.a.createElement(Qe.a,null,"Remember me")),r.a.createElement(se.a.Item,{style:{marginTop:"0px"}},r.a.createElement(ie.a,{type:"primary",shape:"round",size:"large",htmlType:"submit",ghost:!0},"Login Tickie")))))}var et=a(233),tt=a.n(et),at=a(234),nt=a.n(at),rt=a(461);a(436);function ct(){var e;return r.a.createElement("a",(e={href:!0,style:lt},Object(s.a)(e,"href","https://github.com/metildachee/tickie.git"),Object(s.a)(e,"target","_blank"),Object(s.a)(e,"className","shake-animation"),e),r.a.createElement(rt.a,null))}var lt={position:"absolute",fontSize:"30px",top:"10px",right:"30px",zIndex:"1"},it=(a(437),$e.a.Text);function ot(){return r.a.createElement("div",{className:"smooth-scroll-parent"},r.a.createElement("div",{className:"container"},r.a.createElement(ct,null),r.a.createElement("section",{className:"section center-xy",style:{backgroundColor:"aliceblue"}},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"tickie-title"},"Tickie"),r.a.createElement(it,{type:"secondary"},"Ticket support systems suck, "),r.a.createElement(it,{mark:!0},"it doesn't have to.")),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(ie.a,{size:"large",shape:"round",type:"primary",style:{marginRight:"15px"}},r.a.createElement("a",{href:"#learn-more"},"Learn more")),r.a.createElement(ie.a,{type:"primary",size:"large",shape:"round",ghost:!0},r.a.createElement("a",{href:"#login"},"Login Tickie"))))),r.a.createElement("section",{id:"learn-more",className:"section center-xy"},r.a.createElement(Ge.a,null,r.a.createElement(Pe.a,{className:"center-xy",span:12},r.a.createElement("div",null,r.a.createElement(Ge.a,null,r.a.createElement("img",{src:nt.a,alt:"Productivity"})),r.a.createElement(Ge.a,null,r.a.createElement(it,{style:{fontSize:"20px"}},"Add comments, view threads to see ",r.a.createElement(it,{mark:!0},"exactly")," ","what is happening.")))),r.a.createElement(Pe.a,{className:"center-xy",span:12},r.a.createElement("div",null,r.a.createElement(it,{style:{fontSize:"20px"}},"Manage KPI and performance ",r.a.createElement(it,{mark:!0},"at ease")),r.a.createElement("img",{src:tt.a,alt:"KPI"}))))),r.a.createElement("section",{id:"login",className:"section center-xy"},r.a.createElement(Ze,null))))}var st=function(){var e=Object(n.useContext)(V).state,t=function(e){return e.isAuth}(e),a=k(e);return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,t&&r.a.createElement(Ye,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/tickie/",exact:!0},t?r.a.createElement(Re,null):r.a.createElement(ot,null)),r.a.createElement(o.a,{path:"/tickie/create",exact:!0},t&&a?r.a.createElement(De,null):r.a.createElement(Je,null)))))};l.a.render(r.a.createElement(M,null,r.a.createElement(st,null)),document.getElementById("root"))}},[[244,1,2]]]);
//# sourceMappingURL=main.1b56ce78.chunk.js.map