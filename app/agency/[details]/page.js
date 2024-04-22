'use client'
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar"
import { useStateContext } from "@/app/context/state"
import Image from "next/image";

const Details = () => {

    const { isCollapsed } = useStateContext();

    return (
        <section className="relative flex justify-center md:justify-between lg:justify-start gap-8">
            <Navbar />
            <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""} mb-8`}>
                <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
                <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
                <Header />
                <section className="flex flex-col lg:flex-row gap-6 lg:gap-4 justify-start md:justify-between items-center md:items-start lg:items-center flex-wrap p-4 mx-1">
                    <div className="flex items-center gap-3">
                        <Image src="/staredo.png" width={60} height={60} alt="staredo" className="rounded-lg" />
                        <div>
                            <h2 className="text-xl font-medium text-nowrap">Staredo Digital Agency</h2>
                            <p className="text-lg text-gray-500">abc@domain.com</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:flex items-center justify-between gap-4">
                        <div className="space-y-2 bg-[#C8FC74] p-2 rounded-lg shadow-lg">
                            <h3 className="text-sm">Profile Status</h3>
                            <select id="status" className="bg-[#13A757] bg-opacity-30 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5">
                                <option selected>Active</option>
                                <option value="1">Inactive</option>
                            </select>
                        </div>
                        <div className="space-y-2 bg-[#736589] p-2 rounded-lg text-white shadow-lg">
                            <h3 className="text-sm">Subscription</h3>
                            <select id="subs" className="bg-[#d4d4d4] bg-opacity-20 text-white text-sm rounded-lg block w-full p-1.5">
                                <option className="bg-gray-500" selected>Advanced Plan</option>
                                <option className="bg-gray-500" value="1">Inactive</option>
                            </select>
                        </div>
                        <div className="space-y-2 bg-[#474747] p-2 rounded-lg shadow-lg">
                            <h3 className="text-sm text-white">Number of Clients</h3>
                            <div id="countries" className="bg-[#d4d4d4] bg-opacity-20 text-white text-sm rounded-lg block w-full p-1.5">
                                55
                            </div>
                        </div>
                        <div className="space-y-2 bg-white p-2 rounded-lg shadow-lg">
                            <h3 className="text-sm">Registered On</h3>
                            <div id="countries" className="bg-[#d4d4d4] bg-opacity-20 text-[#7b7b7b] text-sm rounded-lg block w-full p-1.5">
                                Apr 9, 2024
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white rounded-lg space-y-8 m-4 py-4">
                    <section className="p-4 mx-4">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-medium">Profile Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">First name (Owner)</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Last name (Owner)</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Phone</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Phone Number" required />
                                </div>

                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Choose Type</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Business Name</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Email</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Enter Email" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Website</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Enter Website" required />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="p-4 mx-4 border-t">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-medium">Bank Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Are you Registered</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Payment Withdrawal via</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Bank</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Account Number</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Account Holder Name</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">IFSC Code</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">GST No.</label>
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
                            <h3 className="text-3xl font-medium">Address:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">First Line</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Second Line</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">City</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">District</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Country</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">State</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Pincode</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Payment Withdrawal via</label>
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
                    <div className="px-4 mx-4">
                        <button type="button" class="text-[#424242] bg-[#B7FB49] w-full hover:bg-opacity-90 font-semibold rounded-lg text-lg py-4">Save</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Details;