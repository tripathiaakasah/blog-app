import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { addBlog } from '../../Redux/Actions/actions';
import { ADD_BLOG } from '../../Redux/Types/types';

const HomePage = (props) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state);

    useEffect(() => {
        setBlogDetails(data.blogDetails)
    }, [data]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [listofBlogs, setBlogDetails] = useState([]);

    const AddBlog = () => {
        let date = new Date().toISOString();
        let details = {
            title,
            content,
            date
        }
        if (title !== "" && content !== "") {
            dispatch(addBlog(details));
            setTitle("");
            setContent("");
        }
    }

    const Logout = () => {
        localStorage.removeItem("userDetails");
        props.history.push('/');
    }

    const dateChangeFunc = (date) => {
        let findDate = new Date(date);
        return `${findDate.getDate()}/${(findDate.getMonth() + 1)}/${findDate.getFullYear()} at ${('0' + findDate.getHours()).slice(-2)}:${('0' + findDate.getMinutes()).slice(-2)}`;
    }

    return <div className="home_background px-lg-5 px-4 py-4">
        <div className="row m-0 flex-column">
            <div className="col-12 p-0 mb-4">
                <div className="row m-0">
                    <div className="col-lg-10 col-8 p-0">
                        <h4>Add New Blog</h4>
                    </div>
                    <div className="col-lg-2 col-4 p-0 justify-content-end d-flex">
                        <button onClick={() => Logout()} className="btn btn-danger w-100" type="button">Logout</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-12 p-0">
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Blog Title</label>
                    <input type="email" class="form-control" value={title} id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)} placeholder="Enter here..." />
                </div>
            </div>
            <div className="col-lg-5 col-12 p-0">
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Blog content</label>
                    <textarea class="form-control" value={content} id="exampleFormControlTextarea1" placeholder="Enter here..." onChange={(e) => setContent(e.target.value)} rows="3"></textarea>
                </div>
            </div>
            <div className="col-lg-3 col-12 p-0">
                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-primary w-50" onClick={() => AddBlog()} type="button">Add Blog</button>
                </div>
            </div>
        </div>

        <div className="row m-0 mt-5">
            <div className="col-12 p-0 mb-4">
                <h4>My Added Blogs</h4>
            </div>

            <div className="row m-0 w-100">
                {(listofBlogs || []).map((v, i) => {
                    return <div key={i} className="col-lg-3 col-12 pl-0 p-0 pr-lg-4">
                        <div class="card mb-4" >
                            <div class="card-body">
                                <h5 class="card-title">{v.title}</h5>
                                <p class="card-text">{v.content}</p>
                                <p class="card-text mt-4 text-muted text_size_14">Created on {dateChangeFunc(v.date)}</p>
                            </div>
                        </div>
                    </div>
                })}

                {!listofBlogs.length && <p className="mt-5 text-center w-100">No Blogs Added</p>}
            </div>
        </div>
    </div>
}

export default HomePage;