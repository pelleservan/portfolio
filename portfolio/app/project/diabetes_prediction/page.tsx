import React from "react";

export default function Page() {
  return (
    <div id="container">
      <iframe
        id="notebook"
        src="https://nbviewer.org/github/pelleservan/diabets_prediction/blob/main/classification.ipynb"
        style={{ width: "100%", height: "800px", border: "none" }} 
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
