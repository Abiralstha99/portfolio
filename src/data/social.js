import { Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/icons.jsx'
import resumePdf from '../assets/Resume_AbiralShrestha.pdf'

export const socialLinks = [
  { label: 'Email', href: 'mailto:abiralstha333@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Abiralstha99', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abiral-shrestha-/', icon: LinkedinIcon },
  { label: 'Resume', href: resumePdf, icon: FileText },
]
