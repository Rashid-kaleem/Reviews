import { useState } from 'react';
import people from './Data'; 
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Review = () =>{

    const[index,setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    const checkNumber = (number) =>{
        if(number > people.length-1)
            return 0

        if(number < 0)
        return people.length - 1

        return number;

    }


    const nextBtnHandler = () =>{
        setIndex(()=>{
            const nextIndex = index + 1;
            return checkNumber(nextIndex);
        })
    }

    const prevBtnHandler = () =>{
        setIndex(()=>{
            const nextIndex = index - 1;
            return checkNumber(nextIndex);
        })
    }

    const randomBtn = () =>{
        let random = Math.floor(Math.random() * people.length);

        if(random === index){
            random = index + 1
        }

        setIndex(checkNumber(random));
    }

    

    return(
        <article className='review'>
            <div className='img-container'>
            <img src={image} alt={name} className='person-img'></img>
            <span className='quote-icon'>
                <FaQuoteRight className='icon'></FaQuoteRight>
            </span>
            </div>
            <h3 className='author'>{name}</h3>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className='button-container'>
                <button className='prev-btn' onClick={nextBtnHandler}>
                   <FaChevronLeft></FaChevronLeft>
                </button>
                <button className='next-btn' onClick={prevBtnHandler}>
                    <FaChevronRight></FaChevronRight>
                </button>
            </div>
            <button className='random-btn' onClick={randomBtn}>surprise me</button>
            

        </article>
    )
}

export default Review;