let input=document.querySelector(".searchbar input");
let searchBtn=document.querySelector(".search")
let showMore=document.querySelector(".btn button")
let imageContainer=document.querySelector(".images")
let images=document.querySelectorAll(".images img")
//===I hide the api key for privacy.So,if you want to run this code then  you can use your own unsplash api====
let apiKey="nK-bo19I-0pCyR9aptW83-B5nsAHh3BIq4XbPnzx1mg"
let keyWord=""
let page=1;


async function showImages() {
   try {
    if(input.value==""){
      alert("please add keyword")
      return;
    }
    
    if(keyWord!=input.value){
       imageContainer.innerHTML="";
       page=1;
       
    }
     
     keyWord=input.value
     let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${apiKey}&per_page=12`;

     let response=await fetch(url);
     let data=await response.json();
     for(let i=0;i<12;i++){
        let img=document.createElement("img")
        let link=document.querySelector("a")
         link=data.results[i].links.html
        img.src=data.results[i].urls.small;
        img.href=link;
        img.target="_BLANK"
        imageContainer.appendChild(img)
       }
       showMore.style.display="block";
      
   } catch (error) {
     console.log(error)
   }
}

 searchBtn.addEventListener("click",()=>{ 
    showImages();

 })

 showMore.addEventListener("click",()=>{
    page++;
    
    showImages();
 })