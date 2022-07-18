import React from 'react'
import { useRouter } from 'next/router'
import { Layout, SectionLayout } from '../../components/layouts'
import { posts } from '../../data'
import s from '../../styles/components/CardBlog.module.css'
import { useMainContext } from '../../hooks'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../components/ui'

const PostPage = () => {
  const { query } = useRouter()
  const { lang } = useMainContext()
  const [entry] = posts.filter((post) => post.href === query.name)
  const {
    post: {
      iframe,
      title,
      description,
      repo,
      code,
      linksText: { repo: repoText, code: codeText }
    }
  } = entry

  return (
    <Layout>
      <SectionLayout>
        <h2 className={s.Title}>{title[lang]}</h2>
        <div className={s.WrapIframe}>
          <iframe
            className={s.Iframe}
            src={iframe}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <div className={s.Info}>
            <p className={s.Description}>{description[lang]}</p>
            <div className={s.Keypad}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className={s.Link}
                href={repo}
              >
                {repoText[lang]}
                <Icon css={s.Icon} icon={faGithub} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className={s.Link}
                href={code}
              >
                {codeText[lang]}
                <Icon css={s.Icon} icon={faCode} />
              </a>
            </div>
          </div>
        </div>
      </SectionLayout>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = posts.map(({ href }) => ({
    params: { name: href }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {}
  }
}

export default PostPage
