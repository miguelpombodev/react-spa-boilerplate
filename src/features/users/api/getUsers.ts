import { httpClient } from "../../../shared/api/httpClient";

export async function getUsers(): Promise<object> {
  const { data } = await httpClient.get("/users");
  return data;
}
