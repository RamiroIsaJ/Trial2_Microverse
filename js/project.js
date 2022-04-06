import { confirmRequired, confirmURL } from "./validation.js";
import { Project } from "./projectClass.js";

let title = document.getElementById('title');
let image = document.getElementById('image');
let description = document.getElementById('description');
let link = document.getElementById('link');
let cancel = document.getElementById('clear');
let newPro = document.getElementById('newPro');
let panel1 = document.getElementById('panel1');
let panel2 = document.getElementById('panel2');
let form = document.getElementById('formProject');
let projectList = [];

title.addEventListener('blur', () => {confirmRequired(title)});
image.addEventListener('blur', () => {confirmURL(image)});
description.addEventListener('blur', () => {confirmRequired(description)});
link.addEventListener('blur', () => {confirmRequired(link)});
newPro.addEventListener('click', () => {openForm()});
cancel.addEventListener('click', () => {closeForm()});
form.addEventListener('submit', saveProject);

function clearForm(){
    form.reset();
    title.className = 'form-control';
    image.className = 'form-control';
    description.className = 'form-control';
    link.className = 'form-control';
}

function openForm(){
    panel1.className = "content2 my-5";
    panel2.className = "text-center my-5 d-none" 
}

function closeForm(){
    panel1.className = "content2 my-5 d-none";
    panel2.className = "text-center my-5" 
    clearForm();
}

const initList = () =>{
    projectList = JSON.parse(localStorage.getItem('projectListT')) || [];
    console.log(projectList.length)
    if (projectList.length > 0){
        projectList.forEach(itemProject => {
            createGrid(itemProject);           
        });
    }
}

function saveProject(e){
    e.preventDefault();
    saveNewProject();
}

function saveNewProject(){
    let titleF = projectList.find((project) => {return project.title === title.value});
    if (titleF == undefined){
        let newProject = new Project();
        newProject.newTitle = title.value;
        newProject.newImage = image.value;
        newProject.newDescription = description.value;
        newProject.newLink = link.value;
        projectList.push(newProject);
        Swal.fire(
            'Good Job !',
            'Project added successfuly',
            'success'
        );
        localStorage.setItem('projectListT', JSON.stringify(projectList));
        clearForm();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This project already exists',
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }
}

function createGrid(project) {
    let grid = document.getElementById('gridP');
    grid.innerHTML += `
    <div class="col-sm-12 col-md-4 col-lg-3 mb-3 ">
        <div class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}" width="200" height="200">
            <div class="card-header">
                ${project.title}
            </div>
            <div class="card-body">
                <h5 class="card-title">Description:</h5>
                <p class="card-text">${project.description}</p>
                <h5 class="card-title">URL link:</h5>
                <p class="card-text"> ${project.link}</p>
                <p class="card-text"> <a href="${project.link}">Open GitHub</a></p>
            </div>
        </div>
    </div>`;
}

initList();