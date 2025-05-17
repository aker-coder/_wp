import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("blog.db");
db.query(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    title TEXT,
    body TEXT,
    posted_by TEXT,
    tags TEXT,
    comments TEXT,
    likes INTEGER DEFAULT 0
    )
`);

const posts = [
    {title:'Game skill', body:'先2再AA1再3再AA再1', posted_by:'Argers', tags:'#game', comments:'Nice bro', likes:6},
    {title:'travel', body:'日本是一個好地方，好想再去一次', posted_by:'Fu_an', tags:'#travel', comments:'+1', likes:66},
    {title:'technology', body:'NVIDIA顯卡出到50系列', posted_by:'黃仁勳', tags:'#technology', comments:'I need it', likes:666},
];

// Run a simple query
for (const post of posts)
  db.query("INSERT INTO posts (title, body, posted_by, tags, comments, likes) VALUES (?,?,?,?,?,?)", [post.title, post.body, post.posted_by, post.tags, post.comments, post.likes]);

// Print out data in table
for (const [id, time, title, body, posted_by, tags, comments, likes] of db.query("SELECT id, time, title, body,posted_by, tags, comments, likes FROM posts"))
  console.log(id, time, title, body, posted_by, tags, comments, likes);

// Close connection
db.close();