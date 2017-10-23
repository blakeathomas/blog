import React from 'react'
import Grid from 'material-ui/Grid'
import PostPreview from '../PostPreview'

const ListView = ({ posts }) => (
  <Grid container justify="center">
   
      {posts &&
        posts.edges.map(post => (
          <Grid item xs={6} sm={6} md={6} lg={6}>
          <PostPreview
            key={post.node.id}
            id={post.node.id}
            date={post.node.date}
            imageURL={
              post.node.featuredImage && post.node.featuredImage.sourceUrl
            }
            title={post.node.title}
            category={post.node.categories.edges[0].node.name}
            content={post.node.content}
          />
    </Grid>
    ))}
  </Grid>
)

export default ListView
