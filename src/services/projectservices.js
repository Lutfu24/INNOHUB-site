import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function getPastProjects() {
  try {
    const data = await $axios.get($api("projectsPast"));
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function getFutureProjects() {
  try {
    const data = await $axios.get($api("projectsFuture"));
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export {
  getPastProjects,
  getFutureProjects
};