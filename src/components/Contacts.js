import React from "react";

function Contacts(props) {
  setTimeout(() => {
    props.history.push("./about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contacts</h4>
      <p>
        React Router is the de-facto React routing library, and it’s one of the
        most popular projects built on top of React. React at its core is a very
        simple library, and it does not dictate anything about routing. Routing
        in a Single Page Application is the way to introduce some features to
        navigating the app through links, which are expected in normal web
        applications: The browser should change the URL when you navigate to a
        different screen Deep linking should work: if you point the browser to a
        URL, the application should reconstruct the same view that was presented
        when the URL was generated. The browser back (and forward) button should
        work like expected. Routing links together your application navigation
        with the navigation features offered by the browser: the address bar and
        the navigation buttons.
      </p>
    </div>
  );
}

export default Contacts;
