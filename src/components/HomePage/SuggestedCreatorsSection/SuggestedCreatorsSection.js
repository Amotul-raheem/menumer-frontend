import React from 'react';
import SuggestedCreatorButton from './SuggestedCreatorButton'

function SuggestedCreatorsSection() {
    return(
        <div className='bg-comment h-auto text-center my-8 py-12'>
            <h1 className='font-amaticSc text-4xl text-[#CF5C36] p-8 '>SUGGESTED CREATORS</h1>
            <div className='flex justify-center flex-wrap px-24  mini-tablet:px-8 tablets:px-8'>
                <SuggestedCreatorButton
                    CreatorInitials={'AF'}
                    CreatorName={'Aaron Fillipe'}
                    Followers={'23k'}
                />
                <SuggestedCreatorButton
                    CreatorInitials={'AF'}
                    CreatorName={'Aaron Fillipe'}
                    Followers={'23k'}
                />
                <SuggestedCreatorButton
                CreatorInitials={'AF'}
                CreatorName={'Aaron Fillipe'}
                Followers={'23k'}
                />
                <SuggestedCreatorButton
                    CreatorInitials={'AF'}
                    CreatorName={'Aaron Fillipe'}
                    Followers={'23k'}
                />
                <SuggestedCreatorButton
                    CreatorInitials={'AF'}
                    CreatorName={'Aaron Fillipe'}
                    Followers={'23k'}
                />
                <SuggestedCreatorButton
                    CreatorInitials={'AF'}
                    CreatorName={'Aaron Fillipe'}
                    Followers={'23k'}
                />
                <SuggestedCreatorButton
                    CreatorInitials={'AF'}
                    CreatorName={'Aaron Fillipe'}
                    Followers={'23k'}
                />
            </div>

        </div>
    )
}

export default SuggestedCreatorsSection