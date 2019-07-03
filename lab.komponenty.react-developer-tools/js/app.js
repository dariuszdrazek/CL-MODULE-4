import React from "react";
import ReactDOM from "react-dom";

function Article(props) {
  const { title, url, content } = props.data;

  return (
    <article>
      <ArticleHeader title={title} />
      <ArticleMedia url={url} />
      <p>{content}</p>
    </article>
  );
}

function ArticleHeader(props) {
  const { title } = props;
  return <h2>{title}</h2>;
}

function ArticleMedia(props) {
  const { url } = props;
  return <iframe width="560" height="315" src={url} frameborder="0" />;
}

function App() {
  const article = {
    title: "Kiedy nie ma JSON'a",
    url: "https://www.youtube.com/embed/b4QDxoWlPFw",
    content:
      "In computing, JavaScript Object Notation (JSON) is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format used for asynchronous browser–server communication, including as a replacement for XML in some AJAX-style systems."
  };

  return (
    <>
      <h1>News</h1>
      <section>
        <Article data={article} />
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
