import React, { FC, ReactElement } from 'react'
import { Avatar } from '@/components/ui/Avatar'
import Image from 'next/image'

interface AvatarGroupProps {
  avatars: string[]
}

export const AvatarGroup: FC<AvatarGroupProps> = ({
  avatars,
}): ReactElement => {
  return (
    <div className="flex -space-x-2">
      {avatars &&
        avatars.map((item, i) => <Avatar imgSrc={item} title={item} key={i} />)}
    </div>
  )
}
