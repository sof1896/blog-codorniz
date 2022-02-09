import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              <span>{article.attributes.category.data.attributes.name}</span>
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}

              <p id="description" className="uk-text-desc">
              {article.attributes.description}</p>

            <p className="boton"><span className="boton__card">Leer más</span></p>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;