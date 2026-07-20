const apps = [
{
name:"CapCut Pro",
version:"v15.0",
image:"https://picsum.photos/200?1",
link:"#"
},
{
name:"Lightroom",
version:"v10.0",
image:"https://picsum.photos/200?2",
link:"#"
},
{
name:"Remini",
version:"v4.0",
image:"https://picsum.photos/200?3",
link:"#"
},
{
name:"PicsArt",
version:"v28.0",
image:"https://picsum.photos/200?4",
link:"#"
}
];

function loadApps(){

const grid=document.querySelector(".grid");

if(!grid) return;

grid.innerHTML="";

apps.forEach(app=>{

grid.innerHTML+=`

<div class="card">

<img src="${app.image}">

<h3>${app.name}</h3>

<p>${app.version}</p>

<a class="btn" href="${app.link}">Download</a>

</div>

`;

});

}

window.onload=loadApps;
