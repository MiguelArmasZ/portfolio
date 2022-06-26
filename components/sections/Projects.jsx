import React from 'react'
import { projectsData } from '../../data/projects'
import { useMainContext } from '../../hooks'
import { SectionLayout } from '../layouts'
import { Heading, Project } from '../ui'
import s from '../../styles/components/Projects.module.css'

export const Projects = () => {
  const { lang } = useMainContext()
  const { heading, projects } = projectsData

  return (
    <>
      <span id='projects'></span>
      <SectionLayout>
        <Heading>{heading[lang]}</Heading>
        <ul className={s.Projects}>
          {projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </ul>
      </SectionLayout>
    </>
  )
}
