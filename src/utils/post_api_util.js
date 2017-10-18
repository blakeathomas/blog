export const fetchPosts  = () =>
fetch('https://blog-blakeathomas.c9users.io/wp-json/wp/v2/posts')
.then(data => data.json())