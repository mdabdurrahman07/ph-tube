// catagories fetching function
const handleAllCatagories = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const catagoriesData = await res.json();
  
    const tabsContainer = document.getElementById('tabs-section')
    catagoriesData?.data.forEach( tabsData => {
        const sectionDiv = document.createElement('div')
      
        sectionDiv.innerHTML = `
   
            <button class='px-5 py-2 rounded bg-[#25252533] text-base font-medium text-[#252525b3]' 
            onclick="handleSingleLinkTabs('${tabsData.category_id}')">${tabsData.category}</button>
        
    `
    tabsContainer.appendChild(sectionDiv)
    });


 
}
const handleSingleLinkTabs = async (links) =>{
   
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${links}`)
    const linksData = await response.json()
   
    const cardContainer = document.getElementById('cards-container')
    cardContainer.innerText='';

    linksData?.data.forEach(videoInfo =>{
        console.log(videoInfo.thumbnail)
       const cardsValue = document.createElement('div')
        cardsValue.innerHTML = `
        <div class="card w-80 bg-base-100  space-y-5">
        <figure><img src=${videoInfo?.thumbnail} alt="Shoes" class="w-80 h-52" /></figure>
        <div>
            
        </div>
        <div class="px-4 space-y-2">
          <div class="flex  items-center gap-4">
            <img class="w-12 h-12 rounded-full" src="${videoInfo?.authors[0]?.profile_picture}" alt="">
            <h2 class="text-base font-bold">${videoInfo?.title}</h2>
          </div>
          <div class="flex items-center gap-3">
            <p class="text-base font-normal text-[#171717b3]">${videoInfo?.authors[0]?.profile_name}</p>
          <p>${videoInfo?.authors[0]?.verified ? `<img class="w-5" src="${verified.imageUrl}">` : '' }</p>
         
          </div>
          <p class="text-sm font-normal text-[#171717b3]">${videoInfo.others.views}</p>
        </div>
      </div>
        `
    cardContainer.appendChild(cardsValue)
    });



}
   
// calling the function 
handleAllCatagories() 
handleSingleLinkTabs('1000')

const verified = {imageUrl : "https://w7.pngwing.com/pngs/80/808/png-transparent-verified-right-tick-ok-blue-icon-thumbnail.png" }

