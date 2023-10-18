
const input= document.querySelector('#input');
const btn = document.querySelector('#btn');
const search =document.querySelector('#images');
const showmore = document.querySelector('#btn1');
 let inputdata ="";
 let page = 1;
 const access="ZY7USum0QOqHkJPvWTFDgE6kHtNt9fdlvodZmDlodgU";
 async function searchresult(){
inputdata= input.value;
let url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${access}`;
let response = await fetch(url);
let data = await response.json();
const result = data.results;
result.map((result)=>{
    let imagewrapper = document.createElement("div");
    imagewrapper.classList.add("images");
    let image =document.createElement("img");
    image.src=result.urls.small;
    // let desc = document.createElement("a");
    // desc.href= result.links.html;
    // desc.target="_blank";
    // desc.textContent= result.alt_description;
    imagewrapper.appendChild(image);

    search.appendChild(imagewrapper);
    // search.appendChild(desc);
    page=page+1;

});
 }

//  if(page>1){
//     showmore.style.display="block";
//  }

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    page=1;
    search.innerHTML = ""; 
    searchresult();
  
})

showmore.addEventListener("click",()=>{
    searchresult();
})


 