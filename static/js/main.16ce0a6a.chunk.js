(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"first":"Steve","last":"Phillips","role":"IT","email":"sp@comp.com","location":"South"},{"id":2,"first":"Mary","last":"Jenkins","role":"Sales","email":"mj@comp.com","location":"North"},{"id":3,"first":"John","last":"Hamilton","role":"Quality Assurance","email":"jh@comp.com","location":"Remote"},{"id":4,"first":"Zoey","last":"Tran","role":"UX Research","email":"zt@comp.com","location":"North"},{"id":5,"first":"Clay","last":"Valdes","role":"Tech Lead","email":"cv@comp.com","location":"South"},{"id":6,"first":"Aubrey","last":"Fisher","role":"Human Resources","email":"af@comp.com","location":"South"},{"id":7,"first":"Paul","last":"Akers","role":"Sales","email":"pa@comp.com","location":"North"},{"id":8,"first":"Corey","last":"Elms","role":"Developer","email":"ce@comp.com","location":"Remote"},{"id":9,"first":"Haley","last":"Jones","role":"Developer","email":"hj@comp.com","location":"South"},{"id":10,"first":"Adrian","last":"Ramos","role":"Marketing","email":"ar@comp.com","location":"North"},{"id":11,"first":"Nancy","last":"Walker","role":"Design","email":"nw@comp.com","location":"North"},{"id":12,"first":"Quincey","last":"Smith","role":"Manager","email":"qs@comp.com","location":"South"},{"id":13,"first":"Matt","last":"Yoo","role":"Office Administrator","email":"my@comp.com","location":"South"}]')},13:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),r=a(3),n=a.n(r),c=a(4),s=a(5),i=a(7),m=a(6),u=a(1),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var l=arguments.length,o=new Array(l),r=0;r<l;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={employees:u,search:"",sortBy:"last"},e.handleInputChange=function(t){var a=t.target.value;e.setState({search:a})},e.sortField=function(e){var t;return e.sort((t=this.state.sortBy,function(e,a){return e[t]>a[t]?1:-1}))},e.toggleSort=function(t){console.log(t.target.value),e.setState({sortBy:t.target.value}),e.setState({employees:e.sortField(u)})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.employees.filter((function(t){return-1!==t.last.toLowerCase().indexOf(e.state.search.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"jumbotron mt-4"},o.a.createElement("h1",{className:"display-3 text-center"},"Employee Tracker"),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("div",{className:"text-center"},o.a.createElement("p",{className:"lead"},"Double-click on a column header to sort by that column, or search for an employee here!"),o.a.createElement("div",{className:"container justify-contents-center my-4"},o.a.createElement("form",null,o.a.createElement("input",{className:"text-center",type:"text",value:this.state.search,onChange:this.handleInputChange,placeholder:"Last Name"})))),o.a.createElement("table",{className:"table table-bordered table-secondary table-hover"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},o.a.createElement("button",{type:"button",className:"btn btn-primary",value:"first",onClick:this.toggleSort},"First Name")),o.a.createElement("th",{scope:"col"},o.a.createElement("button",{type:"button",className:"btn btn-primary",value:"last",onClick:this.toggleSort},"Last Name")),o.a.createElement("th",{scope:"col"},o.a.createElement("button",{type:"button",className:"btn btn-primary",value:"role",onClick:this.toggleSort},"Role")),o.a.createElement("th",{scope:"col"},o.a.createElement("button",{type:"button",className:"btn btn-primary",value:"email",onClick:this.toggleSort},"Email")),o.a.createElement("th",{scope:"col"},o.a.createElement("button",{type:"button",className:"btn btn-primary",value:"location",onClick:this.toggleSort},"Location")))),o.a.createElement("tbody",{className:""},t.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.first),o.a.createElement("td",null,e.last),o.a.createElement("td",null,e.role),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.location))})))))))}}]),a}(l.Component);var p=function(){return o.a.createElement(h,null)};n.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.16ce0a6a.chunk.js.map