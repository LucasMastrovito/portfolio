function Contact() {
    return(
        <div id='contact' className='c-3 page'>
            <div id='entitle'>
                <h1 id='name'>Contact</h1>
                <div id='links-container'>
                    <h3 className='links outline' style={{margin: '0'}}>lucas.mastrovito@epitech.eu</h3>
                    <a className='links outline' href='https://www.linkedin.com/in/lucas-mastrovito/'>LinkedIn</a>
                    <a className='links outline' href='https://github.com/LucasMastrovito/'>GitHub</a>
                </div>
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
            </div>
        </div>
    )
}

export default Contact;