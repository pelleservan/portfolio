import React from "react";

export default function Page() {
  return (
    <div id="container" style={{ height: "100%" }}>
      <iframe
        id="notebook"
        src="https://nbviewer.org/github/pelleservan/cnn_on_reduced_mnist/blob/main/mnist_semi_supervised.ipynb"
        style={{ width: "100%", height: "80vh", borderRadius: "10px" }}
        allowFullScreen
      />
    </div>
  );
}
