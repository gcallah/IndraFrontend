(this.webpackJsonpindra=this.webpackJsonpindra||[]).push([[0],{137:function(e,t,a){},200:function(e,t,a){e.exports=a.p+"static/media/Sandpile.090bc1a0.jpg"},201:function(e,t,a){e.exports=a.p+"static/media/sandpile_2.d38b3fb1.png"},202:function(e,t,a){e.exports=a.p+"static/media/mendelobrot_sq.875dd8b8.jpg"},241:function(e,t,a){e.exports=a(593)},589:function(e,t,a){},590:function(e,t,a){},593:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=a(104),i=a(117),s=a(47),u=a(74),d=a(619),m=a(625),p=a(627),h="/";h="https://gcallah.github.io/indras_net/webapp.html#/";var g=function(){return r.a.createElement(m.a,{bg:"light",expand:"lg"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:h},"HOME")),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"https://gcallah.github.io/indras_net/index.html"},"ABOUT"),r.a.createElement(p.a.Link,{href:"https://github.com/gcallah/indras_net/"},"SOURCE CODE"))))};function v(e){var t=e.children;return r.a.createElement(d.a,null,r.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"}),r.a.createElement(g,null),t)}v.defaultProps={children:{}};var b=v,f=a(14),E=a.n(f),S=a(33),y=a(18),k=a(19),O=a(20),D=a(21),j=a(624),P=a(620),N=a(86),C=a(144),w=a(227),x=a(215),I=a(55),_=a.n(I),B=(a(337),a(338),a(199)),M=a.n(B),F=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;Object(y.a)(this,a),(n=t.call(this,e)).renderImage=function(){var e=n.props,t=e.dots,a=e.speed,l=e.autoplay,o=e.className,c=e.data,i={arrows:!1,dots:t,infinite:!0,speed:a,slidesToShow:1,slidesToScroll:1,autoplay:l,fade:!0,className:o},s=function(){for(var e=n.state.imagesLoadedStatus,t=0;t<e.length;t+=1)if(!e[t])return!1;return!0};return r.a.createElement("div",null,r.a.createElement(M.a,i,c.map((function(e,t){return r.a.createElement("div",{key:e.title},s()?null:r.a.createElement("div",null,"Loading..."),r.a.createElement("img",{src:e.image,style:s()?{}:{display:"none"},className:"rounded-circle carousel",alt:"Responsive Model","data-toggle":"tooltip","data-placement":"top",title:e.title,onLoad:function(){var e=n.state.imagesLoadedStatus.slice();e[t]=!0,n.setState({imagesLoadedStatus:e})}}))}))))};var l=new Array(e.data.length).fill(!1);return n.state={imagesLoadedStatus:l},n}return Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderImage())}}]),a}(n.Component);F.defaultProps={dots:!1,speed:1e3,autoplay:!1,className:"",data:[]};var L=F,R=a(200),A=a.n(R),T=a(201),W=a.n(T),U=a(202),V=a.n(U),H=(a(137),"https://indrasnet.pythonanywhere.com/");Object({NODE_ENV:"production",PUBLIC_URL:"/indras_net",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL&&(H=Object({NODE_ENV:"production",PUBLIC_URL:"/indras_net",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL);var z={API_URL:H},K=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).handleClick=function(e,t,a,n){localStorage.setItem("menu_id",e),localStorage.setItem("name",t),localStorage.setItem("source",a),localStorage.setItem("graph",n)},n.renderChooseModelProp=function(){return r.a.createElement("h1",{className:"small-header"},"Please choose a model: ")},n.state={allItems:[],loadingData:!1,apiFailed:!1,dataForCarousel:[{image:A.a,title:"by Seth Terashima"},{image:W.a,title:"by Colt Browninga"},{image:V.a,title:"by Adam Majewski"}]},n.api_server=z.API_URL,n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.history,e.prev=1,this.setState({loadingData:!0}),document.title="Home",e.next=6,_.a.get("".concat(this.api_server,"models"));case 6:a=e.sent,this.setState({allItems:a.data,loadingData:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.push("/errorCatching");case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loadingData,n=t.dataForCarousel,l=t.allItems;return t.apiFailed?r.a.createElement("h1",null,"404 Error"):a?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(P.a,{size:"massive"},"Loading...")):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"margin-bottom-80"},r.a.createElement("h1",{className:"text-left"},"Indra Agent-Based Modeling System")),r.a.createElement("div",{className:"row"},r.a.createElement(C.a,{sm:12,lg:4,className:"mb-5"},this.renderChooseModelProp(),r.a.createElement(N.a,null,Object.keys(l).map((function(t){return"active"in l[t]&&!0!==l[t].active?null:r.a.createElement(w.a,{key:"".concat(l[t].name,"-tooltip"),placement:"right",overlay:r.a.createElement(x.a,null,l[t].doc)},r.a.createElement(i.b,{to:{pathname:"/models/props/".concat(l[t]["model ID"])},className:"text-primary p-3 list-group-item list-group-item-action link",key:l[t].name,onClick:function(){return e.handleClick(l[t]["model ID"],l[t].name,l[t].source,l[t].graph)}},l[t].name))})))),r.a.createElement(C.a,{sm:12,lg:{cols:6,span:6,offset:2}},r.a.createElement(L,{speed:5e3,autoplay:!0,className:"col",data:n}))))}}]),a}(n.Component);K.defaultProps={history:{}};var J=K,q=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={loadingData:!1},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loadingData:!0}),document.title="Indra | Work in Progress",this.setState({loadingData:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loadingData?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(P.a,{size:"massive"},"Loading...")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}},"Welcome to the Indra ABM platform!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"We will have this model running soon!"),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component),$=a(62),G=a(87);function X(e){var t=e.label,a=e.name,n=e.type,l=e.placeholder,o=e.propChange,c=e.error;return r.a.createElement("div",{key:t,className:"form-group"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:a,className:"col-sm-4 col-md-4 col-lg-4",key:t},t," "," "),r.a.createElement("input",{id:a,type:n,className:"col-sm-2 col-md-2 col-lg-2",style:{fontSize:"15pt"},placeholder:l,onChange:o,name:a}),r.a.createElement("span",{className:"col-sm-6 col-md-6 col-lg-6",style:{color:"red",fontSize:12}},c),r.a.createElement("br",null)))}X.defaultProps={label:"",name:"",type:"",placeholder:0,propChange:function(){},error:""};var Q=X;var Y=function(){return r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(P.a,{size:"massive"},"Loading..."))},Z="".concat(z.API_URL,"models/props/"),ee=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).states=function(e){var t=n.state.modelDetails;Object.keys(t).forEach((function(t){n.setState((function(a){return{modelDetails:Object(G.a)({},a.modelDetails,Object($.a)({},t,Object(G.a)({},a.modelDetails[t],{defaultVal:e[t].val})))}}))}))},n.errors=function(){var e=n.state.modelDetails;Object.keys(e).forEach((function(e){return n.setState((function(t){return{modelDetails:Object(G.a)({},t.modelDetails,Object($.a)({},e,Object(G.a)({},t.modelDetails[e],{errorMessage:"",disabledButton:!1})))}}))}))},n.errorSubmit=function(){var e=n.state.modelDetails,t=!1;return Object.keys(e).forEach((function(a){t=t||e[a].disabledButton})),t},n.propChanged=function(e){var t=n.state.modelDetails,a=e.target,r=a.name,l=a.value,o=n.checkValidity(r,l);t[r].disabledButton=!0,1===o?(t[r].val=parseInt(l,10),t[r].errorMessage="",t[r].disabledButton=!1,n.setState({modelDetails:t})):-1===o?(t[r].errorMessage="**Wrong Input Type",t[r].val=t[r].defaultVal,n.setState({modelDetails:t})):(t[r].errorMessage="**Please input a number between ".concat(t[r].lowval," and ").concat(t[r].hival,"."),t[r].val=t[r].defaultVal,n.setState({modelDetails:t})),n.setState({disabledButton:n.errorSubmit()})},n.checkValidity=function(e,t){var a=n.state.modelDetails;return t<=a[e].hival&&t>=a[e].lowval?"INT"===a[e].atype&&!1===!!(t%1)||"DBL"===a[e].atype?1:-1:0},n.handleSubmit=function(){var e=Object(S.a)(E.a.mark((function e(t){var a,r,l,o,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state.modelDetails,r=n.props.history,e.prev=3,e.next=6,_.a.put(Z+localStorage.getItem("menu_id"),a);case 6:l=e.sent,o=localStorage.getItem("menu_id"),n.setState({envFile:l.data}),c=n.state.envFile,localStorage.setItem("envFile",JSON.stringify(c)),r.push({pathname:"/models/menu/".concat(o.toString(10)),state:{envFile:c}}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),r.push("/errorCatching");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),n.renderHeader=function(){return r.a.createElement("h1",{className:"header",style:{textAlign:"center",fontWeight:"200"}},"Please set the parameters for the ".concat(localStorage.getItem("name")," model"))},n.renderSubmitButton=function(){var e=n.state.disabledButton;return r.a.createElement("button",{type:"button",disabled:e,onClick:e?null:n.handleSubmit,className:"btn btn-primary m-2"},"Submit")},n.goback=function(){n.props.history.goBack()},n.state={modelDetails:{},loadingData:!1,disabledButton:!1,envFile:{}},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.history,e.prev=1,document.title="Indra | Property",this.setState({loadingData:!0}),e.next=6,_.a.get("".concat(Z).concat(localStorage.getItem("menu_id")));case 6:a=e.sent,this.setState({modelDetails:a.data}),this.states(a.data),this.errors(a.data),this.setState({loadingData:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t.push("/errorCatching");case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loadingData,n=t.modelDetails;return a?r.a.createElement(Y,null):r.a.createElement("div",null,r.a.createElement("h1",{className:"margin-top-60"}," "),this.renderHeader(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("div",{className:"container"},Object.keys(n).map((function(t){return"question"in n[t]?r.a.createElement(Q,{label:n[t].question,type:n[t].atype,placeholder:n[t].val,error:n[t].errorMessage,propChange:e.propChanged,name:t,key:t}):null})))),r.a.createElement("br",null),r.a.createElement("br",null),this.renderSubmitButton())}}]),a}(n.Component);ee.defaultProps={history:{}};var te=ee,ae=a(58),ne=a(70),re=a.n(ne),le=a(118),oe=(a(194),a(151)),ce=function(e){var t=e.title,a=e.children;return r.a.createElement(oe.a,null,r.a.createElement("h5",{style:{textAlign:"center",fontSize:16},className:"card-header bg-primary text-white"},t),r.a.createElement(oe.a.Body,null,a))};function ie(e){var t=["red","green","blue","black","purple","magenta","orange"],a=0;if(e.loadingData){var n=[],l=e.envFile.pop_hist.pops;return Object.keys(l).forEach((function(e,r){n.push({name:e,color:t[a%7],data:{}}),Object.keys(l[e]).forEach((function(t,a){n[r].data[t]=l[e][a]})),a+=1})),r.a.createElement(ce,{title:"Population Graph"},r.a.createElement(le.a,{data:n,width:"600px",height:"600px"}))}return null}ie.defaultProps={loadingData:!0,envFile:{}};var se=ie;function ue(e){var t=e.loadingData,a=e.envFile;e.id;if(t){var n=a.members,l=[];return Object.keys(n).forEach((function(e,t){l.push({name:n[e].name,color:n[e].attrs.color,data:[]}),Object.keys(n[e].members).forEach((function(a){null!==n[e].members[a].pos&&l[t].data.push(n[e].members[a].pos)}))})),r.a.createElement(ce,{title:"Scatter Plot"},r.a.createElement(le.b,{data:l,width:"600px",height:"600px"}))}return null}ue.defaultProps={loadingData:!0,envFile:{},id:0};var de=ue,me=a(218),pe=a.n(me);function he(e){var t=e.envFile;return e.loadingData?r.a.createElement(ce,{title:"Model Data"},r.a.createElement(pe.a,{src:t})):null}he.defaultProps={envFile:{},loadingData:!0};var ge=he,ve=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;Object(y.a)(this,a),n=t.call(this,e),re()(Object(ae.a)(n));var r=n.props,l=r.msg,o=r.title;return n.state={msg:l,title:o},n}return Object(k.a)(a,[{key:"render",value:function(){var e=this.state,t=e.msg,a=e.title;return r.a.createElement("div",null,r.a.createElement("div",{className:"card w-50 model-status"},r.a.createElement("h5",{style:{textAlign:"center",fontSize:16},className:"card-header bg-primary text-white"},a),r.a.createElement("div",{className:"card-body overflow-auto"},r.a.createElement("pre",{className:"card-text"},t))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.msg!==t.msg?{msg:e.msg}:null}}]),a}(r.a.Component);ve.defaultProps={msg:"",title:""};var be=a(626),fe=a(622),Ee=function(e){var t=e.loadingData,a=e.code;return t?r.a.createElement(ce,{title:"Source Code"},r.a.createElement(be.a,{language:"python",style:fe.a},a)):null};Ee.defaultProps={loadingData:!0,code:""};var Se=Ee,ye=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(y.a)(this,a),n=t.call(this,e),re()(Object(ae.a)(n)),n.state={disabledButton:e.disabledButton,errorMessage:e.errorMessage,sendNumPeriods:e.sendNumPeriods,handleRunPeriod:e.handleRunPeriod},n}return Object(k.a)(a,[{key:"render",value:function(){var e=this.state,t=e.disabledButton,a=e.sendNumPeriods,n=e.handleRunPeriod,l=e.errorMessage;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",disabled:t,onClick:t?null:a,className:"btn btn-success m-2"},"  ","Run","  ")," ",r.a.createElement("span",null,"model for")," ",r.a.createElement("input",{type:"INT",className:"from-control m-2 number-input",placeholder:"10",onChange:n})," ","periods.",r.a.createElement("span",{className:"error-message"},l))}}]),a}(r.a.Component);ye.defaultProps={disabledButton:!0,errorMessage:"",sendNumPeriods:function(){},handleRunPeriod:function(){}};var ke=function(e){var t=e.loadingData,a=e.envFile;return t?r.a.createElement(ce,{title:"Logs"},r.a.createElement("div",{style:{whiteSpace:"pre-line"}},a.user.debug||"Run the model to see the logs")):null};ke.defaultProps={loadingData:!0,envFile:{}};var Oe=ke,De="".concat(z.API_URL,"models/menu/"),je=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).viewSource=Object(S.a)(E.a.mark((function e(){var t,a,r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.state.source,a=t.split("/"),r=a[a.length-1],e.next=6,_.a.get("https://raw.githubusercontent.com/gcallah/indras_net/master/models/".concat(r));case 6:return l=e.sent,e.abrupt("return",l.data);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return","Something has gone wrong.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),n.handleRunPeriod=function(e){n.setState({periodNum:e.target.value}),0===n.checkValidity(e.target.value)?n.setState({errorMessage:"**Please input an integer",disabledButton:!0}):n.setState({errorMessage:"",disabledButton:!1})},n.checkValidity=function(e){return e%1===0?1:0},n.handleClick=function(e){switch(n.setState({loadingData:!1,loadingSourceCode:!1,loadingDebugger:!1,loadingScatter:!1,loadingPopulation:!1,loadingLogs:!1}),n.setState({activeDisplay:e}),e){case 2:n.setState({loadingPopulation:!0});break;case 3:n.setState({loadingScatter:!0});break;case 4:n.setState({loadingDebugger:!0});break;case 5:n.setState({loadingSourceCode:!0});break;case 6:n.setState({loadingLogs:!0})}},n.sendNumPeriods=Object(S.a)(E.a.mark((function e(){var t,a,r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.periodNum,r=t.envFile,n.setState({loadingData:!0}),e.prev=2,e.next=5,_.a.put("".concat(De,"run/").concat(String(a)),r,a);case 5:return l=e.sent,n.setState({envFile:l.data,loadingData:!1,msg:l.data.user.user_msgs}),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),n.renderHeader=function(){var e=n.state.name;return r.a.createElement("h1",{className:"header"},e)},n.MenuItem=function(e,t,a,l){var o=localStorage.getItem("graph"),c=n.state.activeDisplay;return r.a.createElement(N.a.Item,{className:"w-50 p-3 list-group-item list-group-item-action",as:"li",active:c===t,disabled:3===t&&"line"===o||2===t&&"scatter"===o,key:l,onClick:function(){return n.handleClick(t)}},a)},n.renderMenuItem=function(){var e=n.state,t=e.envFile,a=e.loadingDebugger,l=e.loadingSourceCode,o=e.sourceCode,c=e.loadingPopulation,i=e.loadingScatter,s=e.loadingLogs;return r.a.createElement("div",{className:"mt-5"},r.a.createElement(ge,{loadingData:a,envFile:t}),r.a.createElement(Se,{loadingData:l,code:o}),r.a.createElement(se,{loadingData:c,envFile:t}),r.a.createElement(de,{loadingData:i,envFile:t}),r.a.createElement(Oe,{loadingData:s,envFile:t}))},n.renderMapItem=function(){var e=n.state.menu;return r.a.createElement("div",{className:"row margin-bottom-80"},r.a.createElement("div",{className:"col w-25"},r.a.createElement(N.a,null,Object.keys(e).map((function(t,a){return e[t].id>1?n.MenuItem(a,e[t].id,e[t].question,e[t].func):null})))))},re()(Object(ae.a)(n)),n.state={menu:{},loadingData:!0,envFile:{},source:"",periodNum:10,errorMessage:"",disabledButton:!1,loadingSourceCode:!1,loadingDebugger:!1,loadingPopulation:!1,loadingScatter:!1,loadingLogs:!1,activeDisplay:null},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,document.title="Indra | Menu",e.next=4,_.a.get(De);case 4:t=e.sent,this.setState({menu:t.data,name:localStorage.getItem("name"),source:localStorage.getItem("source"),envFile:JSON.parse(localStorage.getItem("envFile")),msg:JSON.parse(localStorage.getItem("envFile")).user.user_msgs,loadingData:!1}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:return"scatter"===localStorage.getItem("graph")?this.setState({loadingScatter:!0,activeDisplay:3}):this.setState({loadingPopulation:!0,activeDisplay:2}),e.prev=13,e.next=16,this.viewSource();case 16:a=e.sent,this.setState({sourceCode:a}),e.next=23;break;case 20:return e.prev=20,e.t1=e.catch(13),e.abrupt("return",!1);case 23:return e.abrupt("return",!0);case 24:case"end":return e.stop()}}),e,this,[[0,8],[13,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loadingData,a=e.msg,n=e.disabledButton,l=e.errorMessage;return t?r.a.createElement(Y,null):r.a.createElement("div",null,this.renderHeader(),r.a.createElement("div",null,r.a.createElement(ve,{title:"Model Status",msg:a,ref:this.modelStatusBoxElement})),r.a.createElement("ul",{className:"list-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement(ye,{disabledButton:n,errorMessage:l,sendNumPeriods:this.sendNumPeriods,handleRunPeriod:this.handleRunPeriod}),r.a.createElement("h3",{className:"margin-top-50 mb-4"},"Model Analysis:"))),this.renderMapItem()),this.renderMenuItem())}}]),a}(n.Component);je.defaultProps={history:{}};var Pe=je,Ne=(a(589),function(e){var t=e.code,a=e.children;return r.a.createElement(s.a,{render:function(e){var n=e.staticContext;return n&&(n.status=t),a}})});Ne.defaultProps={code:0,children:{}};var Ce=function(){return r.a.createElement(Ne,{code:404},r.a.createElement("div",{className:"NotFoundPage"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("div",null,"Page not found."),r.a.createElement("div",{className:"action"},r.a.createElement("a",{className:"btn btn-primary",href:"/"},"Guide me to the right path!"))))},we=function(e){Object(D.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={loadingData:!1},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loadingData:!0}),document.title="Indra | Work in Progress",this.setState({loadingData:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loadingData?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(P.a,{size:"massive"},"Loading...")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}},"Indra ABM platform"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"We are encountering some problems with the API server. We will have this model running soon!"),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component);function xe(){var e=Object(c.a)(["\n  background: ",';\n  width: 100vw;\n  min-height: 100vh;\n  font-family: -apple-stem, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";\n  h1 {\n    color: ',";\n  }\n"]);return xe=function(){return e},e}var Ie=Object(u.b)("div")(xe(),(function(e){return e.theme.background}),(function(e){return e.theme.body}));function _e(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:J}),r.a.createElement(s.a,{exact:!0,path:"/wip",component:q}),r.a.createElement(s.a,{exact:!0,path:"/models/props/:id",component:te}),r.a.createElement(s.a,{exact:!0,path:"/models/menu/:id",component:Pe}),r.a.createElement(s.a,{exact:!0,path:"/errorCatching",component:we}),r.a.createElement(s.a,{component:Ce}))}var Be=Object(u.c)((function(){return r.a.createElement(Ie,null,r.a.createElement(i.a,null,r.a.createElement(b,null,r.a.createElement(_e,null))))})),Me=(a(590),a(591),a(592),a(228)),Fe=a(229),Le=a(623),Re=a(45),Ae=a(88),Te=a.n(Ae),We=Te()("mode",{light:"#fafafa",dark:"#222"}),Ue=Te()("mode",{light:"#000",dark:"#fff"});Te()("mode",{light:"#222",dark:"#eee"}),Te()("mode",{light:"#eee",dark:"#222"});function Ve(){var e=Object(c.a)(["\n    background-color: ",";\n    color: ",";\n  "]);return Ve=function(){return e},e}var He=r.a.createContext(),ze=Object(Re.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#060606",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#060606",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(Fe.a)(e,["classes"]);return r.a.createElement(Le.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),Ke=function(e){var t=e.children,a=r.a.useState({mode:"light",checkedB:!0}),n=Object(Me.a)(a,2),l=n[0],o=n[1],c=u.b.div(Ve(),We,Ue),i=function(e){return function(t){var a="light"===l.mode?"dark":"light";o(Object($.a)({mode:a},e,t.target.checked))}};return r.a.createElement(He.Provider,{value:{toggle:i}},r.a.createElement(u.a,{theme:{mode:l.mode}},r.a.createElement(c,null,r.a.createElement(ze,{checked:l.checkedB,onChange:i("checkedB"),value:"checkedB"}),t)))};o.a.render(r.a.createElement(Ke,null,r.a.createElement(Be,null)),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.11726016.chunk.js.map