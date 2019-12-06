(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),o=a.n(r),s=a(5),c=a(6),i=a(8),m=a(7),u=a(9),d=a(11),p=a(15),h=a(3),g=a.n(h);g.a.initializeApp({apiKey:"AIzaSyAvHWpzDxlXLWVjmtfNM-ebnVyKUYW-h5U",authDomain:"saturn-d573e.firebaseapp.com",databaseURL:"https://saturn-d573e.firebaseio.com",projectId:"saturn-d573e",storageBucket:"saturn-d573e.appspot.com",messagingSenderId:"281989502039",appId:"1:281989502039:web:9dde5db355c02fd14aff12",measurementId:"G-W8S9N3VRV1"});var f=g.a.firestore();g.a.analytics();var b=f,E=(g.a.storage(),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleRegister=function(){a.state.password!==a.state.cpassword?a.setState({error:"Your passwords did not match."}):a.state.username.length>15?a.setState({error:"Your username can not be longer then 15 characters."}):null===a.state.username.match("^[A-Za-z0-9]+$")?a.setState({error:"Your username can only contain letters and numbers."}):(a.setState({proceed:!1}),g.a.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).catch((function(e){})).then((function(){g.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).catch((function(e){}))})).then((function(){b.collection("users").doc(a.state.username).set({new_user:!0,email:a.state.email,forums:0,profile_picture:"default-profile.png",bio:"This is a default bio.",custom_name:a.state.username}).then((function(e){g.a.auth().onAuthStateChanged((function(e){e&&e.updateProfile({photoURL:"images/default-profile.png",displayName:a.state.username}).then((function(){a.setState({proceed:!0})})).catch((function(e){a.setState({error:e})}))}))})).catch((function(e){alert("An error has occured. Please try again later."),console.error("Error adding document: ",e)}))})).catch((function(e){a.setState({error:e.message}),console.log(e.code,e.message)})))},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.handleCPassword=function(e){a.setState({cpassword:e.target.value})},a.handleUsername=function(e){a.setState({username:e.target.value})},a.state={error:"",email:"",password:"",cpassword:"",username:"",proceed:null,loggedIn:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.auth().onAuthStateChanged((function(t){t?e.setState({loggedIn:!0}):e.setState({loggedIn:!1})}))}},{key:"redAlert",value:function(){return""!==this.state.error?l.a.createElement("div",{className:"alert alert-dismissible alert-danger"},l.a.createElement("strong",null,"Oh snap!")," ",this.state.error):l.a.createElement("p",null)}},{key:"render",value:function(){var e=this;return!1===this.state.loggedIn?l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm"},l.a.createElement("br",null),"  ",l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",null,"Make a new account. "),this.redAlert(),l.a.createElement("label",{className:"col-form-label",htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",onChange:this.handleUsername,className:"form-control",value:this.state.username,placeholder:"CoolGuy25",id:"username"}),l.a.createElement("label",{className:"col-form-label",htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",onChange:this.handleEmail,className:"form-control",placeholder:"JohnDoe@gmail.com",id:"email"}),l.a.createElement("label",{className:"col-form-label",htmlFor:"pass"},"Password"),l.a.createElement("input",{type:"password",onChange:this.handlePassword,className:"form-control",placeholder:"Password",id:"pass"}),l.a.createElement("label",{className:"col-form-label",htmlFor:"cpass"},"Confirm Password"),l.a.createElement("input",{type:"password",onChange:this.handleCPassword,className:"form-control",placeholder:"Confirm Password",id:"cpass"})," ",l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.handleRegister()}},"Next")," ",l.a.createElement("br",null))))):!0===this.state.loggedIn&&!0===this.state.proceed?l.a.createElement(p.a,{to:{pathname:"/dashboard",state:{from:"register"}}}):!0===this.state.loggedIn&&null===this.state.proceed?l.a.createElement(p.a,{to:"/dashboard"}):null}}]),t}(l.a.Component)),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleLogin=function(){console.log("handling login"),g.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).catch((function(e){a.setState({error:e.message}),console.log(e.code,e.message)})).then((function(e){g.a.auth().onAuthStateChanged((function(e){e?a.setState({loggedIn:!0}):a.setState({loggedIn:!1})}))}))},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.state={email:"",password:"",error:"",loggedIn:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.auth().onAuthStateChanged((function(t){t?e.setState({loggedIn:!0}):e.setState({loggedIn:!1})}))}},{key:"redAlert",value:function(){return""!==this.state.error?l.a.createElement("div",{className:"alert alert-dismissible alert-danger"},l.a.createElement("strong",null,"Oh snap!")," ",this.state.error):l.a.createElement("p",null)}},{key:"render",value:function(){var e=this;return!0===this.state.loggedIn?l.a.createElement(p.a,{to:"/dashboard"}):!1===this.state.loggedIn?l.a.createElement("div",null,l.a.createElement("div",{className:"row login"},l.a.createElement("div",{className:"col-md-7 login-splash"}),l.a.createElement("div",{className:"col-md-4 login-holder"},l.a.createElement("div",{class:"card card-center text-white border-primary"},l.a.createElement("div",{class:"card-header text-center"},"Login"),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"form-group"},this.redAlert(),l.a.createElement("label",{class:"col-form-label",for:"inputDefault"},"Email"),l.a.createElement("input",{type:"text",onChange:this.handleEmail,class:"form-control",placeholder:"Email",id:"inputDefault"}),l.a.createElement("label",{class:"col-form-label",for:"inputDefault"},"Password"),l.a.createElement("input",{type:"password",onChange:this.handlePassword,class:"form-control",placeholder:"Password",id:"inputDefault"})," ",l.a.createElement("br",null),l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){e.handleLogin()}},"Login")," \xa0"))),l.a.createElement("div",{className:"text-center"},l.a.createElement("small",null,"Don't have an account? ",l.a.createElement("a",{href:"/register"},l.a.createElement("b",null,"Register"))))))):l.a.createElement("div",null,l.a.createElement("h1",null,"There was an error"))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.props.location.state&&"register"===a.props.location.state.from?a.setState({reload:!0}):(g.a.auth().onAuthStateChanged((function(e){e?(a.setState({loggedIn:!0}),a.setState({user:g.a.auth().currentUser}),a.updateUserData()):(a.setState({loggedIn:!1}),a.setState({loading:!1}))})),b.collection("popular").get().then((function(e){a.setState({popularData:e.docs})})))},a.updateUserData=function(){b.collection("users").doc(a.state.user.displayName).get().then((function(e){e.exists?(a.setState({userData:e.data()}),a.setState({loading:!1})):alert("Error getting user data please reload.")}))},a.hidePopup=function(){b.collection("users").doc(a.state.user.displayName).update({new_user:!1}).then((function(){a.updateUserData()})).catch((function(e){alert(e)}))},a.state={loggedIn:null,loading:!0,popularData:[],user:{},userData:{},reload:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.state.reload)return window.location.reload(),l.a.createElement(p.a,{to:"/"});var t=this.state.popularData.map((function(e,t){return l.a.createElement("a",{key:t,className:"list-group-item list-group-item-action"},e.id)}));return!0===this.state.loading?null:!0===this.state.loggedIn?l.a.createElement("div",null,function(){if(e.state.userData.new_user)return l.a.createElement("div",{className:"popup-holder"},l.a.createElement("div",{className:"jumbotron dashboard-newuser-popup text-center"},l.a.createElement("h3",null,"Welcome to Saturn!"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col dashboard-newuser-popup-selection"},l.a.createElement("img",{src:"images/create-forum.png",height:"100px",alt:"Create Forum"}),l.a.createElement("h5",null,"Create a forum!"),l.a.createElement("hr",null),l.a.createElement("p",null,"\xa0 Create and lead your own custom forum! Invite your friends and grow your own community. ")),l.a.createElement("div",{className:"col dashboard-newuser-popup-selection"},l.a.createElement("img",{src:"images/join-forum.png",height:"100px",alt:"Join Forum"}),l.a.createElement("h5",null,"Find a forum!"),l.a.createElement("hr",null),l.a.createElement("p",null,"Explore all the forums Saturn has to offer. Check out the forums we have recommended for you!"))),l.a.createElement("button",{onClick:e.hidePopup},"Don't show me this.")))}(),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col dashboard-mainboard"},l.a.createElement("div",{className:"jumbotron div-center"},"test ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," test"),l.a.createElement("div",{className:"jumbotron div-center"},"test ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," test"),l.a.createElement("div",{className:"jumbotron div-center"},"test ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," test"),l.a.createElement("div",{className:"jumbotron div-center"},"test ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," test"),l.a.createElement("div",{className:"jumbotron div-center"},"test ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)," test")),l.a.createElement("div",{className:"col-3 dashboard-right-sidebar-spacer"}),l.a.createElement("div",{className:"col-sm dashboard-right-sidebar"},l.a.createElement("div",{className:"list-group mobile-card div-center"},l.a.createElement("a",{className:"list-group-item list-group-item-action text-center disabled"},l.a.createElement("b",null,"Popular Forums:")),t),l.a.createElement("br",null),l.a.createElement("div",{className:"list-group mobile-card div-center"},l.a.createElement("a",{className:"list-group-item list-group-item-action text-center disabled"},l.a.createElement("b",null,"Forums you follow:")),l.a.createElement("a",{className:"list-group-item list-group-item-action"},"Money Insider"),l.a.createElement("a",{className:"list-group-item list-group-item-action"},"Fake news"),l.a.createElement("a",{className:"list-group-item list-group-item-action"},"Home Imporovement"),l.a.createElement("a",{className:"list-group-item list-group-item-action"},"Memes"))))):!1===this.state.loggedIn?l.a.createElement(p.a,{to:"/"}):null}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e=g.a.storage().ref();b.collection("users").doc(a.props.data).get().then((function(e){a.setState({userData:e.data()})})).then((function(t){e.child("profile-pic/"+a.state.userData.profile_picture).getDownloadURL().then((function(e){a.setState({profilePic:e})}))})).then((function(e){a.setState({loading:!1})})).catch((function(e){a.setState({redirect:!0})}))},a.state={userData:{},profilePic:"",loading:!0,redirect:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return!0===this.state.redirect?l.a.createElement(p.a,{to:"/404"}):!1===this.state.loading?l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row profile-padding"},l.a.createElement("div",{className:"col-2 text-center profile-picture-holder"},l.a.createElement("img",{src:this.state.profilePic,className:"profile-profile-picture",alt:"Profile Pic"}),l.a.createElement("p",null,this.state.userData.custom_name)),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"jumbotron profile-holder"},l.a.createElement("h3",null,this.state.userData.custom_name),l.a.createElement("hr",null),l.a.createElement("p",null,this.state.userData.bio),l.a.createElement("hr",null)))))):null}}]),t}(l.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){g.a.auth().onAuthStateChanged((function(e){e?(a.setState({loggedIn:!0}),a.setState({user:g.a.auth().currentUser}),a.updateUserData(),a.setState({username:a.state.user.displayName})):(a.setState({loggedIn:!1}),a.setState({loading:!1}))}))},a.updateUserData=function(){b.collection("users").doc(a.state.user.displayName).get().then((function(e){a.setState({userData:e.data()}),a.setState({bio:a.state.userData.bio}),a.setState({email:a.state.userData.email})})).then((function(e){g.a.storage().ref().child("profile-pic/"+a.state.userData.profile_picture).getDownloadURL().then((function(e){a.setState({profilePic:e})})).catch((function(e){alert(e.message)}))})).then((function(e){a.setState({loading:!1})})).catch((function(e){alert(e.message)}))},a.handleEdit=function(){a.setState({disabled:!a.state.disabled})},a.handlePublish=function(){a.state.username.length<=1?a.setState({error:"Your username must be atleast 2 characters.."}):a.state.username.length>15?a.setState({error:"Your username can not be longer then 15 characters."}):a.emailIsValid(a.state.email)?null===a.state.username.match("^[A-Za-z0-9]+$")?a.setState({error:"Your username can only contain letters and numbers."}):a.setState({confirm:!0}):a.setState({error:"You must enter a valid email"})},a.handleConfirm=function(){g.a.auth().signInWithEmailAndPassword(a.state.user.email,a.state.password).then((function(){b.collection("users").doc(a.state.username).update({email:a.state.email,bio:a.state.bio,custom_name:a.state.username}).then((function(){g.a.auth().currentUser.updateEmail(a.state.email).then((function(){console.log("email updated")})).catch((function(e){console.log(e)}))})).then((function(){!0===a.state.profileChange?g.a.storage().ref("profile-pic/"+a.uuidv4()).put(a.state.selectedFile).then((function(e){b.collection("users").doc(a.state.user.displayName).update({profile_picture:e.metadata.name}).then((function(){window.location.reload(!1)})).catch((function(e){alert(e)}))})).catch((function(e){a.setState({popupError:e.message})})):window.location.reload(!1)})).catch((function(e){a.setState({popupError:e.message})}))})).catch((function(e){a.setState({popupError:e.message})}))},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.handleUsername=function(e){a.setState({username:e.target.value})},a.handleBio=function(e){a.setState({bio:e.target.value})},a.handleProfilePicture=function(e){a.setState({selectedFile:e.target.files[0]}),a.setState({profileChange:!0})},a.state={loggedIn:null,loading:!0,profilePic:null,disabled:!0,error:"",popupError:"",user:{},userData:{},username:"",email:"",bio:"",profileChange:!1,password:"",selectedFile:null,confirm:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"emailIsValid",value:function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}},{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},{key:"redAlert",value:function(){return""!==this.state.error?l.a.createElement("div",{className:"alert alert-dismissible alert-danger"},l.a.createElement("strong",null,"Oh snap!")," ",this.state.error):l.a.createElement("p",null)}},{key:"popupAlert",value:function(){return""!==this.state.popupError?l.a.createElement("div",{className:"alert alert-dismissible alert-danger"},l.a.createElement("strong",null,"Oh snap!")," ",this.state.popupError):l.a.createElement("p",null)}},{key:"render",value:function(){var e=this;return!0===this.state.loading?null:this.props.match.params.externalProfile?l.a.createElement(w,{data:this.props.match.params.externalProfile}):!0===this.state.loggedIn?l.a.createElement("div",null,function(){if(!0===e.state.confirm)return l.a.createElement("div",{className:"popup-holder"},l.a.createElement("div",{className:"jumbotron profile-password-confirm-popup"},l.a.createElement("h3",null,"Confirm your password!"),e.popupAlert(),l.a.createElement("hr",null),l.a.createElement("label",{className:"col-form-label",htmlFor:"email"},"Password"),l.a.createElement("input",{type:"password",onChange:e.handlePassword,className:"form-control",placeholder:"",value:e.state.password,id:"email"}),l.a.createElement("hr",null),l.a.createElement("button",{className:"btn btn-primary float-right",onClick:e.handleConfirm},"Confirm")))}(),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row profile-padding"},l.a.createElement("div",{className:"col-2 text-center profile-picture-holder"},l.a.createElement("img",{src:this.state.profilePic,className:"profile-profile-picture",alt:"Profile Pic"}),l.a.createElement("p",null,this.state.user.displayName)),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"jumbotron profile-holder"},l.a.createElement("h3",null,"Profile Info"),this.redAlert(),l.a.createElement("hr",null),l.a.createElement("fieldset",{disabled:this.state.disabled},l.a.createElement("label",{className:"col-form-label",htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",onChange:this.handleEmail,className:"form-control",placeholder:"",value:this.state.email,id:"email"}),l.a.createElement("label",{className:"col-form-label",htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",onChange:this.handleUsername,className:"form-control",placeholder:"",value:this.state.username,id:"username"}),l.a.createElement("label",{className:"col-form-label",htmlFor:"bio"},"Biography"),l.a.createElement("textarea",{className:"form-control",onChange:this.handleBio,placeholder:"",value:this.state.bio,id:"bio",rows:"8"}),l.a.createElement("label",{className:"col-form-label",htmlFor:"profile-pic"},"Profile Pic")," ",l.a.createElement("br",null),l.a.createElement("input",{type:"file",name:"file",className:"form-control-file",accept:"image/*","aria-describedby":"fileHelp",id:"profile-pic",onChange:this.handleProfilePicture}),l.a.createElement("small",{id:"fileHelp",class:"form-text text-muted"},"Profile pictures are subject to deletion if found to contain nudity.")),l.a.createElement("hr",null),e.state.disabled?l.a.createElement("button",{type:"button",onClick:e.handleEdit,className:"btn btn-secondary float-right"},"Edit"):l.a.createElement("button",{type:"button",onClick:e.handlePublish,className:"btn btn-primary float-right"},"Publish")))))):!1===this.state.loggedIn?l.a.createElement(p.a,{to:"/"}):null}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){g.a.auth().onAuthStateChanged((function(e){e?(a.setState({loggedIn:!0}),a.setState({user:g.a.auth().currentUser}),a.updateUserData()):(a.setState({loggedIn:!1}),a.setState({loading:!1}))}))},a.updateUserData=function(){b.collection("users").doc(a.state.user.displayName).get().then((function(e){e.exists?(a.setState({userData:e.data()}),a.setState({loading:!1})):alert("Error getting user data please reload.")}))},a.state={loggedIn:null,loading:!0,user:{},userData:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return!0===this.state.loading?null:!0===this.state.loggedIn?l.a.createElement("div",null,l.a.createElement("h1",null,"You are on my forums")):!1===this.state.loggedIn?l.a.createElement(p.a,{to:"/"}):null}}]),t}(l.a.Component),x=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row not-found-container"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("img",{src:"images/404.png",height:"200px",alt:"Error not found"})," ",l.a.createElement("br",null),l.a.createElement("h2",null,"Houston... we have a problem"),l.a.createElement("p",{className:"text-primary"},"404 page not found."))))},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){g.a.auth().onAuthStateChanged((function(e){e?(a.setState({loggedIn:!0}),a.setState({user:g.a.auth().currentUser}),a.updateUserData()):(a.setState({loggedIn:!1}),a.setState({loading:!1}))}))},a.updateUserData=function(){b.collection("users").doc(a.state.user.displayName).get().then((function(e){a.setState({userData:e.data()}),a.setState({bio:a.state.userData.bio}),a.setState({email:a.state.userData.email})})).then((function(e){g.a.storage().ref().child("profile-pic/"+a.state.userData.profile_picture).getDownloadURL().then((function(e){a.setState({profilePic:e})})).catch((function(e){alert(e.message)}))})).then((function(e){a.setState({loading:!1})})).catch((function(e){alert(e.message)}))},a.handleLogout=function(){g.a.auth().signOut().then((function(){console.log("logged out")})).catch((function(e){console.log(e)}))},a.state={loggedIn:null,loading:!0,userData:{},user:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return!0===this.state.loading?null:!0===this.state.loggedIn?l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/saturn-d573e.appspot.com/o/static-images%2Flogo.png?alt=media&token=720bb0dd-5c9b-4443-b2a1-d2c24ed0671d",alt:"Brand Logo",height:"40px"})," ",l.a.createElement("b",null,"Saturn")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor03"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/dashboard",className:"nav-link"},"Dashboard")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/myforums",className:"nav-link"},"My forums"))),l.a.createElement("ul",{className:"navbar-nav ml-auto nav-profile-holder"},l.a.createElement("li",{className:"nav-item dropdown show"},l.a.createElement("a",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button"},l.a.createElement("img",{src:this.state.profilePic,alt:"Profile Image",className:"nav-profile-picture"})," ",this.state.userData.custom_name),l.a.createElement("div",{className:"dropdown-menu ","x-placement":"bottom-start"},l.a.createElement(d.b,{to:"/profile",className:"dropdown-item"},"Profile"),l.a.createElement("a",{className:"dropdown-item",onClick:function(){e.handleLogout()}},"Logout")))))),l.a.createElement("div",{className:"nav-spacer"})),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/profile/:externalProfile",component:S}),l.a.createElement(p.b,{path:"/profile",component:S}),l.a.createElement(p.b,{path:"/myforums",component:y}),l.a.createElement(p.b,{path:"/dashboard",component:N}),l.a.createElement(p.b,{path:"/register",component:E}),l.a.createElement(p.b,{path:"/404",component:x}),l.a.createElement(p.b,{path:"/",component:v}),l.a.createElement(p.b,{path:"*",component:x}))):!1===this.state.loggedIn?l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"images/logo.png",alt:"Brand Logo",height:"40px"})," ",l.a.createElement("b",null,"Saturn")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor03"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/register",className:"nav-link"},"Register"))))),l.a.createElement("div",{className:"nav-spacer"})),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/profile",component:S}),l.a.createElement(p.b,{path:"/dashboard",component:N}),l.a.createElement(p.b,{path:"/register",component:E}),l.a.createElement(p.b,{path:"/404",component:x}),l.a.createElement(p.b,{path:"/",component:v}),l.a.createElement(p.b,{path:"*",component:x}))):null}}]),t}(l.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"blank-div"}),l.a.createElement("div",{className:"text-center footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5"},l.a.createElement("p",null,"Copyright \xa9 2019 Saturn"),l.a.createElement("p",{className:"text-primary"},"Created by team no-babies")),l.a.createElement("div",{className:"col-5 text-right footer-icons"},l.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/saturn-d573e.appspot.com/o/static-images%2Freact.png?alt=media&token=eabf66ac-18c3-49cb-9e5f-4936db26bbf1",className:"footer-icon",alt:"React"}),l.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/saturn-d573e.appspot.com/o/static-images%2Fbootstrap.png?alt=media&token=7156b4ab-b404-4933-8fbd-54f9c0dc4695",className:"footer-icon",alt:"Bootstrap"}),l.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/saturn-d573e.appspot.com/o/static-images%2Ffirebase.png?alt=media&token=101a52af-96d5-4527-8cd0-745f8f5e87c3",className:"footer-icon",alt:"Firebase"})))))}}]),t}(l.a.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(C,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.9c56b75d.chunk.js.map