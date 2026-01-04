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

async function getEventID(id) {
  try {
    const data = await $axios.get($api("eventId") + id);
    if (!data) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function registerEvent(event, input) {
  try {
    const data = await $axios.post(
      $api("registerEvent") + event._id + "/register",
      input
    );
    if (!data) throw new Error("data boşdur!");
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export { getEvents, getEventID, registerEvent };
