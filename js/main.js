const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
console.log(images)

let slideAttiva = 0;

const itemsDom = document.querySelector('.items');
for (let i = 0; i < images.length; i++) {
    itemsDom.innerHTML += `<div class="item">
                            <img class="img-slide" src="${images[i].url}"/>
                            <h2 class='title'>${images[i].title}</h2>
                            <p class='description'>${images[i].description}</p>
                            </div>`;
};

const itemList = document.getElementsByClassName('item');
itemList[slideAttiva].classList.add('show');
const circleList = document.querySelector('.up');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
up.addEventListener('click' ,
    function () {  
        itemList[slideAttiva].classList.remove('show');
        slideAttiva++;
        itemList[slideAttiva].classList.add('show');
        down.classList.remove('hidden');
        if (slideAttiva == itemList.length - 1) {
            up.classList.add('hidden');
        }
    }
);

down.addEventListener('click' ,
    function () {
        
        itemList[slideAttiva].classList.remove('show');
        slideAttiva--;
        itemList[slideAttiva].classList.add('show');
        up.classList.remove('hidden');

        itemList[slideAttiva].classList.add('show');
        if (slideAttiva == 00) {
            down.classList.add('hidden');
        }
    }
);