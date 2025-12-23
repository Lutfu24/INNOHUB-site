import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function getBlogs() {
  try {
    const data = await $axios.get($api("blogs"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export { getBlogs };