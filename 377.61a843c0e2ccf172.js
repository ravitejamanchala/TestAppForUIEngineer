"use strict";(self.webpackChunkPowwr=self.webpackChunkPowwr||[]).push([[377],{2377:(U,S,i)=>{i.r(S),i.d(S,{PagesRoutes:()=>W});var f=i(2102),k=i(9631),u=i(9417),c=i(177),t=i(3953),_=i(487);const F=e=>({backgroundColor:e});let M=(()=>{class e{constructor(n){this.themeService=n,this.defaultTheme={background:"#e0e0e0",textPrimary:"#2a3447",cardshadow:"#e0e0e0",darkcardshadow:"#666666",white:"#ffffff",primaryButtonColor:"#2a3447",logo:"https://accounts.powwr.com/assets/powwr-logo-Unbranded.svg"},this.theme={...this.defaultTheme}}ngOnInit(){this.loadThemeFromLocalStorage(),this.applyTheme(this.theme)}loadThemeFromLocalStorage(){Object.keys(this.defaultTheme).forEach(n=>{const a=localStorage.getItem(n);a&&(this.theme[n]=a)})}applyTheme(n){const a=document.documentElement;Object.keys(n).forEach(o=>{"logo"!==o?a.style.setProperty(`--${o}`,n[o]):this.themeService.updateLogo(n.logo)})}applyChanges(){Object.keys(this.theme).forEach(n=>{localStorage.setItem(n,this.theme[n])}),this.applyTheme(this.theme)}resetTheme(){this.theme={...this.defaultTheme},Object.keys(this.defaultTheme).forEach(n=>{localStorage.removeItem(n)}),this.applyTheme(this.defaultTheme)}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(_.F))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-task1"]],standalone:!0,features:[t.aNF],decls:46,vars:11,consts:[[1,"theme-settings"],["appearance","fill"],["matInput","","type","text",3,"ngModelChange","ngModel"],[1,"logo-preview"],["alt","Logo Preview",3,"src"],["matInput","","type","color",3,"ngModelChange","ngModel"],[1,"button-group"],["mat-raised-button","",1,"apply-button",3,"click","ngStyle"],["mat-raised-button","",1,"reset-button",3,"click"]],template:function(a,o){1&a&&(t.j41(0,"div",0)(1,"h1"),t.EFF(2,"Branding"),t.k0s(),t.j41(3,"h3"),t.EFF(4,"Logo"),t.k0s(),t.j41(5,"mat-form-field",1)(6,"mat-label"),t.EFF(7,"Logo Path"),t.k0s(),t.j41(8,"input",2),t.mxI("ngModelChange",function(s){return t.DH7(o.theme.logo,s)||(o.theme.logo=s),s}),t.k0s()(),t.j41(9,"div",3)(10,"h3"),t.EFF(11,"Logo Preview"),t.k0s(),t.nrm(12,"img",4),t.k0s(),t.j41(13,"h3"),t.EFF(14,"Primary Colors"),t.k0s(),t.j41(15,"mat-form-field",1)(16,"mat-label"),t.EFF(17,"Background Color"),t.k0s(),t.j41(18,"input",5),t.mxI("ngModelChange",function(s){return t.DH7(o.theme.background,s)||(o.theme.background=s),s}),t.k0s()(),t.j41(19,"mat-form-field",1)(20,"mat-label"),t.EFF(21,"Primary Text Color"),t.k0s(),t.j41(22,"input",5),t.mxI("ngModelChange",function(s){return t.DH7(o.theme.textPrimary,s)||(o.theme.textPrimary=s),s}),t.k0s()(),t.j41(23,"mat-form-field",1)(24,"mat-label"),t.EFF(25,"Primary Button Color"),t.k0s(),t.j41(26,"input",5),t.mxI("ngModelChange",function(s){return t.DH7(o.theme.primaryButtonColor,s)||(o.theme.primaryButtonColor=s),s}),t.k0s()(),t.j41(27,"h3"),t.EFF(28,"Secondary Colors"),t.k0s(),t.j41(29,"mat-form-field",1)(30,"mat-label"),t.EFF(31,"Card Shadow"),t.k0s(),t.j41(32,"input",5),t.mxI("ngModelChange",function(s){return t.DH7(o.theme.cardshadow,s)||(o.theme.cardshadow=s),s}),t.k0s()(),t.j41(33,"mat-form-field",1)(34,"mat-label"),t.EFF(35,"Dark Card Shadow"),t.k0s(),t.j41(36,"input",5),t.mxI("ngModelChange",function(s){return t.DH7(o.theme.darkcardshadow,s)||(o.theme.darkcardshadow=s),s}),t.k0s()(),t.j41(37,"mat-form-field",1)(38,"mat-label"),t.EFF(39,"White"),t.k0s(),t.j41(40,"input",5),t.mxI("ngModelChange",function(s){return t.DH7(o.theme.white,s)||(o.theme.white=s),s}),t.k0s()(),t.j41(41,"div",6)(42,"button",7),t.bIt("click",function(){return o.applyChanges()}),t.EFF(43," Apply "),t.k0s(),t.j41(44,"button",8),t.bIt("click",function(){return o.resetTheme()}),t.EFF(45," Reset "),t.k0s()()()),2&a&&(t.R7$(8),t.R50("ngModel",o.theme.logo),t.R7$(4),t.Y8G("src",o.theme.logo,t.B4B),t.R7$(6),t.R50("ngModel",o.theme.background),t.R7$(4),t.R50("ngModel",o.theme.textPrimary),t.R7$(4),t.R50("ngModel",o.theme.primaryButtonColor),t.R7$(6),t.R50("ngModel",o.theme.cardshadow),t.R7$(4),t.R50("ngModel",o.theme.darkcardshadow),t.R7$(4),t.R50("ngModel",o.theme.white),t.R7$(2),t.Y8G("ngStyle",t.eq3(9,F,o.theme.primaryButtonColor)))},dependencies:[f.RG,f.rl,f.nJ,k.fS,k.fg,u.YN,u.me,u.BC,u.vS,c.B3],styles:[".theme-settings[_ngcontent-%COMP%]{background-color:var(--white);padding:24px;border-radius:8px}.theme-settings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:16px;font-size:20px;font-weight:600}.theme-settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:16px}.theme-settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.theme-settings[_ngcontent-%COMP%]   .logo-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:var(--white);border:1px solid var(--cardshadow);padding:8px;max-width:250px;height:auto}.button-group[_ngcontent-%COMP%]{display:flex;gap:10px}.apply-button[_ngcontent-%COMP%]{background:var(--textPrimary);border:none;border-radius:4px;font-size:14px;color:var(--white)!important;padding:16px!important;height:40px;display:flex;align-items:center;cursor:pointer}.apply-button[_ngcontent-%COMP%]:hover{opacity:.9}.apply-button[_ngcontent-%COMP%]   .mdc-button__label[_ngcontent-%COMP%]{color:var(--white)!important}"]})}return e})();var T=i(5762),l=i(5596);let P=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-task2"]],standalone:!0,features:[t.aNF],decls:6,vars:0,consts:[[1,"cardWithShadow"],[1,"mat-body-1"]],template:function(a,o){1&a&&(t.j41(0,"mat-card",0)(1,"mat-card-content")(2,"mat-card-title"),t.EFF(3,"Task 2"),t.k0s(),t.j41(4,"mat-card-subtitle",1),t.EFF(5,"Please follow the instructions for the Task 2 on the document sent to you to implement this task."),t.k0s()()())},dependencies:[T.G,l.RN,l.m2,l.Lc,l.dh],encapsulation:2})}return e})();var m=i(9159),C=i(6695),p=i(2042),g=i(9115),h=i(9213),b=i(8834),w=i(7673);let v=(()=>{class e{constructor(){this.DEALS_DATA=[{created:"09 Sep 2024",dueDate:"16 Sep 2024",status:"Submitted",customer:"Albion Innovations",meters:23,quotes:0},{created:"09 Sep 2024",dueDate:"16 Sep 2024",status:"Submitted",customer:"Thames Solutions",meters:253,quotes:0},{created:"09 Sep 2024",dueDate:"16 Sep 2024",status:"Submitted",customer:"Britannia Enterprises",meters:177,quotes:0},{created:"06 Sep 2024",dueDate:"13 Sep 2024",status:"Submitted",customer:"Sterling Ventures",meters:98,quotes:0},{created:"06 Sep 2024",dueDate:"13 Sep 2024",status:"Negotiation",customer:"Highland Tech",meters:204,quotes:0},{created:"06 Sep 2024",dueDate:"13 Sep 2024",status:"Negotiation",customer:"Windsor Industries",meters:43,quotes:2},{created:"05 Sep 2024",dueDate:"12 Sep 2024",status:"Negotiation",customer:"Coventry Creative",meters:41,quotes:4},{created:"05 Sep 2024",dueDate:"12 Sep 2024",status:"Negotiation",customer:"Regent Financial",meters:211,quotes:6},{created:"04 Sep 2024",dueDate:"10 Sep 2024",status:"Negotiation",customer:"Midlands Manufacturing",meters:22,quotes:5},{created:"03 Sep 2024",dueDate:"09 Sep 2024",status:"Closed Won",customer:"Kensington Consulting",meters:59,quotes:8},{created:"10 Sep 2024",dueDate:"17 Sep 2024",status:"Submitted",customer:"Albion Innovations",meters:25,quotes:0},{created:"10 Sep 2024",dueDate:"17 Sep 2024",status:"Submitted",customer:"Thames Solutions",meters:255,quotes:0},{created:"10 Sep 2024",dueDate:"17 Sep 2024",status:"Submitted",customer:"Britannia Enterprises",meters:179,quotes:0},{created:"07 Sep 2024",dueDate:"14 Sep 2024",status:"Submitted",customer:"Sterling Ventures",meters:100,quotes:0},{created:"07 Sep 2024",dueDate:"14 Sep 2024",status:"Negotiation",customer:"Highland Tech",meters:206,quotes:0},{created:"07 Sep 2024",dueDate:"14 Sep 2024",status:"Negotiation",customer:"Windsor Industries",meters:45,quotes:2},{created:"06 Sep 2024",dueDate:"13 Sep 2024",status:"Negotiation",customer:"Coventry Creative",meters:43,quotes:4},{created:"06 Sep 2024",dueDate:"13 Sep 2024",status:"Negotiation",customer:"Regent Financial",meters:213,quotes:6},{created:"05 Sep 2024",dueDate:"11 Sep 2024",status:"Negotiation",customer:"Midlands Manufacturing",meters:24,quotes:5},{created:"04 Sep 2024",dueDate:"10 Sep 2024",status:"Closed Won",customer:"Kensington Consulting",meters:61,quotes:8},{created:"11 Sep 2024",dueDate:"18 Sep 2024",status:"Submitted",customer:"Albion Innovations",meters:27,quotes:0},{created:"11 Sep 2024",dueDate:"18 Sep 2024",status:"Submitted",customer:"Thames Solutions",meters:257,quotes:0},{created:"11 Sep 2024",dueDate:"18 Sep 2024",status:"Submitted",customer:"Britannia Enterprises",meters:181,quotes:0},{created:"08 Sep 2024",dueDate:"15 Sep 2024",status:"Submitted",customer:"Sterling Ventures",meters:102,quotes:0},{created:"08 Sep 2024",dueDate:"15 Sep 2024",status:"Negotiation",customer:"Highland Tech",meters:208,quotes:0},{created:"08 Sep 2024",dueDate:"15 Sep 2024",status:"Negotiation",customer:"Windsor Industries",meters:47,quotes:2},{created:"07 Sep 2024",dueDate:"14 Sep 2024",status:"Negotiation",customer:"Coventry Creative",meters:45,quotes:4},{created:"07 Sep 2024",dueDate:"14 Sep 2024",status:"Negotiation",customer:"Regent Financial",meters:215,quotes:6},{created:"06 Sep 2024",dueDate:"12 Sep 2024",status:"Negotiation",customer:"Midlands Manufacturing",meters:26,quotes:5},{created:"05 Sep 2024",dueDate:"11 Sep 2024",status:"Closed Won",customer:"Kensington Consulting",meters:63,quotes:8},{created:"12 Sep 2024",dueDate:"19 Sep 2024",status:"Submitted",customer:"Albion Innovations",meters:29,quotes:0},{created:"12 Sep 2024",dueDate:"19 Sep 2024",status:"Submitted",customer:"Thames Solutions",meters:259,quotes:0},{created:"12 Sep 2024",dueDate:"19 Sep 2024",status:"Submitted",customer:"Britannia Enterprises",meters:183,quotes:0},{created:"09 Sep 2024",dueDate:"16 Sep 2024",status:"Submitted",customer:"Sterling Ventures",meters:104,quotes:0},{created:"09 Sep 2024",dueDate:"16 Sep 2024",status:"Negotiation",customer:"Highland Tech",meters:210,quotes:0},{created:"09 Sep 2024",dueDate:"16 Sep 2024",status:"Negotiation",customer:"Windsor Industries",meters:49,quotes:2},{created:"08 Sep 2024",dueDate:"15 Sep 2024",status:"Negotiation",customer:"Coventry Creative",meters:47,quotes:4},{created:"08 Sep 2024",dueDate:"15 Sep 2024",status:"Negotiation",customer:"Regent Financial",meters:217,quotes:6},{created:"07 Sep 2024",dueDate:"13 Sep 2024",status:"Negotiation",customer:"Midlands Manufacturing",meters:28,quotes:5},{created:"06 Sep 2024",dueDate:"12 Sep 2024",status:"Closed Won",customer:"Kensington Consulting",meters:65,quotes:8}]}getDeals(){return(0,w.of)(this.DEALS_DATA)}static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const D=()=>[5,10,20];function y(e,r){1&e&&(t.j41(0,"th",24)(1,"mat-icon"),t.EFF(2,"filter_list"),t.k0s(),t.EFF(3," Created "),t.k0s())}function x(e,r){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=r.$implicit;t.R7$(),t.JRh(n.created)}}function O(e,r){1&e&&(t.j41(0,"th",24)(1,"mat-icon"),t.EFF(2,"filter_list"),t.k0s(),t.EFF(3," Due date "),t.k0s())}function E(e,r){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=r.$implicit;t.R7$(),t.JRh(n.dueDate)}}function j(e,r){1&e&&(t.j41(0,"th",24)(1,"mat-icon"),t.EFF(2,"filter_list"),t.k0s(),t.EFF(3," Status "),t.k0s())}function R(e,r){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=r.$implicit;t.R7$(),t.JRh(n.status)}}function N(e,r){1&e&&(t.j41(0,"th",24)(1,"mat-icon"),t.EFF(2,"filter_list"),t.k0s(),t.EFF(3," Customer "),t.k0s())}function I(e,r){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=r.$implicit;t.R7$(),t.JRh(n.customer)}}function q(e,r){1&e&&(t.j41(0,"th",24)(1,"mat-icon"),t.EFF(2,"filter_list"),t.k0s(),t.EFF(3," Meters "),t.k0s())}function B(e,r){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=r.$implicit;t.R7$(),t.JRh(n.meters)}}function $(e,r){1&e&&(t.j41(0,"th",24)(1,"mat-icon"),t.EFF(2,"filter_list"),t.k0s(),t.EFF(3," Quotes "),t.k0s())}function G(e,r){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=r.$implicit;t.R7$(),t.JRh(n.quotes)}}function H(e,r){1&e&&t.nrm(0,"tr",26)}function z(e,r){1&e&&t.nrm(0,"tr",27)}let V=(()=>{class e{constructor(n){this.dealDataService=n,this.displayedColumns=["created","dueDate","status","customer","meters","quotes"],this.dataSource=new m.I6([])}ngAfterViewInit(){this.dealDataService.getDeals().subscribe(n=>{this.dataSource.data=n,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(v))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-task3"]],viewQuery:function(a,o){if(1&a&&(t.GBs(C.iy,5),t.GBs(p.B4,5)),2&a){let d;t.mGM(d=t.lsd())&&(o.paginator=d.first),t.mGM(d=t.lsd())&&(o.sort=d.first)}},standalone:!0,features:[t.aNF],decls:42,vars:8,consts:[["tenderMenu","matMenu"],[1,"page-container"],[1,"content-container"],[1,"page-header"],[1,"page-title"],["role","banner",1,"top-bar"],["aria-label","Primary",1,"header-actions"],["mat-button","","aria-label","Open new tender menu",1,"new-tender-btn",3,"matMenuTriggerFor"],[1,"d-flex"],["mat-menu-item",""],[1,"table-card"],["mat-table","","matSort","",1,"deals-table",3,"dataSource"],["matColumnDef","created"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","dueDate"],["matColumnDef","status"],["matColumnDef","customer"],["matColumnDef","meters"],["matColumnDef","quotes"],["mat-header-row","","class","header-row",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"paginator-container"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row","",1,"header-row"],["mat-row",""]],template:function(a,o){if(1&a&&(t.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2",4),t.EFF(4,"My deals"),t.k0s(),t.j41(5,"header",5)(6,"nav",6)(7,"button",7)(8,"span",8),t.EFF(9,"New tender "),t.j41(10,"mat-icon"),t.EFF(11,"expand_more"),t.k0s()()(),t.j41(12,"mat-menu",null,0)(14,"button",9),t.EFF(15,"Electricity"),t.k0s(),t.j41(16,"button",9),t.EFF(17,"Gas"),t.k0s()()()()(),t.j41(18,"div",10)(19,"table",11),t.qex(20,12),t.DNE(21,y,4,0,"th",13)(22,x,2,1,"td",14),t.bVm(),t.qex(23,15),t.DNE(24,O,4,0,"th",13)(25,E,2,1,"td",14),t.bVm(),t.qex(26,16),t.DNE(27,j,4,0,"th",13)(28,R,2,1,"td",14),t.bVm(),t.qex(29,17),t.DNE(30,N,4,0,"th",13)(31,I,2,1,"td",14),t.bVm(),t.qex(32,18),t.DNE(33,q,4,0,"th",13)(34,B,2,1,"td",14),t.bVm(),t.qex(35,19),t.DNE(36,$,4,0,"th",13)(37,G,2,1,"td",14),t.bVm(),t.DNE(38,H,1,0,"tr",20)(39,z,1,0,"tr",21),t.k0s()(),t.j41(40,"div",22),t.nrm(41,"mat-paginator",23),t.k0s()()()),2&a){const d=t.sdS(13);t.R7$(7),t.Y8G("matMenuTriggerFor",d),t.R7$(12),t.Y8G("dataSource",o.dataSource),t.R7$(19),t.Y8G("matHeaderRowDef",o.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",o.displayedColumns),t.R7$(2),t.Y8G("length",40)("pageSize",10)("pageSizeOptions",t.lJ4(7,D))}},dependencies:[c.MD,m.tP,m.Zl,m.tL,m.ji,m.cC,m.YV,m.iL,m.KS,m.$R,m.YZ,m.NB,C.Ou,C.iy,p.NQ,p.B4,p.aE,g.Cn,g.kk,g.fb,g.Cp,h.m_,h.An,b.Hl,b.$z],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}[_ngcontent-%COMP%]:root{--background: #e0e0e0;--textPrimary: #2a3447;--cardshadow: #e0e0e0;--darkcardshadow: #666666;--white: #ffffff;--primaryButtonColor: #2a3447}.page-container[_ngcontent-%COMP%]{background:var(--background);min-height:100vh;font-weight:500}.page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.page-title[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin:0;color:var(--textPrimary)}.top-bar[_ngcontent-%COMP%], .header-actions[_ngcontent-%COMP%]{display:flex;align-items:center}.new-tender-btn[_ngcontent-%COMP%]{background:var(--primaryButtonColor);border:none;border-radius:4px;font-size:14px;color:var(--white)!important;padding:16px!important;height:40px;display:flex;align-items:center;cursor:pointer}.new-tender-btn[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%]{margin-left:4px;color:var(--white)}.new-tender-btn[_ngcontent-%COMP%]:hover{opacity:.9}.new-tender-btn[_ngcontent-%COMP%]   .mdc-button__label[_ngcontent-%COMP%]{color:var(--white)!important}.table-card[_ngcontent-%COMP%]{width:100%;overflow-x:auto}[_nghost-%COMP%]     .deals-table{max-width:100%;border-spacing:0;border-collapse:collapse;overflow:hidden}[_nghost-%COMP%]     .deals-table th{font-weight:500;text-align:left;vertical-align:middle}[_nghost-%COMP%]     .deals-table td, [_nghost-%COMP%]     .deals-table th{padding-left:30px;border-bottom:2px solid var(--cardshadow);white-space:nowrap;font-size:14px;color:var(--textPrimary);background:var(--white)}[_nghost-%COMP%]     .deals-table thead th{border-bottom:2px solid var(--darkcardshadow);padding-left:5px}[_nghost-%COMP%]     .deals-table thead th mat-icon{font-size:14px;margin:12px 5px 5px 0}mat-paginator.mat-mdc-paginator[_ngcontent-%COMP%]{background-color:transparent}  mat-paginator .mat-mdc-paginator-container{justify-content:space-between;padding:0;font-size:14px}  mat-paginator .mat-mdc-form-field .mdc-notched-outline,   mat-paginator .mat-mdc-form-field .mdc-notched-outline__leading,   mat-paginator .mat-mdc-form-field .mdc-notched-outline__notch,   mat-paginator .mat-mdc-form-field .mdc-notched-outline__trailing{border:none!important}@media (max-width: 768px){  mat-paginator .mat-mdc-paginator-container{justify-content:space-around}}"]})}return e})(),A=(()=>{class e{constructor(){this.sections=[{title:"Customer information",description:"Enter the basic information about the client.",status:"Completed"},{title:"Meter lookup & usage data",description:"Lookup for meter information and upload usage data.",status:"Pending"},{title:"Suppliers and products",description:"Select suppliers, products, and terms.",status:"Pending"},{title:"Documents",description:"Attach documents to the tender, like contract and terms of service.",status:"Pending"},{title:"Review and submit",description:"Review all the information, add a custom message, and submit the tender.",status:"Pending"}]}getSections(){return this.sections}static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const Y=(e,r,n)=>({success:e,inprogess:r,pending:n});function L(e,r){if(1&e&&(t.j41(0,"div",8)(1,"span",9)(2,"mat-icon",10),t.EFF(3),t.k0s(),t.EFF(4),t.k0s()()),2&e){const n=t.XpG().$implicit,a=t.XpG();t.R7$(),t.Y8G("ngClass",t.sMw(3,Y,"Completed"===n.status,"In Progress"===n.status,"Pending"===n.status)),t.R7$(2),t.SpI(" ",a.getStatusIcon(n.status)," "),t.R7$(),t.SpI(" ",n.status," ")}}function J(e,r){if(1&e&&(t.j41(0,"div",3),t.DNE(1,L,5,7,"div",4),t.j41(2,"div",5)(3,"h3"),t.EFF(4),t.k0s(),t.j41(5,"div",6)(6,"p"),t.EFF(7),t.k0s(),t.j41(8,"div",7)(9,"mat-icon"),t.EFF(10,"arrow_forward"),t.k0s()()()()()),2&e){const n=r.$implicit;t.R7$(),t.Y8G("ngIf","Review and submit"!==n.title),t.R7$(3),t.JRh(n.title),t.R7$(3),t.JRh(n.description)}}const W=[{path:"task1",component:M,data:{title:"Task 1"}},{path:"task2",component:P,data:{title:"Task 2"}},{path:"task3",component:V,data:{title:"Task 3"}},{path:"task4",component:(()=>{class e{constructor(n){this.newTenderDataService=n,this.sections=[]}ngOnInit(){this.sections=this.newTenderDataService.getSections()}getStatusIcon(n){return"Completed"===n?"check":"error_outline"}static#t=this.\u0275fac=function(a){return new(a||e)(t.rXU(A))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-task4"]],standalone:!0,features:[t.aNF],decls:5,vars:1,consts:[[1,"tender-container"],[1,"sections"],["class","d-block section",4,"ngFor","ngForOf"],[1,"d-block","section"],["class","status",4,"ngIf"],[1,"details"],[1,"d-flex","justify-content-between","align-items-center"],[1,"action"],[1,"status"],[1,"badge","d-inline-flex",3,"ngClass"],[1,"status-icon"]],template:function(a,o){1&a&&(t.j41(0,"div",0)(1,"h1"),t.EFF(2,"New tender: electricity"),t.k0s(),t.j41(3,"div",1),t.DNE(4,J,11,3,"div",2),t.k0s()()),2&a&&(t.R7$(4),t.Y8G("ngForOf",o.sections))},dependencies:[c.MD,c.YU,c.Sq,c.bT,h.m_,h.An],styles:["h1[_ngcontent-%COMP%]{font-size:24px;margin-bottom:20px}.section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:var(--white);padding:16px;border-radius:8px;box-shadow:0 2px 4px #0000001a;max-width:800px;margin:auto auto 16px}.status[_ngcontent-%COMP%]{flex:0 0 100px;margin-bottom:16px}.status[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{background-color:green}.status[_ngcontent-%COMP%]   .inprogess[_ngcontent-%COMP%], .status[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%]{background-color:var(--darkcardshadow)}.badge[_ngcontent-%COMP%]{padding:4px 8px;border-radius:4px;color:var(--white);font-size:14px;width:auto}.badge[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:var(--white);margin-right:5px}.details[_ngcontent-%COMP%]{flex:1}.details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:18px;color:var(--textPrimary)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;font-size:14px;color:var(--textPrimary)}.action[_ngcontent-%COMP%]{flex:0 0 auto}mat-icon[_ngcontent-%COMP%]{font-size:24px;color:var(--textPrimary);cursor:pointer}@media (max-width: 768px){.section[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.action[_ngcontent-%COMP%]{margin-top:12px}}"]})}return e})(),data:{title:"Task 4"}}]}}]);