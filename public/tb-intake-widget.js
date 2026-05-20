var TBIntakeWidget=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});function t(){return window.__TB_FORM_STARTED_AT__||(window.__TB_FORM_STARTED_AT__=new Date().toISOString()),window.__TB_FORM_STARTED_AT__}function n(e){if(window.__TB_FORM_STARTED_AT__)return window.__TB_FORM_STARTED_AT__;let n=e?.dataset.formStartedAt?.trim();return n?(window.__TB_FORM_STARTED_AT__=n,n):t()}function r(e){let t=e.dataset.apiBase?.trim();if(t)return t.replace(/\/+$/,``);let n=window.TB_INTAKE_WIDGET_API_BASE?.trim();return n?n.replace(/\/+$/,``):`https://gle074x4bi.execute-api.us-east-1.amazonaws.com/prod`}async function i(e,t){if(!e)return{ok:!1,message:`Form is not configured. Please try again later.`};let n={practiceId:t.practiceId,firstName:t.firstName,lastName:t.lastName,email:t.email,phone:t.phone,message:t.message,formStartedAt:t.formStartedAt,website:t.website};t.seeking&&t.seeking.length>0&&(n.seeking=t.seeking),t.location&&(n.location=t.location),t.captchaToken&&(n.captchaToken=t.captchaToken);let r;try{r=await fetch(`${e}/public/intake`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})}catch{return{ok:!1,message:`Unable to reach the server. Please try again later.`}}if(r.ok)return{ok:!0};let i=`Unable to submit right now. Please try again.`;try{let e=await r.json();e.error&&typeof e.error==`string`&&(i=e.error)}catch{}return{ok:!1,message:i}}var a=`
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
`,o=[`--tb-iw-primary`,`--tb-iw-card-bg`,`--tb-iw-page-bg`,`--tb-iw-text`,`--tb-iw-muted`,`--tb-iw-border`,`--tb-iw-radius`,`--tb-iw-button-radius`,`--tb-iw-font`,`--tb-iw-field-height`,`--tb-iw-gap`],s={truebridge:{heading:``,introText:``,buttonLabel:`Send request`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`},carolinatherapysolutions:{heading:`Request an appointment`,introText:`We'll respond during business hours.`,buttonLabel:`Submit`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`}},c={clean:{primary:`#1e3a5f`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`8px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},warm:{primary:`#9a6b4f`,cardBg:`#fffaf7`,pageBg:`transparent`,text:`#3d2c24`,muted:`#7a6558`,border:`#e8d5c8`,radius:`10px`,buttonRadius:`10px`,font:`Georgia, "Times New Roman", serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},soft:{primary:`#6b8cae`,cardBg:`#f8fafc`,pageBg:`transparent`,text:`#334155`,muted:`#64748b`,border:`#dbe4ee`,radius:`12px`,buttonRadius:`12px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,fieldHeight:`2.5rem`,gap:`1.125rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},minimal:{primary:`#334155`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1e293b`,muted:`#64748b`,border:`#e2e8f0`,radius:`6px`,buttonRadius:`6px`,font:`inherit`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!1,buttonUppercase:!1},carolina:{primary:`#8b9a8b`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#5f6f5f`,muted:`#6d7d6d`,border:`#a3b0a3`,radius:`6px`,buttonRadius:`9999px`,font:`inherit`,fieldHeight:`2.75rem`,gap:`1.25rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!0,buttonUppercase:!0},truebridge:{primary:`#2C4250`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`10px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1}};function l(e,t){if(e===void 0)return;let n=e.replace(/<[^>]*>/g,``).replace(/\s+/g,` `).trim();if(n.length!==0)return n.length>t?n.slice(0,t):n}function u(e){let t=e?.trim().toLowerCase();return t&&t in c?t:`clean`}function d(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function f(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function p(e){if(e===void 0)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function m(e){let t=getComputedStyle(e),n={};for(let e of o){let r=t.getPropertyValue(e).trim();r&&(n[e]=r)}return n}function h(e){return{"--tb-iw-primary":e.primary,"--tb-iw-card-bg":e.cardBg,"--tb-iw-page-bg":e.pageBg,"--tb-iw-text":e.text,"--tb-iw-muted":e.muted,"--tb-iw-border":e.border,"--tb-iw-radius":e.radius,"--tb-iw-button-radius":e.buttonRadius,"--tb-iw-font":e.font,"--tb-iw-field-height":e.fieldHeight,"--tb-iw-gap":e.gap}}function g(e,t){let n={...e};return t.primaryColor&&(n.primary=t.primaryColor),t.backgroundColor&&(n.cardBg=t.backgroundColor,n.pageBg=t.backgroundColor),t.textColor&&(n.text=t.textColor),t.mutedTextColor&&(n.muted=t.mutedTextColor),t.borderColor&&(n.border=t.borderColor),t.borderRadius&&(n.radius=t.borderRadius),t.buttonRadius&&(n.buttonRadius=t.buttonRadius),n}function _(e,t){let n=e.dataset,r=u(n.theme);!n.theme&&t===`carolinatherapysolutions`&&(r=`carolina`),!n.theme&&t===`truebridge`&&(r=`truebridge`);let i={...c[r]};i=g(i,n);let a=d(n.layout);a&&(i.layout=a);let _=p(n.card);_===void 0?i.layout===`inline`&&(i.showCard=!1):i.showCard=_;let v=f(n.density);v&&(i.density=v);let y={...h(i)},b=m(e);for(let e of o)b[e]&&(y[e]=b[e]);let x=s[t],S=n.chrome===`host`,C=n.mode===`formOnly`,w=S||C||t===`truebridge`,T=w?``:l(n.heading,120)??x.heading,E=w?``:l(n.introText,280)??x.introText,D=l(n.buttonLabel,48)??(r===`carolina`?`Submit`:x.buttonLabel),O=l(n.successTitle,80)??x.successTitle,k=l(n.successMessage,400)??x.successMessage,A=[`tb-iw-root`,`tb-iw-root--layout-${i.layout}`,i.showCard?`tb-iw-root--has-card`:`tb-iw-root--no-card`,`tb-iw-root--density-${i.density}`,`tb-iw-root--preset-${r}`];return i.pillFields&&A.push(`tb-iw-root--pill-fields`),i.buttonUppercase&&A.push(`tb-iw-root--btn-uppercase`),(t===`truebridge`||C||n.embedFullWidth===`true`)&&A.push(`tb-iw-root--embed-full`),{preset:r,layout:i.layout,showCard:i.showCard,density:i.density,pillFields:i.pillFields,buttonUppercase:i.buttonUppercase,cssVars:y,heading:T,introText:E,buttonLabel:D,successTitle:O,successMessage:k,rootClasses:A}}function v(e,t){for(let[n,r]of Object.entries(t.cssVars))e.style.setProperty(n,r);e.className=t.rootClasses.join(` `)}var y=3e3,b=[{value:`Individual`,label:`Individual`},{value:`Couples`,label:`Couples`},{value:`Unsure/Other`,label:`Unsure/Other`}],x=[{value:`Raleigh Office`,label:`Raleigh Office`},{value:`Cary Office`,label:`Cary Office`},{value:`Virtual`,label:`Virtual`},{value:`First Available`,label:`First Available`}];function S(e){return e===`truebridge`||e===`carolinatherapysolutions`?e:null}function C(e){return e.replace(/\D/g,``).slice(0,10)}function w(e){let t=C(e);return t.length===0?``:t.length<=3?`(${t}`:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}`}function T(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function E(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function D(e,t=!1){let n=E(`label`,t?`tb-iw-label tb-iw-required`:`tb-iw-label`);return n.textContent=e,n}function O(e){let t=S(e.dataset.practice??e.getAttribute(`data-practice`)??void 0);if(!t){e.textContent=`Intake form configuration error (missing data-practice).`;return}let o=t===`carolinatherapysolutions`,s=_(e,t),c=r(e),l=n(e),u=e.attachShadow({mode:`open`}),d=E(`style`);d.textContent=a,u.append(d);let f=E(`div`);v(f,s),u.append(f);let p=E(`div`,`tb-iw-shell`);f.append(p);let m=e.dataset.chrome??e.getAttribute(`data-chrome`);(e.dataset.mode??e.getAttribute(`data-mode`))!==`formOnly`&&m!==`host`&&(s.heading||s.introText)&&k(p,s);let h=E(`div`,`tb-iw-error`);h.hidden=!0,p.append(h);let g=E(`form`);g.setAttribute(`novalidate`,`novalidate`),p.append(g);let O=E(`div`,`tb-iw-honeypot`),A=E(`input`);A.type=`text`,A.name=`website`,A.tabIndex=-1,A.autocomplete=`off`,A.setAttribute(`aria-hidden`,`true`),O.append(A),g.append(O);let j=E(`div`,`tb-iw-row tb-iw-row--2`),M=E(`div`,`tb-iw-field`),N=E(`input`,`tb-iw-input`);N.name=`firstName`,N.required=!0,N.autocomplete=`given-name`,M.append(D(`First name`,!0),N),j.append(M);let P=E(`div`,`tb-iw-field`),F=E(`input`,`tb-iw-input`);F.name=`lastName`,F.required=!0,F.autocomplete=`family-name`,P.append(D(`Last name`,!0),F),j.append(P),g.append(j);let I=E(`div`,`tb-iw-field`),L=E(`input`,`tb-iw-input`);L.type=`email`,L.name=`email`,L.required=!0,L.autocomplete=`email`,I.append(D(`Email`,!0),L),g.append(I);let R=E(`div`,`tb-iw-field`),z=E(`input`,`tb-iw-input`);z.type=`tel`,z.name=`phone`,z.autocomplete=`tel`,z.placeholder=`(555) 555-5555`,R.append(D(`Phone`),z),g.append(R);let B=E(`div`,`tb-iw-field`);B.append(D(`Which services are you seeking?`));let V=E(`div`,`tb-iw-checkboxes`);for(let e of b){let t=E(`label`,`tb-iw-checkbox`),n=E(`input`);n.type=`checkbox`,n.name=`seeking`,n.value=e.value,t.append(n,document.createTextNode(e.label)),V.append(t)}B.append(V),g.append(B);let H;if(o){let e=E(`div`,`tb-iw-field`);H=E(`select`,`tb-iw-select`),H.name=`location`,H.required=!0;let t=E(`option`);t.value=``,t.textContent=`Select location preference`,H.append(t);for(let e of x){let t=E(`option`);t.value=e.value,t.textContent=e.label,H.append(t)}e.append(D(`Location preference`,!0),H),g.append(e)}let U=E(`div`,`tb-iw-field`),W=E(`textarea`,`tb-iw-textarea`);W.name=`message`,W.required=!0,W.maxLength=2e3,U.append(D(`Message`,!0),W),g.append(U);let G=E(`div`,`tb-iw-actions`),K=E(`button`,`tb-iw-btn`);K.type=`submit`,K.textContent=s.buttonLabel,G.append(K),g.append(G);let q=s.buttonLabel;z.addEventListener(`input`,()=>{z.value=w(z.value)});function J(e){h.textContent=e,h.hidden=!1}function Y(){h.hidden=!0}function X(){let e={};N.value.trim()||(e.firstName=`First name is required.`),F.value.trim()||(e.lastName=`Last name is required.`);let t=L.value.trim();t?T(t)||(e.email=`Enter a valid email address.`):e.email=`Email is required.`;let n=z.value.trim();return n&&C(n).length!==10&&(e.phone=`Enter a 10-digit phone number.`),o&&H&&!H.value&&(e.location=`Select a location preference.`),W.value.trim()||(e.message=`Message is required.`),e}function Z(e){g.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());for(let[t,n]of Object.entries(e)){if(!n)continue;let e=g.querySelector(`[name="${t}"]`)?.closest(`.tb-iw-field`);if(e){let t=E(`div`,`tb-iw-field-error`);t.textContent=n,e.append(t)}}}function Q(){p.replaceChildren();let e=E(`div`,`tb-iw-success`),t=E(`h3`);t.textContent=s.successTitle;let n=E(`p`);n.textContent=s.successMessage,e.append(t,n),p.append(e)}g.addEventListener(`submit`,async e=>{e.preventDefault(),Y(),g.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());let n=X();if(Object.keys(n).length>0){Z(n),J(`Please fix the highlighted fields.`);return}if(Date.now()-Date.parse(l)<y){J(`Please wait a moment and try again.`);return}let r=[...g.querySelectorAll(`input[name="seeking"]:checked`)].map(e=>e.value),a={practiceId:t,firstName:N.value.trim(),lastName:F.value.trim(),email:L.value.trim(),phone:z.value.trim(),message:W.value.trim(),formStartedAt:l,website:A.value};r.length>0&&(a.seeking=r),o&&H?.value&&(a.location=H.value),K.disabled=!0,K.textContent=`Sending…`;let s=await i(c,a);if(s.ok){Q();return}K.disabled=!1,K.textContent=q,J(s.message)})}function k(e,t){if(t.heading){let n=E(`h2`,`tb-iw-title`);n.textContent=t.heading,e.append(n)}if(t.introText){let n=E(`p`,`tb-iw-subtitle`);n.textContent=t.introText,e.append(n)}}var A=`#tb-intake-widget, [data-tb-intake-widget]`;function j(){t();let e=document.querySelectorAll(A);for(let t of e)t.dataset.tbWidgetMounted!==`true`&&(t.dataset.tbWidgetMounted=`true`,O(t))}return document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,j):j(),e.mountIntakeWidget=O,e})({});