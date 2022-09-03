const posts=[
    {title:'Post One', body:'This is post one',createdAt:new Date()},
    {title:'Post Two', body:'This is post two',createdAt:new Date()}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            curDate=new Date();
            output+=`<li>${post.title} Last Edited <span class='timer'>${Math.round((curDate.getTime()-post.createdAt.getTime())/1000)}</span> seconds ago</li>`;
        });
        document.body.innerHTML=output;
        },0);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error =false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Somthing went wrong')
            }
        },1000)
    });
}

createPost({title:'Post Three',body:'This is third post',createdAt:new Date()}).then(getPosts).catch(err => console.log(err));
createPost({title:'Post Four',body:'This is Fourth post',createdAt:new Date()}).then(getPosts).catch(err => console.log(err));

function deleteAPostFromBack(getPosts){
    setTimeout(()=>{
        posts.pop();
        getPosts();
    },0);
}

function deletePosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(posts.length==0){
            reject('Error: Array is empty now')
        }
        else{
            resolve(getPosts);
        }
        },1000);
    });
}

let startDeleting=setInterval(()=>{
    deletePosts().then(deleteAPostFromBack).catch(err => {console.log(err);
    clearInterval(startDeleting);});
},1010);

startDeleting();
