# JavaScript DOM Manipulation Exercise Answers

## Beginner Level

1.  
```js
document.getElementById("intro").textContent = "Hello, world!";
```
2.  
```js
document.querySelectorAll("h1").forEach(h1 => h1.style.color = "blue");
```
3.  
```js
document.querySelector(".click-me").style.backgroundColor = "yellow";
```

---

## Slightly Harder

4.  
```js
document.getElementById("greetBtn").addEventListener("click", () => alert("Hi!"));
```
5.  
```js
document.querySelector("ul li").style.fontWeight = "bold";
```
6.  
```js
document.getElementById("username").value = "JohnDoe";
```

---

## Getting Comfortable

7.  
```js
document.getElementById("changeTitle").onclick = () => {
  document.getElementById("mainTitle").textContent = "New Title";
};
```
8.  
```js
document.querySelector(".box").addEventListener("click", function() {
  this.classList.toggle("highlight");
});
```
9.  
```js
document.getElementById("mainImg").src = "cat.jpg";
```

---

## More Practice

10.  
```js
document.getElementById("hideBtn").onclick = () => {
  document.querySelector(".secret").style.display = "none";
};
```
11.  
```js
document.querySelector("button").onclick = () => {
  alert(document.querySelector(".userInput").value);
};
```
12.  
```js
document.getElementById("submitBtn").onclick = function() {
  this.disabled = true;
};
```

---

## Traversing and Updating

13.  
```js
document.querySelectorAll("#list li").forEach(li => li.style.color = "green");
```
14.  
```js
document.getElementById("info").parentElement.style.border = "1px solid black";
```
15.  
```js
document.querySelectorAll(".remove-me").forEach(el => el.remove());
```

---

## Creating and Appending

16.  
```js
const p = document.createElement("p");
p.textContent = "New Paragraph";
document.getElementById("container").appendChild(p);
```
17.  
```js
const opt = document.createElement("option");
opt.text = "Banana";
document.getElementById("fruits").appendChild(opt);
```
18.  
```js
const li = document.createElement("li");
li.textContent = "Four";
document.getElementById("numbers").appendChild(li);
```

---

## Event Handling

19.  
```js
document.getElementById("hoverImg").addEventListener("mouseover", function() {
  this.style.borderColor = "red";
});
```
20.  
```js
document.getElementById("search").addEventListener("keyup", function() {
  console.log(this.value);
});
```
21.  
```js
document.querySelector(".card").addEventListener("dblclick", function() {
  this.style.backgroundColor = "red";
});
```

---

## Classes and Styles

22.  
```js
document.getElementById("popup").classList.add("visible");
```
23.  
```js
document.querySelectorAll(".hidden").forEach(el => el.classList.remove("hidden"));
```
24.  
```js
document.querySelector("button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
```

---

## Attributes and Data

25.  
```js
document.getElementById("statusBtn").setAttribute("data-active", "true");
```
26.  
```js
console.log(document.getElementById("externalLink").getAttribute("href"));
```
27.  
```js
document.querySelector(".email-input").placeholder = "Enter your email";
```

---

## Advanced Manipulation

28.  
```js
document.getElementById("removeMe").remove();
```
29.  
```js
const clone = document.querySelector(".template").cloneNode(true);
document.getElementById("templates").appendChild(clone);
```
30.  
```js
const item = document.getElementById("item2");
item.parentNode.appendChild(item);
```

---

## Loops and Multiple Elements

31.  
```js
document.querySelectorAll("li").forEach((li, i) => {
  if (i % 2 === 1) li.classList.add("even");
});
```
32.  
```js
document.querySelectorAll("img").forEach(img => img.alt = "Sample image");
```
33.  
```js
document.querySelectorAll(".hideable").forEach(el => el.style.display = "none");
```

---

## Input and Form Handling

34.  
```js
document.querySelector("form").onsubmit = function(e) {
  e.preventDefault();
  alert(document.getElementById("userInput").value);
};
```
35.  
```js
if (!document.getElementById("agree").checked) alert("Please agree!");
```
36.  
```js
document.querySelector(".message").value = "Hello!";
```

---

## Filtering and Searching

37.  
```js
document.querySelectorAll("li").forEach(li => {
  li.style.display = li.textContent.includes("apple") ? "" : "none";
});
```
38.  
```js
document.querySelectorAll("div").forEach((div, i) => {
  if (i % 2 === 1) div.style.background = "lightgray";
});
```
39.  
```js
document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
```

---

