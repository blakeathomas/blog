import React from 'react'
import Grid from 'material-ui/Grid'
import PostPreview from '../PostPreview'

const GridView = ({ posts }) => (
  <Grid container>
    {posts &&
      posts.edges.map(post => (
        <Grid key={post.node.id} item xs={12} sm={6} md={4} lg={3}>
          <PostPreview
            style={{ height: '100%' }}
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

export default GridView
