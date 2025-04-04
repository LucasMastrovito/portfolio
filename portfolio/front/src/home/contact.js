function Contact() {
    return(
        <div id='contact' className='c-3 page'>
            <div id='entitle'>
                <h1 id='name'>Contact</h1>
                <div id='contact-container'>
                    <form id='contact-form' className='card-white' action="mailto:lucas.mastrovito@epitech.eu" method="post" enctype="text/plain">
                        <div className='input'>
                            <label className='outline' htmlFor='name'>Nom: </label>
                            <input type="text" name="name" />
                        </div>
                        <div className='input'>
                            <label className='outline' htmlFor='mail'>Mail: </label>
                            <input type="text" name="mail" />
                        </div>
                        <div className='input' style={{height: '40%'}}>
                            <label className='outline' htmlFor='comment'>Message: </label>
                            <textarea style={{height: '60%'}} type="text" name="comment" size="50" />
                        </div>
                        <input className='form-btn' type="submit" value="Send" />
                    </form>
                    <div id='links-container' className="card-white">
                        <h2 id="lien" style={{marginTop: '0', fontStyle: 'italic'}}>Liens :</h2>
                        <div className="link">
                            <img className="link-img" alt="mail" src={process.env.PUBLIC_URL + '/mail.png'}/>
                            <h3 className='links outline' style={{margin: '0'}}>lucas.mastrovito@epitech.eu</h3>
                        </div>
                        <div className="link">
                            <img className="link-img" alt="linkedin" src={process.env.PUBLIC_URL + '/logo/linkedin.png'} />
                            <a className='links outline' href='https://www.linkedin.com/in/lucas-mastrovito/'>LinkedIn</a>
                        </div>
                        <div className="link">
                            <img className="link-img" alt="github" src={process.env.PUBLIC_URL + '/logo/git.png'} />
                            <a className='links outline' href='https://github.com/LucasMastrovito/'>GitHub</a>
                        </div>
                        <a
                            href="/cv.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{display: 'flex', justifyContent: 'center', width: '100%', textDecoration: 'none'}}
                        >
                            <button className="form-btn" style={{alignSelf: 'center', height: '3vh', width: '40%'}}>CV</button>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;