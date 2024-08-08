import React, { useEffect, useState } from 'react';
import { projectsData, ProjectsNav } from './Data';
import WorkItem from './WorkItem';

const Works: React.FC = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState<{ id: number; image: string; title: string; category: string ; link?: string }[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category === item.name && project.link !== undefined;
      });

      setProjects(newProject);
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const name :string = e.currentTarget.textContent?.toLowerCase() || '' 
    setItem({name});
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {ProjectsNav.map((item, index) => (
          <span
            className={`${active === index ? 'active-work' : ''} work__item`}
            key={index}
            onClick={(e) => {
              handleClick(e, index);
            }}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItem item={item}  key={item.id}  />
        ))}
      </div>
    </div>
  );
};

export default Works;
