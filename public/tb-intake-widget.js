var TBIntakeWidget=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});function t(e){let t=e.dataset.apiBase?.trim();if(t)return t.replace(/\/+$/,``);let n=window.TB_INTAKE_WIDGET_API_BASE?.trim();return n?n.replace(/\/+$/,``):`https://gle074x4bi.execute-api.us-east-1.amazonaws.com`}async function n(e,t){if(!e)return{ok:!1,message:`Form is not configured. Please try again later.`};let n;try{n=await fetch(`${e}/public/intake`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}catch{return{ok:!1,message:`Unable to reach the server. Please try again later.`}}if(n.ok)return{ok:!0};let r=`Unable to submit right now. Please try again.`;try{let e=await n.json();e.error&&typeof e.error==`string`&&(r=e.error)}catch{}return{ok:!1,message:r}}var r=`
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
`,i=[`--tb-iw-primary`,`--tb-iw-card-bg`,`--tb-iw-page-bg`,`--tb-iw-text`,`--tb-iw-muted`,`--tb-iw-border`,`--tb-iw-radius`,`--tb-iw-button-radius`,`--tb-iw-font`,`--tb-iw-field-height`,`--tb-iw-gap`],a={truebridge:{heading:``,introText:``,buttonLabel:`Send request`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`},carolinatherapysolutions:{heading:`Request an appointment`,introText:`We'll respond during business hours.`,buttonLabel:`Submit`,successTitle:`Thank you`,successMessage:`Your request was received. Our team will follow up during business hours.`}},o={clean:{primary:`#1e3a5f`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`8px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},warm:{primary:`#9a6b4f`,cardBg:`#fffaf7`,pageBg:`transparent`,text:`#3d2c24`,muted:`#7a6558`,border:`#e8d5c8`,radius:`10px`,buttonRadius:`10px`,font:`Georgia, "Times New Roman", serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},soft:{primary:`#6b8cae`,cardBg:`#f8fafc`,pageBg:`transparent`,text:`#334155`,muted:`#64748b`,border:`#dbe4ee`,radius:`12px`,buttonRadius:`12px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,fieldHeight:`2.5rem`,gap:`1.125rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1},minimal:{primary:`#334155`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1e293b`,muted:`#64748b`,border:`#e2e8f0`,radius:`6px`,buttonRadius:`6px`,font:`inherit`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!1,buttonUppercase:!1},carolina:{primary:`#8b9a8b`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#5f6f5f`,muted:`#6d7d6d`,border:`#a3b0a3`,radius:`6px`,buttonRadius:`9999px`,font:`inherit`,fieldHeight:`2.75rem`,gap:`1.25rem`,layout:`inline`,showCard:!1,density:`comfortable`,pillFields:!0,buttonUppercase:!0},truebridge:{primary:`#2C4250`,cardBg:`#ffffff`,pageBg:`transparent`,text:`#1a1a1a`,muted:`#64748b`,border:`#cbd5e1`,radius:`10px`,buttonRadius:`8px`,font:`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,fieldHeight:`2.5rem`,gap:`1rem`,layout:`card`,showCard:!0,density:`comfortable`,pillFields:!1,buttonUppercase:!1}};function s(e,t){if(e===void 0)return;let n=e.replace(/<[^>]*>/g,``).replace(/\s+/g,` `).trim();if(n.length!==0)return n.length>t?n.slice(0,t):n}function c(e){let t=e?.trim().toLowerCase();return t&&t in o?t:`clean`}function l(e){let t=e?.trim().toLowerCase();if(t===`card`||t===`inline`)return t}function u(e){let t=e?.trim().toLowerCase();if(t===`comfortable`||t===`compact`)return t}function d(e){if(e===void 0)return;let t=e.trim().toLowerCase();if(t===`true`||t===`1`||t===`yes`)return!0;if(t===`false`||t===`0`||t===`no`)return!1}function f(e){let t=getComputedStyle(e),n={};for(let e of i){let r=t.getPropertyValue(e).trim();r&&(n[e]=r)}return n}function p(e){return{"--tb-iw-primary":e.primary,"--tb-iw-card-bg":e.cardBg,"--tb-iw-page-bg":e.pageBg,"--tb-iw-text":e.text,"--tb-iw-muted":e.muted,"--tb-iw-border":e.border,"--tb-iw-radius":e.radius,"--tb-iw-button-radius":e.buttonRadius,"--tb-iw-font":e.font,"--tb-iw-field-height":e.fieldHeight,"--tb-iw-gap":e.gap}}function m(e,t){let n={...e};return t.primaryColor&&(n.primary=t.primaryColor),t.backgroundColor&&(n.cardBg=t.backgroundColor,n.pageBg=t.backgroundColor),t.textColor&&(n.text=t.textColor),t.mutedTextColor&&(n.muted=t.mutedTextColor),t.borderColor&&(n.border=t.borderColor),t.borderRadius&&(n.radius=t.borderRadius),t.buttonRadius&&(n.buttonRadius=t.buttonRadius),n}function h(e,t){let n=e.dataset,r=c(n.theme);!n.theme&&t===`carolinatherapysolutions`&&(r=`carolina`),!n.theme&&t===`truebridge`&&(r=`truebridge`);let h={...o[r]};h=m(h,n);let g=l(n.layout);g&&(h.layout=g);let _=d(n.card);_===void 0?h.layout===`inline`&&(h.showCard=!1):h.showCard=_;let v=u(n.density);v&&(h.density=v);let y={...p(h)},b=f(e);for(let e of i)b[e]&&(y[e]=b[e]);let x=a[t],S=n.chrome===`host`,C=n.mode===`formOnly`,w=S||C||t===`truebridge`,T=w?``:s(n.heading,120)??x.heading,E=w?``:s(n.introText,280)??x.introText,D=s(n.buttonLabel,48)??(r===`carolina`?`Submit`:x.buttonLabel),O=s(n.successTitle,80)??x.successTitle,k=s(n.successMessage,400)??x.successMessage,A=[`tb-iw-root`,`tb-iw-root--layout-${h.layout}`,h.showCard?`tb-iw-root--has-card`:`tb-iw-root--no-card`,`tb-iw-root--density-${h.density}`,`tb-iw-root--preset-${r}`];return h.pillFields&&A.push(`tb-iw-root--pill-fields`),h.buttonUppercase&&A.push(`tb-iw-root--btn-uppercase`),(t===`truebridge`||C||n.embedFullWidth===`true`)&&A.push(`tb-iw-root--embed-full`),{preset:r,layout:h.layout,showCard:h.showCard,density:h.density,pillFields:h.pillFields,buttonUppercase:h.buttonUppercase,cssVars:y,heading:T,introText:E,buttonLabel:D,successTitle:O,successMessage:k,rootClasses:A}}function g(e,t){for(let[n,r]of Object.entries(t.cssVars))e.style.setProperty(n,r);e.className=t.rootClasses.join(` `)}var _=3e3,v=[{value:`Individual`,label:`Individual`},{value:`Couples`,label:`Couples`},{value:`Unsure/Other`,label:`Unsure/Other`}],y=[{value:`Raleigh Office`,label:`Raleigh Office`},{value:`Cary Office`,label:`Cary Office`},{value:`Virtual`,label:`Virtual`},{value:`First Available`,label:`First Available`}];function b(e){return e===`truebridge`||e===`carolinatherapysolutions`?e:null}function x(e){return e.replace(/\D/g,``).slice(0,10)}function S(e){let t=x(e);return t.length===0?``:t.length<=3?`(${t}`:t.length<=6?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}`}function C(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function w(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function T(e,t=!1){let n=w(`label`,t?`tb-iw-label tb-iw-required`:`tb-iw-label`);return n.textContent=e,n}function E(e){let i=b(e.dataset.practice??e.getAttribute(`data-practice`)??void 0);if(!i){e.textContent=`Intake form configuration error (missing data-practice).`;return}let a=i===`carolinatherapysolutions`,o=h(e,i),s=t(e),c=new Date().toISOString(),l=e.attachShadow({mode:`open`}),u=w(`style`);u.textContent=r,l.append(u);let d=w(`div`);g(d,o),l.append(d);let f=w(`div`,`tb-iw-shell`);d.append(f);let p=e.dataset.chrome??e.getAttribute(`data-chrome`);(e.dataset.mode??e.getAttribute(`data-mode`))!==`formOnly`&&p!==`host`&&(o.heading||o.introText)&&D(f,o);let m=w(`div`,`tb-iw-error`);m.hidden=!0,f.append(m);let E=w(`form`);E.setAttribute(`novalidate`,`novalidate`),f.append(E);let O=w(`div`,`tb-iw-honeypot`),k=w(`input`);k.type=`text`,k.name=`website`,k.tabIndex=-1,k.autocomplete=`off`,k.setAttribute(`aria-hidden`,`true`),O.append(k),E.append(O);let A=w(`div`,`tb-iw-row tb-iw-row--2`),j=w(`div`,`tb-iw-field`),M=w(`input`,`tb-iw-input`);M.name=`firstName`,M.required=!0,M.autocomplete=`given-name`,j.append(T(`First name`,!0),M),A.append(j);let N=w(`div`,`tb-iw-field`),P=w(`input`,`tb-iw-input`);P.name=`lastName`,P.required=!0,P.autocomplete=`family-name`,N.append(T(`Last name`,!0),P),A.append(N),E.append(A);let F=w(`div`,`tb-iw-field`),I=w(`input`,`tb-iw-input`);I.type=`email`,I.name=`email`,I.required=!0,I.autocomplete=`email`,F.append(T(`Email`,!0),I),E.append(F);let L=w(`div`,`tb-iw-field`),R=w(`input`,`tb-iw-input`);R.type=`tel`,R.name=`phone`,R.autocomplete=`tel`,R.placeholder=`(555) 555-5555`,L.append(T(`Phone`),R),E.append(L);let z=w(`div`,`tb-iw-field`);z.append(T(`Which services are you seeking?`));let B=w(`div`,`tb-iw-checkboxes`);for(let e of v){let t=w(`label`,`tb-iw-checkbox`),n=w(`input`);n.type=`checkbox`,n.name=`seeking`,n.value=e.value,t.append(n,document.createTextNode(e.label)),B.append(t)}z.append(B),E.append(z);let V;if(a){let e=w(`div`,`tb-iw-field`);V=w(`select`,`tb-iw-select`),V.name=`location`,V.required=!0;let t=w(`option`);t.value=``,t.textContent=`Select location preference`,V.append(t);for(let e of y){let t=w(`option`);t.value=e.value,t.textContent=e.label,V.append(t)}e.append(T(`Location preference`,!0),V),E.append(e)}let H=w(`div`,`tb-iw-field`),U=w(`textarea`,`tb-iw-textarea`);U.name=`message`,U.required=!0,U.maxLength=2e3,H.append(T(`Message`,!0),U),E.append(H);let W=w(`div`,`tb-iw-actions`),G=w(`button`,`tb-iw-btn`);G.type=`submit`,G.textContent=o.buttonLabel,W.append(G),E.append(W);let K=o.buttonLabel;R.addEventListener(`input`,()=>{R.value=S(R.value)});function q(e){m.textContent=e,m.hidden=!1}function J(){m.hidden=!0}function Y(){let e={};M.value.trim()||(e.firstName=`First name is required.`),P.value.trim()||(e.lastName=`Last name is required.`);let t=I.value.trim();t?C(t)||(e.email=`Enter a valid email address.`):e.email=`Email is required.`;let n=R.value.trim();return n&&x(n).length!==10&&(e.phone=`Enter a 10-digit phone number.`),a&&V&&!V.value&&(e.location=`Select a location preference.`),U.value.trim()||(e.message=`Message is required.`),e}function X(e){E.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());for(let[t,n]of Object.entries(e)){if(!n)continue;let e=E.querySelector(`[name="${t}"]`)?.closest(`.tb-iw-field`);if(e){let t=w(`div`,`tb-iw-field-error`);t.textContent=n,e.append(t)}}}function Z(){f.replaceChildren();let e=w(`div`,`tb-iw-success`),t=w(`h3`);t.textContent=o.successTitle;let n=w(`p`);n.textContent=o.successMessage,e.append(t,n),f.append(e)}E.addEventListener(`submit`,async e=>{e.preventDefault(),J(),E.querySelectorAll(`.tb-iw-field-error`).forEach(e=>e.remove());let t=Y();if(Object.keys(t).length>0){X(t),q(`Please fix the highlighted fields.`);return}if(Date.now()-Date.parse(c)<_){q(`Please wait a moment and try again.`);return}let r=[...E.querySelectorAll(`input[name="seeking"]:checked`)].map(e=>e.value),o={practiceId:i,firstName:M.value.trim(),lastName:P.value.trim(),email:I.value.trim(),phone:R.value.trim(),message:U.value.trim(),formStartedAt:c,website:k.value};r.length>0&&(o.seeking=r),a&&V?.value&&(o.location=V.value),G.disabled=!0,G.textContent=`Sending…`;let l=await n(s,o);if(l.ok){Z();return}G.disabled=!1,G.textContent=K,q(l.message)})}function D(e,t){if(t.heading){let n=w(`h2`,`tb-iw-title`);n.textContent=t.heading,e.append(n)}if(t.introText){let n=w(`p`,`tb-iw-subtitle`);n.textContent=t.introText,e.append(n)}}var O=`#tb-intake-widget, [data-tb-intake-widget]`;function k(){let e=document.querySelectorAll(O);for(let t of e)t.dataset.tbWidgetMounted!==`true`&&(t.dataset.tbWidgetMounted=`true`,E(t))}return document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,k):k(),e.mountIntakeWidget=E,e})({});