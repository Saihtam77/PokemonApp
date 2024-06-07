import{a as _}from"./chunk-LYWJVYMX.js";import{F as k,a as S,b as h,c as C,d as c,e as x,f as E,g as T,h as F,i as g,j as m,k as y,l as p,m as d,n as r,o as n,p as l,q as I,r as s,s as v,t as f,v as w,w as M,x as O,y as j}from"./chunk-KFEUM3WT.js";var N=(()=>{let e=class e{constructor(i){this.http=i,this.dataUrl="http://localhost:3000/Team"}GetAllTeam(){return this.http.get(this.dataUrl)}GetTeamById(i){return this.http.get(`${this.dataUrl}/${i}`)}CreateTeam(i){return this.http.post(this.dataUrl,i)}};e.\u0275fac=function(o){return new(o||e)(C(j))},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function z(t,e){if(t&1&&(r(0,"div",10),l(1,"img",11),s(2),n()),t&2){let a=e.$implicit;m(),d("src",a.image,g)("alt",a.name),m(),f(" ",a.name," ")}}function G(t,e){if(t&1&&(r(0,"div",3),l(1,"img",4),r(2,"div",5)(3,"h5",6),s(4),n(),r(5,"div",7),p(6,z,3,3,"div",8),n(),r(7,"button",9),s(8," Supprimer "),n()()()),t&2){let a=e.$implicit;m(),d("src",a.image,g)("alt",a.name),m(3),v(a.name),m(2),d("ngForOf",a.apiTypes)}}function B(t,e){if(t&1&&(r(0,"div",1),p(1,G,9,4,"div",2),n()),t&2){let a=I();m(),d("ngForOf",a.membres)}}var U=(()=>{let e=class e{constructor(i){this.teamService=i,this.addMemberEvent=new F}AddMember(i){this.membres.push(i),console.log(this.membres),this.addMemberEvent.emit(i)}SubmitTeam(){this.teamService.CreateTeam(this.membres).subscribe(i=>{console.log("Team created",i)})}};e.\u0275fac=function(o){return new(o||e)(y(N))},e.\u0275cmp=c({type:e,selectors:[["app-teams-construct-window"]],outputs:{addMemberEvent:"addMemberEvent"},decls:1,vars:1,consts:[["class","grid grid-cols-6 gap-4",4,"ngIf"],[1,"grid","grid-cols-6","gap-4"],["class","max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",4,"ngFor","ngForOf"],[1,"max-w-md","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700"],[1,"rounded-t-lg",3,"src","alt"],[1,"p-5"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-gray-900","dark:text-white"],[1,"flex","gap-x-3"],["class","flex items-center",4,"ngFor","ngForOf"],[1,"inline-flex","items-center","px-3","py-2","text-sm","font-medium","text-center","text-white","bg-red-700","rounded-lg","hover:bg-red-800","focus:ring-4","focus:outline-none","focus:ring-red-300","dark:bg-red-600","dark:hover:bg-red-700","dark:focus:ring-red-800"],[1,"flex","items-center"],[1,"w-11",3,"src","alt"]],template:function(o,b){o&1&&p(0,B,2,1,"div",0),o&2&&d("ngIf",b.membres)},dependencies:[w,M]});let t=e;return t})();function L(t,e){if(t&1&&(r(0,"span",22),l(1,"img",23),r(2,"p"),s(3),n()()),t&2){let a=e.$implicit;m(),d("src",a.image,g)("alt",a.name),m(2),v(a.name)}}function V(t,e){if(t&1&&(r(0,"tr",14)(1,"td",15),s(2),n(),r(3,"td",15),l(4,"img",16),n(),r(5,"td",17),s(6),n(),r(7,"td",18),p(8,L,4,3,"span",19),n(),r(9,"td",20)(10,"button",21),s(11,"Add to team"),n()()()),t&2){let a=e.$implicit;m(2),f(" ",a.id," "),m(2),d("src",a.sprite,g)("alt",a.name),m(2),f(" ",a.name," "),m(2),d("ngForOf",a.apiTypes)}}var A=(()=>{let e=class e{constructor(i){this.pokemonService=i,this.pokemonService.GetAllPokemon().subscribe(o=>{this.pokemons=o})}};e.\u0275fac=function(o){return new(o||e)(y(_))},e.\u0275cmp=c({type:e,selectors:[["app-pokemons-table"]],decls:26,vars:1,consts:[[1,"relative","overflow-x-auto","container","mx-auto"],[1,"pb-4","px-2","bg-white","dark:bg-gray-900"],["for","table-search",1,"sr-only"],[1,"relative","mt-1"],[1,"absolute","inset-y-0","rtl:inset-r-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","text","id","table-search","placeholder","Search for items",1,"block","pt-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","w-80","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"w-full","text-sm","text-left","rtl:text-right","text-gray-500","dark:text-gray-400","shadow-md","sm:rounded-lg"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"p-4"],["scope","col",1,"px-6","py-3"],["class","bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",4,"ngFor","ngForOf"],[1,"fixed","bottom-0","w-full","p-5"],[1,"bg-white","border-b","dark:bg-gray-800","dark:border-gray-700","hover:bg-gray-50","dark:hover:bg-gray-600"],[1,"w-4","p-4"],[1,"max-w-24",3,"src","alt"],["scope","row",1,"px-6","py-4","font-medium","text-gray-900","whitespace-nowrap","dark:text-white"],[1,"px-6","py-4","flex"],["class","flex",4,"ngFor","ngForOf"],[1,"px-6","py-4"],[1,"px-4","py-2","text-sm","text-white","bg-blue-500","rounded-lg","hover:bg-blue-600"],[1,"flex"],[1,"w-10",3,"src","alt"]],template:function(o,b){o&1&&(r(0,"section",0)(1,"div",1)(2,"label",2),s(3,"Search"),n(),r(4,"div",3)(5,"div",4),E(),r(6,"svg",5),l(7,"path",6),n()(),T(),l(8,"input",7),n()(),r(9,"table",8)(10,"thead",9)(11,"tr")(12,"th",10),s(13," Id "),n(),r(14,"th",10),s(15," sprite "),n(),r(16,"th",11),s(17," Names "),n(),r(18,"th",11),s(19," types "),n(),r(20,"th",11),s(21," Action "),n()()(),r(22,"tbody"),p(23,V,12,5,"tr",12),n()()(),r(24,"section",13),l(25,"app-teams-construct-window"),n()),o&2&&(m(23),d("ngForOf",b.pokemons))},dependencies:[w,U]});let t=e;return t})();var D=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["app-team"]],decls:1,vars:0,template:function(o,b){o&1&&l(0,"app-pokemons-table")},dependencies:[A]});let t=e;return t})();var q=[{path:"",component:D}],P=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=h({imports:[k.forChild(q),k]});let t=e;return t})();var pe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=h({imports:[O,P]});let t=e;return t})();export{pe as TeamModule};
