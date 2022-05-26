import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken } from "../store/auth/selectors";
import { getProfile } from "../store/auth/selectors";

export default function ProfilePage() {
  const hasToken = useSelector(getToken);
  const profile = useSelector(getProfile);

  if (!hasToken) {
    return (
      <p>
        Please <Link to="/login">login</Link> to view your profile
      </p>
    );
  }

  return (
    <div>
      {profile ? (
        <div>
          <h1>Hello {profile.name}!</h1>
          <p>{profile.email}</p>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}
