import React, { useState } from 'react';

const QuotationRequestForm = () => {
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://your-email-api-endpoint.com/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'kchiwakaya@gmail.com',
                subject: 'Quotation Request',
                body: `Email: ${email}\nDetails: ${details}`,
            }),
        });
        if (response.ok) {
            alert('Request sent successfully!');
        } else {
            alert('Failed to send request.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow" style={{ width: '600px' }}>
                <h2 className="mb-4" style={{ fontSize: '2rem' }}>Request a Quotation</h2>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Request Details:</label>
                    <textarea
                        className="form-control"
                        style={{ fontSize: '1.2rem' }} // Increased font size for textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Request Quotation</button>
            </form>
        </div>
    );
};
export default QuotationRequestForm;
// ... existing code ...
