(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(32),r=a(3),i=a(17),c=(a(51),a(4)),l=a(5),m=a(8),p=a(6),d=a(9),h=(a(53),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).name="Search",e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"giveStore",value:function(){this.props.onClickBTN(this.searchInput.value,this.props.testStore)}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{id:"Search"},o.a.createElement("div",{id:"search_div"},o.a.createElement("input",{id:"search_input",type:"text",ref:function(t){e.searchInput=t}}),o.a.createElement("button",{id:"search_btn",onClick:this.giveStore.bind(this)},o.a.createElement("i",{className:"fas fa-search big"}))))}}]),t}(n.Component)),u=Object(r.b)(function(e){return{testStore:e[0]}},function(e){return{onClickBTN:function(t,a){a.map(function(e){return e.general.firstName.includes(t)||e.general.lastName.includes(t)?e.general.show=!0:e.general.show=!1}),e({type:"AddList",payload:[a]})}}})(h),f=(a(55),a(110)),y=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.clients=this.props.testStore[0].map(function(t){return!!t.general.show&&o.a.createElement(f.a.Row,{key:t.address.zipCode},o.a.createElement("div",{className:"clients_container",onClick:function(){return e.props.onActiveClient(t)}},o.a.createElement("div",{className:"Small_avatar"},o.a.createElement("img",{src:t.general.avatar,alt:"avatar"})),o.a.createElement("div",{className:"Personal_info"},o.a.createElement("span",{className:"client_name"},t.general.firstName," ",t.general.lastName),o.a.createElement("span",{className:"job_title"},t.job.title))))}),o.a.createElement("section",{id:"Clients_List"},o.a.createElement(f.a,{reversed:"computer vertically"},this.clients))}}]),t}(n.Component),g=Object(r.b)(function(e){return{testStore:e}},function(e){return{onActiveClient:function(t){e({type:"AddActive",payload:t})}}})(y),v=(a(106),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.personInfo={avatar:"".concat(this.props.testStore.general.avatar),name:"".concat(this.props.testStore.general.firstName," ").concat(this.props.testStore.general.lastName),job:"".concat(this.props.testStore.job.title," ( ").concat(this.props.testStore.job.company," )"),address:{street:"".concat(this.props.testStore.address.street),city:"".concat(this.props.testStore.address.city),zipCode:"".concat(this.props.testStore.address.zipCode),country:"".concat(this.props.testStore.address.country)},contact:{email:"".concat(this.props.testStore.contact.email),phone:"".concat(this.props.testStore.contact.phone)}},o.a.createElement("section",{id:"Clients_Info"},o.a.createElement("div",{id:"Client_avatar_img"},o.a.createElement("img",{src:this.personInfo.avatar,alt:"Avatar"})),o.a.createElement("div",{id:"Client_text"},o.a.createElement("div",{id:"personalInfo"},o.a.createElement("h1",null,this.personInfo.name),o.a.createElement("div",{className:"info_container"},o.a.createElement("b",null,"Job :"),o.a.createElement("div",{className:"Info_list"},o.a.createElement("span",{className:"infoItem"},this.personInfo.job)))),o.a.createElement("div",{id:"otherInfo"},o.a.createElement("div",{className:"info_container"},o.a.createElement("b",null,"Address :"),o.a.createElement("div",{className:"Info_list list_df"},o.a.createElement("span",{className:"infoItem"},"1) Street: ",this.personInfo.address.street),o.a.createElement("span",{className:"infoItem"},"2) City: ",this.personInfo.address.city),o.a.createElement("span",{className:"infoItem"},"3) Zip code: ",this.personInfo.address.zipCode),o.a.createElement("span",{className:"infoItem"},"4) Country: ",this.personInfo.address.country)),o.a.createElement("div",{className:"info_container"},o.a.createElement("b",null,"Contacts :"),o.a.createElement("div",{className:"Info_list list_df"},o.a.createElement("span",{className:"infoItem"},"1) Email: ",this.personInfo.contact.email),o.a.createElement("span",{className:"infoItem"},"2) Phone: ",this.personInfo.contact.phone)))))))}}]),t}(n.Component)),w=Object(r.b)(function(e){return{testStore:e[1]}})(v),N=a(42),b=a(41),j={general:{firstName:"",lastName:"",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc41Jg0v9kpaxH_0BoMVnjqgTKU7_PrtQyol0nlznXkflTM6lw",show:!0},job:{company:"",title:""},contact:{email:"",phone:""},address:{street:"",city:"",zipCode:"",country:""}};var C=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[b,j],t=arguments.length>1?arguments[1]:void 0;return"AddList"===t.type?Object(N.a)(t.payload).concat([j]):"AddActive"===t.type?[b,t.payload]:e});Object(s.render)(o.a.createElement(function(){return o.a.createElement(r.a,{store:C},o.a.createElement("section",{id:"Container"},o.a.createElement("section",{id:"left_main"},o.a.createElement(u,null),o.a.createElement(g,null)),o.a.createElement("section",{id:"right_main"},o.a.createElement(w,null))))},null),document.getElementById("root"))},41:function(e){e.exports=[{general:{firstName:"Liana",lastName:"Crooks",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",show:!0},job:{company:"Ledner, Johnson and Predovic",title:"Investor Functionality Coordinator"},contact:{email:"Gerry_Hackett77@gmail.com",phone:"(895) 984-0132"},address:{street:"1520 Zemlak Cove",city:"New Devon",zipCode:"42586-7898",country:"Guinea-Bissau"}},{general:{firstName:"Deontae",lastName:"Dare",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",show:!0},job:{company:"D'Amore, Dicki and Borer",title:"International Applications Consultant"},contact:{email:"Kellie.Marvin38@yahoo.com",phone:"1-615-843-3426 x600"},address:{street:"65901 Glover Terrace",city:"Alden ton",zipCode:"57744-4248",country:"Kenya"}},{general:{firstName:"Cortez",lastName:"Pacocha",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",show:!0},job:{company:"McKenzie Group",title:"Forward Branding Developer"},contact:{email:"Sage_Wiegand@hotmail.com",phone:"725.583.0926 x0430"},address:{street:"376 Reginald Dam",city:"Port Enid fort",zipCode:"51294-8361",country:"Belarus"}},{general:{firstName:"Geoffrey",lastName:"Russel",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg",show:!0},job:{company:"Nienow and Sons",title:"Central Intranet Designer"},contact:{email:"Daron.Bartoletti9@gmail.com",phone:"646.580.9390"},address:{street:"5050 Iva Extensions",city:"Madonna burgh",zipCode:"74470-6362",country:"Fiji"}},{general:{firstName:"Christian",lastName:"Wuckert",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg",show:!0},job:{company:"Jakubowski Inc",title:"Future Branding Assistant"},contact:{email:"Zechariah48@hotmail.com",phone:"555-516-5564"},address:{street:"1946 Nolan Mountain",city:"Garnet stad",zipCode:"79438",country:"Puerto Rico"}},{general:{firstName:"Joana",lastName:"Breitenberg",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/themrdave/128.jpg",show:!0},job:{company:"Jacobson - Fay",title:"Global Factors Officer"},contact:{email:"Jaylon92@hotmail.com",phone:"202.387.0215 x7568"},address:{street:"3446 Isabelle Shore",city:"Port Kayli",zipCode:"63713-9923",country:"Switzerland"}},{general:{firstName:"Elton",lastName:"Pfannerstill",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg",show:!0},job:{company:"Franecki LLC",title:"Product Applications Assistant"},contact:{email:"Tomasa26@hotmail.com",phone:"168.457.7936 x4319"},address:{street:"1975 Creola Streets",city:"South Favian",zipCode:"65666-6266",country:"Afghanistan"}},{general:{firstName:"Alvena",lastName:"Paucek",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",show:!0},job:{company:"Goldner - Haag",title:"Corporate Interactions Assistant"},contact:{email:"Oran66@yahoo.com",phone:"(754) 491-0343 x6060"},address:{street:"95820 Bud Trail",city:"West Randy furt",zipCode:"98923",country:"French Polynesia"}},{general:{firstName:"Lew",lastName:"Daniel",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/dhoot_amit/128.jpg",show:!0},job:{company:"Corwin LLC",title:"Product Research Liason"},contact:{email:"Cordelia.Bartoletti28@gmail.com",phone:"142.115.7141 x943"},address:{street:"04363 Torphy Club",city:"East Heidi",zipCode:"10926-2413",country:"Estonia"}},{general:{firstName:"Darlene",lastName:"Davis",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg",show:!0},job:{company:"Franecki and Sons",title:"Internal Functionality Supervisor"},contact:{email:"Erich36@gmail.com",phone:"(546) 314-2504"},address:{street:"1513 Kessler Crossing",city:"South Randi fort",zipCode:"60194",country:"Malta"}},{general:{firstName:"Savannah",lastName:"Predovic",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mtolokonnikov/128.jpg",show:!0},job:{company:"O'Connell - Koepp",title:"International Integration Liason"},contact:{email:"Torey_Stroman@hotmail.com",phone:"324.808.6122"},address:{street:"660 Lueilwitz Island",city:"East Okey port",zipCode:"26277",country:"Sudan"}},{general:{firstName:"Nicolette",lastName:"Rogahn",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg",show:!0},job:{company:"Zemlak - Larkin",title:"Internal Group Agent"},contact:{email:"Rowena.Kemmer93@yahoo.com",phone:"579-666-9685"},address:{street:"6622 Kaitlin Drive",city:"New Israel",zipCode:"07116",country:"Turkmenistan"}},{general:{firstName:"Aidan",lastName:"Stracke",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",show:!0},job:{company:"Denesik, Dicki and Schmitt",title:"National Accounts Officer"},contact:{email:"Chelsey.Powlowski38@hotmail.com",phone:"689.859.2512 x81508"},address:{street:"498 King Track",city:"Toy fort",zipCode:"07905-5925",country:"Latvia"}},{general:{firstName:"Tristin",lastName:"Eichmann",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg",show:!0},job:{company:"Marvin, Pfannerstill and Braun",title:"Central Communications Consultant"},contact:{email:"Marisa_Miller54@yahoo.com",phone:"335-788-4534"},address:{street:"2686 Ebert Parks",city:"West Lexus",zipCode:"70293-4149",country:"Brazil"}},{general:{firstName:"Malika",lastName:"Feeney",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/dnirmal/128.jpg",show:!0},job:{company:"Pfannerstill - Christiansen",title:"Customer Assurance Designer"},contact:{email:"Stone15@yahoo.com",phone:"578-268-2680 x495"},address:{street:"415 Homenick Lodge",city:"North Nelson borough",zipCode:"05142",country:"Netherlands"}},{general:{firstName:"Ross",lastName:"Dickens",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg",show:!0},job:{company:"Champlin, Leannon and O'Connell",title:"Legacy Marketing Coordinator"},contact:{email:"Scottie.Swift@hotmail.com",phone:"165-084-3752 x336"},address:{street:"98494 Clemens Oval",city:"Heller view",zipCode:"58090",country:"Mozambique"}},{general:{firstName:"Granville",lastName:"Larson",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gregkilian/128.jpg",show:!0},job:{company:"Metz - Bashirian",title:"Senior Brand Associate"},contact:{email:"Judd6@hotmail.com",phone:"1-817-435-1136 x8014"},address:{street:"357 Jeffrey Avenue",city:"Hand side",zipCode:"89647-5238",country:"Morocco"}},{general:{firstName:"Donnie",lastName:"Macejkovic",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",show:!0},job:{company:"Schmeler - Romaguera",title:"Senior Functionality Facilitator"},contact:{email:"Camryn_Gerhold@hotmail.com",phone:"(186) 005-2043"},address:{street:"76139 Hayes Plaza",city:"Emard stad",zipCode:"45180",country:"Western Sahara"}},{general:{firstName:"Estell",lastName:"Baumbach",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/janpalounek/128.jpg",show:!0},job:{company:"Kuphal - Renner",title:"Principal Mobility Associate"},contact:{email:"Cassie_Brekke@yahoo.com",phone:"1-354-996-2400 x08787"},address:{street:"64955 Ottilie Port",city:"Bartell mouth",zipCode:"62822-8781",country:"Belgium"}},{general:{firstName:"Amelie",lastName:"Bradtke",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vanchesz/128.jpg",show:!0},job:{company:"Swift LLC",title:"Dynamic Program Representative"},contact:{email:"Prudence.Hane49@yahoo.com",phone:"699-872-8424"},address:{street:"198 White Isle",city:"Breitenberg land",zipCode:"02161",country:"Montserrat"}},{general:{firstName:"Elmer",lastName:"D'Amore",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",show:!0},job:{company:"Schaden Group",title:"Regional Brand Strategist"},contact:{email:"Margarett57@gmail.com",phone:"1-236-341-6098 x2838"},address:{street:"26952 Welch Course",city:"Lake Carmella land",zipCode:"85577-5136",country:"Israel"}}]},43:function(e,t,a){e.exports=a(108)},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){}},[[43,2,1]]]);
//# sourceMappingURL=main.842fd6ae.chunk.js.map