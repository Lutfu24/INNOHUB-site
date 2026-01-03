import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function getEvents() {
  try {
    const data = await $axios.get($api("events"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export { getEvents };
