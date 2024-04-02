import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const yuncheng = allAuthors.find((p) => p.slug === 'yuncheng') as Authors
  const mainContent = coreContent(yuncheng)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={yuncheng.body.code} />
      </AuthorLayout>
    </>
  )
}
