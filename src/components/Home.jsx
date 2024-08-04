import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Sunny from '/IMG/Sunny kabira Technical Resume.pdf'
import { useForm } from 'react-hook-form';
import { Cursor } from 'react-simple-typewriter'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = (props) => {

    const { register,
        handleSubmit,
        watch,
        setError,
        formState: { errors } }
        = useForm();

    const onSubmit = (data, event) => {
        // alert(`Your form is submitting ${data.fname} Thank you`);
        toast.success("User details is submitted successfully...");
        // console.log(data.fname+""+data.lname+""+data.email+""+data.textarea)
        // const setData={
        //     firstname: data.fname,
        //     lastname:data.lname,
        //     email:data.email,
        //     text:data.textarea
        // }

        const userDetails = [data.fname, data.lname, data.email, data.textarea];
        console.log(userDetails[0])

    }

    const style = {
        color: 'red'
    }

    return (
        <>
            {/* ========================main section- start=================================== */}
            <main id='home'>
                <section className="bgSection"></section>
                <section className="upperSection">
                    <section className="firstSection">
                        <div className="leftSection">
                            Hi, My name is <span className="textName">Sunny</span>

                            <div>and I am a Java Developer passionate</div>
                            <span id="element" >{props.type}</span><Cursor />
                            <div className="buttons">
                                <a href='./IMG/Sunny kabira Technical Resume.pdf' className="btn" download><i className="fa-solid fa-download"></i>Resume</a>
                                <a className="btn" href="https://github.com/kabirasunny"><i className="fa-brands fa-github"></i> Github</a>
                            </div>
                        </div>
                        <div className="rightSection">
                            <img src="./IMG/sunnybg.JPG" alt="Profile picture" />
                        </div>
                    </section>
                </section>
            </main>
            {/* ========================main section- end=================================== */}
            {/* ========================skill section- start=================================== */}

            <section className="skills container">
                <div className="title">
                    <img src="./IMG/mixer.png" alt="skill icon" />
                    <h2 id='skill'>Skills</h2>
                </div>
                <div className="row">
                    <div className="item">
                        <div className="item-text">
                            <span>Java</span>
                            <span className="w-90">90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-90"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>Servlet API</span>
                            <span className="w-80">80%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-80"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>Hibernate</span>
                            <span className="w-90">90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-90"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>Spring boot</span>
                            <span className="w-90">90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-90"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>MySQL</span>
                            <span className="w-70">70%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-70"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>HTML5</span>
                            <span className="w-90">90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-90"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>CSS3</span>
                            <span className="w-90">90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-90"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>JavaScript</span>
                            <span className="w-80">80%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-80"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-text">
                            <span>Reactjs</span>
                            <span className="w-70">70%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar w-70"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========================skill section- end=================================== */}
            {/* ========================education section- start=================================== */}

            <section className="education">
                <div className="title">
                    <img src="./IMG/book.png" alt="education icon" />
                    <h2 id='education'>Education</h2>
                </div>
                <div className="timeline">
                    <div className="container left-container">
                        <div className="icon"><i className=" left-cap fa-solid fa-graduation-cap"></i></div>
                        <div className="text-box">
                            <h2>Master Of Computer Application</h2>
                            <small>2020 - 2022</small>
                            <p>I have completed Master of Computer Application from Dav Institute of Management, MD University Rohtak</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>

                    <div className="container right-container">
                        <div className="right-icon"><i className=" left-cap fa-solid fa-graduation-cap"></i></div>
                        <div className="text-box">
                            <h2>Bachelor Of Computer Application</h2>
                            <small>2017 - 2020</small>
                            <p>I have completed Bachelor of Computer Application from Govt College Tigaon, MD University Rohtak</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>

                    <div className="container left-container">
                        <div className="icon"><i className=" left-cap fa-solid fa-graduation-cap"></i></div>
                        <div className="text-box">
                            <h2>12th (Sr Secondry)</h2>
                            <small>2016</small>
                            <p>I have completed 12th (Sr Secondry) from Govt Boys Sr Secondry School, Board of School Education Haryana, Bhiwani</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>

                    <div className="container right-container">
                        <div className="right-icon"><i className=" left-cap fa-solid fa-graduation-cap"></i></div>
                        <div className="text-box">
                            <h2>10th (Secondry)</h2>
                            <small>2013</small>
                            <p>I have completed 10th (Secondry) from Paramhansa Sr Secondry School, Board of School Education Haryana, Bhiwani</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================education section- end=================================== */}
            {/* ========================project section- start=================================== */}

            <section className="projects">
                <div className="title">
                    <img src="./IMG/safe.png" alt="project icon" />
                    <h2 id='project'>Projects</h2>
                </div>
                <div className="projects-card">

                    <div><div className="projectName">
                        <p>CarWash - Project</p>
                    </div><div className="card">
                            <img src="./IMG/carwash-thumbnail.png" alt="project picture" />
                        </div><div className="projectButtons">
                            <a href="/" target='_blank' className="btn">View <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/kabirasunny/CarWash-Project.git" target='_blank' className="btn">Source <i className="fa-solid fa-code"></i></a>
                        </div></div>

                    <div ><div className="projectName">
                        <p>Frozen Yogurt Shop - Website</p>
                    </div><div className="card">
                            <img src="./IMG/FrozenYogurtShop-thumbnail.png" alt="project picture" />
                        </div><div className="projectButtons">
                            <a href="https://frozenyourshop.netlify.app/" target='_blank' className="btn">View <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/kabirasunny/Frozen-website.git" target='_blank' className="btn">Source <i className="fa-solid fa-code"></i></a>
                        </div></div>
                </div>
            </section>
            {/* ========================project section- end=================================== */}
            {/* ========================interest section- start=================================== */}

            <section className="interests">
                <div className="title">
                    <img src="./IMG/heart.png" alt="Interest icon" />
                    <h2 id='interest'>Interest</h2>
                </div>
                <div className="para">
                    <p>First of all I love Traveling, music is my favorite. Love coding, movies and playing game with my buddies. I spend quite a lot of time in movie and reading books, these keeps me fresh for working environment.</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <i className="fa-solid fa-film"></i>
                        <h4>Movie</h4>
                    </div>
                    <div className="card card-green">
                        <i className="fa-solid fa-plane"></i>
                        <h4>Traveling</h4>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-code"></i>
                        <h4>Coding</h4>
                    </div>
                    <div className="card card-green">
                        <i className="fa-solid fa-gamepad"></i>
                        <h4>Gaming</h4>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-music"></i>
                        <h4>Music</h4>
                    </div>
                    <div className="card card-green">
                        <i className="fa-solid fa-cookie-bite"></i>
                        <h4>Cooking</h4>
                    </div>
                </div>
            </section>

            {/* ========================skill section- end=================================== */}
            {/* ========================contact section- start=================================== */}

            <section className="contact">
                <div className="title">
                    <img src="./IMG/contact.png" alt="Contact icon" />
                    <h2 id='contact'>Contact</h2>
                </div>
                <div className="contactForm">
                    <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                        <input required type="text" {...register("fname", { pattern: { value: /^[A-Za-z]+$/i, message: "Must be entered character not a number" } })} placeholder="First name*" />
                        {errors.fname && <div className='red' style={style}> {errors.fname.message}</div>}
                        <input required type="text" {...register("lname", { pattern: { value: /^[A-Za-z]+$/i, message: "Must be entered character not a number" } }, { maxLength: { value: 15, message: "Character Lenth is 15" } })} placeholder="Last name*" />
                        {errors.lname && <div className='red' style={style}>{errors.lname.message}</div>}
                        <input required type="email" {...register("email", { pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Must be entered valid email address" } })} placeholder="Email address*" />
                        {errors.email && <div className='red' style={style}>{errors.email.message}</div>}
                        <textarea required name="" {...register("textarea", { pattern: { value: /^[A-Za-z]+$/i, message: "Must be entered character not a number" } })} placeholder="Share your thoughts*"></textarea>
                        {errors.textarea && <div className='red' style={style} >{errors.textarea.message}</div>}
                        <button type="submit" className="btn">Send</button>
                    </form>
                </div>
            </section>

            {/* ========================contact section- end=================================== */}
        </>
    )
}

export default Home
