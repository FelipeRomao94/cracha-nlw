const LinksSocialMedia = {
  github: 'FelipeRomao94',
  youtube: 'UCGmWXDGv1CR0lkjO4w_NeGg',
  facebook: 'felipe.romaolhp',
  instagram: 'Feh_Romao',
  twitter: 'Felipe Romão'
}

function chageSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

chageSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
