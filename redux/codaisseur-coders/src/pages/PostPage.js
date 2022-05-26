import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { selectPost } from "../store/postPage/selectors";

export default function PostPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(selectPost);
  console.log(post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {post.loading
        ? "Loading"
        : 
        <div>
          <h1>{post.post.title}</h1>
          <ReactMarkdown children={post.post.content} />
        </div>
        }
    </div>
  );
}
