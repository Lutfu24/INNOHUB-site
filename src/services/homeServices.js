import axios from "axios";
async function Contact(student) {
  let res;
  try {
    res = await axios.post(
      "https://api.innohub.alakbarova.site/api/contact",
      student
    );
    if (res.status !== 201) throw new Error(res.data.message);
  } catch (error) {
    console.error(error.message);
  }
  return res;
}

async function getCourses() {
  let res;
  try {
    res = await axios.get("https://api.innohub.alakbarova.site/api/courses");
    if (!res.data.length) throw new Error("data bosdur!");
  } catch (error) {
    console.log(error.message);
  }
  return res.data;
}

async function getPartners() {
  let res;
  try {
    res = await axios.get("https://api.innohub.alakbarova.site/api/partners");
    if (!res.data.length) throw new Error("data bosdur!");
  } catch (error) {
    console.log(error.message);
  }
  return res.data;
}

async function getTeachers() {
  let res;
  try {
    res = await axios.get("https://api.innohub.alakbarova.site/api/teachers");
    if (!res.data.length) throw new Error("data bosdur!");
  } catch (error) {
    console.log(error.message);
  }
  return res.data;
}

export { Contact, getCourses, getPartners, getTeachers };
