(this.webpackJsonpcodeflow=this.webpackJsonpcodeflow||[]).push([[0],{101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},121:function(e,t,s){},142:function(e,t,s){},143:function(e,t,s){},144:function(e,t,s){},150:function(e,t,s){},151:function(e,t,s){},152:function(e,t,s){},159:function(e,t,s){},160:function(e,t,s){},163:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(32),n=s.n(c),r=(s(101),s(57),s(17)),o=s(11),l=s(9),d=(s(102),s.p+"static/media/img1.b87e8591.png"),m=s.p+"static/media/team.82a4fe3d.jpg",j=s.p+"static/media/youtube.53e4f973.png",h=s.p+"static/media/opensource.eeacc999.jpg",p=(s(103),s(3));var b=function(e){var t=e.image,s=e.name,a=e.position;return Object(p.jsxs)("div",{className:"teamCard",children:[Object(p.jsx)("img",{src:t,alt:"thumbnail"}),Object(p.jsx)("h5",{children:s}),Object(p.jsx)("p",{children:a})]})},u=s(22),g=s(77),x=s.n(g),O=s(33),v=s.n(O),f=s(45),w=s(13),N=s(27),y=function(e){var t=e.className,s=e.onClick;return Object(p.jsx)(N.b,{className:t,style:{display:"block",right:"100px",zIndex:"15",height:"80px",width:"80px",opacity:"1",color:"#C2C6C5",position:"absolute",top:"50%",left:"-4.5rem",margin:"0.5rem"},onClick:s})},_=function(e){var t,s=e.className,a=e.onClick;return Object(p.jsx)(N.c,{className:s,style:(t={display:"block",right:"100px",zIndex:"15",height:"80px",width:"80px",opacity:"1",color:"#C2C6C5",position:"absolute",top:"50%"},Object(w.a)(t,"right","-4.5rem"),Object(w.a)(t,"margin","0.5rem"),t),onClick:a})},C={infinite:!1,speed:750,slidesToShow:3,slidesToScroll:1,initialSlide:0,nextArrow:Object(p.jsx)(_,{}),prevArrow:Object(p.jsx)(y,{}),responsive:[{breakpoint:1300,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:850,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]},k=(s(121),function(e){var t=e.name,s=e.body,a=e.email;return Object(p.jsxs)("article",{className:"tesimonial-item",children:[Object(p.jsxs)("div",{className:"testimonial-left",children:[Object(p.jsx)(N.d,{className:"quote-icon"}),Object(p.jsx)("img",{src:"https://via.placeholder.com/150/A45D5D",alt:t})]}),Object(p.jsxs)("div",{className:"testimonial-right",children:[Object(p.jsx)("blockquote",{className:"testimonial-content",children:s}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("small",{children:a})]})]})]})}),S=(s(122),s(123),function(){var e=function(e){var t=Object(a.useState)(!0),s=Object(l.a)(t,2),i=s[0],c=s[1],n=Object(a.useState)(!1),r=Object(l.a)(n,2),o=r[0],d=r[1],m=Object(a.useState)([]),j=Object(l.a)(m,2),h=j[0],p=j[1],b=Object(a.useCallback)(Object(f.a)(v.a.mark((function t(){var s,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.prev=1,t.next=4,fetch(e);case 4:if((s=t.sent).ok){t.next=7;break}throw new Error("".concat(s.status," Product not found"));case 7:return t.next=9,s.json();case 9:a=t.sent,p(a),c(!1),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),c(!1),d(!0);case 18:case"end":return t.stop()}}),t,null,[[1,14]])}))),[e]);return Object(a.useEffect)((function(){b()}),[e,b]),{data:h,isLoading:i,isError:o}}("http://jsonplaceholder.typicode.com/comments?_page=1&_limit=8"),t=e.data,s=e.isLoading;return Object(p.jsxs)("section",{id:"testimonials",children:[Object(p.jsxs)("h1",{children:[" ",Object(p.jsx)("span",{style:{color:"#4A403A"},children:"Our"})," Testimonials"]}),Object(p.jsx)("div",{className:"testimonial-wrapper",children:s?Object(p.jsx)("h1",{children:"Loading..."}):Object(p.jsx)(x.a,Object(u.a)(Object(u.a)({},C),{},{children:t.map((function(e){return Object(p.jsx)(k,Object(u.a)({},e),e.id)}))}))})]})}),L=s(78),A=s.n(L);var F=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){A.a.get("https://api.github.com/repos/codeflow201/codeflow/contributors?q=contributions&order=desc").then((function(e){c(e)}))})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"Home",id:"Home",children:Object(p.jsxs)("div",{className:"parent",children:[Object(p.jsx)("div",{class:"col-5 son",children:Object(p.jsxs)("div",{className:"son__Para",children:[Object(p.jsx)("h3",{children:Object(p.jsx)("span",{children:"Codeflow"})}),Object(p.jsx)("h3",{children:" Learning must go on!"}),Object(p.jsx)("p",{children:"Codeflow is an organisatiom whose main motive is to empower student community by organising webinars, hackathons and open source events"})]})}),Object(p.jsx)("div",{class:"col-7 daughter",children:Object(p.jsx)("img",{src:d,alt:"loading"})})]})}),Object(p.jsxs)("div",{className:"home__about",children:[Object(p.jsxs)("div",{className:"home__aboutInfo",children:[Object(p.jsxs)("h3",{children:[Object(p.jsx)("span",{children:"About"})," Us"]}),Object(p.jsx)("p",{children:"An initiative to contribute to the Student community by providing opportunities, resources, and awareness about the possibilities in the field of software to students & professionals."})]}),Object(p.jsx)("div",{className:"home__aboutCards",children:Object(p.jsxs)("div",{className:"home__aboutCards",children:[Object(p.jsxs)("div",{className:"home__aboutCard1",children:[Object(p.jsx)("img",{src:h,alt:"thumbnail"}),Object(p.jsx)("h5",{children:"OpenSource"})]}),Object(p.jsxs)("div",{className:"home__aboutCard1",children:[Object(p.jsx)("img",{src:m,alt:"thumbnail"}),Object(p.jsx)("h5",{children:"Community building"})]}),Object(p.jsxs)("div",{className:"home__aboutCard1",children:[Object(p.jsx)("img",{src:j,alt:"thumbnail"}),Object(p.jsx)("h5",{children:"Events and Workshops"})]})]})})]}),Object(p.jsx)(S,{}),Object(p.jsxs)("div",{className:"home__team",children:[Object(p.jsxs)("h3",{children:[Object(p.jsx)("span",{children:"Core"})," Team"]}),Object(p.jsxs)("div",{className:"home__teamCards",children:[Object(p.jsx)(b,{image:"https://i.ibb.co/BqR6rTK/image.jpg",name:"Hargun Kaur",position:"Founder"}),Object(p.jsx)(b,{image:"https://i.ibb.co/0GsNn01/harsh.jpg",name:"Harsh Chhabra",position:"Founder"}),Object(p.jsx)(b,{image:"https://i.ibb.co/bJ8HHND/paras.jpg",name:"Paras Bansal",position:"Web-dev Lead"}),Object(p.jsx)(b,{image:j,name:"Yash Nitani",position:"Opensource Lead"}),Object(p.jsx)(b,{image:"https://i.ibb.co/jz1C1V7/Whats-App-Image-2021-10-09-at-11-39-08-PM.jpg",name:"Priyanshi Sinha",position:"Program Management Lead"})]}),Object(p.jsxs)("div",{className:"home__teamCardsContributor",children:[Object(p.jsxs)("h3",{children:[Object(p.jsx)("span",{children:"Top"})," Contributors"]}),Object(p.jsx)("div",{className:"home__teamCards",children:s?Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(b,{image:s.data[0].avatar_url,name:s.data[0].login}),Object(p.jsx)(b,{image:s.data[1].avatar_url,name:s.data[1].login}),Object(p.jsx)(b,{image:s.data[2].avatar_url,name:s.data[2].login}),Object(p.jsx)(b,{image:s.data[3].avatar_url,name:s.data[3].login}),Object(p.jsx)(b,{image:s.data[4].avatar_url,name:s.data[4].login}),Object(p.jsx)(b,{image:s.data[5].avatar_url,name:s.data[5].login})]}):""})]})]})]})},T=(s(142),s.p+"static/media/calender.1167b71f.png"),I=s(46),R=s(81);s(143);var P=function(e){var t=e.image,s=e.title,a=e.info,i=e.category,c=e.date,n=e.time,r=e.btn;return Object(p.jsxs)("div",{className:"cards",children:[Object(p.jsx)("img",{src:t,alt:"thumbnail",className:"card__img"}),Object(p.jsxs)("div",{className:"card__info",children:[Object(p.jsxs)("div",{className:"card__infoTxt",children:[Object(p.jsxs)("h4",{children:["(",s,") ",Object(p.jsx)("span",{children:i})]}),Object(p.jsx)("p",{children:a})]}),Object(p.jsxs)("div",{className:"card__infoTime",children:[Object(p.jsx)(I.a,{className:"card__infoTime-icon"}),Object(p.jsxs)("div",{className:"card__infoTime-time",children:[Object(p.jsxs)("p",{children:["Date: ",c]}),Object(p.jsxs)("p",{children:["Time: ",n]})]})]})]}),Object(p.jsx)("button",{className:"card__btn",children:r})]})},E=s(79),J=s(80),B=s.n(J),D=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],i=t[1],c=Object(a.useState)(E),n=Object(l.a)(c,1)[0],r=Object(a.useState)(0),o=Object(l.a)(r,2),d=o[0],j=o[1],h=5*d,b=n.filter((function(e){return""===s||e.title.toLowerCase().includes(s.toLowerCase())||e.category.toLowerCase().includes(s.toLowerCase())?e:console.log("card success")})).slice(h,h+5).map((function(e){return Object(p.jsx)(P,{image:e.image,title:e.title,category:e.category,info:e.info,date:e.date,time:e.time,btn:e.btn})})),u=Math.ceil(n.length/5);return Object(p.jsxs)("div",{className:"events ",children:[Object(p.jsx)("div",{className:"event__home1",children:Object(p.jsxs)("div",{className:"events__cardOutline",children:[Object(p.jsxs)("div",{className:"events__upcomingCard",children:[Object(p.jsx)("img",{src:m,alt:"thumbnail"}),Object(p.jsxs)("div",{className:"events__upcomingCardinfo",children:[Object(p.jsx)("button",{className:"events__upcomingCard-btn1",children:"Register Now"}),Object(p.jsx)("h2",{children:"Heading of the event"}),Object(p.jsxs)("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit temporibus, eaque qui corrupti corporis"," "]}),Object(p.jsx)("button",{className:"events__upcomingCard-btn2",children:"Category"}),Object(p.jsxs)("div",{className:"events__upcomingCardTiming",children:[Object(p.jsx)(I.a,{className:"events__upcomingCardIcon"}),Object(p.jsxs)("div",{className:"events__upcomingCardTime",children:[Object(p.jsx)("p",{children:"Date: 21stJan,2021"}),Object(p.jsx)("p",{children:"Time: 4:00pm - 5:00pm"})]})]})]})]}),Object(p.jsxs)("div",{className:"event__info",children:[Object(p.jsx)("div",{className:"event__infoSvg",children:Object(p.jsx)("img",{src:T,alt:"png"})}),Object(p.jsx)("div",{className:"event__infoText",children:Object(p.jsxs)("h4",{children:["Codeflow believes that the best learning curve for any great lesson is achieved by ",Object(p.jsx)("br",{}),"Learning-By-Doing technique.",Object(p.jsx)("br",{}),"Therefore we organise various events to cultivate basic learning spirit in students"]})})]})]})}),Object(p.jsx)("div",{className:"events__home2",children:Object(p.jsxs)("div",{className:"event__home2Container",children:[Object(p.jsxs)("div",{className:"events__search",children:[Object(p.jsx)(R.a,{className:"events__searchIcon"}),Object(p.jsx)("input",{type:"search",placeholder:"Search events by their name and category...",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(p.jsx)("div",{className:"events__cards",children:b}),Object(p.jsx)(B.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:function(e){var t=e.selected;j(t)},containerClassName:"paginateBtn",previousLinkClassName:"previousBtn",nextLinkClassName:"nextBtn",activeClassName:"paginateActive"})]})})]})},H=(s(144),s.p+"static/media/logo.73010905.png"),U=s(175),M=s(84),W=s(86),q=s.n(W),z=s(90),K=s.n(z),G=s(88),V=s.n(G),Q=s(87),Y=s.n(Q),X=s(89),Z=s.n(X),$=function(e){var t=Object(a.useState)(!1),s=Object(l.a)(t,2),i=s[0],c=s[1];var n=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(l.a)(e,2),s=t[0],i=t[1];return Object(a.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),s}();return Object(p.jsx)("div",{className:"fixed",children:Object(p.jsx)("div",{children:Object(p.jsxs)(U.a,{className:"justify-content-between navbar",style:i&&n.width<="685"?{background:"#01bfd9"}:{background:e.color},children:[Object(p.jsxs)("div",{className:"headings-logos-buttons",children:[Object(p.jsx)(M.a,{style:{color:"white"},className:"nav-dynamic-button",size:40,onClick:function(){return c(!i)}}),Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("img",{src:H,alt:"logo",height:e.height})})]}),Object(p.jsxs)("div",{className:"navs",id:i&&n.width<="685"?"hidden":"",children:[Object(p.jsxs)(r.c,{activeClassName:"nav_active",className:" m-2 nav navbar-link-css",to:"/",onClick:function(){return c(!i)},children:[Object(p.jsx)(q.a,{}),"HOME"]}),Object(p.jsxs)(r.c,{activeClassName:"nav_active",className:" m-2 nav navbar-link-css",to:"/events",onClick:function(){return c(!i)},children:[Object(p.jsx)(Y.a,{}),"EVENTS"]})," ",Object(p.jsxs)(r.c,{activeClassName:"nav_active",className:" m-2 nav navbar-link-css",to:"/hackathon",onClick:function(){return c(!i)},children:[Object(p.jsx)(V.a,{}),"HACKATHONS"]})," ",Object(p.jsxs)(r.c,{activeClassName:"nav_active",className:" m-2 nav navbar-link-css",to:"/openSource",onClick:function(){return c(!i)},children:[Object(p.jsx)(Z.a,{}),"OPEN SOURCE"]})," ",Object(p.jsxs)(r.c,{activeClassName:"nav_active",className:" m-2 nav navbar-link-css",to:"/collaboration",onClick:function(){return c(!i)},children:[Object(p.jsx)(K.a,{}),"COLLABORATION"]})]})]})})})};s(150),s(151);var ee=function(e){var t=e.img,s=e.heading,a=e.para,i=e.category,c=e.cat,n=e.timing;return Object(p.jsxs)("div",{className:"hackCard",children:[Object(p.jsxs)("div",{className:"hackCard__img",children:[Object(p.jsx)("img",{src:t,alt:"thumbnail"}),Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)("div",{className:"hackCard__content",children:[Object(p.jsxs)("h2",{children:[s," ",Object(p.jsx)("span",{children:i})]}),Object(p.jsx)("p",{children:a}),Object(p.jsx)("button",{children:"past"===c?"Watch Now":"Register"})]})]})},te=s(91);var se=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],i=t[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"hackathon",children:[Object(p.jsxs)("div",{className:"parent",children:[Object(p.jsx)("div",{class:"col-7 daughter",children:Object(p.jsx)("img",{src:d,alt:"loading"})}),Object(p.jsx)("div",{class:"col-5 son",children:Object(p.jsxs)("div",{className:"son__Para",children:[Object(p.jsx)("h3",{children:Object(p.jsx)("span",{children:"Codeflow"})}),Object(p.jsx)("h3",{children:" known for hackathons!"}),Object(p.jsx)("p",{children:"Codeflow is an organisatiom whose main motive is to empower student community by organising webinars, hackathons and open source events"})]})})]}),Object(p.jsxs)("div",{className:"hackathon__cards",children:[Object(p.jsxs)("select",{onChange:function(e){var t=e.target.value;i(t)},name:"Past",className:"hackathon__select",children:[Object(p.jsx)("option",{value:"past",children:" Past"}),Object(p.jsx)("option",{value:"ongoing",children:" Ongoing"}),Object(p.jsx)("option",{value:"upcoming",children:" upcoming"})]}),Object(p.jsx)("div",{className:"hackathon__Cards",children:te.filter((function(e){return""===s||e.cat===s?e:void 0})).map((function(e){return Object(p.jsx)(ee,{img:e.img,heading:e.heading,para:e.para,cat:e.cat,category:e.category,timing:e.timing})}))})]})]})})},ae=(s(152),s(34));var ie=function(){return Object(p.jsxs)("div",{className:"contact",children:[Object(p.jsxs)("div",{className:"contact__Packet",children:[Object(p.jsx)("h1",{children:" Contact Us "})," ",Object(p.jsxs)("div",{className:"contact__container",children:[Object(p.jsxs)("div",{className:"contactContainer__left",children:[Object(p.jsxs)("div",{className:"contactContainer__left-info",children:[Object(p.jsx)("h3",{children:" Any queries, feel free to Contact Us...! "})," ",Object(p.jsxs)("p",{children:[" ",Object(p.jsx)("img",{height:250,src:H,alt:"logo"})," "]})," "]})," ",Object(p.jsxs)("div",{className:"contactContainer__leftIcons",children:[Object(p.jsx)(ae.SocialIcon,{url:"https://twitter.com/codefloworg",fgColor:"#FFFFFF"}),Object(p.jsx)(ae.SocialIcon,{className:"id",url:"https://www.youtube.com/channel/UCIsECRBRWOalTC51co-tJWg",fgColor:"#FFFFFF"}),Object(p.jsx)(ae.SocialIcon,{className:"id1",url:"https://www.linkedin.com/company/codefloworg/",fgColor:"#FFFFFF"}),Object(p.jsx)(ae.SocialIcon,{className:"id3",url:"https://t.me/joinchat/FdJhyMumJK5sryCv",fgColor:"#FFFFFF",network:"telegram"}),Object(p.jsx)(ae.SocialIcon,{className:"id2",url:"https://github.com/codeflow201",fgColor:"#FFFFFF",network:"github"})]})," "]})," ",Object(p.jsxs)("form",{action:"https://formcarry.com/s/S2thQbCqEvW",method:"POST",children:[Object(p.jsxs)("div",{className:"form__first",children:[Object(p.jsxs)("div",{className:"form__first-group",children:[Object(p.jsx)("label",{children:" First Name "})," ",Object(p.jsx)("input",{name:"firstname",type:"text"})]})," ",Object(p.jsxs)("div",{className:"form__first-group",children:[Object(p.jsx)("label",{children:" Last Name "})," ",Object(p.jsx)("input",{name:"lastname",type:"text"})]})," "]})," ",Object(p.jsxs)("div",{className:"form__first",children:[Object(p.jsxs)("div",{className:"form__first-group",children:[Object(p.jsx)("label",{children:" E - Mail "})," ",Object(p.jsx)("input",{name:"email",type:"email"})]})," ",Object(p.jsxs)("div",{className:"form__first-group",children:[Object(p.jsx)("label",{children:" Phone - No "})," ",Object(p.jsx)("input",{name:"phone",type:"tel"})]})," "]})," ",Object(p.jsxs)("div",{className:"form__first",children:[Object(p.jsxs)("div",{className:"form__first-group",children:[Object(p.jsx)("label",{children:" Message "})," ",Object(p.jsx)("textarea",{name:"message",children:" "})," "]})," "]})," ",Object(p.jsxs)("button",{type:"submit",className:"form__btn",children:[" ","Submit"," "]})," "]})," "]})," "]})," "]})},ce=s(176),ne=s(174),re=s(173),oe=s(63),le=(s(164),s(165),oe.a.initializeApp({apiKey:"AIzaSyAc1HwKpWdsEPUBaU0y9mWmla5EU3_vqCQ",authDomain:"codeflow-org.firebaseapp.com",databaseURL:"https://codeflow-org-default-rtdb.firebaseio.com",projectId:"codeflow-org",storageBucket:"codeflow-org.appspot.com",messagingSenderId:"706543120697",appId:"1:706543120697:web:e90a5abaa092a306c778e8"})),de=le.storage(),me=le.firestore(),je=oe.a.firestore.FieldValue.serverTimestamp(),he=function(e,t,s){var i=Object(a.useState)(0),c=Object(l.a)(i,2),n=c[0],r=c[1],o=Object(a.useState)(null),d=Object(l.a)(o,2),m=d[0],j=d[1],h=Object(a.useState)(null),p=Object(l.a)(h,2),b=p[0],u=p[1];return Object(a.useEffect)((function(){var a=de.ref(e.name),i=me.collection("events");a.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){j(e)}),Object(f.a)(v.a.mark((function e(){var c,n,r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getDownloadURL();case 2:c=e.sent,n=je,r=t,o=s,i.add({title:r,url:c,content:o,createdAt:n}),u(c);case 8:case"end":return e.stop()}}),e)}))))}),[e,t,s]),{progress:n,url:b,error:m}},pe=s(177),be=function(e){var t=e.file,s=e.heading,a=e.description,i=he(t,s,a),c=i.url,n=i.progress;return console.log(n,c),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"m-2 ",children:Object(p.jsx)(pe.a,{animated:!0,now:n})})})},ue=function(){var e=Object(a.useRef)(),t=Object(a.useState)(null),s=Object(l.a)(t,2),i=s[0],c=s[1],n=Object(a.useState)(null),r=Object(l.a)(n,2),o=r[0],d=r[1],m=Object(a.useState)(null),j=Object(l.a)(m,2),h=j[0],b=j[1],g=Object(a.useState)({selectedfile:null,heading:"",description:""}),x=Object(l.a)(g,2),O=x[0],v=x[1],f=function(e){v((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))};return Object(a.useEffect)((function(){if(!O.selectedfile)return b(null);var e=URL.createObjectURL(O.selectedfile);return b(e),function(){return URL.revokeObjectURL(e)}}),[O.selectedfile]),Object(p.jsxs)("div",{children:[Object(p.jsx)($,{color:"#01bfd9",height:"30px"}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row m-3",children:[Object(p.jsxs)("div",{className:"col-6",children:[Object(p.jsx)("div",{className:"output",children:i&&Object(p.jsx)(ce.a,{className:"m-4",variant:"danger",children:i})}),Object(p.jsxs)(ne.a,{className:"border p-3",onSubmit:function(t){if(t.preventDefault(),!O.selectedfile)return c("Please select image ");d(O.selectedfile),e.current.value="",v((function(e){return Object(u.a)(Object(u.a)({},e),{},{heading:"",description:""})})),c(null)},children:[Object(p.jsxs)(ne.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(p.jsx)(ne.a.Label,{children:"Heading"}),Object(p.jsx)(ne.a.Control,{type:"text",placeholder:"heading of the event",name:"heading",value:O.heading,onChange:f})]}),Object(p.jsx)(ne.a.Group,{children:Object(p.jsx)(ne.a.File,{type:"file",id:"exampleFormControlFile1",label:"Thumbnail / Poster:",ref:e,onChange:function(e){var t=e.target.files[0];t&&["image/png","image/jpeg","image/jpg"].includes(t.type)?v((function(e){return Object(u.a)(Object(u.a)({},e),{},{selectedfile:t})})):c("Please select image of type (png, jpg, jpeg)")}})}),Object(p.jsxs)(ne.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(p.jsx)(ne.a.Label,{children:"Description:"}),Object(p.jsx)(ne.a.Control,{as:"textarea",rows:3,name:"description",value:O.description,onChange:f})]}),Object(p.jsx)(re.a,{variant:"primary",type:"submit",children:"Submit"})]})]}),Object(p.jsx)("div",{className:"col-6",children:Object(p.jsxs)("div",{className:"output",children:[O.selectedfile&&Object(p.jsx)("img",{src:h,alt:"not available",className:"col-12"}),o&&Object(p.jsx)(be,{file:o,heading:O.heading,description:O.description})]})})]})})]})};s(159);var ge,xe=function(){return Object(p.jsxs)("div",{className:"opensource",children:["Page under Construction !",Object(p.jsx)("br",{}),"Visit ",Object(p.jsx)("a",{href:"https://github.com/codeflow201",children:"https://github.com/codeflow201"})," for our latest opensource projects !"]})},Oe=(s(160),function(){return Object(p.jsx)("div",{className:"footer-styling",children:Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"footer-logo",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("img",{src:H,alt:"Codeflow logo",width:"100"})}),Object(p.jsxs)("div",{className:"footer-logo-text",children:[Object(p.jsx)("h2",{children:"Codeflow"}),Object(p.jsx)("p",{children:"Learning must go on!"})]})]}),Object(p.jsxs)("div",{className:"footer-link-group",children:[Object(p.jsx)(r.b,{to:"/",children:"Home"}),Object(p.jsx)(r.b,{to:"/events",children:"Events"}),Object(p.jsx)(r.b,{to:"/hackathon",children:"Hackathons"}),Object(p.jsx)(r.b,{to:"/",children:"Open Source"}),Object(p.jsx)(r.b,{to:"/",children:"Collaborations"})]}),Object(p.jsxs)("div",{className:"footer-link-group social-media-links",children:[Object(p.jsx)("h3",{children:"Social Media Links"}),Object(p.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(p.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noreferrer",children:"Twitter"}),Object(p.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:"Instagram"})]}),Object(p.jsxs)("div",{className:"footer-link-group other-links",children:[Object(p.jsx)("h3",{children:"Other Links"}),Object(p.jsx)("a",{href:"https://www.github.com/codeflow201",target:"_blank",rel:"noreferrer",children:"Github"}),Object(p.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(p.jsx)("a",{href:"mailto:codefloworg@gmail.com",target:"_blank",rel:"noreferrer",children:"Email Us"})]})]})})})}),ve=s(92),fe=s(93).a.div(ge||(ge=Object(ve.a)(["\nposition: fixed;\nwidth: 100%;\nleft: 95%;\n@media (max-width:500px){\n    left:86%;\n}\nbottom: 50px;\nheight: 20px;\nfont-size: 3rem;\nz-index: 999;\ncursor: pointer;\ncolor: #4A403A;\n"]))),we=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],i=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?i(!0):e<=300&&i(!1)})),Object(p.jsx)(fe,{children:Object(p.jsx)(N.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:s?"inline":"none"}})})};var Ne=function(){return Object(p.jsxs)(r.a,{basename:"/codeflow",children:[Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)($,{color:"",height:"50px",padding:"5vh"}),Object(p.jsx)(o.a,{path:"/",exact:!0,component:F}),Object(p.jsx)(o.a,{path:"/events",exact:!0,component:D}),Object(p.jsx)(o.a,{path:"/openSource",exact:!0,component:xe}),Object(p.jsx)(o.a,{path:"/hackathon",exact:!0,component:se}),Object(p.jsx)(o.a,{path:"/collaboration",exact:!0,component:ie}),Object(p.jsx)(o.a,{path:"/Add",exact:!0,component:ue}),Object(p.jsx)(Oe,{})]}),Object(p.jsx)(we,{})]})};s(161);n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(Ne,{})}),document.getElementById("root"))},57:function(e,t,s){},79:function(e){e.exports=JSON.parse('[{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"Web Development","category":"webdev","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"App Dev","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"App Dev","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"App Dev","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"App Dev","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"App Dev","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"Machine Learning","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"Big Data","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"AI","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"AI","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"AI","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"AI","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"AI","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"AI","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"AI","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"},{"image":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"Social Media","category":"category","date":"21stJan,2021","time":"4:00pm - 5:00pm","btn":"Register Now","info":"hello there this is a dummy description for the card we  are using in event"}]')},91:function(e){e.exports=JSON.parse('[{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"past","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"past","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"ongoing","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"upcoming","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"upcoming","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"upcoming","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"upcoming","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"upcoming","category":"webdev","timing":"12thAug,5:00pm"},{"img":"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","heading":"Bohat hard \ud83e\udd18","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt magni minima reiciendis aut non dolores deleniti recusandae reprehenderit accusamus.","cat":"upcoming","category":"webdev","timing":"12thAug,5:00pm"}]')}},[[163,1,2]]]);
//# sourceMappingURL=main.8a925115.chunk.js.map