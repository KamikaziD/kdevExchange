(this.webpackJsonpexchange_rate=this.webpackJsonpexchange_rate||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(3),i=n.n(s),h=(n(13),n(4)),d=n(5),o=n(7),l=n(6);n(14),n(15);var u=function(e){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("img",{alt:"logo",src:"https://freepngimg.com/thumb/money/63483-exchange-money-symbol-dollar-currency-rate.png?80x80",width:"80",height:"80"}),Object(c.jsxs)("h3",{className:"text",children:[e.excode," 1.00 = ZAR ",e.rate]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:"LAST UPDATED:"}),Object(c.jsxs)("p",{children:[" ",e.update," "]}),Object(c.jsx)("h5",{children:"NEXT UPDATE:"}),Object(c.jsxs)("p",{children:[" ",e.next," "]}),Object(c.jsxs)("p",{children:[" ",e.excode," to ZAR"]})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("h1",{input:"rand",children:["ZAR ",(t=e.rate,n=e.exValue,t*n).toFixed(2)]})})]});var t,n},j=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{className:"search",type:"number",defaultValue:"1",placeholder:t,onChange:n})}),x=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchfield:t.target.value})},e.state={euro:{time_last_update_utc:"LOADING",time_next_update_utc:"LOADING",base_code:"EUR",conversion_rates:{ZAR:"----"}},searchfield:"1"},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://v6.exchangerate-api.com/v6/07eecea1d952623a35907a42/latest/EUR").then((function(e){return e.json()})).then((function(t){return e.setState({euro:t})}))}},{key:"render",value:function(){var e=this.state,t=e.euro,n=e.searchfield;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{className:"header",children:"KDev Exchange Rates"}),Object(c.jsx)(j,{placeholder:"1",handleChange:this.handleChange}),Object(c.jsx)("div",{className:"body",children:Object(c.jsx)(u,{rate:t.conversion_rates.ZAR,update:t.time_last_update_utc,next:t.time_next_update_utc,excode:t.base_code,exValue:n})})]})}}]),n}(a.Component);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.1206d7dd.chunk.js.map