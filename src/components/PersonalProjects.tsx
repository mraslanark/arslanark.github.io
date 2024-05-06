import Section from "@/components/Container";
import ProjectItem from "@/components/ProjectItem";
import projects from "@/data/projects.json";
import React from "react";

const header = {
  heading: "Personal Projects",
  seeAllLink: "/projects",
  subtitle: "Projects I have work on during my free time.",
};

interface PersonalProjectsProps {
  limit?: number;
  showSeeAll?: boolean;
}

const PersonalProjects: React.FC<PersonalProjectsProps> = ({
  limit,
  showSeeAll = true,
}) => {
  let data = projects;
  if (limit) {
    data = projects.slice(0, limit);
  }

  return (
    <Section invert header={header} showSeeAll={showSeeAll}>
      {data.map((project, index) => {
        return (
          <ProjectItem
            key={project.id}
            {...project}
            isLastItem={index === data.length - 1}
          />
        );
      })}
    </Section>
  );
};

export default PersonalProjects;
