import React, { useState } from 'react';
import questions from './data';
import SingleQuestion from './Question';


function App() {
  return (
    <main>
      <div className="container">
        <div>
          <h3>Questions and answers about login</h3>
        </div>
        <div>
          {questions.map((question) => {
          return <article className='question' key={question.id}>
              <SingleQuestion {...question} />
            </article>
          })
          }
        </div>
      </div>
    </main>
  )
}

export default App;
