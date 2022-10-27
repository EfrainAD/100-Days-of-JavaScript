// const usersFuild = document.querySelector('#users')
document.querySelector('#btn-fetch').addEventListener('click', async (e) => {
     const users = await fetch('./users.json').then(users => users.json())
     usersFuild.innerHTML = users.reduce((addon, user) => {
          const {id, name, age, email} = user
          addon += `<ul>
                          <li>Id: ${id}</li>
                          <li>Name: ${name}</li>
                          <li>Age: ${age}</li>
                          <li>Email: ${email}</li>
                          </ul>`
          return addon
     },'')
})