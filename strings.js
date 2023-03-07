//last 4 characters
let a = "beautiful";
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);


//insert a string

const b = "I was feeling hungry today";
  let newIndex=5;
let output= b.slice(0,newIndex) + "eat";
console.log(output);

//count
"the"
"brown"
const story= "The quick brown fox jumps over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);

//find words
const string1 = "We are  now going to school";
 findstring = "now";
 if(findstring){
  console.log(true);
 }
 else{
  console.log(false);
 }
 const string2 ="The child was sitting on the table before it fell";
   find="sitting";
   if(find){
    console.log(true);
   }
   else{
    console.log(false);
   }

//uppercase 
let c = "wonderful";
let d = c.toUpperCase();
console.log(d);

//lowercase
let e = "amazing";
   e1= e.toLowerCase();
   console.log(e1);
   let f= "BEneath";
   f1= f.toLowerCase()
   console.log(f1)

//title case
  let g="A beautiful wedding";
  g=g.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
     console.log(g);


