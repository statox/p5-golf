var Q=Object.defineProperty;var R=(a,e,o)=>e in a?Q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var k=(a,e,o)=>(R(a,typeof e!="symbol"?e+"":e,o),o);import{S as L,i as q,s as M,k as E,w as v,a as S,q as P,l as D,m as O,x as w,h as y,c as C,r as W,n as z,b as g,y as _,D as F,I as A,u as J,f as x,t as j,z as T,J as X}from"../../../chunks/index-33d6e1ba.js";import{v as h,P as Y,T as Z,a as ee,b as U,c as V}from"../../../chunks/index-c8ea7b20.js";const te=(a,e)=>{if(e.geometry.type!=="sphere"||a.geometry.type!=="line")throw new Error("invalid geometry");const o=a.position.clone(),t=a.position.clone().add(a.geometry.vector),c=e.position.clone(),s=e.geometry.r,f=t.clone().subtract(o),n=o.clone().subtract(c),m=f.dot(f),l=n.dot(f)*2,u=n.dot(n)-s*s;let r=l*l-4*m*u;if(r<0)return;r=Math.sqrt(r);const d=(-l-r)/(2*m),i=(-l+r)/(2*m);if(d>=0&&d<=1)return o.add(f.multiplyScalar(d));if(i>=0&&i<=1)return o.add(f.multiplyScalar(i))};class H{constructor(e){k(this,"gravityEnabled");k(this,"dimensions");k(this,"t");k(this,"objects");k(this,"gravity",new h(0,-9.8));k(this,"drag",.01);k(this,"reporter");k(this,"lastTick");this.gravityEnabled=e.enableGravity??!0,this.dimensions=e.dimensions||new h(100,100),this.objects=[],this.t=0,this.reporter=e.reporter||console.log,this.lastTick=0}addObject(e){this.objects.push(e)}applyGravity(e){e.acceleration.push(this.gravity)}applyDynamics(e){const o=Date.now(),t=5,c=(o-this.lastTick)/(1e3/60*t);this.gravityEnabled&&this.applyGravity(e);const s=new h(0,0);for(;e.acceleration.length;){const n=e.acceleration.pop();n&&s.add(n)}s.divideScalar(e.m);const f=1-this.drag;e.velocity.add(s.multiplyScalar(c)).multiplyScalar(f),e.position.add(e.velocity.clone().multiplyScalar(c))}applyCollisions(e){const o=this.objects[0],t=this.objects[1];te(o,t)?t.data.isColliding=!0:t.data.isColliding=!1;const s=.9;e.position.x<0&&e.velocity.x<0&&(e.velocity.x*=-s),e.position.x>this.dimensions.x&&e.velocity.x>0&&(e.velocity.x*=-s),e.position.y<0&&e.velocity.y<0&&(e.velocity.y*=-s),e.position.y>this.dimensions.y&&e.velocity.y>0&&(e.velocity.y*=-s)}step(){this.t===0&&(this.lastTick=Date.now()),this.t++;for(const e of this.objects)e.fixed||this.applyDynamics(e),this.applyCollisions(e);this.reporter&&this.reporter(this),this.lastTick=Date.now()}}const G=a=>{var e,o;return{geometry:a.geometry,m:a.mass??10,position:((e=a.position)==null?void 0:e.clone())??new h(0,0),velocity:((o=a.velocity)==null?void 0:o.clone())??new h(0,0),acceleration:[],fixed:a.fixed??!1,data:{isColliding:!1}}};function se(a){let e,o,t,c,s=a[0][a[0].length-1]+"",f,n,m,l,u,r,d;return o=new Y({props:{sketch:a[2]}}),{c(){e=E("div"),v(o.$$.fragment),t=S(),c=E("p"),f=P(s),n=S(),m=E("button"),l=P("New ball"),this.h()},l(i){e=D(i,"DIV",{class:!0});var $=O(e);w(o.$$.fragment,$),$.forEach(y),t=C(i),c=D(i,"P",{});var p=O(c);f=W(p,s),p.forEach(y),n=C(i),m=D(i,"BUTTON",{});var b=O(m);l=W(b,"New ball"),b.forEach(y),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(i,$){g(i,e,$),_(o,e,null),g(i,t,$),g(i,c,$),F(c,f),g(i,n,$),g(i,m,$),F(m,l),u=!0,r||(d=A(m,"click",a[1]),r=!0)},p(i,[$]){(!u||$&1)&&s!==(s=i[0][i[0].length-1]+"")&&J(f,s)},i(i){u||(x(o.$$.fragment,i),u=!0)},o(i){j(o.$$.fragment,i),u=!1},d(i){i&&y(e),T(o),i&&y(t),i&&y(c),i&&y(n),i&&y(m),r=!1,d()}}}function oe(a,e,o){console.clear();let t=[];const c=l=>{const u=l.objects[l.objects.length-1],r=u.position.clone().toFixed(2),d=u.velocity.clone().toFixed(2);t.push(`${l.t} - pos: ${r} - vel: ${d}`),t.length>50&&t.shift(),o(0,t)},s=new H({reporter:c,enableGravity:!0}),f=()=>{for(;s.objects.length;)s.objects.pop();const l=G({geometry:{type:"line",vector:new h(100,0)},position:new h(0,0),fixed:!0});s.addObject(l);for(let u=0;u<1;u++){const r=G({geometry:{type:"sphere",r:5},position:new h(20,50),velocity:new h(Math.random()*5-2.5,Math.random()*20)});s.addObject(r)}};let n;const m=l=>{l.setup=()=>{n=l,l.createCanvas(900,600),l.background(0),l.fill(255),l.stroke(255),f()},l.draw=()=>{l.background(0),s.step();for(const u of s.objects){const r=l.map(u.position.x,0,s.dimensions.x,0,l.width),d=l.map(u.position.y,0,s.dimensions.y,l.height,0);if(u.geometry.type==="sphere"&&(l.strokeWeight(u.geometry.r*2),l.point(r,d)),u.geometry.type==="line"){const i=r+l.map(u.geometry.vector.x,0,s.dimensions.x,0,l.width),$=d+l.map(u.geometry.vector.y,0,s.dimensions.y,0,l.height);l.strokeWeight(2),l.line(r,d,i,$)}}}};return X(()=>{n==null||n.remove()}),[t,f,m]}class ne extends L{constructor(e){super(),q(this,e,oe,se,M,{})}}function ie(a){let e,o,t,c,s=a[0][a[0].length-1]+"",f,n,m,l,u,r,d;return o=new Y({props:{sketch:a[2]}}),{c(){e=E("div"),v(o.$$.fragment),t=S(),c=E("p"),f=P(s),n=S(),m=E("button"),l=P("New ball"),this.h()},l(i){e=D(i,"DIV",{class:!0});var $=O(e);w(o.$$.fragment,$),$.forEach(y),t=C(i),c=D(i,"P",{});var p=O(c);f=W(p,s),p.forEach(y),n=C(i),m=D(i,"BUTTON",{});var b=O(m);l=W(b,"New ball"),b.forEach(y),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(i,$){g(i,e,$),_(o,e,null),g(i,t,$),g(i,c,$),F(c,f),g(i,n,$),g(i,m,$),F(m,l),u=!0,r||(d=A(m,"click",a[1]),r=!0)},p(i,[$]){(!u||$&1)&&s!==(s=i[0][i[0].length-1]+"")&&J(f,s)},i(i){u||(x(o.$$.fragment,i),u=!0)},o(i){j(o.$$.fragment,i),u=!1},d(i){i&&y(e),T(o),i&&y(t),i&&y(c),i&&y(n),i&&y(m),r=!1,d()}}}const N=6;function re(a,e,o){console.clear();let t=[];const c=r=>{const d=r.objects[r.objects.length-1],i=d.position.clone().toFixed(2),$=d.velocity.clone().toFixed(2);t.push(`${r.t} - pos: ${i} - vel: ${$}`),t.length>50&&t.shift(),o(0,t)},s=new H({reporter:c,enableGravity:!0});let f,n;const m=()=>{for(;s.objects.length;)s.objects.pop();n=G({geometry:{type:"line",vector:new h(80,20)},position:new h(10,20),fixed:!0}),s.addObject(n),f=G({geometry:{type:"sphere",r:10},position:new h(20,50),velocity:new h(2.5,2.5),fixed:!0}),s.addObject(f)};let l;const u=r=>{const d=p=>typeof p=="number"?p*N:p.clone().multiplyScalar(N),i=p=>typeof p=="number"?p/N:p.clone().divideScalar(N);r.setup=()=>{l=r;const p=d(s.dimensions);r.createCanvas(p.x,p.y),r.background(0),r.fill(255),r.stroke(255),m()};let $;r.draw=()=>{if(r.background(0),s.step(),r.mouseIsPressed){const p=i(new h(r.mouseX,r.height-r.mouseY));if($||(p.distance(f.position)<2?$="sphere":p.distance(n.position)<2?$="wallstart":p.distance(n.geometry.vector.clone().add(n.position))<2&&($="wallend")),$==="sphere"&&f.position.copy(p),$==="wallstart"&&n.position.copy(p),$==="wallend"){const b=p.clone().subtract(n.position);n.geometry.vector.copy(b)}}else $=void 0;for(const p of s.objects){r.stroke(f.data.isColliding?"red":"white");const b=r.map(p.position.x,0,s.dimensions.x,0,r.width),B=r.map(p.position.y,0,s.dimensions.y,r.height,0);if(p.geometry.type==="sphere"){const I=d(p.geometry.r*2);r.strokeWeight(I),r.point(b,B)}if(p.geometry.type==="line"){const I=b+r.map(p.geometry.vector.x,0,s.dimensions.x,0,r.width),K=B-r.map(p.geometry.vector.y,0,s.dimensions.y,0,r.height);r.strokeWeight(2),r.line(b,B,I,K)}}}};return X(()=>{l==null||l.remove()}),[t,m,u]}class le extends L{constructor(e){super(),q(this,e,re,ie,M,{})}}function ae(a){let e;return{c(){e=P("Test collisions")},l(o){e=W(o,"Test collisions")},m(o,t){g(o,e,t)},d(o){o&&y(e)}}}function ce(a){let e;return{c(){e=P("Test engine")},l(o){e=W(o,"Test engine")},m(o,t){g(o,e,t)},d(o){o&&y(e)}}}function fe(a){let e,o,t,c;return e=new V({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}}),t=new V({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment),o=S(),v(t.$$.fragment)},l(s){w(e.$$.fragment,s),o=C(s),w(t.$$.fragment,s)},m(s,f){_(e,s,f),g(s,o,f),_(t,s,f),c=!0},p(s,f){const n={};f&1&&(n.$$scope={dirty:f,ctx:s}),e.$set(n);const m={};f&1&&(m.$$scope={dirty:f,ctx:s}),t.$set(m)},i(s){c||(x(e.$$.fragment,s),x(t.$$.fragment,s),c=!0)},o(s){j(e.$$.fragment,s),j(t.$$.fragment,s),c=!1},d(s){T(e,s),s&&y(o),T(t,s)}}}function me(a){let e,o;return e=new le({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,c){_(e,t,c),o=!0},i(t){o||(x(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){T(e,t)}}}function $e(a){let e,o;return e=new ne({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,c){_(e,t,c),o=!0},i(t){o||(x(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){T(e,t)}}}function ue(a){let e,o,t,c,s,f;return e=new ee({props:{$$slots:{default:[fe]},$$scope:{ctx:a}}}),t=new U({props:{$$slots:{default:[me]},$$scope:{ctx:a}}}),s=new U({props:{$$slots:{default:[$e]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment),o=S(),v(t.$$.fragment),c=S(),v(s.$$.fragment)},l(n){w(e.$$.fragment,n),o=C(n),w(t.$$.fragment,n),c=C(n),w(s.$$.fragment,n)},m(n,m){_(e,n,m),g(n,o,m),_(t,n,m),g(n,c,m),_(s,n,m),f=!0},p(n,m){const l={};m&1&&(l.$$scope={dirty:m,ctx:n}),e.$set(l);const u={};m&1&&(u.$$scope={dirty:m,ctx:n}),t.$set(u);const r={};m&1&&(r.$$scope={dirty:m,ctx:n}),s.$set(r)},i(n){f||(x(e.$$.fragment,n),x(t.$$.fragment,n),x(s.$$.fragment,n),f=!0)},o(n){j(e.$$.fragment,n),j(t.$$.fragment,n),j(s.$$.fragment,n),f=!1},d(n){T(e,n),n&&y(o),T(t,n),n&&y(c),T(s,n)}}}function pe(a){let e,o;return e=new Z({props:{$$slots:{default:[ue]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,c){_(e,t,c),o=!0},p(t,[c]){const s={};c&1&&(s.$$scope={dirty:c,ctx:t}),e.$set(s)},i(t){o||(x(e.$$.fragment,t),o=!0)},o(t){j(e.$$.fragment,t),o=!1},d(t){T(e,t)}}}class he extends L{constructor(e){super(),q(this,e,null,pe,M,{})}}export{he as default};
