(this["webpackJsonpapi-availability-dash"]=this["webpackJsonpapi-availability-dash"]||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),c=a(57),n=a.n(c),l=(a(66),a(67),a(68),a(69),a(70),a(0));var r=function(){return Object(l.jsx)("header",{className:"masthead mb-auto",children:Object(l.jsxs)("div",{className:"inner",children:[Object(l.jsx)("h3",{className:"masthead-brand",children:"Health Check - API"}),Object(l.jsxs)("nav",{className:"nav nav-masthead justify-content-center",children:[Object(l.jsx)("a",{className:"nav-link active",children:"Home"}),Object(l.jsx)("a",{className:"nav-link menu-btn",children:"Settings"}),Object(l.jsx)("a",{className:"nav-link",href:"mailto:abdusshakurt@gmail.com",children:"Contact"})]})]})})},d=a(12);var o=function(e){var t={width:e.widgetDetails.availability+"%"},a=e.widgetDetails.metadata,i=Object(s.useState)(Number(e.widgetDetails.lastUpdated.split(" ")[0])),c=Object(d.a)(i,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){var t=setInterval((function(){r(n+=1)}),1e3);return function(){clearInterval(t),r(Number(e.widgetDetails.lastUpdated.split(" ")[0]))}}),[]),Object(l.jsxs)("div",{className:"card mb-3 bg-dark container-fluid",children:[Object(l.jsx)("div",{className:"card-header",children:Object(l.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(l.jsx)("div",{className:"p-2 flex-grow-1 bd-highlight",children:Object(l.jsx)("p",{className:"card-text text-left",children:e.widgetDetails.team})}),Object(l.jsx)("div",{className:"p-2 bd-highlight",children:Object(l.jsxs)("p",{className:"card-text text-right",children:["Test Environment ",Object(l.jsx)("span",{className:"badge badge-"+e.widgetDetails.envBatch,children:e.widgetDetails.environment})]})})]})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md",children:Object(l.jsxs)("h5",{className:"card-title text-left",children:[e.widgetDetails.apiName," \xa0\xa0\xa0",Object(l.jsx)("span",{className:"badge badge-pill badge-"+e.widgetDetails.statusBatch,children:e.widgetDetails.status})]})}),Object(l.jsx)("div",{className:"col-md",children:Object(l.jsx)("p",{className:"card-text text-right",children:e.widgetDetails.key})})]})}),Object(l.jsx)("div",{className:"container-fluid p-3",children:Object(l.jsx)("div",{className:"row pb-3",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("p",{className:"card-text text-left",children:e.widgetDetails.description})})})}),Object(l.jsx)("div",{className:"progress ml-3",children:Object(l.jsx)("div",{className:"progress-bar bg-"+e.widgetDetails.progressBar+" progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:t})}),Object(l.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(l.jsx)("div",{className:"p-2 flex-grow-1 bd-highlight",children:Object(l.jsxs)("p",{className:"card-text text-left pl-2 ",children:["API Availability",Object(l.jsx)("br",{}),e.widgetDetails.availability," % Uptime"]})}),Object(l.jsx)("div",{className:"p-2 bd-highlight",children:Object(l.jsxs)("p",{className:"card-text text-right",children:["Total Hits",Object(l.jsx)("br",{}),e.widgetDetails.totalHits]})}),Object(l.jsx)("div",{className:"p-2 bd-highlight",children:Object(l.jsxs)("p",{className:"card-text text-right",children:["Success Hits",Object(l.jsx)("br",{}),e.widgetDetails.successHits]})})]}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsxs)("small",{className:"text-muted",children:["Last updated ",n," Seconds ago"]})}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{className:"btn btn-white btn-outline-success",type:"button","data-toggle":"collapse","data-target":"#"+e.widgetDetails.key,"aria-expanded":"false","aria-controls":"collapseExample",children:"View More Info"})}),Object(l.jsx)("div",{className:"collapse",id:e.widgetDetails.key,children:Object(l.jsx)("div",{className:"card card-body bg-info bg-gradient-light text-light",children:a.map((function(e){return Object(l.jsxs)("p",{className:"card-text text-left",children:[e.attribute,Object(l.jsx)("br",{}),e.value," "]},e.attribute)}))})})]})]})},j=a(58),h=a(16),b=a.n(h),u=a(37),m=a(22),p=a(59),x=a(60),v=a.n(x);function g(){return v.a}function O(){return g().defaults.baseURL="https://api-dashboard-backend.herokuapp.com/test",g()}var f=function e(){Object(m.a)(this,e)};f.DEFAULT_ENVIRONMENT="it1";var N=f,w=function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,null,[{key:"callWidgetDetails",value:function(){var e=Object(u.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={url:"/ui-details",headers:{env:this.env},method:"post"},this.updateFunction=t,(s=a,O().request(s)).then((function(e){return t(e.data)}));case 3:case"end":return e.stop()}var s}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getEnvironmentList",value:function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a="/environments",O().get(a)).then((function(e){t({data:e.data})}));case 1:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"setEnvironment",value:function(e){this.env=e,this.updateFunction&&this.callWidgetDetails(this.updateFunction)}}]),e}();w.env=N.DEFAULT_ENVIRONMENT;var y=w;var D=function(){var e=Object(s.useState)(j),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(s.useEffect)((function(){y.callWidgetDetails(i,N.DEFAULT_ENVIRONMENT);var e=setInterval((function(){return y.callWidgetDetails(i,N.DEFAULT_ENVIRONMENT)}),"60000");return function(){clearInterval(e)}}),[]),Object(l.jsx)("main",{role:"main",className:"inner cover",children:a.map((function(e){return Object(l.jsx)(o,{widgetDetails:e},e.key+e.lastUpdated)}))})};var k=function(){var e=Object(s.useState)({data:[{name:"IT",env:["IT1","IT2"]}]}),t=Object(d.a)(e,2),a=t[0],i=t[1];Object(s.useEffect)((function(){y.getEnvironmentList(i)}),[]);var c=function(e){y.setEnvironment(e.target.name)};return Object(l.jsx)("nav",{className:"pushy pushy-left text-left","data-focus":"#first-link",id:"sidebar",children:Object(l.jsxs)("div",{className:"pushy-content",children:[Object(l.jsx)("div",{className:"sidebar-header",children:Object(l.jsx)("h3",{className:"text-center",children:"DIY Dashboard"})}),Object(l.jsxs)("ul",{className:"lisst-unstyled components",children:[Object(l.jsx)("p",{children:"Related Links"}),Object(l.jsxs)("li",{className:"active",children:[Object(l.jsx)("a",{href:"#teams-dropdown","data-toggle":"collapse","aria-expanded":"false",className:"dropdown-toggle",children:"Teams"}),Object(l.jsx)("ul",{className:"collapse lisst-unstyled",id:"teams-dropdown",children:Object(l.jsx)("li",{children:Object(l.jsx)("a",{children:"Customer Dashboard"})})})]}),Object(l.jsxs)("li",{className:"active",children:[Object(l.jsx)("a",{href:"#env-dropdown","data-toggle":"collapse","aria-expanded":"false",className:"dropdown-toggle",children:"API Availability"}),Object(l.jsx)("ul",{className:"collapse lisst-unstyled",id:"env-dropdown",children:a.data.map((function(e){return Object(l.jsxs)("li",{className:"active",children:[Object(l.jsx)("a",{href:"#env-drop"+e.name,"data-toggle":"collapse","aria-expanded":"false",className:"dropdown-toggle",children:e.name}),Object(l.jsx)("ul",{className:"collapse lisst-unstyled",id:"env-drop"+e.name,children:e.env.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",name:e,onClick:c,children:e})})}))})]})}))})]}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Contact"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"About Me"})})]})]})})},I=a(61),T=a.n(I);var E=function(){return Object(l.jsxs)("div",{className:"text-center content-holder",children:[Object(l.jsx)(k,{}),Object(l.jsx)("div",{className:"site-overlay"}),Object(l.jsxs)("div",{className:"cover-container d-flex p-2 bd-highlight mx-auto flex-column",children:[Object(l.jsx)(r,{}),Object(l.jsx)(D,{}),Object(l.jsx)("footer",{className:"mastfoot mt-auto",children:Object(l.jsx)("div",{className:"inner",children:Object(l.jsxs)("p",{children:["API Availability dashboard for ",Object(l.jsx)("a",{href:"#",children:"DIY"}),", by ",Object(l.jsx)("a",{href:"https://instagram.com/shakur427",children:"Abdus Shakur"}),"."]})})})]}),Object(l.jsx)(T.a,{type:"text/javascript",src:"pushy.js"})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,138)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),c(e),n(e)}))};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),A()},58:function(e){e.exports=JSON.parse('[{"team":"Customer Dashboard","apiName":"Post API Test","environment":"IT1","envBatch":"warning","status":"Api Down","statusBatch":"danger","key":"post-api-test-local-running-instance","description":"Post api description","availability":"0.00","totalHits":"134","successHits":"0","lastUpdated":"3 Seconds","progressBar":"danger","metadata":[{"attribute":"apiName","value":"Post API Test"},{"attribute":"version","value":"1.0"},{"attribute":"git-url","value":"https://www.google.com"}]},{"team":"Free to Use API","apiName":"Json Place holder API","environment":"IT1","envBatch":"warning","status":"Working","statusBatch":"success","key":"json-placeholder-api-always-available","description":"Post api description","availability":"100.00","totalHits":"134","successHits":"134","lastUpdated":"3 Seconds","progressBar":"success","metadata":[{"attribute":"apiName","value":"Json Place holder API"},{"attribute":"version","value":"1.0"},{"attribute":"git-url","value":"https://jsonplaceholder.typicode.com"}]},{"team":"Open Source API","apiName":"7Timer !","environment":"IT21","envBatch":"warning","status":"Working","statusBatch":"success","key":"www-7timer-info","description":"7Timer! is a series of web-based meteorological forecast products, mainly derived from the NOAA/NCEP-based numeric weather model","availability":"100.00","totalHits":"133","successHits":"133","lastUpdated":"62 Seconds","progressBar":"success","metadata":[{"attribute":"apiName","value":"7Timer !"},{"attribute":"version","value":"2.1"},{"attribute":"url","value":"http://www.7timer.info/doc.php?lang=en"}]}]')},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.18945ad4.chunk.js.map