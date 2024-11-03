import Image from "next/image";
import simplecalculator from "../../../public/simplecalculator.jpg";
import atmmachine from "../../../public/atmmachine.jpg";
import studentmanagement from "../../../public/studentmanagement.png";
import numberguessinggame from "../../../public/numberguessinggame.png";
import countdowntimer from "../../../public/countdowntimer.jpg";
import currencyconverter from "../../../public/currencyconverter.jpg";
import Button from "@/components/button";

function Projects(){
    return (
    <div className="bg-[#3b2930] lg:px-32 md:px-4 h-auto min-h-screen">
        <h1 className="text-white text-3xl text-center sm:text-start md:text-4xl font-semibold pt-20 md:pt-32">My Projects</h1>
        <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mt-20">
            <div className="card w-[70%] sm:w-full mx-auto sm:mx-0 bg-[url('/bg.png')] border-2 rounded-lg border-[#d58952] ">
                <Image src={simplecalculator} alt="simple calculator" className="w-[30px] h-[30px] rounded-full border-white mx-auto mt-5"/>
                <h2 className="text-center text-white text-lg font-semibold pt-2">Simple Calculator</h2>  
                <p className="text-white text-center pt-2">A simple CLI calculator project for performing basic arithmetic operations efficiently in the terminal.</p> 
            </div>
            <div className="card w-[70%] sm:w-full mx-auto sm:mx-0 bg-[url('/bg.png')] border-2 rounded-lg border-[#d58952]">
                <Image src={atmmachine} alt="atm machine" className="w-[30px] h-[30px] rounded-full border-white mx-auto mt-5"/>
                <h2 className="text-center text-white text-lg font-semibold pt-2">ATM Machine</h2>
                <p className="text-white text-center pt-2">An interactive CLI ATM machine project simulating banking operations like balance checks, deposits, and withdrawals for a user-friendly command-line experience.</p>
            </div>
            <div className="card w-[70%] sm:w-full mx-auto sm:mx-0 bg-[url('/bg.png')] border-2 rounded-lg border-[#d58952]">
                <Image src={studentmanagement} alt="student management system" className="w-[30px] h-[30px] rounded-full border-white mx-auto mt-5"/>
                <h2  className="text-center text-white text-lg font-semibold pt-2">Student Management System</h2>
                <p className="text-white text-center pt-2">Effortlessly manage student records, grades, and attendance with a streamlined CLI Student Management System.</p> 
            </div>
            <div className="card w-[70%] sm:w-full mx-auto sm:mx-0 bg-[url('/bg.png')] border-2 rounded-lg border-[#d58952]">
                <Image src={numberguessinggame} alt="number guessing game" className="w-[30px] h-[30px] rounded-full border-white mx-auto mt-5"/>
                <h2  className="text-center text-white text-lg font-semibold pt-2">Number Guessing Game</h2> 
                <p className="text-white text-center pt-2">Challenge your intuition with this CLI-based Number Guessing Game, where you guess the hidden number within a range and receive instant feedback until you crack the code.</p>
            </div>
            <div className="card w-[70%] sm:w-full mx-auto sm:mx-0 bg-[url('/bg.png')] border-2 rounded-lg border-[#d58952]">
                <Image src={countdowntimer} alt="countdown timer" className="w-[30px] h-[30px] rounded-full border-white mx-auto mt-5"/>
                <h2 className="text-center text-white text-lg font-semibold pt-2">CountDown Timer</h2>
                <p className="text-white text-center pt-2">A CLI countdown timer that precisely tracks and displays time remaining, helping you stay on schedule effortlessly.</p>
            </div>
            <div className="card w-[70%] sm:w-full mx-auto sm:mx-0 bg-[url('/bg.png')] border-2 rounded-lg border-[#d58952]">
                <Image src={currencyconverter} alt="Currency converter" className="w-[30px] h-[30px] rounded-full border-white mx-auto mt-5"/>
                <h2 className="text-center text-white text-lg font-semibold pt-2" > Currency Converter</h2> 
                <p className="text-white text-center pt-2">Effortlessly convert currencies from the CLI with real-time rates using this CLI Currency Converter.</p>
            </div>
        </div>
        <div className="-translate-y-6 text-center">
            <Button text="More Projects"/>
        </div>
    </div>
    )
}

export default Projects