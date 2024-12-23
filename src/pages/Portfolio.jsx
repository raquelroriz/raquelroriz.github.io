import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Portfolio = () => {
  // Aqui armazeno os dados, repos mantenho os dados, setrepos atualizo
  const [repos, setRepos] = useState([])

  //url da minha api do github
  const GitUrl = "https://api.github.com/users/raquelroriz/repos?per_page=100&type=owner"


  // usando o hook useS
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get(GitUrl); // Descomente para usar a API real (import { gitResponse } from './apiGitMock';)
       // const response = { data: gitResponse };  Usando mock de dados para testes
    
        // Filtrar apenas os repositórios com '||' na descrição
        const filteredRepos = response.data.filter((repo) => repo.description && repo.description.includes('||'));
        
        // Atualizar o estado apenas com os repositórios filtrados
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error when searching repositories:', error);
      }
    }
    fetchRepos();
  }, []);
  // [] garantindo que a requisição seja feita só uma vez

// Agrupar os repositórios por projeto
const groupedRepos = repos.reduce((groups, repo) => {
  const project = repo.project;
    if (!groups[project]) groups[project] = [];
  groups[project].push(repo);
  return groups;
}, {});

const renderPreview = (url) => {
  const urlImage = `${url}/blob/main/docs/project-preview.gif?raw=true`
  return (
    <div className='flex justify-center'>
      <img src={urlImage} className='w-64' />
    </div>
  )
}


return (
  <div className="p-8 bg-[rgba(1,15,60,0.852)]">
    {Object.keys(groupedRepos).map((project) => (
      <div className="mb-8" key={project}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedRepos[project].map((repo) => (
            <div
              key={repo.id}
              className="relative p-10 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <h3 className="text-lg font-bold mb-2 text-center text-gray-800">
                {repo.name}
              </h3>
              <p className="text-gray-600 text-justify mb-4">{repo.description.replace('|| portfolio;', '').trim()}</p>
              
              {renderPreview(repo.html_url)}

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-2 text-blue-500 hover:underline"
              >
                Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

} 

export default Portfolio
