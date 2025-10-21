export const getPosts = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await promise.json()
    return json
}

export const getPost = async (params) => {
    // console.log(params);
    
    const postPromise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postJson = await postPromise.json()

    const commentsPromise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    const commentsJson = await commentsPromise.json()
    
    return [postJson, commentsJson]
}