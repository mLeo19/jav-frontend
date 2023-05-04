import Link from 'next/link'
import React from 'react'
import { PortableText } from '@portabletext/react'

const Service = ({ service: { name, slug, link, description, image } }) => {
  return (
    <div>
      <Link href={link ? `/${link}` : `/service/${slug.current}`}>
        <div>
          <div>image</div>
          <p>{name}</p>
          <div>
            <PortableText value={description} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Service