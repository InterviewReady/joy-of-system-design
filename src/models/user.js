class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  setPassword(password) {
    this.password = password;
  }

  checkPassword(password) {
    return this.password === password;
  }
}

class Attempt {
  constructor(user_id, graph, attempted_graph_id, score) {
    this.user_id = user_id;
    this.graph = graph;
    this.attempted_graph_id = attempted_graph_id;
    this.score = score;
  }
}
