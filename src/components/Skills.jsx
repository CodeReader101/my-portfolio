import React from 'react';
import svgIcons from '../assets/svg/svgIcons';

const Skills = () => {
  return (
    <div className="flex flex-col gap-10 p-10 max-w-full bg-[#19171a]">
      
      
      <div className="skills-section">
        <h2 className="font-bold text-2xl text-white mb-4">Languages</h2>
        <div className="svgBox flex  items-center gap-6 flex-wrap">
          <img src={svgIcons.htmlSvg} className="skillSvg" alt="HTML" />
          <img src={svgIcons.cssSvg} className="skillSvg" alt="CSS" />
          <img src={svgIcons.jsSvg} className="skillSvg" alt="JavaScript" />
          <img src={svgIcons.tsSvg} className="skillSvg" alt="TypeScript" />
          <img src={svgIcons.pythonSvg} className="skillSvg" alt="Python" />
        </div>
      </div>

      <div className="skills-section">
        <h2 className="font-bold text-2xl text-white mb-4">Frameworks & Libraries</h2>
        <div className="svgBox flex flex-wrap items-center gap-6">
          <img src={svgIcons.reactSvg} className="skillSvg" alt="React.js" />
          <img src={svgIcons.nextSvg} className="skillSvg p-1 bg-white" alt="Next.js" />
          <img src={svgIcons.tailSvg} className="skillSvg" alt="Tailwind CSS" />
          <img src={svgIcons.bootSvg} className="skillSvg" alt="Bootstrap" />
        </div>
      </div>

      <div className="skills-section">
        <h2 className="font-bold text-2xl text-white mb-4">Tools</h2>
        <div className="svgBox flex flex-wrap items-center gap-6">
          <img src={svgIcons.gitSvg} className="skillSvg" alt="Git" />
          <img src={svgIcons.gitHubSvg} className="skillSvg" alt="GitHub" />
          <img src={svgIcons.viteSvg} className="skillSvg" alt="Vite" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
