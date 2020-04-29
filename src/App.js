import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <main>
        <h1>
          Learn to code by watching others
        </h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
        <section>
          <p>
            Try it free 7 days then $20/mo. thereafter
          </p>
          <form>
             <input type="text" value="First Name"/>
             <input type="text" value="Last Name"/>
             <input type="text" value="Email Address"/>
             <input type="text" value="Password"/>
             <input type="submit" value="Claim your free trial" />
          </form>
          <p>By clicking the button, you are agreeing to our Terms and Services</p>
        </section>
      </main>







  );
}

export default App;
