const ProjectCard = ({
  image,
  title,
  description,
  sourceLink,
  demoLink,
  techStack,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 h-[480px] w-[350px] bg-slate-600 relative">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 w-[90%] absolute bottom-3 flex justify-between">
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid-cols-1"
        >
          Source Code
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded grid-cols-2"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
