// What you will need
const givenLink = document.querySelector('.glink')
const submitBtn = document.querySelector('.btn') 
const downloadLinkField = document.querySelector('#download-link')
const embedAudioLinkField = document.querySelector('#embed-audio')
const embedVideoLinkField = document.querySelector('#embed-video')

const copyDownloadLinkBtn = document.querySelector('.copy')
const copyAudoLinkBtn = document.querySelector('.copy-audio')
const copyVideoLinkBtn = document.querySelector('.copy-video')


submitBtn.addEventListener('click', (e) => {
     e.preventDefault()
     // https://drive.google.com/file/d/1pXFlodHkB3tVl1YM-9v5g9ngCwNTaKMG/view?usp=sharing?usp=sharing
     if (givenLink.value.includes('https://drive.google.com/file/d/')) {
          // create needed links
          const downloadLink = givenLink.value
          .replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?export=download&id=')
          .replace('/view?usp=sharing','')
          const embedAudioLink = '<audio width="300" height="32" controls="controls" src="' + downloadLink + '" type="audio/mp3"></audio>';
          const embedVideoLink = '<iframe src="' + givenLink.value + '/preview" width="560" height="315"></iframe>'
          
          // Put new links in there fuilds.
          downloadLinkField.value = downloadLink
          embedAudioLinkField.value = embedAudioLink
          embedVideoLinkField.value = embedVideoLink
     } else {
          downloadLink.innerHTML = 'This is not a proper google link. YOU need a proper google link.'
          downloadLink.style.background = 'red'
     }
})
copyDownloadLinkBtn.addEventListener('click', () => {
     navigator.clipboard.writeText(downloadLinkField.value)
     .then(() => {
          downloadLinkField.select()
     })
})
copyAudoLinkBtn.addEventListener('click', () => {
     navigator.clipboard.writeText(embedAudioLinkField.value)
     .then(() => {
          embedAudioLinkField.select()
     })
})
copyVideoLinkBtn.addEventListener('click', () => {
     navigator.clipboard.writeText(embedVideoLinkField.value)
     .then(() => {
          embedVideoLinkField.select()
     })
})