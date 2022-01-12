import React, {useRef} from 'react'
import PageTitle from '../components/PageTitle'
import styles from '../styles/contact.module.scss'

const Form = () => {


    const nameRef =  useRef(null)
    const emailRef =  useRef(null)
    const messageRef =  useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("The form is not functioning yet but it will in the future \n Don't worry, nothing will happen to your info. \n Feel free to contact me via email: amhoume@gmail.com Thanks")

        // const data = {
        //     name: nameRef.current.value,
        //     email: emailRef.current.value,
        //     message: messageRef.current.value
        // }

    }

    return(
        <div className={styles.container}>
            <form  id="contact" className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Name
                </label>
                    <input className={styles.name} type="text" placeholder="First Name" ref={nameRef} />
                <label>
                    Email
                </label>
                    <input className={styles.email} type="email" placeholder="your email" ref={emailRef}/>
                <label>
                    Message
                </label>    
                <textarea  placeholder="Your Message" rows="4" cols="50" name="comment" form="contact" className={styles.message}></textarea>
                
                <button type="submit" className={styles.submitButton} >Submit</button>
                
            </form>


        </div>
    )
}

function Contact() {
    return (
        <div>
            <PageTitle title="CONTACT" />
            <Form />
        </div>
    )
}

export default Contact
