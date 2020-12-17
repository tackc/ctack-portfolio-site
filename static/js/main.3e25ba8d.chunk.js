(this["webpackJsonpctack-portfolio-site"]=this["webpackJsonpctack-portfolio-site"]||[]).push([[0],{121:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),c=n.n(i),s=n(41),r=n.n(s),o=(n(121),n(20)),l=n(21),j=n(25),h=n(23),d=n(100),b=(n(124),n(125),function(){return Object(a.jsxs)("div",{className:"HomePane flex-container",children:[Object(a.jsx)("div",{className:"Background flex-item"}),Object(a.jsx)("div",{className:"ChrisTack flex-item"})]})}),m=(n(126),n.p+"static/media/headshot.aea9ad72.jpg"),p=n(147),u=n(149),x=n(38),O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Resume",children:Object(a.jsx)("iframe",{title:"chrisTackResume",src:"https://tackc.github.io/resume-template/",frameborder:"0"})})}}]),n}(c.a.Component),g=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={open:!1},e.show=function(t){return function(){return e.setState({size:t,open:!0})}},e.close=function(){return e.setState({open:!1})},e.handlePrint=function(){var e=window.open("","Resume");e.document.write('<iframe\n            src="https://drive.google.com/file/d/1lxpQB5QlDa1H3cV4kxS0ejY1hGcExX6q/preview", \n            width="1000" \n            height="1000">\n        />'),e.document.close(),e.focus(),e.print(),e.close()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(p.a,{trigger:Object(a.jsx)(u.a,{children:"View my r\xe9sum\xe9"}),size:"fullscreen",onClose:this.close,children:[Object(a.jsx)(p.a.Content,{children:Object(a.jsx)(O,{handlePrint:this.handlePrint,onClick:this.show("fullscreen")})}),Object(a.jsx)(p.a.Actions,{children:Object(a.jsxs)(u.a,{href:"https://dl.dropboxusercontent.com/s/vx7c2g4dngd4mpm/Chris_Tack_Resume.pdf?dl=0",children:["Download \xa0 \xa0",Object(a.jsx)(x.a,{name:"download"})]})})]})}}]),n}(c.a.Component),f=n(151),y=n(152),k=n(153),w=n(106),v=function(e){var t=e.mobile;return Object(a.jsx)("div",{id:"about",className:"AboutPane",children:Object(a.jsx)(f.a,{style:{padding:"8em 0em"},vertical:!0,children:Object(a.jsxs)(y.a,{container:!0,stackable:!0,verticalAlign:"middle",children:[Object(a.jsx)(y.a.Row,{children:Object(a.jsxs)(k.a,{as:"h1",content:"Full-Stack Developer, Photographer, Designer",inverted:!0,style:{fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:"0",paddingBottom:"1em",marginTop:t?".5em":"1em",margin:"0 auto"},children:["Full-Stack Developer ",Object(a.jsx)("br",{}),"Photographer ",Object(a.jsx)("br",{}),"Designer"]})}),Object(a.jsxs)(y.a.Row,{children:[Object(a.jsx)(y.a.Column,{width:8,children:Object(a.jsxs)("p",{style:{fontSize:"1.5em"},children:["I\u2019m an improvement-driven fellow who sees potential for greatness everywhere. With a formal education in photography and graphic design, and additional training in Full Stack Web Development. I have worked as a professional phototographer for 10+ years and decided it was time to add another skill set to my belt. I also spent 7+ years working in various roles for Apple Inc.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Fun fact: "}),"I built and lived in a tiny house for 4 years with my wife!"]})}),Object(a.jsx)(y.a.Column,{floated:"right",width:6,children:Object(a.jsx)(w.a,{bordered:!0,rounded:!0,size:"large circular",src:m})})]}),Object(a.jsx)(y.a.Row,{centered:!0,style:{marginTop:t?".5em":"1em",margin:"1em auto"},children:Object(a.jsx)(g,{style:{margin:"0 auto"}})}),Object(a.jsx)(y.a.Row,{children:Object(a.jsx)(k.a,{as:"h1",style:{fontSize:t?"1.5em":"3em",fontWeight:"normal",marginBottom:"0",paddingBottom:"1em",marginTop:t?".5em":"1em",margin:"0 auto"},children:Object(a.jsx)(x.a,{name:"github"})})})]})})})},S=(n(130),n(148)),C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(f.a,{id:"portfolio",className:"portfolio",style:{padding:"0em"},vertical:!0,children:Object(a.jsx)(y.a,{celled:"internally",columns:"equal",stackable:!0,children:Object(a.jsxs)(y.a.Row,{textAlign:"center",children:[Object(a.jsxs)(y.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"},children:[Object(a.jsx)(k.a,{as:"h3",style:{fontSize:"2em"},children:"Simon - Memory Game"}),Object(a.jsx)(w.a,{src:"https://i.imgur.com/ZAM13ij.png",style:{paddingBottom:"3em",paddingTop:"2em"}}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"My take on the classic Simon game. Users observe the pattern played by the computer and then repeat the pattern back in order to advance to the next round."}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"It was challenging figuring out how to increment the computer move and then await user input while comparing the player move to that of the computer"}),Object(a.jsxs)(S.a,{style:{fontSize:"1.33em"},children:[Object(a.jsx)("b",{children:"Technologies Used:"}),Object(a.jsx)("li",{children:"HTML5"}),Object(a.jsx)("li",{children:"CSS"}),Object(a.jsx)("li",{children:"Vanilla JS"})]}),Object(a.jsx)(u.a,{target:"_blank",href:"https://tackc.github.io/memory-game/",children:"View the App"}),Object(a.jsxs)(u.a,{target:"_blank",href:"https://github.com/tackc/memory-game",children:[Object(a.jsx)(x.a,{name:"code"}),"View the Code"]})]}),Object(a.jsxs)(y.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"},children:[Object(a.jsx)(k.a,{as:"h3",style:{fontSize:"2em"},children:"Tool Library"}),Object(a.jsx)(w.a,{src:"https://i.imgur.com/I6IOQT6.png",style:{paddingBottom:"3em",paddingTop:"2em"}}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"The tool library app was built using Django. Users are able to create an account (or log in) and then add tools that they own to the tool library."}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"Although it was one of my first Django and Python projects, it was fun experimenting with a new programming language!"}),Object(a.jsxs)(S.a,{style:{fontSize:"1.33em"},children:[Object(a.jsx)("b",{children:"Technologies Used:"}),Object(a.jsx)("li",{children:"Django"}),Object(a.jsx)("li",{children:"Python"}),Object(a.jsx)("li",{children:"ES6"}),Object(a.jsx)("li",{children:"Materialize"}),Object(a.jsx)("li",{children:"RESTful"}),Object(a.jsx)("li",{children:"mongoDB"})]}),Object(a.jsx)(u.a,{target:"_blank",href:"https://still-spire-43106.herokuapp.com/",children:"View the App"}),Object(a.jsx)(u.a,{target:"_blank",href:"https://github.com/tackc/toollibrary/",children:"View the Code"})]}),Object(a.jsxs)(y.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"},children:[Object(a.jsx)(k.a,{as:"h3",style:{fontSize:"2em"},children:"Seattle Transit"}),Object(a.jsx)(w.a,{src:"https://i.imgur.com/HJUyoRs.png",style:{paddingBottom:"3em",paddingTop:"2em"}}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"Mobile-first team project (Henry Hong & Sutthirath Sean Vilaysane). We consumed the One Bus Away API and created an app allowing users to find bus stops near their current location on a map using the mapbox API."}),Object(a.jsxs)(S.a,{style:{fontSize:"1.33em"},children:[Object(a.jsx)("b",{children:"Technologies Used:"}),Object(a.jsx)("li",{children:"NodeJS"}),Object(a.jsx)("li",{children:"ExpressJS"}),Object(a.jsx)("li",{children:"ES6"}),Object(a.jsx)("li",{children:"Materialize"}),Object(a.jsx)("li",{children:"RESTful"}),Object(a.jsx)("li",{children:"mongoDB"}),Object(a.jsx)("li",{children:"mapbox API"}),Object(a.jsx)("li",{children:"OneBusAway API"})]}),Object(a.jsx)(u.a,{target:"_blank",href:"https://nameless-harbor-37613.herokuapp.com/",children:"View the App"}),Object(a.jsxs)(u.a,{target:"_blank",href:"https://github.com/tackc/SeattleTransit?files=1",children:[Object(a.jsx)(x.a,{name:"code"}),"View the Code"]})]}),Object(a.jsxs)(y.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"},children:[Object(a.jsx)(k.a,{as:"h3",style:{fontSize:"2em"},children:"National Park Finder"}),Object(a.jsx)(w.a,{src:"https://i.imgur.com/3daV702.png",style:{paddingBottom:"3em",paddingTop:"2em"}}),Object(a.jsx)("p",{style:{fontSize:"1.33em"},children:"I created the National Parks Finder App to help users find parks to visit in the destination of their choosing. Users can save their favorites as well as parks they have visited. The app was build with mobile-first in mind. Media queries were used to ensure the app is aesthetically pleasing on larger displays."}),Object(a.jsxs)(S.a,{style:{fontSize:"1.33em"},children:[Object(a.jsx)("b",{children:"Technologies Used:"}),Object(a.jsx)("li",{children:"React"}),Object(a.jsx)("li",{children:"React Router"}),Object(a.jsx)("li",{children:"Javascript"}),Object(a.jsx)("li",{children:"CSS"}),Object(a.jsx)("li",{children:"National Parks Service API"})]}),Object(a.jsx)(u.a,{target:"_blank",href:"https://nationalparksfinder.herokuapp.com/",children:"View the App"}),Object(a.jsxs)(u.a,{target:"_blank",href:"https://github.com/tackc/proj4-national-park-finder?files=1",children:[Object(a.jsx)(x.a,{name:"code"}),"View the Code"]})]})]})})})}}]),n}(i.Component),A=function(){return Object(a.jsx)("div",{className:"PortfolioPane",children:Object(a.jsx)(C,{})})},T=(n(131),n(146)),N=function(){return Object(a.jsx)("div",{id:"contact",className:"ContactPane",children:Object(a.jsx)(T.a,{className:"flex flex-wrap justify-between py-8 w-1/2 sm:w-full ui centered grid",children:Object(a.jsxs)(y.a,{columns:4,stackable:!0,centered:!0,children:[Object(a.jsx)(y.a.Row,{children:Object(a.jsx)(y.a.Column,{})}),Object(a.jsxs)(y.a.Row,{children:[Object(a.jsxs)(y.a.Column,{children:[Object(a.jsxs)(u.a,{target:"_blank",href:"https://christopher-tack.squarespace.com",color:"blue",children:[Object(a.jsx)(x.a,{name:"camera"})," My Photo Work"]}),Object(a.jsx)("p",{})]}),Object(a.jsxs)(y.a.Column,{children:[Object(a.jsxs)(u.a,{target:"_blank",href:"https://www.linkedin.com/in/christophertack",color:"linkedin",children:[Object(a.jsx)(x.a,{name:"linkedin"})," LinkedIn"]}),Object(a.jsx)("p",{})]}),Object(a.jsxs)(y.a.Column,{children:[Object(a.jsxs)(u.a,{target:"_blank",href:"https://www.instagram.com/tackc/",color:"instagram",children:[Object(a.jsx)(x.a,{name:"instagram"})," Instagram"]}),Object(a.jsx)("p",{})]}),Object(a.jsxs)(y.a.Column,{children:[Object(a.jsxs)(u.a,{target:"_blank",href:"https://github.com/tackc",color:"grey",children:[Object(a.jsx)(x.a,{name:"github"})," Github"]}),Object(a.jsx)("p",{})]})]})]})})})},P=(n(132),n(133),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"NavbarPane flex-container",children:Object(a.jsxs)("nav",{className:"NavContainer flex-item",children:[Object(a.jsxs)("div",{className:"Brand",children:[Object(a.jsx)("h3",{children:"Chris Tack"}),Object(a.jsx)("h6",{children:"Full Stack Developer"})]}),Object(a.jsxs)("div",{className:"NavLinks",children:[Object(a.jsx)("a",{href:"#about",children:"About"}),Object(a.jsx)("a",{href:"#portfolio",children:"Portfolio"}),Object(a.jsx)("a",{href:"#contact",children:"Contact"})]})]})})}}]),n}(i.Component)),z=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App flex-container",children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)("title",{children:"Chris Tack - Full Stack Developer"}),Object(a.jsx)("meta",{name:"description",content:"Chris Tack is a Front-End leaning Full Stack Developer in the Greater Seattle Area."}),Object(a.jsx)("meta",{name:"keywords",content:"Node.js, Javascript, React.js, HTML5, CSS3, Express, Express, Git, GitHub, AWS, Amazon Web Services, REST, API, JSON, Adobe Creative Cloud, Photoshop, Illustrator"})]}),Object(a.jsx)(P,{className:"AppNav flex-item"}),Object(a.jsxs)("div",{className:"PageContent",children:[Object(a.jsx)(b,{id:"#home",className:"AppHome flex-item"}),Object(a.jsx)(v,{id:"#about",className:"AppAbout flex-item"}),Object(a.jsx)(A,{id:"#portfolio",className:"AppPortfolio flex-item"}),Object(a.jsx)(N,{id:"#contact",className:"AppContact flex-item"})]})]})}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[135,1,2]]]);
//# sourceMappingURL=main.3e25ba8d.chunk.js.map