(()=>{"use strict";const e=()=>{const e=document.querySelector("#currentPage"),t=document.createElement("h2");t.textContent="Big Daddy's BBQ!",e.appendChild(t),t.style="color: red; font-size: 3rem";const n=document.createElement("p");n.textContent="Holy cow, this BBQ is good. Don't take our word for it, check out the reviews on our About Page.",e.appendChild(n);const o=document.createElement("img");o.src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",e.appendChild(o),o.style="width: 444px; aspect-ratio: 1/1"},t=e=>{const t=document.createElement("div");return t.classList.add("tab"),t.textContent=e,t.setAttribute("id",`tab${e}`),t},n=()=>{const e=document.querySelector("#currentPage"),t=document.createElement("h2");t.textContent="Menu",e.appendChild(t),t.style="color: red; font-size: 3rem";const n=document.createElement("p");n.textContent="Here is our menu. It doesn't make much sense, but that's the beauty of it!",e.appendChild(n);const o=document.createElement("ul"),c=document.createElement("li");c.textContent="Brisket...yum! (14.99)",o.appendChild(c);const d=document.createElement("li");d.textContent="Pulled Pork...yay! (12.99)",o.appendChild(d);const a=document.createElement("li");a.textContent="Corn Bread...golly! (3.50)",o.appendChild(a),e.appendChild(o);const r=document.createElement("img");r.src="https://images.unsplash.com/photo-1523986490752-c28064f26be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",e.appendChild(r),r.style="width: 444px; aspect-ratio: 1/1"},o=()=>{const e=document.querySelector("#currentPage"),t=document.createElement("h2");t.textContent="Contact",e.appendChild(t),t.style="color: red; font-size: 3rem";const n=document.createElement("p");n.textContent="We would love to hear from you! Get ahold of us to inquire about catering, reservations or just to say hi!",e.appendChild(n);const o=document.createElement("p");o.textContent="Phone: 424-397-2901",e.appendChild(o);const c=document.createElement("p");c.textContent="Jimz@bigdaddyBBQ.art",e.appendChild(c);const d=document.createElement("img");d.src="https://images.unsplash.com/photo-1551978027-76ccba5cf302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80",e.appendChild(d),d.style="width: 444px; aspect-ratio: 1/1"};console.log(e),(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("navContainer"),n.appendChild(t("Contact")),n.appendChild(t("Menu")),n.appendChild(t("Home")),e.appendChild(n)})();const c=document.createElement("div");c.setAttribute("id","currentPage"),document.querySelector("#content").appendChild(c),e();const d=e=>e();document.querySelector("#tabHome").addEventListener("click",(t=>{t.preventDefault(),c.innerHTML="",d(e)})),document.querySelector("#tabMenu").addEventListener("click",(e=>{e.preventDefault(),c.innerHTML="",d(n)})),document.querySelector("#tabContact").addEventListener("click",(e=>{e.preventDefault(),c.innerHTML="",d(o)}))})();