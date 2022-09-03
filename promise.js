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
        },1000);
}


// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);

//             const error =false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error: Somthing went wrong')
//             }
//         },2000)
//     });
// }

// asycn await create Post
const createPost=async (post)=>{
    const createPromise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error =false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Somthing went wrong');
            }
        },2000);
    });
    let res;
    try{
        res=await createPromise;
    }
    catch(e){
        res=e;
    }
    return res;
};

// function deletePost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(posts.length==0){
//             reject('Error: Array is empty now')
//         }
//         else{
//             resolve(posts);
//             posts.pop();
//             getPosts();
//         }
//         },1000);
//     });
// }

//async await delete post
const deletePost= async()=>{
    const deletePromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(posts.length==0){
            reject('Error: Array is empty now')
        }
        else{
            resolve(posts);
            posts.pop();
            getPosts();
        }
        },1000);
    });
    let res;
    try{
        res=await deletePromise;
    }
    catch(e){
        res=e;
    }
    return res;
}

//Promise
// createPost({title:'Post Three',body:'This is third post',createdAt:new Date()}).then(getPosts).then(deletePost).then(deletePost).then(deletePost).then(deletePost).catch(err => {    console.log(err);
//     createPost({title:'Post Four',body:'This is Fourth post',createdAt:new Date()}).then(getPosts).then(deletePost);
// });

// calling for async await
createPost({title:'Post Three',body:'This is third post',createdAt:new Date()}).then(getPosts).then(deletePost).then(deletePost).then(deletePost).then(deletePost).then((err)=>{console.log(err);
    createPost({title:'Post Four',body:'This is Fourth post',createdAt:new Date()}).then(getPosts).then(deletePost);
});




// let startDeleting=setInterval(()=>{
//     deletePosts().then(deleteAPostFromBack).catch(err => {console.log(err);
//     clearInterval(startDeleting);});
// },1010);


// //Promise.all
// const promise1 =Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3=new Promise((resolve,reject) =>setTimeout(resolve,2000,'Goodbye')
// );

// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

// const updateLastUserActivityTime=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         getPosts();
//         resolve(posts);
//     },1000);
// })

// const createPostPromise=createPost({title:'Post Four',body:'This is Fourth post',createdAt:new Date()});

// Promise.all([updateLastUserActivityTime,createPostPromise]).then(obj=>{console.log(JSON.parse(JSON.stringify(obj[0]))); deletePost().then(posts=>console.log(posts))});