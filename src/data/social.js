import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import resumePdf from '../assets/Resume_AbiralShrestha.pdf'

export const socialLinks = [
  { label: 'Email', href: 'mailto:abiralstha333@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Abiralstha99', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abiral-shrestha-/', icon: Linkedin },
  { label: 'Resume', href: resumePdf, icon: FileText },
]
