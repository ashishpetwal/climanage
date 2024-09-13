'use client'
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar"
import { useStateContext } from "@/app/context/state"
import { getAgencyById } from "@/services/agency";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Details = () => {

    const { isCollapsed } = useStateContext();
    const router = useParams();
    const [agency, setAgency] = useState({});

    const handleChange = (e) => {
        setAgency({
            ...agency,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (router.details){
            getAgencyById(router.details).then((res) => {
                setAgency(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, []);

    return (
        <section className="relative flex justify-center md:justify-between lg:justify-start gap-8">
            <Navbar />
            <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""} mb-8`}>
                <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
                <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
                <Header />
                <section className="flex flex-col lg:flex-row gap-6 lg:gap-4 justify-start md:justify-between items-stretch md:items-start lg:items-center flex-wrap p-4">
                    <div className="flex items-center gap-3">
                        <Image src="/staredo.png" width={70} height={70} alt="staredo" className="rounded-lg" />
                        <div>
                            <h2 className="text-xl font-medium text-nowrap">{agency.businessName}</h2>
                            <p className="text-lg text-gray-500">{agency.email}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:flex items-center justify-between gap-4">
                        <div className="space-y-2 bg-[#C8FC74] p-3 rounded-lg shadow-lg">
                            <h3 className="text-sm">Profile Status</h3>
                            <select id="status" className="bg-[#13A757] bg-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-1.5">
                                <option selected>Active</option>
                                <option value="1">Inactive</option>
                            </select>
                        </div>
                        <div className="space-y-2 bg-[#736589] p-3 rounded-lg text-white shadow-lg">
                            <h3 className="text-sm">Subscription</h3>
                            <select id="subs" className="bg-[#d4d4d4] bg-opacity-20 text-white text-sm rounded-lg block w-full p-1.5">
                                <option className="bg-gray-500" selected>Advanced Plan</option>
                                <option className="bg-gray-500" value="1">Inactive</option>
                            </select>
                        </div>
                        <div className="space-y-2 bg-[#474747] p-3 rounded-lg shadow-lg">
                            <h3 className="text-sm text-white">Number of Clients</h3>
                            <div id="countries" className="bg-[#d4d4d4] bg-opacity-20 text-white text-sm rounded-lg block w-full p-1.5">
                                55
                            </div>
                        </div>
                        <div className="space-y-2 bg-white p-3 rounded-lg shadow-lg">
                            <h3 className="text-sm">Registered On</h3>
                            <div id="countries" className="bg-[#d4d4d4] bg-opacity-20 text-[#7b7b7b] text-sm rounded-lg block w-full p-1.5">
                                {agency.createdAt && new Date(agency.createdAt).toLocaleDateString('en-IN')}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white rounded-lg space-y-8 m-4 py-4">
                    <section className="p-4 mx-4">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-medium">Profile Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <label for="ownerFirstName" class="block mb-2 text-lg text-[#878787]">First name (Owner)</label>
                                    <input type="text" id="ownerFirstName" name="ownerFirstName" onChange={handleChange} value={agency.ownerFirstName} class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="ownerLastName" class="block mb-2 text-lg text-[#878787]">Last name (Owner)</label>
                                    <input type="text" id="ownerLastName" name="ownerLastName" onChange={handleChange} value={agency.ownerLastName} class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="phoneNumber" class="block mb-2 text-lg text-[#878787]">Phone</label>
                                    <input type="text" id="phoneNumber" name="phoneNumber" onChange={handleChange} value={agency.phoneNumber} class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Phone Number" required />
                                </div>

                                <form>
                                    <label for="entityType" class="block mb-2 text-lg text-[#878787]">Choose Type</label>
                                    <select id="entityType" name="entityType" onChange={handleChange} value={agency.entityType} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="AGENCY">AGENCY</option>
                                        <option value="FREELANCER">FREELANCER</option>
                                        <option value="COMPANY">COMPANY</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Business Name</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <div>
                                    <label for="email" class="block mb-2 text-lg text-[#878787]">Email</label>
                                    <input type="text" id="email" name="email" onChange={handleChange} value={agency.email} class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Enter Email" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Website</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Enter Website" required />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="p-4 mx-4 border-t">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-medium">Bank Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <form>
                                    <label for="isRegistered" class="block mb-2 text-lg text-[#878787]">Are you Registered</label>
                                    <select id="isRegistered" name="isRegistered" value={agency.isRegistered} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Payment Withdrawal via</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Bank</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Account Number</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Account Holder Name</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">IFSC Code</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">GST No.</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="p-4 mx-4 border-t">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-medium">Address:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <form>
                                    <label for="addressLine1" name="addressLine1" class="block mb-2 text-lg text-[#878787]">First Line</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Second Line</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">City</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">District</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Country</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">State</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Pincode</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787]">Payment Withdrawal via</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </section>
                    <div className="px-4 pb-4 mx-4">
                        <button type="button" class="text-[#424242] bg-[#B7FB49] w-full hover:bg-opacity-90 font-semibold rounded-lg text-lg py-4">Save</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Details;