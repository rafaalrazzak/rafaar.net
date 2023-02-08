import { SectionText } from "@/components/Section"
import { SEO } from "@/components/SEO"
import TableOfContents from "@/data/ppt/TableOfContents"
export default function JaringanKomputer() {
  return (
    <>
      <SEO title="Jaringan Komputer" />
      <SectionText {...TableOfContents.JaringanKomputer} />
    </>
  )
}
