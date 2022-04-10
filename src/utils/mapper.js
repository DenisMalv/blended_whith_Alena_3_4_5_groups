 const mapper = (data) => {
    return data.map(({ backdrop_path: img, title, id, }) => ({img,title,id,watched:false}))
}

export default mapper 