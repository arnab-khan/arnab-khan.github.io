import{$a as b,Aa as P,Ba as _,Ca as s,Da as a,Ea as p,Fa as w,Ga as K,Ha as C,Ia as B,Ja as g,K as I,Ka as U,La as X,Ma as l,Na as G,O as L,Oa as z,P as d,U as h,Za as O,_a as Q,aa as Y,ab as Z,bb as f,fb as ee,ga as $,hb as ne,ia as J,ja as q,la as r,ma as V,qa as m,t as W,xa as y,ya as o,za as x}from"./chunk-LEFQZ233.js";var u=class e{calculateAvaiableScrollPercentage(t){let n=(t?.end||0)-(t?.start||0),c=((t?.currentPosition||0)-(t?.start||0))/n*100;return Math.min(Math.max(c,0),100)}setOpacity(t,n,i){let c=(i-t)/(n-t);return c>1?c>2?0:2-c:Math.max(c,0)}setSizeInPersentage(t,n,i){let c=(i-t)/(n-t)*100;return Math.min(Math.max(c,0),100)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})};var E=class e{scrollService=d(u);scrollInformation={};scrollPersentage=0;ngOnChanges(t){t?.scrollInformation&&(this.scrollPersentage=this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation))}addClassBasedPosition(){return this.scrollPersentage>0?"opened":""}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["app-banner"]],inputs:{scrollInformation:"scrollInformation"},features:[h],decls:8,vars:1,consts:[[1,"h-100","w-100","d-flex","align-items-center","justify-content-center","banner-section",3,"ngClass"],[1,"d-flex","overflow-hidden","w-100","h-100","banner-image"],[1,"w-50","position-relative","overflow-hidden","ps-3","left"],[1,"ms-auto","container-1-half","overflow-hidden","h-100","position-relative","image-wrap"],["src","banner/arnab-khan.svg","alt","arnab-khan-banner",1,"position-absolute","h-100","w-100"],[1,"w-50","position-relative","overflow-hidden","pe-3","right"],[1,"me-auto","container-1-half","overflow-hidden","h-100","position-relative","image-wrap"]],template:function(n,i){n&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),p(4,"img",4),a()(),s(5,"div",5)(6,"div",6),p(7,"img",4),a()()()()),n&2&&o("ngClass",i.addClassBasedPosition())},dependencies:[f,O],styles:[".banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]{perspective:1000px}.banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{transition:transform 1s ease-out}.banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scaleX(2)}.banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background-image:repeating-radial-gradient(circle at right,#fc8686 10%,#6a6afd 20%);transform-origin:left center}.banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform-origin:left}.banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background-image:repeating-radial-gradient(circle at left,#fc8686 10%,#6a6afd 20%);transform-origin:right center}.banner-section[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform-origin:right}.banner-section.opened[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .banner-section.opened[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{transition:transform 2s ease-in}.banner-section.opened[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{transform:rotateY(180deg)}.banner-section.opened[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{transform:rotateY(-180deg)}"]})};var oe=e=>({"opacity-0":e}),M=e=>({transform:e});function re(e,t){if(e&1&&(s(0,"div",4),p(1,"span",6),a()),e&2){let n=t.$implicit,i=C();o("ngStyle",l(2,M,"translateY("+(n==null?null:n.position)+"vh)")),r(),o("ngStyle",l(4,M,"translateY(-"+((n==null?null:n.speed)||0)*i.scrollPercentage+"vh)"))}}function ae(e,t){if(e&1&&(s(0,"div",4),p(1,"span",6),a()),e&2){let n=t.$index,i=C(2);o("ngStyle",l(2,M,"translateY("+(n%2==0?50:0)+"vh)")),r(),o("ngStyle",l(4,M,"translateY(-"+2.5*i.scrollPercentage+"vh)"))}}function se(e,t){if(e&1&&(s(0,"div",5),P(1,ae,2,6,"div",4,x),a()),e&2){let n=t.$index,i=C();o("ngClass",n%2==0?"justify-content-evenly":"justify-content-around"),r(),_(i.lines)}}var j=class e{scrollPercentage=0;linesInformation=[{code:1,position:150,speed:2.5},{code:2,position:100,speed:2},{code:3,position:50,speed:1.5},{code:4,position:0,speed:1}];linesPattern=[1,2,1,3,1,2,1,3,1,4,1,2,1,3,1,2,1,3,1,4,1,2,1,3,1,2,1,3,1,4,1,2,1,3,1,2,1,3,1];lines;ngOnInit(){this.setLineInformation()}setLineInformation(){this.lines=this.linesPattern.map(t=>this.linesInformation.find(i=>i.code===t))}generateArray(t){return Array(t).fill("")}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["app-rising-lines-animation"]],inputs:{scrollPercentage:"scrollPercentage"},decls:9,vars:6,consts:[[1,"overflow-hidden","position-relative","h-100","w-100","rising-lines-animation-section-wrap"],[1,"h-100","w-100","position-absolute","top-0","start-50","translate-middle-x","rising-lines-animation-section",3,"ngClass"],[1,"w-100","h-100","position-absolute","top-100","lines"],[1,"d-flex","justify-content-around","w-100","h-100"],[3,"ngStyle"],[1,"d-flex","w-100","h-100",3,"ngClass"],[1,"d-block","line",3,"ngStyle"]],template:function(n,i){n&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),P(4,re,2,6,"div",4,x),a(),s(6,"div",4),P(7,se,3,1,"div",5,x),a()()()()),n&2&&(r(),o("ngClass",l(2,oe,i.scrollPercentage>=100)),r(3),_(i.lines),r(2),o("ngStyle",l(4,M,"translateY(70vh)")),r(),_(i.generateArray(4)))},dependencies:[f,O,b],styles:[".rising-lines-animation-section[_ngcontent-%COMP%]{min-width:1200px;transition-duration:.5s}.rising-lines-animation-section[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:.2vw;min-width:.2rem;height:20vh;background-image:linear-gradient(to top,#ff00801a,#ff0080,#8000ff)}"]})};var T=class e{scrollService=d(u);scrollInformation={};scrollPersentage=0;ngOnChanges(t){t?.scrollInformation&&(this.scrollPersentage=this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation))}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["app-about-me"]],inputs:{scrollInformation:"scrollInformation"},features:[h],decls:9,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-center","h-100","w-100","position-relative","bg-dark","about-me-section"],[1,"d-block","position-absolute","top-0","start-0","h-100","w-100",3,"scrollPercentage"],[1,"container-2","px-3","py-4","mx-auto","d-flex","mh-100","flex-column","position-relative","text-white"],[1,"font-abrilfatface-400-22","flex-shrink-0","text-center"],[1,"flex-shrink-1","overflow-auto","mt-4"],["src","banner/arnab-khan.webp","alt","Arnab Khan",1,"float-start","pe-4","pb-4","image"],[1,"font-sevillana-400-20"]],template:function(n,i){n&1&&(s(0,"section",0),p(1,"app-rising-lines-animation",1),s(2,"div",2)(3,"h2",3),g(4,"About Me"),a(),s(5,"div",4),p(6,"img",5),s(7,"p",6),g(8," I am a dedicated frontend web developer with over 2 years of experience, focusing on Angular to build dynamic, responsive, and user-friendly web applications. I enjoy creating scalable solutions and crafting interfaces that offer great user experiences on any device. I am always eager to learn and improve, staying updated with the latest trends in web development. Whether working alone or in a team, I aim to deliver high-quality work that truly makes a difference. "),a()()()()),n&2&&(r(),o("scrollPercentage",i.scrollPersentage))},dependencies:[j],styles:[".about-me-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:8rem}"]})};var A=e=>({opacity:e});function le(e,t){if(e&1&&(s(0,"li")(1,"div",5)(2,"div")(3,"h3",6),g(4),a(),p(5,"img",7),a(),p(6,"div",8)(7,"div",9)(8,"div",10),a()()),e&2){let n=t.$implicit,i=C();r(4),U(" ",n.name," "),r(),o("src",n.logo,J)("alt",n.name),r(),o("ngStyle",l(6,A,i.cardOutlineBeforeOpecity)),r(),o("ngStyle",l(8,A,i.cardOutlineCurrentOpecity)),r(),o("ngStyle",l(10,A,i.cardOutlineAfterOpecity))}}var H=class e{scrollService=d(u);scrollInformation={};skills=[];scrollPersentage=0;sectionOpecity=0;cardOutlineBeforeOpecity=0;cardOutlineCurrentOpecity=0;cardOutlineAfterOpecity=0;ngOnChanges(t){t?.scrollInformation&&(this.scrollPersentage=this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation),this.scrollPersentage<=20?this.sectionOpecity=this.setOpacity(0,20):this.sectionOpecity=1,this.cardOutlineBeforeOpecity=this.setOpacity(20,60),this.cardOutlineCurrentOpecity=this.setOpacity(40,80),this.cardOutlineAfterOpecity=this.setOpacity(60,100))}setOpacity(t,n){return this.scrollService.setOpacity(t,n,this.scrollPersentage)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["app-skills"]],inputs:{scrollInformation:"scrollInformation",skills:"skills"},features:[h],decls:8,vars:3,consts:[[1,"bg-dark","w-100","h-100","d-flex","align-items-center",3,"ngStyle"],[1,"container-2","pt-4","mx-auto","d-flex","mh-100","flex-column","position-relative","text-white"],[1,"font-abrilfatface-400-22","flex-shrink-0","px-3","text-center"],[1,"flex-shrink-1","overflow-auto","py-4","py-md-5","px-3","px-sm-4","px-md-5"],[1,"row","row-cols-2","row-cols-lg-3","row-cols-xxl-4","gy-4","gy-md-5","gx-3","gx-sm-4","gx-md-5"],[1,"position-relative","h-100","text-center","p-3","rounded-3","card-inner"],[1,"font-poppins-400-16","text-white"],[1,"mt-2",3,"src","alt"],[1,"position-absolute","top-0","start-0","h-100","w-100","rounded-3","card-outline-before",3,"ngStyle"],[1,"position-absolute","top-0","start-0","h-100","w-100","rounded-3","card-outline-current",3,"ngStyle"],[1,"position-absolute","top-0","start-0","h-100","w-100","rounded-3","card-outline-after",3,"ngStyle"]],template:function(n,i){n&1&&(s(0,"section",0)(1,"div",1)(2,"h2",2),g(3,"Skills"),a(),s(4,"div",3)(5,"ul",4),P(6,le,9,12,"li",null,x),a()()()()),n&2&&(o("ngStyle",l(1,A,i.sectionOpecity)),r(6),_(i.skills))},dependencies:[f,b],styles:[".card-inner[_ngcontent-%COMP%]{background-color:#1e1e1e;transition-duration:1s}.card-inner[_ngcontent-%COMP%]   .card-outline-before[_ngcontent-%COMP%]{box-shadow:0 0 20px 4px #1e90ff;border:3px solid #1e90ff}.card-inner[_ngcontent-%COMP%]   .card-outline-current[_ngcontent-%COMP%]{box-shadow:0 0 20px 4px #32cd32;border:3px solid #32cd32}.card-inner[_ngcontent-%COMP%]   .card-outline-after[_ngcontent-%COMP%]{box-shadow:0 0 20px 4px #ff6f61;border:3px solid #ff6f61}@media (max-width: 768px){.card-inner[_ngcontent-%COMP%]   .card-outline-before[_ngcontent-%COMP%]{box-shadow:0 0 10px 2px #1e90ff}.card-inner[_ngcontent-%COMP%]   .card-outline-current[_ngcontent-%COMP%]{box-shadow:0 0 10px 2px #32cd32}.card-inner[_ngcontent-%COMP%]   .card-outline-after[_ngcontent-%COMP%]{box-shadow:0 0 10px 2px #ff6f61}}"]})};var k=class e{constructor(t){this.userHttpClient=t}getJson(t){return this.userHttpClient.get(`${t}.json`)}static \u0275fac=function(n){return new(n||e)(L(ee))};static \u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})};var te=e=>({opacity:e}),ce=e=>({width:e}),pe=e=>({height:e});function me(e,t){e&1&&w(0)}function ge(e,t){e&1&&w(0)}function de(e,t){e&1&&w(0)}function fe(e,t){e&1&&w(0)}function ue(e,t){e&1&&g(0," Work Experience ")}function he(e,t){e&1&&(g(0," I have over 2 years of experience working at Platform Common Organization. My journey began with an internship from April 11, 2022, to November 30, 2022, and I transitioned to a full-time role on December 1, 2022, continuing to the present. "),p(1,"br")(2,"br"),g(3," I have been part of the Volunteer Management System (VMS) group as a Frontend Angular Web Developer, working on both the user and admin sides of the application. I have been involved in this project since the very beginning. "),p(4,"br")(5,"br"),g(6," This application is used by multiple clients, and we implemented customizations based on their specific requirements. Additionally, the application allows clients to easily make many changes themselves through the admin panel. "))}function Ce(e,t){if(e&1&&(s(0,"div",4)(1,"div",5)(2,"h2",6)(3,"span",7)(4,"span",8),y(5,me,1,0,"ng-container",9),a()(),s(6,"span",10)(7,"span",11),y(8,ge,1,0,"ng-container",9),a()()()(),s(9,"div",12)(10,"p",13)(11,"span",7)(12,"span",14),y(13,de,1,0,"ng-container",9),a()(),s(14,"span",15)(15,"span",16),y(16,fe,1,0,"ng-container",9),a()()(),y(17,ue,1,0,"ng-template",null,0,z)(19,he,7,0,"ng-template",null,1,z),a()()),e&2){let n=B(18),i=B(20),c=C();o("ngStyle",l(7,te,c.contentOpecity)),r(5),o("ngTemplateOutlet",n),r(),o("ngStyle",l(9,ce,c.gradientContentSize)),r(2),o("ngTemplateOutlet",n),r(5),o("ngTemplateOutlet",i),r(),o("ngStyle",l(11,pe,c.gradientContentSize)),r(2),o("ngTemplateOutlet",i)}}var N=class e{scrollService=d(u);scrollInformation={};scrollPersentage=0;sectionOpecity=0;contentOpecity=0;gradientContentSize="0%";ngOnChanges(t){t?.scrollInformation&&(this.scrollPersentage=this.scrollService.calculateAvaiableScrollPercentage(this.scrollInformation),this.scrollPersentage>=40&&this.scrollPersentage<=90&&(this.gradientContentSize=this.setSize(40,90)),this.scrollPersentage>=10&&this.scrollPersentage<=40&&(this.contentOpecity=this.setOpacity(10,40)),this.scrollPersentage<=10?this.sectionOpecity=this.setOpacity(0,10):this.sectionOpecity=1)}setOpacity(t,n){return this.scrollService.setOpacity(t,n,this.scrollPersentage)}setSize(t,n){return`${this.scrollService.setSizeInPersentage(t,n,this.scrollPersentage)}%`}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["app-work-experience"]],inputs:{scrollInformation:"scrollInformation"},features:[h],decls:2,vars:4,consts:[["headingTemplate",""],["textTemplate",""],[1,"bg-dark","w-100","h-100","d-flex","align-items-center",3,"ngStyle"],["class","container-2 pt-4 mx-auto d-flex mh-100 flex-column text-white",3,"ngStyle",4,"ngIf"],[1,"container-2","pt-4","mx-auto","d-flex","mh-100","flex-column","text-white",3,"ngStyle"],[1,"flex-shrink-0","px-3"],[1,"font-abrilfatface-400-22","d-block","mx-auto","position-relative","width-fit-content","heading"],[1,"d-block","normal-text-wrap"],[1,"d-block","text-white","text-nowrap","normal-text"],[4,"ngTemplateOutlet"],[1,"d-block","position-absolute","top-0","start-0","h-100","bg-dark","overflow-hidden","gradient-text-wrap",3,"ngStyle"],[1,"d-block","text-nowrap","gradient-text"],[1,"flex-shrink-1","overflow-auto","mt-4","px-3","px-sm-4","px-md-5","content"],[1,"position-relative","text"],[1,"d-block","text-white","normal-text"],[1,"d-block","position-absolute","top-0","start-0","w-100","bg-dark","overflow-hidden","gradient-text-wrap",3,"ngStyle"],[1,"d-block","gradient-text"]],template:function(n,i){n&1&&(s(0,"section",2),y(1,Ce,21,13,"div",3),a()),n&2&&(o("ngStyle",l(2,te,i.sectionOpecity)),r(),o("ngIf",i.scrollPersentage>10))},dependencies:[f,Q,Z,b],styles:[".heading[_ngcontent-%COMP%]   .gradient-text-wrap[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right,red,orange,#9acd32);background-size:100% 100%;-moz-background-clip:text;-webkit-background-clip:text;background-clip:text;color:transparent}.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .gradient-text-wrap[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom,red,orange,#9acd32);background-size:100% 100%;-moz-background-clip:text;-webkit-background-clip:text;background-clip:text;color:transparent}"]})};var D=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["app-personal-project"]],decls:2,vars:0,template:function(n,i){n&1&&(s(0,"p"),g(1,"personal-project works!"),a())},encapsulation:2})};var be=(e,t)=>({top:e,height:t}),ve=e=>({start:2,end:30,currentPosition:e}),ye=e=>({start:1,end:2,currentPosition:e}),R=e=>({"pointer-events-none":e}),xe=e=>({start:30,end:60,currentPosition:e}),Pe=e=>({start:60,end:100,currentPosition:e}),ie=class e{dataTransferService=d(ne);apisService=d(k);hostElement;totalScrollHeight=0;scrollInPersentage=0;headerHeight=0;windowInnerHeight=0;skills=[];personalProject=[];constructor(t){this.headerHeight=this.dataTransferService.header()?.height||0,this.hostElement=t.nativeElement,$({write:()=>{},read:()=>{setTimeout(()=>{this.getScrollPersentage(),this.totalScrollHeight=(this.hostElement?.offsetHeight||0)-this.windowInnerHeight},0)}})}ngOnInit(){this.windowInnerHeight=window.innerHeight,this.getDataByApi()}onScroll(){this.getScrollPersentage()}getScrollPersentage(){this.windowInnerHeight=window.innerHeight;let t=(this.hostElement?.offsetHeight||0)-this.windowInnerHeight+this.headerHeight,n=window.scrollY;this.scrollInPersentage=n/t*100,console.log("scrollInPersentage",this.scrollInPersentage)}getDataByApi(){let t=this.apisService.getJson("json/skills"),n=this.apisService.getJson("json/personal-project");W({skillApi:t,personalProjectApi:n}).subscribe({next:c=>{console.log("skills",c),this.skills=c.skillApi,this.personalProject=c.personalProjectApi},error:c=>{console.error("error",c)}})}static \u0275fac=function(n){return new(n||e)(V(Y))};static \u0275cmp=m({type:e,selectors:[["app-home"]],hostBindings:function(n,i){n&1&&K("scroll",function(){return i.onScroll()},!1,q)},features:[X([k])],decls:6,vars:26,consts:[[1,"position-sticky","bg-light",3,"ngStyle"],[1,"d-block","position-absolute","w-100","h-100","top-0","start-0",3,"scrollInformation"],[1,"d-block","position-absolute","w-100","h-100","top-0","start-0",3,"scrollInformation","ngClass"],[1,"d-block","position-absolute","w-100","h-100","top-0","start-0",3,"scrollInformation","skills","ngClass"]],template:function(n,i){n&1&&(s(0,"div",0),p(1,"app-about-me",1)(2,"app-banner",2)(3,"app-skills",3)(4,"app-work-experience",2)(5,"app-personal-project"),a()),n&2&&(o("ngStyle",G(9,be,i.headerHeight+"px","calc("+i.windowInnerHeight+"px - "+i.headerHeight+"px)")),r(),o("scrollInformation",l(12,ve,i.scrollInPersentage)),r(),o("scrollInformation",l(14,ye,i.scrollInPersentage))("ngClass",l(16,R,i.scrollInPersentage>5)),r(),o("scrollInformation",l(18,xe,i.scrollInPersentage))("skills",i.skills)("ngClass",l(20,R,i.scrollInPersentage<30||i.scrollInPersentage>60)),r(),o("scrollInformation",l(22,Pe,i.scrollInPersentage))("ngClass",l(24,R,i.scrollInPersentage<60||i.scrollInPersentage>100)))},dependencies:[f,O,b,E,T,H,N,D],styles:["[_nghost-%COMP%]{height:1000vh;display:block;position:relative}"]})};export{ie as HomeComponent};
