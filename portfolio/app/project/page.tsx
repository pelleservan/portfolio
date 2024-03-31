// import React from "react";

// export default function Page() {
//     return(
//         <React.Fragment>

//                 <div id='container'>
//                     <h2>Projects</h2>
//                 </div>

//         </React.Fragment>
//     )
//   }


import React from "react";

export default function Page() {
  return (
    <div id="container">
      <h2>Projects</h2>
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
