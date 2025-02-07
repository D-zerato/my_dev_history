import axios from 'axios';
import { ProjectQdo } from '../model/ProjectQdo';

const url = 'https://14.4.119.31:8081/api/projects';

export async function findProjects(qdo: ProjectQdo) {
  //
  return await axios
    .get(`${url}/search`, { params: qdo })
    .then((response) => response.data)
    .catch(console.error);
}
