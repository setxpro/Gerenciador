

export default function Task(id, name, completed) {
    this.id = id;
    this.name = name;
    this.completed = completed;

    return{
        id: id,
        name: name,
        completed: completed,
    };  
}