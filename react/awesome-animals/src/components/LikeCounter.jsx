import { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const [hasLiked, setHasLiked] = useState(false);

  const increaseCounter = () => {
    set_numLikes( numLikes + 1);
  }

  const resetCounter = () => {
    set_numLikes(0);
  }

  const setLiked = () => {
    setHasLiked(!hasLiked);
  }

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      {hasLiked ? (<p>You liked this!</p> ) : null}
      <button onClick={increaseCounter}>Like</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={setLiked}>Like this</button>
    </div>
  );
}