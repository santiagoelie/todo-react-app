(this["webpackJsonpmy-task-management"]=this["webpackJsonpmy-task-management"]||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(26),o=t(28),m=t(66),s=t(3),u=t(142),p=t(15),d=t(164),f=t(158),h=t(159),E=t(160),v=t(144),g=t(38),b=t(161),y=t(151),C=t(76),k=t.n(C),S=t(77),O=t.n(S),j=t(78),x=t.n(j),w=t(146),N=t(150),A=t(148),B=t(80),T=t.n(B),D=t(79),W=t.n(D),G=t(81),P=t.n(G),L=t(67),R=t.n(L),q=t(52),H=t(147),I=t(165),J=t(149),M=t(162),V=t(152),Y=t(82),F=t(51),K=t(71),X=t.n(K),Q=t(72),U=t.n(Q),$=Object(u.a)({greenAvatar:{margin:10,color:"#fff",backgroundColor:F.a[500]}});function _(e){var a=e.todo,t=e.index,n=e.completeTodo,l=e.deleteTodo,i=$();return r.a.createElement(v.a,null,r.a.createElement(w.a,{button:!0,onClick:function(){return n(t)}},r.a.createElement(H.a,null,r.a.createElement(I.a,{className:i.greenAvatar},r.a.createElement(X.a,null))),r.a.createElement(A.a,{primary:a.text,style:{textDecoration:a.isCompleted?"line-through":"none"}}),r.a.createElement(J.a,null,r.a.createElement(N.a,null,r.a.createElement(y.a,{edge:"end","aria-label":"delete",onClick:function(){return l(t)}},r.a.createElement(U.a,null))))))}function z(e){var a=e.addTodo,t=Object(n.useState)(""),l=Object(o.a)(t,2),i=l[0],c=l[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&(a(i),c(""))}},r.a.createElement(M.a,{id:"standard-bare",margin:"normal",value:i,placeholder:"Add Todo...",onChange:function(e){return c(e.target.value)}}))}function Z(){var e=Object(n.useState)([{text:"Practice JavaScript",isCompleted:!1},{text:"Update Resume",isCompleted:!1},{text:"Go Kyaking",isCompleted:!1}]),a=Object(o.a)(e,2),t=a[0],l=a[1],i=function(e){var a=Object(q.a)(t);a[e].isCompleted=!t[e].isCompleted,l(a)},c=function(e){var a=Object(q.a)(t);a.splice(e,1),l(a)};return r.a.createElement(V.a,{maxWidth:"md"},r.a.createElement(z,{addTodo:function(e){var a=[{text:e}].concat(Object(q.a)(t));l(a)}}),r.a.createElement(Y.a,null,t.map((function(e,a){return r.a.createElement(_,{key:a,index:a,todo:e,completeTodo:i,deleteTodo:c})}))))}var ee=t(153),ae=t(154),te=t(157),ne=t(156),re=t(155),le=t(18),ie=t(19),ce=t(21),oe=t(20),me=function(e){Object(ce.a)(t,e);var a=Object(oe.a)(t);function t(){var e;Object(le.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).continue=function(a){a.preventDefault(),e.props.nextStep()},e}return Object(ie.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange,n=a.firstName.length>0&&a.lastName.length>0&&a.email.length>0,l=r.a.createElement(ee.a,{color:"primary",label:"Continue",onClick:this.continue},"Continue");return r.a.createElement(v.a,null,r.a.createElement(A.a,{primary:"Please enter your contact information and continue to leave a comment....."}),r.a.createElement(w.a,null,r.a.createElement(M.a,{required:!0,margin:"dense",id:"name",label:"First Name",type:"first name",fullWidth:!0,onChange:t("firstName"),defaultValue:a.firstName})),r.a.createElement(w.a,null,r.a.createElement(M.a,{required:!0,margin:"dense",id:"name",label:"Last Name",type:"last name",fullWidth:!0,onChange:t("lastName"),defaultValue:a.lastName})),r.a.createElement(w.a,null,r.a.createElement(M.a,{required:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,onChange:t("email"),defaultValue:a.email})),n?l:r.a.createElement(ee.a,{disabled:!0},"Continue"))}}]),t}(n.Component),se=function(e){Object(ce.a)(t,e);var a=Object(oe.a)(t);function t(){var e;Object(le.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(ie.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange,n=a.comment.length>0,l=r.a.createElement(ee.a,{color:"primary",label:"Continue",onClick:this.continue},"Continue");return r.a.createElement(v.a,null,r.a.createElement(A.a,{primary:"Please enter a comment and continue to verify your information..."}),r.a.createElement(w.a,null,r.a.createElement(M.a,{multiline:!0,fullWidth:!0,id:"outlined-multiline-flexible",label:"Enter a comment",rowsMax:"4",margin:"normal",variant:"outlined",onChange:t("comment"),defaultValue:a.comment})),n?l:r.a.createElement(ee.a,{disabled:!0},"Continue"),r.a.createElement(ee.a,{label:"Back",color:"primary",onClick:this.back},"Back"))}}]),t}(n.Component),ue=function(e){Object(ce.a)(t,e);var a=Object(oe.a)(t);function t(){var e;Object(le.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(ie.a)(t,[{key:"render",value:function(){var e=this.props.values,a=e.firstName,t=e.lastName,n=e.email,l=e.comment;return r.a.createElement(v.a,null,r.a.createElement(A.a,{primary:"Please verify your contact information before clicking confirm..."}),r.a.createElement("hr",null),r.a.createElement(A.a,{secondary:"Name:  "}),r.a.createElement(A.a,{primary:a+" "+t}),r.a.createElement(A.a,{secondary:"Email:  "}),r.a.createElement(A.a,{primary:n}),r.a.createElement(A.a,{secondary:"Comment:  "}),r.a.createElement(A.a,{primary:l}),r.a.createElement("hr",null),r.a.createElement(ee.a,{label:"Confirm",color:"primary",onClick:this.continue},"Confirm"),r.a.createElement(ee.a,{label:"Back",color:"primary",onClick:this.back},"Back"))}}]),t}(n.Component),pe=function(e){Object(ce.a)(t,e);var a=Object(oe.a)(t);function t(){var e;Object(le.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).continue=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(ie.a)(t,[{key:"render",value:function(){var e=this.props.values,a=e.firstName,t=e.lastName,n=e.email;return r.a.createElement("div",null,r.a.createElement(g.a,{variant:"h5",align:"center"},"Thank You ",a+" "+t," For Your Submission!"),r.a.createElement("br",null),r.a.createElement(g.a,{align:"center"},"A confirmation email will be sent to ",n))}}]),t}(n.Component),de=function(e){Object(ce.a)(t,e);var a=Object(oe.a)(t);function t(){var e;Object(le.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={step:1,firstName:"",lastName:"",email:"",comment:""},e.nextStep=function(){var a=e.state.step;e.setState({step:a+1})},e.prevStep=function(){var a=e.state.step;e.setState({step:a-1})},e.handleChange=function(a){return function(t){e.setState(Object(c.a)({},a,t.target.value))}},e}return Object(ie.a)(t,[{key:"render",value:function(){var e=this.state.step,a=this.state,t={firstName:a.firstName,lastName:a.lastName,email:a.email,comment:a.comment};switch(e){case 1:return r.a.createElement(me,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return r.a.createElement(se,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:t});case 3:return r.a.createElement(ue,{nextStep:this.nextStep,prevStep:this.prevStep,values:t});case 4:return r.a.createElement(pe,{values:t})}}}]),t}(n.Component);function fe(){var e=r.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1];function l(){n(!1)}return r.a.createElement("div",null,r.a.createElement(ee.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Contact"),r.a.createElement(ae.a,{open:t,onClose:l,"aria-labelledby":"form-dialog-title"},r.a.createElement(re.a,{id:"form-dialog-title"},"Contact Information"),r.a.createElement(ne.a,null,r.a.createElement(de,null)),r.a.createElement(te.a,null,r.a.createElement(ee.a,{onClick:l,color:"primary"},"Close"))))}t(65);var he=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(320,"px)"),marginLeft:320,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:320,flexShrink:0},drawerPaper:{width:320},drawerHeader:Object(m.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-320},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function Ee(){var e=he(),a=Object(p.a)(),t=r.a.useState(!1),n=Object(o.a)(t,2),l=n[0],i=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,null),r.a.createElement(h.a,{position:"fixed",className:Object(s.a)(e.appBar,Object(c.a)({},e.appBarShift,l))},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(s.a)(e.menuButton,l&&e.hide)},r.a.createElement(k.a,null)),r.a.createElement(g.a,{variant:"h6",noWrap:!0},"Todo List App"))),r.a.createElement(d.a,{className:e.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(y.a,{onClick:function(){i(!1)}},"ltr"===a.direction?r.a.createElement(O.a,null):r.a.createElement(x.a,null))),r.a.createElement(b.a,null),r.a.createElement(v.a,null,r.a.createElement(w.a,{button:!0,component:"a",href:"https://github.com/santiagoelie",target:"blank"},r.a.createElement(N.a,null,r.a.createElement(W.a,null)),r.a.createElement(A.a,{primary:"GitHub"})),r.a.createElement(w.a,{button:!0,component:"a",href:"https://codesandbox.io/s/react-todo-list-use-state-bewkb",target:"blank"},r.a.createElement(N.a,null,r.a.createElement(T.a,null)),r.a.createElement(A.a,{primary:"Code Sandbox"})),r.a.createElement(w.a,{button:!0,component:"a",href:"https://sites.google.com/d/1emchmyj5hQM9X4GqTSSMG4RimlXKk79c/p/1SOEPR_DJApoTEkYItdCE7hAMxRA-iwGl/edit",target:"blank"},r.a.createElement(N.a,null,r.a.createElement(P.a,null)),r.a.createElement(A.a,{primary:"Google Sites"})),r.a.createElement(b.a,null),r.a.createElement(w.a,null,r.a.createElement("img",{src:R.a,className:"App-logo",alt:"logo"})),r.a.createElement(b.a,null),r.a.createElement(w.a,null,r.a.createElement(fe,null)))),r.a.createElement("main",{className:Object(s.a)(e.content,Object(c.a)({},e.contentShift,l))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(Z,null)))}function ve(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ee,null))}var ge=document.getElementById("root");i.a.render(r.a.createElement(ve,null),ge),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,a,t){},67:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},92:function(e,a,t){e.exports=t(101)}},[[92,1,2]]]);
//# sourceMappingURL=main.52f43075.chunk.js.map