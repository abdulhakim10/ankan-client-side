import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mb-8'>
      <h2 className="text-4xl font-semibold text-center py-8 text-purple-600">
        Blog
      </h2>
      <div className="w-4/5 mx-auto bg-purple-100 border border-purple-600 p-4 rounded-lg">
        <h4 className="text-xl font-semibold text-purple-600">
          1: Difference between SQL and NoSQL
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL
        </p>
        <br />
        <h4 className="text-xl font-semibold text-purple-600">
          2: What is JWT, and how does it work?
        </h4>
        <p className="text-md font-semibold text-slate-900">
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </p>
        <br />
        <h4 className="text-xl font-semibold text-purple-600">
          3: What is the difference between javascript and NodeJS?
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
        <br />
        <h4 className="text-xl font-semibold text-purple-600">
          4: How does NodeJS handle multiple requests at the same time??
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
    );
};

export default Blog;