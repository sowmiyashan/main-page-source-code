import { useState } from "react";
import Header from "./Header";
import del from '../delete1.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Logo from './Logo/Logo'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SignUp() {
    const [page , setPage] = useState(0)

    // const [fname , setFname] = useState('')
    // const [lname , setLname] = useState('')
    // const [email , setEmail] = useState('')
    // const [pswd , setPswd] = useState('')
    // const [terms, setTerms] = useState(false)
    // const [age, setAge] = useState(false)

    const [para , setPara] = useState('apprentice')
    const [edu, setEdu] = useState([])
    const [org, setOrg] = useState([])

    const addEdu = (e) => {
        setEdu((arr) => [...arr,edu.length])
        console.log(edu)
        e.preventDefault()
    }

    const delEdu = (value) =>{
        setEdu(edu.filter((obj) => obj != value))
    }

    const addOrg = (e) => {
        setOrg((arr) => [...arr,org.length])
        console.log(org)
        e.preventDefault()
    }

    const delOrg = (value) =>{
        setOrg(org.filter((obj) => obj != value))
    }

    const SetRole = (value) => {
        if(value == 'apprentice'){
            let element = document.getElementById('founder')
            element.classList.remove("type-select-is-selected")
        }
        else{
            let element = document.getElementById('apprentice')
            element.classList.remove("type-select-is-selected")
        }
        setPara(value)
        let ele = document.getElementById(value)
        ele.classList.add("type-select-is-selected")
    }

    const Next = (e) => {
        setPage(page+1)
        let ele = document.getElementsByClassName('ant-steps-item-wait')
        ele[0].className = 'ant-steps-item ant-steps-item-process ant-steps-item-active'
        e.preventDefault()
    }

    


    return (
      <>
        <Header/>
        <div class="wrapper wrapper--minimal">
            <div class="ant-steps ant-steps-horizontal ant-steps-label-horizontal" style={{marginTop:'24px'}}>
                <div class="ant-steps-item ant-steps-item-process ant-steps-item-active">
                    <div class="ant-steps-item-container">
                        <div class="ant-steps-item-tail"></div>
                        <div class="ant-steps-item-icon">
                            <span class="ant-steps-icon">1</span>
                        </div>
                        <div class="ant-steps-item-content">
                            <div class="ant-steps-item-title">Account</div>
                        </div>
                    </div>
                </div>
                <div class="ant-steps-item ant-steps-item-wait">
                    <div class="ant-steps-item-container">
                        <div class="ant-steps-item-tail"></div>
                        <div class="ant-steps-item-icon">
                            <span class="ant-steps-icon">2</span>
                        </div>
                        <div class="ant-steps-item-content">
                            <div class="ant-steps-item-title">Profile Select</div>
                        </div>
                    </div>
                </div>
                <div class="ant-steps-item ant-steps-item-wait ant-steps-item-disabled">
                    <div class="ant-steps-item-container">
                        <div class="ant-steps-item-tail"></div>
                        <div class="ant-steps-item-icon">
                            <span class="ant-steps-icon">3</span>
                        </div>
                        <div class="ant-steps-item-content">
                            <div class="ant-steps-item-title">Details</div>
                        </div>
                    </div>
                </div>
            </div>

            {
                page == 0 ? (
                    <>
                    <div class="profile-header">
                        <h1>Well hello there!</h1>
                        <h2>Let’s start with the basics.</h2>
                    </div>

                    <form>
                        <div className=" sm:rounded-md sm:overflow-hidden">
                        <div className=" py-5 bg-white space-y-6 ">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="country" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Preferred Pronouns
                                    </label>
                                    <select
                                        id="pronoun"
                                        name="pronoun"
                                        // autoComplete="country"
                                        defaultValue=''
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Select Value</option>
                                        <option>She/Her/Hers</option>
                                        <option>They/Them/Their</option>
                                        <option>Let me specify</option>
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="Password"
                                        name="pswd"
                                        id="pswd"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="Password"
                                        name="Cpswd"
                                        id="Cpswd"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <fieldset>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="terms"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="comments" className="font-medium text-gray-700">
                                                    I accept the terms and Conditions *
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="age"
                                                    name="age"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="candidates" className="font-medium text-gray-700">
                                                    I confirm I am over the age of 16 *
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="policy"
                                                    name="policy"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                    I accept the usage of anonymous metrics collected from my FLIK account. For more information about this, go to Privacy Policy.
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>

                                </div>
                            </div>
                        </div>
                        <div className="py-3 text-right">
                            <button
                                onClick={Next}
                                // type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            Continue
                            </button>
                        </div>
                        </div>
                    </form>

                    </>
                ) : page == 1 ? (
                    <>
                    <div class="profile-header">
                        <h1>More than half-way there!</h1>
                        <h2>Which best describes you?</h2>
                    </div>

                    <div class="profile-form">
                        <div class="ant-row" style={{marginLeft:'-12px', marginRight: '-12px', rowGap: '0px'}}>
                            <div class="ant-col ant-col-xs-24 ant-col-md-12" style={{paddingLeft: '12px', paddingRight: '12px'}}>
                                <div onClick={() => SetRole("apprentice")} id="apprentice" class="ant-card ant-card-bordered ant-card-hoverable type-select type-select-is-selected">
                                    <div class="ant-card-head">
                                        <div class="ant-card-head-wrapper">
                                            <div class="ant-card-head-title">Apprentice</div>
                                        </div>
                                    </div>
                                    <div class="ant-card-body">
                                        <p>Work with a visionary women and get work experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-col ant-col-xs-24 ant-col-md-12" style={{paddingLeft: '12px', paddingRight: '12px'}}>
                                <div onClick={() => SetRole("founder")} id="founder" class="ant-card ant-card-bordered ant-card-hoverable type-select false">
                                    <div class="ant-card-head">
                                        <div class="ant-card-head-wrapper">
                                            <div class="ant-card-head-title">Founder / Leader</div>
                                        </div>
                                    </div>
                                    <div class="ant-card-body">
                                        <p>Get meaningful help on projects from an apprentice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            para == "apprentice" ? (
                                <div class="profile-type-description">
                                    <p>Gain valuable experience under a visionary women in any field you 
                                        want to learn about and feel you can add value to. You can absolutely 
                                        work or study full time along with completing the apprenticeship and 
                                        building your resume. Here is where your impact begins. You are in 
                                        control of your trajectory to success.
                                    </p>
                                </div>
                            ): (
                                <div class="profile-type-description">
                                    <p>As a business fenom you can bring on an apprentice to help your
                                        business and projects grow. You get to provide this future fenom 
                                        with real-world experience and new skills she will use to create 
                                        global impact. You can even take on more than one apprentice! 
                                        After the apprenticeship, you can either hire her or take on a new one. 
                                        Either way, your impact will be felt.
                                    </p>
                                </div>
                            )
                        }
                        
                        
                        <div className=" py-3 text-right ">
                            <button
                                onClick={Next}
                                // type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            Continue
                            </button>
                        </div>
                    </div>

                    </>
                ) : page == 2 ? (
                    <>
                    <div class="profile-header">
                        <h1>Final step! Go human go.</h1>
                        <h2>A few fancy details.</h2>
                    </div>
                    <div class="profile-form">
                        <p style={{opacity:1,fontSize: '16px', paddingTop: '48px', paddingBottom: '52px', display: 'block'}}>
                            Curious about how this all works?<br></br>
                            <a style={{color:'#9b7df4'}} href="https://weareflik.com/verify" target="_blank" rel="noopener noreferrer">Learn more </a> 
                            about the FLIK approval and verification process.
                        </p>
                    </div>

                    <form>
                        <h3 style={{opacity:1}}>Tell us about you!</h3>
                        <div className=" sm:rounded-md sm:overflow-hidden">
                        <div className=" py-5 bg-white space-y-6 ">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">Profile Picture</label>
                                    <Logo />
                                </div>

                                <div className="col-span-6 ">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                        Headline
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label htmlFor="city" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="state" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="postal-code" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Region
                                    </label>
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                
                                <label htmlFor="postal-code" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                    Resume(Recommended)
                                </label>
                                <div class="col-span-6  flex w-full items-center bg-grey-lighter">
                                    
                                    <label style={{gap:"12px"}} class=" flex flex-row items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer ">
                                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span class="mt-2 text-base leading-normal">Select a file</span>
                                        <input type='file' class="hidden" />
                                    </label>
                                </div>

                                <div className="col-span-6"> 
                                    <label htmlFor="about" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                    Bio (Max 300 words)
                                    </label>
                                    <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={10}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="you@example.com"
                                        defaultValue={''}
                                    />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Don’t know what to write? Maybe try talking 
                                        about what you do and your top accomplishments. 
                                        What are you passionate about? What are you looking 
                                        to learn? Write anything!
                                    </p>
                                </div>

                                <div className="col-span-6 ">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                        Languages
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>


                                <div className="col-span-6 ">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Industries Interested In
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>


                                <div className="col-span-6 ">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Fun Facts About You
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Things You Love!
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        In your own words, what is your ideal apprenticeship? 
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        How did you hear about us? Select all that apply.
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <h3 style={{opacity:1}}>Any fancy skills?</h3>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                        Current Soft Skills 
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Current Hard Skills 
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Desired Soft Skills 
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Desired Hard Skills 
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <h3 style={{opacity:1}}>Let's get social!</h3>
                                </div>

                                <div className="col-span-3 sm:col-span-3">
                                    <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        LinkedIn
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        linkedin.com/in/
                                        </span>
                                        <input
                                        type="text"
                                        name="company-website"
                                        id="company-website"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder="LinkedIn"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3 sm:col-span-3">
                                    <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                        Website
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            https://
                                        </span>
                                        <input
                                        type="text"
                                        name="company-website"
                                        id="company-website"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder="Website"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3 sm:col-span-3">
                                    <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                        Instagram
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            instagram.com/
                                        </span>
                                        <input
                                        type="text"
                                        name="company-website"
                                        id="company-website"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder="Instragram"
                                        />
                                    </div>
                                </div>


                                <div className="col-span-3 sm:col-span-3">
                                    <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                    Twitter
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        twitter.com/
                                        </span>
                                        <input
                                        type="text"
                                        name="company-website"
                                        id="company-website"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder="Twitter"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 ">
                                    <h3 style={{opacity:1}}>
                                        Where did you go to school?
                                    </h3>
                                </div>


                                {
                                    edu.map((obj) => {
                                        return(
                                            <>
                                            <div className="col-span-6 flex flex-row justify-between">
                                                <div className="py-3 text-left">
                                                    NEW ENROLLMENT
                                                </div>
                                                <div className="py-3 text-right">
                                                    <img style={{cursor:'pointer'}} 
                                                    onClick={() =>delEdu(obj)}
                                                    src={del} width="15px" height="15px"/>
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label htmlFor="city" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                    Type
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="state" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                    Grad Year
                                                </label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    id="state"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="postal-code" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                    School
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 ">
                                                <fieldset>
                                                    <div className=" space-y-4">
                                                        <div className="flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="terms"
                                                                    name="terms"
                                                                    type="checkbox"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                />
                                                                </div>
                                                                <div className="ml-3 text-sm">
                                                                <label htmlFor="comments" className="font-medium text-gray-700">
                                                                    Highlight this on my profile
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            </>
                                        );
                                    })
                                }
                                

                                <div className="col-span-6 ">
                                    <div className="py-3 text-right">
                                        <button
                                            onClick={addEdu}
                                            className="inline-flex justify-center py-2 px-4 border  shadow-sm  font-medium rounded-md "
                                        >
                                        Add Education
                                        </button>
                                    </div>
                                </div>

                                {
                                    para == "founder" ? (
                                        <>
                                        <div className="col-span-6 ">
                                            <h3 style={{opacity:1}}>
                                                What organizations do you represent?
                                            </h3>
                                        </div>


                                        {
                                            org.map((obj) => {
                                                return(
                                                    <>

                                                    <div className="col-span-6 flex flex-row justify-between">
                                                        <div className="py-3 text-left">
                                                            NEW ORGANIZATION
                                                        </div>
                                                        <div className="py-3 text-right">
                                                            <img style={{cursor:'pointer'}} 
                                                            onClick={() =>delOrg(obj)}
                                                            src={del} width="15px" height="15px"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">Logo (Max 8MB)</label>
                                                        <Logo />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            Organization Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            Your Position 
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6"> 
                                                        <label htmlFor="about" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                                        Description
                                                        </label>
                                                        <div className="mt-1">
                                                        <textarea
                                                            id="about"
                                                            name="about"
                                                            rows={5}
                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                            placeholder="Description"
                                                            defaultValue={''}
                                                        />
                                                        </div>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            One-Liner 
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            Legal Status
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            Industries
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            Number of Employees
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                        Company Stage
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <p style={{opacity:1}}>AROUND THE WEB</p>
                                                    </div>

                                                    <div className="col-span-3 sm:col-span-3">
                                                        <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            LinkedIn
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                            linkedin.com/in/
                                                            </span>
                                                            <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                            placeholder="LinkedIn"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-span-3 sm:col-span-3">
                                                        <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                                            Website
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                                https://
                                                            </span>
                                                            <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                            placeholder="Website"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-span-3 sm:col-span-3">
                                                        <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                            Instagram
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                                instagram.com/
                                                            </span>
                                                            <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                            placeholder="Instragram"
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="col-span-3 sm:col-span-3">
                                                        <label htmlFor="company-website" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block font-medium text-gray-700">
                                                        Twitter
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                            twitter.com/
                                                            </span>
                                                            <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                            placeholder="Twitter"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <p style={{opacity:1}}>WHAT'S YOUR MISSION</p>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                        Which of these issues do you actively or plan to track your contributions towards?
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                        Which of these sustainability and development goals do you actively or plan to track your contributions towards?
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <p style={{opacity:1}}>ADDITIONAL ONBOARDING QUESTIONS</p>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                        What are some of your biggest challenges when it comes to hiring high-quality talent?
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="last-name" style={{marginBottom:'4px', fontWeight:'bolder'}} className="block  font-medium text-gray-700">
                                                        Are you currently looking to bring on an apprentice for a COVID-19 related project?
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <fieldset>
                                                            <div className=" space-y-4">
                                                                <div className="flex items-start">
                                                                    <div className="flex items-center h-5">
                                                                        <input
                                                                            id="terms"
                                                                            name="terms"
                                                                            type="checkbox"
                                                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                        />
                                                                        </div>
                                                                        <div className="ml-3 text-sm">
                                                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                                                        Make this my primary organization
                                                                        </label>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </div>




                                                    </>
                                                );
                                            })
                                        }

                                    
                                        <div className="col-span-6 ">
                                            <div className="py-3 text-right">
                                                <button
                                                    onClick={addOrg}
                                                    className="inline-flex justify-center py-2 px-4 border  shadow-sm  font-medium rounded-md "
                                                >
                                                Add Organizations
                                                </button>
                                            </div>
                                        </div>
                                        </>
                                    ) : ('')
                                }

                                



                                {/* <br></br> */}

                                <div className="col-span-6 ">
                                    <h3 style={{opacity:1}}>
                                        {
                                            para == "apprentice" ? (
                                            "As a apprentice, you agree that:"
                                            ) : (
                                            "As a founder, you agree that:"
                                            ) 
                                        }
                                    
                                    </h3>
                                </div>
                                <div className="col-span-6 ">
                                    <fieldset>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="terms"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="comments" className="font-medium text-gray-700">
                                                {
                                                    para == "apprentice" ? (
                                                    "FLIK is not your employer"
                                                    ) : (
                                                    "FLIK is a platform that facilitates connections, not a program that guarantees mentorship-first apprenticeships"
                                                    ) 
                                                }
                                                
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="age"
                                                    name="age"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="candidates" className="font-medium text-gray-700">

                                                {
                                                    para == "apprentice" ? (
                                                    "FLIK is not providing you with legal advice"
                                                    ) : (
                                                    "FLIK is not providing legal advice"
                                                    ) 
                                                }
                                                
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="policy"
                                                    name="policy"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                {
                                                    para == "apprentice" ? (
                                                    "FLIK is a platform that facilitates connections, not a program that guarantees mentorship-first apprenticeships"
                                                    ) : (
                                                    "FLIK suggests you engage in a maximum of three simultaneous confirmed matches at one time"
                                                    ) 
                                                }
                                                
                                                </label>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="policy"
                                                    name="policy"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                {
                                                    para == "apprentice" ? (
                                                    "FLIK suggests you engage in no more than two confirmed matches at one time"
                                                    ) : (
                                                    "The focus of an apprenticeship should be mentorship, and apprentices may expect to gain value through meaningful mentorship from you and your team"
                                                    ) 
                                                }
                                                
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="policy"
                                                    name="policy"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                {
                                                    para == "apprentice" ? (
                                                    "FLIK suggests that mentorship-first apprenticeships be 10 hours a week or less under a female leader for a 3-month term"
                                                    ) : (
                                                    "FLIK suggests that apprenticeships be up to 10 hours or less for a 3 month term"
                                                    ) 
                                                }
                                               
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="policy"
                                                    name="policy"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                {
                                                    para == "apprentice" ? (
                                                    "You will seek your own independent legal advice concerning the legalities of your relationship with the female leader and/or their company under the apprenticeship"
                                                    ) : (
                                                    "Apprentices are not here to fill positions or displace employment. Apprentices help on projects to gain skills training and meaningful mentorship."
                                                    ) 
                                                }
                                                
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="policy"
                                                    name="policy"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                {
                                                    para == "apprentice" ? (
                                                    "You’ve perfected your profile to get the best match. If you need tips: https://www.weareflik.com/verify"
                                                    ) : (
                                                    "Apprentices may be entitled to be paid for work performed for you during the apprenticeship, depending on applicable laws and local jurisdictions. Certain jurisdictions may require apprentices to be paid; it is your responsibility to comply with the local laws and regulations of your jurisdiction."
                                                    ) 
                                                }
                                                
                                                </label>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                <input
                                                    id="policy"
                                                    name="policy"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                {
                                                    para == "apprentice" ? (
                                                    "You’re excited to gain valuable experience in an industry you love with the mentorship of an amazing female leader!"
                                                    ) : (
                                                    "FLIK is not the employer of the apprentice and has no responsibility for the relationship of the individuals who are matched, particularly concerning any legalities of the apprenticeship relationship."
                                                    ) 
                                                }
                                                </label>
                                                </div>
                                            </div>

                                            {
                                                para == "apprentice" ? (
                                                <></>
                                                ) : (
                                                <>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                    <input
                                                        id="policy"
                                                        name="policy"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                    You are solely responsible for complying with applicable laws regarding your relationship with your apprentice.
                                                    </label>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                    <input
                                                        id="policy"
                                                        name="policy"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                    FLIK is not responsible for the actions of the apprentice as further described in the Terms and Conditions.
                                                    </label>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                    <input
                                                        id="policy"
                                                        name="policy"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                    You’re excited to mentor young women and have them train alongside you as you accelerate your business as a powerful woman!
                                                    </label>
                                                    </div>
                                                </div>
                                                </>
                                                ) 
                                            }
                                        </div>
                                    </fieldset>
                                </div>

                            </div>
                        </div>
                        <div className="py-3 text-right">
                            <button
                                // onClick={Next}
                                // type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            Save
                            </button>
                        </div>
                        </div>
                    </form>

                    

                    </>
                ) : ('')
            }


            
        </div>
      </>
    )
}