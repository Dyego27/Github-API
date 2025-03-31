const form = document.getElementById('form');
const inputName = document.getElementById('user');

const gitapi = async (event) => {
    event.preventDefault();
    const userValue = inputName.value;

    if (!userValue) {
        alert('Por favor, insira um nome de usuário.');
        return;
    }

    const url = `https://api.github.com/users/${userValue}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Usuário não encontrado.');
        }

        const data = await response.json();
        exibirDadosDoUsuario(data);
    } catch (error) {
        alert(error.message);
    }
};

function exibirDadosDoUsuario(usuario) {
    const avatar = document.getElementById('avatar');
    const seguindo = document.getElementById('seguindo');
    const repositorios = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidores');

    avatar.src = usuario.avatar_url;
    seguindo.textContent = `Seguindo: ${usuario.following}`;
    repositorios.textContent = `Repositórios: ${usuario.public_repos}`;
    seguidores.textContent = `Seguidores: ${usuario.followers}`;
}

form.addEventListener('submit', gitapi);