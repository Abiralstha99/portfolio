import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Social() {
    return (
        <div className='flex flex-col items-center space-y-6'>
            <a href="https://github.com/Abiralstha99" target='_blank' rel='noopener noreferrer' style={{ outline: 'none' }}>
                <GitHubIcon className='text-white hover:text-gray-300 transition-colors cursor-pointer' fontSize='large' />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target='_blank' rel='noopener noreferrer' style={{ outline: 'none' }}>
                <LinkedInIcon className='text-white hover:text-gray-300 transition-colors cursor-pointer' fontSize='large' />
            </a>
            <a href="https://instagram.com/yourhandle" target='_blank' rel='noopener noreferrer' style={{ outline: 'none' }}>
                <InstagramIcon className='text-white hover:text-gray-300 transition-colors cursor-pointer' fontSize='large' />
            </a>
            {/* Vertical line extending down */}
            <div className='w-px h-32 bg-white opacity-30 mt-4'></div>
        </div>
    )
}

export default Social