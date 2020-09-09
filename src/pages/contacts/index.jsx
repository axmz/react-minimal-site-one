import React from 'react'
import './styles.scss'

const Contacts = () => {

    return (
        <div className="pagecontacts">
            <div className="pagecontacts__content">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8305.346636408349!2d18.060389730588124!3d59.328304599139905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e1!3m2!1sen!2s!4v1599673032961!5m2!1sen!2s" 
                    width="100%" 
                    height="600" 
                    frameborder="0" 
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="0">
                </iframe>
            </div>
        </div>
    )
}

export default Contacts