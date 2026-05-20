var e=new Set([`practice`,`theme`,`layout`,`card`,`density`,`chrome`]);function t(e){let t=e?.trim().toLowerCase();return t===`truebridge`||t===`carolinatherapysolutions`?t:null}function n(e){let t=e?.trim().toLowerCase();if(t&&[`clean`,`warm`,`soft`,`minimal`,`carolina`,`truebridge`].includes(t))return t}function r(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function i(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function a(e){let t=e?.trim().toLowerCase();if(t===`full`||t===`host`)return t}function o(e){if(e===null)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function s(){let e=window.location.search;if(e.length>1)return e;try{let e=new URL(window.location.href).search;if(e.length>1)return e}catch{}let t=window.location.href,n=t.indexOf(`?`);return n===-1?``:t.slice(n)}function c(s){let c=new URLSearchParams(s.startsWith(`?`)||s.length===0?s:`?${s}`);for(let t of c.keys())if(!e.has(t))return`invalid_params`;let l=c.get(`practice`);if(!l)return`missing_practice`;let u=t(l);if(!u)return`invalid_practice`;let d=n(c.get(`theme`)),f=r(c.get(`layout`)),p=o(c.get(`card`)),m=i(c.get(`density`));if(c.get(`theme`)&&!d||c.get(`layout`)&&!f||c.get(`card`)!==null&&p===void 0||c.get(`density`)&&!m)return`invalid_params`;let h=a(c.get(`chrome`));return c.get(`chrome`)&&!h?`invalid_params`:{practiceId:u,theme:d,layout:f,card:p,density:m,chrome:h}}function l(e,t){e.dataset.practice=t.practiceId,t.theme&&(e.dataset.theme=t.theme),t.layout&&(e.dataset.layout=t.layout),t.card!==void 0&&(e.dataset.card=String(t.card)),t.density&&(e.dataset.density=t.density),t.chrome===`host`?(e.dataset.chrome=`host`,e.dataset.layout=`inline`,e.dataset.card=`false`,e.dataset.heading=``,e.dataset.introText=``):t.chrome===`full`&&(e.dataset.chrome=`full`)}function u(e){switch(e){case`missing_practice`:return`This form link is missing a practice parameter. The iframe src must include ?practice=truebridge or ?practice=carolinatherapysolutions.`;case`invalid_practice`:return`This form link uses an unsupported practice.`;default:return`This form link is not configured correctly.`}}var d=`tb-intake-form`,f=`resize`;function p(){let e=document.documentElement,t=document.body;return Math.max(e.scrollHeight,e.offsetHeight,t.scrollHeight,t.offsetHeight)}function m(e){if(window.parent===window)return;let t={source:d,type:f,height:Math.ceil(e)};window.parent.postMessage(t,`*`)}function h(e){let t=0,n=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{m(p())})};n();let r=new ResizeObserver(n);return r.observe(e),r.observe(document.body),window.addEventListener(`load`,n),window.addEventListener(`resize`,n),()=>{r.disconnect(),window.removeEventListener(`load`,n),window.removeEventListener(`resize`,n),cancelAnimationFrame(t)}}function g(e){let t=e.dataset.apiBase?.trim();if(t)return t.replace(/\/+$/,``);let n=window.TB_INTAKE_WIDGET_API_BASE?.trim();return n?n.replace(/\/+$/,``):``}async function _(e,t){if(!e)return{ok:!1,message:`Form is not configured. Please try again later.`};let n;try{n=await fetch(`${e}/public/intake`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{return{ok:!1,message:`Unable to reach the server. Please try again later.`}}if(n.ok)return{ok:!0};let r=`Unable to submit right now. Please try again.`;try{let e=await n.json();e.error&&typeof e.error==`string`&&(r=e.error)}catch{}return{ok:!1,message:r}}var v=`
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
  border-radius: calc(var(--tb-iw-radius) + 4px);
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
}

.tb-iw-root--no-card .tb-iw-shell {
  padding: 0;
}

.tb-iw-root--layout-inline {
  max-width: 100%;
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
`,y=[`--tb-iw-primary`,`--tb-iw-card-bg`,`--tb-iw-page-bg`,`--tb-iw-text`,`--tb-iw-muted`,`--tb-iw-border`,`--tb-iw-radius`,`--tb-iw-button-radius`,`--tb-iw-font`,`--tb-iw-field-height`,`--tb-iw-gap`],b={truebridge:{heading:`Request an appointment`,introText:`We'll respond during business hours.`,buttonLabel:`Send request`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`},carolinatherapysolutions:{heading:`Request an appointment`,introText:`We'll respond during business hours.`,buttonLabel:`Submit`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`}},x={clean:{primary:`#1e3a5f`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`8px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},warm:{primary:`#9a6b4f`,cardBg:`#fffaf7`,pageBg:`transparent`,text:`#3d2c24`,muted:`#7a6558`,border:`#e8d5c8`,radius:`10px`,buttonRadius:`10px`,font:`Georgia, "Times New Roman", serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},soft:{primary:`#6b8cae`,cardBg:`#f8fafc`,pageBg:`transparent`,text:`#334155`,muted:`#64748b`,border:`#dbe4ee`,radius:`12px`,buttonRadius:`12px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,fieldHeight:`2.5rem`,gap:`1.125rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},minimal:{primary:`#334155`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1e293b`,muted:`#64748b`,border:`#e2e8f0`,radius:`6px`,buttonRadius:`6px`,font:`inherit`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!1,buttonUppercase:!1},carolina:{primary:`#8b9a8b`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#5f6f5f`,muted:`#6d7d6d`,border:`#a3b0a3`,radius:`6px`,buttonRadius:`9999px`,font:`inherit`,fieldHeight:`2.75rem`,gap:`1.25rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!0,buttonUppercase:!0},truebridge:{primary:`#1e3a5f`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`10px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1}};function S(e,t){if(e===void 0)return;let n=e.replace(/<[^>]*>/g,``).replace(/\s+/g,` `).trim();if(n.length!==0)return n.length>t?n.slice(0,t):n}function C(e){let t=e?.trim().toLowerCase();return t&&t in x?t:`clean`}function w(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function T(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function E(e){if(e===void 0)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function D(e){let t=getComputedStyle(e),n={};for(let e of y){let r=t.getPropertyValue(e).trim();r&&(n[e]=r)}return n}function O(e){return{"--tb-iw-primary":e.primary,"--tb-iw-card-bg":e.cardBg,"--tb-iw-page-bg":e.pageBg,"--tb-iw-text":e.text,"--tb-iw-muted":e.muted,"--tb-iw-border":e.border,"--tb-iw-radius":e.radius,"--tb-iw-button-radius":e.buttonRadius,"--tb-iw-font":e.font,"--tb-iw-field-height":e.fieldHeight,"--tb-iw-gap":e.gap}}function k(e,t){let n={...e};return t.primaryColor&&(n.primary=t.primaryColor),t.backgroundColor&&(n.cardBg=t.backgroundColor,n.pageBg=t.backgroundColor),t.textColor&&(n.text=t.textColor),t.mutedTextColor&&(n.muted=t.mutedTextColor),t.borderColor&&(n.border=t.borderColor),t.borderRadius&&(n.radius=t.borderRadius),t.buttonRadius&&(n.buttonRadius=t.buttonRadius),n}function A(e,t){let n=e.dataset,r=C(n.theme);!n.theme&&t===`carolinatherapysolutions`&&(r=`carolina`),!n.theme&&t===`truebridge`&&(r=`truebridge`);let i={...x[r]};i=k(i,n);let a=w(n.layout);a&&(i.layout=a);let o=E(n.card);o===void 0?i.layout===`inline`&&(i.showCard=!1):i.showCard=o;let s=T(n.density);s&&(i.density=s);let c={...O(i)},l=D(e);for(let e of y)l[e]&&(c[e]=l[e]);let u=b[t],d=n.chrome===`host`,f=d?``:S(n.heading,120)??u.heading,p=d?``:S(n.introText,280)??u.introText,m=S(n.buttonLabel,48)??(r===`carolina`?`Submit`:u.buttonLabel),h=S(n.successTitle,80)??u.successTitle,g=S(n.successMessage,400)??u.successMessage,_=[`tb-iw-root`,`tb-iw-root--layout-${i.layout}`,i.showCard?`tb-iw-root--has-card`:`tb-iw-root--no-card`,`tb-iw-root--density-${i.density}`,`tb-iw-root--preset-${r}`];return i.pillFields&&_.push(`tb-iw-root--pill-fields`),i.buttonUppercase&&_.push(`tb-iw-root--btn-uppercase`),{preset:r,layout:i.layout,showCard:i.showCard,density:i.density,pillFields:i.pillFields,buttonUppercase:i.buttonUppercase,cssVars:c,heading:f,introText:p,buttonLabel:m,successTitle:h,successMessage:g,rootClasses:_}}function j(e,t){for(let[n,r]of Object.entries(t.cssVars))e.style.setProperty(n,r);e.className=t.rootClasses.join(` `)}var M=3e3,N=[{value:`Individual`,label:`Individual`},{value:`Couples`,label:`Couples`},{value:`Unsure/Other`,label:`Unsure/Other`}],P=[{value:`Raleigh Office`,label:`Raleigh Office`},{value:`Cary Office`,label:`Cary Office`},{value:`Virtual`,label:`Virtual`},{value:`First Available`,label:`First Available`}];function F(e){return e===`truebridge`||e===`carolinatherapysolutions`?e:null}function I(e){return e.replace(/\D/g,``).slice(0,10)}function L(e){let t=I(e);return t.length===0?``:t.length<=3?`(${t}`:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}`}function R(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function z(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function B(e,t=!1){let n=z(`label`,t?`tb-iw-label tb-iw-required`:`tb-iw-label`);return n.textContent=e,n}function V(e){let t=F(e.dataset.practice??e.getAttribute(`data-practice`)??void 0);if(!t){e.textContent=`Intake form configuration error (missing data-practice).`;return}let n=t===`carolinatherapysolutions`,r=A(e,t),i=g(e),a=new Date().toISOString(),o=e.attachShadow({mode:`open`}),s=z(`style`);s.textContent=v,o.append(s);let c=z(`div`);j(c,r),o.append(c);let l=z(`div`,`tb-iw-shell`);c.append(l),(e.dataset.chrome??e.getAttribute(`data-chrome`))!==`host`&&H(l,r);let u=z(`div`,`tb-iw-error`);u.hidden=!0,l.append(u);let d=z(`form`);d.setAttribute(`novalidate`,`novalidate`),l.append(d);let f=z(`div`,`tb-iw-honeypot`),p=z(`input`);p.type=`text`,p.name=`website`,p.tabIndex=-1,p.autocomplete=`off`,p.setAttribute(`aria-hidden`,`true`),f.append(p),d.append(f);let m=z(`div`,`tb-iw-row tb-iw-row--2`),h=z(`div`,`tb-iw-field`),y=z(`input`,`tb-iw-input`);y.name=`firstName`,y.required=!0,y.autocomplete=`given-name`,h.append(B(`First name`,!0),y),m.append(h);let b=z(`div`,`tb-iw-field`),x=z(`input`,`tb-iw-input`);x.name=`lastName`,x.required=!0,x.autocomplete=`family-name`,b.append(B(`Last name`,!0),x),m.append(b),d.append(m);let S=z(`div`,`tb-iw-field`),C=z(`input`,`tb-iw-input`);C.type=`email`,C.name=`email`,C.required=!0,C.autocomplete=`email`,S.append(B(`Email`,!0),C),d.append(S);let w=z(`div`,`tb-iw-field`),T=z(`input`,`tb-iw-input`);T.type=`tel`,T.name=`phone`,T.autocomplete=`tel`,T.placeholder=`(555) 555-5555`,w.append(B(`Phone`),T),d.append(w);let E=z(`div`,`tb-iw-field`);E.append(B(`Which services are you seeking?`));let D=z(`div`,`tb-iw-checkboxes`);for(let e of N){let t=z(`label`,`tb-iw-checkbox`),n=z(`input`);n.type=`checkbox`,n.name=`seeking`,n.value=e.value,t.append(n,document.createTextNode(e.label)),D.append(t)}E.append(D),d.append(E);let O;if(n){let e=z(`div`,`tb-iw-field`);O=z(`select`,`tb-iw-select`),O.name=`location`,O.required=!0;let t=z(`option`);t.value=``,t.textContent=`Select location preference`,O.append(t);for(let e of P){let t=z(`option`);t.value=e.value,t.textContent=e.label,O.append(t)}e.append(B(`Location preference`,!0),O),d.append(e)}let k=z(`div`,`tb-iw-field`),V=z(`textarea`,`tb-iw-textarea`);V.name=`message`,V.required=!0,V.maxLength=2e3,k.append(B(`Message`,!0),V),d.append(k);let U=z(`div`,`tb-iw-actions`),W=z(`button`,`tb-iw-btn`);W.type=`submit`,W.textContent=r.buttonLabel,U.append(W),d.append(U);let G=r.buttonLabel;T.addEventListener(`input`,()=>{T.value=L(T.value)});function K(e){u.textContent=e,u.hidden=!1}function q(){u.hidden=!0}function J(){let e={};y.value.trim()||(e.firstName=`First name is required.`),x.value.trim()||(e.lastName=`Last name is required.`);let t=C.value.trim();t?R(t)||(e.email=`Enter a valid email address.`):e.email=`Email is required.`;let r=T.value.trim();return r&&I(r).length!==10&&(e.phone=`Enter a 10-digit phone number.`),n&&O&&!O.value&&(e.location=`Select a location preference.`),V.value.trim()||(e.message=`Message is required.`),e}function Y(e){d.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());for(let[t,n]of Object.entries(e)){if(!n)continue;let e=d.querySelector(`[name="${t}"]`)?.closest(`.tb-iw-field`);if(e){let t=z(`div`,`tb-iw-field-error`);t.textContent=n,e.append(t)}}}function X(){l.replaceChildren();let e=z(`div`,`tb-iw-success`),t=z(`h3`);t.textContent=r.successTitle;let n=z(`p`);n.textContent=r.successMessage,e.append(t,n),l.append(e)}d.addEventListener(`submit`,async e=>{e.preventDefault(),q(),d.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());let r=J();if(Object.keys(r).length>0){Y(r),K(`Please fix the highlighted fields.`);return}if(Date.now()-Date.parse(a)<M){K(`Please wait a moment and try again.`);return}let o=[...d.querySelectorAll(`input[name="seeking"]:checked`)].map(e=>e.value),s={practiceId:t,firstName:y.value.trim(),lastName:x.value.trim(),email:C.value.trim(),phone:T.value.trim(),message:V.value.trim(),formStartedAt:a,website:p.value};o.length>0&&(s.seeking=o),n&&O?.value&&(s.location=O.value),W.disabled=!0,W.textContent=`Sending…`;let c=await _(i,s);if(c.ok){X();return}W.disabled=!1,W.textContent=G,K(c.message)})}function H(e,t){if(t.heading){let n=z(`h2`,`tb-iw-title`);n.textContent=t.heading,e.append(n)}if(t.introText){let n=z(`p`,`tb-iw-subtitle`);n.textContent=t.introText,e.append(n)}}function U(e){let t=document.getElementById(`tb-intake-form-root`);t&&(t.textContent=e)}function W(){let e=document.getElementById(`tb-intake-form-root`);if(!e)return;let t=c(typeof window.__TB_EMBED_QUERY__==`string`?window.__TB_EMBED_QUERY__:s());if(typeof t==`string`){U(u(t)),h(document.body);return}l(e,t),V(e),h(e)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,W):W();