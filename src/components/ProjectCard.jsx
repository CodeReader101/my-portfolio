import {Button} from '@mui/material'

const ProjectCard = ({
  image,
  title,
  description,
  sourceLink,
  demoLink,
  techStack,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden  p-4 h-[520px] w-[350px] bg-[#19171a] relative flex flex-col shadow-lg text-white  transition-transform transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <img className="w-full h-48 object-cover rounded-lg" src={image} alt={title} />
      <div className=" py-4">
        <div className="font-bold text-white text-xl mb-2">{title}</div>
        <p className="text-[#959794] text-start text-sm h-24">{description}</p>
      </div>
      <div className="overflow-auto scrollbar-hide h-20 text-start">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block border-2 border-[#45433e] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="py-4 w-full flex justify-between ">
        <Button color='error' variant='contained'>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="  text-white font-bold"
        >
          Source Code
        </a>
        </Button>
        {demoLink?
        <Button color='error' variant='contained'>
          <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e9322e] text-white font-bold  "
          >
          Demo
          </a>
        </Button>:null}
        
      </div>
    </div>
  );
};

export default ProjectCard;
