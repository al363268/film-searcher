(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2umI":function(e,n,i){"use strict";i.r(n),i.d(n,"FsearcherPageModule",function(){return g});var t=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),s=i("fXoL"),a=i("sUQ5");let l=(()=>{class e{transform(e,n){return 0===n.length?e:(n=n.toLocaleLowerCase(),e.filter(e=>e.title.toLocaleLowerCase().includes(n)||e.original_title.toLocaleLowerCase().includes(n)))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=s.Ib({name:"filter",type:e,pure:!0}),e})();const b=function(e){return[e]};function u(e,n){if(1&e&&(s.Ob(0,"ion-col",6),s.Ob(1,"ion-card",7),s.Ob(2,"ion-card-header"),s.Kb(3,"img",8),s.Ob(4,"ion-card-title"),s.mc(5),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&e){const e=n.$implicit;s.zb(1),s.cc("routerLink",s.fc(4,b,"/movie/"+e.id)),s.zb(2),s.ec("src","https://image.tmdb.org/t/p/w200",e.poster_path,"",s.ic),s.dc("alt",e.title),s.zb(2),s.nc(e.title)}}function f(e,n){if(1&e&&(s.Mb(0),s.Ob(1,"ion-row",4),s.kc(2,u,6,6,"ion-col",5),s.Yb(3,"filter"),s.Nb(),s.Lb()),2&e){const e=s.Xb();s.zb(2),s.cc("ngForOf",s.Zb(3,1,e.films,e.searchText))}}function m(e,n){1&e&&(s.Ob(0,"ion-card"),s.Ob(1,"ion-card-header"),s.Ob(2,"ion-card-title"),s.mc(3,"No films found"),s.Nb(),s.Nb(),s.Nb())}const h=[{path:"",component:(()=>{class e{constructor(e){this.moviesService=e,this.films=[],this.searchText=""}ngOnInit(){this.index()}index(){this.moviesService.getMovies().subscribe(e=>this.films=e.results)}searchMovie(e){const n=e.target.value;0===n.length?this.index():this.moviesService.searchMovies(n).subscribe(e=>this.films=e.results)}}return e.\u0275fac=function(n){return new(n||e)(s.Jb(a.a))},e.\u0275cmp=s.Db({type:e,selectors:[["app-fsearcher"]],decls:7,vars:2,consts:[[1,"ion-no-border"],["placeholder","Search movie...","debounce","500","animated","",3,"ionChange"],[4,"ngIf","ngIfElse"],["noFilms",""],[1,"ion-align-items-center"],["size","12","size-sm","6","size-md","4","size-lg","3",4,"ngFor","ngForOf"],["size","12","size-sm","6","size-md","4","size-lg","3"],["color","light",3,"routerLink"],[3,"src","alt"]],template:function(e,n){if(1&e&&(s.Ob(0,"ion-header",0),s.Ob(1,"ion-toolbar"),s.Ob(2,"ion-searchbar",1),s.Vb("ionChange",function(e){return n.searchMovie(e)}),s.Nb(),s.Nb(),s.Nb(),s.Ob(3,"ion-content"),s.kc(4,f,4,4,"ng-container",2),s.kc(5,m,4,0,"ng-template",null,3,s.lc),s.Nb()),2&e){const e=s.hc(6);s.zb(4),s.cc("ngIf",!!n.films&&n.films.length>0)("ngIfElse",e)}},directives:[r.m,r.r,r.p,r.v,r.k,t.i,r.o,t.h,r.j,r.e,r.u,c.h,r.g,r.i],pipes:[l],styles:["ion-col[_ngcontent-%COMP%]{text-align:center}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[c.i.forChild(h)],c.i]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({}),e})(),g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[t.b,o.a,r.s,d,p]]}),e})()}}]);