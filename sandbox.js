/*To get the values to see what is inside the tag we use 'innerHTML attribute'*/

const value = "JavaScript_Selectors";
console.log(value);

//selecting the tag and text Inside tag by using document.querySelector();
console.log('selecting the tag and text Inside tag by using document.querySelector()');
const valueOne = document.querySelector('.one');
console.log(valueOne);//gets tag
console.log(valueOne.innerHTML);

//selecting same class name for different tag
const valueOne2 = document.querySelector('div.one');
console.log(valueOne2.innerHTML);

//selecting all the classes by using document.querySelectorAll();
console.log('selecting all the classes by using document.querySelectorAll()');
const valueTwo = document.querySelectorAll('.one');
//it produces the NodeList of tags which have one as class name

console.log(valueTwo);
/*forEach Iteration is possible in case of querySelectorAll() because all are nodes*/
valueTwo.forEach( values => {
    console.log(values.innerHTML);
});


//selecting elements by using document.getElementById();
console.log('selecting elements by using document.getElementById()');
const value3 = document.getElementById('Devara');
console.log(value3.innerHTML);


//selecting elements by using document.getElementByClassName();
console.log('selecting elements by using document.getElementByClassName()');
const value4 = document.getElementsByClassName('one');
console.log(value4);

// value4.forEach( values => {
//     console.log(values.innerHTML);
// }); 

/* we get error when we tried to use forEach for iteration because it is HTMLCollection though we can use 'normal FOR loop' for iterations */
for (let index = 0; index < value4.length; index++) {
    const element = value4[index];
    console.log('TextInsideHTMLTag : ',element.innerHTML);   
}

//selecting elements using document.getElementsByTagName
console.log('selecting elements using document.getElementsByTagName');
const value5 = document.getElementsByTagName('p');
console.log(value5);
for (let index = 0; index < value5.length; index++) {
    const element = value5[index];
    console.log('TextInsideHTMLTag : ',element.innerHTML);   
}