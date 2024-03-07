import './App.css';
import summaries from './data.json';

function App() {
  return (
    <div className="App">      
      <div className="main-container">
        <div className='left-container'>
          <h1 className='title'>Your Result</h1>
          <div className='result'>
            <p className='result__first-number'>76</p>
            <p className='result__second-number'>of 100</p>
          </div>
          <p className='great-text'>Great</p>
          <p className='main-text'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className='right-container'>
          <h2 className='sub-title'>Summary</h2>

          {
            summaries && summaries.map((summary, index) => (
              <div key={index} className={`mini-card ${summary.category.toLowerCase()}`}>
                <div className='div-card'>
                  <img src={summary.icon} alt={`icon ${summary.category.toLowerCase()}`} />
                  <p>{summary.category }</p>
                </div>
                <p className='summary-number'>{summary.score} <span className='summary-subnumber'>/ 100</span></p>
              </div>
            ))
          }
          
          <button className='btn'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;