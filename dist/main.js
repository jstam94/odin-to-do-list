(()=>{"use strict";class s{constructor(s,t,o,e,l){this.title=s,this.description=t,this.dueDate=o,this.priorty=e,this.notes=l,this.isComplete=!1,this.inProgess=!1}}let t=new class{constructor(s,t){this.name=s,this.description=t,this._tasks=["hello from tasklist"]}addTask(t,o,e,l,i){const a=new s(t,o,e,l,i);this._tasks.push(a),console.log("addTask called")}removeTask(s){console.log(this.tasks)}get tasks(){return this._tasks}}("test","test");console.log(t),t.removeTask(),console.log(t.tasks),console.log(t.tasks),t.addTask("1",2,3,4,5,null),console.log(t.tasks)})();