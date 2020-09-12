(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,a){e.exports=a(54)},31:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),s=a.n(l),o=(a(31),a(5)),i=a(1),m=a(3),c=function(){return!!window.localStorage.getItem("s-tk")},d=function(){var e=Object(i.h)(),t=Object(n.useState)(!0),a=Object(m.a)(t,2),l=a[0],s=a[1],d=Object(n.useState)(!1),u=Object(m.a)(d,2),p=u[0],f=u[1];return Object(n.useEffect)((function(){c()?s(!1):e("/auth/login")}),[]),l?null:r.a.createElement("div",{className:"min-h-screen bg-gray-200"},r.a.createElement("nav",{className:"bg-white border-b border-gray-200"},r.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"flex justify-between h-16"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-shrink-0 flex items-center"},r.a.createElement(o.b,{to:"/"},r.a.createElement("svg",{className:"text-pink-500",width:"25",height:"25",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.7 49C11.7 42.7 16.8 37.6 23.1 37.6H45.5V29.3H23.1C12.2 29.3 3.39999 38.1 3.39999 49C3.39999 59.9 12.2 68.7 23.1 68.7H45.5V60.4H23.1C16.8 60.4 11.7 55.3 11.7 49ZM76.9 29.3H54.5V37.6H76.9C83.2 37.6 88.3 42.7 88.3 49C88.3 55.3 83.2 60.4 76.9 60.4H54.5V68.7H76.9C87.8 68.7 96.6 59.9 96.6 49C96.6 38.1 87.8 29.3 76.9 29.3ZM26.3 49C26.3 51.3 28.2 53.2 30.5 53.2H69.6C71.9 53.2 73.8 51.3 73.8 49C73.8 46.7 71.9 44.8 69.6 44.8H30.5C28.2 44.8 26.3 46.7 26.3 49Z",fill:"currentColor"})))),r.a.createElement("div",{className:"hidden sm:-my-px sm:ml-6 sm:flex"},r.a.createElement(o.c,{activeClassName:"border-indigo-500 text-gray-900",to:"/urls",className:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none hover:border-gray-300 focus:border-indigo-700 transition duration-150 ease-in-out"},"URLs"))),r.a.createElement("div",{className:"-mr-2 items-center hidden sm:flex"},r.a.createElement("span",{className:"inline-flex rounded-md shadow-sm ml-2"},r.a.createElement(o.c,{as:"button",to:"/auth/logout",type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"Logout"))),r.a.createElement("div",{className:"-mr-2 flex items-center sm:hidden"},r.a.createElement("button",{onClick:function(){f(!p)},className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},p?r.a.createElement("svg",{className:"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})):r.a.createElement("svg",{className:"block h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})))))),p&&r.a.createElement("div",{className:"sm:hidden"},r.a.createElement("div",{className:"pt-2 pb-3"},r.a.createElement(o.c,{to:"/urls",activeClassName:"border-l-4 bg-indigo-50",className:"block pl-3 pr-4 py-2 border-indigo-500 text-base font-medium text-indigo-700 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"},"Urls")),r.a.createElement("div",{className:"pt-4 pb-3 border-t border-gray-200"},r.a.createElement("div",{className:"mt-3",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"},r.a.createElement(o.b,{to:"/logout",className:"mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out",role:"menuitem"},"Sign out"))))),r.a.createElement("div",{className:"py-10"},r.a.createElement(i.a,null)))},u=a(2),p=a.n(u),f=a(4),g=a(11),x=a.n(g),b=a(25),h=a.n(b),E=function(){var e=Object(f.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(t,{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("s-tk"))},paramsSerializer:function(e){return h.a.stringify(e,{arrayFormat:"brackets"})}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(t,a,{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("s-tk"))}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(e){var t=e.textRef,a=e.buttonText,l=Object(n.useState)(a),s=Object(m.a)(l,2),o=s[0],i=s[1];return r.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),t.current&&(t.current.select(),t.current.setSelectionRange(0,99999),document.execCommand("copy"),i("Copied"),setTimeout((function(){i(a)}),1e3))},className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},o)},v=a(56),N=function(e){var t,a=e.url,l=Object(n.useRef)(null),s=a.id,o=a.external_link,i=a.short_link,m=a.created_at,c=a.total_visits;return r.a.createElement("tr",null,r.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"},s),r.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"},(t=m,Object(v.a)(new Date(t),"MM/dd/yyyy"))),r.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"},r.a.createElement("input",{ref:l,type:"text",readOnly:!0,className:"copyable focus:outline-none select-none w-full",defaultValue:i})),r.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"},o),r.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"},c),r.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"},r.a.createElement(y,{buttonText:"Copy to clipboard",textRef:l})))},k=a(9),j=function(){var e=!0,t=Object(n.useRef)(null),a=Object(n.useState)([]),l=Object(m.a)(a,2),s=l[0],o=l[1],i=Object(n.useState)(!1),c=Object(m.a)(i,2),d=c[0],u=c[1],g=Object(n.useState)(!1),x=Object(m.a)(g,2),b=x[0],h=x[1],v=Object(n.useState)(!1),j=Object(m.a)(v,2),C=j[0],O=j[1],S=Object(n.useState)(""),H=Object(m.a)(S,2),M=H[0],L=H[1],V=Object(k.a)({mode:"onChange"}),q=V.register,R=V.handleSubmit;function _(){return B.apply(this,arguments)}function B(){return(B=Object(f.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,E("/urls");case 3:a=t.sent,e&&o(a.data.urls),u(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){h(!b)}function Z(){O(!C)}function F(){return(F=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("/urls/create",t);case 3:a=e.sent,L(a.data.short_link),I(),Z(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){return _(),function(){e=!1}}),[]),r.a.createElement("main",null,r.a.createElement("div",{className:"my-5 max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-row-reverse"},r.a.createElement("span",{className:"inline-flex rounded-md shadow-sm"},r.a.createElement("button",{onClick:I,type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"},"New Shortlink"))),r.a.createElement("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"},r.a.createElement("div",{className:"align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"},r.a.createElement("table",{className:"min-w-full bg-white"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"ID"),r.a.createElement("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"Created On"),r.a.createElement("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"URL"),r.a.createElement("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"External URL"),r.a.createElement("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"Total Visits"),r.a.createElement("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50"}))),r.a.createElement("tbody",null,d&&r.a.createElement("tr",null,r.a.createElement("td",{colSpan:50,className:"py-5"},r.a.createElement("p",{className:"w-full text-center"},"Fetching Shortlinks"))),!d&&s.length>0?s.map((function(e){return r.a.createElement(N,{key:e.id,url:e})})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:50,className:"py-5"},r.a.createElement("p",{className:"w-full text-center"},"No urls yet, create one"))))))))),C&&r.a.createElement("div",{className:"fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"},r.a.createElement("div",{className:"fixed inset-0 transition-opacity"},r.a.createElement("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})),r.a.createElement("div",{className:"bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},r.a.createElement("div",null,r.a.createElement("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"},r.a.createElement("svg",{className:"h-6 w-6 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"}))),r.a.createElement("div",{className:"mt-3 text-center sm:mt-5"},r.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline"},"Shortlink Created"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("p",{className:"text-sm leading-5 text-gray-500 text-center w-full text-center"},r.a.createElement("input",{ref:t,type:"text",readOnly:!0,className:"copyable focus:outline-none select-none w-full text-center",defaultValue:M}))),r.a.createElement("div",{className:"mt-2"},r.a.createElement(y,{buttonText:"Copy to clipboard",textRef:t})))),r.a.createElement("div",{className:"mt-5 sm:mt-6"},r.a.createElement("span",{className:"flex w-full rounded-md shadow-sm"},r.a.createElement("button",{onClick:function(){_(),Z()},type:"button",className:"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Close"))))),b&&r.a.createElement("div",{className:"fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"},r.a.createElement("div",{onClick:I,className:"fixed inset-0 transition-opacity"},r.a.createElement("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})),r.a.createElement("div",{className:"relative bg-white rounded-lg px-4 pt-5 pb-2 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},r.a.createElement("div",{className:"hidden sm:block absolute top-0 right-0 pt-4 pr-4"},r.a.createElement("button",{onClick:I,type:"button",className:"text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150","aria-label":"Close"},r.a.createElement("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})))),r.a.createElement("form",{onSubmit:R((function(e){return F.apply(this,arguments)})),className:"w-full py-5"},r.a.createElement("div",{className:"sm:flex sm:items-start"},r.a.createElement("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"},r.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline"},"New Shortlink"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"external_link",className:"sr-only"},"URL"),r.a.createElement("div",{className:"relative rounded-md shadow-sm w-full"},r.a.createElement("input",{ref:q({required:!0}),required:!0,name:"external_link",id:"external_link",type:"text",className:"form-input block w-full sm:text-sm sm:leading-5",placeholder:"https://example.com"})))))),r.a.createElement("div",{className:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},r.a.createElement("span",{className:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},r.a.createElement("button",{type:"submit",className:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Create Shortlink")))))))},C=function(){var e=Object(i.h)(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=(a[0],a[1]),s=Object(n.useState)(null),c=Object(m.a)(s,2),d=c[0],u=c[1],g=Object(k.a)(),b=g.register,h=g.handleSubmit,E=(g.watch,g.errors);function w(){return(w=Object(f.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(null),l(!0),t.prev=2,t.next=5,x.a.post("/auth/login",a,{headers:{"Content-Type":"application/json"}});case 5:n=t.sent,(r=n.data.access_token)&&(window.localStorage.setItem("s-tk",r),e("/urls")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),u(t.t0.response.data.message);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},r.a.createElement("div",{className:"flex justify-center align-center"},r.a.createElement("svg",{width:"50",height:"50",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.7 49C11.7 42.7 16.8 37.6 23.1 37.6H45.5V29.3H23.1C12.2 29.3 3.39999 38.1 3.39999 49C3.39999 59.9 12.2 68.7 23.1 68.7H45.5V60.4H23.1C16.8 60.4 11.7 55.3 11.7 49ZM76.9 29.3H54.5V37.6H76.9C83.2 37.6 88.3 42.7 88.3 49C88.3 55.3 83.2 60.4 76.9 60.4H54.5V68.7H76.9C87.8 68.7 96.6 59.9 96.6 49C96.6 38.1 87.8 29.3 76.9 29.3ZM26.3 49C26.3 51.3 28.2 53.2 30.5 53.2H69.6C71.9 53.2 73.8 51.3 73.8 49C73.8 46.7 71.9 44.8 69.6 44.8H30.5C28.2 44.8 26.3 46.7 26.3 49Z",fill:"black"})))),r.a.createElement("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},r.a.createElement("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},r.a.createElement("form",{onSubmit:h((function(e){return w.apply(this,arguments)})),method:"POST"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username",className:"block text-sm font-medium leading-5 text-gray-700"},"Username"),r.a.createElement("div",{className:"mt-1 rounded-md shadow-sm"},r.a.createElement("input",{ref:b({required:!0}),name:"username",id:"username",type:"text",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"}),E.username&&"Username is required")),r.a.createElement("div",{className:"mt-6"},r.a.createElement("label",{htmlFor:"password",className:"block text-sm font-medium leading-5 text-gray-700"},"Password"),r.a.createElement("div",{className:"mt-1 rounded-md shadow-sm"},r.a.createElement("input",{ref:b({required:!0}),name:"password",id:"password",type:"password",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"}),E.password&&"Password is required")),d&&r.a.createElement("div",{className:"mt-6"},r.a.createElement("p",{className:"text-red-500"},d)),r.a.createElement("div",{className:"mt-6"},r.a.createElement("span",{className:"block w-full rounded-md shadow-sm"},r.a.createElement("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},"Sign in")))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("div",{className:"relative"},r.a.createElement("div",{className:"absolute inset-0 flex items-center"},r.a.createElement("div",{className:"w-full border-t border-gray-300"})),r.a.createElement("div",{className:"relative flex justify-center text-sm leading-5"},r.a.createElement("span",{className:"px-2 bg-white text-gray-500"},"Or"))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("p",{className:"mt-2 text-center text-sm leading-5 text-gray-600 max-w"},r.a.createElement(o.b,{to:"/auth/register",className:"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"},"Register for an account")))))))},O=function(){var e=Object(i.h)(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],s=a[1],c=Object(k.a)({mode:"onChange"}),d=c.register,u=c.handleSubmit,g=c.reset;function x(){return(x=Object(f.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,w("/auth/register",a);case 4:(n=t.sent).data.access_token?(s(!1),window.localStorage.setItem("s-tk",n.data.access_token),e("/urls")):(g(),s(!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},r.a.createElement("div",{className:"flex justify-center align-center"},r.a.createElement("svg",{width:"50",height:"50",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.7 49C11.7 42.7 16.8 37.6 23.1 37.6H45.5V29.3H23.1C12.2 29.3 3.39999 38.1 3.39999 49C3.39999 59.9 12.2 68.7 23.1 68.7H45.5V60.4H23.1C16.8 60.4 11.7 55.3 11.7 49ZM76.9 29.3H54.5V37.6H76.9C83.2 37.6 88.3 42.7 88.3 49C88.3 55.3 83.2 60.4 76.9 60.4H54.5V68.7H76.9C87.8 68.7 96.6 59.9 96.6 49C96.6 38.1 87.8 29.3 76.9 29.3ZM26.3 49C26.3 51.3 28.2 53.2 30.5 53.2H69.6C71.9 53.2 73.8 51.3 73.8 49C73.8 46.7 71.9 44.8 69.6 44.8H30.5C28.2 44.8 26.3 46.7 26.3 49Z",fill:"black"})))),r.a.createElement("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},r.a.createElement("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},r.a.createElement("form",{onSubmit:u((function(e){return x.apply(this,arguments)}))},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username",className:"block text-sm font-medium leading-5 text-gray-700"},"Username"),r.a.createElement("div",{className:"mt-1 rounded-md shadow-sm"},r.a.createElement("input",{ref:d({required:!0}),required:!0,name:"username",id:"username",type:"text",className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"}))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("label",{htmlFor:"password",className:"block text-sm font-medium leading-5 text-gray-700"},"Password"),r.a.createElement("div",{className:"mt-1 rounded-md shadow-sm"},r.a.createElement("input",{ref:d({required:!0}),name:"password",id:"password",type:"password",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"}))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("label",{htmlFor:"confirmation",className:"block text-sm font-medium leading-5 text-gray-700"},"Confirm Password"),r.a.createElement("div",{className:"mt-1 rounded-md shadow-sm"},r.a.createElement("input",{ref:d({required:!0}),name:"confirmation",type:"password",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"}))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("span",{className:"block w-full rounded-md shadow-sm"},r.a.createElement("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},l?"Registering Account":"Register")))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("div",{className:"relative"},r.a.createElement("div",{className:"absolute inset-0 flex items-center"},r.a.createElement("div",{className:"w-full border-t border-gray-300"})),r.a.createElement("div",{className:"relative flex justify-center text-sm leading-5"},r.a.createElement("span",{className:"px-2 bg-white text-gray-500"},"Already have an account?"))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("p",{className:"mt-2 text-center text-sm leading-5 text-gray-600 max-w"},r.a.createElement(o.b,{to:"/auth/login",className:"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"},"Sign In")))))))},S=function(){var e=Object(i.h)();return Object(n.useEffect)((function(){window.localStorage.removeItem("s-tk"),e("/auth/login")}),[]),null},H=function(){var e=Object(i.h)();return Object(n.useEffect)((function(){c()&&e("/urls")}),[]),r.a.createElement(i.a,null)},M=function(){return r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/auth/*",element:r.a.createElement(H,null)},r.a.createElement(i.b,{path:"login",element:r.a.createElement(C,null)}),r.a.createElement(i.b,{path:"logout",element:r.a.createElement(S,null)}),r.a.createElement(i.b,{path:"register",element:r.a.createElement(O,null)})),r.a.createElement(i.b,{path:"/*",element:r.a.createElement(d,null)},r.a.createElement(i.b,{path:"/",element:r.a.createElement(j,null)}),r.a.createElement(i.b,{path:"urls",element:r.a.createElement(j,null)}))))},L=document.getElementById("root");s.a.render(r.a.createElement(M,null),L)}},[[26,1,2]]]);
//# sourceMappingURL=main.9fa697e1.chunk.js.map