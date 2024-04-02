import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const soheila = allAuthors.find((p) => p.slug === 'soheila') as Authors
  const mainContent = coreContent(soheila)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={soheila.body.code} />
      </AuthorLayout>
    </>
  )
}
