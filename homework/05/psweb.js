import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body){
    return `<html>
    <head>
    <style>
    body {
    background-color:white;
    font-size:25px;
    text-align:center;
    font-color:black;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        box-shadow: 5px 5px 5px black;
        color:white ! important;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
        background-color: Saddlebrown;
    }
    a:visited {
        color:rgb(0, 0, 255);
    }
    a:active {
        color:white;
    }
    ol {
        display: inline-block;
        text-align: center;
        text-size: 25px;
    }
    </style>
    </head>
    <body>
    ${body}
    </body>
    </html>`
}

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = page(`<html>
<body>
<h1>我的自我介紹</h1>
<ol>
<li><a href="/name">姓名</a></li>
<li><a href="/age">年齡</a></li>
<li><a href="/gender">性別</a></li>
</ol>
</body>
</html>
`)
  } else if (pathname == '/name') {
    ctx.response.body = '張富安'
  } else if (pathname == '/age'){
    ctx.response.body = '19'
  } else if (pathname == '/gender'){
    ctx.response.body = 'boy'
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
