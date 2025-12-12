import axios from "axios";
async function Contact(student) {
  try {
    const res = await axios.post(
      "https://api.innohub.alakbarova.site/api/contact",
      student
    );
    if (!res.data.length) throw new Error("data bosdur!");
    return res;
  } catch (error) {
    console.error(error.message);
  }
}

async function getCourses() {
  try {
    const res = await axios.get(
      "https://api.innohub.alakbarova.site/api/courses"
    );
    if (!res.data.length) throw new Error("url xetasi!");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getPartners() {
  try {
    const res = await axios.get(
      "https://api.innohub.alakbarova.site/api/partners"
    );
    if (!res.data.length) throw new Error("url xetasi!");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getTeachers() {
  try {
    const res = await axios.get(
      "https://api.innohub.alakbarova.site/api/teachers"
    );
    if (!res.data.length) throw new Error("url xetasi!");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export { Contact, getCourses, getPartners, getTeachers };
