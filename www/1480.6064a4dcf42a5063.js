"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1480],{1480:(O,p,a)=>{a.r(p),a.d(p,{SignInPageModule:()=>I});var d=a(6814),i=a(95),o=a(6458),u=a(6958),n=a(6242);function m(t,r){1&t&&(n.TgZ(0,"ion-text",22),n._uU(1," *Please Enter the Mobile Number "),n.qZA())}function f(t,r){1&t&&(n.TgZ(0,"ion-text",22),n._uU(1," *Please Enter the Valid Mobile Number "),n.qZA())}function _(t,r){if(1&t&&(n.TgZ(0,"ion-text"),n.YNc(1,m,2,0,"ion-text",21)(2,f,2,0,"ion-text",21),n.qZA()),2&t){const l=n.oxw();let g,e;n.xp6(1),n.Q6J("ngIf",null==(g=l.form.get("phone"))?null:g.hasError("required")),n.xp6(1),n.Q6J("ngIf",(null==(e=l.form.get("phone"))?null:e.hasError("minlength"))&&!(null!=(e=l.form.get("phone"))&&e.hasError("required")))}}function P(t,r){1&t&&(n.TgZ(0,"ion-text",22),n._uU(1," *Please Enter the password "),n.qZA())}function h(t,r){1&t&&(n.TgZ(0,"ion-text",22),n._uU(1," *Please Enter minimum 8 digit password "),n.qZA())}function M(t,r){if(1&t&&(n.TgZ(0,"ion-text"),n.YNc(1,P,2,0,"ion-text",21)(2,h,2,0,"ion-text",21),n.qZA()),2&t){const l=n.oxw();let g,e;n.xp6(1),n.Q6J("ngIf",null==(g=l.form.get("password"))?null:g.hasError("required")),n.xp6(1),n.Q6J("ngIf",(null==(e=l.form.get("password"))?null:e.hasError("minlength"))&&!(null!=(e=l.form.get("password"))&&e.hasError("required")))}}const C=[{path:"",component:(()=>{var t;class r{constructor(){this.type=!0}ngOnInit(){this.form=new i.cw({phone:new i.NI(null,{validators:[i.kI.required,i.kI.minLength(10),i.kI.maxLength(10)]}),password:new i.NI(null,{validators:[i.kI.required,i.kI.minLength(8)]})})}changeType(){this.type=!this.type}signIn(){this.form.valid?console.log(this.form.value):this.form.markAllAsTouched()}forgotPassword(){console.log("Forgot")}}return(t=r).\u0275fac=function(g){return new(g||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-sign-in"]],decls:35,vars:6,consts:[[3,"fullscreen"],[1,"ion-no-border"],["slot","start"],["defaultHref","/home"],["color","white",1,"ion-margin","ion-padding-start"],[1,"ion-margin","ion-padding-start"],["vertical","top","horizontal","end"],["color","danger",3,"click"],["name","arrow-forward-outline"],["lines","full"],[1,"ion-margin"],[1,"ion-margin-horizontal","ion-margin-bottom"],[3,"formGroup"],[1,"ion-margin-vertical"],["formControlName","phone","placeholder","Mobile Number","type","tel","minlength","10","maxlength","10"],[4,"ngIf"],["slot","end","color","medium",3,"name","click"],["formControlName","password","placeholder","Password",3,"type"],["lines","none",1,"ion-padding-top"],["slot","start","color","danger",3,"click"],["color","dark","slot","end","routerLink","/sign-in/sign-up"],["class","error","color","danger",4,"ngIf"],["color","danger",1,"error"]],template:function(g,e){if(1&g&&(n.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-button",2),n._UZ(4,"ion-back-button",3),n.qZA()()(),n.TgZ(5,"ion-grid")(6,"ion-label",4)(7,"p"),n._UZ(8,"ion-text",5),n.qZA()()()(),n.TgZ(9,"ion-footer",1)(10,"ion-row")(11,"ion-fab",6)(12,"ion-fab-button",7),n.NdJ("click",function(){return e.signIn()}),n._UZ(13,"ion-icon",8),n.qZA()(),n.TgZ(14,"ion-list",9)(15,"ion-list-header",10)(16,"ion-label"),n._uU(17,"Sign-In"),n.qZA()(),n.TgZ(18,"ion-item-group",11)(19,"form",12)(20,"div",13)(21,"ion-item"),n._UZ(22,"ion-input",14),n.qZA(),n.YNc(23,_,3,2,"ion-text",15),n.qZA(),n.TgZ(24,"div",13)(25,"ion-item")(26,"ion-icon",16),n.NdJ("click",function(){return e.changeType()}),n.qZA(),n._UZ(27,"ion-input",17),n.qZA(),n.YNc(28,M,3,2,"ion-text",15),n.qZA()(),n.TgZ(29,"ion-item",18)(30,"ion-text",19),n.NdJ("click",function(){return e.forgotPassword()}),n._uU(31,"Forgot Password"),n.qZA(),n.TgZ(32,"ion-text",20)(33,"strong"),n._uU(34,"Sign-up"),n.qZA()()()()()()()),2&g){let c,s;n.Q6J("fullscreen",!0),n.xp6(19),n.Q6J("formGroup",e.form),n.xp6(4),n.Q6J("ngIf",!(null!=(c=e.form.get("phone"))&&c.valid)&&(null==(c=e.form.get("phone"))?null:c.touched)),n.xp6(3),n.Q6J("name",e.type?"eye-outline":"eye-off-outline"),n.xp6(1),n.Q6J("type",e.type?"password":"text"),n.xp6(1),n.Q6J("ngIf",!(null!=(s=e.form.get("password"))&&s.valid)&&(null==(s=e.form.get("password"))?null:s.touched))}},dependencies:[d.O5,i._Y,i.JJ,i.JL,i.wO,i.nD,i.sg,i.u,o.YG,o.W2,o.IJ,o.W4,o.fr,o.jY,o.Gu,o.gu,o.pK,o.Ie,o.Ub,o.Q$,o.q_,o.yh,o.Nd,o.yW,o.sr,o.j9,o.oU,o.YI,u.rH],styles:["ion-content[_ngcontent-%COMP%]{--background: url(AAECA\\ Banner.a2dc252eeb38a188.png) no-repeat center center/cover}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: transparent}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:20px;height:15px;padding:0 10px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{transform:translateY(10vh)}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;letter-spacing:.8px}ion-footer[_ngcontent-%COMP%]{opacity:80%}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding-top:5vh;background:transparent;display:block}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{margin-right:2.5vh}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{border-radius:20px 20px 0 0}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   input-text[_ngcontent-%COMP%]{font-size:.9em}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:.75em!important}"]}),r})()},{path:"sign-up",loadChildren:()=>a.e(9911).then(a.bind(a,9911)).then(t=>t.SignUpPageModule)}];let x=(()=>{var t;class r{}return(t=r).\u0275fac=function(g){return new(g||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.Bz.forChild(C),u.Bz]}),r})(),I=(()=>{var t;class r{}return(t=r).\u0275fac=function(g){return new(g||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.ez,i.UX,o.Pc,x]}),r})()}}]);