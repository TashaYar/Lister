(this.webpackJsonplister=this.webpackJsonplister||[]).push([[0],{337:function(e,t,a){e.exports=a(686)},342:function(e,t,a){},686:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(0),l=a.n(r),c=a(62),s=a.n(c),i=(a(342),a(12)),o=a(7),m=a(26),u=a(27),d=a(28),h=a(29),f=a(10),E=a(687),p=a(688),g=a(689),b=a(690),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?l.a.createElement(o.a,{to:"/"}):l.a.createElement("div",{className:"container mt-5 col-md-6 offset-3  bg-white"},l.a.createElement(E.a,{onSubmit:this.handleSubmit,className:"bg-white mt-0 mx-0"},l.a.createElement("h5",{className:"text-grey text-center "}," ",l.a.createElement("u",null,"Sign In")),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"email"},"Email"),l.a.createElement(g.a,{type:"email",id:"email",onChange:this.handleChange,placeholder:"someone@example.com"})),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"password"},"Password"),l.a.createElement(g.a,{type:"password",id:"password",onChange:this.handleChange,placeholder:"Password"})),l.a.createElement("div",{className:"mt-2 offset-5"},l.a.createElement(b.a,{className:"btn btn-rounded lighten-1  z-depth-0"},"Login"),l.a.createElement("div",{className:"red-text center"},t||""))))}}]),a}(r.Component),v=Object(f.b)((function(e){return{authError:e.auth.authErr,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(N),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authErr;return t.uid?l.a.createElement(o.a,{to:"/"}):l.a.createElement("div",{className:"container"},l.a.createElement(E.a,{onSubmit:this.handleSubmit,className:"bg-white"},l.a.createElement("h4",{className:"text-center"},l.a.createElement("u",null,"Sign Up")),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"email"},"Email"),l.a.createElement(g.a,{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"password"},"Password"),l.a.createElement(g.a,{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"firstName"},"John"),l.a.createElement(g.a,{type:"text",id:"firstName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"lastName"},"Doe"),l.a.createElement(g.a,{type:"text",id:"lastName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement(b.a,{className:"button offset-5 mt-1"},"SignUp")),l.a.createElement("div",{className:"red-text center"},a?l.a.createElement("p",null,a):null)))}}]),a}(r.Component),S=Object(f.b)((function(e){return{auth:e.firebase.auth,authErr:e.auth.authErr}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),s=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstName.toString(),lastName:e.lastName.toString(),initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(O),j=a(696),y=a(85),C=a.n(y),w=a(691),F=a(692),I=a(693),R=a(694),x=a(695),L=function(e){var t=e.list;return t.isDone?l.a.createElement(w.a,{className:"card bg-success project-summary",id:"contextMenuId"},l.a.createElement(F.a,{className:"card-body text-light"},l.a.createElement(I.a,{className:"card-title"},t.title),l.a.createElement(R.a,null,"By ",t.authorFirstName," ",t.authorLastName),l.a.createElement(x.a,{className:"text-secondary"},"--",C()(t.createdAt.toDate()).calendar()))):l.a.createElement(w.a,{className:"card bg-info project-summary",id:"contextMenuId"},l.a.createElement(F.a,{className:"card-body text-light"},l.a.createElement(I.a,{className:"card-title"},t.title),l.a.createElement(R.a,null,"By ",t.authorFirstName," ",t.authorLastName),l.a.createElement(x.a,{className:"text-secondary"},"--",C()(t.createdAt.toDate()).calendar())))},k=Object(f.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.lists,a=e.auth;return l.a.createElement(j.a,null,t&&t.filter((function(e){return e.authorId===a.uid})).map((function(e){return l.a.createElement(i.b,{to:"/list/"+e.id,key:e.id}," ",l.a.createElement("div",{className:"mx-auto mt-1 w-75 h-50"},l.a.createElement(L,{list:e})))})))})),U=a(22),A=a(21),G=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.lists;return e.auth.uid?l.a.createElement("div",{className:"dashboard container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-sm-12 col-md-12"},l.a.createElement(k,{lists:t})," "))):l.a.createElement(o.a,{to:"/signin"})}}]),a}(r.Component),_=Object(A.d)(Object(f.b)((function(e){return{lists:e.firestore.ordered.lists,auth:e.firebase.auth}})),Object(U.firestoreConnect)([{collection:"lists",orderBy:["createdAt","desc"]}]))(G),P=a(125),T=a(697),D=Object(f.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(t){e({type:"SIGNOUT_ERROR",err:t})}))}))}}}))((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,null,l.a.createElement(i.c,{className:"nav-link",to:"/"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(T.a,null,l.a.createElement(i.c,{className:"nav-link",to:"/create"},l.a.createElement("span",{className:"fa fa-plus-square fa-lg"})," New List")),l.a.createElement(T.a,null,l.a.createElement(i.c,{className:"nav-link",to:"/",onClick:e.signOut},l.a.createElement("span",{class:"fa fa-sign-out fa-lg "})," ","Log Out")),l.a.createElement(T.a,null,l.a.createElement(i.c,Object(n.a)({className:"nav-link",to:"/"},"className","btn btn-primary rounded-circle float-right"),e.profile.initials)))})),B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,null,l.a.createElement(i.c,{className:"nav-link",to:"/signup"},l.a.createElement("i",{class:"fa fa-sign-in fa-lg"})," Signup")),l.a.createElement(T.a,null,l.a.createElement(i.c,{className:"nav-link",to:"/signin"},l.a.createElement("i",{class:"fa fa-sign-in fa-lg"})," Login")))},M=a(698),W=a(699),z=a(700),J=a(702),X=a(701),q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isOpen:!1},n.toggleNav=n.toggleNav.bind(Object(P.a)(n)),n}return Object(u.a)(a,[{key:"toggleNav",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(W.a,{onClick:this.toggleNav}),l.a.createElement(z.a,{href:"/",className:"mx-auto"}," ",l.a.createElement("img",{src:"sa",href:"/",alt:"Lister"})),l.a.createElement(J.a,{navbar:!0,isOpen:this.state.isOpen,className:"col col-md-6 float-right"},l.a.createElement(X.a,{navbar:!0},Object(U.isLoaded)(this.props.auth)&&this.props.auth.uid?l.a.createElement(D,{profile:this.props.profile}):l.a.createElement(B,null))))))}}]),a}(r.Component),H=Object(f.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))(q),K=a(38),Z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={title:"",message:"",isDone:!1},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createList(e.state),e.props.history.push("/")},e}return Object(u.a)(a,[{key:"render",value:function(){return this.props.auth.uid?l.a.createElement("div",{className:"container "},l.a.createElement(E.a,{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("h4",{className:"text-secondary text-center"},"New List"),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"title"},"Title"),l.a.createElement(g.a,{type:"text",id:"title",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field col-md-6 offset-3"},l.a.createElement(p.a,{htmlFor:"message"},"Message"),l.a.createElement(g.a,{type:"textarea",id:"message",className:"textarea",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement(b.a,{className:"btn offset-5 mt-2"},"Create List")))):l.a.createElement(o.a,{to:"signin"})}}]),a}(r.Component),$=Object(f.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createList:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),l=a().firebase.profile,c=a().firebase.auth.uid;r.collection("lists").add(Object(K.a)({},e,{authorFirstName:l.firstName,authorLastName:l.lastName,authorId:c,createdAt:new Date})).then((function(){t({type:"CREATE_LIST",list:e})})).catch((function(e){t({type:"CREATE_LIST_ERROR",err:e})}))}}(t))}}}))(Z),Q=Object(A.d)(Object(f.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.lists;return{list:n?n[a]:null,auth:e.firebase.auth}})),Object(U.firestoreConnect)([{collection:"lists"}]))((function(e){var t=e.list;return e.auth.uid?t?l.a.createElement(w.a,{className:"w-75 mx-auto bg-info text-light "},l.a.createElement(F.a,{className:"card-body"},l.a.createElement(I.a,{className:"text-center"}," ",l.a.createElement("h4",null,l.a.createElement("b",null,t.title))),l.a.createElement(R.a,null,t.message)),l.a.createElement(F.a,null,l.a.createElement(x.a,null,"Posted by ",t.authorFirstName),l.a.createElement(x.a,null,C()(t.createdAt.toDate()).calendar()))):l.a.createElement("div",{className:"center grey-text"},"Loading List..."):l.a.createElement(o.a,{to:"/signin"})}));var V=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(H,null),l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/",component:_}),l.a.createElement(o.b,{path:"/list/:id",component:Q}),l.a.createElement(o.b,{path:"/signin",component:v}),l.a.createElement(o.b,{path:"/signup",component:S}),l.a.createElement(o.b,{path:"/create",component:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y={authErr:null},ee={list:[{id:"1",title:"Get Milk",message:"Get 2% milk from market"},{id:"2",title:"Go to Park",message:"Go to park to play with children"},{id:"3",title:"Fruits",message:"Buy Apple and Oranges"}]},te=a(63),ae=Object(A.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log(t.err+"Login error"),Object(K.a)({},e,{authErr:"Login Failed!"});case"LOGIN_SUCCESS":return console.log("Success"),Object(K.a)({},e,{authErr:null});case"SIGNOUT_SUCCESS":return console.log("SignOut Success"),e;case"SIGNOUT_ERROR":return console.log("Signout failed!"),Object(K.a)({},e,{authErr:t.err});case"SIGNUP_SUCCESS":return console.log("SignUp Success"),Object(K.a)({},e,{authErr:null});case"SIGNUP_ERROR":return console.log("SIgnUp Error"),Object(K.a)({},e,{authErr:t.err.message});default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_LIST":return console.log("created list ",t.list),e;case"CREATE_LIST_ERROR":return console.log(t.err),e;default:return e}},firestore:te.firestoreReducer,firebase:U.firebaseReducer}),ne=a(336),re=a(49),le=a.n(re);a(679),a(682);le.a.initializeApp({apiKey:"AIzaSyDxZWADwqMmXAX0FXO55LlM4hF92BnKoUs",authDomain:"lister-49423.firebaseapp.com",databaseURL:"https://lister-49423.firebaseio.com",projectId:"lister-49423",storageBucket:"lister-49423.appspot.com",messagingSenderId:"1069645442610",appId:"1:1069645442610:web:1a343a68a3376c92d4d62b",measurementId:"G-91MTGPLST6"}),le.a.firestore().settings({timestampsInSnapshots:!0});var ce,se=le.a,ie=(a(684),a(685),Object(A.e)(ae,Object(A.d)(Object(A.a)(ne.a.withExtraArgument({getFirebase:U.getFirebase,getFirestore:te.getFirestore})),Object(te.reduxFirestore)(se,le.a)))),oe=(ce={firebase:le.a,config:se},Object(n.a)(ce,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(ce,"dispatch",ie.dispatch),Object(n.a)(ce,"createFirestoreInstance",te.createFirestoreInstance),ce);function me(e){var t=e.children,a=Object(f.c)((function(e){return e.firebase.auth}));return Object(U.isLoaded)(a)?t:l.a.createElement("div",{className:"center"}," ",l.a.createElement("p",null,"Loading List..."))}s.a.render(l.a.createElement(f.a,{store:ie},l.a.createElement(U.ReactReduxFirebaseProvider,oe,l.a.createElement(me,null,l.a.createElement(V,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[337,1,2]]]);
//# sourceMappingURL=main.d9192e96.chunk.js.map