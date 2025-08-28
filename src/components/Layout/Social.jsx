import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Social() {
    return (
        <div className='flex flex-col space-y-4 p-4'>
            <a href="https://github.com/Abiralstha99" target='_blank' rel='noopener noreferrer'>
                <GitHubIcon className='text-white hover:text-gray-400 transition-colors cursor-pointer' />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target='_blank' rel='noopener noreferrer'>
                <LinkedInIcon className='text-white hover:text-gray-400 transition-colors cursor-pointer' />
            </a>
            <a href="https://instagram.com/yourhandle" target='_blank' rel='noopener noreferrer'>
                <InstagramIcon className='text-white hover:text-gray-400 transition-colors cursor-pointer' />
            </a>
        </div>
    )
}

export default Social