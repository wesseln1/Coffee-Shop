let remoteURL = `http://localhost:5002`;

export default {
  getAll(resource) {
    // console.log("hey")
    return fetch(`${remoteURL}/${resource}`).then(result => result.json());
  },
  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(result =>
      result.json()
    );
  },
  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  }
};
