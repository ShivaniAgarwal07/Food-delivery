// <!-- <script>
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste World";
// const root = document.getElementById("root");
// root.appendChild(heading);
// </script> -->

const heading = React.createElement("h1", {}, "Namaste Everyone!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
