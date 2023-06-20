import {
   alertMessage,
   apiGithubURL,
   inputUserName,
   profileDiv,
   repos,
} from './variables.js'

// Helper Function - Clear/Hide DOM
const clearDisplay = () => {
   profileDiv.innerHTML = null

   const allRepos = repos.querySelectorAll('.repo')
   allRepos.forEach((repo) => repo.remove())
}
const clearForm = () => {
   inputUserName.value = null
}
const hideAlertMessage = () => (alertMessage.style.display = 'none')

// Helper Functions - Create DOM Elements
const createAvatar = (avatarUrl) => {
   const avatar = document.createElement('img')
   avatar.src = avatarUrl
   avatar.alt = 'image'
   avatar.classList.add('img-thumbnail', 'rounded-circle')
   return avatar
}
const createLinkTag = (html_url, name) => {
   const linkTag = document.createElement('a')
   linkTag.href = html_url
   linkTag.target = '_blank'
   linkTag.rel = 'noopener'
   linkTag.textContent = name
   return linkTag
}
const createRepoContaner = () => {
   const repoContaner = document.createElement('span')
   repoContaner.classList.add('repo', 'border', 'border-rounded', 'p-3')

   return repoContaner
}

// Helper Functions - Import To DOM
const displayUser = (user) => {
   // Create elements
   const {
      avatar_url,
      name,
      login,
      html_url,
      followers,
      following,
      public_repos,
      location,
   } = user

   const avatar = createAvatar(avatar_url)

   const headerElement = document.createElement('h2')
   headerElement.textContent = name

   const loginElement = document.createElement('p')
   loginElement.textContent = login

   const linkContainer = document.createElement('div')
   linkContainer.classList.add('d-grid')

   const profileLink = document.createElement('a')
   profileLink.href = html_url
   profileLink.classList.add('btn', 'btn-outline-secondary')
   profileLink.textContent = 'View Profile'

   const followsContanier = document.createElement('p')
   followsContanier.classList.add('pt-2')
   followsContanier.innerHTML = `<span>${followers} Followers</span> <span>${following} Following</span>`

   const reposTag = document.createElement('p')
   reposTag.textContent = `${public_repos} Repos`

   const locationTag = document.createElement('p')
   if (location)
      locationTag.innerHTML = `<i class="fas fa-marker-alt"></i>${location}`

   // Append elements to the parent container
   profileDiv.appendChild(avatar)
   profileDiv.appendChild(headerElement)
   profileDiv.appendChild(loginElement)
   profileDiv.appendChild(linkContainer)
   linkContainer.appendChild(profileLink)
   profileDiv.appendChild(followsContanier)
   profileDiv.appendChild(reposTag)
   profileDiv.appendChild(locationTag)
}
const displayRepos = (reposData) => {
   const reposToDisplay = reposData.slice(0, 4)

   reposToDisplay.forEach((repoData) => {
      const { html_url, name } = repoData
      const repoStats = [
         `Stars: ${repoData.stargazers_count} |`,
         ` Watchers: ${repoData.watchers_count} |`,
         ` Forks: ${repoData.forks_count}`,
      ]

      const repo = createRepoContaner()
      const repoName = createLinkTag(html_url, name)

      const reposStats = document.createElement('p')
      repoStats.forEach((stat) => {
         const statsElement = document.createElement('strong')
         statsElement.textContent = stat
         reposStats.appendChild(statsElement)
      })

      // Append
      repo.appendChild(repoName)
      repo.appendChild(reposStats)
      repos.appendChild(repo)
   })
}

// Main Function
export const getUser = async (e) => {
   e.preventDefault()

   // Don't know why html doesn't have input name, my goal to do these without changing the HTML.
   const username = inputUserName.value
   clearForm()
   clearDisplay()

   // validation
   if (username === '') {
      alertMessage.style.display = 'block'
      alertMessage.textContent = 'Must submit a username'
      return
   }

   // Fetch User
   try {
      const res = await fetch(apiGithubURL + username)
      const user = await res.json()

      if (!res.ok) throw new Error(`${res.status}: ${user.message}`)

      displayUser(user)
      hideAlertMessage()

      // Fetch User's Repos
      try {
         const res = await fetch(user.repos_url)

         if (!res.ok) throw new Error(res.statusText)

         const repos = await res.json()
         displayRepos(repos)
      } catch (error) {
         console.log('error: ', error.message)
         alertMessage.style.display = 'block'
         alertMessage.textContent = 'Error fetching repos: ' + error.message
      }
   } catch (error) {
      console.log('error: ', error.message)
      alertMessage.style.display = 'block'
      alertMessage.textContent = error.message
   }
}
