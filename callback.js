const posts=[
    {title:'Post One', body:'This is post one',createdAt:new Date()},
    {title:'Post Two', body:'This is post two',createdAt:new Date()}
];

function getPosts(lastEditedInSecodsAgo){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            curDate=new Date();
            output+=`<li>${post.title} Last Edited <span class='timer'>${Math.round((curDate.getTime()-post.createdAt.getTime())/1000)}</span> seconds ago</li>`;
        });
        document.body.innerHTML=output;
        lastEditedInSecodsAgo()
        },2000);
}

function createPost(post,callback,lastEditedInSecodsAgo){
    setTimeout(()=>{
        posts.push(post);
        callback(lastEditedInSecodsAgo);
    },2000)
}

function create4thPost(post,callback){
    callback(post);
}

createPost({title:'Post Three',body:'This is third post',createdAt:new Date()},getPosts,lastEditedInSecodsAgo);

create4thPost({title:'Post Four',body:'This is fourth post',createdAt:new Date()},createPost);

function lastEditedInSecodsAgo(){
let timer=document.querySelectorAll('.timer')
setInterval(()=>{
    timer.forEach((time,index)=>{
        curDate=new Date();
        time.innerHTML=Math.round((curDate.getTime()-posts[index].createdAt.getTime())/1000);
    });
},1000);
}