import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Members = () => {
    const [searchMemberId, setSearchMemberId] = useState('');
    const [addPayment, setAddPayment] = useState(false);
    const [memberId, setMemberId] = useState('');
    const [paidState, setPaidState] = useState('');
    const [amount, setAmount] = useState('');
    const [memberDetails, setMemberDetails] = useState(null);
    const [members, setMembers] = useState([]);


    const url = "http://localhost:4000/member/"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const fetchedMember = response.data;
                setMembers(fetchedMember);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);




    const handleDelete = async (memberID) => {
        try {
            const response = await axios.delete(`http://localhost:4000/member/${memberID}`);
            if (response.status === 200) {
                // Package deleted successfully, update your UI or show a message
                alert('Package deleted successfully');

                // Update the local state to remove the deleted package
                setMembers((preMember) => preMember.filter((pkg) => pkg.memberID !== memberID));
            }
        } catch (error) {
            console.log(error);
            alert('Failed to delete Coach');
        }
    };





    const handleSearch = () => {
        
        const foundMember = members.find((member) => member.memberID === searchMemberId);
        setAddPayment(false);
        setMemberDetails(foundMember);
    };

    const handleAddPayment = () => {
        
        setAddPayment(true);
    };

    const handlePaymentSubmit = async () => {
        const url2 = `http://localhost:4000/members/${memberId}`;

        
    
        try {
            const response = await axios.put(url2, {
                paid: paidState,
                paidAmount: amount,
            });
    
            if (response.status === 200) {
                alert('Payment successfully updated');
                setPaidState(''); // Clear the input fields
                setAmount('');
                setAddPayment(false);
            }
        } catch (error) {
            console.error('Failed to update paid info', error);
            // Handle the error, e.g., display an error message to the user.
        }
    };
    



    return (
        <div className="p-4 ">
            <h1 className="text-2xl font-bold mb-4">Members</h1>
            <div className="flex space-x-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleSearch}
                >
                    Search
                </button>
                <input
                    type="text"
                    placeholder="Member ID"
                    value={searchMemberId}
                    onChange={(e) => setSearchMemberId(e.target.value)}
                    className="p-2 border rounded"
                />
                <Link to="/editmembers" className="flex-left">
                    <button
                        className="font-bold bg-slate-800 text-gray-100 px-4 py-2 ml-auto"
                    >
                        Add New Member
                    </button>
                </Link>

            </div>
            {memberDetails && (
                <div className="mt-4 border p-4">
                    <h2 className="text-lg font-semibold mb-2">Member Details</h2>
                    <div className="flex space-x-4">
                        <div>
                            <Link to={`/member-profile/${memberDetails.memberID}`}>
                                <img
                                    src={memberDetails.profile}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                />
                            </Link>
                        </div>
                        <div>
                            <div className="font-semibold">Name:</div>
                            {`${memberDetails.firstName} ${memberDetails.lastName}`}
                        </div>
                        <div>
                            <div className="font-semibold">Member ID:</div>
                            {memberDetails.memberID}
                        </div>
                        <div>
                            <div className="font-semibold">Paid State:</div>
                            {memberDetails.paid}
                        </div>
                    </div>
                </div>
            )}
            <div className="mt-4 flex justify-between">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={handleAddPayment}
                >
                    Add Payment
                </button>
                {addPayment && (
                    <div className="space-x-2">
                        <input
                            type="text"
                            placeholder="Member ID"
                            value={memberId}
                            onChange={(e) => setMemberId(e.target.value)}
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Paid State (Yes/No)"
                            value={paidState}
                            onChange={(e) => setPaidState(e.target.value)}
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="p-2 border rounded"
                        />
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={handlePaymentSubmit()}
                        >
                            Submit Payment
                        </button>
                    </div>
                )}
            </div>
            <div className="mt-4 border p-4 md-5">
                <h2 className="text-lg font-semibold mb-2">Member List</h2>
                <div className="flex space-x-4 text-sm font-semibold flex-center">
                    <div className="w-1/4 font-bold mb-3">Profile</div>
                    <div className="w-1/4">
                        <div className="font-bold ">Name</div>
                    </div>
                    <div className="w-1/4 font-bold">
                        <div className="font-bold">Member ID</div>
                    </div>
                    <div className="w-1/4">
                        <div className="font-bold">Paid State</div>
                    </div>
                    <div className="w-1/4"></div>
                </div>
                {members.map((member) => (
                    <div key={member.memberID} className="flex space-x-4 md-15">
                        <div className="w-1/4">
                            <Link to={`/member-profile/${member.memberID}`}>
                                <img
                                    src={member.profile}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                />
                            </Link>
                        </div>
                        <div className="w-1/4">
                            {`${member.firstName} ${member.lastName}`}
                        </div>
                        <div className="w-1/4">{member.memberID}</div>
                        <div className="w-1/4">{member.paid}</div>
                        <div className="w-1/4">
                            <button
                                className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                                onClick={() => handleDelete(member.memberID)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
