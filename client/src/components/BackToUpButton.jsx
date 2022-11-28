import React,{useState, useEffect} from 'react'
import {FaChevronUp} from 'react-icons/fa';
import $ from "jquery";
function BackToUpButton() {
    const [backToUp, setBackToUp] = useState(false);

    useEffect(() => {
        $(window).on("scroll", () => {
            if($(window).scrollTop() > 40){
                setBackToUp(true);
            }else{
                setBackToUp(false);
            }
        })
    },[])

    const scrollToUp = () => {
        $('html, body').animate({ scrollTop: 0 }, 800);
    }
  return (
    <div>
        {
            backToUp && <FaChevronUp onClick={scrollToUp} className='fixed bottom-[50px] right-[50px] h-[50px] w-[50px] text-4xl bg-gray-300 rounded-full text-center text-[#e43500] cursor-pointer'/>
        }
    </div>
  )
}

export default BackToUpButton;