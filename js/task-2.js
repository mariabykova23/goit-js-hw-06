"use strict";

class Storage{
  constructor (items){
    this.items=items;
  }

  getItems(){
    return this.items;
  }

  addItem(newItem){
    return this.items.push(newItem)
  }

  removeItem(itemToRemove){
    let indexToRemove=this.items.indexOf(itemToRemove);
    if (this.items.includes(itemToRemove))
    return this.items.splice(indexToRemove,1);
}
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
