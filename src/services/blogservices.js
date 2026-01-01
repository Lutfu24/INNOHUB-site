import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function getBlogs() {
  try {
    const data = await $axios.get($api("blog"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function getBlogId(id) {
  try {
    const data = await $axios.get($api("blogId").slice(0, 5) + `/${id}`);
    if (!data) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export { getBlogs, getBlogId };
