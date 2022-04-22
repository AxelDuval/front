import UserList from "../../components/Users/UserList";
import LoadingSpinner from "../../components/UIElements/LoadingSpinner";
import { useState } from "react";

export default function index(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && <UserList items={props} />}
    </>
  );
}
export async function getStaticProps() {

  const response = await fetch(`http://localhost:5000/api/users`);
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}
