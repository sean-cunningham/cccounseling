var e=new Set([`practice`,`theme`,`layout`,`card`,`density`,`chrome`,`frame`]);function t(e){let t=e?.trim().toLowerCase();return t===`truebridge`||t===`carolinatherapysolutions`?t:null}function n(e){let t=e?.trim().toLowerCase();if(t&&[`clean`,`warm`,`soft`,`minimal`,`carolina`,`truebridge`].includes(t))return t}function r(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function i(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function a(e){let t=e?.trim().toLowerCase();if(t===`full`||t===`host`)return t}function o(e){let t=e?.trim().toLowerCase();if(t===`transparent`||t===`opaque`)return t}function s(e){if(e===null)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function c(){let e=window.location.search;if(e.length>1)return e;try{let e=new URL(window.location.href).search;if(e.length>1)return e}catch{}let t=window.location.href,n=t.indexOf(`?`);return n===-1?``:t.slice(n)}function l(c){let l=new URLSearchParams(c.startsWith(`?`)||c.length===0?c:`?${c}`);for(let t of l.keys())if(!e.has(t))return`invalid_params`;let u=l.get(`practice`);if(!u)return`missing_practice`;let d=t(u);if(!d)return`invalid_practice`;let f=n(l.get(`theme`)),p=r(l.get(`layout`)),m=s(l.get(`card`)),h=i(l.get(`density`));if(l.get(`theme`)&&!f||l.get(`layout`)&&!p||l.get(`card`)!==null&&m===void 0||l.get(`density`)&&!h)return`invalid_params`;let g=a(l.get(`chrome`));if(l.get(`chrome`)&&!g)return`invalid_params`;let _=o(l.get(`frame`));return l.get(`frame`)&&!_?`invalid_params`:{practiceId:d,theme:f,layout:p,card:m,density:h,chrome:g,frame:_}}function u(e,t){e.dataset.practice=t.practiceId,t.practiceId===`truebridge`&&(e.dataset.heading=``,e.dataset.introText=``),t.theme&&(e.dataset.theme=t.theme),t.layout&&(e.dataset.layout=t.layout),t.card!==void 0&&(e.dataset.card=String(t.card)),t.density&&(e.dataset.density=t.density),t.chrome===`host`?(e.dataset.chrome=`host`,e.dataset.layout=`inline`,e.dataset.card=`false`,e.dataset.heading=``,e.dataset.introText=``):t.chrome===`full`&&(e.dataset.chrome=`full`)}function d(e){switch(e){case`missing_practice`:return`This form link is missing a practice parameter. The iframe src must include ?practice=truebridge or ?practice=carolinatherapysolutions.`;case`invalid_practice`:return`This form link uses an unsupported practice.`;default:return`This form link is not configured correctly.`}}var f=`tb-intake-form`,p=`resize`;function m(e){let t=e.getBoundingClientRect(),n=Math.ceil(t.height);return n>0?n:Math.max(e.offsetHeight,e.scrollHeight)}function h(e){if(window.parent===window)return;let t={source:f,type:p,height:Math.ceil(e)};window.parent.postMessage(t,`*`)}function g(e){let t=0,n=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{h(m(e))})};n();let r=new ResizeObserver(n);return r.observe(e),window.addEventListener(`load`,n),window.addEventListener(`resize`,n),()=>{r.disconnect(),window.removeEventListener(`load`,n),window.removeEventListener(`resize`,n),cancelAnimationFrame(t)}}function _(e){let t=e.dataset.apiBase?.trim();if(t)return t.replace(/\/+$/,``);let n=window.TB_INTAKE_WIDGET_API_BASE?.trim();return n?n.replace(/\/+$/,``):``}async function v(e,t){if(!e)return{ok:!1,message:`Form is not configured. Please try again later.`};let n;try{n=await fetch(`${e}/public/intake`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{return{ok:!1,message:`Unable to reach the server. Please try again later.`}}if(n.ok)return{ok:!0};let r=`Unable to submit right now. Please try again.`;try{let e=await n.json();e.error&&typeof e.error==`string`&&(r=e.error)}catch{}return{ok:!1,message:r}}var y=`
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
`,b=[`--tb-iw-primary`,`--tb-iw-card-bg`,`--tb-iw-page-bg`,`--tb-iw-text`,`--tb-iw-muted`,`--tb-iw-border`,`--tb-iw-radius`,`--tb-iw-button-radius`,`--tb-iw-font`,`--tb-iw-field-height`,`--tb-iw-gap`],x={truebridge:{heading:``,introText:``,buttonLabel:`Send request`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`},carolinatherapysolutions:{heading:`Request an appointment`,introText:`We'll respond during business hours.`,buttonLabel:`Submit`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`}},S={clean:{primary:`#1e3a5f`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`8px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},warm:{primary:`#9a6b4f`,cardBg:`#fffaf7`,pageBg:`transparent`,text:`#3d2c24`,muted:`#7a6558`,border:`#e8d5c8`,radius:`10px`,buttonRadius:`10px`,font:`Georgia, "Times New Roman", serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},soft:{primary:`#6b8cae`,cardBg:`#f8fafc`,pageBg:`transparent`,text:`#334155`,muted:`#64748b`,border:`#dbe4ee`,radius:`12px`,buttonRadius:`12px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,fieldHeight:`2.5rem`,gap:`1.125rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},minimal:{primary:`#334155`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1e293b`,muted:`#64748b`,border:`#e2e8f0`,radius:`6px`,buttonRadius:`6px`,font:`inherit`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!1,buttonUppercase:!1},carolina:{primary:`#8b9a8b`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#5f6f5f`,muted:`#6d7d6d`,border:`#a3b0a3`,radius:`6px`,buttonRadius:`9999px`,font:`inherit`,fieldHeight:`2.75rem`,gap:`1.25rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!0,buttonUppercase:!0},truebridge:{primary:`#1e3a5f`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`10px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1}};function C(e,t){if(e===void 0)return;let n=e.replace(/<[^>]*>/g,``).replace(/\s+/g,` `).trim();if(n.length!==0)return n.length>t?n.slice(0,t):n}function w(e){let t=e?.trim().toLowerCase();return t&&t in S?t:`clean`}function T(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function E(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function D(e){if(e===void 0)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function O(e){let t=getComputedStyle(e),n={};for(let e of b){let r=t.getPropertyValue(e).trim();r&&(n[e]=r)}return n}function k(e){return{"--tb-iw-primary":e.primary,"--tb-iw-card-bg":e.cardBg,"--tb-iw-page-bg":e.pageBg,"--tb-iw-text":e.text,"--tb-iw-muted":e.muted,"--tb-iw-border":e.border,"--tb-iw-radius":e.radius,"--tb-iw-button-radius":e.buttonRadius,"--tb-iw-font":e.font,"--tb-iw-field-height":e.fieldHeight,"--tb-iw-gap":e.gap}}function A(e,t){let n={...e};return t.primaryColor&&(n.primary=t.primaryColor),t.backgroundColor&&(n.cardBg=t.backgroundColor,n.pageBg=t.backgroundColor),t.textColor&&(n.text=t.textColor),t.mutedTextColor&&(n.muted=t.mutedTextColor),t.borderColor&&(n.border=t.borderColor),t.borderRadius&&(n.radius=t.borderRadius),t.buttonRadius&&(n.buttonRadius=t.buttonRadius),n}function j(e,t){let n=e.dataset,r=w(n.theme);!n.theme&&t===`carolinatherapysolutions`&&(r=`carolina`),!n.theme&&t===`truebridge`&&(r=`truebridge`);let i={...S[r]};i=A(i,n);let a=T(n.layout);a&&(i.layout=a);let o=D(n.card);o===void 0?i.layout===`inline`&&(i.showCard=!1):i.showCard=o;let s=E(n.density);s&&(i.density=s);let c={...k(i)},l=O(e);for(let e of b)l[e]&&(c[e]=l[e]);let u=x[t],d=n.chrome===`host`||t===`truebridge`,f=d?``:C(n.heading,120)??u.heading,p=d?``:C(n.introText,280)??u.introText,m=C(n.buttonLabel,48)??(r===`carolina`?`Submit`:u.buttonLabel),h=C(n.successTitle,80)??u.successTitle,g=C(n.successMessage,400)??u.successMessage,_=[`tb-iw-root`,`tb-iw-root--layout-${i.layout}`,i.showCard?`tb-iw-root--has-card`:`tb-iw-root--no-card`,`tb-iw-root--density-${i.density}`,`tb-iw-root--preset-${r}`];return i.pillFields&&_.push(`tb-iw-root--pill-fields`),i.buttonUppercase&&_.push(`tb-iw-root--btn-uppercase`),(t===`truebridge`||n.embedFullWidth===`true`)&&_.push(`tb-iw-root--embed-full`),{preset:r,layout:i.layout,showCard:i.showCard,density:i.density,pillFields:i.pillFields,buttonUppercase:i.buttonUppercase,cssVars:c,heading:f,introText:p,buttonLabel:m,successTitle:h,successMessage:g,rootClasses:_}}function M(e,t){for(let[n,r]of Object.entries(t.cssVars))e.style.setProperty(n,r);e.className=t.rootClasses.join(` `)}var N=3e3,P=[{value:`Individual`,label:`Individual`},{value:`Couples`,label:`Couples`},{value:`Unsure/Other`,label:`Unsure/Other`}],F=[{value:`Raleigh Office`,label:`Raleigh Office`},{value:`Cary Office`,label:`Cary Office`},{value:`Virtual`,label:`Virtual`},{value:`First Available`,label:`First Available`}];function I(e){return e===`truebridge`||e===`carolinatherapysolutions`?e:null}function L(e){return e.replace(/\D/g,``).slice(0,10)}function R(e){let t=L(e);return t.length===0?``:t.length<=3?`(${t}`:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}`}function z(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function B(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function V(e,t=!1){let n=B(`label`,t?`tb-iw-label tb-iw-required`:`tb-iw-label`);return n.textContent=e,n}function H(e){let t=I(e.dataset.practice??e.getAttribute(`data-practice`)??void 0);if(!t){e.textContent=`Intake form configuration error (missing data-practice).`;return}let n=t===`carolinatherapysolutions`,r=j(e,t),i=_(e),a=new Date().toISOString(),o=e.attachShadow({mode:`open`}),s=B(`style`);s.textContent=y,o.append(s);let c=B(`div`);M(c,r),o.append(c);let l=B(`div`,`tb-iw-shell`);c.append(l),(e.dataset.chrome??e.getAttribute(`data-chrome`))!==`host`&&(r.heading||r.introText)&&U(l,r);let u=B(`div`,`tb-iw-error`);u.hidden=!0,l.append(u);let d=B(`form`);d.setAttribute(`novalidate`,`novalidate`),l.append(d);let f=B(`div`,`tb-iw-honeypot`),p=B(`input`);p.type=`text`,p.name=`website`,p.tabIndex=-1,p.autocomplete=`off`,p.setAttribute(`aria-hidden`,`true`),f.append(p),d.append(f);let m=B(`div`,`tb-iw-row tb-iw-row--2`),h=B(`div`,`tb-iw-field`),g=B(`input`,`tb-iw-input`);g.name=`firstName`,g.required=!0,g.autocomplete=`given-name`,h.append(V(`First name`,!0),g),m.append(h);let b=B(`div`,`tb-iw-field`),x=B(`input`,`tb-iw-input`);x.name=`lastName`,x.required=!0,x.autocomplete=`family-name`,b.append(V(`Last name`,!0),x),m.append(b),d.append(m);let S=B(`div`,`tb-iw-field`),C=B(`input`,`tb-iw-input`);C.type=`email`,C.name=`email`,C.required=!0,C.autocomplete=`email`,S.append(V(`Email`,!0),C),d.append(S);let w=B(`div`,`tb-iw-field`),T=B(`input`,`tb-iw-input`);T.type=`tel`,T.name=`phone`,T.autocomplete=`tel`,T.placeholder=`(555) 555-5555`,w.append(V(`Phone`),T),d.append(w);let E=B(`div`,`tb-iw-field`);E.append(V(`Which services are you seeking?`));let D=B(`div`,`tb-iw-checkboxes`);for(let e of P){let t=B(`label`,`tb-iw-checkbox`),n=B(`input`);n.type=`checkbox`,n.name=`seeking`,n.value=e.value,t.append(n,document.createTextNode(e.label)),D.append(t)}E.append(D),d.append(E);let O;if(n){let e=B(`div`,`tb-iw-field`);O=B(`select`,`tb-iw-select`),O.name=`location`,O.required=!0;let t=B(`option`);t.value=``,t.textContent=`Select location preference`,O.append(t);for(let e of F){let t=B(`option`);t.value=e.value,t.textContent=e.label,O.append(t)}e.append(V(`Location preference`,!0),O),d.append(e)}let k=B(`div`,`tb-iw-field`),A=B(`textarea`,`tb-iw-textarea`);A.name=`message`,A.required=!0,A.maxLength=2e3,k.append(V(`Message`,!0),A),d.append(k);let H=B(`div`,`tb-iw-actions`),W=B(`button`,`tb-iw-btn`);W.type=`submit`,W.textContent=r.buttonLabel,H.append(W),d.append(H);let G=r.buttonLabel;T.addEventListener(`input`,()=>{T.value=R(T.value)});function K(e){u.textContent=e,u.hidden=!1}function q(){u.hidden=!0}function J(){let e={};g.value.trim()||(e.firstName=`First name is required.`),x.value.trim()||(e.lastName=`Last name is required.`);let t=C.value.trim();t?z(t)||(e.email=`Enter a valid email address.`):e.email=`Email is required.`;let r=T.value.trim();return r&&L(r).length!==10&&(e.phone=`Enter a 10-digit phone number.`),n&&O&&!O.value&&(e.location=`Select a location preference.`),A.value.trim()||(e.message=`Message is required.`),e}function Y(e){d.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());for(let[t,n]of Object.entries(e)){if(!n)continue;let e=d.querySelector(`[name="${t}"]`)?.closest(`.tb-iw-field`);if(e){let t=B(`div`,`tb-iw-field-error`);t.textContent=n,e.append(t)}}}function X(){l.replaceChildren();let e=B(`div`,`tb-iw-success`),t=B(`h3`);t.textContent=r.successTitle;let n=B(`p`);n.textContent=r.successMessage,e.append(t,n),l.append(e)}d.addEventListener(`submit`,async e=>{e.preventDefault(),q(),d.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());let r=J();if(Object.keys(r).length>0){Y(r),K(`Please fix the highlighted fields.`);return}if(Date.now()-Date.parse(a)<N){K(`Please wait a moment and try again.`);return}let o=[...d.querySelectorAll(`input[name="seeking"]:checked`)].map(e=>e.value),s={practiceId:t,firstName:g.value.trim(),lastName:x.value.trim(),email:C.value.trim(),phone:T.value.trim(),message:A.value.trim(),formStartedAt:a,website:p.value};o.length>0&&(s.seeking=o),n&&O?.value&&(s.location=O.value),W.disabled=!0,W.textContent=`Sending…`;let c=await v(i,s);if(c.ok){X();return}W.disabled=!1,W.textContent=G,K(c.message)})}function U(e,t){if(t.heading){let n=B(`h2`,`tb-iw-title`);n.textContent=t.heading,e.append(n)}if(t.introText){let n=B(`p`,`tb-iw-subtitle`);n.textContent=t.introText,e.append(n)}}function W(e){let t=document.getElementById(`tb-intake-form-root`);t&&(t.textContent=e)}function G(){let e=document.getElementById(`tb-intake-form-root`);if(!e)return;let t=l(typeof window.__TB_EMBED_QUERY__==`string`?window.__TB_EMBED_QUERY__:c());if(typeof t==`string`){W(d(t)),g(document.body);return}u(e,t),H(e),g(e)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,G):G();