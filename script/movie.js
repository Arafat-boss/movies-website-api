// Fetch load and show categories on html

// create loadCategories
const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error))
}
// loadVideo
const loadVideo = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
    .catch((error) => console.log(error))
}
//create Video
const displayVideo = (video) =>{
    const videoDiv = document.getElementById("video");

    video.forEach(singleV => {
        const card = document.createElement('div');
        card.classList = "card card-compact";
        card.innerHTML = 
        `
          <figure class="h-52">
            <img
            src="${singleV.thumbnail}"
            alt="Shoes" class="h-full object-cover" />
        </figure>
        <div class="px-0 py-2 gap-2 flex">
           <div >
                <img class="w-10 h-10 rounded-full object-cover" src="${singleV.authors[0].profile_picture}" />
           </div>
           <div>
                <h2 class="font-bold">${singleV.title}</h2>

                <div class="flex items-center gap-2">
                     <p class="font-bold text-gray-500">${singleV.authors[0].profile_name}</p>
                    ${singleV.authors[0].verified === true ? ` <img class="w-5" src='https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png'` : ""}
                </div>
               
                <p></p>
           </div>
        </div>
        `

        videoDiv.appendChild(card);
    })
}




//create displayCategories
const displayCategories = (categories) =>{
    const categoriesBtn = document.getElementById('categories-btn');

    categories.forEach(item => {
        console.log(item);
        //create a boxDecorationBreak: 
        const button = document.createElement('button')
        button.classList = 'btn'
        button.innerText = item.category;

        categoriesBtn.appendChild(button)
    })
}





loadCategories()
loadVideo()