## Timers and Animation

40.  
```js
setTimeout(() => {
  document.getElementById("flashMsg").style.display = "none";
}, 2000);
```
41.  
```js
setInterval(() => {
  document.querySelector("span").textContent = new Date().toLocaleTimeString();
}, 1000);
```
42.  
```js
const progress = document.getElementById("progress");
progress.style.transition = "width 1s";
progress.style.width = "100%";
```

---

## Templates and InnerHTML

43.  
```js
document.getElementById("output").innerHTML = "<b>Success!</b>";
```
44.  
```js
document.getElementById("myTable").insertRow().innerHTML = "<td>Name</td><td>Age</td>";
```
45.  
```js
document.getElementById("replaceMe").textContent = "Replaced!";
```

---

## More Events

46.  
```js
document.getElementById("city").addEventListener("change", function() {
  alert(this.value);
});
```
47.  
```js
document.querySelectorAll(".btn").forEach(btn =>
  btn.addEventListener("click", function() {
    console.log(this.textContent);
  })
);
```
48.  
```js
document.getElementById("focusMe").addEventListener("focus", function() {
  this.style.border = "2px solid green";
});
```

---

## Practical Challenges

49.  
```js
let count = 0;
document.querySelector("button").onclick = () => {
  document.querySelector("span").textContent = ++count;
};
```
50.  
```js
document.getElementById("addBtn").onclick = () => {
  const li = document.createElement("li");
  li.textContent = document.getElementById("todoInput").value;
  document.getElementById("todoList").appendChild(li);
};
```
51.  
```js
const pwd = document.getElementById("password");
document.getElementById("showPwdBtn").onclick = () => {
  pwd.type = pwd.type === "password" ? "text" : "password";
};
```

---

## Intermediate

52.  
```js
document.querySelectorAll("p").forEach(p => {
  if (p.textContent.includes("important")) p.classList.add("highlight");
});
```
53.  
```js
alert(document.querySelectorAll("#main div").length);
```
54.  
```js
document.querySelectorAll("img").forEach(img => {
  img.onerror = () => { img.src = "placeholder.jpg"; };
});
```

---

## DOM Traversal

55.  
```js
const next = document.getElementById("current").nextElementSibling;
if (next) next.style.color = "red";
```
56.  
```js
document.querySelectorAll(".group").forEach(grp =>
  Array.from(grp.children).forEach(child => child.classList.add("child"))
);
```
57.  
```js
const ancestor = document.getElementById("submitBtn").closest(".wrapper");
```

---

## Complex Event Handling

58.  
```js
document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") alert(e.target.textContent);
});
```
59.  
```js
document.addEventListener("click", function(e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach(d => d.style.display = "none");
  }
});
```
60.  
```js
document.querySelectorAll("img").forEach(img =>
  img.addEventListener("contextmenu", e => e.preventDefault())
);
```

---

## Advanced Form Manipulation

61.  
```js
document.getElementById("addFieldBtn").onclick = () => {
  const input = document.createElement("input");
  document.getElementById("form").appendChild(input);
};
```
62.  
```js
document.getElementById("form").onsubmit = function(e) {
  e.preventDefault();
  let valid = true;
  const email = this.email.value, pwd = this.password.value;
  if (!email.includes("@")) { valid = false; this.email.nextElementSibling.textContent = "Invalid email"; }
  if (pwd.length < 6) { valid = false; this.password.nextElementSibling.textContent = "Password too short"; }
  if (valid) this.submit();
};
```
63.  
```js
const ta = document.querySelector("textarea");
const cnt = document.getElementById("charCount");
ta.addEventListener("input", () => cnt.textContent = ta.value.length);
```

---

## Dynamic Content

64.  
```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(r => r.json())
  .then(data => {
    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      document.getElementById("userList").appendChild(li);
    });
  });
```
65.  
```js
document.getElementById("loadMoreBtn").onclick = () => {
  // Add more items to the list (simulate or fetch)
  // Example:
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
};
```
66.  
```js
document.querySelectorAll(".thumb").forEach(img => {
  img.onclick = () => {
    document.getElementById("largeImg").src = img.src;
  };
});
```

---

## Modal, Tooltip, and Popups

67.  
```js
const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = () => modal.style.display = "block";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
```
68.  
```js
const tip = document.getElementById("tooltip");
document.getElementById("infoIcon").onmouseover = () => tip.style.display = "block";
document.getElementById("infoIcon").onmouseout = () => tip.style.display = "none";
```
69.  
```js
document.getElementById("dropdownBtn").onclick = e => {
  document.getElementById("dropdownMenu").style.display = "block";
  e.stopPropagation();
};
document.addEventListener("click", () => {
  document.getElementById("dropdownMenu").style.display = "none";
});
```

