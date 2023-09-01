import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and COndition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi dolorum. Sapiente culpa perferendis esse possimus a eos est quae nihil, optio architecto molestias dicta nulla dolor repellat animi tempora.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;