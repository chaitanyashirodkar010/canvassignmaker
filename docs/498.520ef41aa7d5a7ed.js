"use strict";(self.webpackChunksignmaker=self.webpackChunksignmaker||[]).push([[498],{2498:(P,C,s)=>{s.r(C),s.d(C,{ComponentsModuleModule:()=>u});var h=s(6895),b=s(6264),t=s(4650);class p{constructor(){this.clickEvent=new t.vpe}selectedProduct(e){this.clickEvent.emit(e)}}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-products"]],outputs:{clickEvent:"clickEvent"},decls:5,vars:0,consts:[[1,"d-flex","align-items-center",3,"click"],["src","https://storage.googleapis.com/signmonkey-148101.appspot.com/2020/categories/channel-letters-and-logos.jpg","width","180"],[1,"mx-3"],["aria-hidden","true",1,"fa","fa-chevron-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return n.selectedProduct("LLL")}),t._UZ(1,"img",1),t.TgZ(2,"div",2),t._uU(3,"Lit Letters logos"),t.qZA(),t._UZ(4,"i",3),t.qZA())}});var i=s(4006),k=s(4999),d=s(939),v=s(6087);function Z(o,e){1&o&&t._uU(0,"Done")}class m{constructor(e){this._formBuilder=e,this.data={value:"Naik",font:"sans-serif",size:"600px",color:"red"},this.bckEvt=new t.vpe,this.ValueChange=new t.vpe}ngOnInit(){this.firstFormGroup=this._formBuilder.group({firstCtrl:["",i.kI.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",i.kI.required]}),this.isLinear=!1,this.edValueKeyPress()}exit(){this.bckEvt.emit(!0)}fontSelect(e){this.data.font=e,this.ValueChange.emit(this.data)}sizeSelect(e){this.data.size=e,this.ValueChange.emit(this.data)}colorSelect(e){this.data.color=e,this.ValueChange.emit(this.data)}edValueKeyPress(){this.firstFormGroup.controls.firstCtrl.valueChanges.pipe((0,k.b)(500)).subscribe(e=>{this.data.value=e,this.ValueChange.emit(this.data)})}}m.\u0275fac=function(e){return new(e||m)(t.Y36(i.qu))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-product-details"]],outputs:{bckEvt:"bckEvt",ValueChange:"ValueChange"},decls:67,vars:3,consts:[["stepper",""],[3,"stepControl"],["mat-button","","matStepperPrevious","",3,"click"],["mat-button","","matStepperNext",""],["role","search",1,"d-flex","mt-3",3,"formGroup"],["id","edValue","placeholder","Enter sign letters","type","text","formControlName","firstCtrl",1,"form-control","me-2"],["mat-button","","matStepperPrevious",""],["mat-list-item","",3,"click"],["src","../../../assets/images/standard.png","alt",""],["src","../../../assets/images/serifbold.png","alt",""],["src","../../../assets/images/brush.png","alt",""],["src","../../../assets/images/freestyle.png","alt",""],["src","../../../assets/images/standard-condemed.png","alt",""],["src","../../../assets/images/standard-round.png","alt",""],["src","../../../assets/images/boxer.png","alt",""],[1,"d-flex"],["mat-list-item","",1,"green","color-box",2,"background-color","green",3,"click"],["mat-list-item","",1,"red","color-box",2,"background-color","red",3,"click"],["mat-list-item","",1,"blue","color-box",2,"background-color","blue",3,"click"],["mat-list-item","",1,"orange","color-box",2,"background-color","orange",3,"click"],["mat-list-item","",1,"yellow","color-box",2,"background-color","yellow",3,"click"],["mat-list-item","",1,"purple","color-box",2,"background-color","purple",3,"click"],["matStepLabel",""],["mat-button","",1,"Reset",3,"click"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"mat-stepper",null,0)(2,"mat-step",1)(3,"button",2),t.NdJ("click",function(){return n.exit()}),t._uU(4,"Back"),t.qZA(),t.TgZ(5,"button",3),t._uU(6,"Next"),t.qZA(),t.TgZ(7,"form",4),t._UZ(8,"input",5),t.qZA()(),t.TgZ(9,"mat-step",1)(10,"button",6),t._uU(11,"Back"),t.qZA(),t.TgZ(12,"button",3),t._uU(13,"Next"),t.qZA(),t.TgZ(14,"h1"),t._uU(15,"Choose Type font"),t.qZA(),t.TgZ(16,"mat-action-list")(17,"button",7),t.NdJ("click",function(){return n.fontSelect("Tahoma")}),t._UZ(18,"img",8),t._uU(19," Standard bold"),t.qZA(),t.TgZ(20,"button",7),t.NdJ("click",function(){return n.fontSelect("Serif")}),t._UZ(21,"img",9),t._uU(22," Serif Bold"),t.qZA(),t.TgZ(23,"button",7),t.NdJ("click",function(){return n.fontSelect("Brush Script MT")}),t._UZ(24,"img",10),t._uU(25," Brush"),t.qZA(),t.TgZ(26,"button",7),t.NdJ("click",function(){return n.fontSelect("Freehand")}),t._UZ(27,"img",11),t._uU(28," Free Style"),t.qZA(),t.TgZ(29,"button",7),t.NdJ("click",function(){return n.fontSelect("Oswald")}),t._UZ(30,"img",12),t._uU(31," Standard Condensed"),t.qZA(),t.TgZ(32,"button",7),t.NdJ("click",function(){return n.fontSelect("Varela Round ")}),t._UZ(33,"img",13),t._uU(34," Standard Round"),t.qZA(),t.TgZ(35,"button",7),t.NdJ("click",function(){return n.fontSelect("Courier New")}),t._UZ(36,"img",14),t._uU(37," Boxer"),t.qZA()()(),t.TgZ(38,"mat-step")(39,"button",6),t._uU(40,"Back"),t.qZA(),t.TgZ(41,"button",3),t._uU(42,"Next"),t.qZA(),t.TgZ(43,"h1"),t._uU(44,"Choose Type color"),t.qZA(),t.TgZ(45,"mat-action-list",15)(46,"button",16),t.NdJ("click",function(){return n.colorSelect("green")}),t._uU(47,"green"),t.qZA(),t.TgZ(48,"button",17),t.NdJ("click",function(){return n.colorSelect("red")}),t._uU(49,"red"),t.qZA(),t.TgZ(50,"button",18),t.NdJ("click",function(){return n.colorSelect("blue")}),t._uU(51,"blue"),t.qZA(),t.TgZ(52,"button",19),t.NdJ("click",function(){return n.colorSelect("orange")}),t._uU(53,"orange"),t.qZA(),t.TgZ(54,"button",20),t.NdJ("click",function(){return n.colorSelect("yellow")}),t._uU(55,"yellow"),t.qZA(),t.TgZ(56,"button",21),t.NdJ("click",function(){return n.colorSelect("purple")}),t._uU(57,"purple"),t.qZA()()(),t.TgZ(58,"mat-step"),t.YNc(59,Z,1,0,"ng-template",22),t.TgZ(60,"p"),t._uU(61,"You are now done."),t.qZA(),t.TgZ(62,"div")(63,"button",6),t._uU(64,"Back"),t.qZA(),t.TgZ(65,"button",23),t.NdJ("click",function(){t.CHM(r);const c=t.MAs(1);return t.KtG(c.reset())}),t._uU(66,"Reset"),t.qZA()()()()}2&e&&(t.xp6(2),t.Q6J("stepControl",n.firstFormGroup),t.xp6(5),t.Q6J("formGroup",n.firstFormGroup),t.xp6(2),t.Q6J("stepControl",n.secondFormGroup))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.C0,d.VY,d.Vq,d.Ic,d.fd,v.lT,v.Tg],styles:[".mat-horizontal-stepper-header-container{display:none!important}  .mat-pseudo-checkbox{display:none!important}h1[_ngcontent-%COMP%]{margin:20px 0 10px;padding:8px;background-color:#eee;text-align:center;font-size:14px;font-weight:400}.color-box[_ngcontent-%COMP%]{height:25px!important;width:25px;background-color:red;margin:0 10px 0 0}"]});const T=["prdDtls"];function x(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"app-products",11),t.NdJ("clickEvent",function(a){t.CHM(n);const c=t.oxw();return t.KtG(c.products(a))}),t.qZA()}}function S(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"app-product-details",12),t.NdJ("bckEvt",function(a){t.CHM(n);const c=t.oxw();return t.KtG(c.prodDtls(a))})("ValueChange",function(a){t.CHM(n);const c=t.oxw();return t.KtG(c.ValueChange1(a))}),t.qZA()}}class g{constructor(){this.selectedProduct="",this.ValueChange=new t.vpe}products(e){this.selectedProduct=e}prodDtls(e){this.selectedProduct=e?"":this.selectedProduct}ValueChange1(e){this.ValueChange.emit(e)}}g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-signmaker-nav-bar"]],viewQuery:function(e,n){if(1&e&&t.Gf(T,5),2&e){let r;t.iGM(r=t.CRH())&&(n.prdDtls=r.first)}},outputs:{ValueChange:"ValueChange"},decls:13,vars:2,consts:[[1,"navbar","bg-body-tertiary"],[1,"container-fluid"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasNavbar","aria-controls","offcanvasNavbar",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["tabindex","-1","id","offcanvasNavbar","aria-labelledby","offcanvasNavbarLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasNavbarLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close"],[1,"offcanvas-body"],[3,"clickEvent",4,"ngIf","ngIfElse"],["prd",""],[3,"clickEvent"],[3,"bckEvt","ValueChange"]],template:function(e,n){if(1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),t._UZ(3,"div",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"h5",6),t._uU(7,"Products"),t.qZA(),t._UZ(8,"button",7),t.qZA(),t.TgZ(9,"div",8),t.YNc(10,x,1,0,"app-products",9),t.YNc(11,S,1,0,"ng-template",null,10,t.W1O),t.qZA()()()()),2&e){const r=t.MAs(12);t.xp6(10),t.Q6J("ngIf",""==n.selectedProduct)("ngIfElse",r)}},dependencies:[h.O5,p,m]});class _{ngOnInit(){this.c=document.getElementById("exampleCanvas"),this.ctx=this.c.getContext("2d"),this.c.width=3e3,this.c.height=window.innerHeight,this.draw({value:"Naik",font:"Tahoma",size:"600px",color:"red"}),console.log(window.innerHeight)}inputChange(e){this.draw(e)}draw(e){this.ctx.clearRect(0,0,this.c.width,this.c.height),this.ctx.font=`bold  ${e.size}  ${e.font}`,this.ctx.shadowColor="black",this.ctx.shadowBlur=6,this.ctx.shadowOffsetX=20,this.ctx.shadowOffsetY=20,this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=20,this.ctx.strokeText(e.value,900,540),this.ctx.fillStyle=e.color,this.ctx.fillText(e.value,900,540)}}_.\u0275fac=function(e){return new(e||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-design"]],decls:5,vars:0,consts:[[1,"banner"],["src","../assets/images/banner.webp","alt","",1,"w-100","d-block"],[1,"work-area"],["id","exampleCanvas","height","200","width","600"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"canvas",3),t._uU(4," Your browser doesn\u2019t currently support HTML5 Canvas. Please check caniuse.com/#feat=canvas for information on browser support for canvas. "),t.qZA()()())}});const N=["design"];class f{valueChange(e){this.design.inputChange(e)}}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-signmaker"]],viewQuery:function(e,n){if(1&e&&t.Gf(N,5),2&e){let r;t.iGM(r=t.CRH())&&(n.design=r.first)}},decls:4,vars:0,consts:[[1,"banner","position-relative"],[3,"ValueChange"],["design",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"app-signmaker-nav-bar",1),t.NdJ("ValueChange",function(a){return n.valueChange(a)}),t.qZA(),t._UZ(2,"app-design",null,2),t.qZA())},dependencies:[g,_]});const y=[{path:"",component:f}];class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[h.ez,b.Bz.forChild(y),b.Bz]});var U=s(9945),A=s(9270);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[h.ez,l,b.Bz,A.I,U.x]})}}]);