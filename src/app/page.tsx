'use client'; // this is a client component
import { useEffect, useState } from "react";
import Avatar from './utils/avatar';
import Card from './utils/card';

interface reposObject {
  [key: string]: any,
}

interface userInfoT {
  'avatar_url': string,
  'login': string,
  'public_repos': number,
  'followers': number
}

export default function Home() {
  const [repository, setRepository] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<userInfoT>({
    avatar_url: '',
    login: '',
    public_repos: 0,
    followers: 0
  });

  useEffect(() => {
    fetch('https://api.github.com/users/walefy/repos')
      .then((response) => response.json())
      .then((data: reposObject[]) => {
        const repositoryNames = data.map((item) => item.name);

        setRepository(repositoryNames);
      })
      .catch((error) => console.log('[ERROR] ' + error.message));
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/walefy')
      .then((response) => response.json())
      .then((response) => setUserInfo(response));
  }, []);

  return (
    <>
    <div className="divContainer bg-gray-100 shadow-lg p-5 rounded-md">
      <Avatar url={userInfo.avatar_url} />
      <div className="infoContainer">
        <div>
          <h2 className="text-xl md:text-1xl text-center text-gray-900 mb-2">Repositórios</h2>
          <Card>
            <div className="overflow-auto h-48 hidden-scrollbar">
              <ul>
                {repository.map((repoName) => (
                  <li className="shadow-md p-2 bg-gray-100 rounded-md mb-1 text-gray-600" key={repoName}>{repoName}</li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
        <div>
          <h2 className="text-xl md:text-1xl text-center text-gray-900 mb-2">Informações</h2>
          <Card>
              <>
                <p>Nome: {userInfo.login}</p>
                <p>Repositórios públicos: {userInfo.public_repos}</p>
                <p>Seguidores: {userInfo.followers}</p>
              </>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
