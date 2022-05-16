export default function ArticleCard(props) {
  return (
    <div key={props.id} className="Article">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}