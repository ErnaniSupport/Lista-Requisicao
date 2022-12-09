
function gerarLista() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {

        const lista = document.querySelector('#listagem')

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id', item.id);
            li.innerHTML = item.title;
            lista.appendChild(li);
        })

    })

}