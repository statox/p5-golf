import{s as ae,f as w,a as S,l as X,g as _,h as T,d as p,c as E,m as H,u as G,j as L,i as k,y,L as q,n as Q,M as $e,z as be,e as ut,P as ge,Q as Oe,O as He}from"../chunks/scheduler.32ebed32.js";import{S as ue,i as de,b as ne,d as oe,m as se,a as re,t as le,e as ie}from"../chunks/index.c25c2528.js";import{P as Te,c as $,V as i,d as Ge,m as Ze,a as Xe,w as Ve,s as ht,C as pt}from"../chunks/PhysicObject.d0894205.js";import{W as Pe}from"../chunks/World.d1f6124d.js";function yt(r){let t,o,c,s,e=r[0][r[0].length-1]+"",a,m,n,l="New ball",d,u,x;return o=new Te({props:{sketch:r[2]}}),{c(){t=w("div"),ne(o.$$.fragment),c=S(),s=w("p"),a=X(e),m=S(),n=w("button"),n.textContent=l,this.h()},l(h){t=_(h,"DIV",{class:!0});var g=T(t);oe(o.$$.fragment,g),g.forEach(p),c=E(h),s=_(h,"P",{});var v=T(s);a=H(v,e),v.forEach(p),m=E(h),n=_(h,"BUTTON",{"data-svelte-h":!0}),G(n)!=="svelte-1jwbm46"&&(n.textContent=l),this.h()},h(){L(t,"class","d-flex justify-content-center")},m(h,g){k(h,t,g),se(o,t,null),k(h,c,g),k(h,s,g),y(s,a),k(h,m,g),k(h,n,g),d=!0,u||(x=q(n,"click",r[1]),u=!0)},p(h,[g]){(!d||g&1)&&e!==(e=h[0][h[0].length-1]+"")&&Q(a,e)},i(h){d||(re(o.$$.fragment,h),d=!0)},o(h){le(o.$$.fragment,h),d=!1},d(h){h&&(p(t),p(c),p(s),p(m),p(n)),ie(o),u=!1,x()}}}function vt(r,t,o){console.clear();let c=[];const s=l=>{const d=l.objects[l.objects.length-1],u=d.position.clone().toFixed(2),x=d.velocity.clone().toFixed(2);c.push(`${l.t.toFixed(2)} - pos: ${u} - vel: ${x}`),c.length>50&&c.shift(),o(0,c)},e=new Pe({reporter:s,enableGravity:!0}),a=()=>{for(;e.objects.length;)e.objects.pop();const l=$({geometry:{type:"line",vector:new i(100,0)},position:new i(0,0),fixed:!0});e.addObject(l);for(let d=0;d<1;d++){const u=$({geometry:{type:"sphere",r:5},position:new i(20,50),velocity:new i(Math.random()*5-2.5,Math.random()*20)});e.addObject(u)}};let m;const n=l=>{l.setup=()=>{m=l,l.createCanvas(900,600),l.background(0),l.fill(255),l.stroke(255),a()},l.draw=()=>{l.background(0),e.step();for(const d of e.objects){const u=l.map(d.position.x,0,e.dimensions.x,0,l.width),x=l.map(d.position.y,0,e.dimensions.y,l.height,0);if(d.geometry.type==="sphere"&&(l.strokeWeight(d.geometry.r*2),l.point(u,x)),d.geometry.type==="line"){const h=u+l.map(d.geometry.vector.x,0,e.dimensions.x,0,l.width),g=x+l.map(d.geometry.vector.y,0,e.dimensions.y,0,l.height);l.strokeWeight(2),l.line(u,x,h,g)}}}};return $e(()=>{m==null||m.remove()}),[c,a,n]}class gt extends ue{constructor(t){super(),de(this,t,vt,yt,ae,{})}}function bt(r){let t,o,c,s,e=r[0][r[0].length-1]+"",a,m,n,l="New ball",d,u,x;return o=new Te({props:{sketch:r[2]}}),{c(){t=w("div"),ne(o.$$.fragment),c=S(),s=w("p"),a=X(e),m=S(),n=w("button"),n.textContent=l,this.h()},l(h){t=_(h,"DIV",{class:!0});var g=T(t);oe(o.$$.fragment,g),g.forEach(p),c=E(h),s=_(h,"P",{});var v=T(s);a=H(v,e),v.forEach(p),m=E(h),n=_(h,"BUTTON",{"data-svelte-h":!0}),G(n)!=="svelte-1jwbm46"&&(n.textContent=l),this.h()},h(){L(t,"class","d-flex justify-content-center")},m(h,g){k(h,t,g),se(o,t,null),k(h,c,g),k(h,s,g),y(s,a),k(h,m,g),k(h,n,g),d=!0,u||(x=q(n,"click",r[1]),u=!0)},p(h,[g]){(!d||g&1)&&e!==(e=h[0][h[0].length-1]+"")&&Q(a,e)},i(h){d||(re(o.$$.fragment,h),d=!0)},o(h){le(o.$$.fragment,h),d=!1},d(h){h&&(p(t),p(c),p(s),p(m),p(n)),ie(o),u=!1,x()}}}const Ae=6;function wt(r,t,o){console.clear();let c=[];const s=u=>{const x=u.objects[u.objects.length-1],h=x.position.clone().toFixed(2),g=x.velocity.clone().toFixed(2);c.push(`${u.t.toFixed(2)} - pos: ${h} - vel: ${g}`),c.length>50&&c.shift(),o(0,c)},e=new Pe({reporter:s,enableGravity:!0});let a,m;const n=()=>{for(;e.objects.length;)e.objects.pop();m=$({geometry:{type:"line",vector:new i(40,40)},position:new i(30,30),fixed:!0}),e.addObject(m),a=$({geometry:{type:"sphere",r:10},position:new i(20,50),velocity:new i(2.5,2.5),fixed:!0}),e.addObject(a)};let l;const d=u=>{const x=v=>typeof v=="number"?v*Ae:v.clone().multiplyScalar(Ae),h=v=>typeof v=="number"?v/Ae:v.clone().divideScalar(Ae);u.setup=()=>{l=u;const v=x(e.dimensions);u.createCanvas(v.x,v.y),u.background(0),u.fill(255),u.stroke(255),n()};let g;u.draw=()=>{if(u.background(0),e.step(),u.mouseIsPressed){const v=h(new i(u.mouseX,u.height-u.mouseY));if(g||(v.distance(a.position)<2?g="sphere":v.distance(m.position)<2?g="wallstart":v.distance(m.geometry.vector.clone().add(m.position))<2&&(g="wallend")),g==="sphere"&&a.position.copy(v),g==="wallstart"&&m.position.copy(v),g==="wallend"){const f=v.clone().subtract(m.position);m.geometry.vector.copy(f)}}else g=void 0;for(const v of e.objects.sort((f,b)=>f.geometry.type<b.geometry.type?1:-1)){u.stroke(a.data.isColliding?"red":"white");const f=u.map(v.position.x,0,e.dimensions.x,0,u.width),b=u.map(v.position.y,0,e.dimensions.y,u.height,0);if(v.geometry.type==="sphere"){const B=x(v.geometry.r*2);u.strokeWeight(B),u.point(f,b)}if(v.geometry.type==="line"){const B=f+u.map(v.geometry.vector.x,0,e.dimensions.x,0,u.width),j=b-u.map(v.geometry.vector.y,0,e.dimensions.y,0,u.height);u.stroke("blue"),u.strokeWeight(2),u.line(f,b,B,j)}}}};return $e(()=>{l==null||l.remove()}),[c,n,d]}class _t extends ue{constructor(t){super(),de(this,t,wt,bt,ae,{})}}function xt(r){let t,o,c;return o=new Te({props:{sketch:r[0]}}),{c(){t=w("div"),ne(o.$$.fragment),this.h()},l(s){t=_(s,"DIV",{class:!0});var e=T(t);oe(o.$$.fragment,e),e.forEach(p),this.h()},h(){L(t,"class","d-flex justify-content-center")},m(s,e){k(s,t,e),se(o,t,null),c=!0},p:be,i(s){c||(re(o.$$.fragment,s),c=!0)},o(s){le(o.$$.fragment,s),c=!1},d(s){s&&p(t),ie(o)}}}const Ue=6;function $t(r){console.clear();const t=new Pe({reporter:()=>{},enableGravity:!0});let o;const c=()=>{for(;t.objects.length;)t.objects.pop();o=$({geometry:{type:"sphere",r:5},position:new i(20,50),velocity:new i(Math.random()*5-2.5,Math.random()*20)}),t.addObject(o);const n=$({geometry:{type:"line",vector:new i(100,0)},position:new i(0,2),fixed:!0});t.addObject(n);const l=$({geometry:{type:"line",vector:new i(100,0)},position:new i(0,98),fixed:!0});t.addObject(l);const d=$({geometry:{type:"line",vector:new i(0,100)},position:new i(2,0),fixed:!0});t.addObject(d);const u=$({geometry:{type:"line",vector:new i(0,100)},position:new i(98,0),fixed:!0});t.addObject(u);const x=$({geometry:{type:"line",vector:new i(50,50)},position:new i(20,10),fixed:!0});t.addObject(x)},s=n=>typeof n=="number"?n*Ue:n.clone().multiplyScalar(Ue),e=n=>typeof n=="number"?n/Ue:n.clone().divideScalar(Ue);let a;const m=n=>{n.setup=()=>{a=n;const d=s(t.dimensions);n.createCanvas(d.x,d.y),n.background(0),n.fill(255),n.stroke(255),c()},n.draw=()=>{if(n.background(0),n.mouseIsPressed){o.fixed=!0;const d=e(new i(n.mouseX,n.height-n.mouseY));o.position.copy(d)}else o.fixed=!1;t.step(),Ge(n,t)};let l;n.mousePressed=()=>{l=e(new i(n.mouseX,n.height-n.mouseY))},n.mouseReleased=()=>{const d=e(new i(n.mouseX,n.height-n.mouseY)),u=l.subtract(d);o.position.copy(d),o.velocity.copy(u)}};return $e(()=>{a==null||a.remove()}),[m]}class Tt extends ue{constructor(t){super(),de(this,t,$t,xt,ae,{})}}function kt(r){let t,o,c,s,e,a,m,n="Gravity",l,d,u,x="Toggle",h,g,v;return o=new Te({props:{sketch:r[1]}}),{c(){t=w("div"),ne(o.$$.fragment),c=S(),s=w("table"),e=w("tbody"),a=w("tr"),m=w("th"),m.textContent=n,l=S(),d=w("td"),u=w("button"),u.textContent=x,this.h()},l(f){t=_(f,"DIV",{class:!0});var b=T(t);oe(o.$$.fragment,b),b.forEach(p),c=E(f),s=_(f,"TABLE",{});var B=T(s);e=_(B,"TBODY",{});var j=T(e);a=_(j,"TR",{});var F=T(a);m=_(F,"TH",{"data-svelte-h":!0}),G(m)!=="svelte-vy75us"&&(m.textContent=n),l=E(F),d=_(F,"TD",{});var I=T(d);u=_(I,"BUTTON",{"data-svelte-h":!0}),G(u)!=="svelte-18lc94l"&&(u.textContent=x),I.forEach(p),F.forEach(p),j.forEach(p),B.forEach(p),this.h()},h(){L(t,"class","d-flex justify-content-center")},m(f,b){k(f,t,b),se(o,t,null),k(f,c,b),k(f,s,b),y(s,e),y(e,a),y(a,m),y(a,l),y(a,d),y(d,u),h=!0,g||(v=q(u,"click",r[2]),g=!0)},p:be,i(f){h||(re(o.$$.fragment,f),h=!0)},o(f){le(o.$$.fragment,f),h=!1},d(f){f&&(p(t),p(c),p(s)),ie(o),g=!1,v()}}}const Re=6;function Ct(r){console.clear();const t=new Pe({reporter:()=>{},enableGravity:!0});let o;const c=()=>{for(;t.objects.length;)t.objects.pop();const l=$({geometry:{type:"line",vector:new i(100,0)},position:new i(0,0),fixed:!0});t.addObject(l);const d=$({geometry:{type:"line",vector:new i(100,0)},position:new i(0,100),fixed:!0});t.addObject(d);const u=$({geometry:{type:"line",vector:new i(0,100)},position:new i(0,0),fixed:!0});t.addObject(u);const x=$({geometry:{type:"line",vector:new i(0,100)},position:new i(100,0),fixed:!0});t.addObject(x);const h=$({geometry:{type:"line",vector:new i(50,50)},position:new i(20,10),fixed:!0});t.addObject(h),o=$({geometry:{type:"sphere",r:2},position:new i(20,50),velocity:new i(Math.random()*5-2.5,Math.random()*20)}),t.addObject(o)},s=l=>typeof l=="number"?l*Re:l.clone().multiplyScalar(Re),e=l=>typeof l=="number"?l/Re:l.clone().divideScalar(Re);let a;const m=l=>{l.setup=()=>{a=l;const u=s(t.dimensions);l.createCanvas(u.x,u.y),l.background(0),l.fill(255),l.stroke(255),c()},l.draw=()=>{if(l.background(0),Ze(l)){o.fixed=!0;const u=e(new i(l.mouseX,l.height-l.mouseY));o.position.copy(u)}else o.fixed=!1;t.step(),Ge(l,t)};let d;l.mousePressed=()=>{Xe(l)&&(d=e(new i(l.mouseX,l.height-l.mouseY)))},l.mouseReleased=()=>{if(!Xe(l))return;const u=e(new i(l.mouseX,l.height-l.mouseY)),x=d.subtract(u);o.position.copy(u),o.velocity.copy(x)}};return $e(()=>{a==null||a.remove()}),[t,m,()=>t.toggleGravity()]}class St extends ue{constructor(t){super(),de(this,t,Ct,kt,ae,{})}}function dt(r){let t,o,c,s,e="dt",a,m,n,l,d,u,x="drag",h,g,v,f,b,B,j="gravity enabled",F,I,N,W,z;return{c(){t=w("table"),o=w("tbody"),c=w("tr"),s=w("th"),s.textContent=e,a=S(),m=w("td"),n=w("input"),l=S(),d=w("tr"),u=w("th"),u.textContent=x,h=S(),g=w("td"),v=w("input"),f=S(),b=w("tr"),B=w("th"),B.textContent=j,F=S(),I=w("td"),N=w("input"),this.h()},l(M){t=_(M,"TABLE",{});var U=T(t);o=_(U,"TBODY",{});var C=T(o);c=_(C,"TR",{});var D=T(c);s=_(D,"TH",{"data-svelte-h":!0}),G(s)!=="svelte-16dheti"&&(s.textContent=e),a=E(D),m=_(D,"TD",{});var R=T(m);n=_(R,"INPUT",{type:!0,min:!0,max:!0,step:!0}),R.forEach(p),D.forEach(p),l=E(C),d=_(C,"TR",{});var J=T(d);u=_(J,"TH",{"data-svelte-h":!0}),G(u)!=="svelte-2hq5g"&&(u.textContent=x),h=E(J),g=_(J,"TD",{});var K=T(g);v=_(K,"INPUT",{type:!0,min:!0,max:!0,step:!0}),K.forEach(p),J.forEach(p),f=E(C),b=_(C,"TR",{});var Y=T(b);B=_(Y,"TH",{"data-svelte-h":!0}),G(B)!=="svelte-ic0r87"&&(B.textContent=j),F=E(Y),I=_(Y,"TD",{});var te=T(I);N=_(te,"INPUT",{type:!0}),te.forEach(p),Y.forEach(p),C.forEach(p),U.forEach(p),this.h()},h(){L(n,"type","number"),L(n,"min","0"),L(n,"max","0.5"),L(n,"step","0.001"),L(v,"type","number"),L(v,"min","0"),L(v,"max","0.01"),L(v,"step","0.001"),L(N,"type","checkbox")},m(M,U){k(M,t,U),y(t,o),y(o,c),y(c,s),y(c,a),y(c,m),y(m,n),ge(n,r[0].dt),y(o,l),y(o,d),y(d,u),y(d,h),y(d,g),y(g,v),ge(v,r[0].drag),y(o,f),y(o,b),y(b,B),y(b,F),y(b,I),y(I,N),N.checked=r[0].gravityEnabled,W||(z=[q(n,"input",r[1]),q(v,"input",r[2]),q(N,"change",r[3])],W=!0)},p(M,U){U&1&&Oe(n.value)!==M[0].dt&&ge(n,M[0].dt),U&1&&Oe(v.value)!==M[0].drag&&ge(v,M[0].drag),U&1&&(N.checked=M[0].gravityEnabled)},d(M){M&&p(t),W=!1,He(z)}}}function Et(r){let t,o="Engine settings",c,s,e=r[0]&&dt(r);return{c(){t=w("p"),t.textContent=o,c=S(),e&&e.c(),s=ut(),this.h()},l(a){t=_(a,"P",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-gf3gek"&&(t.textContent=o),c=E(a),e&&e.l(a),s=ut(),this.h()},h(){L(t,"class","title svelte-g74uk9")},m(a,m){k(a,t,m),k(a,c,m),e&&e.m(a,m),k(a,s,m)},p(a,[m]){a[0]?e?e.p(a,m):(e=dt(a),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:be,o:be,d(a){a&&(p(t),p(c),p(s)),e&&e.d(a)}}}function jt(r,t,o){let{world:c}=t;function s(){c.dt=Oe(this.value),o(0,c)}function e(){c.drag=Oe(this.value),o(0,c)}function a(){c.gravityEnabled=this.checked,o(0,c)}return r.$$set=m=>{"world"in m&&o(0,c=m.world)},[c,s,e,a]}class mt extends ue{constructor(t){super(),de(this,t,jt,Et,ae,{world:0})}}function Ot(r){let t,o="Shooter",c,s,e,a="Angle",m,n,l,d,u,x,h,g,v="Magnitude",f,b,B,j,F,I,N,W,z="Shoot",M,U;return{c(){t=w("p"),t.textContent=o,c=S(),s=w("span"),e=w("label"),e.textContent=a,m=S(),n=w("input"),l=S(),d=X(r[0]),u=X(" deg"),x=S(),h=w("span"),g=w("label"),g.textContent=v,f=S(),b=w("input"),B=S(),j=X(r[1]),F=S(),I=w("br"),N=S(),W=w("button"),W.textContent=z,this.h()},l(C){t=_(C,"P",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-198ugk3"&&(t.textContent=o),c=E(C),s=_(C,"SPAN",{});var D=T(s);e=_(D,"LABEL",{for:!0,"data-svelte-h":!0}),G(e)!=="svelte-lab87n"&&(e.textContent=a),m=E(D),n=_(D,"INPUT",{id:!0,type:!0,min:!0,max:!0}),l=E(D),d=H(D,r[0]),u=H(D," deg"),D.forEach(p),x=E(C),h=_(C,"SPAN",{});var R=T(h);g=_(R,"LABEL",{for:!0,"data-svelte-h":!0}),G(g)!=="svelte-1vc5oxa"&&(g.textContent=v),f=E(R),b=_(R,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),B=E(R),j=H(R,r[1]),R.forEach(p),F=E(C),I=_(C,"BR",{}),N=E(C),W=_(C,"BUTTON",{"data-svelte-h":!0}),G(W)!=="svelte-8jpwxr"&&(W.textContent=z),this.h()},h(){L(t,"class","title svelte-g74uk9"),L(e,"for","angleSlider"),L(n,"id","angleSlider"),L(n,"type","range"),L(n,"min","0"),L(n,"max","360"),L(g,"for","magSlider"),L(b,"id","magSlider"),L(b,"type","range"),L(b,"min","0"),L(b,"max","1"),L(b,"step","0.01")},m(C,D){k(C,t,D),k(C,c,D),k(C,s,D),y(s,e),y(s,m),y(s,n),ge(n,r[0]),y(s,l),y(s,d),y(s,u),k(C,x,D),k(C,h,D),y(h,g),y(h,f),y(h,b),ge(b,r[1]),y(h,B),y(h,j),k(C,F,D),k(C,I,D),k(C,N,D),k(C,W,D),M||(U=[q(n,"change",r[4]),q(n,"input",r[4]),q(b,"change",r[5]),q(b,"input",r[5]),q(W,"click",r[6])],M=!0)},p(C,[D]){D&1&&ge(n,C[0]),D&1&&Q(d,C[0]),D&2&&ge(b,C[1]),D&2&&Q(j,C[1])},i:be,o:be,d(C){C&&(p(t),p(c),p(s),p(x),p(h),p(F),p(I),p(N),p(W)),M=!1,He(U)}}}function Pt(r,t,o){let{onShoot:c}=t,s=0,e=.5;const a=()=>{const d=new i(1,0);d.rotateDeg(s),d.multiplyScalar(e),c(d)};function m(){s=Oe(this.value),o(0,s)}function n(){e=Oe(this.value),o(1,e)}const l=()=>a();return r.$$set=d=>{"onShoot"in d&&o(3,c=d.onShoot)},[s,e,a,c,m,n,l]}class Dt extends ue{constructor(t){super(),de(this,t,Pt,Ot,ae,{onShoot:3})}}const Bt=()=>{const r=[],t=$({geometry:{type:"line",vector:new i(15,0)},position:new i(0,0),fixed:!0});r.push(t);const o=$({geometry:{type:"line",vector:new i(0,100)},position:new i(0,0),fixed:!0});r.push(o);const c=$({geometry:{type:"line",vector:new i(0,100)},position:new i(15,0),fixed:!0});r.push(c);const s=$({geometry:{type:"line",vector:new i(3,-3)},position:new i(3.5,8),fixed:!0});r.push(s);const e=$({geometry:{type:"line",vector:new i(3,3)},position:new i(3.5,5),fixed:!0});r.push(e);const a=$({geometry:{type:"line",vector:new i(6,0)},position:new i(2,2),fixed:!0});r.push(a);const m=$({geometry:{type:"line",vector:new i(4,0)},position:new i(3,2.5),fixed:!0});r.push(m);const n=$({geometry:{type:"line",vector:new i(2,0)},position:new i(4,3),fixed:!0});r.push(n);const l=$({geometry:{type:"line",vector:new i(.6,0)},position:new i(4.7,3.5),fixed:!0});r.push(l);const d=$({geometry:{type:"line",vector:new i(1,0)},position:new i(10,10.1),fixed:!0});r.push(d);const u=$({geometry:{type:"line",vector:new i(0,-4)},position:new i(11,10),fixed:!0});r.push(u);const x=$({geometry:{type:"line",vector:new i(0,-4)},position:new i(11.5,10),fixed:!0});r.push(x);const h=$({geometry:{type:"line",vector:new i(0,-4)},position:new i(12,10),fixed:!0});r.push(h);const g=$({geometry:{type:"line",vector:new i(1,0)},position:new i(12,10.1),fixed:!0});r.push(g);for(let f=.2;f<.5;f+=.1)for(let b=0;b<10;b++){const B=$({geometry:{type:"line",vector:new i(0,3)},position:new i(9+b*f,1),fixed:!0});r.push(B)}const v=$({geometry:{type:"sphere",r:.1},position:new i(5,10),velocity:new i(0,0)});return r.push(v),{objects:r,sphere:v}};function It(r){let t,o,c,s,e,a=r[0]?"Disable":"Enable",m,n,l,d,u=r[1]?"Play":"Pause",x,h,g,v="Reset",f,b,B,j,F,I,N,W,z,M="Simulation time/Frame duration",U,C,D=r[2].t+"",R,J,K,Y=r[2].frameTime+"",te,ke,O,V,Z="Sphere position",we,he,pe=r[2].spherePos.x.toFixed(2)+"",_e,ce,ye,ve=r[2].spherePos.y.toFixed(2)+"",Ne,qe,fe,Ce,et="Sphere velocity",ze,De,Be=r[2].sphereVel.x.toFixed(2)+"",We,Qe,Ie,Fe=r[2].sphereVel.y.toFixed(2)+"",Me,ee,Je,tt;return o=new Te({props:{sketch:r[5]}}),b=new Dt({props:{onShoot:r[6]}}),j=new mt({props:{world:r[3]}}),{c(){t=w("div"),ne(o.$$.fragment),c=S(),s=w("div"),e=w("button"),m=X(a),n=X(" pause on collision"),l=S(),d=w("button"),x=X(u),h=S(),g=w("button"),g.textContent=v,f=S(),ne(b.$$.fragment),B=S(),ne(j.$$.fragment),F=S(),I=w("table"),N=w("tbody"),W=w("tr"),z=w("th"),z.textContent=M,U=S(),C=w("td"),R=X(D),J=S(),K=w("td"),te=X(Y),ke=S(),O=w("tr"),V=w("th"),V.textContent=Z,we=S(),he=w("td"),_e=X(pe),ce=S(),ye=w("td"),Ne=X(ve),qe=S(),fe=w("tr"),Ce=w("th"),Ce.textContent=et,ze=S(),De=w("td"),We=X(Be),Qe=S(),Ie=w("td"),Me=X(Fe),this.h()},l(P){t=_(P,"DIV",{class:!0});var A=T(t);oe(o.$$.fragment,A),A.forEach(p),c=E(P),s=_(P,"DIV",{});var me=T(s);e=_(me,"BUTTON",{});var Ke=T(e);m=H(Ke,a),n=H(Ke," pause on collision"),Ke.forEach(p),l=E(me),d=_(me,"BUTTON",{});var nt=T(d);x=H(nt,u),nt.forEach(p),h=E(me),g=_(me,"BUTTON",{"data-svelte-h":!0}),G(g)!=="svelte-tlxueg"&&(g.textContent=v),me.forEach(p),f=E(P),oe(b.$$.fragment,P),B=E(P),oe(j.$$.fragment,P),F=E(P),I=_(P,"TABLE",{});var ot=T(I);N=_(ot,"TBODY",{});var Le=T(N);W=_(Le,"TR",{});var Se=T(W);z=_(Se,"TH",{"data-svelte-h":!0}),G(z)!=="svelte-rirgm4"&&(z.textContent=M),U=E(Se),C=_(Se,"TD",{});var st=T(C);R=H(st,D),st.forEach(p),J=E(Se),K=_(Se,"TD",{});var rt=T(K);te=H(rt,Y),rt.forEach(p),Se.forEach(p),ke=E(Le),O=_(Le,"TR",{});var xe=T(O);V=_(xe,"TH",{"data-svelte-h":!0}),G(V)!=="svelte-1y1nif6"&&(V.textContent=Z),we=E(xe),he=_(xe,"TD",{});var lt=T(he);_e=H(lt,pe),lt.forEach(p),ce=E(xe),ye=_(xe,"TD",{});var it=T(ye);Ne=H(it,ve),it.forEach(p),qe=E(xe),xe.forEach(p),fe=_(Le,"TR",{});var Ee=T(fe);Ce=_(Ee,"TH",{"data-svelte-h":!0}),G(Ce)!=="svelte-1uw1fs2"&&(Ce.textContent=et),ze=E(Ee),De=_(Ee,"TD",{});var ct=T(De);We=H(ct,Be),ct.forEach(p),Qe=E(Ee),Ie=_(Ee,"TD",{});var at=T(Ie);Me=H(at,Fe),at.forEach(p),Ee.forEach(p),Le.forEach(p),ot.forEach(p),this.h()},h(){L(t,"class","d-flex justify-content-center")},m(P,A){k(P,t,A),se(o,t,null),k(P,c,A),k(P,s,A),y(s,e),y(e,m),y(e,n),y(s,l),y(s,d),y(d,x),y(s,h),y(s,g),k(P,f,A),se(b,P,A),k(P,B,A),se(j,P,A),k(P,F,A),k(P,I,A),y(I,N),y(N,W),y(W,z),y(W,U),y(W,C),y(C,R),y(W,J),y(W,K),y(K,te),y(N,ke),y(N,O),y(O,V),y(O,we),y(O,he),y(he,_e),y(O,ce),y(O,ye),y(ye,Ne),y(O,qe),y(N,fe),y(fe,Ce),y(fe,ze),y(fe,De),y(De,We),y(fe,Qe),y(fe,Ie),y(Ie,Me),ee=!0,Je||(tt=[q(e,"click",r[7]),q(d,"click",r[8]),q(g,"click",r[4])],Je=!0)},p(P,[A]){(!ee||A&1)&&a!==(a=P[0]?"Disable":"Enable")&&Q(m,a),(!ee||A&2)&&u!==(u=P[1]?"Play":"Pause")&&Q(x,u);const me={};A&8&&(me.world=P[3]),j.$set(me),(!ee||A&4)&&D!==(D=P[2].t+"")&&Q(R,D),(!ee||A&4)&&Y!==(Y=P[2].frameTime+"")&&Q(te,Y),(!ee||A&4)&&pe!==(pe=P[2].spherePos.x.toFixed(2)+"")&&Q(_e,pe),(!ee||A&4)&&ve!==(ve=P[2].spherePos.y.toFixed(2)+"")&&Q(Ne,ve),(!ee||A&4)&&Be!==(Be=P[2].sphereVel.x.toFixed(2)+"")&&Q(We,Be),(!ee||A&4)&&Fe!==(Fe=P[2].sphereVel.y.toFixed(2)+"")&&Q(Me,Fe)},i(P){ee||(re(o.$$.fragment,P),re(b.$$.fragment,P),re(j.$$.fragment,P),ee=!0)},o(P){le(o.$$.fragment,P),le(b.$$.fragment,P),le(j.$$.fragment,P),ee=!1},d(P){P&&(p(t),p(c),p(s),p(f),p(B),p(F),p(I)),ie(o),ie(b,P),ie(j,P),Je=!1,He(tt)}}}const Ye=60;function Ft(r,t,o){console.clear();let c=!1,s=!1,e={t:"0",frameTime:"0",spherePos:new i(0,0),sphereVel:new i(0,0),ballIsColliding:!1},a,m;const n=()=>{o(3,a=new Pe({dimensions:new i(15,15),reporter:b=>{var B;o(2,e.t=(B=b==null?void 0:b.t)==null?void 0:B.toFixed(1),e),e.spherePos.copy(m.position).unfloat(),e.sphereVel.copy(m.velocity).unfloat(),o(2,e.frameTime=b.frameTime.toFixed(2),e),o(2,e),o(2,e.ballIsColliding=m.data.isColliding,e),c&&m.data.isColliding&&!s&&o(1,s=!0)},enableGravity:!0}));const f=Bt();m=f.sphere;for(const b of f.objects)a.addObject(b)},l=f=>typeof f=="number"?f*Ye:f.clone().multiplyScalar(Ye),d=f=>typeof f=="number"?f/Ye:f.clone().divideScalar(Ye);let u;const x=f=>{f.setup=()=>{u=f,n();const j=l(a.dimensions);f.createCanvas(j.x,j.y),f.background(0),f.fill(255),f.stroke(255),n()},f.draw=()=>{f.background(0),Ze(f)?m.fixed=!0:m.fixed=!1,s||a.step(),Ge(f,a),B(f)};let b;f.mousePressed=()=>{Xe(f)&&(b=d(new i(f.mouseX,f.height-f.mouseY)),m.position.copy(b))},f.mouseReleased=()=>{if(!Xe(f)||!b)return;const j=d(new i(f.mouseX,f.height-f.mouseY)),F=b.subtract(j).multiplyScalar(3);b=void 0,m.velocity.copy(F)};const B=j=>{if(!b)return;j.stroke("blue"),j.strokeWeight(2);const F=l(b);j.line(F.x,j.height-F.y,j.mouseX,j.mouseY)}},h=f=>{f.multiplyScalar(1e4),a.applyForce(m,f)};return $e(()=>{u==null||u.remove()}),[c,s,e,a,n,x,h,()=>o(0,c=!c),()=>o(1,s=!s)]}let Lt=class extends ue{constructor(t){super(),de(this,t,Ft,It,ae,{})}};const Nt=()=>{const r=[],t=$({geometry:{type:"line",vector:new i(15,0)},position:new i(0,0),fixed:!0});r.push(t);const o=$({geometry:{type:"line",vector:new i(0,100)},position:new i(0,0),fixed:!0});r.push(o);const c=$({geometry:{type:"line",vector:new i(0,100)},position:new i(15,0),fixed:!0});r.push(c);const s=$({geometry:{type:"line",vector:new i(3,-3)},position:new i(3.5,8),fixed:!0});r.push(s);const e=$({geometry:{type:"line",vector:new i(3,3)},position:new i(3.5,5),fixed:!0});r.push(e);const a=$({geometry:{type:"line",vector:new i(6,0)},position:new i(2,2),fixed:!0});r.push(a);const m=$({geometry:{type:"line",vector:new i(4,0)},position:new i(3,2.5),fixed:!0});r.push(m);const n=$({geometry:{type:"line",vector:new i(2,0)},position:new i(4,3),fixed:!0});r.push(n);const l=$({geometry:{type:"line",vector:new i(.6,0)},position:new i(4.7,3.5),fixed:!0});r.push(l);const d=$({geometry:{type:"line",vector:new i(1,0)},position:new i(10,10.1),fixed:!0});r.push(d);const u=$({geometry:{type:"line",vector:new i(0,-4)},position:new i(11,10),fixed:!0});r.push(u);const x=$({geometry:{type:"line",vector:new i(0,-4)},position:new i(11.5,10),fixed:!0});r.push(x);const h=$({geometry:{type:"line",vector:new i(0,-4)},position:new i(12,10),fixed:!0});r.push(h);const g=$({geometry:{type:"line",vector:new i(1,0)},position:new i(12,10.1),fixed:!0});r.push(g);for(let v=.2;v<.5;v+=.1)for(let f=0;f<10;f++){const b=$({geometry:{type:"line",vector:new i(0,3)},position:new i(9+f*v,1),fixed:!0});r.push(b)}return{objects:r}};function Wt(r){let t,o,c,s,e,a=r[0]?"Disable":"Enable",m,n,l,d,u=r[1]?"Play":"Pause",x,h,g,v="Reset",f,b,B,j,F,I,N,W="Simulation time/Frame duration",z,M,U=r[2].t+"",C,D,R,J=r[2].frameTime+"",K,Y,te,ke;return o=new Te({props:{sketch:r[5]}}),b=new mt({props:{world:r[3]}}),{c(){t=w("div"),ne(o.$$.fragment),c=S(),s=w("div"),e=w("button"),m=X(a),n=X(" pause on collision"),l=S(),d=w("button"),x=X(u),h=S(),g=w("button"),g.textContent=v,f=S(),ne(b.$$.fragment),B=S(),j=w("table"),F=w("tbody"),I=w("tr"),N=w("th"),N.textContent=W,z=S(),M=w("td"),C=X(U),D=S(),R=w("td"),K=X(J),this.h()},l(O){t=_(O,"DIV",{class:!0});var V=T(t);oe(o.$$.fragment,V),V.forEach(p),c=E(O),s=_(O,"DIV",{});var Z=T(s);e=_(Z,"BUTTON",{});var we=T(e);m=H(we,a),n=H(we," pause on collision"),we.forEach(p),l=E(Z),d=_(Z,"BUTTON",{});var he=T(d);x=H(he,u),he.forEach(p),h=E(Z),g=_(Z,"BUTTON",{"data-svelte-h":!0}),G(g)!=="svelte-tlxueg"&&(g.textContent=v),Z.forEach(p),f=E(O),oe(b.$$.fragment,O),B=E(O),j=_(O,"TABLE",{});var pe=T(j);F=_(pe,"TBODY",{});var _e=T(F);I=_(_e,"TR",{});var ce=T(I);N=_(ce,"TH",{"data-svelte-h":!0}),G(N)!=="svelte-rirgm4"&&(N.textContent=W),z=E(ce),M=_(ce,"TD",{});var ye=T(M);C=H(ye,U),ye.forEach(p),D=E(ce),R=_(ce,"TD",{});var ve=T(R);K=H(ve,J),ve.forEach(p),ce.forEach(p),_e.forEach(p),pe.forEach(p),this.h()},h(){L(t,"class","d-flex justify-content-center")},m(O,V){k(O,t,V),se(o,t,null),k(O,c,V),k(O,s,V),y(s,e),y(e,m),y(e,n),y(s,l),y(s,d),y(d,x),y(s,h),y(s,g),k(O,f,V),se(b,O,V),k(O,B,V),k(O,j,V),y(j,F),y(F,I),y(I,N),y(I,z),y(I,M),y(M,C),y(I,D),y(I,R),y(R,K),Y=!0,te||(ke=[q(e,"click",r[6]),q(d,"click",r[7]),q(g,"click",r[4])],te=!0)},p(O,[V]){(!Y||V&1)&&a!==(a=O[0]?"Disable":"Enable")&&Q(m,a),(!Y||V&2)&&u!==(u=O[1]?"Play":"Pause")&&Q(x,u);const Z={};V&8&&(Z.world=O[3]),b.$set(Z),(!Y||V&4)&&U!==(U=O[2].t+"")&&Q(C,U),(!Y||V&4)&&J!==(J=O[2].frameTime+"")&&Q(K,J)},i(O){Y||(re(o.$$.fragment,O),re(b.$$.fragment,O),Y=!0)},o(O){le(o.$$.fragment,O),le(b.$$.fragment,O),Y=!1},d(O){O&&(p(t),p(c),p(s),p(f),p(B),p(j)),ie(o),ie(b,O),te=!1,He(ke)}}}const ft=60;function Mt(r,t,o){console.clear();let c=!1,s=!1,e={t:"0",frameTime:"0"},a;const m=()=>{clearInterval(u),u=setInterval(n,100),o(3,a=new Pe({dimensions:new i(15,15),reporter:f=>{var b;o(2,e.t=(b=f==null?void 0:f.t)==null?void 0:b.toFixed(1),e),o(2,e.frameTime=f.frameTime.toFixed(2),e),o(2,e)},enableGravity:!0}));const v=Nt();for(const f of v.objects)a.addObject(f)},n=()=>{console.log("add ball");const v=Math.random()*a.dimensions.x,f=Math.random()*a.dimensions.y,b=-5+Math.random()*10,B=-5+Math.random()*10,j=$({geometry:{type:"sphere",r:.1},position:new i(v,f),velocity:new i(b,B)});a.addObject(j)},l=v=>typeof v=="number"?v*ft:v.clone().multiplyScalar(ft);let d,u;const x=v=>{v.setup=()=>{d=v,m();const f=l(a.dimensions);v.createCanvas(f.x,f.y),v.background(0),v.fill(255),v.stroke(255),m()},v.draw=()=>{v.background(0),s||a.step(),Ge(v,a)}};return $e(()=>{d==null||d.remove(),clearInterval(u)}),[c,s,e,a,m,x,()=>o(0,c=!c),()=>o(1,s=!s)]}class Vt extends ue{constructor(t){super(),de(this,t,Mt,Wt,ae,{})}}function At(r){let t,o,c;return o=new Te({props:{sketch:r[0]}}),{c(){t=w("div"),ne(o.$$.fragment),this.h()},l(s){t=_(s,"DIV",{class:!0});var e=T(t);oe(o.$$.fragment,e),e.forEach(p),this.h()},h(){L(t,"class","d-flex justify-content-center")},m(s,e){k(s,t,e),se(o,t,null),c=!0},p:be,i(s){c||(re(o.$$.fragment,s),c=!0)},o(s){le(o.$$.fragment,s),c=!1},d(s){s&&p(t),ie(o)}}}const je=6;function Ut(r){console.clear();let t;const o=$({geometry:{type:"sphere",r:10},position:new i(30,50)}),c=$({geometry:{type:"line",vector:new i(10,0)},position:new i(60,50)}),s=e=>{const a=new i(100,100),m=Ve(a,je);e.setup=()=>{t=e,e.createCanvas(m.x,m.y),e.noFill()};let n;e.draw=()=>{if(e.background(0),!Ze(e))n=void 0;else{const h=ht(new i(e.mouseX,e.height-e.mouseY),je);if(n||(h.distance(o.position)<=o.geometry.r?n="sphere":h.distance(c.position)<=6?n="linestart":h.distance(c.geometry.vector.clone().add(c.position))<=6&&(n="lineend")),n==="sphere")o.position.copy(h);else if(n==="linestart")c.position.copy(h);else if(n==="lineend"){const g=h.clone().subtract(c.position);c.geometry.vector.copy(g)}}e.stroke(255);const l=Ve(o.position,je);e.circle(l.x,e.height-l.y,2*o.geometry.r*je),e.stroke(255);const{x:d,y:u}=Ve(c.position,je),x=Ve(c.geometry.vector,je);e.line(d,e.height-u,d+x.x,e.height-(u+x.y))}};return $e(()=>{t==null||t.remove()}),[s]}class Rt extends ue{constructor(t){super(),de(this,t,Ut,At,ae,{})}}function Yt(r){let t,o="<span>This page is a list of engine tests. They use the actual engine and allow me to setup different situations and check manually for regressions and bugs.</span> <br/> <span>Use the selection menu to see the different pages</span>",c,s,e,a,m;return a=new pt({props:{tabs:r[0]}}),{c(){t=w("div"),t.innerHTML=o,c=S(),s=w("br"),e=S(),ne(a.$$.fragment)},l(n){t=_(n,"DIV",{"data-svelte-h":!0}),G(t)!=="svelte-11mzr87"&&(t.innerHTML=o),c=E(n),s=_(n,"BR",{}),e=E(n),oe(a.$$.fragment,n)},m(n,l){k(n,t,l),k(n,c,l),k(n,s,l),k(n,e,l),se(a,n,l),m=!0},p:be,i(n){m||(re(a.$$.fragment,n),m=!0)},o(n){le(a.$$.fragment,n),m=!1},d(n){n&&(p(t),p(c),p(s),p(e)),ie(a,n)}}}function Xt(r){return[[{label:"Line Sphere Collider",value:Rt},{label:"Perfs - Multiple balls",value:Vt},{label:"Playground - Engine settings",value:Lt},{label:"Dynamics + collisions - 1",value:St},{label:"Dynamics + collisions - 2",value:Tt},{label:"Sphere Line - pull apart",value:_t},{label:"One ball bounce",value:gt}]]}class Jt extends ue{constructor(t){super(),de(this,t,Xt,Yt,ae,{})}}export{Jt as component};
