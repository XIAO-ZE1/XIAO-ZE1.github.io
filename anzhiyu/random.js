var posts=["posts/16107.html","posts/ae28.html","posts/ddae.html","posts/3458e8f8.html","posts/371d898c.html","posts/b2daadad.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };