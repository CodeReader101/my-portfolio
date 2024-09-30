import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          About Me
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Hello! I'm [Your Name], a passionate front-end developer skilled in
          React, JavaScript, TypeScript, HTML, and CSS. I enjoy creating
          responsive and user-friendly web applications. I am constantly
          learning and exploring new technologies to enhance my skills and build
          better products.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          In my free time, I work on open-source projects, learn new tools, and
          write about web development. I have experience with frameworks and
          libraries such as ReactJS, Next.js, Tailwind CSS, and Bootstrap. I am
          also familiar with backend technologies and cloud platforms.
        </p>
        <p className="text-lg text-gray-700">
          If you'd like to connect or collaborate on a project, feel free to
          reach out!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

import { useEffect, useState } from "react";
import client from "../../studio/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { SanityClient } from "@sanity/client";

const builder = imageUrlBuilder(SanityClient);
function urlFor(source) {
  return builder.image(source);
}

// const About = () => {
//   const [author, setAuthor] = useState(null);

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type==author]{
//       name,
//       bio,
//       "authorImage":image.asset->url
//       }`
//       )
//       .then((data) => setAuthor(data))
//       .catch(console.error);
//   }, []);

//   if (!author) {
//     return <h1>Loading...</h1>;
//   }

//   return <div className=""></div>;
// };

// export default About;
