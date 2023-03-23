fetch("populer_repolar.yaml")
  .then(response => response.text())
  .then(yaml => {
    const data = jsyaml.load(yaml);
    const repos = data.populer_repos;
    const repoList = document.getElementById("repo-list");
    
    for(let i=0; i<repos.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = repos[i];
      repoList.appendChild(listItem);
    }
  });
