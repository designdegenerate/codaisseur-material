// src/components/ArticleList.js
import { useState } from "react";
import { useEffect } from "react";
import "./ArticleCard";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function ArticleList() {

  const [articles, set_articles] = useState([]);

  //   {
  //     id: 1,
  //     title: "What is React all about?",
  //     body:
  //       "React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
  //   },
  //   {
  //     id: 2,
  //     title: "A lovely kid",
  //     body: "In fact, a kid is also the name of a baby goat!"
  //   },
  //   {
  //     id: 3,
  //     title: "On placeholder image URLs",
  //     body:
  //       "So yeah, you won't be able to look these images up. They're placeholders"
  //   }
  // ]);

  useEffect(
    () => {
      const fetchData = async() => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        console.log(response.data);

        set_articles(response.data);

      }
      fetchData();

    }, []
  );

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <div>
        {articles.map( (article) => {
          return <ArticleCard 
            key={article.id}
            title={article.title}
            content={article.body}
          />
        })}
      </div>
        <button onClick={ () => { set_articles( [] ) } }>Clear Notifications</button>
        <button onClick={ () => { set_articles(articles) } }>Reset NC</button>
    </div>
  );
}