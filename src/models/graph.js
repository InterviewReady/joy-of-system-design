class Component {
  constructor(name, description, role, videoURL, imageURL) {
    this.name = name;
    this.description = description;
    this.role = role;
    this.videoURL = videoURL;
    this.imageURL = imageURL;
  }
}

class Vertex {
  constructor(c) {
    this.c = c;
    this.edgesFromVertex = [];
  }

  addEdge(edge) {
    this.edgesFromVertex.push(edge);
  }
}

class Edge {
  constructor(start, end, description) {
    this.start = start;
    this.end = end;
    this.description = description;
  }
}

class Graph {
  constructor(name, description) {
    this.startingVertices = [];
    this.name = name;
    this.description = description;
  }

  addVertex(vertex) {
    this.startingVertices.push(vertex);
  }
}
