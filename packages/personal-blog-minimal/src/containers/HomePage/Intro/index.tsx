import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from "./style"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/chathurangasandunkumara",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/ChathurangaSandun",
    tooltip: "Github",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/csandunkumara",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/csandun/",
    tooltip: "Linked In",
  },
]

const Intro: React.FunctionComponent<IntroProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const { author, about } = Data.site.siteMetadata
  const AuthorImage = Data.avatar.childImageSharp.fluid

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          Hey! I’m <b>{author}</b>
        </IntroTitle>
        <Desciption><b>{author}</b> {about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  )
}

export default Intro
