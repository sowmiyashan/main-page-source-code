import { useState } from "react"
import Header from "./Header"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Logo from './Logo/Logo'
import { Link } from "react-router-dom"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {



    return (
      <>
        <Header/>
        <div class="wrapper wrapper--minimal">

            <div class="profile-header">
                <h1>Login</h1>
                <h2>Awaiting Your Commands</h2>
            </div>

            <form>
                <div className=" sm:rounded-md sm:overflow-hidden">
                <div className=" py-5 bg-white space-y-6 ">
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 ">
                            <label htmlFor="email-address" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6 ">
                            <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="Password"
                                id="Password"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                    </div>
                </div>
                <div className="py-3 text-left ">
                    <button
                        // onClick={Next}
                        // type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Continue
                    </button>
                    &nbsp;&nbsp;
                    <Link
                        href="/login"
                        style={{color:'#1890ff'}}
                        // onClick={Next}
                        // type="submit"
                        // className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Forgot Password
                    </Link>
                </div>
                </div>
            </form>
        </div>
        <footer class="footer">
            <span>Copyright © 2021 Female Laboratory of Innovative Knowledge Inc.<br></br>
                <a href="https://weareflik.com" target="_blank" rel="noopener noreferrer">FLIK HOMEPAGE</a>
                <a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a>
            </span>
        </footer>
      </>
    )
}