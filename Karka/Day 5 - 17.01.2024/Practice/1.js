 text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(text.length);
text = "HELLO WORLD"
console.log(text.charAt(0));
text = "HELLO WORLD"
console.log(text.at(2));
text = "HELLO WORLD"
console.log(text.charCodeAt(0));
text = "Apple, Banana, Kiwi"
console.log(text.slice(7, 13));
text = "Apple, Banana, Kiwi"
console.log(text.slice(7));
text = "Apple, Banana, Kiwi"
console.log(text.slice(-12));
text = "Apple, Banana, Kiwi"
console.log(text.slice(-12, -6));
console.log(str.substring(7,13));
text = "Hello World"
console.log(text.toUpperCase());
console.log(text.toLowerCase());



text = "5"
console.log(text.padStart(4, "0"));
text = "5"
console.log(text.padStart(4, "x"));
text = "5"
console.log(text.padEnd(4, "0"));
text = "5"
console.log(text.padEnd(4, "x"));
numb = 5
text = numb.toString()
console.log(text.padEnd(4, "0"));
numb = 5
text = numb.toString()
console.log(text.padStart(4, "0"));
text = "Hello World"
console.log(text.repeat(2));
text = "Hello World"
console.log(text.repeat(4));
text = "Please visit Microsoft"
console.log(text.replace("Microsoft","W3Schools"));
text = "Please visit Microsoft and Microsoft"
console.log(text.replace("Microsoft","W3Schools"));
text = "Please visit Microsoft"
console.log(text.replace("MICROSOFT","W3Schools"));
text = "Please visit Microsoft"
console.log(text.replace(/MICROSOFT/i,"W3Schools"));
text = "Please visit Microsoft and Microsoft"
console.log(text.replace(/Microsoft/g,"W3Schools"));
text = "cats are cats and dogs"
console.log(text.replaceAll("cats","monkey"));
text = "cats are cats and dogs"
console.log(text.replaceAll(/cats/g,"dogs"));
fruits = ["Banana", "Apple", "Kiwi", "Grapes"]
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.at(2));
console.log(fruits[2]);
console.log(fruits.join(" * "));
console.log(fruits.pop());
console.log(fruits.push("Kiwi"));
