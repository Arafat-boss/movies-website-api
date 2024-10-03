// Fetch load and show categories on html

// create loadCategories
const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error))
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