// catagories fetching function
const handleAllCatagories = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const catagoriesData = await res.json();
    console.log(catagoriesData)
    const tabsContainer = document.getElementById('tabs-section')
    const sectionDiv = document.createElement('div')
    catagoriesData.data.forEach( tabsData => {
        const sectionDiv = document.createElement('div')
        console.log(tabsData)
        sectionDiv.innerHTML = `
   
            <button class='px-5 py-2 rounded bg-[#25252533] text-base font-medium text-[#252525b3]'>${tabsData.category}</button> <br>
        
    `
    tabsContainer.appendChild(sectionDiv)
    });
    
       
 
}
// calling the function 
handleAllCatagories() 