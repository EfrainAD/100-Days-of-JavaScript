const url = './users.json'

const fillUsers = (users) => {
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
}

function load(url, callback) {
     const req = new XMLHttpRequest();
   
     req.onreadystatechange = () => {
       if (req.readyState === 3) {
          const resJSON = JSON.parse(req.response)
         callback(resJSON);
       }
     }
   
     req.open('GET', url, true);
     req.send('');
}

const usersFuild = document.querySelector('#users')
document.querySelector('#btn-ajax').addEventListener('click', () => load(url, fillUsers))