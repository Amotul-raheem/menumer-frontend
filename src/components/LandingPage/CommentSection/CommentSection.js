import React from 'react';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import CommentCard from './CommentCard'
import profileImage from '../../../images/ProfileImage.png'
import '../../Commons/Carousel.css'

function CommentSection() {
    const carouselRef = React.useRef();

    const scroll = (direction) => {
        if (direction === 'left') {
            carouselRef.current.scrollBy({top: 0, left: -300, behavior: 'smooth'});
        } else {
            carouselRef.current.scrollBy({top: 0, left: 300, behavior: 'smooth'});
        }
    };
    return (
        <div className='bg-comment h-[500px] text-center mt-16'>
            <h1 className='font-amaticSc text-5xl text-[#CF5C36] p-10'>COMMENTS</h1>
            <div className='relative'>
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={() => scroll('left')}
                >
                    <FiChevronLeft className="text-3xl text-[#839788] hover:text-grey-900"/>
                </button>
                <div className="carousel mx-16" ref={carouselRef}>
                    <CommentCard
                        ProfileImage={profileImage}
                        Comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'}
                        Name={'Amotul-Hameed'}
                        Username={'@Ty_Princess'}
                    />
                    <CommentCard
                        ProfileImage={profileImage}
                        Comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'}
                        Name={'James Brown'}
                        Username={'@Ty_Princess'}
                    />
                    <CommentCard
                        ProfileImage={profileImage}
                        Comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'}
                        Name={'James Brown'}
                        Username={'@Ty_Princess'}
                    />
                    <CommentCard
                        ProfileImage={profileImage}
                        Comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'}
                        Name={'Amotul-Hameed'}
                        Username={'@Ty_Princess'}
                    />
                    <CommentCard
                        ProfileImage={profileImage}
                        Comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'}
                        Name={'Amotul-Hameed'}
                        Username={'@Ty_Princess'}
                    />
                    <CommentCard
                        ProfileImage={profileImage}
                        Comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'}
                        Name={'Amotul-Hameed'}
                        Username={'@Ty_Princess'}
                    />
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={() => scroll('right')}
                >
                    <FiChevronRight className="text-3xl text-[#839788] hover:text-grey-900"/>
                </button>

            </div>

        </div>
    )
}

export default CommentSection