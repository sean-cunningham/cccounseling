var e=new Set([`practice`,`theme`,`layout`,`card`,`density`,`chrome`,`frame`,`mode`]);function t(e){let t=e?.trim().toLowerCase();return t===`truebridge`||t===`carolinatherapysolutions`?t:null}function n(e){let t=e?.trim().toLowerCase();if(t&&[`clean`,`warm`,`soft`,`minimal`,`carolina`,`truebridge`].includes(t))return t}function r(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function i(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function a(e){let t=e?.trim().toLowerCase();if(t===`full`||t===`host`)return t}function o(e){let t=e?.trim().toLowerCase();if(t===`transparent`||t===`opaque`)return t}function s(e){let t=e?.trim().toLowerCase();if(t===`full`||t===`formonly`)return t===`formonly`?`formOnly`:`full`}function c(e){if(e===null)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function l(){let e=window.location.search;if(e.length>1)return e;try{let e=new URL(window.location.href).search;if(e.length>1)return e}catch{}let t=window.location.href,n=t.indexOf(`?`);return n===-1?``:t.slice(n)}function u(l){let u=new URLSearchParams(l.startsWith(`?`)||l.length===0?l:`?${l}`);for(let t of u.keys())if(!e.has(t))return`invalid_params`;let d=u.get(`practice`);if(!d)return`missing_practice`;let f=t(d);if(!f)return`invalid_practice`;let p=n(u.get(`theme`)),m=r(u.get(`layout`)),h=c(u.get(`card`)),g=i(u.get(`density`));if(u.get(`theme`)&&!p||u.get(`layout`)&&!m||u.get(`card`)!==null&&h===void 0||u.get(`density`)&&!g)return`invalid_params`;let _=a(u.get(`chrome`));if(u.get(`chrome`)&&!_)return`invalid_params`;let v=o(u.get(`frame`));if(u.get(`frame`)&&!v)return`invalid_params`;let y=s(u.get(`mode`));return u.get(`mode`)&&!y?`invalid_params`:{practiceId:f,theme:p,layout:m,card:h,density:g,chrome:_,frame:v,mode:y}}function d(e,t){e.dataset.practice=t.practiceId,t.practiceId===`truebridge`&&(e.dataset.heading=``,e.dataset.introText=``),t.theme&&(e.dataset.theme=t.theme),t.layout&&(e.dataset.layout=t.layout),t.card!==void 0&&(e.dataset.card=String(t.card)),t.density&&(e.dataset.density=t.density),t.mode===`formOnly`&&(e.dataset.mode=`formOnly`,e.dataset.heading=``,e.dataset.introText=``,e.dataset.embedFullWidth=`true`,t.frame||(e.dataset.frame=`transparent`)),t.chrome===`host`?(e.dataset.chrome=`host`,e.dataset.layout=`inline`,e.dataset.card=`false`,e.dataset.heading=``,e.dataset.introText=``):t.chrome===`full`&&(e.dataset.chrome=`full`),t.frame===`transparent`?e.dataset.frame=`transparent`:t.frame===`opaque`&&(e.dataset.frame=`opaque`)}function f(e){switch(e){case`missing_practice`:return`This form link is missing a practice parameter. The iframe src must include ?practice=truebridge or ?practice=carolinatherapysolutions.`;case`invalid_practice`:return`This form link uses an unsupported practice.`;default:return`This form link is not configured correctly.`}}var p=`tb-intake-form`,m=`resize`;function h(e){let t=e.getBoundingClientRect(),n=Math.ceil(t.height);return n>0?n:Math.max(e.offsetHeight,e.scrollHeight)}function g(e){if(window.parent===window)return;let t={source:p,type:m,height:Math.ceil(e)};window.parent.postMessage(t,`*`)}function _(e){let t=0,n=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{g(h(e))})};n();let r=new ResizeObserver(n);return r.observe(e),window.addEventListener(`load`,n),window.addEventListener(`resize`,n),()=>{r.disconnect(),window.removeEventListener(`load`,n),window.removeEventListener(`resize`,n),cancelAnimationFrame(t)}}function v(e){let t=e.dataset.apiBase?.trim();if(t)return t.replace(/\/+$/,``);let n=window.TB_INTAKE_WIDGET_API_BASE?.trim();return n?n.replace(/\/+$/,``):``}async function y(e,t){if(!e)return{ok:!1,message:`Form is not configured. Please try again later.`};let n;try{n=await fetch(`${e}/public/intake`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{return{ok:!1,message:`Unable to reach the server. Please try again later.`}}if(n.ok)return{ok:!0};let r=`Unable to submit right now. Please try again.`;try{let e=await n.json();e.error&&typeof e.error==`string`&&(r=e.error)}catch{}return{ok:!1,message:r}}var b=`
:host {
  display: block;
  box-sizing: border-box;
}

.tb-iw-root {
  --tb-iw-primary: #1e3a5f;
  --tb-iw-card-bg: #ffffff;
  --tb-iw-page-bg: transparent;
  --tb-iw-text: #1a1a1a;
  --tb-iw-muted: #64748b;
  --tb-iw-border: #cbd5e1;
  --tb-iw-radius: 8px;
  --tb-iw-button-radius: 8px;
  --tb-iw-font: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --tb-iw-field-height: 2.5rem;
  --tb-iw-gap: 1rem;
  --tb-iw-focus: var(--tb-iw-primary);

  font-family: var(--tb-iw-font);
  font-size: 16px;
  line-height: 1.45;
  color: var(--tb-iw-text);
  background: var(--tb-iw-page-bg);
  max-width: 36rem;
  margin: 0 auto;
}

*, *::before, *::after { box-sizing: border-box; }

.tb-iw-shell {
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.tb-iw-root--has-card .tb-iw-shell {
  padding: 1.5rem;
  background: var(--tb-iw-card-bg);
  border: 1px solid var(--tb-iw-border);
  border-radius: 22px;
  box-shadow: 0 12px 32px rgba(31, 42, 48, 0.06);
}

.tb-iw-root--no-card .tb-iw-shell {
  padding: 0;
}

.tb-iw-root--layout-inline,
.tb-iw-root--embed-full {
  max-width: 100%;
  width: 100%;
}

.tb-iw-title {
  margin: 0 0 0.35rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--tb-iw-text);
  letter-spacing: 0.01em;
}

.tb-iw-subtitle {
  margin: 0 0 var(--tb-iw-gap);
  font-size: 0.9375rem;
  color: var(--tb-iw-muted);
  line-height: 1.5;
}

.tb-iw-field {
  margin-bottom: var(--tb-iw-gap);
}

.tb-iw-root--density-compact .tb-iw-field {
  margin-bottom: calc(var(--tb-iw-gap) * 0.75);
}

.tb-iw-label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--tb-iw-muted);
  letter-spacing: 0.02em;
}

.tb-iw-root--preset-carolina .tb-iw-label {
  font-weight: 400;
  text-transform: none;
}

.tb-iw-required::after {
  content: " *";
  color: var(--tb-iw-muted);
}

.tb-iw-input,
.tb-iw-select,
.tb-iw-textarea {
  width: 100%;
  min-height: var(--tb-iw-field-height);
  padding: 0.5rem 0.85rem;
  border: 1px solid var(--tb-iw-border);
  border-radius: var(--tb-iw-radius);
  font: inherit;
  color: var(--tb-iw-text);
  background: var(--tb-iw-card-bg);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.tb-iw-root--pill-fields .tb-iw-input,
.tb-iw-root--pill-fields .tb-iw-select {
  border-radius: var(--tb-iw-button-radius);
}

.tb-iw-textarea {
  min-height: 5.5rem;
  resize: vertical;
  border-radius: var(--tb-iw-radius);
}

.tb-iw-input:focus,
.tb-iw-select:focus,
.tb-iw-textarea:focus {
  outline: none;
  border-color: var(--tb-iw-focus);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.06);
}

.tb-iw-row {
  display: grid;
  gap: var(--tb-iw-gap);
}

@media (min-width: 480px) {
  .tb-iw-row--2 {
    grid-template-columns: 1fr 1fr;
  }
}

.tb-iw-radios,
.tb-iw-checkboxes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.25rem;
}

.tb-iw-radio,
.tb-iw-checkbox {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.875rem;
  color: var(--tb-iw-text);
}

.tb-iw-radio input,
.tb-iw-checkbox input {
  accent-color: var(--tb-iw-primary);
}

.tb-iw-consent {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: 0.8125rem;
  color: var(--tb-iw-muted);
  line-height: 1.45;
}

.tb-iw-consent input {
  margin-top: 0.2rem;
  flex-shrink: 0;
  accent-color: var(--tb-iw-primary);
}

.tb-iw-honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}

.tb-iw-actions {
  margin-top: calc(var(--tb-iw-gap) * 0.5);
}

.tb-iw-btn {
  width: 100%;
  min-height: var(--tb-iw-field-height);
  padding: 0.65rem 1.25rem;
  border: 1px solid transparent;
  border-radius: var(--tb-iw-button-radius);
  font: inherit;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  background: var(--tb-iw-primary);
  color: #fff;
  transition: filter 0.15s ease, opacity 0.15s ease;
}

.tb-iw-root--btn-uppercase .tb-iw-btn {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.08em;
  font-size: 0.8125rem;
}

.tb-iw-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.tb-iw-btn:not(:disabled):hover {
  filter: brightness(0.92);
}

.tb-iw-error {
  margin: 0 0 var(--tb-iw-gap);
  padding: 0.65rem 0.75rem;
  border-radius: var(--tb-iw-radius);
  background: #fef2f2;
  color: #991b1b;
  font-size: 0.875rem;
  border: 1px solid #fecaca;
}

.tb-iw-success {
  text-align: center;
  padding: 2rem 0.5rem;
}

.tb-iw-success h3 {
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  color: var(--tb-iw-text);
}

.tb-iw-success p {
  margin: 0;
  color: var(--tb-iw-muted);
  font-size: 0.9375rem;
  line-height: 1.5;
}

.tb-iw-field-error {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #b91c1c;
}

@media (max-width: 479px) {
  .tb-iw-root--has-card .tb-iw-shell {
    padding: 1.125rem;
  }
}
`,x=[`--tb-iw-primary`,`--tb-iw-card-bg`,`--tb-iw-page-bg`,`--tb-iw-text`,`--tb-iw-muted`,`--tb-iw-border`,`--tb-iw-radius`,`--tb-iw-button-radius`,`--tb-iw-font`,`--tb-iw-field-height`,`--tb-iw-gap`],S={truebridge:{heading:``,introText:``,buttonLabel:`Send request`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`},carolinatherapysolutions:{heading:`Request an appointment`,introText:`We'll respond during business hours.`,buttonLabel:`Submit`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`}},C={clean:{primary:`#1e3a5f`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`8px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},warm:{primary:`#9a6b4f`,cardBg:`#fffaf7`,pageBg:`transparent`,text:`#3d2c24`,muted:`#7a6558`,border:`#e8d5c8`,radius:`10px`,buttonRadius:`10px`,font:`Georgia, "Times New Roman", serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},soft:{primary:`#6b8cae`,cardBg:`#f8fafc`,pageBg:`transparent`,text:`#334155`,muted:`#64748b`,border:`#dbe4ee`,radius:`12px`,buttonRadius:`12px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,fieldHeight:`2.5rem`,gap:`1.125rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},minimal:{primary:`#334155`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1e293b`,muted:`#64748b`,border:`#e2e8f0`,radius:`6px`,buttonRadius:`6px`,font:`inherit`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!1,buttonUppercase:!1},carolina:{primary:`#8b9a8b`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#5f6f5f`,muted:`#6d7d6d`,border:`#a3b0a3`,radius:`6px`,buttonRadius:`9999px`,font:`inherit`,fieldHeight:`2.75rem`,gap:`1.25rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!0,buttonUppercase:!0},truebridge:{primary:`#2C4250`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`10px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1}};function w(e,t){if(e===void 0)return;let n=e.replace(/<[^>]*>/g,``).replace(/\s+/g,` `).trim();if(n.length!==0)return n.length>t?n.slice(0,t):n}function T(e){let t=e?.trim().toLowerCase();return t&&t in C?t:`clean`}function E(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function D(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function O(e){if(e===void 0)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function k(e){let t=getComputedStyle(e),n={};for(let e of x){let r=t.getPropertyValue(e).trim();r&&(n[e]=r)}return n}function A(e){return{"--tb-iw-primary":e.primary,"--tb-iw-card-bg":e.cardBg,"--tb-iw-page-bg":e.pageBg,"--tb-iw-text":e.text,"--tb-iw-muted":e.muted,"--tb-iw-border":e.border,"--tb-iw-radius":e.radius,"--tb-iw-button-radius":e.buttonRadius,"--tb-iw-font":e.font,"--tb-iw-field-height":e.fieldHeight,"--tb-iw-gap":e.gap}}function j(e,t){let n={...e};return t.primaryColor&&(n.primary=t.primaryColor),t.backgroundColor&&(n.cardBg=t.backgroundColor,n.pageBg=t.backgroundColor),t.textColor&&(n.text=t.textColor),t.mutedTextColor&&(n.muted=t.mutedTextColor),t.borderColor&&(n.border=t.borderColor),t.borderRadius&&(n.radius=t.borderRadius),t.buttonRadius&&(n.buttonRadius=t.buttonRadius),n}function M(e,t){let n=e.dataset,r=T(n.theme);!n.theme&&t===`carolinatherapysolutions`&&(r=`carolina`),!n.theme&&t===`truebridge`&&(r=`truebridge`);let i={...C[r]};i=j(i,n);let a=E(n.layout);a&&(i.layout=a);let o=O(n.card);o===void 0?i.layout===`inline`&&(i.showCard=!1):i.showCard=o;let s=D(n.density);s&&(i.density=s);let c={...A(i)},l=k(e);for(let e of x)l[e]&&(c[e]=l[e]);let u=S[t],d=n.chrome===`host`,f=n.mode===`formOnly`,p=d||f||t===`truebridge`,m=p?``:w(n.heading,120)??u.heading,h=p?``:w(n.introText,280)??u.introText,g=w(n.buttonLabel,48)??(r===`carolina`?`Submit`:u.buttonLabel),_=w(n.successTitle,80)??u.successTitle,v=w(n.successMessage,400)??u.successMessage,y=[`tb-iw-root`,`tb-iw-root--layout-${i.layout}`,i.showCard?`tb-iw-root--has-card`:`tb-iw-root--no-card`,`tb-iw-root--density-${i.density}`,`tb-iw-root--preset-${r}`];return i.pillFields&&y.push(`tb-iw-root--pill-fields`),i.buttonUppercase&&y.push(`tb-iw-root--btn-uppercase`),(t===`truebridge`||f||n.embedFullWidth===`true`)&&y.push(`tb-iw-root--embed-full`),{preset:r,layout:i.layout,showCard:i.showCard,density:i.density,pillFields:i.pillFields,buttonUppercase:i.buttonUppercase,cssVars:c,heading:m,introText:h,buttonLabel:g,successTitle:_,successMessage:v,rootClasses:y}}function N(e,t){for(let[n,r]of Object.entries(t.cssVars))e.style.setProperty(n,r);e.className=t.rootClasses.join(` `)}var P=3e3,F=[{value:`Individual`,label:`Individual`},{value:`Couples`,label:`Couples`},{value:`Unsure/Other`,label:`Unsure/Other`}],I=[{value:`Raleigh Office`,label:`Raleigh Office`},{value:`Cary Office`,label:`Cary Office`},{value:`Virtual`,label:`Virtual`},{value:`First Available`,label:`First Available`}];function L(e){return e===`truebridge`||e===`carolinatherapysolutions`?e:null}function R(e){return e.replace(/\D/g,``).slice(0,10)}function z(e){let t=R(e);return t.length===0?``:t.length<=3?`(${t}`:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}`}function B(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function V(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function H(e,t=!1){let n=V(`label`,t?`tb-iw-label tb-iw-required`:`tb-iw-label`);return n.textContent=e,n}function U(e){let t=L(e.dataset.practice??e.getAttribute(`data-practice`)??void 0);if(!t){e.textContent=`Intake form configuration error (missing data-practice).`;return}let n=t===`carolinatherapysolutions`,r=M(e,t),i=v(e),a=new Date().toISOString(),o=e.attachShadow({mode:`open`}),s=V(`style`);s.textContent=b,o.append(s);let c=V(`div`);N(c,r),o.append(c);let l=V(`div`,`tb-iw-shell`);c.append(l);let u=e.dataset.chrome??e.getAttribute(`data-chrome`);(e.dataset.mode??e.getAttribute(`data-mode`))!==`formOnly`&&u!==`host`&&(r.heading||r.introText)&&W(l,r);let d=V(`div`,`tb-iw-error`);d.hidden=!0,l.append(d);let f=V(`form`);f.setAttribute(`novalidate`,`novalidate`),l.append(f);let p=V(`div`,`tb-iw-honeypot`),m=V(`input`);m.type=`text`,m.name=`website`,m.tabIndex=-1,m.autocomplete=`off`,m.setAttribute(`aria-hidden`,`true`),p.append(m),f.append(p);let h=V(`div`,`tb-iw-row tb-iw-row--2`),g=V(`div`,`tb-iw-field`),_=V(`input`,`tb-iw-input`);_.name=`firstName`,_.required=!0,_.autocomplete=`given-name`,g.append(H(`First name`,!0),_),h.append(g);let x=V(`div`,`tb-iw-field`),S=V(`input`,`tb-iw-input`);S.name=`lastName`,S.required=!0,S.autocomplete=`family-name`,x.append(H(`Last name`,!0),S),h.append(x),f.append(h);let C=V(`div`,`tb-iw-field`),w=V(`input`,`tb-iw-input`);w.type=`email`,w.name=`email`,w.required=!0,w.autocomplete=`email`,C.append(H(`Email`,!0),w),f.append(C);let T=V(`div`,`tb-iw-field`),E=V(`input`,`tb-iw-input`);E.type=`tel`,E.name=`phone`,E.autocomplete=`tel`,E.placeholder=`(555) 555-5555`,T.append(H(`Phone`),E),f.append(T);let D=V(`div`,`tb-iw-field`);D.append(H(`Which services are you seeking?`));let O=V(`div`,`tb-iw-checkboxes`);for(let e of F){let t=V(`label`,`tb-iw-checkbox`),n=V(`input`);n.type=`checkbox`,n.name=`seeking`,n.value=e.value,t.append(n,document.createTextNode(e.label)),O.append(t)}D.append(O),f.append(D);let k;if(n){let e=V(`div`,`tb-iw-field`);k=V(`select`,`tb-iw-select`),k.name=`location`,k.required=!0;let t=V(`option`);t.value=``,t.textContent=`Select location preference`,k.append(t);for(let e of I){let t=V(`option`);t.value=e.value,t.textContent=e.label,k.append(t)}e.append(H(`Location preference`,!0),k),f.append(e)}let A=V(`div`,`tb-iw-field`),j=V(`textarea`,`tb-iw-textarea`);j.name=`message`,j.required=!0,j.maxLength=2e3,A.append(H(`Message`,!0),j),f.append(A);let U=V(`div`,`tb-iw-actions`),G=V(`button`,`tb-iw-btn`);G.type=`submit`,G.textContent=r.buttonLabel,U.append(G),f.append(U);let K=r.buttonLabel;E.addEventListener(`input`,()=>{E.value=z(E.value)});function q(e){d.textContent=e,d.hidden=!1}function J(){d.hidden=!0}function Y(){let e={};_.value.trim()||(e.firstName=`First name is required.`),S.value.trim()||(e.lastName=`Last name is required.`);let t=w.value.trim();t?B(t)||(e.email=`Enter a valid email address.`):e.email=`Email is required.`;let r=E.value.trim();return r&&R(r).length!==10&&(e.phone=`Enter a 10-digit phone number.`),n&&k&&!k.value&&(e.location=`Select a location preference.`),j.value.trim()||(e.message=`Message is required.`),e}function X(e){f.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());for(let[t,n]of Object.entries(e)){if(!n)continue;let e=f.querySelector(`[name="${t}"]`)?.closest(`.tb-iw-field`);if(e){let t=V(`div`,`tb-iw-field-error`);t.textContent=n,e.append(t)}}}function Z(){l.replaceChildren();let e=V(`div`,`tb-iw-success`),t=V(`h3`);t.textContent=r.successTitle;let n=V(`p`);n.textContent=r.successMessage,e.append(t,n),l.append(e)}f.addEventListener(`submit`,async e=>{e.preventDefault(),J(),f.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());let r=Y();if(Object.keys(r).length>0){X(r),q(`Please fix the highlighted fields.`);return}if(Date.now()-Date.parse(a)<P){q(`Please wait a moment and try again.`);return}let o=[...f.querySelectorAll(`input[name="seeking"]:checked`)].map(e=>e.value),s={practiceId:t,firstName:_.value.trim(),lastName:S.value.trim(),email:w.value.trim(),phone:E.value.trim(),message:j.value.trim(),formStartedAt:a,website:m.value};o.length>0&&(s.seeking=o),n&&k?.value&&(s.location=k.value),G.disabled=!0,G.textContent=`Sending…`;let c=await y(i,s);if(c.ok){Z();return}G.disabled=!1,G.textContent=K,q(c.message)})}function W(e,t){if(t.heading){let n=V(`h2`,`tb-iw-title`);n.textContent=t.heading,e.append(n)}if(t.introText){let n=V(`p`,`tb-iw-subtitle`);n.textContent=t.introText,e.append(n)}}function G(e){let t=document.getElementById(`tb-intake-form-root`);t&&(t.textContent=e)}function K(){let e=document.getElementById(`tb-intake-form-root`);if(!e)return;let t=u(typeof window.__TB_EMBED_QUERY__==`string`?window.__TB_EMBED_QUERY__:l());if(typeof t==`string`){G(f(t)),_(document.body);return}d(e,t),U(e),_(e)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,K):K();