

const Elements = React.createElement("div", { className: "container" }, [
  React.createElement("div", { className: "row" }, [
    React.createElement("h1", {}, "Hello There!"),
    React.createElement("h2", {}, "I'm from react!"),
  ]),
  React.createElement("div", { className: "row" }, [
    React.createElement("h1", {}, "Hello There!"),
    React.createElement("h2", {}, "I'm from react!"),
  ]),
]);

//const heading = React.createElement("h1", {}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Elements);
