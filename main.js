import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("snake");
list.append("cow");
list.append("fox");
list.append("hamster");
list.append("cat");

console.log(list.toString());

console.log("Size:", list.size());
console.log("Head:", list.head()?.value);
console.log("Tail:", list.tail()?.value);
console.log("At index 2:", list.at(2)?.value);
console.log("Contains 'cat':", list.contains("cat"));
console.log("Find 'hamster':", list.find("hamster"));

list.pop();
console.log("After pop:", list.toString());

list.insertAt("lizard", 2);
console.log("After inserstAt(2):", list.toString());

list.removeAt(3);
console.log("After removeAt(3):", list.toString());

