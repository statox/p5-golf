import{s as fe,f as w,a as P,l as X,g as $,h as S,d as y,c as D,m as G,u as z,j as F,i as E,y as p,L as Q,n as K,M as Se,z as $e,e as Ee,P as ve,Q as je,O as Ge,E as gt,q as ut}from"../chunks/scheduler.e421d989.js";import{S as de,i as me,b as Z,d as oe,m as ee,a as R,t as q,e as te,g as Ke,c as Ze}from"../chunks/index.52486247.js";import{e as Ye}from"../chunks/each.e59479a4.js";import{P as Oe,V as m,m as vt,a as Xe,T as _t,b as wt,c as $t,d as xt}from"../chunks/p5utils.fe4d08ff.js";import{W as Pe,c as T}from"../chunks/PhysicObject.48b6f90c.js";function kt(c){let e,s,o,t,r=c[0][c[0].length-1]+"",n,d,u,i="New ball",l,a,v;return s=new Oe({props:{sketch:c[2]}}),{c(){e=w("div"),Z(s.$$.fragment),o=P(),t=w("p"),n=X(r),d=P(),u=w("button"),u.textContent=i,this.h()},l(h){e=$(h,"DIV",{class:!0});var g=S(e);oe(s.$$.fragment,g),g.forEach(y),o=D(h),t=$(h,"P",{});var _=S(t);n=G(_,r),_.forEach(y),d=D(h),u=$(h,"BUTTON",{"data-svelte-h":!0}),z(u)!=="svelte-1jwbm46"&&(u.textContent=i),this.h()},h(){F(e,"class","d-flex justify-content-center")},m(h,g){E(h,e,g),ee(s,e,null),E(h,o,g),E(h,t,g),p(t,n),E(h,d,g),E(h,u,g),l=!0,a||(v=Q(u,"click",c[1]),a=!0)},p(h,[g]){(!l||g&1)&&r!==(r=h[0][h[0].length-1]+"")&&K(n,r)},i(h){l||(R(s.$$.fragment,h),l=!0)},o(h){q(s.$$.fragment,h),l=!1},d(h){h&&(y(e),y(o),y(t),y(d),y(u)),te(s),a=!1,v()}}}function Tt(c,e,s){console.clear();let o=[];const t=i=>{const l=i.objects[i.objects.length-1],a=l.position.clone().toFixed(2),v=l.velocity.clone().toFixed(2);o.push(`${i.t.toFixed(2)} - pos: ${a} - vel: ${v}`),o.length>50&&o.shift(),s(0,o)},r=new Pe({reporter:t,enableGravity:!0}),n=()=>{for(;r.objects.length;)r.objects.pop();const i=T({geometry:{type:"line",vector:new m(100,0)},position:new m(0,0),fixed:!0});r.addObject(i);for(let l=0;l<1;l++){const a=T({geometry:{type:"sphere",r:5},position:new m(20,50),velocity:new m(Math.random()*5-2.5,Math.random()*20)});r.addObject(a)}};let d;const u=i=>{i.setup=()=>{d=i,i.createCanvas(900,600),i.background(0),i.fill(255),i.stroke(255),n()},i.draw=()=>{i.background(0),r.step();for(const l of r.objects){const a=i.map(l.position.x,0,r.dimensions.x,0,i.width),v=i.map(l.position.y,0,r.dimensions.y,i.height,0);if(l.geometry.type==="sphere"&&(i.strokeWeight(l.geometry.r*2),i.point(a,v)),l.geometry.type==="line"){const h=a+i.map(l.geometry.vector.x,0,r.dimensions.x,0,i.width),g=v+i.map(l.geometry.vector.y,0,r.dimensions.y,0,i.height);i.strokeWeight(2),i.line(a,v,h,g)}}}};return Se(()=>{d==null||d.remove()}),[o,n,u]}class Ct extends de{constructor(e){super(),me(this,e,Tt,kt,fe,{})}}function Et(c){let e,s,o,t,r=c[0][c[0].length-1]+"",n,d,u,i="New ball",l,a,v;return s=new Oe({props:{sketch:c[2]}}),{c(){e=w("div"),Z(s.$$.fragment),o=P(),t=w("p"),n=X(r),d=P(),u=w("button"),u.textContent=i,this.h()},l(h){e=$(h,"DIV",{class:!0});var g=S(e);oe(s.$$.fragment,g),g.forEach(y),o=D(h),t=$(h,"P",{});var _=S(t);n=G(_,r),_.forEach(y),d=D(h),u=$(h,"BUTTON",{"data-svelte-h":!0}),z(u)!=="svelte-1jwbm46"&&(u.textContent=i),this.h()},h(){F(e,"class","d-flex justify-content-center")},m(h,g){E(h,e,g),ee(s,e,null),E(h,o,g),E(h,t,g),p(t,n),E(h,d,g),E(h,u,g),l=!0,a||(v=Q(u,"click",c[1]),a=!0)},p(h,[g]){(!l||g&1)&&r!==(r=h[0][h[0].length-1]+"")&&K(n,r)},i(h){l||(R(s.$$.fragment,h),l=!0)},o(h){q(s.$$.fragment,h),l=!1},d(h){h&&(y(e),y(o),y(t),y(d),y(u)),te(s),a=!1,v()}}}const Me=6;function jt(c,e,s){console.clear();let o=[];const t=a=>{const v=a.objects[a.objects.length-1],h=v.position.clone().toFixed(2),g=v.velocity.clone().toFixed(2);o.push(`${a.t.toFixed(2)} - pos: ${h} - vel: ${g}`),o.length>50&&o.shift(),s(0,o)},r=new Pe({reporter:t,enableGravity:!0});let n,d;const u=()=>{for(;r.objects.length;)r.objects.pop();d=T({geometry:{type:"line",vector:new m(40,40)},position:new m(30,30),fixed:!0}),r.addObject(d),n=T({geometry:{type:"sphere",r:10},position:new m(20,50),velocity:new m(2.5,2.5),fixed:!0}),r.addObject(n)};let i;const l=a=>{const v=_=>typeof _=="number"?_*Me:_.clone().multiplyScalar(Me),h=_=>typeof _=="number"?_/Me:_.clone().divideScalar(Me);a.setup=()=>{i=a;const _=v(r.dimensions);a.createCanvas(_.x,_.y),a.background(0),a.fill(255),a.stroke(255),u()};let g;a.draw=()=>{if(a.background(0),r.step(),a.mouseIsPressed){const _=h(new m(a.mouseX,a.height-a.mouseY));if(g||(_.distance(n.position)<2?g="sphere":_.distance(d.position)<2?g="wallstart":_.distance(d.geometry.vector.clone().add(d.position))<2&&(g="wallend")),g==="sphere"&&n.position.copy(_),g==="wallstart"&&d.position.copy(_),g==="wallend"){const b=_.clone().subtract(d.position);d.geometry.vector.copy(b)}}else g=void 0;for(const _ of r.objects){a.stroke(n.data.isColliding?"red":"white");const b=a.map(_.position.x,0,r.dimensions.x,0,a.width),f=a.map(_.position.y,0,r.dimensions.y,a.height,0);if(_.geometry.type==="sphere"){const x=v(_.geometry.r*2);a.strokeWeight(x),a.point(b,f)}if(_.geometry.type==="line"){const x=b+a.map(_.geometry.vector.x,0,r.dimensions.x,0,a.width),k=f-a.map(_.geometry.vector.y,0,r.dimensions.y,0,a.height);a.strokeWeight(2),a.line(b,f,x,k)}}}};return Se(()=>{i==null||i.remove()}),[o,u,l]}class St extends de{constructor(e){super(),me(this,e,jt,Et,fe,{})}}function Ot(c){let e,s,o;return s=new Oe({props:{sketch:c[0]}}),{c(){e=w("div"),Z(s.$$.fragment),this.h()},l(t){e=$(t,"DIV",{class:!0});var r=S(e);oe(s.$$.fragment,r),r.forEach(y),this.h()},h(){F(e,"class","d-flex justify-content-center")},m(t,r){E(t,e,r),ee(s,e,null),o=!0},p:$e,i(t){o||(R(s.$$.fragment,t),o=!0)},o(t){q(s.$$.fragment,t),o=!1},d(t){t&&y(e),te(s)}}}const Ue=6;function Pt(c){console.clear();const e=new Pe({reporter:()=>{},enableGravity:!0});let s;const o=()=>{for(;e.objects.length;)e.objects.pop();s=T({geometry:{type:"sphere",r:5},position:new m(20,50),velocity:new m(Math.random()*5-2.5,Math.random()*20)}),e.addObject(s);const i=T({geometry:{type:"line",vector:new m(100,0)},position:new m(0,2),fixed:!0});e.addObject(i);const l=T({geometry:{type:"line",vector:new m(100,0)},position:new m(0,98),fixed:!0});e.addObject(l);const a=T({geometry:{type:"line",vector:new m(0,100)},position:new m(2,0),fixed:!0});e.addObject(a);const v=T({geometry:{type:"line",vector:new m(0,100)},position:new m(98,0),fixed:!0});e.addObject(v);const h=T({geometry:{type:"line",vector:new m(50,50)},position:new m(20,10),fixed:!0});e.addObject(h)},t=i=>typeof i=="number"?i*Ue:i.clone().multiplyScalar(Ue),r=i=>typeof i=="number"?i/Ue:i.clone().divideScalar(Ue),n=(i,l)=>{for(const a of l.objects){i.stroke(a.data.isColliding?"red":"white");const v=i.map(a.position.x,0,l.dimensions.x,0,i.width),h=i.map(a.position.y,0,l.dimensions.y,i.height,0);if(a.geometry.type==="sphere"){const g=t(a.geometry.r*2);i.strokeWeight(g),i.point(v,h)}if(i.stroke(a.data.isColliding?"orange":"white"),a.geometry.type==="line"){const g=v+i.map(a.geometry.vector.x,0,l.dimensions.x,0,i.width),_=h-i.map(a.geometry.vector.y,0,l.dimensions.y,0,i.height);i.strokeWeight(2),i.line(v,h,g,_)}}};let d;const u=i=>{i.setup=()=>{d=i;const a=t(e.dimensions);i.createCanvas(a.x,a.y),i.background(0),i.fill(255),i.stroke(255),o()},i.draw=()=>{if(i.background(0),i.mouseIsPressed){s.fixed=!0;const a=r(new m(i.mouseX,i.height-i.mouseY));s.position.copy(a)}else s.fixed=!1;e.step(),n(i,e)};let l;i.mousePressed=()=>{l=r(new m(i.mouseX,i.height-i.mouseY))},i.mouseReleased=()=>{const a=r(new m(i.mouseX,i.height-i.mouseY)),v=l.subtract(a);s.position.copy(a),s.velocity.copy(v)}};return Se(()=>{d==null||d.remove()}),[u]}class Dt extends de{constructor(e){super(),me(this,e,Pt,Ot,fe,{})}}function Wt(c){let e,s,o,t,r,n,d,u="Gravity",i,l,a,v="Toggle",h,g,_;return s=new Oe({props:{sketch:c[1]}}),{c(){e=w("div"),Z(s.$$.fragment),o=P(),t=w("table"),r=w("tbody"),n=w("tr"),d=w("th"),d.textContent=u,i=P(),l=w("td"),a=w("button"),a.textContent=v,this.h()},l(b){e=$(b,"DIV",{class:!0});var f=S(e);oe(s.$$.fragment,f),f.forEach(y),o=D(b),t=$(b,"TABLE",{});var x=S(t);r=$(x,"TBODY",{});var k=S(r);n=$(k,"TR",{});var C=S(n);d=$(C,"TH",{"data-svelte-h":!0}),z(d)!=="svelte-vy75us"&&(d.textContent=u),i=D(C),l=$(C,"TD",{});var O=S(l);a=$(O,"BUTTON",{"data-svelte-h":!0}),z(a)!=="svelte-18lc94l"&&(a.textContent=v),O.forEach(y),C.forEach(y),k.forEach(y),x.forEach(y),this.h()},h(){F(e,"class","d-flex justify-content-center")},m(b,f){E(b,e,f),ee(s,e,null),E(b,o,f),E(b,t,f),p(t,r),p(r,n),p(n,d),p(n,i),p(n,l),p(l,a),h=!0,g||(_=Q(a,"click",c[2]),g=!0)},p:$e,i(b){h||(R(s.$$.fragment,b),h=!0)},o(b){q(s.$$.fragment,b),h=!1},d(b){b&&(y(e),y(o),y(t)),te(s),g=!1,_()}}}const Ae=6;function Bt(c){console.clear();const e=new Pe({reporter:()=>{},enableGravity:!0});let s;const o=()=>{for(;e.objects.length;)e.objects.pop();const l=T({geometry:{type:"line",vector:new m(100,0)},position:new m(0,0),fixed:!0});e.addObject(l);const a=T({geometry:{type:"line",vector:new m(100,0)},position:new m(0,100),fixed:!0});e.addObject(a);const v=T({geometry:{type:"line",vector:new m(0,100)},position:new m(0,0),fixed:!0});e.addObject(v);const h=T({geometry:{type:"line",vector:new m(0,100)},position:new m(100,0),fixed:!0});e.addObject(h);const g=T({geometry:{type:"line",vector:new m(50,50)},position:new m(20,10),fixed:!0});e.addObject(g),s=T({geometry:{type:"sphere",r:2},position:new m(20,50),velocity:new m(Math.random()*5-2.5,Math.random()*20)}),e.addObject(s)},t=l=>typeof l=="number"?l*Ae:l.clone().multiplyScalar(Ae),r=l=>typeof l=="number"?l/Ae:l.clone().divideScalar(Ae),n=(l,a)=>{for(const v of a.objects){l.stroke(v.data.isColliding?"red":"white");const h=l.map(v.position.x,0,a.dimensions.x,0,l.width),g=l.map(v.position.y,0,a.dimensions.y,l.height,0);if(v.geometry.type==="sphere"){const _=t(v.geometry.r*2);l.strokeWeight(_),l.point(h,g)}if(v.geometry.type==="line"){const _=h+l.map(v.geometry.vector.x,0,a.dimensions.x,0,l.width),b=g-l.map(v.geometry.vector.y,0,a.dimensions.y,0,l.height);l.strokeWeight(2),l.line(h,g,_,b)}}};let d;const u=l=>{l.setup=()=>{d=l;const v=t(e.dimensions);l.createCanvas(v.x,v.y),l.background(0),l.fill(255),l.stroke(255),o()},l.draw=()=>{if(l.background(0),vt(l)){s.fixed=!0;const v=r(new m(l.mouseX,l.height-l.mouseY));s.position.copy(v)}else s.fixed=!1;e.step(),n(l,e)};let a;l.mousePressed=()=>{Xe(l)&&(a=r(new m(l.mouseX,l.height-l.mouseY)))},l.mouseReleased=()=>{if(!Xe(l))return;const v=r(new m(l.mouseX,l.height-l.mouseY)),h=a.subtract(v);s.position.copy(v),s.velocity.copy(h)}};return Se(()=>{d==null||d.remove()}),[e,u,()=>e.toggleGravity()]}class It extends de{constructor(e){super(),me(this,e,Bt,Wt,fe,{})}}function ft(c){let e,s,o,t,r="dt",n,d,u,i,l,a,v="drag",h,g,_,b,f,x,k="gravity enabled",C,O,N,V,J;return{c(){e=w("table"),s=w("tbody"),o=w("tr"),t=w("th"),t.textContent=r,n=P(),d=w("td"),u=w("input"),i=P(),l=w("tr"),a=w("th"),a.textContent=v,h=P(),g=w("td"),_=w("input"),b=P(),f=w("tr"),x=w("th"),x.textContent=k,C=P(),O=w("td"),N=w("input"),this.h()},l(L){e=$(L,"TABLE",{});var A=S(e);s=$(A,"TBODY",{});var j=S(s);o=$(j,"TR",{});var I=S(o);t=$(I,"TH",{"data-svelte-h":!0}),z(t)!=="svelte-16dheti"&&(t.textContent=r),n=D(I),d=$(I,"TD",{});var Y=S(d);u=$(Y,"INPUT",{type:!0,min:!0,max:!0,step:!0}),Y.forEach(y),I.forEach(y),i=D(j),l=$(j,"TR",{});var ne=S(l);a=$(ne,"TH",{"data-svelte-h":!0}),z(a)!=="svelte-2hq5g"&&(a.textContent=v),h=D(ne),g=$(ne,"TD",{});var se=S(g);_=$(se,"INPUT",{type:!0,min:!0,max:!0,step:!0}),se.forEach(y),ne.forEach(y),b=D(j),f=$(j,"TR",{});var H=S(f);x=$(H,"TH",{"data-svelte-h":!0}),z(x)!=="svelte-ic0r87"&&(x.textContent=k),C=D(H),O=$(H,"TD",{});var le=S(O);N=$(le,"INPUT",{type:!0}),le.forEach(y),H.forEach(y),j.forEach(y),A.forEach(y),this.h()},h(){F(u,"type","number"),F(u,"min","0"),F(u,"max","0.5"),F(u,"step","0.001"),F(_,"type","number"),F(_,"min","0"),F(_,"max","0.01"),F(_,"step","0.001"),F(N,"type","checkbox")},m(L,A){E(L,e,A),p(e,s),p(s,o),p(o,t),p(o,n),p(o,d),p(d,u),ve(u,c[0].dt),p(s,i),p(s,l),p(l,a),p(l,h),p(l,g),p(g,_),ve(_,c[0].drag),p(s,b),p(s,f),p(f,x),p(f,C),p(f,O),p(O,N),N.checked=c[0].gravityEnabled,V||(J=[Q(u,"input",c[1]),Q(_,"input",c[2]),Q(N,"change",c[3])],V=!0)},p(L,A){A&1&&je(u.value)!==L[0].dt&&ve(u,L[0].dt),A&1&&je(_.value)!==L[0].drag&&ve(_,L[0].drag),A&1&&(N.checked=L[0].gravityEnabled)},d(L){L&&y(e),V=!1,Ge(J)}}}function Nt(c){let e,s="Engine settings",o,t,r=c[0]&&ft(c);return{c(){e=w("p"),e.textContent=s,o=P(),r&&r.c(),t=Ee(),this.h()},l(n){e=$(n,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-gf3gek"&&(e.textContent=s),o=D(n),r&&r.l(n),t=Ee(),this.h()},h(){F(e,"class","title svelte-g74uk9")},m(n,d){E(n,e,d),E(n,o,d),r&&r.m(n,d),E(n,t,d)},p(n,[d]){n[0]?r?r.p(n,d):(r=ft(n),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},i:$e,o:$e,d(n){n&&(y(e),y(o),y(t)),r&&r.d(n)}}}function Ft(c,e,s){let{world:o}=e;function t(){o.dt=je(this.value),s(0,o)}function r(){o.drag=je(this.value),s(0,o)}function n(){o.gravityEnabled=this.checked,s(0,o)}return c.$$set=d=>{"world"in d&&s(0,o=d.world)},[o,t,r,n]}class bt extends de{constructor(e){super(),me(this,e,Ft,Nt,fe,{world:0})}}function Vt(c){let e,s="Shooter",o,t,r,n="Angle",d,u,i,l,a,v,h,g,_="Magnitude",b,f,x,k,C,O,N,V,J="Shoot",L,A;return{c(){e=w("p"),e.textContent=s,o=P(),t=w("span"),r=w("label"),r.textContent=n,d=P(),u=w("input"),i=P(),l=X(c[0]),a=X(" deg"),v=P(),h=w("span"),g=w("label"),g.textContent=_,b=P(),f=w("input"),x=P(),k=X(c[1]),C=P(),O=w("br"),N=P(),V=w("button"),V.textContent=J,this.h()},l(j){e=$(j,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-198ugk3"&&(e.textContent=s),o=D(j),t=$(j,"SPAN",{});var I=S(t);r=$(I,"LABEL",{for:!0,"data-svelte-h":!0}),z(r)!=="svelte-lab87n"&&(r.textContent=n),d=D(I),u=$(I,"INPUT",{id:!0,type:!0,min:!0,max:!0}),i=D(I),l=G(I,c[0]),a=G(I," deg"),I.forEach(y),v=D(j),h=$(j,"SPAN",{});var Y=S(h);g=$(Y,"LABEL",{for:!0,"data-svelte-h":!0}),z(g)!=="svelte-1vc5oxa"&&(g.textContent=_),b=D(Y),f=$(Y,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),x=D(Y),k=G(Y,c[1]),Y.forEach(y),C=D(j),O=$(j,"BR",{}),N=D(j),V=$(j,"BUTTON",{"data-svelte-h":!0}),z(V)!=="svelte-8jpwxr"&&(V.textContent=J),this.h()},h(){F(e,"class","title svelte-g74uk9"),F(r,"for","angleSlider"),F(u,"id","angleSlider"),F(u,"type","range"),F(u,"min","0"),F(u,"max","360"),F(g,"for","magSlider"),F(f,"id","magSlider"),F(f,"type","range"),F(f,"min","0"),F(f,"max","1"),F(f,"step","0.01")},m(j,I){E(j,e,I),E(j,o,I),E(j,t,I),p(t,r),p(t,d),p(t,u),ve(u,c[0]),p(t,i),p(t,l),p(t,a),E(j,v,I),E(j,h,I),p(h,g),p(h,b),p(h,f),ve(f,c[1]),p(h,x),p(h,k),E(j,C,I),E(j,O,I),E(j,N,I),E(j,V,I),L||(A=[Q(u,"change",c[4]),Q(u,"input",c[4]),Q(f,"change",c[5]),Q(f,"input",c[5]),Q(V,"click",c[6])],L=!0)},p(j,[I]){I&1&&ve(u,j[0]),I&1&&K(l,j[0]),I&2&&ve(f,j[1]),I&2&&K(k,j[1])},i:$e,o:$e,d(j){j&&(y(e),y(o),y(t),y(v),y(h),y(C),y(O),y(N),y(V)),L=!1,Ge(A)}}}function Lt(c,e,s){let{onShoot:o}=e,t=0,r=.5;const n=()=>{const l=new m(1,0);l.rotateDeg(t),l.multiplyScalar(r),o(l)};function d(){t=je(this.value),s(0,t)}function u(){r=je(this.value),s(1,r)}const i=()=>n();return c.$$set=l=>{"onShoot"in l&&s(3,o=l.onShoot)},[t,r,n,o,d,u,i]}class Mt extends de{constructor(e){super(),me(this,e,Lt,Vt,fe,{onShoot:3})}}const Ut=()=>{const c=[],e=T({geometry:{type:"line",vector:new m(15,0)},position:new m(0,0),fixed:!0});c.push(e);const s=T({geometry:{type:"line",vector:new m(0,100)},position:new m(0,0),fixed:!0});c.push(s);const o=T({geometry:{type:"line",vector:new m(0,100)},position:new m(15,0),fixed:!0});c.push(o);const t=T({geometry:{type:"line",vector:new m(3,-3)},position:new m(3.5,8),fixed:!0});c.push(t);const r=T({geometry:{type:"line",vector:new m(3,3)},position:new m(3.5,5),fixed:!0});c.push(r);const n=T({geometry:{type:"line",vector:new m(6,0)},position:new m(2,2),fixed:!0});c.push(n);const d=T({geometry:{type:"line",vector:new m(4,0)},position:new m(3,2.5),fixed:!0});c.push(d);const u=T({geometry:{type:"line",vector:new m(2,0)},position:new m(4,3),fixed:!0});c.push(u);const i=T({geometry:{type:"line",vector:new m(.6,0)},position:new m(4.7,3.5),fixed:!0});c.push(i);const l=T({geometry:{type:"line",vector:new m(1,0)},position:new m(10,10.1),fixed:!0});c.push(l);const a=T({geometry:{type:"line",vector:new m(0,-4)},position:new m(11,10),fixed:!0});c.push(a);const v=T({geometry:{type:"line",vector:new m(0,-4)},position:new m(11.5,10),fixed:!0});c.push(v);const h=T({geometry:{type:"line",vector:new m(0,-4)},position:new m(12,10),fixed:!0});c.push(h);const g=T({geometry:{type:"line",vector:new m(1,0)},position:new m(12,10.1),fixed:!0});c.push(g);for(let b=.2;b<.5;b+=.1)for(let f=0;f<10;f++){const x=T({geometry:{type:"line",vector:new m(0,3)},position:new m(9+f*b,1),fixed:!0});c.push(x)}const _=T({geometry:{type:"sphere",r:.1},position:new m(5,10),velocity:new m(0,0)});return c.push(_),{objects:c,sphere:_}};function At(c){let e,s,o,t,r,n=c[0]?"Disable":"Enable",d,u,i,l,a=c[1]?"Play":"Pause",v,h,g,_="Reset",b,f,x,k,C,O,N,V,J,L="Simulation time/Frame duration",A,j,I=c[2].t+"",Y,ne,se,H=c[2].frameTime+"",le,xe,W,M,re="Sphere position",be,he,pe=c[2].spherePos.x.toFixed(2)+"",_e,ce,ye,ge=c[2].spherePos.y.toFixed(2)+"",Fe,He,ae,ke,et="Sphere velocity",qe,De,We=c[2].sphereVel.x.toFixed(2)+"",Ve,ze,Be,Ie=c[2].sphereVel.y.toFixed(2)+"",Le,ie,Qe,tt;return s=new Oe({props:{sketch:c[5]}}),f=new Mt({props:{onShoot:c[6]}}),k=new bt({props:{world:c[3]}}),{c(){e=w("div"),Z(s.$$.fragment),o=P(),t=w("div"),r=w("button"),d=X(n),u=X(" pause on collision"),i=P(),l=w("button"),v=X(a),h=P(),g=w("button"),g.textContent=_,b=P(),Z(f.$$.fragment),x=P(),Z(k.$$.fragment),C=P(),O=w("table"),N=w("tbody"),V=w("tr"),J=w("th"),J.textContent=L,A=P(),j=w("td"),Y=X(I),ne=P(),se=w("td"),le=X(H),xe=P(),W=w("tr"),M=w("th"),M.textContent=re,be=P(),he=w("td"),_e=X(pe),ce=P(),ye=w("td"),Fe=X(ge),He=P(),ae=w("tr"),ke=w("th"),ke.textContent=et,qe=P(),De=w("td"),Ve=X(We),ze=P(),Be=w("td"),Le=X(Ie),this.h()},l(B){e=$(B,"DIV",{class:!0});var U=S(e);oe(s.$$.fragment,U),U.forEach(y),o=D(B),t=$(B,"DIV",{});var ue=S(t);r=$(ue,"BUTTON",{});var Je=S(r);d=G(Je,n),u=G(Je," pause on collision"),Je.forEach(y),i=D(ue),l=$(ue,"BUTTON",{});var nt=S(l);v=G(nt,a),nt.forEach(y),h=D(ue),g=$(ue,"BUTTON",{"data-svelte-h":!0}),z(g)!=="svelte-tlxueg"&&(g.textContent=_),ue.forEach(y),b=D(B),oe(f.$$.fragment,B),x=D(B),oe(k.$$.fragment,B),C=D(B),O=$(B,"TABLE",{});var ot=S(O);N=$(ot,"TBODY",{});var Ne=S(N);V=$(Ne,"TR",{});var Te=S(V);J=$(Te,"TH",{"data-svelte-h":!0}),z(J)!=="svelte-rirgm4"&&(J.textContent=L),A=D(Te),j=$(Te,"TD",{});var st=S(j);Y=G(st,I),st.forEach(y),ne=D(Te),se=$(Te,"TD",{});var rt=S(se);le=G(rt,H),rt.forEach(y),Te.forEach(y),xe=D(Ne),W=$(Ne,"TR",{});var we=S(W);M=$(we,"TH",{"data-svelte-h":!0}),z(M)!=="svelte-1y1nif6"&&(M.textContent=re),be=D(we),he=$(we,"TD",{});var it=S(he);_e=G(it,pe),it.forEach(y),ce=D(we),ye=$(we,"TD",{});var lt=S(ye);Fe=G(lt,ge),lt.forEach(y),He=D(we),we.forEach(y),ae=$(Ne,"TR",{});var Ce=S(ae);ke=$(Ce,"TH",{"data-svelte-h":!0}),z(ke)!=="svelte-1uw1fs2"&&(ke.textContent=et),qe=D(Ce),De=$(Ce,"TD",{});var ct=S(De);Ve=G(ct,We),ct.forEach(y),ze=D(Ce),Be=$(Ce,"TD",{});var at=S(Be);Le=G(at,Ie),at.forEach(y),Ce.forEach(y),Ne.forEach(y),ot.forEach(y),this.h()},h(){F(e,"class","d-flex justify-content-center")},m(B,U){E(B,e,U),ee(s,e,null),E(B,o,U),E(B,t,U),p(t,r),p(r,d),p(r,u),p(t,i),p(t,l),p(l,v),p(t,h),p(t,g),E(B,b,U),ee(f,B,U),E(B,x,U),ee(k,B,U),E(B,C,U),E(B,O,U),p(O,N),p(N,V),p(V,J),p(V,A),p(V,j),p(j,Y),p(V,ne),p(V,se),p(se,le),p(N,xe),p(N,W),p(W,M),p(W,be),p(W,he),p(he,_e),p(W,ce),p(W,ye),p(ye,Fe),p(W,He),p(N,ae),p(ae,ke),p(ae,qe),p(ae,De),p(De,Ve),p(ae,ze),p(ae,Be),p(Be,Le),ie=!0,Qe||(tt=[Q(r,"click",c[7]),Q(l,"click",c[8]),Q(g,"click",c[4])],Qe=!0)},p(B,[U]){(!ie||U&1)&&n!==(n=B[0]?"Disable":"Enable")&&K(d,n),(!ie||U&2)&&a!==(a=B[1]?"Play":"Pause")&&K(v,a);const ue={};U&8&&(ue.world=B[3]),k.$set(ue),(!ie||U&4)&&I!==(I=B[2].t+"")&&K(Y,I),(!ie||U&4)&&H!==(H=B[2].frameTime+"")&&K(le,H),(!ie||U&4)&&pe!==(pe=B[2].spherePos.x.toFixed(2)+"")&&K(_e,pe),(!ie||U&4)&&ge!==(ge=B[2].spherePos.y.toFixed(2)+"")&&K(Fe,ge),(!ie||U&4)&&We!==(We=B[2].sphereVel.x.toFixed(2)+"")&&K(Ve,We),(!ie||U&4)&&Ie!==(Ie=B[2].sphereVel.y.toFixed(2)+"")&&K(Le,Ie)},i(B){ie||(R(s.$$.fragment,B),R(f.$$.fragment,B),R(k.$$.fragment,B),ie=!0)},o(B){q(s.$$.fragment,B),q(f.$$.fragment,B),q(k.$$.fragment,B),ie=!1},d(B){B&&(y(e),y(o),y(t),y(b),y(x),y(C),y(O)),te(s),te(f,B),te(k,B),Qe=!1,Ge(tt)}}}const Re=60;function Rt(c,e,s){console.clear();let o=!1,t=!1,r={t:"0",frameTime:"0",spherePos:new m(0,0),sphereVel:new m(0,0),ballIsColliding:!1},n,d;const u=()=>{s(3,n=new Pe({dimensions:new m(15,15),reporter:x=>{var k;s(2,r.t=(k=x==null?void 0:x.t)==null?void 0:k.toFixed(1),r),r.spherePos.copy(d.position).unfloat(),r.sphereVel.copy(d.velocity).unfloat(),s(2,r.frameTime=x.frameTime.toFixed(2),r),s(2,r),s(2,r.ballIsColliding=d.data.isColliding,r),o&&d.data.isColliding&&!t&&s(1,t=!0)},enableGravity:!0}));const f=Ut();d=f.sphere;for(const x of f.objects)n.addObject(x)},i=f=>typeof f=="number"?f*Re:f.clone().multiplyScalar(Re),l=f=>typeof f=="number"?f/Re:f.clone().divideScalar(Re),a=(f,x)=>{for(const k of x.objects){f.stroke(k.data.isColliding?"red":"white");const C=f.map(k.position.x,0,x.dimensions.x,0,f.width),O=f.map(k.position.y,0,x.dimensions.y,f.height,0);if(k.geometry.type==="sphere"){const N=i(k.geometry.r*2);f.strokeWeight(N),f.point(C,O)}if(k.geometry.type==="line"){const N=C+f.map(k.geometry.vector.x,0,x.dimensions.x,0,f.width),V=O-f.map(k.geometry.vector.y,0,x.dimensions.y,0,f.height);f.strokeWeight(2),f.line(C,O,N,V)}}};let v;const h=f=>{f.setup=()=>{v=f,u();const C=i(n.dimensions);f.createCanvas(C.x,C.y),f.background(0),f.fill(255),f.stroke(255),u()},f.draw=()=>{f.background(0),vt(f)?d.fixed=!0:d.fixed=!1,t||n.step(),a(f,n),k(f)};let x;f.mousePressed=()=>{Xe(f)&&(x=l(new m(f.mouseX,f.height-f.mouseY)),d.position.copy(x))},f.mouseReleased=()=>{if(!Xe(f)||!x)return;const C=l(new m(f.mouseX,f.height-f.mouseY)),O=x.subtract(C).multiplyScalar(3);x=void 0,d.velocity.copy(O)};const k=C=>{if(!x)return;C.stroke("blue"),C.strokeWeight(2);const O=i(x);C.line(O.x,C.height-O.y,C.mouseX,C.mouseY)}},g=f=>{f.multiplyScalar(1e4),n.applyForce(d,f)};return Se(()=>{v==null||v.remove()}),[o,t,r,n,u,h,g,()=>s(0,o=!o),()=>s(1,t=!t)]}let Yt=class extends de{constructor(e){super(),me(this,e,Rt,At,fe,{})}};const Xt=()=>{const c=[],e=T({geometry:{type:"line",vector:new m(15,0)},position:new m(0,0),fixed:!0});c.push(e);const s=T({geometry:{type:"line",vector:new m(0,100)},position:new m(0,0),fixed:!0});c.push(s);const o=T({geometry:{type:"line",vector:new m(0,100)},position:new m(15,0),fixed:!0});c.push(o);const t=T({geometry:{type:"line",vector:new m(3,-3)},position:new m(3.5,8),fixed:!0});c.push(t);const r=T({geometry:{type:"line",vector:new m(3,3)},position:new m(3.5,5),fixed:!0});c.push(r);const n=T({geometry:{type:"line",vector:new m(6,0)},position:new m(2,2),fixed:!0});c.push(n);const d=T({geometry:{type:"line",vector:new m(4,0)},position:new m(3,2.5),fixed:!0});c.push(d);const u=T({geometry:{type:"line",vector:new m(2,0)},position:new m(4,3),fixed:!0});c.push(u);const i=T({geometry:{type:"line",vector:new m(.6,0)},position:new m(4.7,3.5),fixed:!0});c.push(i);const l=T({geometry:{type:"line",vector:new m(1,0)},position:new m(10,10.1),fixed:!0});c.push(l);const a=T({geometry:{type:"line",vector:new m(0,-4)},position:new m(11,10),fixed:!0});c.push(a);const v=T({geometry:{type:"line",vector:new m(0,-4)},position:new m(11.5,10),fixed:!0});c.push(v);const h=T({geometry:{type:"line",vector:new m(0,-4)},position:new m(12,10),fixed:!0});c.push(h);const g=T({geometry:{type:"line",vector:new m(1,0)},position:new m(12,10.1),fixed:!0});c.push(g);for(let _=.2;_<.5;_+=.1)for(let b=0;b<10;b++){const f=T({geometry:{type:"line",vector:new m(0,3)},position:new m(9+b*_,1),fixed:!0});c.push(f)}return{objects:c}};function Gt(c){let e,s,o,t,r,n=c[0]?"Disable":"Enable",d,u,i,l,a=c[1]?"Play":"Pause",v,h,g,_="Reset",b,f,x,k,C,O,N,V="Simulation time/Frame duration",J,L,A=c[2].t+"",j,I,Y,ne=c[2].frameTime+"",se,H,le,xe;return s=new Oe({props:{sketch:c[5]}}),f=new bt({props:{world:c[3]}}),{c(){e=w("div"),Z(s.$$.fragment),o=P(),t=w("div"),r=w("button"),d=X(n),u=X(" pause on collision"),i=P(),l=w("button"),v=X(a),h=P(),g=w("button"),g.textContent=_,b=P(),Z(f.$$.fragment),x=P(),k=w("table"),C=w("tbody"),O=w("tr"),N=w("th"),N.textContent=V,J=P(),L=w("td"),j=X(A),I=P(),Y=w("td"),se=X(ne),this.h()},l(W){e=$(W,"DIV",{class:!0});var M=S(e);oe(s.$$.fragment,M),M.forEach(y),o=D(W),t=$(W,"DIV",{});var re=S(t);r=$(re,"BUTTON",{});var be=S(r);d=G(be,n),u=G(be," pause on collision"),be.forEach(y),i=D(re),l=$(re,"BUTTON",{});var he=S(l);v=G(he,a),he.forEach(y),h=D(re),g=$(re,"BUTTON",{"data-svelte-h":!0}),z(g)!=="svelte-tlxueg"&&(g.textContent=_),re.forEach(y),b=D(W),oe(f.$$.fragment,W),x=D(W),k=$(W,"TABLE",{});var pe=S(k);C=$(pe,"TBODY",{});var _e=S(C);O=$(_e,"TR",{});var ce=S(O);N=$(ce,"TH",{"data-svelte-h":!0}),z(N)!=="svelte-rirgm4"&&(N.textContent=V),J=D(ce),L=$(ce,"TD",{});var ye=S(L);j=G(ye,A),ye.forEach(y),I=D(ce),Y=$(ce,"TD",{});var ge=S(Y);se=G(ge,ne),ge.forEach(y),ce.forEach(y),_e.forEach(y),pe.forEach(y),this.h()},h(){F(e,"class","d-flex justify-content-center")},m(W,M){E(W,e,M),ee(s,e,null),E(W,o,M),E(W,t,M),p(t,r),p(r,d),p(r,u),p(t,i),p(t,l),p(l,v),p(t,h),p(t,g),E(W,b,M),ee(f,W,M),E(W,x,M),E(W,k,M),p(k,C),p(C,O),p(O,N),p(O,J),p(O,L),p(L,j),p(O,I),p(O,Y),p(Y,se),H=!0,le||(xe=[Q(r,"click",c[6]),Q(l,"click",c[7]),Q(g,"click",c[4])],le=!0)},p(W,[M]){(!H||M&1)&&n!==(n=W[0]?"Disable":"Enable")&&K(d,n),(!H||M&2)&&a!==(a=W[1]?"Play":"Pause")&&K(v,a);const re={};M&8&&(re.world=W[3]),f.$set(re),(!H||M&4)&&A!==(A=W[2].t+"")&&K(j,A),(!H||M&4)&&ne!==(ne=W[2].frameTime+"")&&K(se,ne)},i(W){H||(R(s.$$.fragment,W),R(f.$$.fragment,W),H=!0)},o(W){q(s.$$.fragment,W),q(f.$$.fragment,W),H=!1},d(W){W&&(y(e),y(o),y(t),y(b),y(x),y(k)),te(s),te(f,W),le=!1,Ge(xe)}}}const dt=60;function Ht(c,e,s){console.clear();let o=!1,t=!1,r={t:"0",frameTime:"0"},n;const d=()=>{clearInterval(v),v=setInterval(u,100),s(3,n=new Pe({dimensions:new m(15,15),reporter:f=>{var x;s(2,r.t=(x=f==null?void 0:f.t)==null?void 0:x.toFixed(1),r),s(2,r.frameTime=f.frameTime.toFixed(2),r),s(2,r)},enableGravity:!0}));const b=Xt();for(const f of b.objects)n.addObject(f)},u=()=>{console.log("add ball");const b=Math.random()*n.dimensions.x,f=Math.random()*n.dimensions.y,x=-5+Math.random()*10,k=-5+Math.random()*10,C=T({geometry:{type:"sphere",r:.1},position:new m(b,f),velocity:new m(x,k)});n.addObject(C)},i=b=>typeof b=="number"?b*dt:b.clone().multiplyScalar(dt),l=(b,f)=>{for(const x of f.objects){b.stroke(x.data.isColliding?"red":"white");const k=b.map(x.position.x,0,f.dimensions.x,0,b.width),C=b.map(x.position.y,0,f.dimensions.y,b.height,0);if(x.geometry.type==="sphere"){const O=i(x.geometry.r*2);b.strokeWeight(O),b.point(k,C)}if(x.geometry.type==="line"){const O=k+b.map(x.geometry.vector.x,0,f.dimensions.x,0,b.width),N=C-b.map(x.geometry.vector.y,0,f.dimensions.y,0,b.height);b.strokeWeight(2),b.line(k,C,O,N)}}};let a,v;const h=b=>{b.setup=()=>{a=b,d();const f=i(n.dimensions);b.createCanvas(f.x,f.y),b.background(0),b.fill(255),b.stroke(255),d()},b.draw=()=>{b.background(0),t||n.step(),l(b,n)}};return Se(()=>{a==null||a.remove(),clearInterval(v)}),[o,t,r,n,d,h,()=>s(0,o=!o),()=>s(1,t=!t)]}class qt extends de{constructor(e){super(),me(this,e,Ht,Gt,fe,{})}}function mt(c,e,s){const o=c.slice();return o[1]=e[s],o}function ht(c,e,s){const o=c.slice();return o[1]=e[s],o}function zt(c){let e=c[1].title+"",s;return{c(){s=X(e)},l(o){s=G(o,e)},m(o,t){E(o,s,t)},p:$e,d(o){o&&y(s)}}}function pt(c){let e,s;return e=new xt({props:{$$slots:{default:[zt]},$$scope:{ctx:c}}}),{c(){Z(e.$$.fragment)},l(o){oe(e.$$.fragment,o)},m(o,t){ee(e,o,t),s=!0},p(o,t){const r={};t&64&&(r.$$scope={dirty:t,ctx:o}),e.$set(r)},i(o){s||(R(e.$$.fragment,o),s=!0)},o(o){q(e.$$.fragment,o),s=!1},d(o){te(e,o)}}}function Qt(c){let e,s,o=Ye(c[0]),t=[];for(let n=0;n<o.length;n+=1)t[n]=pt(ht(c,o,n));const r=n=>q(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=Ee()},l(n){for(let d=0;d<t.length;d+=1)t[d].l(n);e=Ee()},m(n,d){for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(n,d);E(n,e,d),s=!0},p(n,d){if(d&1){o=Ye(n[0]);let u;for(u=0;u<o.length;u+=1){const i=ht(n,o,u);t[u]?(t[u].p(i,d),R(t[u],1)):(t[u]=pt(i),t[u].c(),R(t[u],1),t[u].m(e.parentNode,e))}for(Ke(),u=o.length;u<t.length;u+=1)r(u);Ze()}},i(n){if(!s){for(let d=0;d<o.length;d+=1)R(t[d]);s=!0}},o(n){t=t.filter(Boolean);for(let d=0;d<t.length;d+=1)q(t[d]);s=!1},d(n){n&&y(e),gt(t,n)}}}function Jt(c){let e,s,o;var t=c[1].component;function r(n,d){return{}}return t&&(e=ut(t,r())),{c(){e&&Z(e.$$.fragment),s=P()},l(n){e&&oe(e.$$.fragment,n),s=D(n)},m(n,d){e&&ee(e,n,d),E(n,s,d),o=!0},p(n,d){if(t!==(t=n[1].component)){if(e){Ke();const u=e;q(u.$$.fragment,1,0,()=>{te(u,1)}),Ze()}t?(e=ut(t,r()),Z(e.$$.fragment),R(e.$$.fragment,1),ee(e,s.parentNode,s)):e=null}},i(n){o||(e&&R(e.$$.fragment,n),o=!0)},o(n){e&&q(e.$$.fragment,n),o=!1},d(n){n&&y(s),e&&te(e,n)}}}function yt(c){let e,s;return e=new $t({props:{$$slots:{default:[Jt]},$$scope:{ctx:c}}}),{c(){Z(e.$$.fragment)},l(o){oe(e.$$.fragment,o)},m(o,t){ee(e,o,t),s=!0},p(o,t){const r={};t&64&&(r.$$scope={dirty:t,ctx:o}),e.$set(r)},i(o){s||(R(e.$$.fragment,o),s=!0)},o(o){q(e.$$.fragment,o),s=!1},d(o){te(e,o)}}}function Kt(c){let e,s,o,t;e=new wt({props:{$$slots:{default:[Qt]},$$scope:{ctx:c}}});let r=Ye(c[0]),n=[];for(let u=0;u<r.length;u+=1)n[u]=yt(mt(c,r,u));const d=u=>q(n[u],1,1,()=>{n[u]=null});return{c(){Z(e.$$.fragment),s=P();for(let u=0;u<n.length;u+=1)n[u].c();o=Ee()},l(u){oe(e.$$.fragment,u),s=D(u);for(let i=0;i<n.length;i+=1)n[i].l(u);o=Ee()},m(u,i){ee(e,u,i),E(u,s,i);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(u,i);E(u,o,i),t=!0},p(u,i){const l={};if(i&64&&(l.$$scope={dirty:i,ctx:u}),e.$set(l),i&1){r=Ye(u[0]);let a;for(a=0;a<r.length;a+=1){const v=mt(u,r,a);n[a]?(n[a].p(v,i),R(n[a],1)):(n[a]=yt(v),n[a].c(),R(n[a],1),n[a].m(o.parentNode,o))}for(Ke(),a=r.length;a<n.length;a+=1)d(a);Ze()}},i(u){if(!t){R(e.$$.fragment,u);for(let i=0;i<r.length;i+=1)R(n[i]);t=!0}},o(u){q(e.$$.fragment,u),n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)q(n[i]);t=!1},d(u){u&&(y(s),y(o)),te(e,u),gt(n,u)}}}function Zt(c){let e,s;return e=new _t({props:{$$slots:{default:[Kt]},$$scope:{ctx:c}}}),{c(){Z(e.$$.fragment)},l(o){oe(e.$$.fragment,o)},m(o,t){ee(e,o,t),s=!0},p(o,[t]){const r={};t&64&&(r.$$scope={dirty:t,ctx:o}),e.$set(r)},i(o){s||(R(e.$$.fragment,o),s=!0)},o(o){q(e.$$.fragment,o),s=!1},d(o){te(e,o)}}}function en(c){return[[{title:"Obstacles2",component:qt},{title:"Obstacles",component:Yt},{title:"Test collisions 3",component:It},{title:"Test collisions 2",component:Dt},{title:"Test collisions",component:St},{title:"Test engine",component:Ct}]]}class cn extends de{constructor(e){super(),me(this,e,en,Zt,fe,{})}}export{cn as component};
