const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

const categoryItem = document.querySelectorAll('.item');

categoryItem.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`,
        `Elements: ${elem.lastElementChild.children.length}`)
});

