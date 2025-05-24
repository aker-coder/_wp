import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'

const posts = [
    { id: 0, title: 'learning problem', body: 'Learning English isn’t easy! Grammar rules are confusing, and pronunciation feels unpredictable. Words like “tough” and “though” trip me up all the time. But I keep going—mistakes help me improve! What’s your biggest challenge in learning English?', created_at:new Date() },
    { id: 1, title: 'Adventure Awaits!', body: "Escape the ordinary and embrace the extraordinary! Travel opens doors to new experiences, cultures, and unforgettable memories. Whether it's wandering through ancient streets, soaking up breathtaking landscapes, or savoring local delicacies, every journey is a story waiting to be told. Where’s your next destination?", created_at:new Date() }
];

const router = new Router();

router.get('/', list)
    .get('/post/new', add)
    .get('/post/:id', show)
    .post('/post', create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
    ctx.response.body = await render.list(posts);
}

async function add(ctx) {
    ctx.response.body = await render.newPost();
}

async function show(ctx) {
    const id = ctx.params.id;
    const post = posts[id];
    if (!post) ctx.throw(404, 'invalid post id');
    ctx.response.body = await render.show(post);
}

async function create(ctx) {
    const body = ctx.request.body
    if (body.type() === "form") {
        const pairs = await body.form()
        const post = {}
        for (const [key, value] of pairs) {
            post[key] = value
        }
        console.log('post=', post)
        const id = posts.push(post) - 1;
        post.created_at = new Date(); // 設定建立時間
        post.id = id;
        ctx.response.redirect('/');
    }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
