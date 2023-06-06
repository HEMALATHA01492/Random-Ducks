let DIV1=document.createElement('div');
DIV1.setAttribute('class','container');

let Heading=document.createElement('h1');
Heading.setAttribute('class','heading');
Heading.innerText='Random Ducks'
DIV1.appendChild(Heading);

let image=document.createElement('img');
image.setAttribute('class','image');
image.setAttribute('src','https://random-d.uk/api/randomimg');
DIV1.appendChild(image);

let Button=document.createElement('button');
Button.setAttribute('class','btn  btn-primary btn-lg');
Button.setAttribute('type','button');
Button.setAttribute('onclick','displayDucks()');
Button.innerText='Click here to Watch More Ducks';

DIV1.appendChild(Button);
document.body.appendChild(DIV1);


function displayDucks(){
location.reload();
}