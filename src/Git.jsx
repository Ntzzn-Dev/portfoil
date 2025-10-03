import React, { useState, useEffect } from "react";

function GitHubRepos({ username }) {
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setRepoCount(data.public_repos);
      })
      .catch(err => console.error(err));
  }, [username]);

  return (
    <div>
      <h2>Repositórios do GitHub</h2>
      {repoCount !== null ? (
        <p>O usuário {username} tem {repoCount} repositórios públicos.</p>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default GitHubRepos;
