"use strict";(self.webpackChunkpca=self.webpackChunkpca||[]).push([[771],{5370:(T,l,a)=>{a.r(l),a.d(l,{KidneyModule:()=>pe});var c=a(6895),h=a(6432),u=a(1583);const m={initial:{question:"Is the urine dipstick positive for protein?",yes:"yesPosDipstick",no:"noPosDipstick"},yesPosDipstick:{question:"Has UTI been ruled out and more than one positive urine dipstick positive for protein?",yes:"moreThanOnePosDipstick",no:"notMoreThanOnePosDipstick"},noPosDipstick:{},moreThanOnePosDipstick:{question:"Perform the following: CBC, BMP (including fasting glucose), HbA1c, urine protein and urine creatinine, serum albumin, and urinalysis and microscopy.  After this workup, does the patient have any of the following?",yes:"abnormalWorkup",no:"normalWorkup"},notMoreThanOnePosDipstick:{},abnormalWorkup:{},normalWorkup:{}},g=["eGFR < 60","Active urine sediment (e.g., casts, RBCs)","> 0.3 g/g urine protein/creatinine ratio (UPCR)","Diabetes mellitus","Hypertension","Family history of early chronic kidney disease"],_=[{authors:["Naderi ASA","Reilly RF"],title:"Primary care approach to proteinuria",link:"https://www.jabfm.org/content/21/6/569",pages:"569-574",citationType:"journal",year:"2008",journalName:"The Journal of the American Board of Family Medicine",volume:"21",issue:"6",isOnline:!0,doi:"https://doi.org/10.3122/jabfm.2008.06.070080"}];var e=a(4650),d=a(7612),p=a(6903);function A(t,i){1&t&&(e.TgZ(0,"section")(1,"p"),e._uU(2,"Check another urine dipstick on a different day. If negative, no further workup necessary. If positive, rerun this algorithm."),e.qZA()())}function Z(t,i){if(1&t&&(e.TgZ(0,"ul")(1,"li"),e._uU(2),e.qZA()()),2&t){const n=i.$implicit;e.xp6(2),e.Oqu(n)}}function b(t,i){if(1&t&&(e.TgZ(0,"section"),e.YNc(1,Z,3,1,"ul",4),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.abnormalWorkupItems)}}function M(t,i){1&t&&(e.TgZ(0,"section")(1,"p"),e._uU(2,"Refer to nephrology for further evaluation and management."),e.qZA()())}function x(t,i){1&t&&(e.TgZ(0,"section")(1,"p"),e._uU(2,"Test the patient for orthostatic proteinuria. To do this, have patient void before going to bed. Then check the first void after awakening sample for urine protein and creatinine. A urine protein/creatinine ratio of < 0.2 g/g suggests orthostasis. Can provide reassurance if orthostatic proteinuria present. Consider annual followup testing."),e.qZA()())}function F(t,i){1&t&&(e.TgZ(0,"section")(1,"p"),e._uU(2,"If suspicion for multiple myeloma, check SPEP, UPEP and serum free light chains."),e.qZA()())}let P=(()=>{class t extends u.k{constructor(){super(...arguments),this.sectionMapper=m,this.citations=_,this.dateLastUpdated="10/10/2022",this.algoPurpose="Determine a cause for a patient's proteinuria",this.algoNote=void 0,this.abnormalWorkupItems=g}}return t.\u0275fac=function(){let i;return function(o){return(i||(i=e.n5z(t)))(o||t)}}(),t.\u0275cmp=e.Xpm({type:t,selectors:[["app-proteinuria"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"constData"],[1,"algo_content"],[1,"algo_content_main"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(e.TgZ(0,"main"),e._UZ(1,"app-algo-header",0),e.TgZ(2,"div",1)(3,"div",2),e.YNc(4,A,3,0,"section",3),e.YNc(5,b,2,1,"section",3),e.YNc(6,M,3,0,"section",3),e.YNc(7,x,3,0,"section",3),e.YNc(8,F,3,0,"section",3),e.qZA()(),e._UZ(9,"app-algo-footer",0),e.qZA()),2&n&&(e.xp6(1),e.Q6J("constData",o.constData),e.xp6(3),e.Q6J("ngIf","notMoreThanOnePosDipstick"===o.curSection),e.xp6(1),e.Q6J("ngIf","moreThanOnePosDipstick"===o.curSection),e.xp6(1),e.Q6J("ngIf","abnormalWorkup"===o.curSection),e.xp6(1),e.Q6J("ngIf","normalWorkup"===o.curSection),e.xp6(1),e.Q6J("ngIf","noPosDipstick"===o.curSection),e.xp6(1),e.Q6J("constData",o.constData))},dependencies:[c.sg,c.O5,d.h,p.y],encapsulation:2}),t})();var k=a(9299),R=a(5730);const v={initial:{question:"What is the stage of chronic kidney disease?",next:"stageSelected"},stageSelected:{question:"Select any that apply",next:"recs"},recs:{}},I=[{number:"<30 mg/g",stage:"1",minVal:0},{number:"30-300 mg/g",stage:"2",minVal:30},{number:">300 mg/g",stage:"3",minVal:300}],U=[{authors:["Chen TK","Knicely DH","Grams ME"],title:"Chronic kidney disease diagnosis and management",link:"https://jamanetwork.com/journals/jama/fullarticle/2752067",pages:"1294-1304",citationType:"journal",year:"2019",journalName:"JAMA",volume:"322",issue:"13",isOnline:!0,doi:"10.1001/jama.2019.14745"},{authors:["Cheung AK","Chang TI","Cushman WC","Furth SL","Hou FF","Ix JH","Knoll GA","Muntner P","Pecoits-Filho, R","Sarnak MJ","Tobe SW","Tomson CRV","Mann JFE"],title:"KDIGO 2021 clinical practice guideline for the management of blood pressure in chronic kidney disease",link:"https://www.sciencedirect.com/science/article/pii/S0085253820312709?via%3Dihub",pages:"S1-S87",citationType:"journal",year:"2021",journalName:"Kidney International",volume:"99",issue:"3S",isOnline:!0,doi:"https://doi.org/10.1016/j.kint.2020.11.003"}],w=[{name:"Age over 50",isChecked:!1},{name:"Current smoker",isChecked:!1},{name:"Diabetes mellitus",isChecked:!1},{name:"Kidney transplant recipient",isChecked:!1},{name:"One or more poor prognostic factors",isChecked:!1,comment:{title:"Poor prognostic factors in CKD",body:`\n            <ul>\n                ${(0,a(369).Pv)(["Rapidly progressive CKD","Uncontrolled hypertension","Severe electrolyte abnormalities","Structural abnormality","Hereditary kidney disease","Hematuria or sterile pyuria","Recurrent or severe nephrolithiasis","High 2-year end-stage kidney disease risk score","Nephrotic syndrome"])}\n            </ul>\n        `}},{name:"Hyperkalemia",isChecked:!1},{name:"Hyperphosphatemia",isChecked:!1},{name:"Serum bicarbonate persistently < 22 mmol/L (metabolic acidosis)",isChecked:!1},{name:"Anemia",isChecked:!1}];var Y=a(455),y=a(1948),f=a(4006);function j(t,i){if(1&t&&(e.TgZ(0,"mat-radio-button",7),e._uU(1),e.TgZ(2,"sup"),e._uU(3,"2"),e.qZA()()),2&t){const n=i.$implicit;e.Q6J("value",n.stage),e.xp6(1),e.hij(" ",n.number," ml/min/1.73 m")}}function L(t,i){if(1&t&&(e.TgZ(0,"mat-radio-button",7),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.stage),e.xp6(1),e.hij(" ",n.number," ")}}function B(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"section")(1,"p"),e._uU(2,"Select the eGFR:"),e.qZA(),e.TgZ(3,"mat-radio-group",5),e.NdJ("change",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.ckdStageChanged())})("ngModelChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.selectedEGFR=s)}),e.YNc(4,j,4,2,"mat-radio-button",6),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Select the urine albumin/creatinine ratio:"),e.qZA(),e.TgZ(7,"mat-radio-group",5),e.NdJ("change",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.ckdStageChanged())})("ngModelChange",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.selectedAlbuminuria=s)}),e.YNc(8,L,2,2,"mat-radio-button",6),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(3),e.Q6J("ngModel",n.selectedEGFR),e.xp6(1),e.Q6J("ngForOf",n.egfrGroups),e.xp6(3),e.Q6J("ngModel",n.selectedAlbuminuria),e.xp6(1),e.Q6J("ngForOf",n.albuminuriaGroups)}}const W=function(t){return{comment_link:t}};function V(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"mat-slide-toggle",9),e.NdJ("change",function(){const r=e.CHM(n).index,C=e.oxw(2);return e.KtG(C.historicalFeatureChanged(r))}),e.qZA(),e._uU(2," \xa0 "),e.TgZ(3,"span",10),e.NdJ("click",function(){const r=e.CHM(n).$implicit,C=e.oxw(2);return e.KtG(null!=r.comment&&r.comment.body?C.displayComments(r.comment):null)}),e._uU(4),e.qZA()()}if(2&t){const n=i.$implicit;e.xp6(1),e.Q6J("color","#009688")("checked",n.isChecked),e.xp6(2),e.Q6J("ngClass",e.VKq(4,W,null==n.comment?null:n.comment.body)),e.xp6(1),e.hij(" ",n.name," ")}}function z(t,i){if(1&t&&(e.TgZ(0,"section"),e.YNc(1,V,5,6,"div",8),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.historicalFeatures)}}function $(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"The patient qualifies to be referred to nephrology"),e.qZA())}function X(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Since over age 50, consider starting statin therapy to lower CV disease risk"),e.qZA())}function ee(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"For those age 18-49, a statin is recommended with CKD and CAD, prior ischemic stroke, or high risk of MI or CV death"),e.qZA())}function te(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Encourage smoking cessation to lower CV disease risk"),e.qZA())}function ne(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Consider treatment with ACE or ARB due to proteinuria"),e.qZA())}function ie(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Consider treatment with SGLT2 inhibitor to lower risk of CKD progression"),e.qZA())}function oe(t,i){if(1&t&&(e.TgZ(0,"span")(1,"li"),e._uU(2,"Diabetes should be controlled (goal HbA1c <7.0% for most)"),e.qZA(),e.TgZ(3,"li"),e._uU(4,"See "),e.TgZ(5,"a",11),e._uU(6,"diabetes medications algorithm"),e.qZA(),e._uU(7," for diabetes medication selection based on eGFR"),e.qZA(),e.YNc(8,ne,2,0,"li",3),e.YNc(9,ie,2,0,"li",3),e.qZA()),2&t){const n=e.oxw(2);e.xp6(8),e.Q6J("ngIf",n.albuminuriaIsPresent),e.xp6(1),e.Q6J("ngIf",n.considerSGLT2)}}function ae(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Avoid gadolinium-based contrast agents due to the risk of nephrogenic systemic fibrosis"),e.qZA())}function se(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"For hyperkalemia, implement low-potassium diet, correct hyperglycemia and any acidemia, and consider potassium binders"),e.qZA())}function re(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"For the acidemia, consider oral bicarbonate supplementation"),e.qZA())}function ce(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Consider phosphate-lowering therapy"),e.qZA())}function le(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Rule out other causes of anemia (e.g., iron deficiency) and treat if present "),e.TgZ(2,"a",12),e._uU(3,"(See Anemia algorithm)"),e.qZA()())}function ue(t,i){1&t&&(e.TgZ(0,"li"),e._uU(1,"Consider erythropoietin-stimulating agent through nephrologist when hemoglobin <10g/dL and any other causes of anemia have been treated"),e.qZA())}function me(t,i){if(1&t&&(e.TgZ(0,"section")(1,"p"),e._uU(2,"Consider the following:"),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5,"The patient is currently considered to be at "),e.TgZ(6,"b"),e._uU(7),e.qZA(),e._uU(8," risk of CKD progression"),e.qZA(),e.YNc(9,$,2,0,"li",3),e.YNc(10,X,2,0,"li",3),e.YNc(11,ee,2,0,"li",3),e.YNc(12,te,2,0,"li",3),e.TgZ(13,"li"),e._uU(14),e.qZA(),e.YNc(15,oe,10,2,"span",3),e.TgZ(16,"li"),e._uU(17,"Avoid/limit NSAIDs, phosphate-bowel preparations, PPIs"),e.qZA(),e.TgZ(18,"li"),e._uU(19,"Renally dose-adjust all medications"),e.qZA(),e.YNc(20,ae,2,0,"li",3),e.YNc(21,se,2,0,"li",3),e.YNc(22,re,2,0,"li",3),e.YNc(23,ce,2,0,"li",3),e.YNc(24,le,4,0,"li",3),e.YNc(25,ue,2,0,"li",3),e.TgZ(26,"li"),e._uU(27,"Encourage fruit/vegetable intake and less meat, eggs, and cheese (lower dietary acid loads)"),e.qZA(),e.TgZ(28,"li"),e._uU(29,"A low sodium diet (<2g/day) is recommended for patients with hypertension, proteinuria, or fluid overload"),e.qZA()(),e._UZ(30,"br"),e.TgZ(31,"p"),e._uU(32,"Lab testing frequency for this patient:"),e.qZA(),e.TgZ(33,"ul")(34,"li"),e._uU(35),e.qZA(),e.TgZ(36,"li"),e._uU(37),e.qZA(),e.TgZ(38,"li"),e._uU(39),e.qZA(),e.TgZ(40,"li"),e._uU(41),e.qZA(),e.TgZ(42,"li"),e._uU(43,"25-OH Vitamin D, potassium, bicarbonate, and lipid panel at baseline, then as needed"),e.qZA()()()),2&t){const n=e.oxw();e.xp6(7),e.Oqu(n.ckdRisk),e.xp6(2),e.Q6J("ngIf",n.shouldRefer),e.xp6(1),e.Q6J("ngIf",n.statin),e.xp6(1),e.Q6J("ngIf",!n.statin),e.xp6(1),e.Q6J("ngIf",n.smoker),e.xp6(2),e.hij("Target blood pressure is <",n.transplant?"130/80":"120 systolic",""),e.xp6(1),e.Q6J("ngIf",n.diabetes),e.xp6(5),e.Q6J("ngIf",n.avoidContrast),e.xp6(1),e.Q6J("ngIf",n.hyperkalemia),e.xp6(1),e.Q6J("ngIf",n.acidosis),e.xp6(1),e.Q6J("ngIf",n.hyperphosphatemia),e.xp6(1),e.Q6J("ngIf",n.anemia),e.xp6(1),e.Q6J("ngIf",n.anemia),e.xp6(10),e.hij("eGFR and urine albumin/creatinine ratio ",n.GFRAlbCheckFrequency,""),e.xp6(2),e.hij("Hemoglobin ",n.anemiaCheckFrequency,""),e.xp6(2),e.hij("Calcium and phosphorous every ",n.calcPhosCheckFrequency,""),e.xp6(2),e.hij("Serum PTH every ",n.pthCheckFrequency,"")}}const de=[{path:"proteinuria",component:P},{path:"CKD-management",component:(()=>{class t extends u.k{constructor(){super(...arguments),this.sectionMapper=v,this.citations=U,this.dateLastUpdated="12/01/2022",this.algoPurpose="Provide general management guidance for a patient with chronic kidney disease",this.algoNote="CKD is defined as at least 3 months of eGFR <60 ml/min/1.73m2, urine albumin/creatinine ratio > 30mg/g, abnormalities in urine sediment/histology/imaging supporting kidney damage, renal tubular disorders, or history of renal transplant",this.egfrGroups=R.M,this.albuminuriaGroups=I,this.canProceed=!1,this.historicalFeatures=w,this.shouldRefer=!1,this.statin=!1,this.smoker=!1,this.diabetes=!1,this.transplant=!1,this.hyperkalemia=!1,this.acidosis=!1,this.hyperphosphatemia=!1,this.anemia=!1,this.albuminuriaIsPresent=!1,this.considerSGLT2=!1,this.avoidContrast=!1}ckdStageChanged(){this.selectedAlbuminuria&&this.selectedEGFR&&(this.canProceed=!0,this._aValueChanged())}historicalFeatureChanged(n){super.historicalFeatureChanged(n),this._aValueChanged()}_setShouldReferToNephrology(){const n=this.historicalFeatures?.find(o=>o.name.includes("poor prognostic factors"));this.shouldRefer="4"===this.selectedEGFR||"5"===this.selectedEGFR||"3"===this.selectedAlbuminuria||(n?.isChecked??!1)}_setHistFeatureResults(){for(let n of this.historicalFeatures)switch(n.name){case"Age over 50":this.statin=n.isChecked;break;case"Current smoker":this.smoker=n.isChecked;break;case"Diabetes mellitus":this.diabetes=n.isChecked;break;case"Kidney transplant recipient":this.transplant=n.isChecked;break;case"Anemia":this.anemia=n.isChecked;break;case"Hyperkalemia":this.hyperkalemia=n.isChecked;break;case"Serum bicarbonate persistently < 22 mmol/L (metabolic acidosis)":this.acidosis=n.isChecked;break;case"Hyperphosophatemia":this.hyperphosphatemia=n.isChecked}}_aValueChanged(){this._setShouldReferToNephrology(),this._setHistFeatureResults(),this._contrast(),this._albuminuria(),this.anemiaCheckFrequency=this._setAnemiaCheckFrequency(),this.calcPhosCheckFrequency=this._setCalcPhosCheckFrequency(),this.pthCheckFrequency=this._setPTHCheckFrequency(),this._setCKDRisk(),this.GFRAlbCheckFrequency=this._setGFRAlbCheckFrequency()}_albuminuria(){this.selectedAlbuminuria&&(this.albuminuriaIsPresent="2"===this.selectedAlbuminuria||"3"===this.selectedAlbuminuria),this.selectedEGFR&&this.albuminuriaIsPresent&&(this.considerSGLT2="4"!==this.selectedEGFR&&"5"!==this.selectedEGFR)}_contrast(){this.selectedEGFR&&(this.avoidContrast="4"===this.selectedEGFR||"5"===this.selectedEGFR)}_setAnemiaCheckFrequency(){if(this.anemia)return"at least every 3 months";switch(this.selectedEGFR){case"3a":case"3b":default:return"at least yearly";case"4":case"5":return"at least twice per year"}}_setCalcPhosCheckFrequency(){switch(this.selectedEGFR){case"3a":case"3b":default:return"6-12 months";case"4":return"3-6 months";case"5":return"1-3 months"}}_setPTHCheckFrequency(){switch(this.selectedEGFR){case"3a":case"3b":default:return"at baseline, then as needed";case"4":return"every 6-12 months";case"5":return"every 3-6 months"}}_setCKDRisk(){const n=this.selectedEGFR,o=this.selectedAlbuminuria;let s;s="3a"===n&&"1"===o?"medium":"3b"===n&&"1"===o||"3a"===n&&"2"===o?"high":"very high",this.ckdRisk=s}_setGFRAlbCheckFrequency(){switch(this.ckdRisk){case"medium":default:return"at least once annually";case"high":return"at least twice per year";case"very high":return"at least 3 times per year"}}}return t.\u0275fac=function(){let i;return function(o){return(i||(i=e.n5z(t)))(o||t)}}(),t.\u0275cmp=e.Xpm({type:t,selectors:[["app-ckd-management"]],features:[e.qOj],decls:8,vars:6,consts:[[3,"constData"],[1,"algo_content"],[1,"algo_content_main"],[4,"ngIf"],[3,"constData","disabled"],["color","primary",1,"radio-group",3,"ngModel","change","ngModelChange"],["class","radio-button",3,"value",4,"ngFor","ngForOf"],[1,"radio-button",3,"value"],[4,"ngFor","ngForOf"],["tabindex","0",1,"slide_toggle",3,"color","checked","change"],[3,"ngClass","click"],["routerLink","/endocrinology/diabetes/type2-dm-management"],["routerLink","/hematology/erythrocytes/anemia-diagnosis"]],template:function(n,o){1&n&&(e.TgZ(0,"main"),e._UZ(1,"app-algo-header",0),e.TgZ(2,"div",1)(3,"div",2),e.YNc(4,B,9,4,"section",3),e.YNc(5,z,2,1,"section",3),e.YNc(6,me,44,17,"section",3),e.qZA()(),e._UZ(7,"app-algo-footer",4),e.qZA()),2&n&&(e.xp6(1),e.Q6J("constData",o.constData),e.xp6(3),e.Q6J("ngIf","initial"===o.curSection),e.xp6(1),e.Q6J("ngIf","stageSelected"===o.curSection),e.xp6(1),e.Q6J("ngIf","recs"===o.curSection),e.xp6(1),e.Q6J("constData",o.constData)("disabled",!o.canProceed))},dependencies:[c.mk,c.sg,c.O5,Y.Rr,y.VQ,y.U0,f.JJ,d.h,p.y,k.rH,f.On],encapsulation:2}),t})()}];let pe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,h.m,k.Bz.forChild(de),f.u5]}),t})()},771:(T,l,a)=>{a.r(l),a.d(l,{NephrologyModule:()=>_});var c=a(6895),h=a(5370),u=a(9299),m=a(4650);const g=[{path:"kidney",loadChildren:()=>Promise.resolve().then(a.bind(a,5370)).then(e=>e.KidneyModule)}];let _=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[c.ez,h.KidneyModule,u.Bz.forChild(g)]}),e})()}}]);