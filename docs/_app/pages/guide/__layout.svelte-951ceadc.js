import{S as z,i as C,s as G,l as N,f as E,d,D as H,e as v,k as D,c as g,a as b,n as S,b as p,H as h,I as J,J as K,K as P,x as B,u as F,N as M,t as A,g as U,h as j}from"../../chunks/vendor-c87b8896.js";function q(u,e,l){const s=u.slice();return s[3]=e[l][0],s[4]=e[l][1],s}function O(u){let e,l,s=u[4]+"",t,a;return{c(){e=v("li"),l=v("span"),t=A(s),a=D(),this.h()},l(n){e=g(n,"LI",{class:!0});var o=b(e);l=g(o,"SPAN",{class:!0});var f=b(l);t=U(f,s),f.forEach(d),a=S(o),o.forEach(d),this.h()},h(){p(l,"class","uppercase"),p(e,"class","menu-title")},m(n,o){E(n,e,o),h(e,l),h(l,t),h(e,a)},p(n,o){o&1&&s!==(s=n[4]+"")&&j(t,s)},d(n){n&&d(e)}}}function Q(u){let e,l,s=u[4]+"",t,a,n;return{c(){e=v("li"),l=v("a"),t=A(s),n=D(),this.h()},l(o){e=g(o,"LI",{});var f=b(e);l=g(f,"A",{class:!0,href:!0});var r=b(l);t=U(r,s),r.forEach(d),n=S(f),f.forEach(d),this.h()},h(){p(l,"class","capitalize"),p(l,"href",a=u[3])},m(o,f){E(o,e,f),h(e,l),h(l,t),h(e,n)},p(o,f){f&1&&s!==(s=o[4]+"")&&j(t,s),f&1&&a!==(a=o[3])&&p(l,"href",a)},d(o){o&&d(e)}}}function w(u){let e;function l(a,n){return a[3]?Q:O}let s=l(u),t=s(u);return{c(){t.c(),e=N()},l(a){t.l(a),e=N()},m(a,n){t.m(a,n),E(a,e,n)},p(a,n){s===(s=l(a))&&t?t.p(a,n):(t.d(1),t=s(a),t&&(t.c(),t.m(e.parentNode,e)))},d(a){t.d(a),a&&d(e)}}}function R(u){let e,l,s,t,a,n,o,f=u[0],r=[];for(let i=0;i<f.length;i+=1)r[i]=w(q(u,f,i));const I=u[2].default,_=H(I,u,u[1],null);return{c(){e=v("div"),l=v("div"),s=v("div"),t=v("ul");for(let i=0;i<r.length;i+=1)r[i].c();a=D(),n=v("div"),_&&_.c(),this.h()},l(i){e=g(i,"DIV",{class:!0});var m=b(e);l=g(m,"DIV",{class:!0});var c=b(l);s=g(c,"DIV",{class:!0});var k=b(s);t=g(k,"UL",{class:!0});var V=b(t);for(let y=0;y<r.length;y+=1)r[y].l(V);V.forEach(d),k.forEach(d),a=S(c),n=g(c,"DIV",{class:!0});var L=b(n);_&&_.l(L),L.forEach(d),c.forEach(d),m.forEach(d),this.h()},h(){p(t,"class","menu py-3 shadow-lg bg-base-100 rounded-box"),p(s,"class","col-span-12 md:col-span-4 xl:col-span-2"),p(n,"class","col-span-12 md:col-span-8 xl:col-span-10 documentation"),p(l,"class","grid grid-cols-12 gap-10"),p(e,"class","container mx-auto p-4")},m(i,m){E(i,e,m),h(e,l),h(l,s),h(s,t);for(let c=0;c<r.length;c+=1)r[c].m(t,null);h(l,a),h(l,n),_&&_.m(n,null),o=!0},p(i,[m]){if(m&1){f=i[0];let c;for(c=0;c<f.length;c+=1){const k=q(i,f,c);r[c]?r[c].p(k,m):(r[c]=w(k),r[c].c(),r[c].m(t,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=f.length}_&&_.p&&(!o||m&2)&&J(_,I,i,i[1],o?P(I,i[1],m,null):K(i[1]),null)},i(i){o||(B(_,i),o=!0)},o(i){F(_,i),o=!1},d(i){i&&d(e),M(r,i),_&&_.d(i)}}}function T(u,e,l){let{$$slots:s={},$$scope:t}=e,{menu:a=[[null,"\u{1F680} Getting Started"],["/guide/installation","Installation"],["/guide/usage","Usage"]]}=e;return u.$$set=n=>{"menu"in n&&l(0,a=n.menu),"$$scope"in n&&l(1,t=n.$$scope)},[a,t,s]}class X extends z{constructor(e){super();C(this,e,T,R,G,{menu:0})}}export{X as default};
