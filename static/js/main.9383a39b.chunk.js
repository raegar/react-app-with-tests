(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,n){e.exports=n(49)},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),s=(n(27),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),p=n(19),d=n.n(p),b=(n(28),n(2)),m={HOVERED:"hovered",NORMAL:"normal"},f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._onMouseEnter=n._onMouseEnter.bind(Object(b.a)(Object(b.a)(n))),n._onMouseLeave=n._onMouseLeave.bind(Object(b.a)(Object(b.a)(n))),n.state={class:m.NORMAL},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"_onMouseEnter",value:function(){this.setState({class:m.HOVERED})}},{key:"_onMouseLeave",value:function(){this.setState({class:m.NORMAL})}},{key:"render",value:function(){return r.a.createElement("a",{className:this.state.class,href:this.props.page||"#",onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},this.props.children)}}]),t}(r.a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(b.a)(Object(b.a)(n))),n.state={text:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.setState(this.stateUpdater)}},{key:"stateUpdater",value:function(){return{text:"CLiCKED!"}}},{key:"render",value:function(){return r.a.createElement("button",{onClick:this.handleClick},this.state.text||this.props.text)}}]),t}(r.a.Component),j=n(8),v=n.n(j),E=n(20),k=n(21),w=n.n(k),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},n.handleGet=n.handleGet.bind(Object(b.a)(Object(b.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleGet",value:function(e){this.setState(this.stateUpdater(e))}},{key:"stateUpdater",value:function(e){return{data:e.data}}},{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.handleGet(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("ul",null,this.state.data.map(function(e){return r.a.createElement("li",{key:e.name},e.name)}))}}]),t}(a.Component),g=(n(48),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"React App with Tests"),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),r.a.createElement("br",null),r.a.createElement(f,{page:"http://www.ucp.ac.uk"},"University Centre Peterborough"),r.a.createElement("br",null),r.a.createElement(O,{text:"CLICK ME"}),r.a.createElement("br",null),r.a.createElement(y,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.9383a39b.chunk.js.map