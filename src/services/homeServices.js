import axios from "axios";
async function ApplyCourse(student) {
  try {
    const res = await axios.post(
      "https://api.innohub.alakbarova.site/api/:id/apply",
      student
    );
    if (!res.data.length) throw new Error("data bosdur!");
    return res;
  } catch (error) {
    console.error(error.message);
  }
}

export { ApplyCourse };
