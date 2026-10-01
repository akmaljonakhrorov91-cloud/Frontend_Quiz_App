// custom hooks
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("https://6abdf36cc4d5ac5483017422.mockapi.io/quizzes");
  return (
    <div>
      {isPending && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.map((item) => {
            return (
              <Link
                key={item.title}
                to={`/quiz/${item.title}`}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
