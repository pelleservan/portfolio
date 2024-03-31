import React from "react";

export default function Page() {
  return (
    <div id="container">
      <iframe
        id="notebook"
        src="https://nbviewer.org/github/pelleservan/cnn_on_reduced_mnist/blob/main/mnist_semi_supervised.ipynb"
        style={{ width: "100%", height: "800px", border: "none" }} 
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