---

## CSS Manipulation

70.  
```js
document.getElementById("toggleTheme").onclick = () => document.body.classList.toggle("dark-theme");
```
71.  
```css
/* CSS: */
button:hover { transform: scale(1.2); transition: transform 0.3s; }
```
72.  
```js
document.getElementById("bigTextBtn").onclick = () => {
  document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(h => h.style.fontSize = "2em");
};
```

---

## Storage and Persistence

73.  
```js
const input = document.getElementById("name");
input.onchange = () => localStorage.setItem("name", input.value);
window.onload = () => { input.value = localStorage.getItem("name") || ""; };
```
74.  
```js
const sidebar = document.getElementById("sidebar");
sidebar.classList.toggle(localStorage.getItem("sidebar") === "open" ? "open" : "closed");
sidebar.onclick = () => {
  const open = sidebar.classList.toggle("open");
  localStorage.setItem("sidebar", open ? "open" : "closed");
};
```
75.  
```js
const theme = localStorage.getItem("theme");
if (theme) document.body.className = theme;
document.getElementById("themeBtn").onclick = () => {
  document.body.className = "dark";
  localStorage.setItem("theme", "dark");
};
```

---

## Advanced Traversal and Manipulation

76.  
```js
document.querySelectorAll("p").forEach(p => { if (!p.textContent.trim()) p.remove(); });
```
77.  
```js
const words = document.getElementById("text").textContent.split(/\s+/);
const longest = words.reduce((a, b) => a.length > b.length ? a : b, "");
document.getElementById("text").innerHTML = document.getElementById("text").textContent.replace(longest, `<mark>${longest}</mark>`);
```
78.  
```js
const count = Array.from(document.querySelectorAll(".item")).filter(el => el.offsetParent !== null).length;
```

---

## Accessibility

79.  
```js
document.querySelector("input").setAttribute("aria-label", "Description");
```
80.  
```js
document.getElementById("skip").onclick = () => document.getElementById("main").focus();
```
81.  
```js
document.querySelectorAll(".nav-link").forEach((el, i) => el.tabIndex = i + 1);
```

---

## Final Challenges

82.  
```js
document.querySelectorAll(".accordion-header").forEach(header => {
  header.onclick = () => {
    header.nextElementSibling.classList.toggle("open");
  };
});
```
83.  
```js
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
    document.getElementById(tab.dataset.target).style.display = "block";
  };
});
```
84.  
```js
const banner = document.getElementById("notifBanner");
if (!localStorage.getItem("bannerDismissed")) banner.style.display = "block";
document.getElementById("closeBanner").onclick = () => {
  banner.style.display = "none";
  localStorage.setItem("bannerDismissed", "1");
};
```

---

## Bonus: Mastery

85.  
```js
let idx = 0, imgs = document.querySelectorAll(".slider img");
function show(idx) { imgs.forEach((img, i) => img.style.display = i === idx ? "block" : "none"); }
document.getElementById("next").onclick = () => { idx = (idx + 1) % imgs.length; show(idx); };
document.getElementById("prev").onclick = () => { idx = (idx - 1 + imgs.length) % imgs.length; show(idx); };
show(idx);
```
86.  
```js
document.getElementById("sortBtn").onclick = () => {
  const list = document.getElementById("sortList");
  Array.from(list.children)
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => list.appendChild(li));
};
```
87.  
```js
// Use HTML5 Drag & Drop API; see: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API for full example
```
88.  
```js
document.getElementById("searchInput").oninput = function() {
  const val = this.value.toLowerCase();
  document.querySelectorAll("#list li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(val) ? "" : "none";
  });
};
```
89.  
```js
const data = [ { name: "Alice", age: 30 }, { name: "Bob", age: 25 } ];
const tbl = document.getElementById("dataTable");
tbl.innerHTML = "<tr><th>Name</th><th>Age</th></tr>" +
  data.map(d => `<tr><td>${d.name}</td><td>${d.age}</td></tr>`).join("");
// Add sorting
```
90.  
```js
const term = "search";
const p = document.querySelector("p");
p.innerHTML = p.textContent.replace(new RegExp(term, "gi"), m => `<mark>${m}</mark>`);
```

---

*You’ve got this!*