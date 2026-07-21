import { GithubLogo, LinkedinLogo, Envelope, FileText } from '@phosphor-icons/react'
import resumePdf from '../assets/Resume_AbiralShrestha.pdf'

export const socialLinks = [
  { label: 'Email', href: 'mailto:abiralstha333@gmail.com', icon: Envelope },
  { label: 'GitHub', href: 'https://github.com/Abiralstha99', icon: GithubLogo },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abiral-shrestha-/', icon: LinkedinLogo },
  { label: 'Resume', href: resumePdf, icon: FileText },
]
