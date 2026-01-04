import $axios from "@/api/accessor";
import { $api } from "@/api/api";

async function Contact(student) {
  try {
    const data = await $axios.post($api("contact"), student);
    if (!data) throw new Error("data boşdur!");
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

async function getCourseID(id) {
  try {
    const data = await $axios.get($api("courseById") + id);
    if (!data) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function applyCourse(course, input) {
  try {
    const data = await $axios.post(
      $api("applyCourse") + course._id + "/apply",
      input
    );
    if (!data) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.error(error.message);
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

async function getCarousels() {
  try {
    const data = await $axios.get($api("carousel"));
    if (!data.length) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export {
  Contact,
  getCourses,
  getPartners,
  getTeachers,
  getCarousels,
  getCourseID,
  applyCourse,
};
