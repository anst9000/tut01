import { createElement, Fragment } from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return (
    <Fragment>
      <Person />
      <Message />
    </Fragment>
  );
}

const Person = () => (
  <>
    <h3>This is Andy</h3>
  </>
);

const Message = () => {
  return (
    <>
      <p>This is my message</p>
    </>
  );
};

ReactDOM.render(<Greeting />, document.getElementById('root'));
