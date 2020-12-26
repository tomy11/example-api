import posts from '../services/index.service';
import category from '../services/category.service';

const post = (req, res) => {
    let item = Object.assign(posts);
    let terget = {
        title: item.posts.title,
        description: item.posts.description,
        create_by: item.posts.create_by,
        category: category.category
    }
    res.json(terget);
};

export default {post};
