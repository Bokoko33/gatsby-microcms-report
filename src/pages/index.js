import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <>
    <section>
      <p>ブログ一覧</p>
      <ul>
        {data.allMicrocmsBlog.nodes.map(node => (
          <li>{node.title}</li>
        ))}
      </ul>
    </section>

    <section>
      <p>お知らせ一覧</p>
      <ul>
        {data.allMicrocmsNews.nodes.map(node => (
          <li>{node.title}</li>
        ))}
      </ul>
    </section>
  </>
)

export const query = graphql`
  query {
    allMicrocmsBlog {
      nodes {
        title
      }
    }
    allMicrocmsNews {
      nodes {
        title
      }
    }
  }
`

export default IndexPage
