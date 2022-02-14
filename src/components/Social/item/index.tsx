import React from 'react'
import { Link, IconButton } from '@chakra-ui/react'

type Props = {
  url: string
  socialIcon?: React.ReactElement
}

const Social: React.FC<Props> = ({ url, socialIcon }) => {
  return (
    <Link href={url} isExternal>
      <IconButton aria-label="Add to friends" icon={socialIcon} />
    </Link>
  )
}

export default Social
