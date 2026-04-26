import data from './projects.json' with { type: 'json' };

const template = document.querySelector('#projet-card-template');
const container = document.querySelector('.row');

const clone = template.content.cloneNode(true);

// Modify the cloned content
clone.querySelector('.project-img').   textContent = "Hello World";
clone.querySelector('#gh').  textContent = "Hello World";
clone.querySelector('#site').  textContent = "Hello World";
clone.querySelector('#title').textContent = "Hello World";
clone.querySelector('#role').textContent = "@" + "Hello World";
clone.querySelector('#features').textContent = "Hello World";
clone.querySelector('#description').textContent = "Hello World";
clone.querySelector('#stack').   textContent = "Hello World";

container.appendChild(clone);

const projects = {
  wmt =  {
    imgPath: "./wmt/Tofu Logo.png",
    gh: "https://github.com/virfortis-rgb/wheres-my-tofu",
    site: "https://www.wheresmytofu.me/",
    title: "Where's My Tofu?",
    role: "lead developer",
    features: "",
    description: "WMT is a shopping list web application that lets you compare the prices of your groceries, so that you can choose the best price for your groceries. WMT allows you to compare prices from different stores in the Osaka, Nishi-ku area.",
    stack: "Ruby | Ruby on Rails | PostgreSQL | JavaScript | Heroku | HTML | CSS etc."
  },
  maiKusuri =  {
    imgPath: "./default.png",
    gh: "",
    site: "",
    title: "Where's My Tofu?",
    role: "lead developer",
    features: "",
    description: "",
    stack: ""
  },
  maiKusuri =  {
    imgPath: "./default.png",
    gh: "",
    site: "",
    title: "Where's My Tofu?",
    role: "lead developer",
    features: "",
    description: "",
    stack: ""
  }
};
