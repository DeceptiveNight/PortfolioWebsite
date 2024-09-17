let links = document.querySelector('#nav-list').querySelectorAll('li');


let linkEnlarger = event => {
    event.target.style.fontSize = '2.5rem';
    event.target.style.transition = '1s';
}

let linkReducer = event => {
    event.target.style.fontSize = '';
}

let linkEventHandler = link => {
    link.addEventListener('mouseover', linkEnlarger);
    link.addEventListener('mouseout', linkReducer);
}


links.forEach(linkEventHandler);






let sectionHeaders = document.getElementsByClassName('section-header');

let randomColor = event => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

let sectionEventHandler = section => {
    section.addEventListener('click', randomColor);
    
}


Array.from(sectionHeaders).forEach(sectionEventHandler);




let projectOneImage = document.getElementById('project-one-image');
let projectTwoImage = document.getElementById('project-two-image');
let projectDescriptions = document.getElementsByClassName('project-description');


let showProjectDescription = event => {
    event.target.style.display = 'none';
    Array.from(projectDescriptions).forEach(description => {
        if (description.style.display == 'none'){
            description.style.display = 'unset';

        }
    })
}

let hideProjectDescription = event => {
    event.target.style.display = '';
    Array.from(projectDescriptions).forEach(description => {
        description.style.display = 'none';
    })

}

projectOneImage.addEventListener('mouseover', showProjectDescription);
projectOneImage.addEventListener('mouseout', hideProjectDescription);
projectTwoImage.addEventListener('mouseover', showProjectDescription);
projectTwoImage.addEventListener('mouseout', hideProjectDescription);



//CODE BELOW ADDS INTERACTIVITY TO CONTACT PAGE


