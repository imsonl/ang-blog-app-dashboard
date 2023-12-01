export interface Post {
    title:string,
    permalink:string,
    category:{
        category:string,
        categoryId: string
    },
    postImgPath :string,
    excerpt:string,
    content:string,
    isFeatured : Boolean,
    views: number,
    status:string,
    CreatedAt: Date 


}
