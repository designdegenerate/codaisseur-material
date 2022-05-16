export default function Section(props) {
  return (
    <div className={`section ${props.css}`}>
      <div className="component-section-header">
        <div className="title-badge">
          <div className="title-badge-title">{props.badgeTitle}</div>
        </div>

        <h2>
          <div className="component-title ">{props.compTitle}</div>
        </h2>

        <div className="description">
          {props.description}
        </div>
      </div>

      <div className="component-usp-row">
        <div className="item team">
          <img
            alt=""
            className="image"
            src={props.image1URL}
          />
          <div className="component-title title">
            {props.image1Text}
          </div>
        </div>
        <div className="item team">
          <img
            alt=""
            className="image"
            src={props.image2URL}
          />
          <div className="component-title title">
            {props.image2Text}
          </div>
        </div>
        <div className="item team">
          <img
            alt=""
            className="image"
            src={props.image3URL}
          />
          <div className="component-title title">
            {props.image3Text}
          </div>
        </div>
      </div>
    </div>
  );
}
