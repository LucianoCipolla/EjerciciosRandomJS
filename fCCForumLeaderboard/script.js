const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

const timeAgo = timestamp => {
  const currTime = Date.now()
  const agoTime = new Date(timestamp).getTime()
  let difTime = currTime - agoTime
  if (difTime/60000 < 60){
    return `${Math.floor(difTime/60000)}m ago`
  } else if (difTime/3600000 < 24){
    return `${Math.floor(difTime/3600000)}h ago`
  } else {
    return `${Math.floor(difTime/86400000)}d ago`
  }
}
const viewCount = (views) => {
  if (views >= 1000){
    return Math.floor(views/1000)+'k'
  }
  return views
}


const forumCategory = (id) => {
  if (id in allCategories ){
    return `<a class="category ${allCategories[id].className}" href="${forumCategoryUrl}${allCategories[id].className}/${id}">${allCategories[id].category}</a>`;
  }
  return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
} 


const avatars = (postersArr, usersArr) => {
  return postersArr.map(poster => {

    const user = usersArr.find(user => user.id === poster.user_id)

    let avatar = user.avatar_template.replace('{size}', 30)

    if (!avatar.startsWith('http')) {
      avatar = `${avatarUrl}${avatar}`
    }

    return `<img src="${avatar}" alt="${user.name}">`

  }).join("")}


const postsContainer = document.getElementById('posts-container')

const showLatestPosts = ({users,topic_list}) => {
  const topics = topic_list.topics
  let result = topics.map(topic => {
    const {id,title,views,posts_count,slug,posters,category_id,bumped_at} = topic
    return `
    <tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">${avatars(posters,users)}</div>
      </td>
      <td>${posts_count-1}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`
  }).join('')
  postsContainer.innerHTML = result
}

async function fetchData(){
  try {let promise = await fetch(forumLatest)
  let data = await promise.json()
  showLatestPosts(data)} catch(error){
    console.log(error)
  }
}