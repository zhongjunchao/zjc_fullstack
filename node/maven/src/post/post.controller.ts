import { Request, Response } from 'express';
import { createPost } from './post.service'

export const store = async (
    request: Request,
    response: Response
) => {
    console.log(request.body, "kksk");
    const { title, content } = request.body
    const data = await createPost({ title, content })
    response.status(201).send('保存成功')
}
