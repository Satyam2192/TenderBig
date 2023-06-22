import { useEffect, useState } from 'react';
import './modal.css';

const SubscribePage = () => {

    const [key, setKey] = useState("");
    useEffect(() => {
        const fetchRazorpayKey = async () => {
            try {
                const keyResponse = await fetch('http://localhost:5000/apiTender/payment/razorpaykey');
                const keyData = await keyResponse.json();
                setKey(keyData.key);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchRazorpayKey();
    }, []);

    // const handlePaymentVerification = (response) => {
    //     fetch('http://localhost:5000/apiTender/payment/paymentverification', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             razorpay_signature: response.razorpay_signature,
    //             razorpay_payment_id: response.razorpay_payment_id,
    //             razorpay_subscription_id: response.razorpay_subscription_id,
    //             userId: '64931d77613025c8f18be44e' // replace with user._id, searching for object id
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             // {success: true, subscriptionStatus: 'active'}
    //             //now route based on payment varification
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };

    // const handleSubscription = async () => {
    //     try {
    //         const subscribeResponse = await fetch('http://localhost:5000/apiTender/payment/subscribe', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 id: '64931d77613025c8f18be44e', // replace with user._id, searching for object id
    //             }),
    //         });
    //         const subscriptionData = await subscribeResponse.json();
    //         if (subscriptionData) {
    //             const options = {
    //                 key: key,
    //                 subscription_id: subscriptionData.subscription.id,
    //                 name: "Tender",
    //                 description: "Monthly Plan",
    //                 handler: (response) => handlePaymentVerification(response),
    //                 theme: {
    //                     color: "#F37254"
    //                 }
    //             };
    //             var rzp = new window.Razorpay(options);
    //             rzp.open();
    //         }

    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    const [subscriptionType, setSubscriptionType] = useState('');
    const [stateNames, setStateNames] = useState([]);

    const handleSubscription = async () => {
        // Handle subscription logic based on the selected subscriptionType and stateNames
        console.log("Subscription type:", subscriptionType);
        console.log("State names:", stateNames);
        try {
            const subscribeResponse = await fetch('http://localhost:5000/apiTender/payment/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: '64931d77613025c8f18be44e', // replace with user._id, searching for object id
                }),
            });
            const subscriptionData = await subscribeResponse.json();
            if (subscriptionData) {
                console.log(subscriptionData);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleStateNameChange = (event, index) => {
        const updatedStateNames = [...stateNames];
        updatedStateNames[index] = event.target.value;
        setStateNames(updatedStateNames);
    };

    const handleSubscriptionTypeChange = (type) => {
        setSubscriptionType(type);
        setStateNames([]); // Reset state names when subscription type changes
    };

    useEffect(() => {
        handleSubscription();
    }, [subscriptionType, stateNames]);


    const renderStateInputs = () => {
        if (subscriptionType === 'OneState') {
            return (
                <div>
                    <label htmlFor="stateName">State Name:</label>
                    <input
                        type="text"
                        id="stateName"
                        value={stateNames[0] || ''}
                        onChange={(e) => handleStateNameChange(e, 0)}
                    />
                </div>
            );
        } else if (subscriptionType === 'FiveStates') {
            return (
                <div>
                    <label htmlFor="state1">State 1:</label>
                    <input
                        type="text"
                        id="state1"
                        value={stateNames[0] || ''}
                        onChange={(e) => handleStateNameChange(e, 0)}
                    />

                    {/* Repeat the input fields for the remaining four states */}
                    {/* ... */}
                </div>
            );
        } else {
            // For AllIndia and Global plans, display Subscription type only
            return (
                <div>
                    <p>Subscription type: {subscriptionType}</p>
                </div>
            );
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Subscribe Now</h2>

                <div className="grid grid-cols-2 gap-4">
                    {/* OneState Plan */}
                    <div className="border p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">OneState Plan</h3>
                        <p className="text-gray-600 mb-4">Enter state name:</p>
                        <button
                            className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                            onClick={() => handleSubscriptionTypeChange('OneState')}
                        >
                            Select
                        </button>
                    </div>

                    {/* FiveStates Plan */}
                    <div className="border p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">FiveStates Plan</h3>
                        <p className="text-gray-600 mb-4">Enter 5 state names:</p>
                        <button
                            className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                            onClick={() => handleSubscriptionTypeChange('FiveStates')}
                        >
                            Select
                        </button>
                    </div>

                    {/* AllIndia Plan */}
                    <div className="border p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">AllIndia Plan</h3>
                        <p className="text-gray-600 mb-4">All states included</p>
                        <button
                            className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                            onClick={() => {
                                handleSubscriptionTypeChange('AllIndia');
                                handleSubscription();
                            }} // Call handleSubscription directly
                        >
                            Select
                        </button>
                    </div>

                    {/* Global Plan */}
                    <div className="border p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">Global Plan</h3>
                        <p className="text-gray-600 mb-4">All countries included</p>
                        <button
                            className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                            onClick={() => {
                                handleSubscriptionTypeChange('Global');
                                handleSubscription();
                            }} // Call handleSubscription directly
                        >
                            Select
                        </button>
                    </div>
                </div>

                {/* Render the modal only for OneState and FiveStates */}
                {(subscriptionType === 'OneState' || subscriptionType === 'FiveStates') && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setSubscriptionType('')}>
                                &times;
                            </span>
                            {/* Render state inputs in the modal */}
                            {renderStateInputs()}
                            {/* Submit button */}
                            <button
                                className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mt-4"
                                onClick={handleSubscription}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default SubscribePage;