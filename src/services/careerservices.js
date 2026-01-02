import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function Career(student) {
  try {
    const data = await $axios.post($api("career"), student);
    if (!data) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export { Career };
