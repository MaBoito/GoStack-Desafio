const express = require('express');

const { v4: uuid, validate: isUuid } = require('uuid');


const app = express();

app.use(express.json());

const projects = [];

app.get ('/projects',(request, response) => {

    return response.json(projects);
});

app.post ('/projects',(request, response) => {
    const {title, url, techs} = request.body;

    const project = {id: uuid(),title, url, techs, likes:0};
    projects.push(project);

    return response.json(project);
}); 

app.put ('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {title, url, techs} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0)  {    
        return response.status(400).json ({ error: 'project not found.' })
    }

    const project = {
        id,
        title,
        url,
        techs,
        likes: projects[projectIndex].likes,
    };

    projects[projectIndex] = project;

    return response.json(project);
}); 

app.delete ('/projects/:id', (request, response) => {

    const {id} = request.params;
    

    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0)  {    
        return response.status(400).json ({ error: 'project not found.' })
    }
    projects.splice(projectIndex, 1);

    return response.status(204).send();
}); 

app.post("/projects/:id/like", (request, response) => {
    const {id}  = request.params;
    const findProjectsIndex = projects.findIndex(project => project.id === id)
  
    if (findProjectsIndex === -1)  {    
      return response.status(400).json ({ error: 'projects does not exists.' });
  }
  
   projects[findProjectsIndex].likes +=1;
  
   return response.json(projects[findProjectsIndex]);
  });

  app.post("/projects/:id/deslike", (request, response) => {
    const {id}  = request.params;
    const findProjectsIndex = projects.findIndex(project => project.id === id)
  
    if (findProjectsIndex === -1)  {    
      return response.status(400).json ({ error: 'projects does not exists.' });
  }
  
   projects[findProjectsIndex].likes -=1;
 
   return response.json(projects[findProjectsIndex]);
  });

app.listen(3333, () => {
    console.log('back-end started!');
});