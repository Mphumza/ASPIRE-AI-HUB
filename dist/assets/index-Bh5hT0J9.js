var e;import{r as t,_ as n,C as r,a as s,E as i,F as o,o as a,L as l,g as c,b as u,d as h,i as d,c as f,e as p,v as m,f as g,h as y,j as v,k as w,S as b,l as x,m as E,n as T,p as _,q as I,s as S,t as C}from"./firebase-B_g9aSLi.js";import{E as k,M as A}from"./vendor-BvM1mWxV.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const N="@firebase/installations",D="0.6.9",R=1e4,P=`w:${D}`,L="FIS_v2",M=36e5,O=new i("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function F(e){return e instanceof o&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function U(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function j(e,t){const n=(await t.json()).error;return O.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function q({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function B(e,{refreshToken:t}){const n=q(e);return n.append("Authorization",function(e){return`${L} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function $(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=/^[cdef][\w-]{21}$/;function G(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return K.test(t)?t:""}catch(e){return""}}function H(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=new Map;function Y(e,t){const n=H(e);W(n,t),function(e,t){const n=function(){!X&&"BroadcastChannel"in self&&(X=new BroadcastChannel("[Firebase] FID Change"),X.onmessage=e=>{W(e.data.key,e.data.fid)});return X}();n&&n.postMessage({key:e,fid:t});0===Q.size&&X&&(X.close(),X=null)}(n,t)}function W(e,t){const n=Q.get(e);if(n)for(const r of n)r(t)}let X=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-installations-store";let Z=null;function ee(){return Z||(Z=a("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(J)}})),Z}async function te(e,t){const n=H(e),r=(await ee()).transaction(J,"readwrite"),s=r.objectStore(J),i=await s.get(n);return await s.put(t,n),await r.done,i&&i.fid===t.fid||Y(e,t.fid),t}async function ne(e){const t=H(e),n=(await ee()).transaction(J,"readwrite");await n.objectStore(J).delete(t),await n.done}async function re(e,t){const n=H(e),r=(await ee()).transaction(J,"readwrite"),s=r.objectStore(J),i=await s.get(n),o=t(i);return void 0===o?await s.delete(n):await s.put(o,n),await r.done,!o||i&&i.fid===o.fid||Y(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e){let t;const n=await re(e.appConfig,n=>{const r=function(e){const t=e||{fid:G(),registrationStatus:0};return ae(t)}(n),s=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(O.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=V(e),s=q(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&s.append("x-firebase-client",e)}const o={fid:n,authVersion:L,appId:e.appId,sdkVersion:P},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await $(()=>fetch(r,a));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:U(e.authToken)}}throw await j("Create Installation",l)}(e,t);return te(e.appConfig,n)}catch(n){throw F(n)&&409===n.customData.serverCode?await ne(e.appConfig):await te(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ie(e)}:{installationEntry:t}}(e,r);return t=s.registrationPromise,s.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ie(e){let t=await oe(e.appConfig);for(;1===t.registrationStatus;)await z(100),t=await oe(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await se(e);return n||t}return t}function oe(e){return re(e,e=>{if(!e)throw O.create("installation-not-found");return ae(e)})}function ae(e){return 1===(t=e).registrationStatus&&t.registrationTime+R<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function le({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${V(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),s=B(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&s.append("x-firebase-client",e)}const o={installation:{sdkVersion:P,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await $(()=>fetch(r,a));if(l.ok){return U(await l.json())}throw await j("Generate Auth Token",l)}async function ce(e,t=!1){let n;const r=await re(e.appConfig,r=>{if(!he(r))throw O.create("not-registered");const s=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+M}(e)}(s))return r;if(1===s.requestStatus)return n=async function(e,t){let n=await ue(e.appConfig);for(;1===n.authToken.requestStatus;)await z(100),n=await ue(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ce(e,t):r}(e,t),r;{if(!navigator.onLine)throw O.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await le(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await te(e.appConfig,r),n}catch(n){if(!F(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await te(e.appConfig,n)}else await ne(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function ue(e){return re(e,e=>{if(!he(e))throw O.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+R<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function he(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function de(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await se(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await ce(n,t)).token}function fe(e){return O.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="installations",me=e=>{const t=e.getProvider("app").getImmediate(),n=s(t,pe).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await se(t);return r?r.catch(console.error):ce(t).catch(console.error),n.fid}(n),getToken:e=>de(n,e)}};n(new r(pe,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw fe("App Configuration");if(!e.name)throw fe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw fe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:s(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),n(new r("installations-internal",me,"PRIVATE")),t(N,D),t(N,D,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge="analytics",ye="https://www.googletagmanager.com/gtag/js",ve=new l("@firebase/analytics"),we=new i("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){if(!e.startsWith(ye)){const t=we.create("invalid-gtag-resource",{gtagURL:e});return ve.warn(t.message),""}return e}function xe(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function Ee(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:be}),r=document.createElement("script"),s=`${ye}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Te(e,t,n,r){return async function(s,...i){try{if("event"===s){const[r,s]=i;await async function(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let e=s.send_to;Array.isArray(e)||(e=[e]);const r=await xe(n);for(const n of e){const e=r.find(e=>e.measurementId===n),s=e&&t[e.appId];if(!s){i=[];break}i.push(s)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ve.error(i)}}(e,t,n,r,s)}else if("config"===s){const[s,o]=i;await async function(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const e=(await xe(n)).find(e=>e.measurementId===s);e&&await t[e.appId]}}catch(a){ve.error(a)}e("config",s,i)}(e,t,n,r,s,o)}else if("consent"===s){const[t,n]=i;e("consent",t,n)}else if("get"===s){const[t,n,r]=i;e("get",t,n,r)}else if("set"===s){const[t]=i;e("set",t)}else e(s,...i)}catch(o){ve.error(o)}}}const _e=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Ie(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Se(e,t=_e,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw we.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw we.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ke;return setTimeout(async()=>{a.abort()},6e4),Ce({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Ce(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=_e){var i;const{appId:a,measurementId:l}=e;try{await function(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(we.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(c){if(l)return ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Ie(r)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(i,s);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw we.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return s.deleteThrottleMetadata(a),t}catch(c){const t=c;if(!function(e){if(!(e instanceof o&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(s.deleteThrottleMetadata(a),l)return ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:a,measurementId:l};throw c}const u=503===Number(null===(i=null==t?void 0:t.customData)||void 0===i?void 0:i.httpStatus)?f(n,s.intervalMillis,30):f(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(a,h),ve.debug(`Calling attemptFetch again in ${u} millis`),Ce(e,h,r,s)}}class ke{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ae(e,t,n,r,s,i,o){var a;const l=Se(e);l.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>ve.error(e)),t.push(l);const c=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!p())return ve.warn(we.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await m()}catch(e){return ve.warn(we.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[u,h]=await Promise.all([l,c]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ye)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i)||Ee(i,u.measurementId),s("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),s("config",u.measurementId,d),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.app=e}_delete(){return delete De[this.app.options.appId],Promise.resolve()}}let De={},Re=[];const Pe={};let Le,Me,Oe="dataLayer",Fe=!1;function Ve(e,t,n){!function(){const e=[];if(d()&&e.push("This is a browser extension environment."),g()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=we.create("invalid-analytics-context",{errorInfo:t});ve.warn(n.message)}}();const r=e.options.appId;if(!r)throw we.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw we.create("no-api-key");ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=De[r])throw we.create("already-exists",{id:r});if(!Fe){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Oe);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,s){let i=function(...e){window[r].push(arguments)};return window[s]&&"function"==typeof window[s]&&(i=window[s]),window[s]=Te(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}(De,Re,Pe,Oe,"gtag");Me=e,Le=t,Fe=!0}De[r]=Ae(e,Re,Pe,t,Le,Oe,n);return new Ne(e)}function Ue(e,t,n,r){e=c(e),async function(e,t,n,r,s){if(s&&s.global)e("event",n,r);else{const s=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:s}))}}(Me,De[e.app.options.appId],t,n,r).catch(e=>ve.error(e))}const je="@firebase/analytics",qe="0.10.8";n(new r(ge,(e,{options:t})=>Ve(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),n(new r("analytics-internal",function(e){try{const t=e.getProvider(ge).getImmediate();return{logEvent:(e,n,r)=>Ue(t,e,n,r)}}catch(t){throw we.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),t(je,qe),t(je,qe,"esm2017");var Be,$e,ze="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=n+(o<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(t=n+((o=t+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(t^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,s=this.B,i=this.h,o=0;o<t;){if(0==i)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(s[i++]=e.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<t;)if(s[i++]=e[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var s={};function i(e){return-128<=e&&128>e?function(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=4294967296;return new r(t,0)}var a=i(0),l=i(1),c=i(16777216);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(a,a);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var c=i.add(r);0>=c.l(e)&&(s=s.add(n),i=c),r=v(r,1),n=v(n,1)}return t=f(e,s.j(t)),new m(s,t)}for(s=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(i=o(n)).j(t);h(c)||0<c.l(e);)c=(i=o(n-=r)).j(t);u(i)&&(i=l),s=s.add(i),e=f(e,c)}return new m(s,e)}function y(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.i(s)<<1|e.i(s-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],o=0;o<s;o++)i[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(i,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var s=g(n,t).g,i=((0<(n=f(n,s.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var o=s+(65535&this.i(i))+(65535&e.i(i)),a=(o>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);s=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(c)&&0>e.l(c))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var l=this.i(s)>>>16,f=65535&this.i(s),m=e.i(i)>>>16,g=65535&e.i(i);n[2*s+2*i]+=f*g,p(n,2*s+2*i),n[2*s+2*i+1]+=l*g,p(n,2*s+2*i+1),n[2*s+2*i+1]+=f*m,p(n,2*s+2*i+1),n[2*s+2*i+2]+=l*m,p(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)&e.i(s);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)|e.i(s);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)^e.i(s);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,$e=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),s=a,i=0;i<t.length;i+=8){var l=Math.min(8,t.length-i),c=parseInt(t.substring(i,i+l),n);8>l?(l=o(Math.pow(n,l)),s=s.j(l).add(o(c))):s=(s=s.j(r)).add(o(c))}return s},Be=r}).apply(void 0!==ze?ze:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Ke,Ge,He,Qe,Ye,We,Xe,Je,Ze="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Ze&&Ze];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var s=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in s))break e;s=s[o]}(r=r(i=s[e=e[e.length-1]]))!=i&&null!=r&&t(s,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,s={next:function(){if(!r&&n<e.length){var s=n++;return{value:t(s,e[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}(this,function(e,t){return t})}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},s=this||self;function i(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(i(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=s.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function T(e){s.setTimeout(()=>{throw e},0)}function _(){var e=A;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var I=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new S,e=>e.reset());class S{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,k=!1,A=new class{constructor(){this.h=this.g=null}add(e,t){const n=I.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},N=()=>{const e=s.Promise.resolve(void 0);C=()=>{e.then(D)}};var D=()=>{for(var e;e=_();){try{e.h.call(e.g)}catch(n){T(n)}var t=I;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}k=!1};function R(){this.s=this.s,this.C=this.C}function P(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},P.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function M(e,t){if(P.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:O[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&M.aa.h.call(this)}}h(M,P);var O={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++V,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function q(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}q.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=$(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new U(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var z="closure_lm_"+(1e6*Math.random()|0),K={};function G(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)G(e,t[i],n,r,s);return null}return n=Z(n),e&&e[F]?e.K(t,n,!!o(r)&&!!r.capture,s):function(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var a=o(s)?!!s.capture:!!s,l=X(e);if(l||(e[z]=l=new q(e)),n=l.add(t,n,r,a,i),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=W;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(s=a),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Y(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,s)}function H(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)H(e,t[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[F]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(i=e.g[t],n,r,s))&&(j(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,s)),(n=-1<e?t[e]:null)&&Q(n))}function Q(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[F])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Y(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(B(n,e),0==n.h&&(n.src=null,t[z]=null)):j(e)}}}function Y(e){return e in K?K[e]:K[e]="on"+e}function W(e,t){if(e.da)e=!0;else{t=new M(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&Q(e),e=n.call(r,t)}return e}function X(e){return(e=e[z])instanceof q?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){R.call(this),this.i=new q(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new P(t,e);else if(t instanceof P)t.target=t.target||e;else{var s=t;x(t=new P(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ne(o,r,!0,t)&&s}if(s=ne(o=t.g=e,r,!0,t)&&s,s=ne(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=ne(o=t.g=n[i],r,!1,t)&&s}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&B(e.i,o),s=!1!==a.call(l,r)&&s}}return s&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:s.setTimeout(e,t||0)}function se(e){e.g=re(()=>{e.g=null,e.i&&(e.i=!1,se(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,R),ee.prototype[F]=!0,ee.prototype.removeEventListener=function(e,t,n,r){H(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)j(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class ie extends R{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:se(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){R.call(this),this.h=e,this.g={}}h(oe,R);var ae=[];function le(e){v(e.g,function(e,t){this.g.hasOwnProperty(t)&&Q(e)},e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),le(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=s.JSON.stringify,ue=s.JSON.parse,he=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){P.call(this,"d")}function ye(){P.call(this,"c")}h(ge,P),h(ye,P);var ve={},we=null;function be(){return we=we||new ee}function xe(e){P.call(this,ve.La,e)}function Ee(e){const t=be();te(t,new xe(t))}function Te(e,t){P.call(this,ve.STAT_EVENT,e),this.stat=t}function _e(e){const t=be();te(t,new Te(t,e))}function Ie(e,t){P.call(this,ve.Ma,e),this.size=t}function Se(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){e()},t)}function Ce(){this.g=!0}function ke(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ce(n)}catch(a){return t}}(e,n)+(r?" "+r:"")})}ve.La="serverreachability",h(xe,P),ve.STAT_EVENT="statevent",h(Te,P),ve.Ma="timingevent",h(Ie,P),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Ae,Ne={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},De={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Re(){}function Pe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}h(Re,de),Re.prototype.g=function(){return new XMLHttpRequest},Re.prototype.i=function(){return{}},Ae=new Re;var Me={},Oe={};function Fe(e,t,n){e.L=1,e.v=vt(ft(t)),e.m=n,e.P=!0,Ve(e,null)}function Ve(e,t){e.F=Date.now(),qe(e),e.A=ft(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Dt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Le,e.g=wn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new ie(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var s="readystatechange";Array.isArray(s)||(s&&(ae[0]=s.toString()),s=ae);for(var i=0;i<s.length;i++){var o=G(n,s[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ue(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function je(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Oe:(n=Number(t.substring(n,r)),isNaN(n)?Me:(r+=1)+n>t.length?Oe:(t=t.slice(r,r+n),e.C=r+n,t))}function qe(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Se(c(e.ba,e),t)}function $e(e){e.B&&(s.clearTimeout(e.B),e.B=null)}function ze(e){0==e.j.G||e.J||pn(e.j,e)}function et(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function tt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||ot(n.h,e)))if(!e.K&&ot(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fn(n),nn(n)}un(n),_e(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Se(c(n.Za,n),6e3));if(1>=it(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else gn(n,11)}else if((e.K||n.g==e)&&fn(n),!p(t))for(s=n.Da.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const t=c[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const s=c[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(at(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,yt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=vn(r,r.J?r.ia:null,r.W),o.K){lt(r.h,o);var a=o,l=r.L;l&&(a.I=l),a.B&&($e(a),qe(a)),r.g=o}else cn(r);0<n.i.length&&sn(n)}else"stop"!=c[0]&&"close"!=c[0]||gn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?gn(n,7):tn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Ee()}catch(u){}}Pe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Xt(e)?t.j():this.Y(e)},Pe.prototype.Y=function(e){try{if(e==this.g)e:{const d=Xt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Jt(this.g)))){this.J||4!=d||7==t||Ee(),$e(this);var n=this.g.Z();this.X=n;t:if(Ue(this)){var r=Jt(this.g);e="";var i=r.length,o=4==Xt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){et(this),ze(this);var a="";break t}this.h.i=new s.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o})}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var u=l;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,_e(12),et(this),ze(this);break e}ke(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=je(this,a),e==Oe){4==d&&(this.s=4,_e(14),n=!1),ke(this.i,this.l,null,"[Incomplete Response]");break}if(e==Me){this.s=4,_e(15),ke(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}ke(this.i,this.l,e,null),tt(this,e)}if(Ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,_e(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),hn(h),h.M=!0,_e(11))}}else ke(this.i,this.l,a,"[Invalid Chunked Response]"),et(this),ze(this)}else ke(this.i,this.l,a,null),tt(this,a);4==d&&et(this),this.o&&!this.J&&(4==d?pn(this.j,this):(this.o=!1,qe(this)))}else(function(e){const t={};e=(e.g&&2<=Xt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,_e(12)):(this.s=0,_e(13)),et(this),ze(this)}}}catch(d){}},Pe.prototype.cancel=function(){this.J=!0,et(this)},Pe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(Ee(),_e(17)),et(this),this.s=2,ze(this)):Be(this,this.S-e)};var nt=class{constructor(e,t){this.g=e,this.map=t}};function rt(e){this.l=e||10,s.PerformanceNavigationTiming?e=0<(e=s.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function st(e){return!!e.h||!!e.g&&e.g.size>=e.j}function it(e){return e.h?1:e.g?e.g.size:0}function ot(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function at(e,t){e.g?e.g.add(t):e.h=t}function lt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ct(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(i(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(i(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(i(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),s=r.length,o=0;o<s;o++)t.call(void 0,r[o],n&&n[o],e)}rt.prototype.cancel=function(){if(this.i=ct(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var ht=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof dt){this.h=e.h,pt(this,e.j),this.o=e.o,this.g=e.g,mt(this,e.s),this.l=e.l;var t=e.i,n=new Ct;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),gt(this,n),this.m=e.m}else e&&(t=String(e).match(ht))?(this.h=!1,pt(this,t[1]||"",!0),this.o=wt(t[2]||""),this.g=wt(t[3]||"",!0),mt(this,t[4]),this.l=wt(t[5]||"",!0),gt(this,t[6]||"",!0),this.m=wt(t[7]||"")):(this.h=!1,this.i=new Ct(null,this.h))}function ft(e){return new dt(e)}function pt(e,t,n){e.j=n?wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function gt(e,t,n){t instanceof Ct?(e.i=t,function(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(At(this,t),Dt(this,n,e))},e)),e.j=t}(e.i,e.h)):(n||(t=bt(t,It)),e.i=new Ct(t,e.h))}function yt(e,t,n){e.i.set(t,n)}function vt(e){return yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,xt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function xt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}dt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bt(t,Et,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(bt(t,Et,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(bt(n,"/"==n.charAt(0)?_t:Tt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",bt(n,St)),e.join("")};var Et=/[#\/\?@]/g,Tt=/[#\?:]/g,_t=/[#\?]/g,It=/[#\?@]/g,St=/#/g;function Ct(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function At(e,t){kt(e),t=Rt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Nt(e,t){return kt(e),t=Rt(e,t),e.g.has(t)}function Dt(e,t,n){At(e,t),0<n.length&&(e.i=null,e.g.set(Rt(e,t),d(n)),e.h+=n.length)}function Rt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Pt(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function Lt(){this.g=new he}function Mt(e,t,n){const r=n||"";try{ut(e,function(e,n){let s=e;o(e)&&(s=ce(e)),t.push(r+n+"="+encodeURIComponent(s))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Ot(e){this.l=e.Ub||null,this.j=e.eb||!1}function Ft(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Vt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Ut(e){e.readyState=4,e.l=null,e.j=null,e.v=null,jt(e)}function jt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function qt(e){let t="";return v(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Bt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):yt(e,t,n))}function $t(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=Ct.prototype).add=function(e,t){kt(this),this.i=null,e=Rt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){kt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let e=0;e<s.length;e++)n.push(t[r])}return n},e.V=function(e){kt(this);let t=[];if("string"==typeof e)Nt(this,e)&&(t=t.concat(this.g.get(Rt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return kt(this),this.i=null,Nt(this,e=Rt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")},h(Ot,de),Ot.prototype.g=function(){return new Ft(this.l,this.j)},Ot.prototype.i=function(e){return function(){return e}}({}),h(Ft,ee),(e=Ft.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,jt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||s).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ut(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,jt(this)),this.g&&(this.readyState=3,jt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ut(this):jt(this),3==this.readyState&&Vt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Ut(this))},e.Qa=function(e){this.g&&(this.response=e,Ut(this))},e.ga=function(){this.g&&Ut(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ft.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h($t,ee);var zt=/^https?$/i,Kt=["POST","PUT"];function Gt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ht(e),Yt(e)}function Ht(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Qt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Xt(e)||2!=e.Z()))if(e.u&&4==Xt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==Xt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===r){var o=String(e.D).match(ht)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),i=!zt.test(o?o.toLowerCase():"")}n=i}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<Xt(e)?e.g.statusText:""}catch(l){a=""}e.l=a+" ["+e.Z()+"]",Ht(e)}}finally{Yt(e)}}}function Yt(e,t){if(e.g){Wt(e);const r=e.g,s=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Wt(e){e.I&&(s.clearTimeout(e.I),e.I=null)}function Xt(e){return e.g?e.g.readyState:0}function Jt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function en(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zt("baseRetryDelayMs",5e3,e),this.cb=Zt("retryDelaySeedMs",1e4,e),this.Wa=Zt("forwardChannelMaxRetries",2,e),this.wa=Zt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new rt(e&&e.concurrentRequestLimit),this.Da=new Lt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tn(e){if(rn(e),3==e.G){var t=e.U++,n=ft(e.I);if(yt(n,"SID",e.K),yt(n,"RID",t),yt(n,"TYPE","terminate"),an(e,n),(t=new Pe(e,e.j,t)).L=2,t.v=vt(ft(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=t.v,n=!0),n||(t.g=wn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),qe(t)}yn(e)}function nn(e){e.g&&(hn(e),e.g.cancel(),e.g=null)}function rn(e){nn(e),e.u&&(s.clearTimeout(e.u),e.u=null),fn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&s.clearTimeout(e.s),e.s=null)}function sn(e){if(!st(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||N(),k||(C(),k=!0),A.add(t,e),e.B=0}}function on(e,t){var n;n=t?t.l:e.U++;const r=ft(e.I);yt(r,"SID",e.K),yt(r,"RID",n),yt(r,"AID",e.T),an(e,r),e.m&&e.o&&Bt(r,e.m,e.o),n=new Pe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=ln(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),at(e.h,n),Fe(n,r,t)}function an(e,t){e.H&&v(e.H,function(e,n){yt(t,n,e)}),e.l&&ut({},function(e,n){yt(t,n,e)})}function ln(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const l=s[a].map;if(n-=t,0>n)t=Math.max(0,s[a].g-100),o=!1;else try{Mt(l,e,"req"+n+"_")}catch(i){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function cn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||N(),k||(C(),k=!0),A.add(t,e),e.v=0}}function un(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Se(c(e.Fa,e),mn(e,e.v)),e.v++,!0)}function hn(e){null!=e.A&&(s.clearTimeout(e.A),e.A=null)}function dn(e){e.g=new Pe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=ft(e.qa);yt(t,"RID","rpc"),yt(t,"SID",e.K),yt(t,"AID",e.T),yt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&yt(t,"TO",e.ja),yt(t,"TYPE","xmlhttp"),an(e,t),e.m&&e.o&&Bt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=vt(ft(t)),n.m=null,n.P=!0,Ve(n,e)}function fn(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function pn(e,t){var n=null;if(e.g==t){fn(e),hn(e),e.g=null;var r=2}else{if(!ot(e.h,t))return;n=t.D,lt(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var s=e.B;te(r=be(),new Ie(r,n)),sn(e)}else cn(e);else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&function(e,t){return!(it(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Se(c(e.Ga,e,t),mn(e,e.B)),e.B++,0)))}(e,t)||2==r&&un(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:gn(e,5);break;case 4:gn(e,10);break;case 3:gn(e,6);break;default:gn(e,2)}}function mn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function gn(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;const t=!r;r=new dt(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||pt(r,"https"),vt(r),t?function(e,t){const n=new Ce;if(s.Image){const r=new Image;r.onload=u(Pt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(Pt,n,"TestLoadImage: error",!1,t,r),r.onabort=u(Pt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(Pt,n,"TestLoadImage: timeout",!1,t,r),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout(()=>{n.abort(),Pt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Pt(0,0,!0,t):Pt(0,0,!1,t)}).catch(()=>{clearTimeout(r),Pt(0,0,!1,t)})}(r.toString(),n)}else _e(2);e.G=0,e.l&&e.l.sa(t),yn(e),rn(e)}function yn(e){if(e.G=0,e.ka=[],e.l){const t=ct(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function vn(e,t,n){var r=n instanceof dt?ft(n):new dt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),mt(r,r.s);else{var i=s.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new dt(null);r&&pt(o,r),t&&(o.g=t),i&&mt(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&yt(r,n,t),yt(r,"VER",e.la),an(e,r),r}function wn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new $t(new Ot({eb:n})):new $t(e.pa)).Ha(e.J),t}function bn(){}function xn(){}function En(e,t){ee.call(this),this.g=new en(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new In(this)}function Tn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function _n(){ye.call(this),this.status=1}function In(e){this.g=e}(e=$t.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ae.g(),this.v=this.o?fe(this.o):fe(Ae),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Gt(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=s.FormData&&e instanceof s.FormData,!(0<=Array.prototype.indexOf.call(Kt,t,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Gt(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Yt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yt(this,!0)),$t.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Qt(this):this.bb())},e.bb=function(){Qt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ue(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=en.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){_e(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=vn(this,null,this.W),sn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Pe(this,this.j,e);let i=this.o;if(this.S&&(i?(i=w(i),x(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ln(this,s,t),yt(n=ft(this.I),"RID",e),yt(n,"CVER",22),this.D&&yt(n,"X-HTTP-Session-Id",this.D),an(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(qt(i)))+"&"+t:this.m&&Bt(n,this.m,i)),at(this.h,s),this.Ua&&yt(n,"TYPE","init"),this.P?(yt(n,"$req",t),yt(n,"SID","null"),s.T=!0,Fe(s,n,null)):Fe(s,n,t),this.G=2}}else 3==this.G&&(e?on(this,e):0==this.i.length||st(this.h)||on(this))},e.Fa=function(){if(this.u=null,dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Se(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_e(10),nn(this),dn(this))},e.Za=function(){null!=this.C&&(this.C=null,nn(this),un(this),_e(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=bn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},xn.prototype.g=function(e,t){return new En(e,t)},h(En,ee),En.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},En.prototype.close=function(){tn(this.g)},En.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ce(e),e=n);t.i.push(new nt(t.Ya++,e)),3==t.G&&sn(t)},En.prototype.N=function(){this.g.l=null,delete this.j,tn(this.g),delete this.g,En.aa.N.call(this)},h(Tn,ge),h(_n,ye),h(In,bn),In.prototype.ua=function(){te(this.g,"a")},In.prototype.ta=function(e){te(this.g,new Tn(e))},In.prototype.sa=function(e){te(this.g,new _n)},In.prototype.ra=function(){te(this.g,"b")},xn.prototype.createWebChannel=xn.prototype.g,En.prototype.send=En.prototype.o,En.prototype.open=En.prototype.m,En.prototype.close=En.prototype.close,Je=function(){return new xn},Xe=function(){return be()},We=ve,Ye={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ne.NO_ERROR=0,Ne.TIMEOUT=8,Ne.HTTP_ERROR=6,Qe=Ne,De.COMPLETE="complete",He=De,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ge=pe,$t.prototype.listenOnce=$t.prototype.L,$t.prototype.getLastError=$t.prototype.Ka,$t.prototype.getLastErrorCode=$t.prototype.Ba,$t.prototype.getStatus=$t.prototype.Z,$t.prototype.getResponseJson=$t.prototype.Oa,$t.prototype.getResponseText=$t.prototype.oa,$t.prototype.send=$t.prototype.ea,$t.prototype.setWithCredentials=$t.prototype.Ha,Ke=$t}).apply(void 0!==Ze?Ze:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const et="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let nt="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new l("@firebase/firestore");function st(){return rt.logLevel}function it(e,...t){if(rt.logLevel<=v.DEBUG){const n=t.map(lt);rt.debug(`Firestore (${nt}): ${e}`,...n)}}function ot(e,...t){if(rt.logLevel<=v.ERROR){const n=t.map(lt);rt.error(`Firestore (${nt}): ${e}`,...n)}}function at(e,...t){if(rt.logLevel<=v.WARN){const n=t.map(lt);rt.warn(`Firestore (${nt}): ${e}`,...n)}}function lt(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e="Unexpected state"){const t=`FIRESTORE (${nt}) INTERNAL ASSERTION FAILED: `+e;throw ot(t),new Error(t)}function ut(e,t){e||ct()}function ht(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends o{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class yt{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vt{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ut(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pt,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pt)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ut("string"==typeof t.accessToken),new mt(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ut(null===e||"string"==typeof e),new tt(e)}}class wt{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bt{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new wt(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xt{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Et{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ut(void 0===this.o);const n=e=>{null!=e.error&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,it("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(ut("string"==typeof e.token),this.R=e.token,new xt(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=Tt(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%62))}return n}}function It(e,t){return e<t?-1:e>t?1:0}function St(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ft(dt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ft(dt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ft(dt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ft(dt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ct(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?It(this.nanoseconds,e.nanoseconds):It(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new kt(e)}static min(){return new kt(new Ct(0,0))}static max(){return new kt(new Ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,n){void 0===t?t=0:t>e.length&&ct(),void 0===n?n=e.length-t:n>e.length-t&&ct(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===At.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof At?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Nt extends At{construct(e,t,n){return new Nt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ft(dt.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Nt(t)}static emptyPath(){return new Nt([])}}const Dt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends At{construct(e,t,n){return new Rt(e,t,n)}static isValidIdentifier(e){return Dt.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new ft(dt.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ft(dt.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ft(dt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new ft(dt.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.path=e}static fromPath(e){return new Pt(Nt.fromString(e))}static fromName(e){return new Pt(Nt.fromString(e).popFirst(5))}static empty(){return new Pt(Nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Nt.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Pt(new Nt(e.slice()))}}function Lt(e){return new Mt(e.readTime,e.key,-1)}class Mt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Mt(kt.min(),Pt.empty(),-1)}static max(){return new Mt(kt.max(),Pt.empty(),-1)}}function Ot(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Pt.comparator(e.documentKey,t.documentKey),0!==n?n:It(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Ft{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e){if(e.code!==dt.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;it("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ct(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ut((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ut?t:Ut.resolve(t)}catch(t){return Ut.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ut.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ut.reject(t)}static resolve(e){return new Ut((t,n)=>{t(e)})}static reject(e){return new Ut((t,n)=>{n(e)})}static waitFor(e){return new Ut((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=Ut.resolve(!1);for(const n of e)t=t.next(e=>e?Ut.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ut((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next(e=>{i[l]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new Ut((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function jt(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Bt(e){return null==e}function $t(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Kt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.oe=-1;class Ht{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new Ht(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new Ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qt(this.root,e,this.comparator,!0)}}class Qt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Yt.RED,this.left=null!=r?r:Yt.EMPTY,this.right=null!=s?s:Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Yt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Yt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ct();if(this.right.isRed())throw ct();const e=this.left.check();if(e!==this.right.check())throw ct();return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1,Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw ct()}get value(){throw ct()}get color(){throw ct()}get left(){throw ct()}get right(){throw ct()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(e){this.comparator=e,this.data=new Ht(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xt(this.data.getIterator())}getIteratorFrom(e){return new Xt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Wt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class Xt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Jt([])}unionWith(e){let t=new Wt(Rt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Jt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return St(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Zt("Invalid base64 string: "+t):t}}(e);return new en(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new en(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return It(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const tn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(e){if(ut(!!e),"string"==typeof e){let t=0;const n=tn.exec(e);if(ut(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rn(e.seconds),nanos:rn(e.nanos)}}function rn(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function sn(e){return"string"==typeof e?en.fromBase64String(e):en.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function an(e){const t=e.mapValue.fields.__previous_value__;return on(t)?an(t):t}function ln(e){const t=nn(e.mapValue.fields.__local_write_time__.timestampValue);return new Ct(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,r,s,i,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class un{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new un("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof un&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={fields:{__type__:{stringValue:"__max__"}}};function dn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?on(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:ct()}function fn(e,t){if(e===t)return!0;const n=dn(e);if(n!==dn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ln(e).isEqual(ln(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=nn(e.timestampValue),r=nn(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,sn(e.bytesValue).isEqual(sn(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return rn(e.geoPointValue.latitude)===rn(t.geoPointValue.latitude)&&rn(e.geoPointValue.longitude)===rn(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rn(e.integerValue)===rn(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=rn(e.doubleValue),r=rn(t.doubleValue);return n===r?$t(n)===$t(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return St(e.arrayValue.values||[],t.arrayValue.values||[],fn);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(zt(n)!==zt(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!fn(n[s],r[s])))return!1;return!0}(e,t);default:return ct()}var r}function pn(e,t){return void 0!==(e.values||[]).find(e=>fn(e,t))}function mn(e,t){if(e===t)return 0;const n=dn(e),r=dn(t);if(n!==r)return It(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return It(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=rn(e.integerValue||e.doubleValue),r=rn(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return gn(e.timestampValue,t.timestampValue);case 4:return gn(ln(e),ln(t));case 5:return It(e.stringValue,t.stringValue);case 6:return function(e,t){const n=sn(e),r=sn(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=It(n[s],r[s]);if(0!==e)return e}return It(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=It(rn(e.latitude),rn(t.latitude));return 0!==n?n:It(rn(e.longitude),rn(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return yn(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,s,i;const o=e.fields||{},a=t.fields||{},l=null===(n=o.value)||void 0===n?void 0:n.arrayValue,c=null===(r=a.value)||void 0===r?void 0:r.arrayValue,u=It((null===(s=null==l?void 0:l.values)||void 0===s?void 0:s.length)||0,(null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0);return 0!==u?u:yn(l,c)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===hn&&t===hn)return 0;if(e===hn)return 1;if(t===hn)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=It(r[o],i[o]);if(0!==e)return e;const t=mn(n[r[o]],s[i[o]]);if(0!==t)return t}return It(r.length,i.length)}(e.mapValue,t.mapValue);default:throw ct()}}function gn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return It(e,t);const n=nn(e),r=nn(t),s=It(n.seconds,r.seconds);return 0!==s?s:It(n.nanos,r.nanos)}function yn(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=mn(n[s],r[s]);if(e)return e}return It(n.length,r.length)}function vn(e){return wn(e)}function wn(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=nn(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?sn(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Pt.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=wn(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${wn(e.fields[s])}`;return n+"}"}(e.mapValue):ct()}function bn(e){return!!e&&"integerValue"in e}function xn(e){return!!e&&"arrayValue"in e}function En(e){return!!e&&"nullValue"in e}function Tn(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _n(e){return!!e&&"mapValue"in e}function In(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Kt(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=In(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=In(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!_n(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=In(t)}setAll(e){let t=Rt.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=In(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());_n(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];_n(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Kt(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Sn(In(this.value))}}function Cn(e){const t=[];return Kt(e.fields,(e,n)=>{const r=new Rt([e]);if(_n(n)){const e=Cn(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Jt(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class kn{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new kn(e,0,kt.min(),kt.min(),kt.min(),Sn.empty(),0)}static newFoundDocument(e,t,n,r){return new kn(e,1,t,kt.min(),n,r,0)}static newNoDocument(e,t){return new kn(e,2,t,kt.min(),kt.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new kn(e,3,t,kt.min(),kt.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(kt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=kt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof kn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.position=e,this.inclusive=t}}function Nn(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Pt.comparator(Pt.fromName(o.referenceValue),n.key):mn(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Dn(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fn(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pn(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{}class Mn extends Ln{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Bn(e,t,n):"array-contains"===t?new Gn(e,n):"in"===t?new Hn(e,n):"not-in"===t?new Qn(e,n):"array-contains-any"===t?new Yn(e,n):new Mn(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new $n(e,n):new zn(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(mn(t,this.value)):null!==t&&dn(this.value)===dn(t)&&this.matchesComparison(mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ct()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Ln{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new On(e,t)}matches(e){return Fn(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fn(e){return"and"===e.op}function Vn(e){return function(e){for(const t of e.filters)if(t instanceof On)return!1;return!0}(e)&&Fn(e)}function Un(e){if(e instanceof Mn)return e.field.canonicalString()+e.op.toString()+vn(e.value);if(Vn(e))return e.filters.map(e=>Un(e)).join(",");{const t=e.filters.map(e=>Un(e)).join(",");return`${e.op}(${t})`}}function jn(e,t){return e instanceof Mn?(n=e,(r=t)instanceof Mn&&n.op===r.op&&n.field.isEqual(r.field)&&fn(n.value,r.value)):e instanceof On?function(e,t){return t instanceof On&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&jn(n,t.filters[r]),!0)}(e,t):void ct();var n,r}function qn(e){return e instanceof Mn?`${(t=e).field.canonicalString()} ${t.op} ${vn(t.value)}`:e instanceof On?function(e){return e.op.toString()+" {"+e.getFilters().map(qn).join(" ,")+"}"}(e):"Filter";var t}class Bn extends Mn{constructor(e,t,n){super(e,t,n),this.key=Pt.fromName(n.referenceValue)}matches(e){const t=Pt.comparator(e.key,this.key);return this.matchesComparison(t)}}class $n extends Mn{constructor(e,t){super(e,"in",t),this.keys=Kn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zn extends Mn{constructor(e,t){super(e,"not-in",t),this.keys=Kn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kn(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>Pt.fromName(e.referenceValue))}class Gn extends Mn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xn(t)&&pn(t.arrayValue,this.value)}}class Hn extends Mn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&pn(this.value.arrayValue,t)}}class Qn extends Mn{constructor(e,t){super(e,"not-in",t)}matches(e){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!pn(this.value.arrayValue,t)}}class Yn extends Mn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>pn(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ue=null}}function Xn(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Wn(e,t,n,r,s,i,o)}function Jn(e){const t=ht(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Un(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),Bt(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>vn(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>vn(e)).join(",")),t.ue=e}return t.ue}function Zn(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Pn(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!jn(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Dn(e.startAt,t.startAt)&&Dn(e.endAt,t.endAt)}function er(e){return Pt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nr(e){return new tr(e)}function rr(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function sr(e){const t=ht(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Wt(Rt.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Rn(r,n))}),e.has(Rt.keyField().canonicalString())||t.ce.push(new Rn(Rt.keyField(),n))}return t.ce}function ir(e){const t=ht(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return Xn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Rn(e.field,t)});const n=e.endAt?new An(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new An(e.startAt.position,e.startAt.inclusive):null;return Xn(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,sr(e))),t.le}function or(e,t,n){return new tr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ar(e,t){return Zn(ir(e),ir(t))&&e.limitType===t.limitType}function lr(e){return`${Jn(ir(e))}|lt:${e.limitType}`}function cr(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>qn(e)).join(", ")}]`),Bt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>vn(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>vn(e)).join(",")),`Target(${t})`}(ir(e))}; limitType=${e.limitType})`}function ur(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Pt.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of sr(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Nn(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,sr(n),r)||n.endAt&&!function(e,t,n){const r=Nn(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,sr(n),r)));var n,r}function hr(e){return(t,n)=>{let r=!1;for(const s of sr(e)){const e=dr(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function dr(e,t,n){const r=e.field.isKeyField()?Pt.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?mn(r,s):ct()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ct()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,n)=>{for(const[r,s]of n)e(r,s)})}isEmpty(){return Gt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Ht(Pt.comparator);function mr(){return pr}const gr=new Ht(Pt.comparator);function yr(...e){let t=gr;for(const n of e)t=t.insert(n.key,n);return t}function vr(e){let t=gr;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function wr(){return xr()}function br(){return xr()}function xr(){return new fr(e=>e.toString(),(e,t)=>e.isEqual(t))}const Er=new Ht(Pt.comparator),Tr=new Wt(Pt.comparator);function _r(...e){let t=Tr;for(const n of e)t=t.add(n);return t}const Ir=new Wt(It);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sr(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$t(t)?"-0":t}}function Cr(e){return{integerValue:""+e}}function kr(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!$t(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Cr(t):Sr(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this._=void 0}}function Nr(e,t,n){return e instanceof Pr?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&on(t)&&(t=an(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Lr?Mr(e,t):e instanceof Or?Fr(e,t):function(e,t){const n=Rr(e,t),r=Ur(n)+Ur(e.Pe);return bn(n)&&bn(e.Pe)?Cr(r):Sr(e.serializer,r)}(e,t)}function Dr(e,t,n){return e instanceof Lr?Mr(e,t):e instanceof Or?Fr(e,t):n}function Rr(e,t){return e instanceof Vr?bn(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Pr extends Ar{}class Lr extends Ar{constructor(e){super(),this.elements=e}}function Mr(e,t){const n=jr(t);for(const r of e.elements)n.some(e=>fn(e,r))||n.push(r);return{arrayValue:{values:n}}}class Or extends Ar{constructor(e){super(),this.elements=e}}function Fr(e,t){let n=jr(t);for(const r of e.elements)n=n.filter(e=>!fn(e,r));return{arrayValue:{values:n}}}class Vr extends Ar{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ur(e){return rn(e.integerValue||e.doubleValue)}function jr(e){return xn(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class qr{constructor(e,t){this.version=e,this.transformResults=t}}class Br{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Br}static exists(e){return new Br(void 0,e)}static updateTime(e){return new Br(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $r(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class zr{}function Kr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ts(e.key,Br.none()):new Wr(e.key,e.data,Br.none());{const n=e.data,r=Sn.empty();let s=new Wt(Rt.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Xr(e.key,r,new Jt(s.toArray()),Br.none())}}function Gr(e,t,n){var r;e instanceof Wr?function(e,t,n){const r=e.value.clone(),s=Zr(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Xr?function(e,t,n){if(!$r(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Zr(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Jr(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Hr(e,t,n,r){return e instanceof Wr?function(e,t,n,r){if(!$r(e.precondition,t))return n;const s=e.value.clone(),i=es(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Xr?function(e,t,n,r){if(!$r(e.precondition,t))return n;const s=es(e.fieldTransforms,r,t),i=t.data;return i.setAll(Jr(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(s=t,i=n,$r(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function Qr(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Rr(r.transform,e||null);null!=s&&(null===n&&(n=Sn.empty()),n.set(r.field,s))}return n||null}function Yr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&St(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Lr&&r instanceof Lr||n instanceof Or&&r instanceof Or?St(n.elements,r.elements,fn):n instanceof Vr&&r instanceof Vr?fn(n.Pe,r.Pe):n instanceof Pr&&r instanceof Pr);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class Wr extends zr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xr extends zr{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Jr(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Zr(e,t,n){const r=new Map;ut(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Dr(o,a,n[s]))}return r}function es(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Nr(e,i,t))}return r}class ts extends zr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ns extends zr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Gr(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Hr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Hr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=br();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Kr(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(kt.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_r())}isEqual(e){return this.batchId===e.batchId&&St(this.mutations,e.mutations,(e,t)=>Yr(e,t))&&St(this.baseMutations,e.baseMutations,(e,t)=>Yr(e,t))}}class ss{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ut(e.mutations.length===n.length);let r=function(){return Er}();const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new ss(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var as,ls;function cs(e){if(void 0===e)return ot("GRPC error has no .code"),dt.UNKNOWN;switch(e){case as.OK:return dt.OK;case as.CANCELLED:return dt.CANCELLED;case as.UNKNOWN:return dt.UNKNOWN;case as.DEADLINE_EXCEEDED:return dt.DEADLINE_EXCEEDED;case as.RESOURCE_EXHAUSTED:return dt.RESOURCE_EXHAUSTED;case as.INTERNAL:return dt.INTERNAL;case as.UNAVAILABLE:return dt.UNAVAILABLE;case as.UNAUTHENTICATED:return dt.UNAUTHENTICATED;case as.INVALID_ARGUMENT:return dt.INVALID_ARGUMENT;case as.NOT_FOUND:return dt.NOT_FOUND;case as.ALREADY_EXISTS:return dt.ALREADY_EXISTS;case as.PERMISSION_DENIED:return dt.PERMISSION_DENIED;case as.FAILED_PRECONDITION:return dt.FAILED_PRECONDITION;case as.ABORTED:return dt.ABORTED;case as.OUT_OF_RANGE:return dt.OUT_OF_RANGE;case as.UNIMPLEMENTED:return dt.UNIMPLEMENTED;case as.DATA_LOSS:return dt.DATA_LOSS;default:return ct()}}(ls=as||(as={}))[ls.OK=0]="OK",ls[ls.CANCELLED=1]="CANCELLED",ls[ls.UNKNOWN=2]="UNKNOWN",ls[ls.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ls[ls.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ls[ls.NOT_FOUND=5]="NOT_FOUND",ls[ls.ALREADY_EXISTS=6]="ALREADY_EXISTS",ls[ls.PERMISSION_DENIED=7]="PERMISSION_DENIED",ls[ls.UNAUTHENTICATED=16]="UNAUTHENTICATED",ls[ls.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ls[ls.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ls[ls.ABORTED=10]="ABORTED",ls[ls.OUT_OF_RANGE=11]="OUT_OF_RANGE",ls[ls.UNIMPLEMENTED=12]="UNIMPLEMENTED",ls[ls.INTERNAL=13]="INTERNAL",ls[ls.UNAVAILABLE=14]="UNAVAILABLE",ls[ls.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const us=new Be([4294967295,4294967295],0);function hs(e){const t=(new TextEncoder).encode(e),n=new $e;return n.update(t),new Uint8Array(n.digest())}function ds(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Be([n,r],0),new Be([s,i],0)]}class fs{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ps(`Invalid padding: ${t}`);if(n<0)throw new ps(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ps(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ps(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Be.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Be.fromNumber(n)));return 1===r.compare(us)&&(r=new Be([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=hs(e),[n,r]=ds(t);for(let s=0;s<this.hashCount;s++){const e=this.Ee(n,r,s);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new fs(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ie)return;const t=hs(e),[n,r]=ds(t);for(let s=0;s<this.hashCount;s++){const e=this.Ee(n,r,s);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,gs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ms(kt.min(),r,new Ht(It),mr(),_r())}}class gs{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new gs(n,t,_r(),_r(),_r())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class vs{constructor(e,t){this.targetId=e,this.me=t}}class ws{constructor(e,t,n=en.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class bs{constructor(){this.fe=0,this.ge=Ts(),this.pe=en.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_r(),t=_r(),n=_r();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ct()}}),new gs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Ts()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ut(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xs{constructor(e){this.Le=e,this.Be=new Map,this.ke=mr(),this.qe=Es(),this.Qe=new Ht(It)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:ct()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const s=r.target;if(er(s))if(0===n){const e=new Pt(s.path);this.Ue(t,e,kn.newNoDocument(e,kt.min()))}else ut(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),s=n?this.Xe(n,e,r):1;if(0!==s){this.je(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=sn(n).toUint8Array()}catch(a){if(a instanceof Zt)return at("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new fs(i,r,s)}catch(a){return at(a instanceof ps?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.Le.tt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.Ue(t,n,null),r++)}),r}rt(e){const t=new Map;this.Be.forEach((n,r)=>{const s=this.Je(r);if(s){if(n.current&&er(s.target)){const t=new Pt(s.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,kn.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}});let n=_r();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));const r=new ms(e,t,this.Qe,this.ke,n);return this.ke=mr(),this.qe=Es(),this.Qe=new Ht(It),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bs,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Wt(It),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||it("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bs),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Es(){return new Ht(Pt.comparator)}function Ts(){return new Ht(Pt.comparator)}const _s=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Is=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ss=(()=>({and:"AND",or:"OR"}))();class Cs{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ks(e,t){return e.useProto3Json||Bt(t)?t:{value:t}}function As(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ns(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ds(e,t){return As(e,t.toTimestamp())}function Rs(e){return ut(!!e),kt.fromTimestamp(function(e){const t=nn(e);return new Ct(t.seconds,t.nanos)}(e))}function Ps(e,t){return Ls(e,t).canonicalString()}function Ls(e,t){const n=(r=e,new Nt(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Ms(e){const t=Nt.fromString(e);return ut(Zs(t)),t}function Os(e,t){return Ps(e.databaseId,t.path)}function Fs(e,t){const n=Ms(t);if(n.get(1)!==e.databaseId.projectId)throw new ft(dt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ft(dt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Pt(js(n))}function Vs(e,t){return Ps(e.databaseId,t)}function Us(e){return new Nt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function js(e){return ut(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function qs(e,t,n){return{name:Os(e,t),fields:n.value.mapValue.fields}}function Bs(e,t){return{documents:[Vs(e,t.path)]}}function $s(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Vs(e,s);const i=function(e){if(0!==e.length)return Xs(On.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>{return{field:Ys((t=e).field),direction:Gs(t.dir)};var t})}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ks(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:s};var l}function zs(e){let t=function(e){const t=Ms(e);return 4===t.length?Nt.emptyPath():js(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ut(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Ks(e);return t instanceof On&&Vn(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>{return new Rn(Ws((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Bt(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new An(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new An(n,t)}(n.endAt)),function(e,t,n,r,s,i,o,a){return new tr(e,t,n,r,s,i,o,a)}(t,s,o,i,a,"F",l,c)}function Ks(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ws(e.unaryFilter.field);return Mn.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ws(e.unaryFilter.field);return Mn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ws(e.unaryFilter.field);return Mn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ws(e.unaryFilter.field);return Mn.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ct()}}(e):void 0!==e.fieldFilter?(t=e,Mn.create(Ws(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ct()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return On.create(e.compositeFilter.filters.map(e=>Ks(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ct()}}(e.compositeFilter.op))}(e):ct();var t}function Gs(e){return _s[e]}function Hs(e){return Is[e]}function Qs(e){return Ss[e]}function Ys(e){return{fieldPath:e.canonicalString()}}function Ws(e){return Rt.fromServerFormat(e.fieldPath)}function Xs(e){return e instanceof Mn?function(e){if("=="===e.op){if(Tn(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NAN"}};if(En(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Tn(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NOT_NAN"}};if(En(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(e.field),op:Hs(e.op),value:e.value}}}(e):e instanceof On?function(e){const t=e.getFilters().map(e=>Xs(e));return 1===t.length?t[0]:{compositeFilter:{op:Qs(e.op),filters:t}}}(e):ct()}function Js(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zs(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r,s=kt.min(),i=kt.min(),o=en.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.ct=e}}function ni(e){const t=zs({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?or(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.un=new si}addToCollectionParentIndex(e,t){return this.un.add(t),Ut.resolve()}getCollectionParents(e,t){return Ut.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Ut.resolve()}deleteFieldIndex(e,t){return Ut.resolve()}deleteAllFieldIndexes(e){return Ut.resolve()}createTargetIndexes(e,t){return Ut.resolve()}getDocumentsMatchingTarget(e,t){return Ut.resolve(null)}getIndexType(e,t){return Ut.resolve(0)}getFieldIndexes(e,t){return Ut.resolve([])}getNextCollectionGroupToUpdate(e){return Ut.resolve(null)}getMinOffset(e,t){return Ut.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return Ut.resolve(Mt.min())}updateCollectionGroup(e,t,n){return Ut.resolve()}updateIndexEntries(e,t){return Ut.resolve()}}class si{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Wt(Nt.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Wt(Nt.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ii(0)}static kn(){return new ii(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.changes=new fr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,kn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ut.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Hr(n.mutation,e,Jt.empty(),Ct.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,_r()).next(()=>t))}getLocalViewOfDocuments(e,t,n=_r()){const r=wr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=yr();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=wr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,_r()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=mr();const i=xr(),o=xr();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Xr)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),Hr(o.mutation,t,o.mutation.getFieldMask(),Ct.now())):i.set(t.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new ai(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=xr();let r=new Ht((e,t)=>e-t),s=_r();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Jt.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||_r()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=br();l.forEach(e=>{if(!s.has(e)){const r=Kr(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ut.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return s=t,Pt.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var s}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Ut.resolve(wr());let o=-1,a=s;return i.next(t=>Ut.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Ut.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,_r())).next(e=>({batchId:o,changes:vr(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Pt(t)).next(e=>{let t=yr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=yr();return this.indexManager.getCollectionParents(e,s).next(o=>Ut.forEach(o,o=>{const a=(l=t,c=o.child(s),new tr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,c;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,kn.newInvalidDocument(r)))});let n=yr();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&Hr(i.mutation,r,Jt.empty(),Ct.now()),ur(t,r)&&(n=n.insert(e,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Ut.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:Rs(n.createTime)}),Ut.resolve();var n}getNamedQuery(e,t){return Ut.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:ni(n.bundledQuery),readTime:Rs(n.readTime)}),Ut.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.overlays=new Ht(Pt.comparator),this.Ir=new Map}getOverlay(e,t){return Ut.resolve(this.overlays.get(t))}getOverlays(e,t){const n=wr();return Ut.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),Ut.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Ir.delete(n)),Ut.resolve()}getOverlaysForCollection(e,t,n){const r=wr(),s=t.length+1,i=new Pt(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ut.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Ht((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=wr(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=wr(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Ut.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new is(t,n));let s=this.Ir.get(t);void 0===s&&(s=_r(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return Ut.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ut.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.Tr=new Wt(fi.Er),this.dr=new Wt(fi.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new fi(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Vr(new fi(e,t))}mr(e,t){e.forEach(e=>this.removeReference(e,t))}gr(e){const t=new Pt(new Nt([])),n=new fi(t,e),r=new fi(t,e+1),s=[];return this.dr.forEachInRange([n,r],e=>{this.Vr(e),s.push(e.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Pt(new Nt([])),n=new fi(t,e),r=new fi(t,e+1);let s=_r();return this.dr.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new fi(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class fi{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Pt.comparator(e.key,t.key)||It(e.wr,t.wr)}static Ar(e,t){return It(e.wr,t.wr)||Pt.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Wt(fi.Er)}checkEmpty(e){return Ut.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new rs(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.br=this.br.add(new fi(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ut.resolve(i)}lookupMutationBatch(e,t){return Ut.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),s=r<0?0:r;return Ut.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ut.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Ut.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new fi(t,0),r=new fi(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,r],e=>{const t=this.Dr(e.wr);s.push(t)}),Ut.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Wt(It);return t.forEach(e=>{const t=new fi(e,0),r=new fi(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],e=>{n=n.add(e.wr)})}),Ut.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Pt.isDocumentKey(s)||(s=s.child(""));const i=new fi(new Pt(s),0);let o=new Wt(It);return this.br.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.wr)),!0)},i),Ut.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach(e=>{const n=this.Dr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){ut(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Ut.forEach(t.mutations,r=>{const s=new fi(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new fi(t,0),r=this.br.firstAfterOrEqual(n);return Ut.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ut.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.Mr=e,this.docs=new Ht(Pt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ut.resolve(n?n.document.mutableCopy():kn.newInvalidDocument(t))}getEntries(e,t){let n=mr();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():kn.newInvalidDocument(e))}),Ut.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=mr();const i=t.path,o=new Pt(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Ot(Lt(o),n)<=0||(r.has(o.key)||ur(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ut.resolve(s)}getAllFromCollectionGroup(e,t,n,r){ct()}Or(e,t){return Ut.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new gi(this)}getSize(e){return Ut.resolve(this.size)}}class gi extends oi{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)}),Ut.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.persistence=e,this.Nr=new fr(e=>Jn(e),Zn),this.lastRemoteSnapshotVersion=kt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new di,this.targetCount=0,this.kr=ii.Bn()}forEachTarget(e,t){return this.Nr.forEach((e,n)=>t(n)),Ut.resolve()}getLastRemoteSnapshotVersion(e){return Ut.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ut.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Ut.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Ut.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ii(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Ut.resolve()}updateTargetData(e,t){return this.Kn(t),Ut.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Ut.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Nr.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Nr.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ut.waitFor(s).next(()=>r)}getTargetCount(e){return Ut.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Ut.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Ut.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),Ut.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Ut.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Ut.resolve(n)}containsKey(e,t){return Ut.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.qr={},this.overlays={},this.Qr=new qt(0),this.Kr=!1,this.Kr=!0,this.$r=new hi,this.referenceDelegate=e(this),this.Ur=new yi(this),this.indexManager=new ri,this.remoteDocumentCache=new mi(e=>this.referenceDelegate.Wr(e)),this.serializer=new ti(t),this.Gr=new ci(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ui,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new pi(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){it("MemoryPersistence","Starting transaction:",e);const r=new wi(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(e=>this.referenceDelegate.jr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Hr(e,t){return Ut.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class wi extends Ft{constructor(e){super(),this.currentSequenceNumber=e}}class bi{constructor(e){this.persistence=e,this.Jr=new di,this.Yr=null}static Zr(e){return new bi(e)}get Xr(){if(this.Yr)return this.Yr;throw ct()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Ut.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Ut.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Ut.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(e=>this.Xr.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Xr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ut.forEach(this.Xr,n=>{const r=Pt.fromPath(n);return this.ei(e,r).next(e=>{e||t.removeEntry(r,kt.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Ut.or([()=>Ut.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=_r(),r=_r();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new xi(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=x()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(E())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.Yi(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.Zi(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new Ei;return this.Xi(e,t,n).next(r=>{if(s.result=r,this.zi)return this.es(e,t,n,r.size)})}).next(()=>s.result)}es(e,t,n,r){return n.documentReadCount<this.ji?(st()<=v.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Ut.resolve()):(st()<=v.DEBUG&&it("QueryEngine","Query:",cr(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(st()<=v.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):Ut.resolve())}Yi(e,t){if(rr(t))return Ut.resolve(null);let n=ir(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=or(t,null,"F"),n=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=_r(...r);return this.Ji.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.ts(t,r);return this.ns(t,i,s,n.readTime)?this.Yi(e,or(t,null,"F")):this.rs(e,i,t,n)}))})))}Zi(e,t,n,r){return rr(t)||r.isEqual(kt.min())?Ut.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const i=this.ts(t,s);return this.ns(t,i,n,r)?Ut.resolve(null):(st()<=v.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cr(t)),this.rs(e,i,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=kt.fromTimestamp(1e9===r?new Ct(n+1,0):new Ct(n,r));return new Mt(s,Pt.empty(),t)}(r,-1)).next(e=>e))})}ts(e,t){let n=new Wt(hr(e));return t.forEach((t,r)=>{ur(e,r)&&(n=n.add(r))}),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(e,t,n){return st()<=v.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",cr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Mt.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Ht(It),this._s=new fr(e=>Jn(e),Zn),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new li(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}async function Ii(e,t){const n=ht(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.ls(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=_r();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({hs:e,removedBatchIds:s,addedBatchIds:i}))})})}function Si(e){const t=ht(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Ci(e,t){const n=ht(e),r=t.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const o=[];t.targetChanges.forEach((i,a)=>{const l=s.get(a);if(!l)return;o.push(n.Ur.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.Ur.addMatchingKeys(e,i.addedDocuments,a)));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,h,d;null!==t.targetMismatches.get(a)?c=c.withResumeToken(en.EMPTY_BYTE_STRING,kt.min()).withLastLimboFreeSnapshotVersion(kt.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),h=c,d=i,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(e,c))});let a=mr(),l=_r();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(function(e,t,n){let r=_r(),s=_r();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=mr();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(kt.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):it("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Ps:r,Is:s}})}(e,i,t.documentUpdates).next(e=>{a=e.Ps,l=e.Is})),!r.isEqual(kt.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next(t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Ut.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,l)).next(()=>a)}).then(e=>(n.os=s,e))}function ki(e,t){const n=ht(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function Ai(e,t,n){const r=ht(e),s=r.os.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(o){if(!jt(o))throw o;it("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Ni(e,t,n){const r=ht(e);let s=kt.min(),i=_r();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=ht(e),s=r._s.get(n);return void 0!==s?Ut.resolve(r.os.get(s)):r.Ur.getTargetData(t,n)}(r,e,ir(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.ss.getDocumentsMatchingQuery(e,t,n?s:kt.min(),n?i:_r())).next(e=>(function(e,t,n){let r=e.us.get(t)||kt.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:i})))}class Di{constructor(){this.activeTargetIds=Ir}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ri{constructor(){this.so=new Di,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Di,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){it("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){it("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi=null;function Oi(){return null===Mi?Mi=268435456+Math.round(2147483648*Math.random()):Mi++,"0x"+Mi.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Fi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="WebChannelConnection";class ji extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,s){const i=Oi(),o=this.xo(e,t.toUriEncodedString());it("RestConnection",`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,s),this.No(e,o,a,n).then(t=>(it("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw at("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}Lo(e,t,n,r,s,i){return this.Mo(e,t,n,r,s)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}xo(e,t){const n=Fi[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const s=Oi();return new Promise((i,o)=>{const a=new Ke;a.setWithCredentials(!0),a.listenOnce(He.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qe.NO_ERROR:const t=a.getResponseJson();it(Ui,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case Qe.TIMEOUT:it(Ui,`RPC '${e}' ${s} timed out`),o(new ft(dt.DEADLINE_EXCEEDED,"Request time out"));break;case Qe.HTTP_ERROR:const n=a.getStatus();if(it(Ui,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(dt).indexOf(t)>=0?t:dt.UNKNOWN}(t.status);o(new ft(e,t.message))}else o(new ft(dt.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ft(dt.UNAVAILABLE,"Connection failed."));break;default:ct()}}finally{it(Ui,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);it(Ui,`RPC '${e}' ${s} sending request:`,r),a.send(t,"POST",l,n,15)})}Bo(e,t,n){const r=Oi(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Je(),o=Xe(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");it(Ui,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=i.createWebChannel(c,a);let h=!1,d=!1;const f=new Vi({Io:t=>{d?it(Ui,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(it(Ui,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),it(Ui,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},To:()=>u.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,Ge.EventType.OPEN,()=>{d||(it(Ui,`RPC '${e}' stream ${r} transport opened.`),f.yo())}),p(u,Ge.EventType.CLOSE,()=>{d||(d=!0,it(Ui,`RPC '${e}' stream ${r} transport closed`),f.So())}),p(u,Ge.EventType.ERROR,t=>{d||(d=!0,at(Ui,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new ft(dt.UNAVAILABLE,"The operation could not be completed")))}),p(u,Ge.EventType.MESSAGE,t=>{var n;if(!d){const s=t.data[0];ut(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){it(Ui,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=as[e];if(void 0!==t)return cs(t)}(t),s=o.message;void 0===n&&(n=dt.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.So(new ft(n,s)),u.close()}else it(Ui,`RPC '${e}' stream ${r} received:`,s),f.bo(s)}}),p(o,We.STAT_EVENT,t=>{t.stat===Ye.PROXY?it(Ui,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Ye.NOPROXY&&it(Ui,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.wo()},0),f}}function qi(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){return new Cs(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,n=1e3,r=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&it("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,n,r,s,i,o,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $i(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===dt.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===dt.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Yo===t&&this.P_(e,n)},t=>{e(()=>{const e=new ft(dt.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(e=>{n(()=>this.I_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.e_?this.E_(e):this.onNext(e))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return it("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(it("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ki extends zi{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ct(),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(ut(void 0===t||"string"==typeof t),en.fromBase64String(t||"")):(ut(void 0===t||t instanceof Buffer||t instanceof Uint8Array),en.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?dt.UNKNOWN:cs(e.code);return new ft(t,e.message||"")}(a);n=new ws(s,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fs(e,r.document.name),i=Rs(r.document.updateTime),o=r.document.createTime?Rs(r.document.createTime):kt.min(),a=new Sn({mapValue:{fields:r.document.fields}}),l=kn.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ys(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Fs(e,r.document),i=r.readTime?Rs(r.readTime):kt.min(),o=kn.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ys([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Fs(e,r.document),i=r.removedTargetIds||[];n=new ys([],i,s,null)}else{if(!("filter"in t))return ct();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new os(r,s),o=e.targetId;n=new vs(o,i)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return kt.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?kt.min():t.readTime?Rs(t.readTime):kt.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Us(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=er(r)?{documents:Bs(e,r)}:{query:$s(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ns(e,t.resumeToken);const r=ks(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(kt.min())>0){n.readTime=As(e,t.snapshotVersion.toTimestamp());const r=ks(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ct()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Us(this.serializer),t.removeTarget=e,this.a_(t)}}class Gi extends zi{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ut(!!e.streamToken),this.lastStreamToken=e.streamToken,ut(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){ut(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(ut(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Rs(e.updateTime):Rs(t);return n.isEqual(kt.min())&&(n=Rs(t)),new qr(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Rs(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Us(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof Wr)n={update:qs(e,t.key,t.value)};else if(t instanceof ts)n={delete:Os(e,t.key)};else if(t instanceof Xr)n={update:qs(e,t.key,t.data),updateMask:Js(t.fieldMask)};else{if(!(t instanceof ns))return ct();n={verify:Os(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Pr)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Lr)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Or)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Vr)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw ct()}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:Ds(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:ct())),n;var r,s}(this.serializer,e))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ft(dt.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Mo(e,Ls(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===dt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ft(dt.UNKNOWN,e.toString())})}Lo(e,t,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Lo(e,Ls(t,n),r,i,o,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===dt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ft(dt.UNKNOWN,e.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Qi{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ot(t),this.D_=!1):it("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(e=>{n.enqueueAndForget(async()=>{so(this)&&(it("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ht(e);t.L_.add(4),await Xi(t),t.q_.set("Unknown"),t.L_.delete(4),await Wi(t)}(this))})}),this.q_=new Qi(n,r)}}async function Wi(e){if(so(e))for(const t of e.B_)await t(!0)}async function Xi(e){for(const t of e.B_)await t(!1)}function Ji(e,t){const n=ht(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),ro(n)?no(n):To(n).r_()&&eo(n,t))}function Zi(e,t){const n=ht(e),r=To(n);n.N_.delete(t),r.r_()&&to(n,t),0===n.N_.size&&(r.r_()?r.o_():so(n)&&n.q_.set("Unknown"))}function eo(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(kt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}To(e).A_(t)}function to(e,t){e.Q_.xe(t),To(e).R_(t)}function no(e){e.Q_=new xs({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),To(e).start(),e.q_.v_()}function ro(e){return so(e)&&!To(e).n_()&&e.N_.size>0}function so(e){return 0===ht(e).L_.size}function io(e){e.Q_=void 0}async function oo(e){e.q_.set("Online")}async function ao(e){e.N_.forEach((t,n)=>{eo(e,t)})}async function lo(e,t){io(e),ro(e)?(e.q_.M_(t),no(e)):e.q_.set("Unknown")}async function co(e,t,n){if(e.q_.set("Online"),t instanceof ws&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){it("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await uo(e,r)}else if(t instanceof ys?e.Q_.Ke(t):t instanceof vs?e.Q_.He(t):e.Q_.We(t),!n.isEqual(kt.min()))try{const t=await Si(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.N_.get(r);s&&e.N_.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(en.EMPTY_BYTE_STRING,r.snapshotVersion)),to(e,t);const s=new ei(r.target,t,n,r.sequenceNumber);eo(e,s)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){it("RemoteStore","Failed to raise snapshot:",s),await uo(e,s)}}async function uo(e,t,n){if(!jt(t))throw t;e.L_.add(1),await Xi(e),e.q_.set("Offline"),n||(n=()=>Si(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{it("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Wi(e)})}function ho(e,t){return t().catch(n=>uo(e,n,t))}async function fo(e){const t=ht(e),n=_o(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;po(t);)try{const e=await ki(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,mo(t,e)}catch(s){await uo(t,s)}go(t)&&yo(t)}function po(e){return so(e)&&e.O_.length<10}function mo(e,t){e.O_.push(t);const n=_o(e);n.r_()&&n.V_&&n.m_(t.mutations)}function go(e){return so(e)&&!_o(e).n_()&&e.O_.length>0}function yo(e){_o(e).start()}async function vo(e){_o(e).p_()}async function wo(e){const t=_o(e);for(const n of e.O_)t.m_(n.mutations)}async function bo(e,t,n){const r=e.O_.shift(),s=ss.from(r,t,n);await ho(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await fo(e)}async function xo(e,t){t&&_o(e).V_&&await async function(e,t){if(function(e){switch(e){default:return ct();case dt.CANCELLED:case dt.UNKNOWN:case dt.DEADLINE_EXCEEDED:case dt.RESOURCE_EXHAUSTED:case dt.INTERNAL:case dt.UNAVAILABLE:case dt.UNAUTHENTICATED:return!1;case dt.INVALID_ARGUMENT:case dt.NOT_FOUND:case dt.ALREADY_EXISTS:case dt.PERMISSION_DENIED:case dt.FAILED_PRECONDITION:case dt.ABORTED:case dt.OUT_OF_RANGE:case dt.UNIMPLEMENTED:case dt.DATA_LOSS:return!0}}(n=t.code)&&n!==dt.ABORTED){const n=e.O_.shift();_o(e).s_(),await ho(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await fo(e)}var n}(e,t),go(e)&&yo(e)}async function Eo(e,t){const n=ht(e);n.asyncQueue.verifyOperationInProgress(),it("RemoteStore","RemoteStore received new credentials");const r=so(n);n.L_.add(3),await Xi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Wi(n)}function To(e){return e.K_||(e.K_=function(e,t,n){const r=ht(e);return r.w_(),new Ki(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:oo.bind(null,e),Ro:ao.bind(null,e),mo:lo.bind(null,e),d_:co.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),ro(e)?no(e):e.q_.set("Unknown")):(await e.K_.stop(),io(e))})),e.K_}function _o(e){return e.U_||(e.U_=function(e,t,n){const r=ht(e);return r.w_(),new Gi(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vo.bind(null,e),mo:xo.bind(null,e),f_:wo.bind(null,e),g_:bo.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await fo(e)):(await e.U_.stop(),e.O_.length>0&&(it("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Io{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Io(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ft(dt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(e,t){if(ot("AsyncQueue",`${t}: ${e}`),jt(e))return new ft(dt.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Pt.comparator(t.key,n.key):(e,t)=>Pt.comparator(e.key,t.key),this.keyedMap=yr(),this.sortedSet=new Ht(this.comparator)}static emptySet(e){return new Co(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Co))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Co;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.W_=new Ht(Pt.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ct():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Ao{constructor(e,t,n,r,s,i,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new Ao(e,t,Co.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ar(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Do{constructor(){this.queries=Ro(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=ht(e),r=n.queries;n.queries=Ro(),r.forEach((e,n)=>{for(const r of n.j_)r.onError(t)})}(this,new ft(dt.ABORTED,"Firestore shutting down"))}}function Ro(){return new fr(e=>lr(e),ar)}function Po(e,t){const n=ht(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(s)&&(r=!0);t.z_=s}}r&&Mo(n)}function Lo(e,t,n){const r=ht(e),s=r.queries.get(t);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(t)}function Mo(e){e.Y_.forEach(e=>{e.next()})}var Oo,Fo;(Fo=Oo||(Oo={})).ea="default",Fo.Cache="cache";class Vo{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ao(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Oo.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.key=e}}class jo{constructor(e){this.key=e}}class qo{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_r(),this.mutatedKeys=_r(),this.Aa=hr(e),this.Ra=new Co(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new ko,r=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),u=ur(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.ga(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Aa(u,a)>0||l&&this.Aa(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Ra:i,fa:n,ns:o,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const i=e.fa.G_();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ct()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc)),this.pa(n),r=null!=r&&r;const o=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,l=a!==this.Ea;return this.Ea=a,0!==i.length||l?{snapshot:new Ao(this.query,e.Ra,s,i,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ko,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_r(),this.Ra.forEach(e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))});const t=[];return e.forEach(e=>{this.da.has(e)||t.push(new jo(e))}),this.da.forEach(n=>{e.has(n)||t.push(new Uo(n))}),t}ba(e){this.Ta=e.Ts,this.da=_r();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ao.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Bo{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class $o{constructor(e){this.key=e,this.va=!1}}class zo{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ca={},this.Fa=new fr(e=>lr(e),ar),this.Ma=new Map,this.xa=new Set,this.Oa=new Ht(Pt.comparator),this.Na=new Map,this.La=new di,this.Ba={},this.ka=new Map,this.qa=ii.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Ko(e,t,n=!0){const r=da(e);let s;const i=r.Fa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Ho(r,t,n,!0),s}async function Go(e,t){const n=da(e);await Ho(n,t,!0,!1)}async function Ho(e,t,n,r){const s=await function(e,t){const n=ht(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Ur.getTargetData(e,t).next(s=>s?(r=s,Ut.resolve(r)):n.Ur.allocateTargetId(e).next(s=>(r=new ei(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e})}(e.localStore,ir(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await async function(e,t,n,r,s){e.Ka=(t,n,r)=>async function(e,t,n,r){let s=t.view.ma(n);s.ns&&(s=await Ni(e.localStore,t.query,!1).then(({documents:e})=>t.view.ma(e,s)));const i=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i,o);return oa(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const i=await Ni(e.localStore,t,!0),o=new qo(t,i.Ts),a=o.ma(i.documents),l=gs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);oa(e,n,c.wa);const u=new Bo(t,n,o);return e.Fa.set(t,u),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),c.snapshot}(e,t,i,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&Ji(e.remoteStore,s),a}async function Qo(e,t,n){const r=ht(e),s=r.Fa.get(t),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(e=>!ar(e,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ai(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Zi(r.remoteStore,s.targetId),sa(r,s.targetId)}).catch(Vt)):(sa(r,s.targetId),await Ai(r.localStore,s.targetId,!0))}async function Yo(e,t){const n=ht(e),r=n.Fa.get(t),s=n.Ma.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zi(n.remoteStore,r.targetId))}async function Wo(e,t,n){const r=function(e){const t=ht(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ea.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ta.bind(null,t),t}(e);try{const e=await function(e,t){const n=ht(e),r=Ct.now(),s=t.reduce((e,t)=>e.add(t.key),_r());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=mr(),l=_r();return n.cs.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=Qr(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Xr(e.key,t,Cn(t.value.mapValue),Br.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:vr(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Ht(It)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await ca(r,e.changes),await fo(r.remoteStore)}catch(s){const e=So(s,"Failed to persist write");n.reject(e)}}async function Xo(e,t){const n=ht(e);try{const e=await Ci(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Na.get(t);r&&(ut(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?ut(r.va):e.removedDocuments.size>0&&(ut(r.va),r.va=!1))}),await ca(n,e,t)}catch(r){await Vt(r)}}function Jo(e,t,n){const r=ht(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach((n,r)=>{const s=r.view.Z_(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=ht(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const s of n.j_)s.Z_(t)&&(r=!0)}),r&&Mo(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zo(e,t,n){const r=ht(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Na.get(t),i=s&&s.key;if(i){let e=new Ht(Pt.comparator);e=e.insert(i,kn.newNoDocument(i,kt.min()));const n=_r().add(i),s=new ms(kt.min(),new Map,new Ht(It),e,n);await Xo(r,s),r.Oa=r.Oa.remove(i),r.Na.delete(t),la(r)}else await Ai(r.localStore,t,!1).then(()=>sa(r,t,n)).catch(Vt)}async function ea(e,t){const n=ht(e),r=t.batch.batchId;try{const e=await function(e,t){const n=ht(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Ut.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);ut(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=_r();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);ra(n,r,null),na(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ca(n,e)}catch(s){await Vt(s)}}async function ta(e,t,n){const r=ht(e);try{const e=await function(e,t){const n=ht(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(ut(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);ra(r,t,n),na(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ca(r,e)}catch(s){await Vt(s)}}function na(e,t){(e.ka.get(t)||[]).forEach(e=>{e.resolve()}),e.ka.delete(t)}function ra(e,t,n){const r=ht(e);let s=r.Ba[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function sa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(t=>{e.La.containsKey(t)||ia(e,t)})}function ia(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(Zi(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),la(e))}function oa(e,t,n){for(const r of n)r instanceof Uo?(e.La.addReference(r.key,t),aa(e,r)):r instanceof jo?(it("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||ia(e,r.key)):ct()}function aa(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(it("SyncEngine","New document in limbo: "+n),e.xa.add(r),la(e))}function la(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Pt(Nt.fromString(t)),r=e.qa.next();e.Na.set(r,new $o(n)),e.Oa=e.Oa.insert(n,r),Ji(e.remoteStore,new ei(ir(nr(n.path)),r,"TargetPurposeLimboResolution",qt.oe))}}async function ca(e,t,n){const r=ht(e),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((e,a)=>{o.push(r.Ka(a,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const s=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(e){s.push(e);const t=xi.Wi(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(e,t){const n=ht(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ut.forEach(t,t=>Ut.forEach(t.$i,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ut.forEach(t.Ui,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!jt(r))throw r;it("LocalStore","Failed to update sequence numbers: "+r)}for(const s of t){const e=s.targetId;if(!s.fromCache){const t=n.os.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,s)}}}(r.localStore,i))}async function ua(e,t){const n=ht(e);if(!n.currentUser.isEqual(t)){it("SyncEngine","User change. New user:",t.toKey());const e=await Ii(n.localStore,t);n.currentUser=t,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach(e=>{e.forEach(e=>{e.reject(new ft(dt.CANCELLED,s))})}),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ca(n,e.hs)}var r,s}function ha(e,t){const n=ht(e),r=n.Na.get(t);if(r&&r.va)return _r().add(r.key);{let e=_r();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function da(e){const t=ht(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ha.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zo.bind(null,t),t.Ca.d_=Po.bind(null,t.eventManager),t.Ca.$a=Lo.bind(null,t.eventManager),t}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return function(e,t,n,r){return new _i(e,t,n,r)}(this.persistence,new Ti,e.initialUser,this.serializer)}Ga(e){return new vi(bi.Zr,this.serializer)}Wa(e){return new Ri}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Jo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ua.bind(null,this.syncEngine),await async function(e,t){const n=ht(e);t?(n.L_.delete(2),await Wi(n)):t||(n.L_.add(2),await Xi(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Do}createDatastore(e){const t=Bi(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ji(r));var r;return function(e,t,n,r){return new Hi(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Jo(this.syncEngine,e,0),i=Li.D()?new Li:new Pi,new Yi(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new zo(e,t,n,r,s,i);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=ht(e);it("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await Xi(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}pa.provider={build:()=>new pa};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=_t.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{it("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(it("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=So(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ya(e,t){e.asyncQueue.verifyOperationInProgress(),it("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ii(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function va(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){it("FirestoreClient","Using user provided OfflineComponentProvider");try{await ya(e,e._uninitializedComponentsProvider._offline)}catch(t){const s=t;if(!("FirebaseError"===(n=s).name?n.code===dt.FAILED_PRECONDITION||n.code===dt.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw s;at("Error using user provided cache. Falling back to memory cache: "+s),await ya(e,new fa)}}else it("FirestoreClient","Using default OfflineComponentProvider"),await ya(e,new fa);var n;return e._offlineComponents}(e);it("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Eo(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Eo(t.remoteStore,n)),e._onlineComponents=t}async function wa(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(it("FirestoreClient","Using user provided OnlineComponentProvider"),await va(e,e._uninitializedComponentsProvider._online)):(it("FirestoreClient","Using default OnlineComponentProvider"),await va(e,new pa))),e._onlineComponents}async function ba(e){const t=await wa(e),n=t.eventManager;return n.onListen=Ko.bind(null,t.syncEngine),n.onUnlisten=Qo.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Go.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Yo.bind(null,t.syncEngine),n}function xa(e,t,n={}){const r=new pt;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new ma({next:a=>{i.Za(),t.enqueueAndForget(()=>async function(e,t){const n=ht(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.j_.indexOf(t);e>=0&&(i.j_.splice(e,1),0===i.j_.length?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}(e,o));const l=a.docs.has(n);!l&&a.fromCache?s.reject(new ft(dt.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?s.reject(new ft(dt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:e=>s.reject(e)}),o=new Vo(nr(n.path),i,{includeMetadataChanges:!0,_a:!0});return async function(t,n){const r=ht(t);let s=3;const i=n.query;let o=r.queries.get(i);o?!o.H_()&&n.J_()&&(s=2):(o=new No,s=n.J_()?0:1);try{switch(s){case 0:o.z_=await r.onListen(i,!0);break;case 1:o.z_=await r.onListen(i,!1);break;case 2:await r.onFirstRemoteStoreListen(i)}}catch(e){const r=So(e,`Initialization of query '${cr(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.j_.push(n),n.Z_(r.onlineState),o.z_&&n.X_(o.z_)&&Mo(r)}(e,o)}(await ba(e),e.asyncQueue,t,n,r)),r.promise
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Ea(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ta=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e){if(!Pt.isDocumentKey(e))throw new ft(dt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ia(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":ct()}function Sa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ft(dt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(e);throw new ft(dt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ft(dt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ft(dt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new ft(dt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ea(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ft(dt.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ft(dt.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ft(dt.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class ka{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ca({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(dt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ft(dt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ca(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new gt;switch(e.type){case"firstParty":return new bt(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ft(dt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ta.get(e);t&&(it("ComponentProvider","Removing Datastore"),Ta.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Aa(this.firestore,e,this._query)}}class Na{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Da(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Na(this.firestore,e,this._key)}}class Da extends Aa{constructor(e,t,n){super(e,t,nr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Na(this.firestore,null,new Pt(e))}withConverter(e){return new Da(this.firestore,e,this._path)}}function Ra(e,t,...n){if(e=c(e),1===arguments.length&&(t=_t.newId()),function(e,t,n){if(!n)throw new ft(dt.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof ka){const r=Nt.fromString(t,...n);return _a(r),new Na(e,null,new Pt(r))}{if(!(e instanceof Na||e instanceof Da))throw new ft(dt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Nt.fromString(t,...n));return _a(r),new Na(e.firestore,e instanceof Da?e.converter:null,new Pt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $i(this,"async_queue_retry"),this.Vu=()=>{const e=qi();e&&it("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=qi();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=qi();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!jt(e))throw e;it("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(e=>{this.Eu=e,this.du=!1;throw ot("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e}).then(e=>(this.du=!1,e))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=Io.createAndSchedule(this,e,t,n,e=>this.yu(e));return this.Tu.push(r),r}fu(){this.Eu&&ct()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class La extends ka{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Pa,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pa(e),this._firestoreClient=void 0,await e}}}function Ma(e,t){const n="object"==typeof e?e:u(),r="string"==typeof e?e:"(default)",i=s(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=y("firestore");e&&function(e,t,n,r={}){var s;const i=(e=Sa(e,ka))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&at("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=tt.MOCK_USER;else{t=w(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new ft(dt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new tt(i)}e._authCredentials=new yt(new mt(t,n))}}(i,...e)}return i}function Oa(e){if(e._terminated)throw new ft(dt.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const s=e._freezeSettings(),i=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,c=s,new cn(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ea(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,l,c;e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new ga(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Fa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fa(en.fromBase64String(e))}catch(t){throw new ft(dt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fa(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ft(dt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ft(dt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ft(dt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return It(this._lat,e._lat)||It(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=/^__.*__$/;class $a{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wr(e,this.data,t,this.fieldTransforms)}}class za{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ka(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ct()}}class Ga{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(Ka(this.Cu)&&Ba.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Ha{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Bi(e)}Qu(e,t,n,r=!1){return new Ga({Cu:e,methodName:t,qu:n,path:Rt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qa(e){const t=e._freezeSettings(),n=Bi(e._databaseId);return new Ha(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ya(e,t,n,r,s,i={}){const o=e.Qu(i.merge||i.mergeFields?2:0,t,n,s);el("Data must be an object, but it was:",o,r);const a=Ja(r,o);let l,c;if(i.merge)l=new Jt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=tl(t,r,n);if(!o.contains(s))throw new ft(dt.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);il(e,s)||e.push(s)}l=new Jt(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new $a(new Sn(a),l,c)}class Wa extends Ua{_toFieldTransform(e){if(2!==e.Cu)throw 1===e.Cu?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}function Xa(e,t){if(Za(e=c(e)))return el("Unsupported field value:",t,e),Ja(e,t);if(e instanceof Ua)return function(e,t){if(!Ka(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Xa(s,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=c(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return kr(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ct.fromDate(e);return{timestampValue:As(t.serializer,n)}}if(e instanceof Ct){const n=new Ct(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:As(t.serializer,n)}}if(e instanceof ja)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Fa)return{bytesValue:Ns(t.serializer,e._byteString)};if(e instanceof Na){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ps(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof qa)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return Sr(n.serializer,e)})}}}}};var n;throw t.Bu(`Unsupported field value: ${Ia(e)}`)}(e,t)}function Ja(e,t){const n={};return Gt(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kt(e,(e,r)=>{const s=Xa(r,t.Mu(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Za(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ct||e instanceof ja||e instanceof Fa||e instanceof Na||e instanceof Ua||e instanceof qa)}function el(e,t,n){if(!Za(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Ia(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function tl(e,t,n){if((t=c(t))instanceof Va)return t._internalPath;if("string"==typeof t)return rl(e,t);throw sl("Field path arguments must be of type string or ",e,!1,void 0,n)}const nl=new RegExp("[~\\*/\\[\\]]");function rl(e,t,n){if(t.search(nl)>=0)throw sl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Va(...t.split("."))._internalPath}catch(r){throw sl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sl(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ft(dt.INVALID_ARGUMENT,a+e+l)}function il(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Na(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new al(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ll("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class al extends ol{data(){return super.data()}}function ll(e,t){return"string"==typeof t?rl(e,t):t instanceof Va?t._internalPath:t._delegate._internalPath}class cl{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rn(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ct()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Kt(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const s=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>rn(e.doubleValue));return new qa(s)}convertGeoPoint(e){return new ja(rn(e.latitude),rn(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=an(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ln(e));default:return null}}convertTimestamp(e){const t=nn(e);return new Ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Nt.fromString(e);ut(Zs(n));const r=new un(n.get(1),n.get(3)),s=new Pt(n.popFirst(5));return r.isEqual(t)||ot(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hl extends ol{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ll("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class dl extends hl{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(e){e=Sa(e,Na);const t=Sa(e.firestore,La);return xa(Oa(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),s=new pl(e);return new hl(e,s,t._key,r,new ul(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}class pl extends cl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Na(this.firestore,null,t)}}function ml(e,t,n){e=Sa(e,Na);const r=Sa(e.firestore,La),s=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t);return yl(r,[Ya(Qa(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Br.none())])}function gl(e,t,n,...r){e=Sa(e,Na);const s=Sa(e.firestore,La),i=Qa(s);let o;return o="string"==typeof(t=c(t))||t instanceof Va?function(e,t,n,r,s,i){const o=e.Qu(1,t,n),a=[tl(t,r,n)],l=[s];if(i.length%2!=0)throw new ft(dt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<i.length;c+=2)a.push(tl(t,i[c])),l.push(i[c+1]);const u=[],h=Sn.empty();for(let f=a.length-1;f>=0;--f)if(!il(u,a[f])){const e=a[f];let t=l[f];t=c(t);const n=o.Nu(e);if(t instanceof Wa)u.push(e);else{const r=Xa(t,n);null!=r&&(u.push(e),h.set(e,r))}}const d=new Jt(u);return new za(h,d,o.fieldTransforms)}(i,"updateDoc",e._key,t,n,r):function(e,t,n,r){const s=e.Qu(1,t,n);el("Data must be an object, but it was:",s,r);const i=[],o=Sn.empty();Kt(r,(e,r)=>{const a=rl(t,e,n);r=c(r);const l=s.Nu(a);if(r instanceof Wa)i.push(a);else{const e=Xa(r,l);null!=e&&(i.push(a),o.set(a,e))}});const a=new Jt(i);return new za(o,a,s.fieldTransforms)}(i,"updateDoc",e._key,t),yl(s,[o.toMutation(e._key,Br.exists(!0))])}function yl(e,t){return function(e,t){const n=new pt;return e.asyncQueue.enqueueAndForget(async()=>Wo(await function(e){return wa(e).then(e=>e.syncEngine)}(e),t,n)),n.promise}(Oa(e),t)}!function(e,s=!0){nt=b,n(new r("firestore",(e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new La(new vt(e.getProvider("auth-internal")),new Et(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ft(dt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(e.options.projectId,t)}(r,t),r);return n=Object.assign({useFetchStreams:s},n),i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),t(et,"4.7.3",e),t(et,"4.7.3","esm2017")}();const vl=T({apiKey:"AIzaSyDoXsCL03Z7vde6sN1xJIJrDe3BuYSZqtM",authDomain:"ai-cv-4bec1.firebaseapp.com",databaseURL:"https://ai-cv-4bec1.firebaseio.com",projectId:"ai-cv-4bec1",storageBucket:"ai-cv-4bec1.appspot.com",messagingSenderId:"714819597625",appId:"1:714819597625:web:1aefa7ee9e2a31946ee4e8",measurementId:"G-Q64CKYDNEK"}),wl=_(vl);!function(e=u()){e=c(e);const t=s(e,ge);t.isInitialized()?t.getImmediate():function(e,t={}){const n=s(e,ge);if(n.isInitialized()){const e=n.getImmediate();if(h(t,n.getOptions()))return e;throw we.create("already-initialized")}const r=n.initialize({options:t})}(e)}(vl);const bl=Ma(vl);null==(e=document.getElementById("download-cv"))||e.addEventListener("click",downloadCV);let xl=null;const El="trial",Tl="trial_expired",_l="active";async function Il(e){var t;const n=await async function(e){const t=Ra(bl,"subscriptions",e),n=await fl(t);return n.exists()?n.data():null}(e);if(!n)return{hasAccess:!1,status:null,message:"No subscription found"};const r=new Date;if(n.status===El){const t=n.trialEndsAt.toDate?n.trialEndsAt.toDate():new Date(n.trialEndsAt);if(r<t){const e=t.getTime()-r.getTime(),n=Math.ceil(e/36e5);return{hasAccess:!0,status:El,remainingHours:n,trialEndsAt:t,message:`Trial active - ${n} hours remaining`}}return await gl(Ra(bl,"subscriptions",e),{status:Tl,updatedAt:r}),{hasAccess:!1,status:Tl,message:"Your free trial has expired. Subscribe for R50/month to continue."}}if(n.status===_l){const e=(null==(t=n.currentPeriodEnd)?void 0:t.toDate)?n.currentPeriodEnd.toDate():new Date(n.currentPeriodEnd);if(r<e)return{hasAccess:!0,status:_l,currentPeriodEnd:e,message:"Active subscription"}}return{hasAccess:!1,status:n.status,message:"Subscription inactive. Please subscribe to continue."}}async function Sl(e,t,n,r){if(!(await(async()=>{if(!xl){if(!window.Stripe){const e=document.createElement("script");e.src="https://js.stripe.com/v3/",e.async=!0,document.head.appendChild(e),await new Promise((t,n)=>{e.onload=t,e.onerror=n})}xl=window.Stripe("mk_1TBDgHANHu5fam0iKkiPRcDCmk_1TBDgHANHu5fam0iKkiPRcDC")}return xl})()))throw new Error("Stripe not initialized. Please check your configuration.");return await gl(Ra(bl,"subscriptions",e),{checkoutInitiated:new Date,updatedAt:new Date}),{message:"Checkout session created",userId:e,requiresBackend:!0}}function Cl(e){switch(e.code){case"auth/email-already-in-use":return"This email is already registered. Please sign in instead.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/user-not-found":return"No account found with this email. Please register first.";case"auth/wrong-password":return"Incorrect password. Please try again.";default:return"An error occurred. Please try again later."}}async function kl(e,t){try{const n=(await I(wl,e,t)).user;return await ml(Ra(bl,"users",n.uid),{email:n.email,createdAt:new Date}),await async function(e,t){const n=new Date,r=new Date(n.getTime()+864e5),s={status:El,trialStartedAt:n,trialEndsAt:r,createdAt:n,updatedAt:n,stripeCustomerId:null,stripeSubscriptionId:null,currentPeriodEnd:null,email:t};return await ml(Ra(bl,"subscriptions",e),s),s}(n.uid,n.email),n}catch(n){throw new Error(Cl(n))}}function Al(){return C(wl).catch(e=>{throw new Error("Failed to sign out. Please try again later.")})}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nl,Dl,Rl,Pl,Ll,Ml,Ol,Fl,Vl,Ul,jl,ql;(Dl=Nl||(Nl={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",Dl.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",Dl.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",Dl.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",Dl.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(Pl=Rl||(Rl={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",Pl.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",Pl.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",Pl.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",Pl.BLOCK_NONE="BLOCK_NONE",(Ml=Ll||(Ll={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",Ml.NEGLIGIBLE="NEGLIGIBLE",Ml.LOW="LOW",Ml.MEDIUM="MEDIUM",Ml.HIGH="HIGH",(Fl=Ol||(Ol={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",Fl.SAFETY="SAFETY",Fl.OTHER="OTHER",(Ul=Vl||(Vl={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",Ul.STOP="STOP",Ul.MAX_TOKENS="MAX_TOKENS",Ul.SAFETY="SAFETY",Ul.RECITATION="RECITATION",Ul.OTHER="OTHER",(ql=jl||(jl={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",ql.RETRIEVAL_QUERY="RETRIEVAL_QUERY",ql.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",ql.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",ql.CLASSIFICATION="CLASSIFICATION",ql.CLUSTERING="CLUSTERING";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bl extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class $l extends Bl{constructor(e,t){super(e),this.response=t}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zl,Kl;(Kl=zl||(zl={})).GENERATE_CONTENT="generateContent",Kl.STREAM_GENERATE_CONTENT="streamGenerateContent",Kl.COUNT_TOKENS="countTokens",Kl.EMBED_CONTENT="embedContent",Kl.BATCH_EMBED_CONTENTS="batchEmbedContents";class Gl{constructor(e,t,n,r){this.model=e,this.task=t,this.apiKey=n,this.stream=r}toString(){let e=`https://generativelanguage.googleapis.com/v1/${this.model}:${this.task}`;return this.stream&&(e+="?alt=sse"),e}}async function Hl(e,t,n){let r;try{if(r=await fetch(e.toString(),Object.assign(Object.assign({},function(e){const t={};if((null==e?void 0:e.timeout)>=0){const n=new AbortController,r=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=r}return t}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"genai-js/0.2.1","x-goog-api-key":e.apiKey},body:t})),!r.ok){let e="";try{const t=await r.json();e=t.error.message,t.error.details&&(e+=` ${JSON.stringify(t.error.details)}`)}catch(s){}throw new Error(`[${r.status} ${r.statusText}] ${e}`)}}catch(s){const t=new Bl(`Error fetching from ${e.toString()}: ${s.message}`);throw t.stack=s.stack,t}return r}function Ql(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length,Wl(e.candidates[0]))throw new $l(`${Xl(e)}`,e);return function(e){var t,n,r,s;return(null===(s=null===(r=null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)||void 0===r?void 0:r[0])||void 0===s?void 0:s.text)?e.candidates[0].content.parts[0].text:""}(e)}if(e.promptFeedback)throw new $l(`Text not available. ${Xl(e)}`,e);return""},e}const Yl=[Vl.RECITATION,Vl.SAFETY];function Wl(e){return!!e.finishReason&&Yl.includes(e.finishReason)}function Xl(e){var t,n,r;let s="";if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(null===(r=e.candidates)||void 0===r?void 0:r[0]){const t=e.candidates[0];Wl(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}}else s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);return s}function Jl(e){return this instanceof Jl?(this.v=e,this):new Jl(e)}function Zl(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,s=n.apply(e,t||[]),i=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){s[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{(n=s[e](t)).value instanceof Jl?Promise.resolve(n.value.v).then(l,c):u(i[0][2],n)}catch(r){u(i[0][3],r)}var n}function l(e){a("next",e)}function c(e){a("throw",e)}function u(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ec=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function tc(e){const t=function(e){const t=e.getReader();return new ReadableStream({start(e){let n="";return r();function r(){return t.read().then(({value:t,done:s})=>{if(s)return n.trim()?void e.error(new Bl("Failed to parse stream")):void e.close();n+=t;let i,o=n.match(ec);for(;o;){try{i=JSON.parse(o[1])}catch(a){return void e.error(new Bl(`Error parsing JSON response: "${o[1]}"`))}e.enqueue(i),n=n.substring(o[0].length),o=n.match(ec)}return r()})}}})}(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,r]=t.tee();return{stream:rc(n),response:nc(r)}}async function nc(e){const t=[],n=e.getReader();for(;;){const{done:e,value:r}=await n.read();if(e)return Ql(sc(t));t.push(r)}}function rc(e){return Zl(this,arguments,function*(){const t=e.getReader();for(;;){const{value:e,done:n}=yield Jl(t.read());if(n)break;yield yield Jl(Ql(e))}})}function sc(e){const t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(const r of e)if(r.candidates)for(const e of r.candidates){const t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[{text:""}]});for(const r of e.content.parts)r.text&&(n.candidates[t].content.parts[0].text+=r.text)}}return n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(e,t,n,r){const s=new Gl(t,zl.STREAM_GENERATE_CONTENT,e,!0);return tc(await Hl(s,JSON.stringify(n),r))}async function oc(e,t,n,r){const s=new Gl(t,zl.GENERATE_CONTENT,e,!1),i=await Hl(s,JSON.stringify(n),r);return{response:Ql(await i.json())}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t){let n=[];if("string"==typeof e)n=[{text:e}];else for(const r of e)"string"==typeof r?n.push({text:r}):n.push(r);return{role:t,parts:n}}function lc(e){if(e.contents)return e;return{contents:[ac(e,"user")]}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cc="SILENT_ERROR";class uc{constructor(e,t,n,r){this.model=t,this.params=n,this.requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(this._history=n.history.map(e=>{if(!e.role)throw new Error("Missing role for history item: "+JSON.stringify(e));return ac(e.parts,e.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n;await this._sendPromise;const r=ac(e,"user"),s={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,r]};let i;return this._sendPromise=this._sendPromise.then(()=>oc(this._apiKey,this.model,s,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(r);const n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{Xl(e.response)}i=e}),await this._sendPromise,i}async sendMessageStream(e){var t,n;await this._sendPromise;const r=ac(e,"user"),s={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,r]},i=ic(this._apiKey,this.model,s,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>i).catch(e=>{throw new Error(cc)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(r);const t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{Xl(e)}}).catch(e=>{e.message}),i}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.requestOptions=n||{}}async generateContent(e){const t=lc(e);return oc(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}async generateContentStream(e){const t=lc(e);return ic(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}startChat(e){return new uc(this.apiKey,this.model,e,this.requestOptions)}async countTokens(e){const t=lc(e);return async function(e,t,n,r){const s=new Gl(t,zl.COUNT_TOKENS,e,!1);return(await Hl(s,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),r)).json()}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.apiKey,this.model,t)}async embedContent(e){const t=function(e){if("string"==typeof e||Array.isArray(e))return{content:ac(e,"user")};return e}(e);return async function(e,t,n,r){const s=new Gl(t,zl.EMBED_CONTENT,e,!1);return(await Hl(s,JSON.stringify(n),r)).json()}(this.apiKey,this.model,t)}async batchEmbedContents(e){return async function(e,t,n,r){const s=new Gl(t,zl.BATCH_EMBED_CONTENTS,e,!1),i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await Hl(s,JSON.stringify({requests:i}),r)).json()}(this.apiKey,this.model,e,this.requestOptions)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new Bl("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new hc(this.apiKey,e,t)}}const fc=new dc("AIzaSyAVY9U4HT3MQWx2ficWURTIHA7UC_qbInc").getGenerativeModel({model:"gemini-2.5-flash"});async function pc(e){try{const t=await async function(){try{const e=await fetch("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=50f33641&app_key=a4f4da670e1a3596320aee003e0a1327&results_per_page=20",{headers:{Accept:"application/json",Origin:window.location.origin}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();if(!t||!t.results||!Array.isArray(t.results))return[]}catch(e){return[]}}(),n=t.map(t=>async function(e,t){var n;try{const r=`\n    Analyze the match between this CV and job posting. \n    CV Summary: ${e.summary}\n    CV Skills: ${e.skills.join(", ")}\n    CV Experience: ${e.experience}\n    \n    Job Title: ${t.title}\n    Job Description: ${t.description}\n    Job Requirements: ${t.requirements.join(", ")}\n    Remote: ${t.remote?"Yes":"No"}\n    \n    Provide a concise analysis in this format:\n    Match Score: [0-100]%\n    Key Matches: [bullet points of matching skills]\n    Gaps: [bullet points of missing requirements]\n    Suggestions: [brief improvement recommendations]`,s=await fc.generateContent(r),i=(await s.response).text(),o=parseInt((null==(n=i.match(/Match Score: (\d+)%/))?void 0:n[1])||"0",10);return{analysis:i,matchScore:o}}catch(r){return{analysis:"\nMatch Score: N/A\nKey Matches: Unable to analyze matches at this time\nGaps: Analysis temporarily unavailable\nSuggestions: Please try again later",matchScore:0}}}(e,t)),r=await Promise.all(n);return t.map((e,t)=>({...e,...r[t]})).sort((e,t)=>t.matchScore-e.matchScore)}catch(t){throw new Error("Failed to get job recommendations. Please try again later.")}}function mc(e){return e.replace(/```(?:markdown)?\s*\n?/gi,"").replace(/```/g,"").replace(/^#\s+.+?$/gm,"").replace(/\[Your\s+\w+\]/g,"").replace(/\[Optional\]/gi,"").replace(/^##\s+(.+?)$/gm,'<h2 class="text-xl font-bold text-blue-600 mt-6 mb-3 pb-2 border-b-2 border-blue-300">$1</h2>').replace(/^###\s+(.+?)$/gm,'<h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">$1</h3>').replace(/\*\*(.+?)\*\*/g,'<strong class="font-bold text-gray-900">$1</strong>').replace(/\*(.+?)\*/g,'<em class="italic text-gray-700">$1</em>').replace(/^\s*[\*\-•]\s+(.+?)$/gm,'<li class="ml-6 mb-2 text-gray-700">$1</li>').replace(/(<li class="ml-6 mb-2 text-gray-700">.+?<\/li>(?:\n<li class="ml-6 mb-2 text-gray-700">.+?<\/li>)*)/gs,'<ul class="list-disc list-inside mb-4">$1</ul>').replace(/^---\s*$/gm,"").split("\n").filter(e=>""!==e.trim()).join("\n").split("\n\n").map(e=>(e=e.trim())?e.startsWith("<")?e:`<p class="text-gray-700 leading-relaxed mb-3">${e}</p>`:"").join("\n")}const gc=new dc("AIzaSyAVY9U4HT3MQWx2ficWURTIHA7UC_qbInc").getGenerativeModel({model:"gemini-2.5-flash"});Ma();const yc=new dc("AIzaSyAVY9U4HT3MQWx2ficWURTIHA7UC_qbInc").getGenerativeModel({model:"gemini-2.5-flash"}),vc="As an expert interviewer focused on empowering anyone in the workplace, analyze this candidate's profile and generate thoughtful interview questions that:\n\n1. Focus on leadership abilities and potential\n2. Explore problem-solving capabilities\n3. Discuss diversity and inclusion experiences\n4. Address career growth and aspirations\n5. Evaluate technical skills contextually\n6. Explore collaborative experiences\n7. Discuss work-life balance approaches\n8. Identify mentorship opportunities\n\nCandidate Profile:\n{profile}\n\nGenerate 5 strategic interview questions with:\n1. The question itself\n2. The intent behind asking it\n3. What makes a strong answer\n4. Follow-up questions if needed\n\nFormat in clear markdown sections.";new A;let wc="landing",bc=null,xc=null,Ec="",Tc=!1,_c=null,Ic=null;function Sc(e="Processing...",t=""){const n=document.getElementById("loading-overlay");n&&n.remove();const r=document.createElement("div");return r.id="loading-overlay",r.className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]",r.innerHTML=`\n    <div class="glass rounded-3xl p-10 text-center max-w-sm mx-4 border-2 border-white/30">\n      <div class="relative inline-block mb-6">\n        <div class="w-16 h-16 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin"></div>\n        <div class="absolute inset-0 flex items-center justify-center">\n          <span class="text-2xl">✨</span>\n        </div>\n      </div>\n      <h3 class="text-xl font-bold text-gray-800 mb-2">${e}</h3>\n      ${t?`<p class="text-gray-600">${t}</p>`:""}\n    </div>\n  `,document.body.appendChild(r),r}function Cc(){const e=document.getElementById("loading-overlay");e&&(e.classList.add("opacity-0"),setTimeout(()=>e.remove(),300))}function kc(e,t="info"){document.querySelectorAll(".toast-notification").forEach(e=>e.remove());const n=document.createElement("div");n.className="toast-notification fixed bottom-6 right-6 z-[101] transform translate-y-4 opacity-0 transition-all duration-300",n.innerHTML=`\n    <div class="glass rounded-2xl p-4 flex items-center gap-3 shadow-2xl border-2 border-white/30 max-w-sm">\n      <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${{success:"from-green-500 to-emerald-600",error:"from-red-500 to-rose-600",info:"from-primary-500 to-primary-600",warning:"from-amber-500 to-orange-600"}[t]} flex items-center justify-center text-white font-bold">\n        ${{success:"✓",error:"✕",info:"ℹ",warning:"⚠"}[t]}\n      </div>\n      <p class="text-gray-800 font-medium flex-1">${e}</p>\n      <button onclick="this.parentElement.parentElement.remove()" class="text-gray-500 hover:text-gray-700 p-1">✕</button>\n    </div>\n  `,document.body.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("translate-y-4","opacity-0")}),setTimeout(()=>{n.classList.add("translate-y-4","opacity-0"),setTimeout(()=>n.remove(),300)},4e3)}function Ac(){const e=document.getElementById("paywall-modal");e&&e.remove()}async function Nc(){if(Ic){Sc("Preparing Checkout","Redirecting to secure payment...");try{if((await Sl(Ic.uid,Ic.email,window.location.origin,window.location.origin)).requiresBackend)return Cc(),void Dc();setTimeout(()=>{Cc()},5e3)}catch(e){Cc(),kc("Error setting up checkout: "+e.message,"error"),Dc()}}else kc("Please sign in to subscribe","error")}function Dc(){const e=document.getElementById("stripe-setup-modal");e&&e.remove();const t={amount:50,currency:"ZAR",formatted:"R50/month"},n=document.createElement("div");n.id="stripe-setup-modal",n.className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]",n.innerHTML=`\n    <div class="glass rounded-3xl p-8 max-w-lg mx-4 border-2 border-white/30">\n      <h2 class="text-2xl font-bold text-gray-800 mb-4">Complete Your Subscription Setup</h2>\n      <p class="text-gray-600 mb-4">To enable payments, you need to configure Stripe:</p>\n      \n      <ol class="list-decimal list-inside space-y-3 text-gray-700 mb-6">\n        <li>Create a <a href="https://dashboard.stripe.com" target="_blank" class="text-primary-600 underline">Stripe account</a></li>\n        <li>Create a product with price ${t.formatted}</li>\n        <li>Set up a Payment Link or Checkout Session</li>\n        <li>Add your Stripe keys to <code class="bg-gray-100 px-2 py-1 rounded">.env</code>:\n          <pre class="bg-gray-100 p-3 rounded-lg mt-2 text-sm overflow-x-auto">VITE_STRIPE_PUBLISHABLE_KEY=pk_...\nVITE_STRIPE_PRICE_ID=price_...</pre>\n        </li>\n      </ol>\n      \n      <p class="text-sm text-gray-500 mb-4">\n        For testing, you can use Stripe's test mode keys.\n      </p>\n      \n      <button id="close-stripe-setup" class="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-900 transition-all">\n        Got it\n      </button>\n    </div>\n  `,document.body.appendChild(n),n.querySelector("#close-stripe-setup").addEventListener("click",()=>n.remove()),n.addEventListener("click",e=>{e.target===n&&n.remove()})}function Rc(e){const t=document.createElement("div");return t.className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50",t.innerHTML=e,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),t}function Pc(){const e=document.getElementById("app");let t="";if(Ic&&_c){let e="",r="";_c.status===El?(e=`\n    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${(n=_c.remainingHours)<=6?"from-amber-500 to-orange-600":"from-emerald-500 to-teal-600"} text-white text-sm font-semibold shadow-lg">\n      <span class="animate-pulse">⏱️</span>\n      <span>Trial: ${n}h left</span>\n    </div>\n  `,r='\n        <button id="go-pro-btn" class="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">\n          <span>⚡</span> Go Pro\n        </button>\n      '):_c.status===_l?e='\n    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold shadow-lg">\n      <span>✨</span>\n      <span>Pro Member</span>\n    </div>\n  ':_c.status===Tl&&(r='\n        <button id="go-pro-btn" class="bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all animate-pulse flex items-center gap-2">\n          <span>🔒</span> Subscribe Now\n        </button>\n      '),t=`\n      <div class="flex items-center space-x-3">\n        ${e}\n        <span class="text-white glass-dark px-4 py-2 rounded-xl border border-white/30 hidden sm:flex items-center">\n          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5 mr-2 text-purple-300" viewBox="0 0 24 24" fill="none">\n            <circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="2.2" />\n            <path d="M5.5 18.8C6.5 15.8 9 14 12 14C15 14 17.5 15.8 18.5 18.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />\n          </svg>\n          <span class="max-w-[150px] truncate">${Ic.email}</span>\n        </span>\n        ${r}\n        <button id="logout" class="glass px-4 py-2 rounded-xl text-gray-300 font-semibold hover:bg-white/20 transition-all">\n          Logout\n        </button>\n      </div>\n    `}else t='\n      <button id="login" class="glass px-6 py-2.5 rounded-xl text-primary-700 font-semibold hover:bg-white transition-all">\n        Login\n      </button>\n      <button id="signup" class="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white px-6 py-2.5 rounded-xl font-semibold pulse-btn">\n        Sign Up\n      </button>\n    ';var n;const r=`\n    <header class="glass-dark backdrop-blur-md sticky top-0 z-50 border-b border-white/20">\n      <div class="container mx-auto px-6 py-4">\n        <div class="flex justify-between items-center">\n          <div class="flex items-center space-x-3 cursor-pointer" id="logo-home">\n            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-glow">\n              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\n              </svg>\n            </div>\n            <h1 class="text-2xl font-bold text-white neon-text">Ispani AI</h1>\n          </div>\n          <div id="auth-buttons" class="flex items-center space-x-3">\n            ${t}\n          </div>\n        </div>\n      </div>\n    </header>\n  `;let s;switch(wc){case"landing":s='\n    <div class="min-h-screen py-12">\n      <div class="mx-auto px-4">\n        <div class="mx-auto" style="width: 90%; max-width: 90%;">\n          \x3c!-- Landing Hero Section --\x3e\n          <div\n            class="rounded-3xl px-6 sm:px-14 py-12 mb-10 border shadow-sm"\n            style="\n              background:\n                radial-gradient(circle at top left, rgba(129, 140, 248, 0.22), transparent 60%),\n                radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.20), rgba(255, 255, 255, 0.96) 70%);\n              border-color: rgba(129, 140, 248, 0.35);\n            "\n          >\n            <div class="text-center max-w-3xl mx-auto">\n              <div class="inline-flex items-center justify-center mb-4">\n                <span class="bg-primary-600 text-white px-6 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase">\n                  AI for CVs • Careers • Interviews\n                </span>\n              </div>\n              <h1 class="text-3xl md:text-5xl font-black mb-4 text-gray-900">\n                AI-personalized CVs, career paths & interview prep.\n              </h1>\n              <p class="text-base md:text-xl text-gray-600 mx-auto leading-relaxed">\n                Turn your story into a standout CV, discover roles that match your strengths,\n                and practice interviews with AI that understands your journey.\n              </p>\n\n              \x3c!-- Centered Login / Sign Up buttons --\x3e\n              <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">\n                <button\n                  type="button"\n                  onclick="document.getElementById(\'login\') && document.getElementById(\'login\').click()"\n                  class="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"\n                >\n                  Login\n                </button>\n                <button\n                  type="button"\n                  onclick="document.getElementById(\'signup\') && document.getElementById(\'signup\').click()"\n                  class="w-full sm:w-auto bg-gray-900 hover:bg-black text-white py-3 px-8 rounded-full text-base font-semibold border border-gray-800 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"\n                >\n                  Sign Up\n                </button>\n              </div>\n\n              <p class="mt-3 text-xs md:text-sm text-gray-500">\n                No credit card required. Built for students, graduates and working professionals.\n              </p>\n            </div>\n\n            \x3c!-- Features: CVs, Careers, Interviews as rows (text left, image right) --\x3e\n            <div class="mt-12 space-y-6">\n              \x3c!-- AI CVs (image left on desktop) --\x3e\n              <div class="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-6 flex flex-col md:flex-row-reverse items-stretch gap-5">\n                <div class="flex-1 flex flex-col gap-3">\n                  <div class="flex items-center gap-3">\n                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 text-primary-700 text-lg">\n                      📄\n                    </span>\n                    <div>\n                      <p class="text-xs font-semibold text-primary-600 tracking-[0.18em] uppercase">\n                        AI CVs\n                      </p>\n                      <h2 class="text-lg md:text-xl font-semibold text-gray-900">\n                        AI-personalized CVs\n                      </h2>\n                    </div>\n                  </div>\n                  <p class="text-sm md:text-base text-gray-600">\n                    Generate tailored CVs for each opportunity, structured for recruiters and optimized for ATS\n                    so your skills and experience are always presented at their best.\n                  </p>\n                </div>\n                <div class="w-full md:w-96 lg:w-[28rem]">\n                  \x3c!-- Replace this div with an actual CV image or illustration --\x3e\n                  <div class="w-full md:w-96 lg:w-[28rem]">\n               <img\n               src="/assets/cv-preview-BOG4J8eW.png"\n               alt="AI CV preview"\n               class="h-48 md:h-56 lg:h-72 rounded-xl border border-gray-300 bg-white object-cover w-full"\n                   />\n                 </div>\n\n                </div>\n              </div>\n\n              \x3c!-- Career Recommendations (text left, image right) --\x3e\n              <div class="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-6 flex flex-col md:flex-row items-stretch gap-5">\n                <div class="flex-1 flex flex-col gap-3">\n                  <div class="flex items-center gap-3">\n                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 text-lg">\n                      🧭\n                    </span>\n                    <div>\n                      <p class="text-xs font-semibold text-emerald-600 tracking-[0.18em] uppercase">\n                        Careers\n                      </p>\n                      <h2 class="text-lg md:text-xl font-semibold text-gray-900">\n                        Smart career paths\n                      </h2>\n                    </div>\n                  </div>\n                  <p class="text-sm md:text-base text-gray-600">\n                    Explore roles and paths that align with your strengths, interests and goals,\n                    with clear next steps and skills to grow into each opportunity.\n                  </p>\n                </div>\n                <div class="w-full md:w-96 lg:w-[28rem]">\n             <img\n             src="/assets/career-roadmap-CJAMhtTo.png"\n             alt="Career roadmap illustration"\n             class="h-48 md:h-56 lg:h-72 rounded-xl border border-gray-300 bg-white object-cover w-full"\n              />\n              </div>\n              </div>\n\n              \x3c!-- Interview Preparation (image left on desktop) --\x3e\n              <div class="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-6 flex flex-col md:flex-row-reverse items-stretch gap-5">\n                <div class="flex-1 flex flex-col gap-3">\n                  <div class="flex items-center gap-3">\n                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 text-lg">\n                      🎤\n                    </span>\n                    <div>\n                      <p class="text-xs font-semibold text-indigo-600 tracking-[0.18em] uppercase">\n                        Interviews\n                      </p>\n                      <h2 class="text-lg md:text-xl font-semibold text-gray-900">\n                        AI interview prep\n                      </h2>\n                    </div>\n                  </div>\n                  <p class="text-sm md:text-base text-gray-600">\n                    Practice realistic interview questions based on your profile and target role,\n                    with AI feedback that helps you refine your answers and build confidence.\n                  </p>\n                </div>\n                <div class="w-full md:w-96 lg:w-[28rem]">\n                  \x3c!-- Replace this div with an interview coaching / Q&A image --\x3e\n                 <div class="w-full md:w-96 lg:w-[28rem]">\n              <img\n              src="/assets/interview-practice-artj9eu_.png"\n              alt="Interview practice illustration"\n            class="h-40 md:h-48 lg:h-60 rounded-xl border border-gray-300 bg-white object-cover w-full"\n                   />\n                </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ';break;case"cv-generator":default:s='\n    <div class="min-h-screen py-12">\n      <div class="container mx-auto px-4">\n        <div class="max-w-5xl mx-auto">\n          \x3c!-- Hero Section --\x3e\n          <div class="bg-white rounded-3xl p-10 mb-8 text-center border border-gray-200 shadow-sm">\n            <div class="inline-block mb-4">\n              <div class="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">\n                🚀 AI-Powered Career Platform\n              </div>\n            </div>\n            <h1 class="text-5xl font-black mb-4 text-gray-900">\n              Welcome to Ispani AI\n            </h1>\n            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">\n              Unlock your potential with our AI-powered platform. Showcase your talents, break barriers, \n              and land your dream career with personalized CVs that stand out. \n            </p>\n            <div class="flex justify-center gap-4 mt-6">\n              <div class="bg-gray-800 text-white px-4 py-2 rounded-xl">\n                <span class="font-bold">✨ AI-Generated</span>\n              </div>\n              <div class="bg-gray-800 text-white px-4 py-2 rounded-xl">\n                <span class="font-bold">🎯 Job Matching</span>\n              </div>\n              <div class="bg-gray-800 text-white px-4 py-2 rounded-xl">\n                <span class="font-bold">⚡ Instant Results</span>\n              </div>\n            </div>\n          </div>\n\n          <form id="cv-form" class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">\n            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\n              \x3c!-- Personal Information --\x3e\n              <div class="col-span-2">\n                <div class="flex items-center gap-3 mb-4">\n                  <div class="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">\n                    <span class="text-white text-xl">👤</span>\n                  </div>\n                  <label class="block text-2xl font-bold text-gray-800">Personal Information</label>\n                </div>\n                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">\n                  <div>\n                    <label for="fullName" class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>\n                    <input type="text" id="fullName" required\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base font-medium">\n                  </div>\n\n                  <div>\n                    <label for="address" class="block text-sm font-semibold text-gray-700 mb-2">Address</label>\n                    <input type="text" id="address" required placeholder="Street, City, State, ZIP Code"\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n                  </div>\n\n                  <div>\n                    <label for="contactInfo" class="block text-sm font-semibold text-gray-700 mb-2">Contact Information</label>\n                    <input type="text" id="contactInfo" required placeholder="Email, Phone, LinkedIn"\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n                  </div>\n                </div>\n              </div>\n\n              \x3c!-- Professional Profile --\x3e\n              <div class="col-span-2">\n                <div class="flex items-center gap-3 mb-4">\n                  <div class="w-10 h-10 rounded-xl bg-accent-600 flex items-center justify-center">\n                    <span class="text-white text-xl">💼</span>\n                  </div>\n                  <label class="block text-2xl font-bold text-gray-800">Professional Profile</label>\n                </div>\n                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">\n                  <div>\n                    <label for="cvType" class="block text-sm font-semibold text-gray-700 mb-2">CV Type</label>\n                    <select id="cvType" required\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base font-medium">\n                      <option value="professional">Professional</option>\n                      <option value="executive">Executive Leadership</option>\n                      <option value="technical">Technical Expert</option>\n                      <option value="creative">Creative Professional</option>\n                      <option value="academic">Academic/Research</option>\n                    </select>\n                  </div>\n\n                  <div>\n                    <label for="summary" class="block text-sm font-semibold text-gray-700 mb-2">Professional Summary</label>\n                    <textarea id="summary" rows="5" required placeholder="Share your career highlights, key achievements, and aspirations..."\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>\n                  </div>\n                </div>\n              </div>\n\n              \x3c!-- Skills & Expertise --\x3e\n              <div class="col-span-2">\n                <div class="flex items-center gap-3 mb-4">\n                  <div class="w-10 h-10 rounded-xl bg-electric-600 flex items-center justify-center">\n                    <span class="text-white text-xl">⚡</span>\n                  </div>\n                  <label class="block text-2xl font-bold text-gray-800">Skills & Expertise</label>\n                </div>\n                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200">\n                  <label for="skills" class="block text-sm font-semibold text-gray-700 mb-2">Select Your Skills (Hold Ctrl/Cmd for multiple)</label>\n                  <select id="skills" multiple required size="10"\n                    class="block w-full px-5 py-3 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n                    <optgroup label="Leadership & Management">\n                      <option value="team-leadership">Team Leadership</option>\n                      <option value="project-management">Project Management</option>\n                      <option value="strategic-planning">Strategic Planning</option>\n                      <option value="change-management">Change Management</option>\n                    </optgroup>\n                    <optgroup label="Technical Skills">\n                      <option value="coding">Coding/Programming</option>\n                      <option value="data-analysis">Data Analysis</option>\n                      <option value="system-administration">System Administration</option>\n                      <option value="network-security">Network Security</option>\n                      <option value="software-development">Software Development</option>\n                      <option value="technical-writing">Technical Writing</option>\n                      <option value="quality-assurance">Quality Assurance</option>\n                      <option value="cloud-computing">Cloud Computing</option>\n                    </optgroup>\n                    <optgroup label="Creative Arts">\n                      <option value="graphic-design">Graphic Design</option>\n                      <option value="video-editing">Video Editing</option>\n                      <option value="photography">Photography</option>\n                      <option value="writing">Writing</option>\n                      <option value="music-production">Music Production</option>\n                    </optgroup>\n                    <optgroup label="Education & Teaching">\n                      <option value="lesson-planning">Lesson Planning</option>\n                      <option value="curriculum-design">Curriculum Design</option>\n                      <option value="educational-technology">Educational Technology</option>\n                      <option value="special-education">Special Education</option>\n                    </optgroup>\n                    <optgroup label="Administrative Skills">\n                      <option value="office-management">Office Management</option>\n                      <option value="data-entry">Data Entry</option>\n                      <option value="calendar-management">Calendar Management</option>\n                      <option value="customer-service">Customer Service</option>\n                    </optgroup>\n                  </select>\n                  <p class="mt-2 text-sm text-gray-500">Hold Ctrl/Cmd to select multiple skills</p>\n                </div>\n              </div>\n\n              \x3c!-- Job Preferences --\x3e\n              <div class="col-span-2">\n                <label class="block text-lg font-medium text-gray-700 mb-2">Job Preferences</label>\n                <div class="bg-purple-50 p-6 rounded-lg space-y-4">\n                  <div>\n                    <label for="jobType" class="block text-sm font-medium text-gray-700">Preferred Job Type</label>\n                    <select id="jobType" required\n                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">\n                      <option value="full-time">Full-Time</option>\n                      <option value="part-time">Part-Time</option>\n                      <option value="freelance">Freelance</option>\n                      <option value="internship">Internship</option>\n                      <option value="contract">Contract</option>\n                    </select>\n                  </div>\n                  <div>\n                    <label for="field" class="block text-sm font-medium text-gray-700">Preferred Field</label>\n                    <select id="field" required\n                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">\n                      <option value="engineering">Engineering</option>\n                      <option value="computer-science">Computer Science/IT</option>\n                      <option value="creative-arts">Creative Arts</option>\n                      <option value="teaching">Teaching</option>\n                      <option value="admin">Administrative Work</option>\n                      <option value="healthcare">Healthcare</option>\n                      <option value="marketing">Marketing</option>\n                      <option value="finance">Finance</option>\n                      <option value="construction">Construction</option>\n                      <option value="hospitality">Hospitality</option>\n                    </select>\n                  </div>\n                  <div id="additional-info" class="hidden">\n                    <label for="additionalDetails" class="block text-sm font-medium text-gray-700">Additional Information</label>\n                    <textarea id="additionalDetails" rows="3" placeholder="Provide specifics based on your chosen field, e.g., Cloud Computing, Marketing Strategy..."\n                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>\n                  </div>\n                </div>\n              </div>\n\n              \x3c!-- Experience & Achievements --\x3e\n              <div class="col-span-2">\n                <div class="flex items-center gap-3 mb-4">\n                  <div class="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">\n                    <span class="text-white text-xl">🏆</span>\n                  </div>\n                  <label class="block text-2xl font-bold text-gray-800">Experience & Achievements</label>\n                </div>\n                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">\n                  <div>\n                    <label for="experience" class="block text-sm font-semibold text-gray-700 mb-2">Professional Experience</label>\n                    <textarea id="experience" rows="6" required placeholder="Detail your work history, leadership roles, and key achievements..."\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>\n                  </div>\n                </div>\n              </div>\n\n              \x3c!-- Education & Development --\x3e\n              <div class="col-span-2">\n                <div class="flex items-center gap-3 mb-4">\n                  <div class="w-10 h-10 rounded-xl bg-electric-600 flex items-center justify-center">\n                    <span class="text-white text-xl">🎓</span>\n                  </div>\n                  <label class="block text-2xl font-bold text-gray-800">Education & Development</label>\n                </div>\n                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">\n                  <div>\n                    <label for="education" class="block text-sm font-semibold text-gray-700 mb-2">Education</label>\n                    <textarea id="education" rows="4" required placeholder="List your educational background, degrees, and institutions..."\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>\n                  </div>\n\n                  <div>\n                    <label for="certifications" class="block text-sm font-semibold text-gray-700 mb-2">Certifications & Training</label>\n                    <textarea id="certifications" rows="3" placeholder="List relevant certifications and professional development..."\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>\n                  </div>\n\n                  <div>\n                    <label for="awards" class="block text-sm font-semibold text-gray-700 mb-2">Awards & Recognition</label>\n                    <textarea id="awards" rows="3" placeholder="Share awards, honors, and recognition..."\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>\n                  </div>\n \n                  <div>\n                    <label for="references" class="block text-sm font-semibold text-gray-700 mb-2">References</label>\n                    <textarea id="references" rows="3" placeholder="Provide references or leave blank to show \'Available upon request\'"\n                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            \x3c!-- Submit Button --\x3e\n            <div class="mt-10">\n              <button type="submit" \n                class="w-full bg-primary-600 hover:bg-primary-700 text-white py-5 px-8 rounded-2xl text-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">\n                <span class="flex items-center justify-center gap-3">\n                  <span> Generate My Professional CV</span>\n                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>\n                  </svg>\n                </span>\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  ';break;case"cv-result":s=(i=bc)?`\n    <div class="min-h-screen py-12">\n      <div class="container mx-auto px-4">\n        <div class="max-w-5xl mx-auto">\n          \x3c!-- Success Banner --\x3e\n          <div class="bg-gray-800 rounded-3xl p-8 mb-8 text-center border border-gray-700">\n            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-electric-500 mb-4">\n              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\n              </svg>\n            </div>\n            <h2 class="text-3xl font-bold text-white mb-2">Your CV is Ready! 🎉</h2>\n            <p class="text-gray-300 text-lg">Professionally crafted and ready to impress employers</p>\n          </div>\n\n          \x3c!-- CV Display --\x3e\n          <div class="bg-white rounded-3xl p-10 mb-8 border border-gray-200 shadow-sm" id="cv-container">\n            <div class="cv-content bg-white rounded-2xl p-8 shadow-inner" style="min-height: 600px;">\n              \x3c!-- CV Styles --\x3e\n              <style>\n                .cv-document { font-family: 'Georgia', 'Times New Roman', serif; color: #333; }\n                .cv-document h1 { font-size: 2rem; margin-bottom: 0.5rem; }\n                .cv-document h2 { font-size: 1.25rem; color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 0.5rem; margin-top: 1.5rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }\n                .cv-document h3 { font-size: 1.1rem; color: #444; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: 600; }\n                .cv-document p { text-align: justify; margin-bottom: 0.75rem; line-height: 1.7; }\n                .cv-document ul { list-style-type: none; padding-left: 0; margin-bottom: 1rem; }\n                .cv-document ul li { position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; text-align: justify; line-height: 1.6; }\n                .cv-document ul li:before { content: "▸"; position: absolute; left: 0; color: #667eea; font-weight: bold; }\n                .cv-document strong { color: #333; font-weight: 600; }\n                .cv-document em { font-style: italic; color: #666; }\n                .cv-body { text-align: justify; }\n                .cv-body > * { margin-bottom: 1rem; }\n              </style>\n              ${o=i.html,`\n  <div class="cv-document">\n      \x3c!-- Header Section --\x3e\n      <div class="cv-header text-center mb-8 pb-6 border-b-2 border-gray-300">\n        \x3c!-- Name --\x3e\n        <h1 class="text-4xl font-bold text-gray-900 mb-2 text-center">\n          ${(null==(a=i.formData)?void 0:a.fullName)||"Your Name"}\n        </h1>\n        \n        \x3c!-- Blue design line under name --\x3e\n        <div class="w-24 h-1 mx-auto bg-blue-500 mb-4"></div>\n        \n        \x3c!-- Contact Info --\x3e\n        <div class="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-700">\n          ${(null==a?void 0:a.contactInfo)?`<span class="flex items-center gap-1"> Contact: ${a.contactInfo}</span>`:""}\n          ${(null==a?void 0:a.address)?`<span class="flex items-center gap-1"> Location: ${a.address}</span>`:""}\n        </div>\n      </div>\n\n      \x3c!-- CV Content --\x3e\n      <div class="cv-body text-justify leading-relaxed">\n        ${o}\n      </div>\n    </div>\n  `}\n            </div>\n          </div>\n\n          \x3c!-- Action Buttons --\x3e\n          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">\n            <button id="download-cv" \n              class="bg-white border-2 border-gray-300 text-gray-800 py-5 px-8 rounded-2xl font-bold hover:shadow-lg hover:border-gray-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">\n              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\n              </svg>\n              <span>Download as PDF</span>\n            </button>\n            <button id="practice-interview" \n              class="bg-white border-2 border-gray-300 text-gray-800 py-5 px-8 rounded-2xl font-bold hover:shadow-lg hover:border-gray-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">\n              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8m8-8v8M3 21h18" />\n              </svg>\n              <span>Practice Interview</span>\n            </button>\n            <button id="view-matches" \n              class="bg-primary-600 hover:bg-primary-700 text-white py-5 px-8 rounded-2xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">\n              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\n              </svg>\n              <span>View Job Matches</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  `:'\n      <div class="min-h-screen py-12">\n        <div class="container mx-auto px-4">\n          <div class="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">\n            <div class="w-20 h-20 rounded-2xl bg-primary-600 flex items-center justify-center mx-auto mb-6">\n              <span class="text-4xl">📄</span>\n            </div>\n            <h1 class="text-3xl font-bold text-gray-800 mb-4">No CV Generated Yet</h1>\n            <p class="text-gray-600 text-lg">Let\'s create your professional CV to get started!</p>\n          </div>\n        </div>\n      </div>\n    ';break;case"job-matches":s=function({jobs:e}){return e&&0!==e.length?`\n    <div class="min-h-screen py-12">\n      <div class="container mx-auto px-4">\n        <div class="max-w-6xl mx-auto">\n          \x3c!-- Header --\x3e\n          <div class="bg-white rounded-3xl p-8 mb-8 border border-gray-200 shadow-sm">\n            <div class="flex flex-col md:flex-row justify-between items-center gap-4">\n              <div>\n                <h1 class="text-4xl font-black text-gray-900 mb-2">Your Perfect Matches</h1>\n                <p class="text-gray-600 text-lg">Found ${e.length} opportunities tailored for you</p>\n              </div>\n              <button id="back-to-cv" \n                class="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition-all flex items-center gap-2">\n                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>\n                </svg>\n                <span>Back to CV</span>\n              </button>\n            </div>\n          </div>\n          \n          \x3c!-- Job Grid --\x3e\n          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\n            ${e.map((e,t)=>`\n              <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all" style="animation-delay: ${.1*t}s">\n                \x3c!-- Job Header --\x3e\n                <div class="flex justify-between items-start mb-4">\n                  <div class="flex-1">\n                    <h2 class="text-2xl font-bold text-gray-900 mb-1">${e.title}</h2>\n                    <p class="text-primary-600 font-semibold text-lg">${e.company}</p>\n                  </div>\n                </div>\n                \n                \x3c!-- Job Details --\x3e\n                <div class="space-y-2 mb-5">\n                  <p class="text-gray-700 flex items-center gap-2">\n                    <span class="text-lg">📍</span>\n                    <span class="font-medium">${e.location||"Location not specified"}</span>\n                  </p>\n                  ${e.salary?`\n                  <p class="text-gray-700 flex items-center gap-2">\n                    <span class="text-lg">💰</span>\n                    <span class="font-medium">${e.salary}</span>\n                  </p>\n                  `:""}\n                </div>\n\n                \x3c!-- Job Description --\x3e\n                <div class="mb-5">\n                  <p class="text-gray-600 line-clamp-3">${e.description||"No description available."}</p>\n                </div>\n\n                ${e.tags&&e.tags.length>0?`\n                \x3c!-- Tags --\x3e\n                <div class="flex flex-wrap gap-2 mb-5">\n                  ${e.tags.slice(0,4).map(e=>`\n                    <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-semibold">\n                      ${e}\n                    </span>\n                  `).join("")}\n                  ${e.tags.length>4?`<span class="text-gray-500 text-xs">+${e.tags.length-4} more</span>`:""}\n                </div>\n                `:""}\n\n                \x3c!-- Apply Button --\x3e\n                <div class="border-t border-gray-200 pt-4">\n                  <a href="${e.url}" target="_blank" rel="noopener noreferrer"\n                    class="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02] text-center">\n                    Apply Now →\n                  </a>\n                </div>\n              </div>\n            `).join("")}\n          </div>\n        </div>\n      </div>\n    </div>\n  `:'\n      <div class="min-h-screen py-12">\n        <div class="container mx-auto px-4">\n          <div class="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">\n            <div class="w-20 h-20 rounded-2xl bg-accent-600 flex items-center justify-center mx-auto mb-6">\n              <span class="text-4xl">💼</span>\n            </div>\n            <h1 class="text-3xl font-bold text-gray-800 mb-4">No Job Matches Yet</h1>\n            <p class="text-gray-600 text-lg">Generate your CV first to discover amazing opportunities!</p>\n          </div>\n        </div>\n      </div>\n    '}({jobs:xc});break;case"interview-prep":s=function({questions:e,onAnswerSubmit:t}){return`\n    <div class="min-h-screen bg-gray-50 py-8">\n      <div class="container mx-auto px-4">\n        <div class="max-w-4xl mx-auto">\n          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">\n            <h1 class="text-3xl font-bold text-purple-800 mb-4">Interview Preparation</h1>\n            <p class="text-gray-600 mb-6">Practice answering these AI-generated questions tailored to your profile. Get instant feedback to improve your interview skills.</p>\n            \n            <div class="space-y-8">\n              ${e.split("\n\n").map((e,t)=>`\n                <div class="bg-purple-50 p-6 rounded-lg">\n                  <div class="prose max-w-none">\n                    ${e}\n                  </div>\n                  \n                  <div class="mt-4">\n                    <label class="block text-sm font-medium text-gray-700 mb-2">Your Answer</label>\n                    <textarea \n                      id="answer-${t}"\n                      rows="4"\n                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"\n                      placeholder="Type your answer here..."></textarea>\n                    \n                    <button \n                      onclick="submitAnswer(${t})"\n                      class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">\n                      Get Feedback\n                    </button>\n                  </div>\n                  \n                  <div id="feedback-${t}" class="mt-4 hidden">\n                    <h4 class="font-semibold text-gray-800 mb-2">Feedback</h4>\n                    <div class="bg-white p-4 rounded-lg prose max-w-none"></div>\n                  </div>\n                </div>\n              `).join("")}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  `}({questions:Ec})}var i,o,a;e.innerHTML=r+s,function(){const e=document.getElementById("login"),t=document.getElementById("signup"),n=document.getElementById("logout"),r=document.getElementById("go-pro-btn"),s=document.getElementById("logo-home");s&&s.addEventListener("click",()=>{wc=Ic?"cv-generator":"landing",Pc()});n&&n.addEventListener("click",async()=>{try{await Al(),Ic=null,_c=null,wc="landing",Ac(),Pc()}catch(e){kc(e.message,"error")}});r&&r.addEventListener("click",Nc);e&&e.addEventListener("click",()=>{const e=Rc('\n    <div class="bg-white rounded-3xl p-10 max-w-md w-full mx-4 border border-gray-200 shadow-xl modal-content">\n      <div class="text-center mb-8">\n        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600 mb-4">\n          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\n          </svg>\n        </div>\n        <h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>\n        <p class="text-gray-600">Sign in to continue your journey</p>\n      </div>\n      <form id="login-form" class="space-y-5">\n        <div>\n          <label for="login-email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>\n          <input type="email" id="login-email" required\n            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n        </div>\n        <div>\n          <label for="login-password" class="block text-sm font-semibold text-gray-700 mb-2">Password</label>\n          <input type="password" id="login-password" required\n            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n        </div>\n        <button type="submit" \n          class="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02]">\n          Sign In\n        </button>\n      </form>\n      <p class="mt-6 text-center text-sm text-gray-600">\n        Don\'t have an account? \n        <button id="show-register" class="text-primary-600 hover:text-primary-700 font-bold">Create one now</button>\n      </p>\n    </div>\n  '),n=e.querySelector("#login-form");n.addEventListener("submit",async t=>{t.preventDefault();const r=n.querySelector('button[type="submit"]');r.disabled=!0,r.innerHTML='<span class="flex items-center justify-center gap-2"><svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Signing in...</span>';try{const t=n.querySelector("#login-email").value,r=n.querySelector("#login-password").value;await async function(e,t){try{return(await S(wl,e,t)).user}catch(n){throw new Error(Cl(n))}}(t,r),e.remove(),kc("Welcome back!","success"),wc="cv-generator",Pc()}catch(s){kc(s.message,"error"),r.disabled=!1,r.innerHTML="Sign In"}}),e.querySelector("#show-register").addEventListener("click",()=>{e.remove(),t.click()})});t&&t.addEventListener("click",()=>{const t=Rc('\n    <div class="bg-white rounded-3xl p-10 max-w-md w-full mx-4 border border-gray-200 shadow-xl modal-content">\n      <div class="text-center mb-8">\n        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600 mb-4">\n          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>\n          </svg>\n        </div>\n        <h2 class="text-3xl font-bold text-gray-900 mb-2">Join Ispani AI</h2>\n        <p class="text-gray-600">Start your career transformation today</p>\n      </div>\n      <form id="register-form" class="space-y-5">\n        <div>\n          <label for="register-email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>\n          <input type="email" id="register-email" required\n            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n        </div>\n        <div>\n          <label for="register-password" class="block text-sm font-semibold text-gray-700 mb-2">Password</label>\n          <input type="password" id="register-password" required minlength="6"\n            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n        </div>\n        <div>\n          <label for="register-confirm-password" class="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>\n          <input type="password" id="register-confirm-password" required minlength="6"\n            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">\n        </div>\n        <button type="submit" \n          class="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02]">\n          Create Account\n        </button>\n      </form>\n      <p class="mt-6 text-center text-sm text-gray-600">\n        Already have an account? \n        <button id="show-login" class="text-primary-600 hover:text-primary-700 font-bold">Sign in</button>\n      </p>\n    </div>\n  '),n=t.querySelector("#register-form");n.addEventListener("submit",async e=>{e.preventDefault();const r=n.querySelector('button[type="submit"]');r.disabled=!0,r.innerHTML='<span class="flex items-center justify-center gap-2"><svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Creating account...</span>';try{const e=n.querySelector("#register-email").value,r=n.querySelector("#register-password").value;if(r!==n.querySelector("#register-confirm-password").value)throw new Error("Passwords do not match");await kl(e,r),t.remove(),kc("Account created! Your 24-hour free trial has started.","success"),wc="cv-generator",Pc()}catch(s){kc(s.message,"error"),r.disabled=!1,r.innerHTML="Create Account"}}),t.querySelector("#show-login").addEventListener("click",()=>{t.remove(),e.click()})});const i=document.getElementById("cv-form");i&&i.addEventListener("submit",async e=>{var t,n;if(e.preventDefault(),Tc)return;Tc=!0;const r=i.querySelector('button[type="submit"]'),s=r.innerHTML;r.innerHTML='\n        <span class="flex items-center justify-center gap-3">\n          <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">\n            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n          </svg>\n          <span>Generating Your CV...</span>\n        </span>\n      ',r.disabled=!0,Sc("Creating Your Professional CV","Our AI is crafting the perfect resume for you...");try{const e={fullName:i.querySelector("#fullName").value,address:i.querySelector("#address").value,contactInfo:i.querySelector("#contactInfo").value,jobType:(null==(t=i.querySelector("#jobType"))?void 0:t.value)||null,cvType:i.querySelector("#cvType").value,summary:i.querySelector("#summary").value,skills:Array.from(i.querySelector("#skills").selectedOptions).map(e=>e.value),experience:i.querySelector("#experience").value,education:i.querySelector("#education").value,certifications:i.querySelector("#certifications").value,awards:i.querySelector("#awards").value,references:(null==(n=i.querySelector("#references"))?void 0:n.value)||""},r=await async function(e){try{if(!e.fullName||!e.contactInfo||!e.summary)throw new Error("Missing required fields: Full Name, Contact Info, and Summary are required.");if(!e.skills||0===e.skills.length)throw new Error("At least one skill is required.");const t=`Generate a professional, well-structured CV in markdown format using this information:\n\n**Career Information:**\n- CV Type: ${e.cvType}\n- Field: ${e.field}\n- Job Type: ${e.jobType}\n\n**Content to Include:**\n- Professional Summary: ${e.summary}\n- Skills: ${e.skills.join(", ")}\n- Experience: ${e.experience}\n- Education: ${e.education}\n- Certifications: ${e.certifications||"N/A"}\n- Awards: ${e.awards||"N/A"}\n - References: ${e.references||"N/A"}\n\n**CRITICAL - DO NOT INCLUDE:**\n- DO NOT include a "# [Your Name]" header or any single # header at the top\n- DO NOT include any name/contact information headers\n- DO NOT include placeholder text like "[Your Name]", "[Your Phone Number]", "[Your Email]", "[Your LinkedIn Profile URL]", "[Your Portfolio/Website]"\n- The header section will be added automatically by the system\n- START DIRECTLY with "## Professional Summary"\n\n**IMPORTANT FORMATTING REQUIREMENTS:**\n1. Use ONLY double hash (##) for section headers - NO single hash (#) headers\n2. Structure the CV in this exact order, starting with these exact headers:\n   ## Professional Summary\n   ## Key Skills\n   ## Professional Experience\n   ## Education\n   ## Certifications & Training (if applicable)\n   ## Awards & Recognition (if applicable)\n  ## References (if applicable)\n   ## Additional Information (if relevant)\n\n3. For the Professional Summary section:\n   - Write 3-4 compelling sentences highlighting career objectives and unique value proposition\n   - Make it impactful and tailored to the ${e.cvType} role\n\n4. For Key Skills section:\n   - List skills in bullet points, grouped by category if possible\n   - Highlight the most relevant skills first\n\n5. For Professional Experience section:\n   - Format each role with job title, company, and dates\n   - Use bullet points for achievements and responsibilities\n   - Include quantifiable results where possible (e.g., "Increased sales by 25%")\n   - Start each bullet with strong action verbs\n\n6. For Education section:\n   - List degrees, institutions, and graduation dates\n   - Include relevant coursework or honors if applicable\n\n7. Make the CV:\n   - Professional and formal in tone\n   - Concise yet comprehensive\n   - ATS-friendly with relevant keywords\n   - Tailored for ${e.cvType} positions in ${e.field}\n\nGenerate a polished, recruiter-ready CV that would stand out in today's competitive job market.`,n=await gc.generateContent(t);return{cv:(await n.response).text(),formData:e,jobMatches:await pc({summary:e.summary,skills:e.skills,experience:e.experience,jobType:e.jobType})}}catch(t){throw new Error(`Failed to generate CV: ${t.message}`)}}(e);bc={markdown:r.cv,html:mc(r.cv),formData:e},xc=await async function(e="software developer"){const t=`https://api.adzuna.com/v1/api/jobs/za/search/1?app_id=50f33641&app_key=41178ebea8323e7b56402fad09f73ef4&results_per_page=10&what=${encodeURIComponent(e)}`;try{const e=await fetch(t);if(!e.ok)throw new Error(`API request failed: ${e.status} - ${e.statusText}`);const n=await e.json();return n.results&&0!==n.results.length?n.results.map(e=>{var t,n,r;return{title:e.title,company:(null==(t=e.company)?void 0:t.display_name)||"Unknown",location:(null==(n=e.location)?void 0:n.display_name)||"Location not provided",description:e.description,tags:(null==(r=e.category)?void 0:r.label)?e.category.label.split(", "):[],url:e.redirect_url}}):[]}catch(n){return[]}}(e.cvType),Cc(),kc("CV generated successfully!","success"),wc="cv-result",Pc()}catch(o){Cc(),kc("Error generating CV: "+o.message,"error"),r.innerHTML=s,r.disabled=!1}finally{Tc=!1}});const o=document.getElementById("view-matches");o&&o.addEventListener("click",()=>{wc="job-matches",Pc()});const a=document.getElementById("practice-interview");a&&a.addEventListener("click",async()=>{if(bc&&bc.formData){Sc("Generating Interview Questions","AI is creating tailored questions...");try{const e=bc.formData,t=await async function(e){try{const t=vc.replace("{profile}",JSON.stringify(e)),n=await yc.generateContent(t);return(await n.response).text()}catch(t){throw new Error("Failed to generate interview questions")}}(e);Ec=t||"No questions generated",Cc(),kc("Interview questions are ready","success"),wc="interview-prep",Pc()}catch(e){Cc(),kc("Error generating interview questions: "+(e.message||e),"error")}}else kc("Generate a CV first to get tailored questions","error")});const l=document.getElementById("download-cv");l&&l.addEventListener("click",()=>{bc&&bc.formData?(l.innerHTML='\n          <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">\n            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>\n          </svg>\n          <span>Generating PDF...</span>\n        ',setTimeout(()=>{try{!function(e){const t=document.querySelector(".cv-content .cv-document")||document.querySelector(".cv-content");if(!t)return void alert("CV content not found");const n=new k({orientation:"portrait",unit:"mm",format:"a4"}),r=n.internal.pageSize.getWidth(),s=n.internal.pageSize.getHeight(),i=10,o=r-20;let a=i;n.setFont("helvetica");const l=t.querySelector(".cv-header h1"),c=(null==e?void 0:e.fullName)||l&&l.textContent.trim()||"Your Name";n.setFontSize(20),n.setFont("helvetica","bold"),n.text(c,r/2,a+8,{align:"center"}),a+=14;const u=(null==e?void 0:e.cvType)?`${e.cvType.charAt(0).toUpperCase()+e.cvType.slice(1)}`:"";u&&(n.setFontSize(11),n.setFont("helvetica","normal"),n.text(u,r/2,a,{align:"center"}),a+=8);const h=[];(null==e?void 0:e.contactInfo)&&h.push(e.contactInfo),(null==e?void 0:e.address)&&h.push(e.address);const d=h.join(" | ");function f(e,t={}){const r=(e||"").replace(/\s+/g," ").trim();if(!r)return;const l=!!t.justify,c=t.x??i,u=t.width??o,h=!!t.bold,d=!!t.italic;let f="normal";if(h&&d?f="bolditalic":h?f="bold":d&&(f="italic"),l){const e=n.splitTextToSize(r,u);e.forEach((t,r)=>{if(a>s-25&&(n.addPage(),a=i),n.setFontSize(10),n.setFont("helvetica",f),n.setTextColor(40,40,40),r===e.length-1)n.text(t,c,a,{align:"left"});else{const e=t.split(" ").filter(Boolean),r=n.getTextWidth(t),s=Math.max(e.length-1,1),i=(u-r)/s;let o=c;e.forEach(e=>{n.text(e,o,a,{align:"left"});const t=n.getTextWidth(e),r=n.getTextWidth(" ");o+=t+r+i})}a+=5}),a+=2}else n.splitTextToSize(r,u).forEach(e=>{a>s-25&&(n.addPage(),a=i),n.setFontSize(10),n.setFont("helvetica",f),n.setTextColor(40,40,40),n.text(e,c,a,{align:"left"}),a+=5}),a+=2}d&&(n.setFontSize(9),n.setTextColor(80,80,80),n.text(d,r/2,a,{align:"center"}),a+=10),n.setDrawColor(200,200,200),n.setLineWidth(.5),n.line(i,a,r-i,a),a+=8,function e(t,l={}){const c=l.x??i,u=l.width??o;if(!t)return;if(t.nodeType===Node.TEXT_NODE){let e=!1,n=!1,r=t.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE;){const t=r.tagName;"STRONG"!==t&&"B"!==t||(e=!0),"EM"!==t&&"I"!==t||(n=!0),r=r.parentNode}return void f(t.textContent||"",{bold:e,italic:n,x:c,width:u})}if(t.nodeType!==Node.ELEMENT_NODE)return;const h=t.tagName;if("STYLE"!==h&&"SCRIPT"!==h){if(/H[1-6]/.test(h)){const e=t.textContent.trim();if(!e)return;return a+=3,n.setFontSize("H2"===h?12:11),n.setFont("helvetica","bold"),n.setTextColor(60,120,200),n.splitTextToSize(e.toUpperCase(),o).forEach(e=>{a>s-25&&(n.addPage(),a=i),n.text(e,i,a),a+=5}),n.setDrawColor(180,200,230),n.setLineWidth(.3),n.line(i,a-2,r-i,a-2),void(a+=5)}if("P"===h){const e=t.textContent.trim();if(!e)return;let n=t.previousElementSibling,r=!1;for(;n;){if(/H[1-6]/.test(n.tagName)){(n.textContent||"").toLowerCase().includes("professional summary")&&(r=!0);break}n=n.previousElementSibling}return void(r?f(e,{justify:!0,x:i,width:o}):f(e))}if("DIV"!==h&&"SECTION"!==h&&"MAIN"!==h){if("UL"===h||"OL"===h)return Array.from(t.children).filter(e=>"LI"===e.tagName).forEach(t=>{t.textContent.trim()&&(a>s-25&&(n.addPage(),a=i),n.setFontSize(10),n.setFont("helvetica","normal"),n.setTextColor(40,40,40),n.text("•",12,a),e(t,{x:18,width:o-8}),a+=2)}),void(a+=2);Array.from(t.childNodes).forEach(t=>e(t,{x:c,width:u}))}else{if(t.classList&&t.classList.contains("cv-header"))return;Array.from(t.childNodes).forEach(t=>e(t))}}}(t);const p=n.internal.getNumberOfPages();for(let g=1;g<=p;g++)n.setPage(g),n.setFontSize(8),n.setTextColor(130,130,130),n.text(`Page ${g} of ${p} — Ispani`,r/2,s-10,{align:"center"});const m=(null==e?void 0:e.fullName)?`${e.fullName.replace(/\s+/g,"_")}_CV.pdf`:"Professional_CV.pdf";n.save(m)}(bc.formData),kc("CV downloaded successfully!","success")}catch(e){kc("Error downloading CV: "+e.message,"error")}l.innerHTML='\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\n            </svg>\n            <span>Download as PDF</span>\n          '},100)):kc("No CV data available","error")});const c=document.getElementById("back-to-cv");c&&c.addEventListener("click",()=>{wc="cv-result",Pc()});window.submitAnswer=async function(e){var t;const n=document.getElementById(`answer-${e}`),r=null==(t=null==n?void 0:n.value)?void 0:t.trim();if(!r)return void kc("Please type your answer before requesting feedback","warning");const s=(((Ec||"").split("\n\n")[e]||"").split("\n")[0]||"").replace(/^\s*\d+\.?\s*/,"").trim();Sc("Evaluating answer","AI is providing feedback...");try{const t=await async function(e,t){try{const n=`As an expert interviewer, evaluate this interview answer focusing on:\n    1. Clarity and structure\n    2. Specific examples provided\n    3. Leadership qualities demonstrated\n    4. Areas for improvement\n    5. Suggested follow-up response\n\n    Question: ${e}\n    Answer: ${t}\n\n    Provide constructive feedback that empowers the candidate while identifying growth opportunities.`,r=await yc.generateContent(n);return(await r.response).text()}catch(n){throw new Error("Failed to evaluate answer")}}(s,r),n=document.getElementById(`feedback-${e}`);if(n){n.classList.remove("hidden");const e=n.querySelector("div");e&&(e.innerHTML=t)}Cc()}catch(i){Cc(),kc("Error evaluating answer: "+(i.message||i),"error")}}}()}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search);"true"===e.get("success")?(kc("Payment successful! Your subscription is now active.","success"),window.history.replaceState({},document.title,window.location.pathname)):"true"===e.get("cancelled")&&(kc("Payment was cancelled. You can try again anytime.","info"),window.history.replaceState({},document.title,window.location.pathname)),Pc(),wl.onAuthStateChanged(async e=>{Ic=e,e?(_c=await Il(e.uid),"landing"===wc&&(wc="cv-generator"),Pc(),_c.hasAccess||function(){const e=document.getElementById("paywall-modal");e&&e.remove();const t=document.createElement("div");t.id="paywall-modal",t.className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]",t.innerHTML=function(){const e={amount:50,currency:"ZAR",formatted:"R50/month"};return`\n    <div class="glass rounded-3xl p-8 max-w-md mx-4 border-2 border-white/30 text-center">\n      <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">\n        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>\n        </svg>\n      </div>\n      \n      <h2 class="text-2xl font-bold text-gray-800 mb-2">Your Free Trial Has Ended</h2>\n      <p class="text-gray-600 mb-6">\n        We hope you enjoyed your 24-hour trial! Subscribe now to continue using all features.\n      </p>\n      \n      <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 mb-6 border border-primary-200">\n        <div class="text-4xl font-black text-primary-600 mb-1">${e.formatted}</div>\n        <div class="text-gray-500 text-sm">Full access to all features</div>\n        \n        <ul class="mt-4 space-y-2 text-left">\n          <li class="flex items-center gap-2 text-gray-700">\n            <span class="text-emerald-500">✓</span> AI-Powered CV Generation\n          </li>\n          <li class="flex items-center gap-2 text-gray-700">\n            <span class="text-emerald-500">✓</span> Job Matching & Career Paths\n          </li>\n          <li class="flex items-center gap-2 text-gray-700">\n            <span class="text-emerald-500">✓</span> Interview Preparation\n          </li>\n          <li class="flex items-center gap-2 text-gray-700">\n            <span class="text-emerald-500">✓</span> Unlimited CV Downloads\n          </li>\n        </ul>\n      </div>\n      \n      <button id="subscribe-btn" class="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 pulse-btn">\n        Subscribe Now - ${e.formatted}\n      </button>\n      \n      <p class="mt-4 text-xs text-gray-500">\n        Secure payment powered by Stripe. Cancel anytime.\n      </p>\n      \n      <button id="logout-from-paywall" class="mt-4 text-gray-500 hover:text-gray-700 text-sm underline">\n        Sign out\n      </button>\n    </div>\n  `}(),document.body.appendChild(t);const n=t.querySelector("#subscribe-btn");n&&n.addEventListener("click",Nc);const r=t.querySelector("#logout-from-paywall");r&&r.addEventListener("click",async()=>{await Al(),t.remove()})}()):(Ic=null,_c=null,wc="landing",Ac(),Pc())})});
