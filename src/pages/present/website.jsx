import { SectionImage } from "@/components/Section"
import { SEO } from "@/components/SEO"
import TableOfContents from "@/data/ppt/TableOfContents"
export default function Website() {
  return (
    <>
      <SEO title="Website" />
      <SectionImage {...TableOfContents.Website} />
    </>
  )
}
