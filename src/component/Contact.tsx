import React, { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    msg: string;
};


const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        msg: '',
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setIsSubmitted(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, msg } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.trim() || !email.trim() || !msg.trim()) {
            alert('Please fill all fields');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return;
        }

        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', msg: '' });
    };

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Contact Us</h2>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Enter name"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="text"
                    name="msg"
                    value={formData.msg}
                    placeholder="Enter message..."
                    onChange={handleChange}
                    style={styles.input}
                />

                <button type="submit" style={styles.button}>Submit</button>

                {isSubmitted && <p style={styles.thanks}>Thanks for your message!</p>}
            </form>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    wrapper: {
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        width: '300px',
        gap: '1rem',
    },
    input: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #444',
        backgroundColor: '#222',
        color: '#fff',
    },
    button: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
    },
    thanks: {
        marginTop: '1rem',
        color: '#4CAF50',
        fontWeight: 'bold',
    },
};

export default Contact;
