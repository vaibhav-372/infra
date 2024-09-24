import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bg-[src('src/assets/footer.jpg')]">
                <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p class="font-medium">
                                    Quick links
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75 font-bold text-md cursor-pointer" href> Home </a>
                                    <a class="hover:opacity-75 font-bold text-md cursor-pointer" href> Gallery </a>
                                    <a class="hover:opacity-75 font-bold text-md cursor-pointer" href> Contact us </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium">
                                    Contact
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> Hotel kritunga street Opp to sitara hotel lane JN Road Rajahmundry</a>
                                    <a class="hover:opacity-75" href> +91 99999-99999 </a>
                                    <a class="hover:opacity-75" href> ******@gmail.com </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium">
                                    follow us
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> Instagram </a>
                                    <a class="hover:opacity-75" href> Facebook</a>
                                    <a class="hover:opacity-75" href> linkedIn </a>
                                    <a class="hover:opacity-75" href> X </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <p class="mt-8 text-xs text-gray-800">
                        © 2022 Comany Name
                    </p>
                </div>
            </footer>
            {/* <img src="src/assets/footer.jpg" alt="footer" className='relative w-screen h-72 '/> */}
        </div>
    )
}

export default Footer