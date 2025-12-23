import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function Contact(student) {
  try {
    const data = await $axios.post($api("contact"), student);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getCourses() {
  try {
    const data = await $axios.get($api("courses"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function getPartners() {
  try {
    const data = await $axios.get($api("partners"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function getTeachers() {
  try {
    const data = await $axios.get($api("teachers"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export { Contact, getCourses, getPartners, getTeachers };