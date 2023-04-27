import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/client'
import Image from 'next/image'

const Project = ({ project: { name, slug, description, image } }) => {
  return (
    <div>
      {/* The Link should lead to a dynamic project route using slug */}
      <Link href='/'>
        <div>
          <Image
            src={urlFor(image && image[0]).url()}
            width={250}
            height={250}
          />
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Project