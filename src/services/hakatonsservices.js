import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function getPast() {
  try {
    const data = await $axios.get($api("past"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function getFuture() {
  try {
    const data = await $axios.get($api("future"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function Register(student, input) {
  try {
    const data = await $axios.post(
      $api("registerHakaton") + student._id + "/register",
      input
    );
    if (!data) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export { getPast, getFuture, Register };
