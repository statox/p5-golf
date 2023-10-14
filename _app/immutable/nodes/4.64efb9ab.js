import{s as ye,f as w,a as j,e as ht,g as _,u as K,c as P,j as N,i as S,z as Ee,d as p,h as C,y as m,P as pe,L as X,Q as ke,O as Ye,l as Q,m as J,n as ee,M as je}from"../chunks/scheduler.32ebed32.js";import{S as ve,i as ge,b as se,d as re,m as le,a as ie,t as ce,e as ae}from"../chunks/index.c25c2528.js";import{V as a,c as T,P as Pe,m as Re,d as Xe,a as Ve,w as fe,s as yt,C as gt}from"../chunks/PhysicObject.d0894205.js";import{W as Be,L as bt,S as wt}from"../chunks/World.a244ff66.js";function mt(r){let t,n,i,s,o="dt",e,y,c,l,h,f,x="drag",v,g,b,u,d,$,k="gravity enabled",L,D,F,M,H;return{c(){t=w("table"),n=w("tbody"),i=w("tr"),s=w("th"),s.textContent=o,e=j(),y=w("td"),c=w("input"),l=j(),h=w("tr"),f=w("th"),f.textContent=x,v=j(),g=w("td"),b=w("input"),u=j(),d=w("tr"),$=w("th"),$.textContent=k,L=j(),D=w("td"),F=w("input"),this.h()},l(U){t=_(U,"TABLE",{});var Y=C(t);n=_(Y,"TBODY",{});var O=C(n);i=_(O,"TR",{});var B=C(i);s=_(B,"TH",{"data-svelte-h":!0}),K(s)!=="svelte-16dheti"&&(s.textContent=o),e=P(B),y=_(B,"TD",{});var R=C(y);c=_(R,"INPUT",{type:!0,min:!0,max:!0,step:!0}),R.forEach(p),B.forEach(p),l=P(O),h=_(O,"TR",{});var G=C(h);f=_(G,"TH",{"data-svelte-h":!0}),K(f)!=="svelte-2hq5g"&&(f.textContent=x),v=P(G),g=_(G,"TD",{});var Z=C(g);b=_(Z,"INPUT",{type:!0,min:!0,max:!0,step:!0}),Z.forEach(p),G.forEach(p),u=P(O),d=_(O,"TR",{});var q=C(d);$=_(q,"TH",{"data-svelte-h":!0}),K($)!=="svelte-ic0r87"&&($.textContent=k),L=P(q),D=_(q,"TD",{});var oe=C(D);F=_(oe,"INPUT",{type:!0}),oe.forEach(p),q.forEach(p),O.forEach(p),Y.forEach(p),this.h()},h(){N(c,"type","number"),N(c,"min","0"),N(c,"max","0.5"),N(c,"step","0.001"),N(b,"type","number"),N(b,"min","0"),N(b,"max","0.01"),N(b,"step","0.001"),N(F,"type","checkbox")},m(U,Y){S(U,t,Y),m(t,n),m(n,i),m(i,s),m(i,e),m(i,y),m(y,c),pe(c,r[0].dt),m(n,l),m(n,h),m(h,f),m(h,v),m(h,g),m(g,b),pe(b,r[0].drag),m(n,u),m(n,d),m(d,$),m(d,L),m(d,D),m(D,F),F.checked=r[0].gravityEnabled,M||(H=[X(c,"input",r[1]),X(b,"input",r[2]),X(F,"change",r[3])],M=!0)},p(U,Y){Y&1&&ke(c.value)!==U[0].dt&&pe(c,U[0].dt),Y&1&&ke(b.value)!==U[0].drag&&pe(b,U[0].drag),Y&1&&(F.checked=U[0].gravityEnabled)},d(U){U&&p(t),M=!1,Ye(H)}}}function _t(r){let t,n="Engine settings",i,s,o=r[0]&&mt(r);return{c(){t=w("p"),t.textContent=n,i=j(),o&&o.c(),s=ht(),this.h()},l(e){t=_(e,"P",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-gf3gek"&&(t.textContent=n),i=P(e),o&&o.l(e),s=ht(),this.h()},h(){N(t,"class","title svelte-g74uk9")},m(e,y){S(e,t,y),S(e,i,y),o&&o.m(e,y),S(e,s,y)},p(e,[y]){e[0]?o?o.p(e,y):(o=mt(e),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i:Ee,o:Ee,d(e){e&&(p(t),p(i),p(s)),o&&o.d(e)}}}function $t(r,t,n){let{world:i}=t;function s(){i.dt=ke(this.value),n(0,i)}function o(){i.drag=ke(this.value),n(0,i)}function e(){i.gravityEnabled=this.checked,n(0,i)}return r.$$set=y=>{"world"in y&&n(0,i=y.world)},[i,s,o,e]}class ot extends ve{constructor(t){super(),ge(this,t,$t,_t,ye,{world:0})}}function xt(r){let t,n="Shooter",i,s,o,e="Angle",y,c,l,h,f,x,v,g,b="Magnitude",u,d,$,k,L,D,F,M,H="Shoot",U,Y;return{c(){t=w("p"),t.textContent=n,i=j(),s=w("span"),o=w("label"),o.textContent=e,y=j(),c=w("input"),l=j(),h=Q(r[0]),f=Q(" deg"),x=j(),v=w("span"),g=w("label"),g.textContent=b,u=j(),d=w("input"),$=j(),k=Q(r[1]),L=j(),D=w("br"),F=j(),M=w("button"),M.textContent=H,this.h()},l(O){t=_(O,"P",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-198ugk3"&&(t.textContent=n),i=P(O),s=_(O,"SPAN",{});var B=C(s);o=_(B,"LABEL",{for:!0,"data-svelte-h":!0}),K(o)!=="svelte-lab87n"&&(o.textContent=e),y=P(B),c=_(B,"INPUT",{id:!0,type:!0,min:!0,max:!0}),l=P(B),h=J(B,r[0]),f=J(B," deg"),B.forEach(p),x=P(O),v=_(O,"SPAN",{});var R=C(v);g=_(R,"LABEL",{for:!0,"data-svelte-h":!0}),K(g)!=="svelte-1vc5oxa"&&(g.textContent=b),u=P(R),d=_(R,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),$=P(R),k=J(R,r[1]),R.forEach(p),L=P(O),D=_(O,"BR",{}),F=P(O),M=_(O,"BUTTON",{"data-svelte-h":!0}),K(M)!=="svelte-8jpwxr"&&(M.textContent=H),this.h()},h(){N(t,"class","title svelte-g74uk9"),N(o,"for","angleSlider"),N(c,"id","angleSlider"),N(c,"type","range"),N(c,"min","0"),N(c,"max","360"),N(g,"for","magSlider"),N(d,"id","magSlider"),N(d,"type","range"),N(d,"min","0"),N(d,"max","1"),N(d,"step","0.01")},m(O,B){S(O,t,B),S(O,i,B),S(O,s,B),m(s,o),m(s,y),m(s,c),pe(c,r[0]),m(s,l),m(s,h),m(s,f),S(O,x,B),S(O,v,B),m(v,g),m(v,u),m(v,d),pe(d,r[1]),m(v,$),m(v,k),S(O,L,B),S(O,D,B),S(O,F,B),S(O,M,B),U||(Y=[X(c,"change",r[4]),X(c,"input",r[4]),X(d,"change",r[5]),X(d,"input",r[5]),X(M,"click",r[6])],U=!0)},p(O,[B]){B&1&&pe(c,O[0]),B&1&&ee(h,O[0]),B&2&&pe(d,O[1]),B&2&&ee(k,O[1])},i:Ee,o:Ee,d(O){O&&(p(t),p(i),p(s),p(x),p(v),p(L),p(D),p(F),p(M)),U=!1,Ye(Y)}}}function kt(r,t,n){let{onShoot:i}=t,s=0,o=.5;const e=()=>{const h=new a(1,0);h.rotateDeg(s),h.multiplyScalar(o),i(h)};function y(){s=ke(this.value),n(0,s)}function c(){o=ke(this.value),n(1,o)}const l=()=>e();return r.$$set=h=>{"onShoot"in h&&n(3,i=h.onShoot)},[s,o,e,i,y,c,l]}class vt extends ve{constructor(t){super(),ge(this,t,kt,xt,ye,{onShoot:3})}}const Tt=r=>{const t=[],n=T({geometry:{type:"line",vector:new a(15,0)},position:new a(0,0),fixed:!0});t.push(n);const i=T({geometry:{type:"line",vector:new a(0,100)},position:new a(0,0),fixed:!0});t.push(i);const s=T({geometry:{type:"line",vector:new a(0,100)},position:new a(15,0),fixed:!0});t.push(s);for(let o=0;o<r.nbBalls;o++){const e=T({geometry:{type:"sphere",r:r.rBalls},position:new a(Math.random()*15,Math.random()*15),velocity:new a(Math.random()*15,Math.random()*15)});t.push(e)}return{objects:t,sphere:t[3]}};function Ct(r){let t,n,i,s,o,e=r[0]?"Disable":"Enable",y,c,l,h,f=r[1]?"Play":"Pause",x,v,g,b="Reset",u,d,$,k,L,D,F,M,H,U="Number of balls",Y,O,B,R,G,Z,q="Balls radius",oe,de,E,W,ne,$e;return n=new Pe({props:{sketch:r[5]}}),d=new vt({props:{onShoot:r[6]}}),k=new ot({props:{world:r[3]}}),{c(){t=w("div"),se(n.$$.fragment),i=j(),s=w("div"),o=w("button"),y=Q(e),c=Q(" pause on collision"),l=j(),h=w("button"),x=Q(f),v=j(),g=w("button"),g.textContent=b,u=j(),se(d.$$.fragment),$=j(),se(k.$$.fragment),L=j(),D=w("table"),F=w("tbody"),M=w("tr"),H=w("th"),H.textContent=U,Y=j(),O=w("td"),B=w("input"),R=j(),G=w("tr"),Z=w("th"),Z.textContent=q,oe=j(),de=w("td"),E=w("input"),this.h()},l(I){t=_(I,"DIV",{class:!0});var A=C(t);re(n.$$.fragment,A),A.forEach(p),i=P(I),s=_(I,"DIV",{});var te=C(s);o=_(te,"BUTTON",{});var ue=C(o);y=J(ue,e),c=J(ue," pause on collision"),ue.forEach(p),l=P(te),h=_(te,"BUTTON",{});var be=C(h);x=J(be,f),be.forEach(p),v=P(te),g=_(te,"BUTTON",{"data-svelte-h":!0}),K(g)!=="svelte-tlxueg"&&(g.textContent=b),te.forEach(p),u=P(I),re(d.$$.fragment,I),$=P(I),re(k.$$.fragment,I),L=P(I),D=_(I,"TABLE",{});var we=C(D);F=_(we,"TBODY",{});var Te=C(F);M=_(Te,"TR",{});var Oe=C(M);H=_(Oe,"TH",{"data-svelte-h":!0}),K(H)!=="svelte-eg4byi"&&(H.textContent=U),Y=P(Oe),O=_(Oe,"TD",{});var he=C(O);B=_(he,"INPUT",{type:!0,min:!0}),he.forEach(p),Oe.forEach(p),R=P(Te),G=_(Te,"TR",{});var _e=C(G);Z=_(_e,"TH",{"data-svelte-h":!0}),K(Z)!=="svelte-10gtk36"&&(Z.textContent=q),oe=P(_e),de=_(_e,"TD",{});var Le=C(de);E=_(Le,"INPUT",{type:!0,min:!0}),Le.forEach(p),_e.forEach(p),Te.forEach(p),we.forEach(p),this.h()},h(){N(t,"class","d-flex justify-content-center"),N(B,"type","number"),N(B,"min","1"),N(E,"type","number"),N(E,"min","1")},m(I,A){S(I,t,A),le(n,t,null),S(I,i,A),S(I,s,A),m(s,o),m(o,y),m(o,c),m(s,l),m(s,h),m(h,x),m(s,v),m(s,g),S(I,u,A),le(d,I,A),S(I,$,A),le(k,I,A),S(I,L,A),S(I,D,A),m(D,F),m(F,M),m(M,H),m(M,Y),m(M,O),m(O,B),pe(B,r[2].nbBalls),m(F,R),m(F,G),m(G,Z),m(G,oe),m(G,de),m(de,E),pe(E,r[2].rBalls),W=!0,ne||($e=[X(o,"click",r[7]),X(h,"click",r[8]),X(g,"click",r[4]),X(B,"change",r[4]),X(B,"input",r[9]),X(E,"change",r[4]),X(E,"input",r[10])],ne=!0)},p(I,[A]){(!W||A&1)&&e!==(e=I[0]?"Disable":"Enable")&&ee(y,e),(!W||A&2)&&f!==(f=I[1]?"Play":"Pause")&&ee(x,f);const te={};A&8&&(te.world=I[3]),k.$set(te),A&4&&ke(B.value)!==I[2].nbBalls&&pe(B,I[2].nbBalls),A&4&&ke(E.value)!==I[2].rBalls&&pe(E,I[2].rBalls)},i(I){W||(ie(n.$$.fragment,I),ie(d.$$.fragment,I),ie(k.$$.fragment,I),W=!0)},o(I){ce(n.$$.fragment,I),ce(d.$$.fragment,I),ce(k.$$.fragment,I),W=!1},d(I){I&&(p(t),p(i),p(s),p(u),p($),p(L),p(D)),ae(n),ae(d,I),ae(k,I),ne=!1,Ye($e)}}}const qe=60;function St(r,t,n){console.clear();let i=!1,s=!1,o={nbBalls:5,rBalls:.2},e,y;const c=()=>{n(3,e=new Be({dimensions:new a(15,15),reporter:()=>{},enableGravity:!0}));const $=Tt(o);y=$.sphere;for(const k of $.objects)e.addObject(k)},l=$=>typeof $=="number"?$*qe:$.clone().multiplyScalar(qe),h=$=>typeof $=="number"?$/qe:$.clone().divideScalar(qe);let f;const x=$=>{$.setup=()=>{f=$,c();const D=l(e.dimensions);$.createCanvas(D.x,D.y),$.background(0),$.fill(255),$.stroke(255),c()},$.draw=()=>{$.background(0),Re($)?y.fixed=!0:y.fixed=!1,s||e.step(),Xe($,e),L($)};let k;$.mousePressed=()=>{Ve($)&&(k=h(new a($.mouseX,$.height-$.mouseY)),y.position.copy(k))},$.mouseReleased=()=>{if(!Ve($)||!k)return;const D=h(new a($.mouseX,$.height-$.mouseY)),F=k.subtract(D).multiplyScalar(3);k=void 0,y.velocity.copy(F)};const L=D=>{if(!k)return;D.stroke("blue"),D.strokeWeight(2);const F=l(k);D.line(F.x,D.height-F.y,D.mouseX,D.mouseY)}},v=$=>{$.multiplyScalar(1e4),e.applyForce(y,$)};je(()=>{f==null||f.remove()});const g=()=>n(0,i=!i),b=()=>n(1,s=!s);function u(){o.nbBalls=ke(this.value),n(2,o)}function d(){o.rBalls=ke(this.value),n(2,o)}return[i,s,o,e,c,x,v,g,b,u,d]}let Et=class extends ve{constructor(t){super(),ge(this,t,St,Ct,ye,{})}};function jt(r){let t,n,i,s,o=r[0][r[0].length-1]+"",e,y,c,l="New ball",h,f,x;return n=new Pe({props:{sketch:r[2]}}),{c(){t=w("div"),se(n.$$.fragment),i=j(),s=w("p"),e=Q(o),y=j(),c=w("button"),c.textContent=l,this.h()},l(v){t=_(v,"DIV",{class:!0});var g=C(t);re(n.$$.fragment,g),g.forEach(p),i=P(v),s=_(v,"P",{});var b=C(s);e=J(b,o),b.forEach(p),y=P(v),c=_(v,"BUTTON",{"data-svelte-h":!0}),K(c)!=="svelte-1jwbm46"&&(c.textContent=l),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(v,g){S(v,t,g),le(n,t,null),S(v,i,g),S(v,s,g),m(s,e),S(v,y,g),S(v,c,g),h=!0,f||(x=X(c,"click",r[1]),f=!0)},p(v,[g]){(!h||g&1)&&o!==(o=v[0][v[0].length-1]+"")&&ee(e,o)},i(v){h||(ie(n.$$.fragment,v),h=!0)},o(v){ce(n.$$.fragment,v),h=!1},d(v){v&&(p(t),p(i),p(s),p(y),p(c)),ae(n),f=!1,x()}}}function Pt(r,t,n){console.clear();let i=[];const s=l=>{const h=l.objects[l.objects.length-1],f=h.position.clone().toFixed(2),x=h.velocity.clone().toFixed(2);i.push(`${l.t.toFixed(2)} - pos: ${f} - vel: ${x}`),i.length>50&&i.shift(),n(0,i)},o=new Be({reporter:s,enableGravity:!0}),e=()=>{for(;o.objects.length;)o.objects.pop();const l=T({geometry:{type:"line",vector:new a(100,0)},position:new a(0,0),fixed:!0});o.addObject(l);for(let h=0;h<1;h++){const f=T({geometry:{type:"sphere",r:5},position:new a(20,50),velocity:new a(Math.random()*5-2.5,Math.random()*20)});o.addObject(f)}};let y;const c=l=>{l.setup=()=>{y=l,l.createCanvas(900,600),l.background(0),l.fill(255),l.stroke(255),e()},l.draw=()=>{l.background(0),o.step();for(const h of o.objects){const f=l.map(h.position.x,0,o.dimensions.x,0,l.width),x=l.map(h.position.y,0,o.dimensions.y,l.height,0);if(h.geometry.type==="sphere"&&(l.strokeWeight(h.geometry.r*2),l.point(f,x)),h.geometry.type==="line"){const v=f+l.map(h.geometry.vector.x,0,o.dimensions.x,0,l.width),g=x+l.map(h.geometry.vector.y,0,o.dimensions.y,0,l.height);l.strokeWeight(2),l.line(f,x,v,g)}}}};return je(()=>{y==null||y.remove()}),[i,e,c]}class Ot extends ve{constructor(t){super(),ge(this,t,Pt,jt,ye,{})}}function Dt(r){let t,n,i,s,o=r[0][r[0].length-1]+"",e,y,c,l="New ball",h,f,x;return n=new Pe({props:{sketch:r[2]}}),{c(){t=w("div"),se(n.$$.fragment),i=j(),s=w("p"),e=Q(o),y=j(),c=w("button"),c.textContent=l,this.h()},l(v){t=_(v,"DIV",{class:!0});var g=C(t);re(n.$$.fragment,g),g.forEach(p),i=P(v),s=_(v,"P",{});var b=C(s);e=J(b,o),b.forEach(p),y=P(v),c=_(v,"BUTTON",{"data-svelte-h":!0}),K(c)!=="svelte-1jwbm46"&&(c.textContent=l),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(v,g){S(v,t,g),le(n,t,null),S(v,i,g),S(v,s,g),m(s,e),S(v,y,g),S(v,c,g),h=!0,f||(x=X(c,"click",r[1]),f=!0)},p(v,[g]){(!h||g&1)&&o!==(o=v[0][v[0].length-1]+"")&&ee(e,o)},i(v){h||(ie(n.$$.fragment,v),h=!0)},o(v){ce(n.$$.fragment,v),h=!1},d(v){v&&(p(t),p(i),p(s),p(y),p(c)),ae(n),f=!1,x()}}}const ze=6;function Bt(r,t,n){console.clear();let i=[];const s=f=>{const x=f.objects[f.objects.length-1],v=x.position.clone().toFixed(2),g=x.velocity.clone().toFixed(2);i.push(`${f.t.toFixed(2)} - pos: ${v} - vel: ${g}`),i.length>50&&i.shift(),n(0,i)},o=new Be({reporter:s,enableGravity:!0});let e,y;const c=()=>{for(;o.objects.length;)o.objects.pop();y=T({geometry:{type:"line",vector:new a(40,40)},position:new a(30,30),fixed:!0}),o.addObject(y),e=T({geometry:{type:"sphere",r:10},position:new a(20,50),velocity:new a(2.5,2.5),fixed:!0}),o.addObject(e)};let l;const h=f=>{const x=b=>typeof b=="number"?b*ze:b.clone().multiplyScalar(ze),v=b=>typeof b=="number"?b/ze:b.clone().divideScalar(ze);f.setup=()=>{l=f;const b=x(o.dimensions);f.createCanvas(b.x,b.y),f.background(0),f.fill(255),f.stroke(255),c()};let g;f.draw=()=>{if(f.background(0),o.step(),f.mouseIsPressed){const b=v(new a(f.mouseX,f.height-f.mouseY));if(g||(b.distance(e.position)<2?g="sphere":b.distance(y.position)<2?g="wallstart":b.distance(y.geometry.vector.clone().add(y.position))<2&&(g="wallend")),g==="sphere"&&e.position.copy(b),g==="wallstart"&&y.position.copy(b),g==="wallend"){const u=b.clone().subtract(y.position);y.geometry.vector.copy(u)}}else g=void 0;for(const b of o.objects.sort((u,d)=>u.geometry.type<d.geometry.type?1:-1)){f.stroke(e.data.isColliding?"red":"white");const u=f.map(b.position.x,0,o.dimensions.x,0,f.width),d=f.map(b.position.y,0,o.dimensions.y,f.height,0);if(b.geometry.type==="sphere"){const $=x(b.geometry.r*2);f.strokeWeight($),f.point(u,d)}if(b.geometry.type==="line"){const $=u+f.map(b.geometry.vector.x,0,o.dimensions.x,0,f.width),k=d-f.map(b.geometry.vector.y,0,o.dimensions.y,0,f.height);f.stroke("blue"),f.strokeWeight(2),f.line(u,d,$,k)}}}};return je(()=>{l==null||l.remove()}),[i,c,h]}class It extends ve{constructor(t){super(),ge(this,t,Bt,Dt,ye,{})}}function Ft(r){let t,n,i;return n=new Pe({props:{sketch:r[0]}}),{c(){t=w("div"),se(n.$$.fragment),this.h()},l(s){t=_(s,"DIV",{class:!0});var o=C(t);re(n.$$.fragment,o),o.forEach(p),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(s,o){S(s,t,o),le(n,t,null),i=!0},p:Ee,i(s){i||(ie(n.$$.fragment,s),i=!0)},o(s){ce(n.$$.fragment,s),i=!1},d(s){s&&p(t),ae(n)}}}const Qe=6;function Vt(r){console.clear();const t=new Be({reporter:()=>{},enableGravity:!0});let n;const i=()=>{for(;t.objects.length;)t.objects.pop();n=T({geometry:{type:"sphere",r:5},position:new a(20,50),velocity:new a(Math.random()*5-2.5,Math.random()*20)}),t.addObject(n);const c=T({geometry:{type:"line",vector:new a(100,0)},position:new a(0,2),fixed:!0});t.addObject(c);const l=T({geometry:{type:"line",vector:new a(100,0)},position:new a(0,98),fixed:!0});t.addObject(l);const h=T({geometry:{type:"line",vector:new a(0,100)},position:new a(2,0),fixed:!0});t.addObject(h);const f=T({geometry:{type:"line",vector:new a(0,100)},position:new a(98,0),fixed:!0});t.addObject(f);const x=T({geometry:{type:"line",vector:new a(50,50)},position:new a(20,10),fixed:!0});t.addObject(x)},s=c=>typeof c=="number"?c*Qe:c.clone().multiplyScalar(Qe),o=c=>typeof c=="number"?c/Qe:c.clone().divideScalar(Qe);let e;const y=c=>{c.setup=()=>{e=c;const h=s(t.dimensions);c.createCanvas(h.x,h.y),c.background(0),c.fill(255),c.stroke(255),i()},c.draw=()=>{if(c.background(0),c.mouseIsPressed){n.fixed=!0;const h=o(new a(c.mouseX,c.height-c.mouseY));n.position.copy(h)}else n.fixed=!1;t.step(),Xe(c,t)};let l;c.mousePressed=()=>{l=o(new a(c.mouseX,c.height-c.mouseY))},c.mouseReleased=()=>{const h=o(new a(c.mouseX,c.height-c.mouseY)),f=l.subtract(h);n.position.copy(h),n.velocity.copy(f)}};return je(()=>{e==null||e.remove()}),[y]}class Lt extends ve{constructor(t){super(),ge(this,t,Vt,Ft,ye,{})}}function Nt(r){let t,n,i,s,o,e,y,c="Gravity",l,h,f,x="Toggle",v,g,b;return n=new Pe({props:{sketch:r[1]}}),{c(){t=w("div"),se(n.$$.fragment),i=j(),s=w("table"),o=w("tbody"),e=w("tr"),y=w("th"),y.textContent=c,l=j(),h=w("td"),f=w("button"),f.textContent=x,this.h()},l(u){t=_(u,"DIV",{class:!0});var d=C(t);re(n.$$.fragment,d),d.forEach(p),i=P(u),s=_(u,"TABLE",{});var $=C(s);o=_($,"TBODY",{});var k=C(o);e=_(k,"TR",{});var L=C(e);y=_(L,"TH",{"data-svelte-h":!0}),K(y)!=="svelte-vy75us"&&(y.textContent=c),l=P(L),h=_(L,"TD",{});var D=C(h);f=_(D,"BUTTON",{"data-svelte-h":!0}),K(f)!=="svelte-18lc94l"&&(f.textContent=x),D.forEach(p),L.forEach(p),k.forEach(p),$.forEach(p),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(u,d){S(u,t,d),le(n,t,null),S(u,i,d),S(u,s,d),m(s,o),m(o,e),m(e,y),m(e,l),m(e,h),m(h,f),v=!0,g||(b=X(f,"click",r[2]),g=!0)},p:Ee,i(u){v||(ie(n.$$.fragment,u),v=!0)},o(u){ce(n.$$.fragment,u),v=!1},d(u){u&&(p(t),p(i),p(s)),ae(n),g=!1,b()}}}const Je=6;function Mt(r){console.clear();const t=new Be({reporter:()=>{},enableGravity:!0});let n;const i=()=>{for(;t.objects.length;)t.objects.pop();const l=T({geometry:{type:"line",vector:new a(100,0)},position:new a(0,0),fixed:!0});t.addObject(l);const h=T({geometry:{type:"line",vector:new a(100,0)},position:new a(0,100),fixed:!0});t.addObject(h);const f=T({geometry:{type:"line",vector:new a(0,100)},position:new a(0,0),fixed:!0});t.addObject(f);const x=T({geometry:{type:"line",vector:new a(0,100)},position:new a(100,0),fixed:!0});t.addObject(x);const v=T({geometry:{type:"line",vector:new a(50,50)},position:new a(20,10),fixed:!0});t.addObject(v),n=T({geometry:{type:"sphere",r:2},position:new a(20,50),velocity:new a(Math.random()*5-2.5,Math.random()*20)}),t.addObject(n)},s=l=>typeof l=="number"?l*Je:l.clone().multiplyScalar(Je),o=l=>typeof l=="number"?l/Je:l.clone().divideScalar(Je);let e;const y=l=>{l.setup=()=>{e=l;const f=s(t.dimensions);l.createCanvas(f.x,f.y),l.background(0),l.fill(255),l.stroke(255),i()},l.draw=()=>{if(l.background(0),Re(l)){n.fixed=!0;const f=o(new a(l.mouseX,l.height-l.mouseY));n.position.copy(f)}else n.fixed=!1;t.step(),Xe(l,t)};let h;l.mousePressed=()=>{Ve(l)&&(h=o(new a(l.mouseX,l.height-l.mouseY)))},l.mouseReleased=()=>{if(!Ve(l))return;const f=o(new a(l.mouseX,l.height-l.mouseY)),x=h.subtract(f);n.position.copy(f),n.velocity.copy(x)}};return je(()=>{e==null||e.remove()}),[t,y,()=>t.toggleGravity()]}class Wt extends ve{constructor(t){super(),ge(this,t,Mt,Nt,ye,{})}}const Ut=()=>{const r=[],t=T({geometry:{type:"line",vector:new a(15,0)},position:new a(0,0),fixed:!0});r.push(t);const n=T({geometry:{type:"line",vector:new a(0,100)},position:new a(0,0),fixed:!0});r.push(n);const i=T({geometry:{type:"line",vector:new a(0,100)},position:new a(15,0),fixed:!0});r.push(i);const s=T({geometry:{type:"line",vector:new a(3,-3)},position:new a(3.5,8),fixed:!0});r.push(s);const o=T({geometry:{type:"line",vector:new a(3,3)},position:new a(3.5,5),fixed:!0});r.push(o);const e=T({geometry:{type:"line",vector:new a(6,0)},position:new a(2,2),fixed:!0});r.push(e);const y=T({geometry:{type:"line",vector:new a(4,0)},position:new a(3,2.5),fixed:!0});r.push(y);const c=T({geometry:{type:"line",vector:new a(2,0)},position:new a(4,3),fixed:!0});r.push(c);const l=T({geometry:{type:"line",vector:new a(.6,0)},position:new a(4.7,3.5),fixed:!0});r.push(l);const h=T({geometry:{type:"line",vector:new a(1,0)},position:new a(10,10.1),fixed:!0});r.push(h);const f=T({geometry:{type:"line",vector:new a(0,-4)},position:new a(11,10),fixed:!0});r.push(f);const x=T({geometry:{type:"line",vector:new a(0,-4)},position:new a(11.5,10),fixed:!0});r.push(x);const v=T({geometry:{type:"line",vector:new a(0,-4)},position:new a(12,10),fixed:!0});r.push(v);const g=T({geometry:{type:"line",vector:new a(1,0)},position:new a(12,10.1),fixed:!0});r.push(g);for(let u=.2;u<.5;u+=.1)for(let d=0;d<10;d++){const $=T({geometry:{type:"line",vector:new a(0,3)},position:new a(9+d*u,1),fixed:!0});r.push($)}const b=T({geometry:{type:"sphere",r:.1},position:new a(5,10),velocity:new a(0,0)});return r.push(b),{objects:r,sphere:b}};function At(r){let t,n,i,s,o,e=r[0]?"Disable":"Enable",y,c,l,h,f=r[1]?"Play":"Pause",x,v,g,b="Reset",u,d,$,k,L,D,F,M,H,U="Simulation time/Frame duration",Y,O,B=r[2].t+"",R,G,Z,q=r[2].frameTime+"",oe,de,E,W,ne="Sphere position",$e,I,A=r[2].spherePos.x.toFixed(2)+"",te,ue,be,we=r[2].spherePos.y.toFixed(2)+"",Te,Oe,he,_e,Le="Sphere velocity",Ze,Ne,Me=r[2].sphereVel.x.toFixed(2)+"",He,et,We,Ue=r[2].sphereVel.y.toFixed(2)+"",Ge,me,tt,st;return n=new Pe({props:{sketch:r[5]}}),d=new vt({props:{onShoot:r[6]}}),k=new ot({props:{world:r[3]}}),{c(){t=w("div"),se(n.$$.fragment),i=j(),s=w("div"),o=w("button"),y=Q(e),c=Q(" pause on collision"),l=j(),h=w("button"),x=Q(f),v=j(),g=w("button"),g.textContent=b,u=j(),se(d.$$.fragment),$=j(),se(k.$$.fragment),L=j(),D=w("table"),F=w("tbody"),M=w("tr"),H=w("th"),H.textContent=U,Y=j(),O=w("td"),R=Q(B),G=j(),Z=w("td"),oe=Q(q),de=j(),E=w("tr"),W=w("th"),W.textContent=ne,$e=j(),I=w("td"),te=Q(A),ue=j(),be=w("td"),Te=Q(we),Oe=j(),he=w("tr"),_e=w("th"),_e.textContent=Le,Ze=j(),Ne=w("td"),He=Q(Me),et=j(),We=w("td"),Ge=Q(Ue),this.h()},l(V){t=_(V,"DIV",{class:!0});var z=C(t);re(n.$$.fragment,z),z.forEach(p),i=P(V),s=_(V,"DIV",{});var Ce=C(s);o=_(Ce,"BUTTON",{});var nt=C(o);y=J(nt,e),c=J(nt," pause on collision"),nt.forEach(p),l=P(Ce),h=_(Ce,"BUTTON",{});var rt=C(h);x=J(rt,f),rt.forEach(p),v=P(Ce),g=_(Ce,"BUTTON",{"data-svelte-h":!0}),K(g)!=="svelte-tlxueg"&&(g.textContent=b),Ce.forEach(p),u=P(V),re(d.$$.fragment,V),$=P(V),re(k.$$.fragment,V),L=P(V),D=_(V,"TABLE",{});var lt=C(D);F=_(lt,"TBODY",{});var Ae=C(F);M=_(Ae,"TR",{});var Ie=C(M);H=_(Ie,"TH",{"data-svelte-h":!0}),K(H)!=="svelte-rirgm4"&&(H.textContent=U),Y=P(Ie),O=_(Ie,"TD",{});var it=C(O);R=J(it,B),it.forEach(p),G=P(Ie),Z=_(Ie,"TD",{});var ct=C(Z);oe=J(ct,q),ct.forEach(p),Ie.forEach(p),de=P(Ae),E=_(Ae,"TR",{});var De=C(E);W=_(De,"TH",{"data-svelte-h":!0}),K(W)!=="svelte-1y1nif6"&&(W.textContent=ne),$e=P(De),I=_(De,"TD",{});var at=C(I);te=J(at,A),at.forEach(p),ue=P(De),be=_(De,"TD",{});var ut=C(be);Te=J(ut,we),ut.forEach(p),Oe=P(De),De.forEach(p),he=_(Ae,"TR",{});var Fe=C(he);_e=_(Fe,"TH",{"data-svelte-h":!0}),K(_e)!=="svelte-1uw1fs2"&&(_e.textContent=Le),Ze=P(Fe),Ne=_(Fe,"TD",{});var ft=C(Ne);He=J(ft,Me),ft.forEach(p),et=P(Fe),We=_(Fe,"TD",{});var dt=C(We);Ge=J(dt,Ue),dt.forEach(p),Fe.forEach(p),Ae.forEach(p),lt.forEach(p),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(V,z){S(V,t,z),le(n,t,null),S(V,i,z),S(V,s,z),m(s,o),m(o,y),m(o,c),m(s,l),m(s,h),m(h,x),m(s,v),m(s,g),S(V,u,z),le(d,V,z),S(V,$,z),le(k,V,z),S(V,L,z),S(V,D,z),m(D,F),m(F,M),m(M,H),m(M,Y),m(M,O),m(O,R),m(M,G),m(M,Z),m(Z,oe),m(F,de),m(F,E),m(E,W),m(E,$e),m(E,I),m(I,te),m(E,ue),m(E,be),m(be,Te),m(E,Oe),m(F,he),m(he,_e),m(he,Ze),m(he,Ne),m(Ne,He),m(he,et),m(he,We),m(We,Ge),me=!0,tt||(st=[X(o,"click",r[7]),X(h,"click",r[8]),X(g,"click",r[4])],tt=!0)},p(V,[z]){(!me||z&1)&&e!==(e=V[0]?"Disable":"Enable")&&ee(y,e),(!me||z&2)&&f!==(f=V[1]?"Play":"Pause")&&ee(x,f);const Ce={};z&8&&(Ce.world=V[3]),k.$set(Ce),(!me||z&4)&&B!==(B=V[2].t+"")&&ee(R,B),(!me||z&4)&&q!==(q=V[2].frameTime+"")&&ee(oe,q),(!me||z&4)&&A!==(A=V[2].spherePos.x.toFixed(2)+"")&&ee(te,A),(!me||z&4)&&we!==(we=V[2].spherePos.y.toFixed(2)+"")&&ee(Te,we),(!me||z&4)&&Me!==(Me=V[2].sphereVel.x.toFixed(2)+"")&&ee(He,Me),(!me||z&4)&&Ue!==(Ue=V[2].sphereVel.y.toFixed(2)+"")&&ee(Ge,Ue)},i(V){me||(ie(n.$$.fragment,V),ie(d.$$.fragment,V),ie(k.$$.fragment,V),me=!0)},o(V){ce(n.$$.fragment,V),ce(d.$$.fragment,V),ce(k.$$.fragment,V),me=!1},d(V){V&&(p(t),p(i),p(s),p(u),p($),p(L),p(D)),ae(n),ae(d,V),ae(k,V),tt=!1,Ye(st)}}}const Ke=60;function Yt(r,t,n){console.clear();let i=!1,s=!1,o={t:"0",frameTime:"0",spherePos:new a(0,0),sphereVel:new a(0,0),ballIsColliding:!1},e,y;const c=()=>{n(3,e=new Be({dimensions:new a(15,15),reporter:d=>{var $;n(2,o.t=($=d==null?void 0:d.t)==null?void 0:$.toFixed(1),o),o.spherePos.copy(y.position).unfloat(),o.sphereVel.copy(y.velocity).unfloat(),n(2,o.frameTime=d.frameTime.toFixed(2),o),n(2,o),n(2,o.ballIsColliding=y.data.isColliding,o),i&&y.data.isColliding&&!s&&n(1,s=!0)},enableGravity:!0}));const u=Ut();y=u.sphere;for(const d of u.objects)e.addObject(d)},l=u=>typeof u=="number"?u*Ke:u.clone().multiplyScalar(Ke),h=u=>typeof u=="number"?u/Ke:u.clone().divideScalar(Ke);let f;const x=u=>{u.setup=()=>{f=u,c();const k=l(e.dimensions);u.createCanvas(k.x,k.y),u.background(0),u.fill(255),u.stroke(255),c()},u.draw=()=>{u.background(0),Re(u)?y.fixed=!0:y.fixed=!1,s||e.step(),Xe(u,e),$(u)};let d;u.mousePressed=()=>{Ve(u)&&(d=h(new a(u.mouseX,u.height-u.mouseY)),y.position.copy(d))},u.mouseReleased=()=>{if(!Ve(u)||!d)return;const k=h(new a(u.mouseX,u.height-u.mouseY)),L=d.subtract(k).multiplyScalar(3);d=void 0,y.velocity.copy(L)};const $=k=>{if(!d)return;k.stroke("blue"),k.strokeWeight(2);const L=l(d);k.line(L.x,k.height-L.y,k.mouseX,k.mouseY)}},v=u=>{u.multiplyScalar(1e4),e.applyForce(y,u)};return je(()=>{f==null||f.remove()}),[i,s,o,e,c,x,v,()=>n(0,i=!i),()=>n(1,s=!s)]}let Rt=class extends ve{constructor(t){super(),ge(this,t,Yt,At,ye,{})}};const Xt=()=>{const r=[],t=T({geometry:{type:"line",vector:new a(15,0)},position:new a(0,0),fixed:!0});r.push(t);const n=T({geometry:{type:"line",vector:new a(0,100)},position:new a(0,0),fixed:!0});r.push(n);const i=T({geometry:{type:"line",vector:new a(0,100)},position:new a(15,0),fixed:!0});r.push(i);const s=T({geometry:{type:"line",vector:new a(3,-3)},position:new a(3.5,8),fixed:!0});r.push(s);const o=T({geometry:{type:"line",vector:new a(3,3)},position:new a(3.5,5),fixed:!0});r.push(o);const e=T({geometry:{type:"line",vector:new a(6,0)},position:new a(2,2),fixed:!0});r.push(e);const y=T({geometry:{type:"line",vector:new a(4,0)},position:new a(3,2.5),fixed:!0});r.push(y);const c=T({geometry:{type:"line",vector:new a(2,0)},position:new a(4,3),fixed:!0});r.push(c);const l=T({geometry:{type:"line",vector:new a(.6,0)},position:new a(4.7,3.5),fixed:!0});r.push(l);const h=T({geometry:{type:"line",vector:new a(1,0)},position:new a(10,10.1),fixed:!0});r.push(h);const f=T({geometry:{type:"line",vector:new a(0,-4)},position:new a(11,10),fixed:!0});r.push(f);const x=T({geometry:{type:"line",vector:new a(0,-4)},position:new a(11.5,10),fixed:!0});r.push(x);const v=T({geometry:{type:"line",vector:new a(0,-4)},position:new a(12,10),fixed:!0});r.push(v);const g=T({geometry:{type:"line",vector:new a(1,0)},position:new a(12,10.1),fixed:!0});r.push(g);for(let b=.2;b<.5;b+=.1)for(let u=0;u<10;u++){const d=T({geometry:{type:"line",vector:new a(0,3)},position:new a(9+u*b,1),fixed:!0});r.push(d)}return{objects:r}};function Ht(r){let t,n,i,s,o,e=r[0]?"Disable":"Enable",y,c,l,h,f=r[1]?"Play":"Pause",x,v,g,b="Reset",u,d,$,k,L,D,F,M="Simulation time/Frame duration",H,U,Y=r[2].t+"",O,B,R,G=r[2].frameTime+"",Z,q,oe,de;return n=new Pe({props:{sketch:r[5]}}),d=new ot({props:{world:r[3]}}),{c(){t=w("div"),se(n.$$.fragment),i=j(),s=w("div"),o=w("button"),y=Q(e),c=Q(" pause on collision"),l=j(),h=w("button"),x=Q(f),v=j(),g=w("button"),g.textContent=b,u=j(),se(d.$$.fragment),$=j(),k=w("table"),L=w("tbody"),D=w("tr"),F=w("th"),F.textContent=M,H=j(),U=w("td"),O=Q(Y),B=j(),R=w("td"),Z=Q(G),this.h()},l(E){t=_(E,"DIV",{class:!0});var W=C(t);re(n.$$.fragment,W),W.forEach(p),i=P(E),s=_(E,"DIV",{});var ne=C(s);o=_(ne,"BUTTON",{});var $e=C(o);y=J($e,e),c=J($e," pause on collision"),$e.forEach(p),l=P(ne),h=_(ne,"BUTTON",{});var I=C(h);x=J(I,f),I.forEach(p),v=P(ne),g=_(ne,"BUTTON",{"data-svelte-h":!0}),K(g)!=="svelte-tlxueg"&&(g.textContent=b),ne.forEach(p),u=P(E),re(d.$$.fragment,E),$=P(E),k=_(E,"TABLE",{});var A=C(k);L=_(A,"TBODY",{});var te=C(L);D=_(te,"TR",{});var ue=C(D);F=_(ue,"TH",{"data-svelte-h":!0}),K(F)!=="svelte-rirgm4"&&(F.textContent=M),H=P(ue),U=_(ue,"TD",{});var be=C(U);O=J(be,Y),be.forEach(p),B=P(ue),R=_(ue,"TD",{});var we=C(R);Z=J(we,G),we.forEach(p),ue.forEach(p),te.forEach(p),A.forEach(p),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(E,W){S(E,t,W),le(n,t,null),S(E,i,W),S(E,s,W),m(s,o),m(o,y),m(o,c),m(s,l),m(s,h),m(h,x),m(s,v),m(s,g),S(E,u,W),le(d,E,W),S(E,$,W),S(E,k,W),m(k,L),m(L,D),m(D,F),m(D,H),m(D,U),m(U,O),m(D,B),m(D,R),m(R,Z),q=!0,oe||(de=[X(o,"click",r[6]),X(h,"click",r[7]),X(g,"click",r[4])],oe=!0)},p(E,[W]){(!q||W&1)&&e!==(e=E[0]?"Disable":"Enable")&&ee(y,e),(!q||W&2)&&f!==(f=E[1]?"Play":"Pause")&&ee(x,f);const ne={};W&8&&(ne.world=E[3]),d.$set(ne),(!q||W&4)&&Y!==(Y=E[2].t+"")&&ee(O,Y),(!q||W&4)&&G!==(G=E[2].frameTime+"")&&ee(Z,G)},i(E){q||(ie(n.$$.fragment,E),ie(d.$$.fragment,E),q=!0)},o(E){ce(n.$$.fragment,E),ce(d.$$.fragment,E),q=!1},d(E){E&&(p(t),p(i),p(s),p(u),p($),p(k)),ae(n),ae(d,E),oe=!1,Ye(de)}}}const pt=60;function Gt(r,t,n){console.clear();let i=!1,s=!1,o={t:"0",frameTime:"0"},e;const y=()=>{clearInterval(f),f=setInterval(c,100),n(3,e=new Be({dimensions:new a(15,15),reporter:u=>{var d;n(2,o.t=(d=u==null?void 0:u.t)==null?void 0:d.toFixed(1),o),n(2,o.frameTime=u.frameTime.toFixed(2),o),n(2,o)},enableGravity:!0}));const b=Xt();for(const u of b.objects)e.addObject(u)},c=()=>{console.log("add ball");const b=Math.random()*e.dimensions.x,u=Math.random()*e.dimensions.y,d=-5+Math.random()*10,$=-5+Math.random()*10,k=T({geometry:{type:"sphere",r:.1},position:new a(b,u),velocity:new a(d,$)});e.addObject(k)},l=b=>typeof b=="number"?b*pt:b.clone().multiplyScalar(pt);let h,f;const x=b=>{b.setup=()=>{h=b,y();const u=l(e.dimensions);b.createCanvas(u.x,u.y),b.background(0),b.fill(255),b.stroke(255),y()},b.draw=()=>{b.background(0),s||e.step(),Xe(b,e)}};return je(()=>{h==null||h.remove(),clearInterval(f)}),[i,s,o,e,y,x,()=>n(0,i=!i),()=>n(1,s=!s)]}class qt extends ve{constructor(t){super(),ge(this,t,Gt,Ht,ye,{})}}function zt(r){let t,n,i;return n=new Pe({props:{sketch:r[0]}}),{c(){t=w("div"),se(n.$$.fragment),this.h()},l(s){t=_(s,"DIV",{class:!0});var o=C(t);re(n.$$.fragment,o),o.forEach(p),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(s,o){S(s,t,o),le(n,t,null),i=!0},p:Ee,i(s){i||(ie(n.$$.fragment,s),i=!0)},o(s){ce(n.$$.fragment,s),i=!1},d(s){s&&p(t),ae(n)}}}const Se=6;function Qt(r){console.clear();let t;const n=T({geometry:{type:"sphere",r:10},position:new a(30,50),velocity:new a(15,15)}),i=T({geometry:{type:"line",vector:new a(80,0)},position:new a(10,70)}),s=new bt,o=e=>{const y=new a(100,100),c=fe(y,Se);e.setup=()=>{t=e,e.createCanvas(c.x,c.y),e.noFill()};let l;e.draw=()=>{if(e.background(0),!Re(e))l=void 0;else{const d=yt(new a(e.mouseX,e.height-e.mouseY),Se);if(l||(d.distance(n.position)<=n.geometry.r?l="sphere":d.distance(n.position.clone().add(n.velocity))<=6?l="spherevelocity":d.distance(i.position)<=6?l="linestart":d.distance(i.geometry.vector.clone().add(i.position))<=6&&(l="lineend")),l==="sphere")n.position.copy(d);else if(l==="spherevelocity"){const $=d.clone().subtract(n.position);n.velocity.copy($)}else if(l==="linestart")i.position.copy(d);else if(l==="lineend"){const $=d.clone().subtract(i.position);i.geometry.vector.copy($)}}const{intersection:h,bouncedVelocity:f}=s.apply(i,n);for(let d=0;d<10;d++){const{positionCorrection:$}=s.apply(i,n);$&&(n.position.add($.multiplyScalar(.5)),i.position.subtract($.multiplyScalar(.5)))}e.stroke(255),e.noFill();const x=fe(n.position,Se);e.circle(x.x,e.height-x.y,2*n.geometry.r*Se),e.stroke(255);const v=fe(n.velocity,Se);e.line(x.x,e.height-x.y,x.x+v.x,e.height-(x.y+v.y)),e.stroke(255);const{x:g,y:b}=fe(i.position,Se),u=fe(i.geometry.vector,Se);if(e.line(g,e.height-b,g+u.x,e.height-(b+u.y)),h){e.stroke("#54d7ff"),e.fill("#54d7ff");const d=fe(h,Se);e.circle(d.x,e.height-d.y,5)}if(f){e.stroke("green"),e.fill("green");const d=fe(f,Se);e.line(x.x,e.height-x.y,x.x+d.x,e.height-(x.y+d.y))}}};return je(()=>{t==null||t.remove()}),[o]}class Jt extends ve{constructor(t){super(),ge(this,t,Qt,zt,ye,{})}}function Kt(r){let t,n,i;return n=new Pe({props:{sketch:r[0]}}),{c(){t=w("div"),se(n.$$.fragment),this.h()},l(s){t=_(s,"DIV",{class:!0});var o=C(t);re(n.$$.fragment,o),o.forEach(p),this.h()},h(){N(t,"class","d-flex justify-content-center")},m(s,o){S(s,t,o),le(n,t,null),i=!0},p:Ee,i(s){i||(ie(n.$$.fragment,s),i=!0)},o(s){ce(n.$$.fragment,s),i=!1},d(s){s&&p(t),ae(n)}}}const xe=6;function Zt(r){console.clear();let t;const n=T({geometry:{type:"sphere",r:10},position:new a(30,50),velocity:new a(15,15)}),i=T({geometry:{type:"sphere",r:10},position:new a(70,50),velocity:new a(0,45)}),s=new wt,o=e=>{const y=new a(100,100),c=fe(y,xe);e.setup=()=>{t=e,e.createCanvas(c.x,c.y),e.noFill()};let l;e.draw=()=>{if(e.background(0),!Re(e))l=void 0;else{const u=yt(new a(e.mouseX,e.height-e.mouseY),xe);if(l||(u.distance(n.position)<=n.geometry.r?l="sphere":u.distance(n.position.clone().add(n.velocity))<=6?l="spherevelocity":u.distance(i.position)<=i.geometry.r?l="sphere2":u.distance(i.position.clone().add(i.velocity))<=6&&(l="sphere2velocity")),l==="sphere")n.position.copy(u);else if(l==="spherevelocity"){const d=u.clone().subtract(n.position);n.velocity.copy(d)}else if(l==="sphere2")i.position.copy(u);else if(l==="sphere2velocity"){const d=u.clone().subtract(i.position);i.velocity.copy(d)}}const{intersection:h,bouncedVelocity:f}=s.apply(n,i);for(let u=0;u<10;u++){const{positionCorrection:d}=s.apply(n,i);d&&(n.position.add(d.multiplyScalar(.5)),i.position.subtract(d.multiplyScalar(.5)))}e.stroke(255),e.noFill();const x=fe(n.position,xe);e.circle(x.x,e.height-x.y,2*n.geometry.r*xe),e.stroke(255);const v=fe(n.velocity,xe);e.line(x.x,e.height-x.y,x.x+v.x,e.height-(x.y+v.y)),e.stroke(255),e.noFill();const g=fe(i.position,xe);e.circle(g.x,e.height-g.y,2*i.geometry.r*xe),e.stroke(255);const b=fe(i.velocity,xe);if(e.line(g.x,e.height-g.y,g.x+b.x,e.height-(g.y+b.y)),h){e.stroke("#54d7ff"),e.fill("#54d7ff");const u=fe(h,xe);e.circle(u.x,e.height-u.y,5)}if(f){e.stroke("green"),e.fill("green");const u=fe(f,xe);e.line(x.x,e.height-x.y,x.x+u.x,e.height-(x.y+u.y))}}};return je(()=>{t==null||t.remove()}),[o]}class en extends ve{constructor(t){super(),ge(this,t,Zt,Kt,ye,{})}}function tn(r){let t,n="<span>This page is a list of engine tests. They use the actual engine and allow me to setup different situations and check manually for regressions and bugs.</span> <br/> <span>Use the selection menu to see the different pages</span>",i,s,o,e,y;return e=new gt({props:{tabs:r[0]}}),{c(){t=w("div"),t.innerHTML=n,i=j(),s=w("br"),o=j(),se(e.$$.fragment)},l(c){t=_(c,"DIV",{"data-svelte-h":!0}),K(t)!=="svelte-11mzr87"&&(t.innerHTML=n),i=P(c),s=_(c,"BR",{}),o=P(c),re(e.$$.fragment,c)},m(c,l){S(c,t,l),S(c,i,l),S(c,s,l),S(c,o,l),le(e,c,l),y=!0},p:Ee,i(c){y||(ie(e.$$.fragment,c),y=!0)},o(c){ce(e.$$.fragment,c),y=!1},d(c){c&&(p(t),p(i),p(s),p(o)),ae(e,c)}}}function nn(r){return[[{label:"Ball pool",value:Et},{label:"Sphere Sphere Collider",value:en},{label:"Line Sphere Collider",value:Jt},{label:"Perfs - Multiple balls",value:qt},{label:"Playground - Engine settings",value:Rt},{label:"Dynamics + collisions - 1",value:Wt},{label:"Dynamics + collisions - 2",value:Lt},{label:"Sphere Line - pull apart",value:It},{label:"One ball bounce",value:Ot}]]}class un extends ve{constructor(t){super(),ge(this,t,nn,tn,ye,{})}}export{un as component};
