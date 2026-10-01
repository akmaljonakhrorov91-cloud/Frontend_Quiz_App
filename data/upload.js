import fs from "fs";

const URL = "https://6abdf36cc4d5ac5483017422.mockapi.io/quizzes";
const { quizzes } = JSON.parse(fs.readFileSync("data.json", "utf-8"));

for (const quiz of quizzes) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quiz),
  });
  console.log(quiz.title, res.status);
}
