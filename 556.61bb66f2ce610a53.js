"use strict";(self.webpackChunkpca=self.webpackChunkpca||[]).push([[556],{3556:(xe,_,r)=>{r.r(_),r.d(_,{AtherosclerosisModule:()=>Ae});var l=r(6895),y=r(1583);const h={initial:{question:"Select the patient's triglyceride level:",next:"ASCVD"},ASCVD:{question:"Does the patient have a history of ASCVD, such as coronary artery disease, cerebrovascular disease, abdominal or thoracic aortic aneurysm, or peripheral arterial disease?",yes:"secondaryPrevention",no:"primaryPrevention"},secondaryPrevention:{question:"Has the patient had multiple major ASCVD events or one major event with multiple high risk conditions for future events?",yes:"yesVeryHighRisk",no:"notVeryHighRisk"},primaryPrevention:{question:"Does the patient have an LDL > 190 mg/dL?",yes:"LDLgt190",no:"LDLlt190"},yesVeryHighRisk:{},notVeryHighRisk:{},LDLgt190:{},LDLlt190:{question:"Is the patient age 40-75 years?",yes:"age40to75",no:"selectAgeGroup"},selectAgeGroup:{question:"Select the patient's age group:",next:"ageGroupSelected"},age40to75:{question:"Does the patient have diabetes mellitus?",yes:"yesDM",no:"noDM"},yesDM:{},noDM:{next:"riskGroupSelected"},ageGroupSelected:{},riskGroupSelected:{}},f=["0-19","20-39","> 75"],C=[{risk:"low",label:"<5% - Low risk"},{risk:"borderline",label:"5% - 7.49% - Borderline risk"},{risk:"intermediate",label:"7.5% - 19.99% - Intermediate risk"},{risk:"high",label:">20% - High risk"}],T=["0-174","175-499",">500"],A=[{authors:["Grundy SM","Stone NJ"],title:"2018 cholesterol clinical practice guidelines: Synopsis of the 2018 American Heart Association/American College of Cardiology/multisociety cholesterol guideline",link:"https://pubmed.ncbi.nlm.nih.gov/31132793/",pages:"779-783",citationType:"journal",year:"2019",journalName:"Ann Intern Med",volume:"170",issue:"11",isOnline:!0,doi:"10.7326/M19-0365"},{authors:["Grundy SM","Stone NJ","Bailey AL","Beam C","Birtcher KK","Blumenthal RS","Braun LT","de Ferranti S","Faiella-Tommasino J","Forman DE","Goldberg R","Heidenreich PA","Hlatky MA","Jones DW","Lloyd-Jones D","Lopez-Pajares N","Ndumele CE","Orringer CE","Peralta CA","Saseen JJ","Smith SC Jr","Sperling I","Virani SS","Yeboah J"],title:"2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the management of blood cholesterol: a report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines",link:"https://www.ahajournals.org/doi/10.1161/CIR.0000000000000625",pages:"e1082-e1143",citationType:"journal",year:"2019",journalName:"Circulation",volume:"139",isOnline:!0,doi:"10.1161/CIR.0000000000000625"}];var c=r(369);const x={displayText:"statins",comment:{title:"Statins by intensity",body:`\n            <p>High intensity statins</p>\n            <ul>\n                ${(0,c.Pv)(["Atorvastatin 40-80 mg daily","Rosuvastatin 20-40 mg daily"])}\n            </ul>\n            <p>Moderate intensity statins</p>\n            <ul>\n                ${(0,c.Pv)(["Atorvastatin 10-20 mg daily","Rosuvastatin 5-10 mg daily","Simvastatin 20-40 mg daily","Pravastatin 40-80 mg daily","Lovastatin 40-80 mg daily","Fluvastatin XL 80 mg daily","Fluvastatin 40 mg BID","Pitavastatin 1-4 mg daily"])}\n            </ul>\n            <p>Low intensity statins</p>\n            <ul>\n                ${(0,c.Pv)(["Simvastatin 10 mg daily","Pravastatin 10-20 mg daily","Lovastatin 20 mg daily","Fluvastatin 20-40 mg daily"])}\n            </ul>\n        `}},D={displayText:"Patient has risk-enhancing factors",comment:{title:"ASCVD Risk Enhancers",body:`\n            <ul>\n                ${(0,c.Pv)(["Family history of premature ASCVD (<55 years first-degree male relative or <65 years first-degree female relative)","Persistently elevated LDL > 160 mg/dL","Chronic kidney disease","Metabolic syndrome","H/o preeclampsia or premature menopause","Inflammatory diseases (esp. rheumatoid arthritis, psoriasis, HIV)","Ethnicity (e.g., South Asian ancestry)","Persistently elevated triglycerides > 175 mg/dL","Ankle-brachial index <0.9 (if measured)","hs-CRP > 2.0 mg/L (if measured)","Lp(a) > 50 mg/dL or apoB > 130 mg/dL (if measured)"])}\n            </ul>\n        `}},S={displayText:"coronary artery calcium (CAC)",comment:{title:"Coronary artery calcium (CAC) score interpretation",body:"\n            <table>\n                <thead>\n                    <tr>\n                        <th>CAC score</th>\n                        <th>Interpretation</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>0</td>\n                        <td>Lowers risk; consider no statin, unless diabetes, family\n                        history of premature CHD, or cigarette smoking are present</td>\n                    </tr>\n\n                    <tr>\n                        <td>1-99</td>\n                        <td>Favors statin (especially after age 55 years)</td>\n                    </tr>\n\n                    <tr>\n                        <td>100+ and/or >75th percentile</td>\n                        <td>Initiate statin therapy</td>\n                    </tr>\n                </tbody>\n            </table>\n        "}},I={displayText:"Consider eliminating or reducing medications that raise triglycerides",comment:{title:"Medications that can raise triglycerides",body:`\n            <ul>\n                ${(0,c.Pv)(["Oral estrogens","Tamoxifen","Raloxifene","Retinoids","Immunosuppressants (cyclosporine, sirolimus, tacrolimus)","Beta blockers","Inteferon","Atypical antipsychotics","Protease inhibitors","Thiazide diuretics","Glucocorticoids","Rosiglitazone","Bile acid sequestrants","L-asparaginase","Cyclophosphamide"])}\n            </ul\n        `}},J={displayText:"Treat/manage secondary factors",comment:{title:"Secondary factors that raise triglycerides",body:`\n            <ul>\n                ${(0,c.Pv)(["Diabetes mellitus","Chronic liver disease","Chronic kidney disease","Nephrotic syndrome","Hypothyroidism"])}\n            </ul>\n        `}},P={displayText:"Consider addition of fibrate therapy, if needed, to reduce pancreatitis risk",comment:{title:"Fibrate therapy",body:`\n            <p>Note: Fenofibrates preferred due to lower myopathy risk than gemfibrozil</p>\n            <p>Side effects include gallstones, increased rhabdo risk with statins, drug-drug interactions</p>\n            <ul>\n                ${(0,c.Pv)(["Fenofibrate 145 mg nonocrystal orally daily","Fenofibrate 160-200 mg micronized orally daily","Gemfibrozil 600 mg PO BID"])}\n            </ul>\n        `}},E={displayText:"PCSK9 inhibitor",comment:{title:"PCSK9 inhibitors",body:'\n            <p>evolocumab (Repatha)</p>\n            <ul>\n                <li>140 mg subQ every 2 weeks or 420 mg subQ monthly</li>\n                <li><a href="https://www.youtube.com/watch?v=Hpxg4SidSQg" target="_blank">Repatha administration video</a></li>\n            </ul>\n            <br/>\n            <p>alirocumab (Praluent)</p>\n            <ul>\n                <li>Starting dose: 75 mg subQ every 2 weeks or 300 mg subQ (two 150 mg injections) every 4 weeks</li>\n                <li>If LDL-C response inadequate, can increase to 150 mg subQ every 2 weeks</li>\n                <li><a href="https://youtu.be/GraaIHzegBg" target="_blank">Praluent administration video</a></li>\n            </ul>\n\n        '}},U=[I,{displayText:"Implement a very low-fat diet"},{displayText:"Recommend weight loss if overweight or obese"},J,{displayText:"Avoid refined carbohydrates and alcohol"},{displayText:"Consider addition of omega-3 fatty acids (2g BID or 4g daily)"}],H=[{displayText:"If 10-year risk of ASCVD is >7.5%, consider adding or intensifying statin therapy"},P],q={name:"Family history of premature ASCVD and LDL >160 mg/dL",isChecked:!1,comment:{title:"Family history of premature ASCVD groups",body:`\n            <ul>\n                ${(0,c.Pv)(["<55 years first-degree male relative","<65 years first-degree female relative"])}\n            </ul>\n        `}};var e=r(4650),u=r(1948),d=r(4006),w=r(7612),Q=r(6903);function O(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"mat-radio-button",7),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.radioSelected())}),e._uU(1),e.qZA()}if(2&i){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," mg/dL ")}}function Y(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"section")(1,"mat-radio-group",5),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.selectedTrigGroup=n)}),e.YNc(2,O,2,2,"mat-radio-button",6),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.selectedTrigGroup),e.xp6(1),e.Q6J("ngForOf",t.trigGroups)}}function V(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1,"The patient is considered very high risk for future ASCVD events. The following are recommended."),e.qZA())}function K(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"span")(1,"li"),e._uU(2,"Add ezetimibe 10 mg PO daily if LDL > 70 mg/dL if already on maximally tolerated statin therapy."),e.qZA(),e.TgZ(3,"li"),e._uU(4,"Add a "),e.TgZ(5,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.pcsk9Comment.comment))}),e._uU(6,"PSCK9 inhibitor"),e.qZA(),e._uU(7," if already on a statin and ezetimibe and LDL > 70 mg/dL."),e.qZA()()}}function B(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"section"),e.YNc(1,V,2,0,"p",3),e.TgZ(2,"ul")(3,"li"),e._uU(4,"The patient should be on a "),e.TgZ(5,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.displayComments(n.statinComment.comment))}),e._uU(6," high intensity statin"),e.qZA(),e._uU(7," (or maximally tolerated statin dose). "),e.qZA(),e.YNc(8,K,8,0,"span",3),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","yesVeryHighRisk"===t.curSection),e.xp6(7),e.Q6J("ngIf","yesVeryHighRisk"===t.curSection)}}function j(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"section")(1,"li"),e._uU(2,"The patient should be on a "),e.TgZ(3,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.displayComments(n.statinComment.comment))}),e._uU(4," high intensity statin"),e.qZA(),e._uU(5," (or maximally tolerated statin dose). "),e.qZA()()}}function $(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"mat-radio-button",7),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.radioSelected())}),e._uU(1),e.qZA()}if(2&i){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," years ")}}function z(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"section")(1,"mat-radio-group",5),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.selectedAgeGroup=n)}),e.YNc(2,$,2,2,"mat-radio-button",6),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.selectedAgeGroup),e.xp6(1),e.Q6J("ngForOf",t.ageGroups)}}function W(i,o){if(1&i&&(e.TgZ(0,"mat-radio-button",11),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t.risk),e.xp6(1),e.hij(" ",t.label," ")}}function X(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"section")(1,"a",9),e._uU(2,"Calculate the patient's 10 year ASCVD risk percentage"),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"p"),e._uU(6,"Select the ASCVD risk percentage group that applies to the patient:"),e.qZA(),e.TgZ(7,"mat-radio-group",5),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.selectedRiskPercentage=n)}),e.YNc(8,W,2,2,"mat-radio-button",10),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(7),e.Q6J("ngModel",t.selectedRiskPercentage),e.xp6(1),e.Q6J("ngForOf",t.riskPercentageGroups)}}function ee(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"section")(1,"li"),e._uU(2,"The patient should be on a "),e.TgZ(3,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.displayComments(n.statinComment.comment))}),e._uU(4," moderate intensity statin"),e.qZA(),e._uU(5,", or a high intensity statin if high risk of ASCVD. "),e.qZA()()}}function te(i,o){1&i&&(e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3,"Emphasize lifestyle to reduce risk factors."),e.qZA()()())}function ie(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3,"If "),e.TgZ(4,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.riskEnhancers.comment))}),e._uU(5," risk enhancers "),e.qZA(),e._uU(6," are present, have a risk discussion with the patient about starting "),e.TgZ(7,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.statinComment.comment))}),e._uU(8,"moderate-intensity statin"),e.qZA(),e._uU(9," therapy."),e.qZA()()()}}function ne(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"li"),e._uU(2,"If "),e.TgZ(3,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.riskEnhancers.comment))}),e._uU(4," risk enhancers"),e.qZA(),e._uU(5," favor a statin, initiate "),e.TgZ(6,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.statinComment.comment))}),e._uU(7,"moderate-intensity statin"),e.qZA(),e._uU(8," therapy to reduce LDL-C by 30%-49%. "),e.qZA(),e.TgZ(9,"li"),e._uU(10," If risk decision is uncertain, can consider obtaining a "),e.TgZ(11,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.cacComment.comment))}),e._uU(12,"coronary artery calcium (CAC) score"),e.qZA(),e._uU(13,". "),e.qZA()()}}function oe(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"li"),e._uU(2,"Engage in a risk discussion to initiate a "),e.TgZ(3,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.statinComment.comment))}),e._uU(4,"statin"),e.qZA(),e._uU(5," to reduce LDL-C by >50%."),e.qZA()()}}function se(i,o){if(1&i&&(e.TgZ(0,"section"),e.YNc(1,te,4,0,"div",3),e.YNc(2,ie,10,0,"div",3),e.YNc(3,ne,14,0,"div",3),e.YNc(4,oe,6,0,"div",3),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","low"===t.selectedRiskPercentage),e.xp6(1),e.Q6J("ngIf","borderline"===t.selectedRiskPercentage),e.xp6(1),e.Q6J("ngIf","intermediate"===t.selectedRiskPercentage),e.xp6(1),e.Q6J("ngIf","high"===t.selectedRiskPercentage)}}function ae(i,o){1&i&&(e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3,"If familial hypercholesterolemia, a statin is recommended."),e.qZA(),e.TgZ(4,"li"),e._uU(5,"Encourage lifestyle that prevents or reduces ASCVD risk."),e.qZA()()())}function re(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3,"If "),e.TgZ(4,"span",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.displayComments(n.famHx.comment))}),e._uU(5," family history of premature ASCVD"),e.qZA(),e._uU(6," and LDL-C >160 mg/dL, consider a statin."),e.qZA(),e.TgZ(7,"li"),e._uU(8,"Encourage lifestyle that prevents or reduces ASCVD risk."),e.qZA()()()}}function ce(i,o){1&i&&(e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3,"It is reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty, or reduced life-expectancy limits the protential benefits of statin therapy."),e.qZA(),e.TgZ(4,"li"),e._uU(5,"If the patient is not already on a statin, engage in risk discussion with patient if a statin is considered. If a statin is initiated, prescribe no more than a moderate-intensity statin."),e.qZA()()())}function le(i,o){if(1&i&&(e.TgZ(0,"section"),e.YNc(1,ae,6,0,"div",3),e.YNc(2,re,9,0,"div",3),e.YNc(3,ce,6,0,"div",3),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","0-19"===t.selectedAgeGroup||!t.selectedAgeGroup),e.xp6(1),e.Q6J("ngIf","20-39"===t.selectedAgeGroup),e.xp6(1),e.Q6J("ngIf","> 75"===t.selectedAgeGroup)}}function me(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1,"Additional recommendations for elevated triglycerides:"),e.qZA())}const g=function(i){return{comment_link:i}};function de(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"ul")(1,"li",13),e.NdJ("click",function(){const a=e.CHM(t).$implicit,p=e.oxw(4);return e.KtG(null!=a.comment&&a.comment.body?p.displayComments(a.comment):null)}),e._uU(2),e.qZA()()}if(2&i){const t=o.$implicit;e.xp6(1),e.Q6J("ngClass",e.VKq(2,g,null==t.comment?null:t.comment.title)),e.xp6(1),e.hij(" ",t.displayText,". ")}}function pe(i,o){if(1&i&&(e.TgZ(0,"span"),e.YNc(1,de,3,4,"ul",12),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.nonPharmTrigTx)}}function _e(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"ul")(1,"li",13),e.NdJ("click",function(){const a=e.CHM(t).$implicit,p=e.oxw(4);return e.KtG(null!=a.comment&&a.comment.body?p.displayComments(a.comment):null)}),e._uU(2),e.qZA()()}if(2&i){const t=o.$implicit;e.xp6(1),e.Q6J("ngClass",e.VKq(2,g,null==t.comment?null:t.comment.title)),e.xp6(1),e.hij(" ",t.displayText,". ")}}function ue(i,o){if(1&i&&(e.TgZ(0,"span"),e.YNc(1,_e,3,4,"ul",12),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.trigPharmTx)}}function ge(i,o){if(1&i&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.YNc(2,me,2,0,"p",3),e.YNc(3,pe,2,1,"span",3),e.YNc(4,ue,2,1,"span",3),e.qZA()),2&i){const t=e.oxw(2);e.xp6(2),e.Q6J("ngIf","0-19"!==t.selectedAgeGroup||">500"===t.selectedTrigGroup),e.xp6(1),e.Q6J("ngIf","0-19"!==t.selectedAgeGroup),e.xp6(1),e.Q6J("ngIf",">500"===t.selectedTrigGroup)}}function ye(i,o){if(1&i&&(e.TgZ(0,"span"),e.YNc(1,ge,5,3,"div",3),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","0-174"!==t.selectedTrigGroup&&"> 75"!==t.selectedAgeGroup)}}let he=(()=>{class i extends y.k{constructor(){super(...arguments),this.sectionMapper=h,this.citations=A,this.dateLastUpdated="10/30/2022",this.algoPurpose="Determine management of various forms of dyslipidemia",this.algoNote=void 0,this.statinComment=x,this.ageGroups=f,this.riskPercentageGroups=C,this.riskEnhancers=D,this.cacComment=S,this.famHx=q,this.trigGroups=T,this.nonPharmTrigTx=U,this.trigPharmTx=H,this.pcsk9Comment=E,this.disabled=!0}ngOnInit(){super.ngOnInit(),this.algoDataService.curSection$.subscribe(t=>{this.disabled=!0,this.selectedTrigGroup&&"initial"===t&&(this.disabled=!1),this.selectedAgeGroup&&"selectAgeGroup"===t&&(this.disabled=!1)})}radioSelected(){this.disabled=!1}}return i.\u0275fac=function(){let o;return function(s){return(o||(o=e.n5z(i)))(s||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["app-dyslipidemia"]],features:[e.qOj],decls:14,vars:12,consts:[[3,"constData"],[1,"algo_content"],[1,"algo_content_main"],[4,"ngIf"],[3,"constData","disabled"],["color","primary",1,"radio-group",3,"ngModel","ngModelChange"],["class","radio-button",3,"value","click",4,"ngFor","ngForOf"],[1,"radio-button",3,"value","click"],[1,"comment_link",3,"click"],["target","_blank","href","https://tools.acc.org/ascvd-risk-estimator-plus/#!/calculate/estimate/",1,"comment_link"],["class","radio-button",3,"value",4,"ngFor","ngForOf"],[1,"radio-button",3,"value"],[4,"ngFor","ngForOf"],[3,"ngClass","click"]],template:function(t,s){1&t&&(e.TgZ(0,"main"),e._UZ(1,"app-algo-header",0),e.TgZ(2,"div",1)(3,"div",2),e.YNc(4,Y,3,2,"section",3),e.YNc(5,B,9,2,"section",3),e.YNc(6,j,6,0,"section",3),e.YNc(7,z,3,2,"section",3),e.YNc(8,X,9,2,"section",3),e.YNc(9,ee,6,0,"section",3),e.YNc(10,se,5,4,"section",3),e.YNc(11,le,4,3,"section",3),e.YNc(12,ye,2,1,"span",3),e.qZA()(),e._UZ(13,"app-algo-footer",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("constData",s.constData),e.xp6(3),e.Q6J("ngIf","initial"===s.curSection),e.xp6(1),e.Q6J("ngIf","yesVeryHighRisk"===s.curSection||"notVeryHighRisk"===s.curSection),e.xp6(1),e.Q6J("ngIf","LDLgt190"===s.curSection),e.xp6(1),e.Q6J("ngIf","selectAgeGroup"===s.curSection),e.xp6(1),e.Q6J("ngIf","noDM"===s.curSection),e.xp6(1),e.Q6J("ngIf","yesDM"===s.curSection),e.xp6(1),e.Q6J("ngIf","riskGroupSelected"===s.curSection),e.xp6(1),e.Q6J("ngIf","ageGroupSelected"===s.curSection),e.xp6(1),e.Q6J("ngIf","ageGroupSelected"===s.curSection||"riskGroupSelected"===s.curSection||"yesDM"===s.curSection||"LDLgt190"===s.curSection||"yesVeryHighRisk"===s.curSection||"notVeryHighRisk"===s.curSection),e.xp6(1),e.Q6J("constData",s.constData)("disabled",s.disabled))},dependencies:[l.mk,l.sg,l.O5,u.VQ,u.U0,d.JJ,w.h,Q.y,d.On],encapsulation:2}),i})();var fe=r(6432),Ce=r(9299);const Te=[{path:"dyslipidemia",component:he}];let Ae=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,fe.m,Ce.Bz.forChild(Te),d.u5]}),i})()}}]);