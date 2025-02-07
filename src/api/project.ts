import axios from 'axios';
import { ProjectQdo } from '../model/ProjectQdo';
import { ListResultModel } from '../model/ListResultModel';
import { ProjectDetail } from '../model/ProjectDetail';
import { ProjectSimpleModel } from '../model/ProjectSimpleModel';

const url = 'https://14.4.119.31:8081/api/projects';

export async function findProjects(qdo: ProjectQdo): Promise<ListResultModel<ProjectSimpleModel>> {
  //
  return await axios
    .get(`${url}/search`, { params: qdo })
    .then((response) => response.data)
    .catch(console.error);
}

export async function findProject(id: string): Promise<ProjectDetail> {
  //
  return await axios
    .get(`${url}/${id}`)
    .then((response) => response.data)
    .catch(console.error);
}
