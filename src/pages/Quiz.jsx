// rrd
import { useParams } from "react-router-dom";
// hooks
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
//component
import { Test } from "../components";
function Quiz() {
  const { title } = useParams();
  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://6abdf36cc4d5ac5483017422.mockapi.io/quizzes?title=${title}`
  );

  return (
    <section className="quiz-contaner container">
      {isPending && <h2>loading ...</h2>}
      {error && <p>{error}</p>}
      {quizzes && <Test questions={quizzes[0]} />}
    </section>
  );
}

export default Quiz;
