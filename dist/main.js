(()=>{"use strict";class t{constructor(t,e,s,a,o){this.title=t,this.description=e,this.dueDate=s,this.priorty=a,this.notes=o,this.isComplete=!1,this.inProgess=!1}testMethod(){console.log("Test Method to confirm inheritance")}}class e{constructor(t,e){this.name=t,this.description=e,this._tasks=[]}addTask(e,s,a,o,r){const c=new t(e,s,a,o,r);this._tasks.push(c)}removeTask(t){console.log(this.tasks)}get tasks(){return this._tasks}}let s=[];function a(t,a){s.push(new e(t,a))}localStorage.savedData?s=function(){let s=JSON.parse(localStorage.savedData);return s.forEach((s=>{Object.setPrototypeOf(s,e.prototype),s.tasks.forEach((e=>{Object.setPrototypeOf(e,t.prototype)}))})),s}():(a("Project 1","I am the first example"),a("Project 2","I am the second example"),a("Project 3","I am the third example"),s.forEach((t=>{t.addTask("Task 1 ","I am the first task","Test Date","Prio","bla lob law"),t.addTask("Task 2 ","I am the second task","Test Date","Prio","bla lob law"),t.addTask("Task 3 ","I am the third task","Test Date","Prio","bla lob law")}))),function(){document.querySelector(".save").addEventListener("click",(()=>(localStorage.savedData=JSON.stringify(s),void JSON.parse(localStorage.savedData).forEach((t=>{Object.setPrototypeOf(t,e.prototype)}))))),document.querySelector(".test").addEventListener("click",(()=>{console.log("Logging Data",s),t.innerHTML="",s.forEach((e=>{const s=document.createElement("li");s.textContent=e.name,t.appendChild(s)}))}));const t=document.querySelector(".sidebar")}()})();