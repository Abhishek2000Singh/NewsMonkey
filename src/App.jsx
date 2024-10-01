import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const pageSize = 15;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [progress, setProgress] = useState(10);

    return (
      <div>

        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>

            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
          </Routes>
        </Router>
      </div>
    );
  }


export default App;



// ******************************Class Based Components************************

// export default class App extends Component {

//   apiKey= import.meta.env.VITE_API_KEY;

//   state = {
//     progress: 10,
//   }

//   setProgress=(progress)=>{
//     setState({ progress: progress })
//     // progress:0
//   }
//   pageSize = 15;
//   render() {
//     return (
//       <div>

//         <Router>
//           <Navbar />
//           <LoadingBar
//             color='#f11946'
//             progress={state.progress}
//           // onLoaderFinished={() => setProgress(0)}
//           />
//           <Routes>

//             <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
//             <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
//             <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
//             <Route exact path="/general" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
//             <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
//             <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
//             <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
//             <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }


