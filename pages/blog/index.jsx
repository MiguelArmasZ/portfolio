import React from 'react'
import { Layout, SectionLayout } from '../../components/layouts'
import { CardBlog } from '../../components/ui'
import { posts } from '../../data/blog'
import s from '../../styles/components/CardBlog.module.css'

const BlogPage = () => {
  return (
    <Layout>
      <SectionLayout>
        <ul className={s.List}>
          {posts.map((card, i) => (
            <CardBlog key={i} {...card} />
          ))}
        </ul>
      </SectionLayout>
    </Layout>
  )
}

export default BlogPage
