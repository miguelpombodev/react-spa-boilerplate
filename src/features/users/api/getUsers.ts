import { httpClient } from "../../../shared/api/httpClient";

export async function getUsers(): Promise<any> {
  const { data } = await httpClient.get("/users");
  return data;
}
