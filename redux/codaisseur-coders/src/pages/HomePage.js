import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/actions";
import { selectFeedPosts } from "../store/feed/selectors";
import { Link } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();
  const feed = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {feed.loading
          ? "Loading"
          : feed.map((post) => {
              return (
                <li>
                  <Link to={`/post/${post.id}`}>
                    <h2>{post.title}</h2>
                  </Link>
                  <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
                </li>
              );
            })}
        <button onClick={() => dispatch(fetchPosts)}>Load more</button>
      </ul>
    </div>
  );
}
