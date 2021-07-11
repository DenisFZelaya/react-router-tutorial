const Post = ({match}) => {

    return (
        <div>
            <h1>Id is = {match.params.id} </h1>
        </div>
    );
}

export default Post;