import React from 'react';
import FeedbackList from './FeedbackList';
import FeedbackStats from './FeedbackStats';
import FeedbackForm from './FeedbackForm';
import { FeedbackProvider } from '../context/FeedbackContext'

function HomePage() {


    return(
        <FeedbackProvider>
            <>
                <FeedbackForm
                />
                <FeedbackStats
                />
                <FeedbackList 
                />
            </>
        </FeedbackProvider>
    )
}

export default HomePage;
