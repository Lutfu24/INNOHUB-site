import axios from "axios";

async function getProjects() {
  let res;
  try {
    res = await axios.get("https://api.innohub.alakbarova.site/api/courses");
    if (!res.data.length) throw new Error("data bosdur!");
  } catch (error) {
    console.log(error.message);
  }
  return res.data;
}

export { getProjects };
