import React from 'react';
import './Blog.css'
import blog from "../component/assets/blog-1.jpg"
import blog1 from "../component/assets/blog-2.jpg"
import blog2 from "../component/assets/blog-3.jpg"

export const Blog = () => {
    return (
        <div>
            <div className='blog-heading' >
                <p>My Blogs</p>
                <h2>Latest News</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nihil nam iste, qui corrupti saepe voluptatem vitae cumque facilis provident doloremque, dignissimos atque.</p>
            </div>

            <div className="blog-work">
                <div className="blogs" >
                    <img src={blog} alt="Error" />
                    <h3>Design For Everyone</h3>
                    <p>Posted By: Admin
                        456
                        123

                    </p>
                    <p className='para-format'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam, molestiae eum quisquam corrupti, aliquid ea perferendis, officia ad possimus deleniti nihil maxime.</p>
                    <p className='clr-orange'>Read More</p>
                </div>
                <div className="blogs">
                    <img src={blog1} alt="Error" />
                    <h3>Web Layouts</h3>
                    <p>Posted By: Admin
                        456
                        123

                    </p>
                    <p className='para-format'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam, molestiae eum quisquam corrupti, aliquid ea perferendis, officia ad possimus deleniti nihil maxime.</p>
                    <p className='clr-orange'>Read More</p>
                </div>
                <div className="blogs">
                    <img src={blog2} alt="Error" />
                    <h3>Bootstrap FrameWork</h3>
                    <p>Posted By: Admin
                        likes:456
                        com:123</p>
                    <p className='para-format'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam, molestiae eum quisquam corrupti, aliquid ea perferendis, officia ad possimus deleniti nihil maxime.</p>
                    <p className='clr-orange'>Read More</p>
                </div>
            </div>
            <div className='hireme-top'>
                <div className="hireme">
                    <div className='hireme-left'>

                        <h2>Hire Me For Your Project</h2>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                    </div>
                    <div className='hireme-right'>
                        <button>Hire Me!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
