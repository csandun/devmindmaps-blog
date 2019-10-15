import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InstShowcaseWrapper, {
  InstashowcaseCol,
  InstashowcaseRow,
  ShowcaseTitle,
} from "./style"
import InstagramGrid from "components/InstagramGrid/InstagramGrid"
import { IoLogoInstagram } from "react-icons/io"

interface ShowcaseProps {}

const InstagramShowcase: React.FunctionComponent<ShowcaseProps> = props => {
  const InstaData = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 5) {
        edges {
          node {
            id
            likes
            comments
            localFile {
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 350, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const InstaPosts = InstaData.allInstaNode.edges

  return '';
}

export default InstagramShowcase
