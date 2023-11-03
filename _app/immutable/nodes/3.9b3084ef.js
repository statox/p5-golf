import{s as C,f as k,a as S,g as R,h as F,d as g,c as W,u as Y,j as z,i as _,y as Q,L as Z,z as I,M as X,o as ee}from"../chunks/scheduler.32ebed32.js";import{S as O,i as V,b as E,d as L,m as G,a as T,t as D,e as A}from"../chunks/index.c25c2528.js";import{V as m,c as b,P as q,d as N,m as B,w as j,a as te,b as oe,C as ne}from"../chunks/p5utils.9a0390ea.js";import{W as J}from"../chunks/World.e5a3fcd7.js";import{_ as se}from"../chunks/preload-helper.a4192956.js";const re=(u,o)=>{const e=[],r=u.x,s=u.y,a=3,h=5,p=.3,c=4,n=.5,t=.1,l=3,i=Math.random()*(r-h),d=s-l-Math.random()*(s-c-l),y=Math.random()*h+a,f=Math.random()*c+p,w=Math.random()*n+t;ae({x:i,y:d,w:y,h:f,topRatio:w},o).forEach(P=>e.push(P)),ce(u).forEach(P=>e.push(P));const H=Math.floor(1+Math.random()*2),K=H*.1,v=ie(new m(Math.random()*r,Math.random()*s),{m:H,r:K});for(;v.position.x>i&&v.position.x<i+y&&v.position.y<d&&v.position.y>d+f;)v.position.x=Math.random()*r,v.position.y=Math.random()*s;return e.push(v),{objects:e,sphere:v}},ie=(u,o)=>b({geometry:{type:"sphere",r:(o==null?void 0:o.r)||.1},mass:o==null?void 0:o.m,position:u,velocity:new m(0,0)}),ce=u=>{const o=u.x,e=u.y,r=[],s=b({geometry:{type:"line",vector:new m(o,0)},position:new m(0,0),fixed:!0});r.push(s);const a=b({geometry:{type:"line",vector:new m(0,e*10)},position:new m(0,0),fixed:!0});r.push(a);const h=b({geometry:{type:"line",vector:new m(0,e*10)},position:new m(15,0),fixed:!0});return r.push(h),r},ae=(u,o)=>{const{x:e,y:r,h:s,w:a,topRatio:h}=u;if(h<0||h>1)throw new Error("topRatio must be between 0 and 1");const p=a*h/2,c=a*(1-h),n=.1,t=[],l=b({geometry:{type:"line",vector:new m(p,0)},position:new m(e,r+n),fixed:!0});t.push(l);const i=b({geometry:{type:"line",vector:new m(0,-s)},position:new m(e+p,r),fixed:!0});t.push(i);const d=b({geometry:{type:"line",vector:new m(c,0)},position:new m(e+p,r-s-n),fixed:!0});t.push(d);const y=b({geometry:{type:"line",vector:new m(c-2*n,0)},position:new m(e+p+n,r-s+n),fixed:!0,friction:1,restitution:0,collisionListener:o});t.push(y);const f=b({geometry:{type:"line",vector:new m(0,s)},position:new m(e+p+c,r-s),fixed:!0});t.push(f);const w=b({geometry:{type:"line",vector:new m(p,0)},position:new m(e+p+c,r+n),fixed:!0});return t.push(w),t};function le(u){let o,e,r,s,a,h="Reset",p,c,n;return e=new q({props:{sketch:u[1]}}),{c(){o=k("div"),E(e.$$.fragment),r=S(),s=k("div"),a=k("button"),a.textContent=h,this.h()},l(t){o=R(t,"DIV",{class:!0});var l=F(o);L(e.$$.fragment,l),l.forEach(g),r=W(t),s=R(t,"DIV",{});var i=F(s);a=R(i,"BUTTON",{"data-svelte-h":!0}),Y(a)!=="svelte-tlxueg"&&(a.textContent=h),i.forEach(g),this.h()},h(){z(o,"class","d-flex justify-content-center")},m(t,l){_(t,o,l),G(e,o,null),_(t,r,l),_(t,s,l),Q(s,a),p=!0,c||(n=Z(a,"click",u[0]),c=!0)},p:I,i(t){p||(T(e.$$.fragment,t),p=!0)},o(t){D(e.$$.fragment,t),p=!1},d(t){t&&(g(o),g(r),g(s)),A(e),c=!1,n()}}}const U=60;function de(u){console.clear();let o,e,r;const s=()=>{setTimeout(a,1e3)},a=()=>{o=new J({dimensions:new m(15,15),reporter:()=>{},enableGravity:!0});const n=re(o.dimensions,s);n.sphere.fixed=!0,e=n.sphere,r=e.position.clone();for(const t of n.objects)o.addObject(t)},h=n=>typeof n=="number"?n*U:n.clone().multiplyScalar(U);let p;const c=n=>{n.setup=()=>{p=n,a();const i=h(o.dimensions);n.createCanvas(i.x,i.y),n.background(0),n.fill(255),n.stroke(255),a()},n.draw=()=>{n.background(0),o.step(),N(n,o),l(n)};let t;n.mousePressed=()=>{B(n)&&(t=new m(n.width,n.height).divideScalar(2),e.position.copy(r),e.velocity.zero(),e.fixed=!0)},n.mouseReleased=()=>{if(!B(n)||!t)return;const i=t,y=new m(n.mouseX,n.mouseY).clone().subtract(i).multiplyScalar(20);y.x*=-1,o.applyForce(e,y),e.fixed=!1,t=void 0};const l=i=>{if(!e.fixed||!t)return;i.stroke("red"),i.strokeWeight(1),i.noFill(),i.circle(t.x,t.y,15),i.stroke("blue"),i.strokeWeight(2);const d=t,f=new m(i.mouseX,i.mouseY).clone().subtract(d);i.line(d.x,d.y,d.x+f.x,d.y+f.y);const w=h(e.position);f.x*=-1,f.y*=-1,i.line(w.x,i.height-w.y,w.x+f.x,i.height-w.y+f.y)}};return X(()=>{p==null||p.remove()}),[a,c]}let ue=class extends O{constructor(o){super(),V(this,o,de,le,C,{})}},$;const x={physics:{attraction:1580,attractionRadius:90,repulsion:2e3,repulsionRadius:20},world:{nbParticles:2e3,allowOverlaps:!0},render:{showPerception:!1,showVelocity:!1,uniformVelocities:!0}},pe=async u=>{const o=await se(()=>import("../chunks/dat.gui.module.ff711f94.js"),[],import.meta.url);$=new o.GUI({width:200}),$.domElement.setAttribute("style","background-color: black");const e=$.addFolder("Physics");e.open(),e.add(x.physics,"attraction"),e.add(x.physics,"attractionRadius",0,150),e.add(x.physics,"repulsion"),e.add(x.physics,"repulsionRadius",0,150);const r=$.addFolder("World");r.open(),r.add(x.world,"nbParticles",0,5e3),r.add(x.world,"allowOverlaps").onChange(u),r.add({resetWorld:u},"resetWorld");const s=$.addFolder("Render");return s.open(),s.add(x.render,"showPerception"),s.add(x.render,"showVelocity"),s.add(x.render,"uniformVelocities"),x},me=()=>{$==null||$.destroy()};function he(u){let o,e,r;return e=new q({props:{sketch:u[0]}}),{c(){o=k("div"),E(e.$$.fragment),this.h()},l(s){o=R(s,"DIV",{class:!0});var a=F(o);L(e.$$.fragment,a),a.forEach(g),this.h()},h(){z(o,"class","d-flex justify-content-center")},m(s,a){_(s,o,a),G(e,o,null),r=!0},p:I,i(s){r||(T(e.$$.fragment,s),r=!0)},o(s){D(e.$$.fragment,s),r=!1},d(s){s&&g(o),A(e)}}}const M=1;function fe(u){console.clear();let o,e;const r=new m(800,800),s=t=>{e=new J({enableGravity:!1,enableCollisions:!1,enableOverlaps:n.world.allowOverlaps,dimensions:t,drag:.01});const l=[];for(let i=0;i<n.world.nbParticles;i++)l.push(b({geometry:{type:"sphere",r:.5},position:new m(Math.random()*t.x,Math.random()*t.y)}));e.addObjects(l)},a=t=>{const l=j(r,M);t.setup=()=>{o=t,t.createCanvas(l.x,l.y),t.noFill()};const i={selectedId:void 0,selectedPart:void 0};t.draw=()=>{t.background(0);for(const d of e.objects);for(let d=0;d<e.objects.length;d++)for(let y=0;y<e.objects.length;y++){if(d===y)continue;const f=e.objects[d],w=e.objects[y];c(f,w),p(f,w)}e.step(),te(t,e,i),!n.render.showPerception&&!n.render.showVelocity?N(t,e):(oe(t,e,n.render),h(t,e))}},h=(t,l)=>{if(n.render.showPerception){const i=j(n.physics.attractionRadius,M),d=j(n.physics.repulsionRadius,M);t.noFill();for(const y of l.objects){const f=j(y.position,M);t.stroke(0,255,0,50),t.circle(f.x,t.height-f.y,i),t.stroke(255,0,0,50),t.circle(f.x,t.height-f.y,d)}}},p=(t,l)=>{const i=l.position.distance(t.position);if(i>n.physics.attractionRadius)return;const d=l.position.clone().subtract(t.position),f=n.physics.attraction/(i*i);d.norm().multiplyScalar(f),e.applyForce(t,d),e.applyForce(l,d.clone().multiplyScalar(-1))},c=(t,l)=>{const i=l.position.distance(t.position);if(i>n.physics.repulsionRadius)return;const d=t.position.clone().subtract(l.position),f=n.physics.repulsion/(i*i);d.norm().multiplyScalar(f),e.applyForce(t,d),e.applyForce(l,d.clone().multiplyScalar(-1))};let n;return ee(async()=>{n=await pe(()=>s(e.dimensions)),s(r)}),X(()=>{me(),o==null||o.remove()}),[a]}class ye extends O{constructor(o){super(),V(this,o,fe,he,C,{})}}function we(u){let o,e="<span>A list of games implemented using the engine.</span>",r,s,a,h,p;return h=new ne({props:{tabs:u[0]}}),{c(){o=k("div"),o.innerHTML=e,r=S(),s=k("br"),a=S(),E(h.$$.fragment)},l(c){o=R(c,"DIV",{"data-svelte-h":!0}),Y(o)!=="svelte-1is62ld"&&(o.innerHTML=e),r=W(c),s=R(c,"BR",{}),a=W(c),L(h.$$.fragment,c)},m(c,n){_(c,o,n),_(c,r,n),_(c,s,n),_(c,a,n),G(h,c,n),p=!0},p:I,i(c){p||(T(h.$$.fragment,c),p=!0)},o(c){D(h.$$.fragment,c),p=!1},d(c){c&&(g(o),g(r),g(s),g(a)),A(h,c)}}}function be(u){return[[{label:"Particles",value:ye},{label:"Bucket",value:ue}]]}class Re extends O{constructor(o){super(),V(this,o,be,we,C,{})}}export{Re as component};
