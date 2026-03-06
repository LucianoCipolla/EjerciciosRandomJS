const projectStatus = {PENDING:{description:'Pending Execution'},SUCCESS:{description:'Executed Successfully'},FAILURE:{description:'Execution Failed'}}

class ProjectIdea {
  constructor(title,description){
    this.title = title
    this.description = description
    this.status = projectStatus.PENDING
  }
  updateProjectStatus(newStatus){
    this.status = newStatus
  }
}

class ProjectIdeaBoard {
  constructor(title){
    this.title = title
    this.ideas = []
  }
  pin(idea){
    this.ideas.push(idea)
  }
  unpin(idea){
    this.ideas.splice(this.ideas.findIndex(i=> i===idea),1)
  }
  count(){
    return this.ideas.length
  }
  formatToString(){
    if (this.ideas.length === 0){
      return `${this.title} has 0 idea(s)\n`
    }

    let result = `${this.title} has ${this.count()} idea(s)\n`
    this.ideas.forEach(idea=>{
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
    })
    return result
  }
}

const emptyBoard = new ProjectIdeaBoard("Empty Board")

console.log(emptyBoard.formatToString())

const techProjects = new ProjectIdeaBoard("Tech Projects Board")
techProjects.pin(new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely."))

console.log(techProjects.formatToString())